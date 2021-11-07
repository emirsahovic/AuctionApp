package com.abh.auctionapp.request;

import javax.validation.constraints.NotBlank;

public class LoginRequest {
    @NotBlank(message = "Email field can't be empty")
    private String email;

    @NotBlank(message = "Password field can't be empty")
    private String password;

    public LoginRequest() {}

    public LoginRequest(String email, String password) {
        this.email = email;
        this.password = password;
    }

    public String getEmail() { return email; }
    public String getPassword() { return password; }
}
