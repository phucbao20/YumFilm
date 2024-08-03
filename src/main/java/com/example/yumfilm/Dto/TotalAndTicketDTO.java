package com.example.yumfilm.Dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class TotalAndTicketDTO {

    private String monthName;
    private Double total;
    private Integer ticket;
}
