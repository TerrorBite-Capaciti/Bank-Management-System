package com.capaciti.terrorbite.bank_management_application.service.impl;

import com.capaciti.terrorbite.bank_management_application.data_transfer_object.CustomerWithAccountDataTransferObject;
import com.capaciti.terrorbite.bank_management_application.model.Account;
import com.capaciti.terrorbite.bank_management_application.model.Customer;
import com.capaciti.terrorbite.bank_management_application.repository.CustomerRepository;
import com.capaciti.terrorbite.bank_management_application.service.AccountService;
import com.capaciti.terrorbite.bank_management_application.service.CustomerService;

import org.springframework.stereotype.Service;
import org.springframework.beans.factory.annotation.Autowired;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class CustomerServiceImpl implements CustomerService {

    private final CustomerRepository customerRepository;
    private final AccountServiceImpl accountService;

    @Autowired
    public CustomerServiceImpl(AccountServiceImpl accountService, CustomerRepository customerRepository) {
        this.customerRepository = customerRepository;
        this.accountService = accountService;
    }

    @Override
    public Customer getCustomerById(Long id) {
        return customerRepository.findById(id).orElseThrow( () -> new RuntimeException() );
    }

    @Override
    public Customer createNewCustomer(CustomerWithAccountDataTransferObject newCustomerDto) {
        Customer customer = new Customer();
        customer.setFullName(newCustomerDto.getFullName());
        customer.setAddress(newCustomerDto.getAddress());
        customer.setPhoneNumber(newCustomerDto.getPhoneNumber());
        customer.setEmail(newCustomerDto.getEmail());

        Customer savedCustomer = customerRepository.save(customer);

        // Create and save the account if provided
        if (newCustomerDto.getAccountDto() != null) {
            Account account = new Account();
            account.setCustomer(savedCustomer);
            account.setAccountType(newCustomerDto.getAccountDto().getAccountType());
            account.setBalance(newCustomerDto.getAccountDto().getBalance());
            account.setAccountNumber(accountService.generateAccountNumber());
            account.setOpenedDate(LocalDate.now());

            Account savedAccount = accountService.createAccount(account);

            System.out.println();
            System.out.println("Adding savedAccount data");

            savedCustomer.getAccounts().add(savedAccount);
            System.out.printf("\n\n Account %s has been created", account.getAccountType());

            if (savedCustomer.getAccounts() == null) {
                savedCustomer.setAccounts(new ArrayList<>());
                System.out.println("ArrayList created");
            }
            savedCustomer.getAccounts().add(account);
            System.out.println("Adding to savedCustomer.getAccounts()");
        }

        return savedCustomer;
    }


    @Override
    public Customer updateCustomerDetails(long id, Customer customer) {
        return null;
    }
}