package com.abh.auctionapp.response;

import com.abh.auctionapp.model.Picture;

import java.time.LocalDateTime;
import java.util.List;

public class ProductResponse {

    private Long id;
    private String name;
    private String description;
    private Integer startPrice;
    private LocalDateTime endDate;
    private Boolean wished;
    private List<Picture> pictures;

    public ProductResponse(Long id, String name, String description, Integer startPrice, LocalDateTime endDate,
                           Boolean wished, List<Picture> pictures) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.startPrice = startPrice;
        this.endDate = endDate;
        this.wished = wished;
        this.pictures = pictures;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) { this.id = id; }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getDescription() { return description; }

    public void setDescription(String description) {
        this.description = description;
    }

    public Integer getStartPrice() {
        return startPrice;
    }

    public void setStartPrice(Integer startPrice) {
        this.startPrice = startPrice;
    }

    public LocalDateTime getEndDate() {
        return endDate;
    }

    public void setEndDate(LocalDateTime endDate) {
        this.endDate = endDate;
    }

    public Boolean getWished() { return wished; }

    public void setWished(Boolean wished) {
        this.wished = wished;
    }

    public List<Picture> getPictures() {
        return pictures;
    }

    public void setPictures(List<Picture> pictures) {
        this.pictures = pictures;
    }
}
