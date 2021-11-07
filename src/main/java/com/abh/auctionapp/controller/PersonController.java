package com.abh.auctionapp.controller;

import com.abh.auctionapp.model.Person;

import com.abh.auctionapp.request.LoginRequest;
import com.abh.auctionapp.response.LoginResponse;
import com.abh.auctionapp.request.RegisterRequest;
import com.abh.auctionapp.response.RegisterResponse;

import com.abh.auctionapp.security.JsonWebToken;
import com.abh.auctionapp.service.PersonService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import javax.validation.Valid;

@RestController
@RequestMapping("/auth")
public class PersonController {

    private final PersonService personService;

    @Autowired
    public PersonController(PersonService personService) {
        this.personService = personService;
    }

    @PostMapping("/login")
    public ResponseEntity<LoginResponse> login(@RequestBody @Valid LoginRequest loginRequest) {
        Person person = personService.login(loginRequest);
        return ResponseEntity.ok(new LoginResponse(person, JsonWebToken.generateJWTToken(person)));
    }

    @PostMapping("/register")
    public ResponseEntity<RegisterResponse> register(@RequestBody @Valid RegisterRequest registerRequest) {
        Person person = personService.register(registerRequest);
        return ResponseEntity.ok(new RegisterResponse(person, JsonWebToken.generateJWTToken(person)));
    }
}
