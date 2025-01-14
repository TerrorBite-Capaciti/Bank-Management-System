package com.capaciti.terrorbite.bank_management_application.service.impl;

import com.capaciti.terrorbite.bank_management_application.custom_exception.TransactionsException;
import com.capaciti.terrorbite.bank_management_application.model.Account;
import com.capaciti.terrorbite.bank_management_application.model.Transaction;
import com.capaciti.terrorbite.bank_management_application.repository.AccountRepository;
import com.capaciti.terrorbite.bank_management_application.repository.TransactionRepository;
import com.capaciti.terrorbite.bank_management_application.service.TransactionService;

import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Objects;

@Service
public class TransactionServiceImpl implements TransactionService {

//    @Autowired
    private final TransactionRepository transactionRepository;
    private final AccountRepository accountRepository;

    public TransactionServiceImpl (TransactionRepository transactionRepository, AccountRepository accountRepository) {
        this.transactionRepository = transactionRepository;
        this.accountRepository = accountRepository;
    }

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
    public Transaction createTransaction(Long accountId, Transaction transaction) {
        Account account = accountRepository.findById(accountId).orElseThrow( () -> new RuntimeException("Account not found"));

        transaction.setAccount(account);

        if (Objects.equals(transaction.getTransactionType(), "Deposit".toLowerCase())) {
            account.setBalance(account.getBalance() + transaction.getAmount());

        } else if (Objects.equals(transaction.getTransactionType(), "Withdraw".toLowerCase())) {
            if (account.getBalance() < transaction.getAmount()) {
                throw new TransactionsException("Account balance is less than transaction amount");
            }
        } else if (Objects.equals(transaction.getTransactionType(), "Transfer".toLowerCase())) {
            // TODO
        }

        transaction.setTransactionDate(LocalDateTime.now());
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
