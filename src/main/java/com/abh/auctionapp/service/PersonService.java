package com.abh.auctionapp.service;

import com.abh.auctionapp.model.Person;
import com.abh.auctionapp.repository.PersonRepository;
import com.abh.auctionapp.request.RegisterRequest;

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
}
