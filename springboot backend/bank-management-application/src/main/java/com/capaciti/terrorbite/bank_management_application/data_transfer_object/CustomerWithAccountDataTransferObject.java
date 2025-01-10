package com.capaciti.terrorbite.bank_management_application.data_transfer_object;

import com.capaciti.terrorbite.bank_management_application.account_enum.AccountType;
import lombok.Data;

@Data
public class CustomerWithAccountDataTransferObject {

    private String fullName;
    private String address;
    private String phoneNumber;
    private String email;

    private AccountDataTransferObject accountDto;

    public static class AccountDataTransferObject {
        private AccountType accountType;
        private double balance;
    }
}
