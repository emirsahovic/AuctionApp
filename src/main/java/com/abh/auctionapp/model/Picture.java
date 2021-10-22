package com.abh.auctionapp.model;

import javax.persistence.Entity;
import javax.persistence.Column;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.validation.constraints.NotBlank;

@Entity
public class Picture {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long PictureId;

    @NotBlank
    @Column(nullable = false)
    private String url;

    @ManyToOne
    @JoinColumn(name = "productId", nullable = false)
    private Product product;

    public Picture() {
    }

    public Picture(@NotBlank String url, Product product) {
        this.url = url;
        this.product = product;
    }

    public Long getPictureId() {
        return PictureId;
    }

    public void setPictureId(Long PictureId) {
        this.PictureId = PictureId;
    }

    public String getUrl() {
        return url;
    }

    public void setUrl(String url) {
        this.url = url;
    }

    public Product getProduct() {
        return product;
    }

    public void setProduct(Product product) {
        this.product = product;
    }
}
