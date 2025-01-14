package com.capaciti.terrorbite.bank_management_application.repository;

import com.capaciti.terrorbite.bank_management_application.model.Account;
import org.springframework.data.jpa.repository.JpaRepository;

public interface AccountRepository extends JpaRepository<Account, Long> {
}
