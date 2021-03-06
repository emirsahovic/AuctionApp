package com.abh.auctionapp.model;
import com.abh.auctionapp.model.enums.Size;

import org.springframework.beans.factory.annotation.Value;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.PositiveOrZero;
import java.time.LocalDateTime;

@Entity
public class Product {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @NotBlank
    @javax.validation.constraints.Size(max = 50)
    @Column(nullable = false)
    private String name;

    @javax.validation.constraints.Size(max = 255)
    private String description;

    @PositiveOrZero
    @Column(nullable = false)
    private Float startPrice;

    @Column(nullable = false)
    private LocalDateTime startDate;

    @Column(nullable = false)
    private LocalDateTime endDate;

    @javax.validation.constraints.Size(max = 25)
    private String color;

    @Enumerated(EnumType.STRING)
    private Size size;

    @NotBlank
    @Column(nullable = false)
    @Value("false")
    private Boolean shippingCost;

    @NotBlank
    @Column(nullable = false)
    private String country;

    @NotBlank
    @Column(nullable = false)
    private String city;

    @NotBlank
    @Column(nullable = false)
    private String street;

    @NotBlank
    @javax.validation.constraints.Size(max = 15)
    @Column(nullable = false)
    private String zipCode;

    @javax.validation.constraints.Size(max = 15)
    private String phoneNumber;

    @Column(nullable = false)
    private Boolean featured = false;

    @ManyToOne
    @JoinColumn(name = "person_id", nullable = false)
    private Person person;

    @ManyToOne
    @JoinColumn(name = "subcategory_id", nullable = false)
    private Subcategory subcategory;

    public Product() {
    }

    public Product(@NotBlank String name, @PositiveOrZero Float startPrice, LocalDateTime startDate,
                   LocalDateTime endDate, @NotBlank String country, @NotBlank String city, @NotBlank String street,
                   @NotBlank String zipCode, @NotBlank String phoneNumber, Person person, Subcategory subcategory) {
        this.name = name;
        this.startPrice = startPrice;
        this.startDate = startDate;
        this.endDate = endDate;
        this.country = country;
        this.city = city;
        this.street = street;
        this.zipCode = zipCode;
        this.phoneNumber = phoneNumber;
        this.person = person;
        this.subcategory = subcategory;
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

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public Float getStartPrice() {
        return startPrice;
    }

    public void setStartPrice(Float startPrice) {
        this.startPrice = startPrice;
    }

    public String getColor() {
        return color;
    }

    public void setColor(String color) {
        this.color = color;
    }

    public Size getSize() {
        return size;
    }

    public void setSize(Size size) {
        this.size = size;
    }

    public Boolean getShippingCost() {
        return shippingCost;
    }

    public void setShippingCost(Boolean shipping) {
        this.shippingCost = shipping;
    }

    public LocalDateTime getStartDate() {
        return startDate;
    }

    public void setStartDate(LocalDateTime startDate) {
        this.startDate = startDate;
    }

    public LocalDateTime getEndDate() {
        return endDate;
    }

    public void setEndDate(LocalDateTime endDate) {
        this.endDate = endDate;
    }

    public String getCity() {
        return city;
    }

    public void setCity(String city) {
        this.city = city;
    }

    public String getCountry() {
        return country;
    }

    public void setCountry(String country) {
        this.country = country;
    }

    public String getStreet() {
        return street;
    }

    public void setStreet(String street) {
        this.street = street;
    }

    public String getZipCode() {
        return zipCode;
    }

    public void setZipCode(String zipCode) {
        this.zipCode = zipCode;
    }

    public String getPhoneNumber() { return phoneNumber; }

    public void setPhoneNumber(String phoneNumber) {
        this.phoneNumber = phoneNumber;
    }

    public Person getPerson() {
        return person;
    }

    public void setPerson(Person person) {
        this.person = person;
    }

    public Subcategory getSubcategory() {
        return subcategory;
    }

    public void setSubcategory(Subcategory subcategory) {
        this.subcategory = subcategory;
    }
}
