package com.example.yumfilm.controller;

import com.example.yumfilm.Dto.InvoiceDTO;
import com.example.yumfilm.Dto.PaymentResDTO;
import com.example.yumfilm.Dto.PaymentSuccessDTO;
import com.example.yumfilm.config.VNPayConfig;
import com.example.yumfilm.model.*;
import com.example.yumfilm.repository.FoodRepository;
import com.example.yumfilm.repository.SeatLocationRepository;
import com.example.yumfilm.repository.ShowTimeRepository;
import com.example.yumfilm.responses.ShowTimeListRepository;
import com.example.yumfilm.service.PaymentService;
import com.example.yumfilm.service.VNPayService;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.io.IOException;
import java.net.URLEncoder;
import java.nio.charset.StandardCharsets;
import java.text.SimpleDateFormat;
import java.util.*;

@RestController
@RequestMapping("/api/v1/booking")
public class PaymentController {

    @Autowired
    HttpSession session;
    @Autowired
    HttpServletRequest request;

    @Autowired
    FoodRepository foodRepository;
    @Autowired
    SeatLocationRepository seatLocationRepository;
    @Autowired
    private ShowTimeRepository showTimeRepository;
    @Autowired
    private ShowTimeListRepository showTimeListRepository;
    @Autowired
    private PaymentService paymentService;

    @PostMapping("/payment")
    public ResponseEntity<PaymentResDTO> postPayment(
            @RequestBody InvoiceDTO invoiceDTO
    ) throws IOException {
        Invoice invoice = new Invoice();

        System.out.println("post payment: " +invoiceDTO);
        List<OrderFood> listOrderFood = new ArrayList<>();
            invoiceDTO.getOrderFood().stream().map(listOrderFoodDTO -> {
                Food food = foodRepository.findByfoodName(listOrderFoodDTO.getFoodName());
                return listOrderFood.add(
                        new OrderFood(
                                0,
                                listOrderFoodDTO.getPrice(),
                                listOrderFoodDTO.getValue(),
                                food,
                                invoice
                        )
                );
            });
        List<InvoiceDetail> listInvoiceDetail = new ArrayList<>();
        invoiceDTO.getListOrderSeat().stream().map(detail ->{
            SeatLocation seatLocation = seatLocationRepository.findByseatNumber(detail.getSeatName());
            ShowTimeList showTimeList = showTimeListRepository.findByshowTimeFrame(invoiceDTO.getShowTime());
            ShowTime showTime = showTimeRepository.getById(showTimeList.getShowTimeListId());
            return new InvoiceDetail(
                    0,
                    detail.getSeatPrice() * 100000,
                    "Không có ghi chú",
                    invoice,
                    seatLocation,
                    showTime
            );
        });
        invoice.setTotal(invoiceDTO.getTotalMoney());
        invoice.setPayment(paymentService.findById(2).get());
        invoice.setListOrderFood(listOrderFood);
        invoice.setListInvoiceDetail(listInvoiceDetail);
		invoice.setNote("Thanh toán qua VNPay !!");
//        invoice.setCreatDate(new Date());
//		Authentication authen = SecurityContextHolder.getContext().getAuthentication();
//		User user = userService.findByUsername((String) authen.getPrincipal());

//		invoice.setPayment(paymentService.selectById(id));
//		invoice.setUser(user);
        long amount = (long) (invoice.getTotal() * 100);

        String vnp_TxnRef = VNPayConfig.getRandomNumber(8);
        String vnp_TmnCode = VNPayConfig.vnp_TmnCode;

        Map<String, String> vnp_Params = new HashMap<>();
        vnp_Params.put("vnp_Version", VNPayConfig.vnp_Version);
        vnp_Params.put("vnp_Command", VNPayConfig.vnp_Command);
        vnp_Params.put("vnp_TmnCode", vnp_TmnCode);
        vnp_Params.put("vnp_Amount", String.valueOf(amount));
        vnp_Params.put("vnp_CurrCode", "VND");
        vnp_Params.put("vnp_TxnRef", vnp_TxnRef);
        vnp_Params.put("vnp_OrderInfo", "Thanh toan: " + String.valueOf(amount) + "cho Yum Film");
        vnp_Params.put("vnp_OrderType", String.valueOf(2));
        vnp_Params.put("vnp_Locale", "vn"); // địa chỉ ở việt nam
        vnp_Params.put("vnp_ReturnUrl", VNPayConfig.vnp_ReturnUrl);
        vnp_Params.put("vnp_IpAddr", "127.0.0.1");

        Calendar cld = Calendar.getInstance(TimeZone.getTimeZone("Etc/GMT+7"));
        SimpleDateFormat formatter = new SimpleDateFormat("yyyyMMddHHmmss");
        String vnp_CreateDate = formatter.format(cld.getTime());

        vnp_Params.put("vnp_CreateDate", vnp_CreateDate);

        cld.add(Calendar.MINUTE, 17);
        String vnp_ExpireDate = formatter.format(cld.getTime());
        vnp_Params.put("vnp_ExpireDate", vnp_ExpireDate);

        List fieldNames = new ArrayList(vnp_Params.keySet());
        Collections.sort(fieldNames);
        StringBuilder hashData = new StringBuilder();
        StringBuilder query = new StringBuilder();
        Iterator itr = fieldNames.iterator();
        while (itr.hasNext()) {
            String fieldName = (String) itr.next();
            String fieldValue = (String) vnp_Params.get(fieldName);
            if ((fieldValue != null) && (fieldValue.length() > 0)) {
                // Build hash data
                hashData.append(fieldName);
                hashData.append('=');
                hashData.append(URLEncoder.encode(fieldValue, StandardCharsets.US_ASCII.toString()));
                // Build query
                query.append(URLEncoder.encode(fieldName, StandardCharsets.US_ASCII.toString()));
                query.append('=');
                query.append(URLEncoder.encode(fieldValue, StandardCharsets.US_ASCII.toString()));
                if (itr.hasNext()) {
                    query.append('&');
                    hashData.append('&');
                }
            }
        }
        String queryUrl = query.toString();
        String vnp_SecureHash = VNPayConfig.hmacSHA512(VNPayConfig.secretKey, hashData.toString());
        queryUrl += "&vnp_SecureHash=" + vnp_SecureHash;
        String paymentUrl = VNPayConfig.vnp_PayUrl + "?" + queryUrl;

        PaymentResDTO dto = new PaymentResDTO();
        dto.setStatus("00");
        dto.setUrl(paymentUrl);
        dto.setMessage("Payment is successfully !!");

//		invoiceService.createInvoice(invoice);
//		session.setAttribute("invoice", invoice.getInvoiceId());
//		 return "redirect:" +paymentUrl;
        return ResponseEntity.ok(dto);
    }

    @PostMapping("/payment-status")
    public ResponseEntity<PaymentSuccessDTO> paymentStatus() throws IOException {
        System.out.println("/payment-status");
        VNPayService vnpayService = new VNPayService();
//		vnpayService.validVNPay(session, request, invoiceService);
//		vnpayService.validVNPay(session, request, vnp_ResponseCode);
        return ResponseEntity.ok(vnpayService.validVNPay(session, request));
    }


}
