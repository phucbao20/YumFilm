package com.example.yumfilm.responses;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class ShowTimeResponses {
    int showTimeID;
    int price;
    Date showTimeDate;
    int filmID;
    int showTimeListID;
    Date showTimeFrame;
}
