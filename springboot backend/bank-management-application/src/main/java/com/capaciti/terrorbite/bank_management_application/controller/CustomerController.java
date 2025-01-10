package com.capaciti.terrorbite.bank_management_application.controller;

import com.capaciti.terrorbite.bank_management_application.model.Customer;
import com.capaciti.terrorbite.bank_management_application.service.CustomerService;

import com.capaciti.terrorbite.bank_management_application.service.impl.CustomerServiceImpl;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/customers")
public class CustomerController {

//    @Autowired
    private final CustomerServiceImpl customerService;

    public CustomerController(CustomerServiceImpl customerService) {
        this.customerService = customerService;
    }

    @GetMapping("{id}")
    // e.g., http://localhost:PORT/api/customers/1
    public ResponseEntity<Customer> getCustomerById(@PathVariable("id") long customerId) {
        return new ResponseEntity<Customer>(customerService.getCustomerById(customerId), HttpStatus.OK);
    }

    @PostMapping("/createCustomer")
    public ResponseEntity<Customer> createCustomer(@RequestBody Customer newCustomer) {
        Customer savedCustomer = customerService.createNewCustomer(newCustomer);
        System.out.println();
        System.out.println("Customer created...");
        return ResponseEntity.status(HttpStatus.CREATED).body(newCustomer);
//        return new ResponseEntity<Customer>(customerService.createNewCustomer(newCustomer), HttpStatus.CREATED);
    }
}
