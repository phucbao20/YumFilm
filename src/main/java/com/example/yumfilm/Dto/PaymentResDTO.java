package com.example.yumfilm.Dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class PaymentResDTO {
	private String status;
	private String message;
	private String url;
}
