package com.capaciti.terrorbite.bank_management_application.service;

import com.capaciti.terrorbite.bank_management_application.model.Account;
import com.capaciti.terrorbite.bank_management_application.model.Transaction;

import java.util.List;

public interface TransactionService {

    List<Transaction> getAllTransactions(Account account);
}
