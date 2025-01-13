package com.capaciti.terrorbite.bank_management_application.repository;

import com.capaciti.terrorbite.bank_management_application.model.Customer;
import org.springframework.data.jpa.repository.EntityGraph;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface CustomerRepository extends JpaRepository<Customer, Long> {
    // CRUD

//    @EntityGraph(attributePaths = {"accounts"})
//    Optional<Customer> findById (Long id);

}
