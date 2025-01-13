package com.capaciti.terrorbite.bank_management_application.controller;

import com.capaciti.terrorbite.bank_management_application.data_transfer_object.CustomerWithAccountDataTransferObject;
import com.capaciti.terrorbite.bank_management_application.model.Account;
import com.capaciti.terrorbite.bank_management_application.model.Customer;
import com.capaciti.terrorbite.bank_management_application.service.CustomerService;
import com.capaciti.terrorbite.bank_management_application.service.impl.CustomerServiceImpl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.transaction.annotation.Transactional;

import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping("/api/customers")
public class CustomerController {

    private final CustomerServiceImpl customerService;

    public CustomerController(CustomerServiceImpl customerService) {
        this.customerService = customerService;
    }

    @GetMapping("{id}")
    // e.g., http://localhost:PORT/api/customers/1
    public ResponseEntity<Customer> getCustomerById(@PathVariable("id") Long customerId) {
        return new ResponseEntity<Customer>(customerService.getCustomerById(customerId), HttpStatus.OK);
    }

    @PostMapping("/createCustomer")
    public ResponseEntity<?> createCustomer(@RequestBody CustomerWithAccountDataTransferObject newCustomerDto) {

        try {

            System.out.println("Received chunk from DTO: " + newCustomerDto);

            Customer createdCustomer = customerService.createNewCustomer(newCustomerDto);

            return ResponseEntity.status(HttpStatus.CREATED).body(createdCustomer);
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Error creating customer: " + e.getMessage());
        }
    }

    private Map successfulCreation(ResponseEntity<Customer> createdCustomer, ResponseEntity<Account> createdAccount) {
        Map result = new HashMap();
        result.put("Created Customer", createdCustomer);
        result.put("Account Details", createdAccount);
        return result;

    }
}