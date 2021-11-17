package com.abh.auctionapp.model;

import javax.persistence.*;
import javax.validation.constraints.NotBlank;

@Entity
public class Picture {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @NotBlank
    @Column(nullable = false)
    private String url;

    @ManyToOne
    @JoinColumn(name = "product_id", nullable = false)
    private Product product;

    public Picture() {
    }

    public Picture(Long id, @NotBlank String url) {
        this.id = id;
        this.url = url;
    }

    public Picture(@NotBlank String url, Product product) {
        this.url = url;
        this.product = product;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getUrl() {
        return url;
    }

    public void setUrl(String url) {
        this.url = url;
    }
}
