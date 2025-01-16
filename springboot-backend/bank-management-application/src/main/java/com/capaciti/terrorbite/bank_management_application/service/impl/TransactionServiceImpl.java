package com.capaciti.terrorbite.bank_management_application.service.impl;

import com.capaciti.terrorbite.bank_management_application.custom_exception.TransactionsException;
import com.capaciti.terrorbite.bank_management_application.model.Account;
import com.capaciti.terrorbite.bank_management_application.model.Transaction;
import com.capaciti.terrorbite.bank_management_application.repository.AccountRepository;
import com.capaciti.terrorbite.bank_management_application.repository.TransactionRepository;
import com.capaciti.terrorbite.bank_management_application.service.TransactionService;

import jakarta.transaction.Transactional;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
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
    @Transactional
    public Transaction deposit(Long accountId, Double amount) {
        Account account = accountRepository.findById(accountId).orElseThrow( () -> new RuntimeException("Account: " + accountId + " not found"));

        account.setBalance(account.getBalance() + amount);
        accountRepository.save(account);

        Transaction newTransaction = new Transaction();
        newTransaction.setTransactionType("Deposit");
        newTransaction.setAmount(amount);
        newTransaction.setTransactionDate(LocalDateTime.now());
        newTransaction.setAccount(account);

        return transactionRepository.save(newTransaction);
    }

    @Override
    @Transactional
    public Transaction withdraw(Long accountId, Double amount) {
        Account account = accountRepository.findById(accountId).orElseThrow( () -> new TransactionsException("Account: " + accountId + " not found") );

        account.setBalance(account.getBalance() - amount);
        accountRepository.save(account);

        Transaction withdrawTransaction = new Transaction();
        withdrawTransaction.setTransactionType("Withdraw");
        withdrawTransaction.setAmount(amount);
        withdrawTransaction.setTransactionDate(LocalDateTime.now());
        withdrawTransaction.setAccount(account);

        return transactionRepository.save(withdrawTransaction);
    }

    @Override
    @Transactional
    public Transaction transfer(Long fromAccountId, Long targetAccountId, Double amount) {
        Account sourceAccount = accountRepository.findById(fromAccountId).orElseThrow( () -> new TransactionsException("Account to transfer from: " + fromAccountId + " not found"));
        Account targetAccount = accountRepository.findById(fromAccountId).orElseThrow( () -> new TransactionsException("Account to transfer to: " + targetAccountId + " not found"));

        sourceAccount.setBalance(sourceAccount.getBalance() - amount);
        targetAccount.setBalance(targetAccount.getBalance() + amount);

        Transaction transferTransaction = new Transaction();
        transferTransaction.setTransactionType("Transfer");
        transferTransaction.setAmount(amount);
        transferTransaction.setTransactionDate(LocalDateTime.now());
        transferTransaction.setAccount(sourceAccount);
        transferTransaction.setTargetAccount(targetAccount);

        return transactionRepository.save(transferTransaction);
    }


}
