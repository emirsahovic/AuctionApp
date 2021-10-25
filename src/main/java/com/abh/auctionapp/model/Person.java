package com.abh.auctionapp.model;

import com.abh.auctionapp.model.enums.Gender;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;

@Entity
public class Person {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @NotBlank
    @Column(nullable = false)
    @Size(min = 2, max = 30)
    private String firstName;

    @NotBlank
    @Column(nullable = false)
    @Size(min = 2, max = 30)
    private String lastName;

    @NotBlank
    @Column(nullable = false, unique = true)
    @Size(max = 50)
    @Email
    private String email;

    @NotBlank
    @Column(nullable = false)
    @Size(max = 30)
    private String password;

    @Enumerated(EnumType.STRING)
    private Gender gender;

    @Size(max = 15)
    private String phoneNumber;

    private String city;
    private String country;
    private String state;
    private String street;

    @Size(max = 15)
    private String zipCode;

    public Person() {
    }

    public Person(@NotBlank @Size(min = 2, max = 30) String firstName,
                  @NotBlank @Size(min = 2, max = 30) String lastName,
                  @NotBlank @Size(max = 50) @Email String email,
                  @NotBlank @Size(max = 30) String password) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.password = password;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public Gender getGender() {
        return gender;
    }

    public void setGender(Gender gender) {
        this.gender = gender;
    }

    public String getPhoneNumber() {
        return phoneNumber;
    }

    public void setPhoneNumber(String phoneNumber) {
        this.phoneNumber = phoneNumber;
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

    public String getState() { return state; }

    public void setState(String state) {
        this.state = state;
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
}
