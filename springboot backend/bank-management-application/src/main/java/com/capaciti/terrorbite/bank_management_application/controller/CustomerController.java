package com.capaciti.terrorbite.bank_management_application.controller;

import com.capaciti.terrorbite.bank_management_application.data_transfer_object.CustomerWithAccountDataTransferObject;
import com.capaciti.terrorbite.bank_management_application.model.Account;
import com.capaciti.terrorbite.bank_management_application.model.Customer;
import com.capaciti.terrorbite.bank_management_application.service.impl.AccountServiceImpl;
import com.capaciti.terrorbite.bank_management_application.service.impl.CustomerServiceImpl;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/customers")
public class CustomerController {

    private final CustomerServiceImpl customerService;
    private final AccountServiceImpl accountService;

    public CustomerController(CustomerServiceImpl customerService, AccountServiceImpl accountService) {
        this.customerService = customerService;
        this.accountService = accountService;
    }

    @PostMapping("/login")
    public ResponseEntity<?> customerLogin(@RequestBody String userName, @RequestBody String password) {
        Customer customer = customerService.customerLogin(userName);

        if (customer == null) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("User does not exist");
        }

        if (!customer.getPassword().equals(password)) {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Incorrect password");
        }

        List<Account> accounts = accountService.getAllAccounts(customer.getId());
        customer.setAccounts(accounts);
        return ResponseEntity.status(HttpStatus.OK).body(customer);
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
}