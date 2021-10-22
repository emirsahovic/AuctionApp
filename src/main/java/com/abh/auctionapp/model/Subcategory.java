package com.abh.auctionapp.model;

import javax.persistence.Entity;
import javax.persistence.Column;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;

@Entity
public class Subcategory {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long SubcategoryId;

    @NotBlank
    @Column(nullable = false)
    @Size(max = 30)
    private String name;

    @ManyToOne
    @JoinColumn(name = "categoryId", nullable = false)
    private Category category;

    public Subcategory() {}

    public Subcategory(@NotBlank String name, Category category) {
        this.name = name;
        this.category = category;
    }

    public Long getSubcategoryId() {
        return SubcategoryId;
    }

    public void setSubcategoryId(Long SubcategoryId) {
        this.SubcategoryId = SubcategoryId;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Category getCategory() {
        return category;
    }

    public void setCategory(Category category) {
        this.category = category;
    }
}
