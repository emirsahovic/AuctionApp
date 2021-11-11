package com.abh.auctionapp.controller;

import com.abh.auctionapp.response.ProductResponse;
import com.abh.auctionapp.service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/products")
public class ProductController {
    private final ProductService productService;

    @Autowired
    public ProductController(ProductService productService) {
        this.productService = productService;
    }

    @GetMapping("/")
    public ResponseEntity<ProductResponse> getProduct(@RequestParam(name = "product_id") Long productId,
                                                      @RequestParam(name = "user_id", defaultValue = "") Long userId) {
        return ResponseEntity.ok(productService.getProduct(productId, userId));
    }
}
