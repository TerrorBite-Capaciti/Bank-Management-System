package com.capaciti.terrorbite.bank_management_application.data_transfer_object;

import com.capaciti.terrorbite.bank_management_application.account_enum.AccountType;
import lombok.Data;
import lombok.Getter;
import lombok.Setter;

@Data
public class CustomerWithAccountDataTransferObject {

    private String fullName;
    private String address;
    private String phoneNumber;
    private String email;

    private AccountDataTransferObject accountDto;

    @Setter
    public static class AccountDataTransferObject {
        private AccountType accountType;
        @Getter
        private double balance;

        public String getAccountType() {
            return accountType.toString();
        }

    }
}
