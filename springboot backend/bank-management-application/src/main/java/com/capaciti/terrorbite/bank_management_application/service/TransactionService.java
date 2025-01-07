package com.capaciti.terrorbite.bank_management_application.service;

import com.capaciti.terrorbite.bank_management_application.model.Account;
import com.capaciti.terrorbite.bank_management_application.model.Transaction;

import java.util.List;

public interface TransactionService {

    List<Transaction> getAllTransactions(Account account);

    @Deprecated(since = "0.0.1", forRemoval = false)
    Transaction getTransactionById(long id);

    Transaction addTransaction(Transaction transaction);

    @Deprecated(since = "0.0.1", forRemoval = false)
    boolean existsById(long id);

    Transaction existsByAccount(Account account);

    boolean existsByAccountAndId(Account account, long id);
}
