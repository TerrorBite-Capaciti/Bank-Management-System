package com.capaciti.terrorbite.bank_management_application.controller;

import com.capaciti.terrorbite.bank_management_application.model.Account;
import com.capaciti.terrorbite.bank_management_application.service.impl.AccountServiceImpl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/accounts")
public class AccountController {

    private final AccountServiceImpl accountService;

    @Autowired
    public AccountController(AccountServiceImpl accountService) {
        this.accountService = accountService;
    }

    // Renamed the method to better reflect its function
    @GetMapping("/customer/{id}")
    public List<Account> getAccountsByCustomerId(@PathVariable("id") long customerId) {
        return accountService.getAllAccounts(customerId);
    }
}
