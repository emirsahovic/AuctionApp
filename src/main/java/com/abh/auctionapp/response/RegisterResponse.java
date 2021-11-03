package com.abh.auctionapp.response;

import com.abh.auctionapp.model.Person;

public class RegisterResponse {
    private Person person;
    private String token;

    public RegisterResponse() {}

    public RegisterResponse(Person person, String token) {
        this.person = person;
        this.token = token;
    }
}
