package com.capaciti.terrorbite.bank_management_application.controller;

import com.capaciti.terrorbite.bank_management_application.model.Customer;
import com.capaciti.terrorbite.bank_management_application.service.CustomerService;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/customers")
public class CustomerController {

    @Autowired
    private CustomerService customerService;

    @GetMapping("{id}")
    // e.g., http://localhost:PORT/api/customers/1
    public ResponseEntity<Customer> getCustomerById(@PathVariable("id") long customerId) {
        return new ResponseEntity<Customer>(customerService.getCustomerById(customerId), HttpStatus.OK);
    }

    @PostMapping("/createCustomer")
    public ResponseEntity<Customer> createCustomer(@RequestBody Customer newCustomer) {
        return new ResponseEntity<Customer>(customerService.createNewCustomer(newCustomer), HttpStatus.CREATED);
    }
}
