package com.capaciti.terrorbite.bank_management_application.service;

import com.capaciti.terrorbite.bank_management_application.model.Account;
import com.capaciti.terrorbite.bank_management_application.model.Customer;
import java.util.List;

public interface CustomerService {

    Customer getCustomerById(Long id);

    Customer createNewCustomer(Customer customer);

    Customer updateCustomerDetails(long id, Customer customer);
}
