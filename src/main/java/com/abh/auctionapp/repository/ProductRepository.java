package com.abh.auctionapp.repository;

import com.abh.auctionapp.model.Product;
import com.abh.auctionapp.response.FullProductResponse;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ProductRepository extends JpaRepository<Product, Long> {
     @Query(value = "SELECT p.id, p.name, p.description, p.start_price startPrice, p.end_date endDate, " +
                    "EXISTS(SELECT * FROM wishlist " +
                    "WHERE product_id = :product_id AND person_id = :user_id) wished, pic.id pictureId, pic.url pictureUrl, pic.featured pictureFeatured " +
                    "FROM product p LEFT JOIN picture pic on p.id = pic.product_id " +
                    "WHERE p.id = :product_id " +
                    "ORDER BY pic.featured DESC",
                    nativeQuery = true)
     List<FullProductResponse> getProduct(@Param("product_id") Long productId, @Param("user_id") Long userId);
}
