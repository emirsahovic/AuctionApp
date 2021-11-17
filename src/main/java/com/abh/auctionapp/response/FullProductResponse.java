package com.abh.auctionapp.response;

import java.time.LocalDateTime;

public interface FullProductResponse {
    Long getId();
    String getName();
    String getDescription();
    Integer getStartPrice();
    LocalDateTime getEndDate();
    Boolean getWished();
    Long getPictureId();
    String getPictureUrl();
    Boolean getPictureFeatured();
}
