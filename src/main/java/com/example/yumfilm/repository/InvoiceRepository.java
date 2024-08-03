package com.example.yumfilm.repository;

import com.example.yumfilm.model.Invoice;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface InvoiceRepository extends JpaRepository<Invoice, Long> {

    @Query(value = "SELECT sum(i.total) FROM Invoice i where i.status = true")
    Double getRevenueFilm();

    @Query(value = "SELECT COUNT(i.invoiceId) FROM Invoice i where i.status = true")
    long getAllInvoice();

    @Query(value =
            "WITH TotalInvoice AS (" +
                    "     SELECT FORMAT(CreateDate, 'MMM', 'en-US') AS MonthName, " +
                    "           MONTH(CreateDate) AS Month, ISNULL(SUM(Total), 0) AS Total " +
                    "    FROM Invoice" +
                    "    WHERE status = 1 AND YEAR(CreateDate) = 2023 " +
                    "    GROUP BY FORMAT(CreateDate, 'MMM', 'en-US'), MONTH(CreateDate)" +
                    "), " +
                    "TotalTicket AS (" +
                    "    SELECT FORMAT(i.CreateDate, 'MMM', 'en-US') AS MonthName, " +
                    "           MONTH(i.CreateDate) AS Month, COUNT(id.InvoiceDetailId) AS Ticket " +
                    "    FROM Invoice i " +
                    "    LEFT JOIN InvoiceDetail id ON id.InvoiceId = i.InvoiceId " +
                    "    WHERE i.STATUS = 1 AND YEAR(i.CreateDate) = 2023 " +
                    "    GROUP BY FORMAT(i.CreateDate, 'MMM', 'en-US'), MONTH(i.CreateDate) " +
                    ")" +
                    "SELECT TI.MonthName, TI.Total, COALESCE(TT.Ticket, 0) AS Ticket " +
                    "FROM TotalInvoice TI " +
                    "LEFT JOIN TotalTicket TT ON TI.Month = TT.Month AND TI.MonthName = TT.MonthName ",
            nativeQuery = true)
    List<Object[]> listTotalAndTicketYear2023();

    @Query(value =
            "WITH TotalInvoice AS (" +
                    "     SELECT FORMAT(CreateDate, 'MMM', 'en-US') AS MonthName, " +
                    "           MONTH(CreateDate) AS Month, ISNULL(SUM(Total), 0) AS Total " +
                    "    FROM Invoice" +
                    "    WHERE status = 1 AND YEAR(CreateDate) = 2024 " +
                    "    GROUP BY FORMAT(CreateDate, 'MMM', 'en-US'), MONTH(CreateDate)" +
                    "), " +
                    "TotalTicket AS (" +
                    "    SELECT FORMAT(i.CreateDate, 'MMM', 'en-US') AS MonthName, " +
                    "           MONTH(i.CreateDate) AS Month, COUNT(id.InvoiceDetailId) AS Ticket " +
                    "    FROM Invoice i " +
                    "    LEFT JOIN InvoiceDetail id ON id.InvoiceId = i.InvoiceId " +
                    "    WHERE i.STATUS = 1 AND YEAR(i.CreateDate) = 2024 " +
                    "    GROUP BY FORMAT(i.CreateDate, 'MMM', 'en-US'), MONTH(i.CreateDate) " +
                    ")" +
                    "SELECT TI.MonthName, TI.Total, COALESCE(TT.Ticket, 0) AS Ticket " +
                    "FROM TotalInvoice TI " +
                    "LEFT JOIN TotalTicket TT ON TI.Month = TT.Month AND TI.MonthName = TT.MonthName ",
            nativeQuery = true)
    List<Object[]> listTotalAndTicketYear2024();

    @Query(value = "SELECT u.lastName, u.firstName, u.email, u.phoneNumber "
            + ", count(i.invoiceId) as totalInvoice, sum(i.total) as totalAmount"
            + " FROM Invoice i "
            + " JOIN i.user u "
            + " WHERE i.status = true"
            + " GROUP BY u.lastName, u.firstName, u.email, u.phoneNumber "
            + " ORDER BY sum(i.total) DESC LIMIT 10 ")
    List<Object[]> getUserRankingTable();


    @Query(value = "SELECT i.invoiceId, u.lastName, u.firstName, i.creatDate, i.total, i.paymentStatus "
            + " FROM Invoice i JOIN i.user u "
            + " WHERE i.status = true AND i.paymentStatus = true "
            + " ORDER BY i.creatDate desc "
            + " LIMIT 15 ")
    List<Object[]> getInvoicePaymentStatusTableTrue();

    @Query(value = "SELECT i.invoiceId, u.lastName, u.firstName, i.creatDate, i.total, i.paymentStatus "
            + " FROM Invoice i JOIN i.user u "
            + " WHERE i.status = true AND i.paymentStatus = false "
            + " ORDER BY i.creatDate desc "
            + " LIMIT 15")
    List<Object[]> getInvoicePaymentStatusTableFalse();

    @Query(value = "SELECT  FORMAT(i.CreateDate, 'MMM', 'en-US') AS MonthName, \n" +
            "    SUM(CASE WHEN YEAR(i.CreateDate) = 2023 THEN 1 ELSE 0 END) AS Year2023,\n" +
            "    SUM(CASE WHEN YEAR(i.CreateDate) = 2024 THEN 1 ELSE 0 END) AS Year2024\n" +
            "FROM  Invoice i\n" +
            "FULL JOIN  InvoiceDetail id ON id.invoiceId = i.InvoiceId\n" +
            "WHERE  i.STATUS = 1 AND (YEAR(i.CreateDate) = 2023 OR YEAR(i.CreateDate) = 2024)\n" +
            "GROUP BY FORMAT(i.CreateDate, 'MMM', 'en-US') , MONTH(i.CreateDate)\n" +
            "ORDER BY MONTH(i.CreateDate) ", nativeQuery = true
            )
    List<Object[]> getTicketOfYear();

    @Query(value = " SELECT FORMAT(i.CreateDate, 'MMM', 'en-US') AS MonthName, \n" +
            "    SUM(CASE WHEN YEAR(i.CreateDate) = 2023 AND i.Status = 1 THEN i.Total ELSE 0 END) AS Year2023,\n" +
            "    SUM(CASE WHEN YEAR(i.CreateDate) = 2024 AND i.Status = 1 THEN i.Total ELSE 0 END) AS Year2024\n" +
            "FROM Invoice i\n" +
            "where i.Status = 1 AND (YEAR(i.CreateDate) = 2023 OR YEAR(i.CreateDate) = 2024)\n" +
            "GROUP BY FORMAT(i.CreateDate, 'MMM', 'en-US'), MONTH(i.CreateDate)\n" +
            "ORDER BY MONTH(i.CreateDate) ", nativeQuery = true)
    List<Object[]> getTotalOfYear();
}
