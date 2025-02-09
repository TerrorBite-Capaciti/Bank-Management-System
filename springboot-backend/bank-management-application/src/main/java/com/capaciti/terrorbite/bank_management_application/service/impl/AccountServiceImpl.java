package com.capaciti.terrorbite.bank_management_application.service.impl;

import com.capaciti.terrorbite.bank_management_application.model.Account;
import com.capaciti.terrorbite.bank_management_application.model.Customer;
import com.capaciti.terrorbite.bank_management_application.repository.AccountRepository;
import com.capaciti.terrorbite.bank_management_application.repository.CustomerRepository;
import com.capaciti.terrorbite.bank_management_application.service.AccountService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.List;

@Service
public class AccountServiceImpl implements AccountService {

//    @Autowired
    private final AccountRepository accountRepository;
    private final CustomerRepository customerRepository;

//    @Autowired
//    private final AccountService accountService;

    @Autowired
    public AccountServiceImpl(AccountRepository accountRepository, CustomerRepository customerRepository) {
        this.accountRepository = accountRepository;
        this.customerRepository = customerRepository;
    }

    @Override
    public List<Account> getAllAccounts(long id) {
        return accountRepository.findByCustomerId(id);
    }

    @Override
    public Account getAccountById(long id) {
        return accountRepository.findById(id).orElseThrow( () -> new RuntimeException() );
    }

    @Override
    public Account createAccount(Account account) {
        System.out.println("Creating account for customer: " + account.getCustomer().getId());
        return accountRepository.save(account);
    }

    public String generateAccountNumber() {
        return String.valueOf((long) (Math.random() * Math.pow(10, 13)));
    }

    @Override
    public Account updateAccount(Account account) {
        Account existingAccount = accountRepository.findById(account.getId()).orElseThrow( () -> new RuntimeException() );

        existingAccount.setBalance(account.getBalance());
        existingAccount.setTransactions(account.getTransactions());

        //  save
        accountRepository.save(existingAccount);

        //  close
        return existingAccount;
    }
}
