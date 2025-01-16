package com.capaciti.terrorbite.bank_management_application.account_enum;

public enum AccountType {
    SAVINGS {

        // overriding toString() method for database
        @Override
        public String toString() {
            return "savings";
        }
    },
    PREMIUM {
        @Override
        public String toString() {
            return "premium";
        }
    }
}
