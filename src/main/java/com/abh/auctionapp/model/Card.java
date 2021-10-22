package com.abh.auctionapp.model;

import com.abh.auctionapp.model.enums.Month;

import javax.persistence.Entity;
import javax.persistence.Column;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.validation.constraints.Max;
import javax.validation.constraints.Min;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;

@Entity
public class Card {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long CardId;

    @NotBlank
    @Column(nullable = false)
    private String cardName;

    @NotBlank
    @Size(max = 20)
    @Size(min = 13)
    @Column(nullable = false)
    private String cardNumber;

    @Min(2000)
    @Max(3000)
    @Column(nullable = false)
    private Integer expirationYear;

    @Column(nullable = false)
    private Month expirationMonth;

    @Column(nullable = false)
    @Min(100)
    @Max(9999)
    private Integer cvc;

    @ManyToOne
    @JoinColumn(name = "personId", nullable = false)
    private Person person;

    public Card() {
    }

    public Card(@NotBlank String cardName, @NotBlank @Size(max = 20) @Size(min = 13) String cardNumber,
                @Min(2000) @Max(3000) Integer expirationYear, Month expirationMonth,
                @Min(100) @Max(9999) Integer cvc, Person person) {
        this.cardName = cardName;
        this.cardNumber = cardNumber;
        this.expirationYear = expirationYear;
        this.expirationMonth = expirationMonth;
        this.cvc = cvc;
        this.person = person;
    }

    public Long getId() {
        return CardId;
    }

    public void setId(Long CardId) {
        this.CardId = CardId;
    }

    public String getCardName() {
        return cardName;
    }

    public void setCardName(String name) {
        this.cardName = name;
    }

    public String getCardNumber() {
        return cardNumber;
    }

    public void setCardNumber(String cardNumber) {
        this.cardNumber = cardNumber;
    }

    public Integer getExpirationYear() {
        return expirationYear;
    }

    public void setExpirationYear(Integer expirationYear) {
        this.expirationYear = expirationYear;
    }

    public Month getExpirationMonth() {
        return expirationMonth;
    }

    public void setExpirationMonth(Month expirationMonth) {
        this.expirationMonth = expirationMonth;
    }

    public Integer getCvc() {
        return cvc;
    }

    public void setCvc(Integer cvc) {
        this.cvc = cvc;
    }

    public Person getPerson() {
        return person;
    }

    public void setPerson(Person person) {
        this.person = person;
    }
}
