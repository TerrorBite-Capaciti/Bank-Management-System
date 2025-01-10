package com.capaciti.terrorbite.bank_management_application.model;

import jakarta.persistence.*;
import lombok.Data;
import org.springframework.cglib.core.Local;

import java.time.LocalDate;
import java.util.Date;
import java.util.List;

@Entity
@Data
//@Table(name = "accounts")
//@Embeddable
//@SecondaryTable(name = "transactions", pkJoinColumns = @PrimaryKeyJoinColumn(name = "account_id"))
public class Account {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
//    @Column(name = "account_id", nullable = false)
    private Long accountId;

//    @Column(name = "account_id", nullable = false)
//    private long accountId;
    @Column(unique = true, nullable = false)
    private String accountNumber;

//    @Column(name = "account_type", nullable = false)
    private String accountType;

//    @Column(name = "balance", nullable = false)
    private double balance;

//    @Column(name = "opened_date", nullable = false)
    private LocalDate openedDate;

    @ManyToOne
    @JoinColumn(name = "customer_id", nullable = false)
    private Customer customer;

    @OneToMany(mappedBy = "account", cascade = CascadeType.ALL, orphanRemoval = true)
//    private List<Transaction> transactions;
//    @Embedded
    private List<Transaction> transactions;

    //  Getters and Setters for service to use

    public Long getId() {
        return accountId;
    }

    public void setId(Long id) {
        this.accountId = id;
    }

    public Long getAccountId() {
        return accountId;
    }

    public void setAccountId(Long accountId) {
        this.accountId = accountId;
    }

    public String getAccountType() {
        return accountType;
    }

    public void setAccountType(String accountType) {
        this.accountType = accountType;
    }

    public String getAccountNumber() {
        return accountNumber;
    }

    public void setAccountNumber(String accountNumber) {
        this.accountNumber = accountNumber;
    }

    
    public double getBalance() {
        return balance;
    }

    public void setBalance(double balance) {
        this.balance = balance;
    }

    public LocalDate getOpenedDate() {
        return openedDate;
    }

    public void setOpenedDate(LocalDate openedDate) {
        this.openedDate = openedDate;
    }

    public Customer getCustomer() {
        return customer;
    }

    public void setCustomer(Customer customer) {
        this.customer = customer;
    }

    public List<Transaction> getTransactions() {
        return transactions;
    }

    public void setTransactions(List<Transaction> transactions) {
        this.transactions = transactions;
    }
}
