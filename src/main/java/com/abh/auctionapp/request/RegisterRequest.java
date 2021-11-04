package com.abh.auctionapp.request;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Email;
import javax.validation.constraints.Size;

public class RegisterRequest {
    @NotBlank(message = "First name field can't be empty")
    private String firstName;

    @NotBlank(message = "Last name field can't be empty")
    private String lastName;

    @NotBlank(message = "Email field can't be empty")
    @Email(message = "Email format is not valid")
    private String email;

    @NotBlank(message = "Password field can't be empty")
    @Size(min = 8, message = "Password must contain at least 8 characters")
    private String password;

    public String getFirstName() {
        return firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public String getEmail() {
        return email;
    }

    public String getPassword() {
        return password;
    }
}
