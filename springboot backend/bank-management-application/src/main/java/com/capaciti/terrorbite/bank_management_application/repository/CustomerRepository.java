package com.capaciti.terrorbite.bank_management_application.repository;

import com.capaciti.terrorbite.bank_management_application.model.Customer;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CustomerRepository extends JpaRepository<Customer, Long> {
    // CRUD
}
