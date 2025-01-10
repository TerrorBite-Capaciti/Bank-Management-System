package com.capaciti.terrorbite.bank_management_application.controller;

import com.capaciti.terrorbite.bank_management_application.model.Account;
import com.capaciti.terrorbite.bank_management_application.model.Customer;
import com.capaciti.terrorbite.bank_management_application.service.impl.AccountServiceImpl;
import com.capaciti.terrorbite.bank_management_application.service.impl.CustomerServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping("/api/customers")
public class CustomerController {

    @Autowired
    private final CustomerServiceImpl customerService;

    @Autowired
    private final AccountServiceImpl accountService;

    public CustomerController(CustomerServiceImpl customerService, AccountServiceImpl accountService) {
        this.customerService = customerService;
        this.accountService = accountService;
    }

    @GetMapping("{id}")
    // e.g., http://localhost:PORT/api/customers/1
    public ResponseEntity<Customer> getCustomerById(@PathVariable("id") Long customerId) {
        return new ResponseEntity<Customer>(customerService.getCustomerById(customerId), HttpStatus.OK);
    }

    @PostMapping("/createCustomer")
    public ResponseEntity<Map> createCustomer(@RequestBody Customer newCustomer, Account newAccount) {
        try {
            Customer savedCustomer = customerService.createNewCustomer(newCustomer);
            System.out.println();
            System.out.println("Customer created...");

            Account savedAccount = accountService.createAccount(newCustomer);
            System.out.printf("Account: %s has been created...", newAccount.getAccountType());

            var customerResponse = ResponseEntity.status(HttpStatus.CREATED).body(savedCustomer);
            var accountResponse = ResponseEntity.status(HttpStatus.CREATED).body(savedAccount);

            return new ResponseEntity<Map>(successfulCreation(customerResponse, accountResponse), HttpStatus.CREATED);
//            return ResponseEntity.status(HttpStatus.CREATED).body(customerResponse + accountResponse);
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