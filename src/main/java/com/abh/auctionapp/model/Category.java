package com.abh.auctionapp.model;

import javax.persistence.Entity;
import javax.persistence.Column;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.validation.constraints.NotBlank;

@Entity
public class Category {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long CategoryId;

    @NotBlank
    @Column(nullable = false, unique = true)
    private String name;

    public Category() {
    }

    public Category(@NotBlank String name) {
        this.name = name;
    }

    public Long getCategoryId() {
        return CategoryId;
    }

    public void setCategoryId(Long CategoryId) {
        this.CategoryId = CategoryId;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }
}
