package com.abh.auctionapp.controller;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.RequestBuilder;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;

import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@SpringBootTest
@AutoConfigureMockMvc
public class ProductControllerTest {

    @Autowired
    private MockMvc mock;

    @Test
    public void getFirstProduct() throws Exception {
        RequestBuilder request = MockMvcRequestBuilders
                .get("/products/?product_id=1&user_id=5")
                .accept(MediaType.APPLICATION_JSON);
        mock.perform(request)
                .andExpect(status().isOk());
    }

    @Test
    public void getInvalidProduct() throws Exception {
        RequestBuilder request = MockMvcRequestBuilders
                .get("/products/?product_id=31&user_id=5")
                .accept(MediaType.APPLICATION_JSON);
        mock.perform(request)
                .andExpect(status().is4xxClientError());
    }

}
