package com.capaciti.terrorbite.bank_management_application.custom_exception;

public class TransactionsException extends RuntimeException {
    public TransactionsException(String message) {
        super(message);
    }
}
