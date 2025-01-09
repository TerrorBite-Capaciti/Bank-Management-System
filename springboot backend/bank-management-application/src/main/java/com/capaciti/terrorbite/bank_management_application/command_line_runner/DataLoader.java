package com.capaciti.terrorbite.bank_management_application.command_line_runner;
import com.capaciti.terrorbite.bank_management_application.model.Account;
import com.capaciti.terrorbite.bank_management_application.model.Customer;
import com.capaciti.terrorbite.bank_management_application.repository.CustomerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.stereotype.Component;
import org.springframework.transaction.annotation.EnableTransactionManagement;

import java.util.Date;
import java.util.List;

@Component
@EnableJpaRepositories(basePackages = "com.capaciti.terrorbite.bank_management_application.repositories")
@EnableTransactionManagement

public class DataLoader implements CommandLineRunner {

    private final CustomerRepository customerRepository;
    @Autowired
    public DataLoader(CustomerRepository customerRepository) {
        this.customerRepository = customerRepository;
    }

    @Override
    public void run(String... args) {

        try {
            Customer customer = new Customer();
            customer.setFullName("Doctor Phoebe");
            customer.setAddress("123 Main St");
            customer.setPhoneNumber("123-456-7890");
            customer.setEmail("doctorphoebe@capaciti.org.za");

            Account savingsAccount = new Account();
            savingsAccount.setAccountType("Savings");
            savingsAccount.setOpenedDate(new Date("2021-01-01"));
            savingsAccount.setBalance("1000.00");

            customerRepository.save(customer);
        } catch (Exception e) {
            System.out.println("Prefill error: " + e.getMessage());
        }
//        Transaction transaction1 = new Transaction();



//        WorkHistory history1 = new WorkHistory();
//        history1.setCompanyName("Tech Corp");
//        history1.setRole("Developer");
//        history1.setEmployee(employee);
//
//        WorkHistory history2 = new WorkHistory();
//        history2.setCompanyName("Innovate LLC");
//        history2.setRole("Senior Developer");
//        history2.setEmployee(employee);

//        employee.setWorkHistory(List.of(history1, history2));
//
//        employeeRepository.save(employee);
    }
}
