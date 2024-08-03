package com.example.yumfilm.Dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class TopFilmDashboardDTO {
    private String filmName;
    private String filmImage;
    private Double price;
    private long ticket;
    private Double total;
}
