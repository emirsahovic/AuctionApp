package com.abh.auctionapp.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

@Entity
public class Wishlist {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long WishlistId;

    @ManyToOne
    @JoinColumn(name = "personId", nullable = false)
    private Person person;

    @ManyToOne
    @JoinColumn(name = "productId", nullable = false)
    private Product product;

    public Wishlist() {
    }

    public Wishlist(Person person, Product product) {
        this.person = person;
        this.product = product;
    }

    public Long getWishlistId() {
        return WishlistId;
    }

    public void setId(Long WishlistId) {
        this.WishlistId = WishlistId;
    }

    public Person getPerson() {
        return person;
    }

    public void setPerson(Person person) {
        this.person = person;
    }

    public Product getProduct() {
        return product;
    }

    public void setProduct(Product product) {
        this.product = product;
    }
}
