package com.capaciti.terrorbite.bank_management_application.model;

import jakarta.persistence.*;
import lombok.Data;

import java.util.List;

@Entity
@Data
//@Table(name = "customers")
//@SecondaryTable(name = "accounts", pkJoinColumns = @PrimaryKeyJoinColumn(name = "customer_id"))
public class Customer {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

//    @Column(name = "full_name")
    private String fullName;

//    @Column(name = "address")
    private String address;

//    @Column(name = "phone_number")
    private String phoneNumber;

//    @Column(name = "email")
    private String email;

    @OneToMany(mappedBy = "customer", cascade = CascadeType.ALL, fetch = FetchType.EAGER)
//    @Embedded
    private List<Account> accounts;

    //  Getters and Setters for service to use
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getFullName() {
        return fullName;
    }

    public void setFullName(String fullName) {
        this.fullName = fullName;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public String getPhoneNumber() {
        return phoneNumber;
    }

    public void setPhoneNumber(String phoneNumber) {
        this.phoneNumber = phoneNumber;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public List<Account> getAccounts() {
        return accounts;
    }

    public void setAccounts(List<Account> accounts) {
        this.accounts = accounts;
    }
}
