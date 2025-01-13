package com.capaciti.terrorbite.bank_management_application.data_transfer_object;

import com.capaciti.terrorbite.bank_management_application.account_enum.AccountType;
import lombok.Data;
//import lombok.Getter;
//import lombok.Setter;

@Data
public class CustomerWithAccountDataTransferObject {

    private String fullName;
    private String address;
    private String phoneNumber;
    private String email;

    private AccountDataTransferObject accountDto;


    public String getFullName() {
        return fullName;
    }

    public String getAddress() {
        return address;
    }

    public String getPhoneNumber() {
        return phoneNumber;
    }

    public String getEmail() {
        return email;
    }

    public AccountDataTransferObject getAccountDto() {
        return accountDto;
    }

    public static class AccountDataTransferObject {
        private AccountType accountType;
        private double balance;

        public String getAccountType() {
            return accountType.toString();
        }

        public double getBalance() {
            return balance;
        }
    }
}
