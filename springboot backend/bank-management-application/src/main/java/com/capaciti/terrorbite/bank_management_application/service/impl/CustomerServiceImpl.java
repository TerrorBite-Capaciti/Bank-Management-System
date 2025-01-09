package com.capaciti.terrorbite.bank_management_application.service.impl;

import com.capaciti.terrorbite.bank_management_application.model.Customer;
import com.capaciti.terrorbite.bank_management_application.repository.CustomerRepository;
import com.capaciti.terrorbite.bank_management_application.service.CustomerService;

import org.jetbrains.annotations.NotNull;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Service;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.List;
import java.util.Optional;

@Service
@Component
public class CustomerServiceImpl implements CustomerService {

    @Autowired
    private CustomerRepository customerRepository;

    @Override
    public Customer getCustomerById(Long id) {
        return customerRepository.findById(id).orElseThrow( () -> new RuntimeException() );
    }

    @Override
    public Customer createNewCustomer(@NotNull Customer customer) {
        if (!customerRepository.existsById(customer.getId())) {
            return customerRepository.save(customer);
        } else {
            throw new RuntimeException();
        }
    }

    @Override
    public Customer updateCustomerDetails(long id, Customer customer) {
        return null;
    }
}
