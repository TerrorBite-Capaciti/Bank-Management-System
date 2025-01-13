package com.capaciti.terrorbite.bank_management_application.controller;

import com.capaciti.terrorbite.bank_management_application.data_transfer_object.CustomerWithAccountDataTransferObject;
import com.capaciti.terrorbite.bank_management_application.model.Account;
import com.capaciti.terrorbite.bank_management_application.model.Customer;
import com.capaciti.terrorbite.bank_management_application.service.impl.AccountServiceImpl;
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

    private final CustomerService customerService;


    public CustomerController(CustomerService customerService) {
        this.customerService = customerService;
    }

    @GetMapping("{id}")
    // e.g., http://localhost:PORT/api/customers/1
    public ResponseEntity<Customer> getCustomerById(@PathVariable("id") Long customerId) {
        return new ResponseEntity<Customer>(customerService.getCustomerById(customerId), HttpStatus.OK);
    }

    @PostMapping("/createCustomer")
    public ResponseEntity<Customer> createCustomer(@RequestBody CustomerWithAccountDataTransferObject newCustomerDto) {
        try {
            Customer createdCustomer = customerService.createNewCustomer(newCustomerDto);
            System.out.println();
            System.out.println("Customer created...");

            return ResponseEntity.status(HttpStatus.CREATED).body(createdCustomer);

        } catch (Exception e) {
            throw new RuntimeException("Error creating customer" + e);
        }
    }

    private Map successfulCreation(ResponseEntity<Customer> createdCustomer, ResponseEntity<Account> createdAccount) {
        Map result = new HashMap();
        result.put("Created Customer", createdCustomer);
        result.put("Account Details", createdAccount);
        return result;

    }
}