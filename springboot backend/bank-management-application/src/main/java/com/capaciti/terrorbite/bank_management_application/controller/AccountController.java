package com.capaciti.terrorbite.bank_management_application.controller;

import com.capaciti.terrorbite.bank_management_application.model.Account;
import com.capaciti.terrorbite.bank_management_application.service.impl.AccountServiceImpl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/accounts")
public class AccountController {

    private final AccountServiceImpl accountService;

    @Autowired
    public AccountController(AccountServiceImpl accountService) {
        this.accountService = accountService;
    }

    @GetMapping("/customer/{id}")
    public List<Account> getAccountsByCustomerId(@PathVariable("id") long customerId) {
        return accountService.getAllAccounts(customerId);
    }

    @PostMapping("/createAccount/{customerId}")
    public ResponseEntity<?> createAccount(@PathVariable("customerId") Long customerId, @RequestBody Account accountToCreate) {
        System.out.printf("\n\n%s\n\n", accountToCreate.toString());
        try {
            Account createdAccount = accountService.createAccount(accountToCreate);

            return ResponseEntity.status(HttpStatus.CREATED).body(createdAccount);
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Error creating account: " + e.getMessage());
        }
    }
}
