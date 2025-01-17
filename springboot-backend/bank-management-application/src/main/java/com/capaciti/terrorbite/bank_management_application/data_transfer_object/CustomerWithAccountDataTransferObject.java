package com.capaciti.terrorbite.bank_management_application.data_transfer_object;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Data;

@Data
public class CustomerWithAccountDataTransferObject {

    private String fullName;
    private String address;
    private String password;
    private String matchingPassword;
    private String phoneNumber;
    private String email;

    @JsonProperty("account")
    private AccountDataTransferObject accountDto;


    public String getFullName() {
        return fullName;
    }

    public String getAddress() {
        return address;
    }

    public String getPassword() {
        return password;
    }

    public String getMatchingPassword() {
        return matchingPassword;
    }

    public String getPhoneNumber() {
        return phoneNumber;
    }

    public String getEmail() {
        return email;
    }

    public AccountDataTransferObject getAccountDto() {
        System.out.println(accountDto);
        return accountDto;
    }

    public void setAccountDto(AccountDataTransferObject accountDto) {
        this.accountDto = accountDto;
    }

    @Data
    public static class AccountDataTransferObject {
        private String accountType;
        private double balance;

        public String getAccountType() {
            return accountType;
        }

        public void setAccountType(String accountType) {
            this.accountType = accountType;
        }

        public double getBalance() {
            return balance;
        }

        public void setBalance(double balance) {
            this.balance = balance;
        }
    }
}
