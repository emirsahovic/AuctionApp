package com.abh.auctionapp.request;

import lombok.Data;
import lombok.AllArgsConstructor;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Email;
import javax.validation.constraints.Size;

@Data
@AllArgsConstructor
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
}
