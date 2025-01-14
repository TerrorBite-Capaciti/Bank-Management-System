package com.capaciti.terrorbite.bank_management_application.command_line_runner;
import com.capaciti.terrorbite.bank_management_application.model.Account;
import com.capaciti.terrorbite.bank_management_application.model.Customer;
import com.capaciti.terrorbite.bank_management_application.repository.AccountRepository;
import com.capaciti.terrorbite.bank_management_application.repository.CustomerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.stereotype.Component;
import org.springframework.transaction.annotation.EnableTransactionManagement;

import java.time.LocalDate;
import java.time.ZoneId;
import java.util.Date;
import java.util.List;

@Component
@EnableJpaRepositories(basePackages = "com.capaciti.terrorbite.bank_management_application.repositories")
@EnableTransactionManagement

public class DataLoader implements CommandLineRunner {

    private final CustomerRepository customerRepository;
    private final AccountRepository accountRepository;

    @Autowired
    public DataLoader(CustomerRepository customerRepository, AccountRepository accountRepository) {
        this.customerRepository = customerRepository;
        this.accountRepository = accountRepository;
    }

    @Override
    public void run(String... args) {

        Customer customer = new Customer();
        Account savingsAccount = new Account();

        Date date = new Date();
        LocalDate localDate = date.toInstant().atZone(ZoneId.systemDefault()).toLocalDate();
        int year  = localDate.getYear();
        int month = localDate.getMonthValue();
        int day   = localDate.getDayOfMonth();

        try {
            customer.setFullName("Doctor Phoebe");
            customer.setAddress("123 Main St");
            customer.setPhoneNumber("123-456-7890");
            customer.setEmail("doctorphoebe@capaciti.org.za");

            savingsAccount.setAccountType("Savings");
            savingsAccount.setOpenedDate(LocalDate.of(year, month, day));
            savingsAccount.setBalance(1000.00);
            customerRepository.save(customer);
            accountRepository.save(savingsAccount);
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
