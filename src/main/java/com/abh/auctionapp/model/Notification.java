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
public class Notification {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long NotificationId;

    @NotBlank
    @Column(nullable = false)
    @Size(min = 5, max = 100)
    private String title;

    private String description;

    @ManyToOne
    @JoinColumn(name = "personId", nullable = false)
    private Person person;

    @ManyToOne
    @JoinColumn(name = "productId", nullable = false)
    private Product product;

    public Notification() {
    }

    public Notification(@NotBlank String title, Person person, Product product) {
        this.title = title;
        this.person = person;
        this.product = product;
    }

    public Long getNotificationId() {
        return NotificationId;
    }

    public void setNotificationId(Long NotificationId) {
        this.NotificationId = NotificationId;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
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
