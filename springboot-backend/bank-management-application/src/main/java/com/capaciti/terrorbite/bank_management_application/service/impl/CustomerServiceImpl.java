package com.capaciti.terrorbite.bank_management_application.service.impl;

import com.capaciti.terrorbite.bank_management_application.data_transfer_object.CustomerWithAccountDataTransferObject;
import com.capaciti.terrorbite.bank_management_application.model.Account;
import com.capaciti.terrorbite.bank_management_application.model.Customer;
import com.capaciti.terrorbite.bank_management_application.repository.CustomerRepository;
import com.capaciti.terrorbite.bank_management_application.service.CustomerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.ArrayList;

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
//        Customer existingCustomer = customerRepository.findById(id).orElseThrow( () -> new RuntimeException() );
//
//        if (existingCustomer == null) {
//            throw new RuntimeException("No customer found")
//        }
        return customerRepository.findById(id).orElseThrow( () -> new RuntimeException("That customer does not exist") );
    }

    @Override
    public Customer createNewCustomer(CustomerWithAccountDataTransferObject newCustomerDto) {
        Customer customer = new Customer();
        customer.setFullName(newCustomerDto.getFullName());
        customer.setPassword(newCustomerDto.getPassword());
        customer.setMatchingPassword(newCustomerDto.getMatchingPassword());
        customer.setAddress(newCustomerDto.getAddress());
        customer.setPhoneNumber(newCustomerDto.getPhoneNumber());
        customer.setEmail(newCustomerDto.getEmail());
        Customer savedCustomer = customerRepository.save(customer);

        //  if accounts list is null
        System.out.printf("Saved customer: %s", savedCustomer);

        if (savedCustomer.getAccounts() == null) {
            System.out.println("Account list is null after saving");
            savedCustomer.setAccounts(new ArrayList<>());   // init if null
        }

        if (newCustomerDto.getAccountDto() != null) {
            Account account = new Account();
            account.setCustomer(savedCustomer);
            account.setAccountType(newCustomerDto.getAccountDto().getAccountType());
            account.setBalance(newCustomerDto.getAccountDto().getBalance());
            account.setAccountNumber(accountService.generateAccountNumber());
            account.setOpenedDate(LocalDate.now());

            Account savedAccount = accountService.createAccount(account);

            savedCustomer.getAccounts().add(savedAccount);

            if (savedCustomer.getAccounts() == null) {
                savedCustomer.setAccounts(new ArrayList<>());
            }
            savedCustomer.getAccounts().add(account);
        }

        return savedCustomer;
    }

    @Override
    public Customer customerLogin(String email) {
        System.out.println();
        System.out.println(email);
        return customerRepository.findByEmail(email).orElseThrow( () -> new RuntimeException("No customer found with that email") );
    }

    @Override
    public Customer updateCustomerDetails(long id, Customer customer) {
        return null;
    }
}