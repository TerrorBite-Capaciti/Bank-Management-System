package com.capaciti.terrorbite.bank_management_application.controller;

import com.capaciti.terrorbite.bank_management_application.model.Transaction;
import com.capaciti.terrorbite.bank_management_application.service.impl.AccountServiceImpl;
import com.capaciti.terrorbite.bank_management_application.service.impl.CustomerServiceImpl;
import com.capaciti.terrorbite.bank_management_application.service.impl.TransactionServiceImpl;


import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/transactions")
public class TransactionController {

    private final TransactionServiceImpl transactionService;
    private final CustomerServiceImpl customerService;
    private final AccountServiceImpl accountService;

    public TransactionController(TransactionServiceImpl transactionService, CustomerServiceImpl customerService, AccountServiceImpl accountService) {
        this.transactionService = transactionService;
        this.customerService = customerService;
        this.accountService = accountService;
    }

    @GetMapping("{accountId}")
    public ResponseEntity<Transaction> getAllTransactions(@PathVariable long accountId) {
        return new ResponseEntity<Transaction>(transactionService.getTransactionById(accountId), HttpStatus.OK);
    }

    @PostMapping("{customerId}/deposit/{accountId}")
    public ResponseEntity<?> depositTransaction(@PathVariable("customerId") Long customerId, @PathVariable("accountId") long accountId, @RequestBody Transaction transaction) {

        if (customerService.getCustomerById(customerId) == null) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("This customer does not exist");
        } else if (accountService.getAccountById(accountId) == null) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Account: " + accountId + " does not exist");
        } else if (transaction.getAmount() < 0) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Amount cannot be R0 or negative");
        }

        try {
            transactionService.deposit(accountId, transaction.getAmount());
            return ResponseEntity.status(HttpStatus.CREATED).body("Transaction successfully created");

        } catch (Exception e) {
            throw new RuntimeException("Error creating transaction: ", e);
        }
    }
}
