package com.capaciti.terrorbite.bank_management_application.service;

import com.capaciti.terrorbite.bank_management_application.data_transfer_object.CustomerWithAccountDataTransferObject;
import com.capaciti.terrorbite.bank_management_application.model.Customer;
import java.util.List;

public interface CustomerService {

    Customer getCustomerById(Long id);

    Customer createNewCustomer(CustomerWithAccountDataTransferObject newCustomerDto);

    Customer updateCustomerDetails(long id, Customer customer);
}
