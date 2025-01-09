package com.capaciti.terrorbite.bank_management_application.service.impl;

import com.capaciti.terrorbite.bank_management_application.model.Account;
import com.capaciti.terrorbite.bank_management_application.repository.AccountRepository;
import com.capaciti.terrorbite.bank_management_application.service.AccountService;

import org.jetbrains.annotations.NotNull;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
@Component
public class AccountServiceImpl implements AccountService {

    @Autowired
    private AccountRepository accountRepository;

    @Override
    public List<Account> getAllAccounts(long id) {
        return accountRepository.findAll();
    }

    @Override
    public Account getAccountById(long id) {
        return accountRepository.findById(id).orElseThrow( () -> new RuntimeException() );
    }

    @Override
    public Account createAccount(@NotNull Account account) {
        if (!accountRepository.existsById(account.getId())) {
            return accountRepository.save(account);
        } else {
            throw new RuntimeException();
        }
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
