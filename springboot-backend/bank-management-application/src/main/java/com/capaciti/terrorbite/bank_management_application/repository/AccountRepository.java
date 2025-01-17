package com.capaciti.terrorbite.bank_management_application.repository;

import com.capaciti.terrorbite.bank_management_application.model.Account;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface AccountRepository extends JpaRepository<Account, Long> {

    List<Account> findByCustomerId(long id);
}
