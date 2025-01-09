package com.capaciti.terrorbite.bank_management_application.service.impl;

import com.capaciti.terrorbite.bank_management_application.model.Account;
import com.capaciti.terrorbite.bank_management_application.model.Transaction;
import com.capaciti.terrorbite.bank_management_application.repository.TransactionRepository;
import com.capaciti.terrorbite.bank_management_application.service.TransactionService;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Service;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.List;

@Service
@Component
public class TransactionServiceImpl implements TransactionService {

    @Autowired
    private TransactionRepository transactionRepository;

    @Override
    public List<Transaction> getAllTransactions(Account account) {
//        if (account.getTransactions() != null) {
//            return transactionRepository.findAll();
//        } else {
//            throw new RuntimeException();
//        }
        if (account.getTransactions() != null) {
            return transactionRepository.findAll();
        } else {
            throw new RuntimeException();
        }
    }

    @Override
    public Transaction getTransactionById(long id) {
        return null;
    }

    @Override
    public Transaction addTransaction(Transaction transaction) {
        return transactionRepository.save(transaction);
    }

    @Override
    public boolean existsById(long id) {
        return transactionRepository.existsById(id);
    }

    @Override
    public Transaction existsByAccount(Account account) {
        return null;
    }

    @Override
    public boolean existsByAccountAndId(Account account, long id) {
        return false;
    }
}
