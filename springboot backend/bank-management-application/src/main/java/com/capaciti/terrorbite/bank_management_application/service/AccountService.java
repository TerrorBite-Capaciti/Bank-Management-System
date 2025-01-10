package com.capaciti.terrorbite.bank_management_application.service;

import com.capaciti.terrorbite.bank_management_application.model.Account;
import com.capaciti.terrorbite.bank_management_application.model.Customer;
import com.capaciti.terrorbite.bank_management_application.model.Transaction;

import java.util.List;

public interface AccountService {

    List<Account> getAllAccounts(long id);

    Account getAccountById(long id);

    Account createAccount(Customer customer, Account account);

    Account updateAccount(Account account);
}
