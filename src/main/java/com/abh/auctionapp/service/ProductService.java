package com.abh.auctionapp.service;

import com.abh.auctionapp.exception.NotFoundException;
import com.abh.auctionapp.model.Picture;
import com.abh.auctionapp.repository.ProductRepository;
import com.abh.auctionapp.response.FullProductResponse;
import com.abh.auctionapp.response.ProductResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class ProductService {
    private final ProductRepository productRepository;

    @Autowired
    public ProductService(ProductRepository productRepository) {
        this.productRepository = productRepository;
    }

    public ProductResponse getProduct(Long productId, Long userId) {
        List<FullProductResponse> fullProducts = productRepository.getProduct(productId, userId);
        if (fullProducts.isEmpty()) {
            throw new NotFoundException("Incorrect product id");
        }

        ProductResponse productResponse = new ProductResponse(
                fullProducts.get(0).getId(),
                fullProducts.get(0).getName(),
                fullProducts.get(0).getDescription(),
                fullProducts.get(0).getStartPrice(),
                fullProducts.get(0).getEndDate(),
                fullProducts.get(0).getWished(),
                new ArrayList<>());

        if (fullProducts.get(0).getPictureId() != null) {
            for (var fullProductResponse : fullProducts) {
                productResponse.getPictures().add(new Picture(
                    fullProductResponse.getPictureId(),
                    fullProductResponse.getPictureUrl(),
                    fullProductResponse.getPictureFeatured()
                ));
            }
        }
        return productResponse;
    }
}
