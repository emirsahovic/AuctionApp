package com.abh.auctionapp.model;

import javax.persistence.Entity;
import javax.persistence.Column;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.validation.constraints.PositiveOrZero;
import java.time.LocalDateTime;

@Entity
public class Bid {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long BidId;

    @PositiveOrZero
    @Column(nullable = false)
    private Float price;

    @Column(nullable = false)
    private LocalDateTime bidDate;

    @ManyToOne
    @JoinColumn(name = "personId", nullable = false)
    private Person person;

    @ManyToOne
    @JoinColumn(name = "productId", nullable = false)
    private Product product;

    public Bid() {
    }

    public Bid(@PositiveOrZero Float price, LocalDateTime bidDate, Person person, Product product) {
        this.price = price;
        this.bidDate = bidDate;
        this.person = person;
        this.product = product;
    }

    public Long getBidId() {
        return BidId;
    }

    public void setBidId(Long BidId) {
        this.BidId = BidId;
    }

    public Float getPrice() {
        return price;
    }

    public void setPrice(Float price) {
        this.price = price;
    }

    public LocalDateTime getBidDate() {
        return bidDate;
    }

    public void setBidDate(LocalDateTime bidDate) {
        this.bidDate = bidDate;
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
