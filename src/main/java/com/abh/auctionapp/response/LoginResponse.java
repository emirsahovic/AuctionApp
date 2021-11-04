package com.abh.auctionapp.response;

import com.abh.auctionapp.model.Person;

public class LoginResponse {
    private Person person;
    private String token;

    public LoginResponse() {}

    public LoginResponse(Person person, String token) {
        this.person = person;
        this.token = token;
    }

    public Person getPerson() {
        return person;
    }

    public String getToken() {
        return token;
    }
}
