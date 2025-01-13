package com.capaciti.terrorbite.bank_management_application.service.impl;

import com.capaciti.terrorbite.bank_management_application.data_transfer_object.CustomerWithAccountDataTransferObject;
import com.capaciti.terrorbite.bank_management_application.model.Account;
import com.capaciti.terrorbite.bank_management_application.model.Customer;
import com.capaciti.terrorbite.bank_management_application.repository.CustomerRepository;
import com.capaciti.terrorbite.bank_management_application.service.AccountService;
import com.capaciti.terrorbite.bank_management_application.service.CustomerService;

import org.springframework.stereotype.Service;
import org.springframework.beans.factory.annotation.Autowired;

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
        this.customerService = customerService;
    }

    @Override
    public Customer getCustomerById(Long id) {
        return customerRepository.findById(id).orElseThrow( () -> new RuntimeException() );
    }

    @Override
    public Customer createNewCustomer(CustomerWithAccountDataTransferObject newCustomerDto) {

        Customer customer = new Customer();
        customer.setFullName(newCustomerDto.getFullName());
//        customer.setFullName(newCustomerDto.getFullName());
        customer.setAddress(newCustomerDto.getAddress());
        customer.setPhoneNumber(newCustomerDto.getPhoneNumber());
        customer.setEmail(newCustomerDto.getEmail());

        Customer savedCustomer = customerService.createNewCustomer(newCustomerDto);

        if (newCustomerDto.getAccountDto() != null) {
            Account account = new Account();

            account.setCustomer(savedCustomer);
            account.setAccountType(newCustomerDto.getAccountDto().getAccountType());
            account.setBalance(newCustomerDto.getAccountDto().getBalance());
            account.setAccountNumber(accountService.generateAccountNumber());

            Account savedAccount = accountService.createAccount(customer);
            System.out.printf("Account: %s has been created...", account.getAccountType());
        }

        return customerRepository.save(customer);
    }

    @Override
    public Customer updateCustomerDetails(long id, Customer customer) {
        return null;
    }
}
