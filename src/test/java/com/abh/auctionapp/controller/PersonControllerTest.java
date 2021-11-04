package com.abh.auctionapp.controller;

import org.junit.jupiter.api.MethodOrderer;
import org.junit.jupiter.api.Order;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.junit.jupiter.api.TestMethodOrder;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@SpringBootTest
@AutoConfigureMockMvc
@TestMethodOrder(MethodOrderer.OrderAnnotation.class)

public class PersonControllerTest {

    @Autowired
    private MockMvc mock;

    @Test
    @Order(1)
    public void userRegistrationSuccess() throws Exception {
        mock.perform(MockMvcRequestBuilders.post("/auth/register")
                .contentType(MediaType.APPLICATION_JSON)
                .content("{\"firstName\": \"Paul\", \"lastName\": \"Rees\", \"email\": \"paulrees@gmail.com\", \"password\": \"paulR1234\"}")
        ).andExpect(status().isOk());
    }

    @Test
    @Order(2)
    public void userRegistrationFirstNameEmpty() throws Exception {
        mock.perform(MockMvcRequestBuilders.post("/auth/register")
                .contentType(MediaType.APPLICATION_JSON)
                .content("{\"firstName\": \"\", \"lastName\": \"Rees\", \"email\": \"paulrees@gmail.com\", \"password\": \"paulR1234\"}")
        ).andExpect(status().is4xxClientError());
    }

    @Test
    @Order(3)
    public void userRegistrationLastNameEmpty() throws Exception {
        mock.perform(MockMvcRequestBuilders.post("/auth/register")
               .contentType(MediaType.APPLICATION_JSON)
               .content("{\"firstName\": \"Paul\", \"lastName\": \"\", \"email\": \"paulrees@gmail.com\", \"password\": \"paulR1234\"}")
        ).andExpect(status().is4xxClientError());
    }

    @Test
    @Order(4)
    public void userLoginPasswordEmpty() throws Exception {
        mock.perform(MockMvcRequestBuilders.post("/auth/login")
                .contentType(MediaType.APPLICATION_JSON)
                .content("{\"email\": \"paulrees@gmail.com\", \"password\": \"\"}")
        ).andExpect(status().is4xxClientError());
    }
}
