package com.abh.auctionapp.service;

import com.abh.auctionapp.model.Person;
import com.abh.auctionapp.repository.PersonRepository;
import com.abh.auctionapp.request.RegisterRequest;
import com.abh.auctionapp.request.LoginRequest;

import org.springframework.stereotype.Service;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;

@Service
public class PersonService {

    private final PersonRepository personRepository;
    private final PasswordEncoder passwordEncoder;

    @Autowired
    public PersonService(PersonRepository personRepository, PasswordEncoder passwordEncoder) {
        this.personRepository = personRepository;
        this.passwordEncoder = passwordEncoder;
    }

    public Person register(RegisterRequest registerRequest){
        if (personRepository.existsByEmail(registerRequest.getEmail())) {
            try {
                throw new Exception("Email is already in use");
            } catch (Exception e) {
                e.printStackTrace();
            }
        }
        Person person = personRepository.save(new Person(
                registerRequest.getFirstName(),
                registerRequest.getLastName(),
                registerRequest.getEmail(),
                passwordEncoder.encode(registerRequest.getPassword()))
        );
        person.setPassword(null);
        return person;
    }

    public Person login(LoginRequest loginRequest) {
        Person person = personRepository.findByEmail(loginRequest.getEmail());
        if (person == null || !passwordEncoder.matches(loginRequest.getPassword(), person.getPassword()))
            try {
                throw new Exception("The email address or password you entered is not valid");
            } catch (Exception e) {
                e.printStackTrace();
            }
        person.setPassword(null);
        return person;
    }
}
