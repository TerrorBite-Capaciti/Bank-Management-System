package com.capaciti.terrorbite.bank_management_application;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.security.jwt.Jwt;

import java.sql.*;

@SpringBootApplication(scanBasePackages = "com.capaciti.terrorbite.bank_management_application")
@EnableJpaRepositories(basePackages = "com.capaciti.terrorbite.bank_management_application.repository")
public class BankManagementApplication {

	public static void main(String[] args) {


		Logger logger = LoggerFactory.getLogger(BankManagementApplication.class);
		Connection connection = null;
		Statement statement = null;
		try {
			logger.debug("Creating database if not exist...");
			connection = DriverManager.getConnection("jdbc:postgresql://localhost:5432/", "postgres", "terrorbite");
			statement = connection.createStatement();
			((java.sql.Statement) statement).executeQuery("SELECT count(*) FROM pg_database WHERE datname = 'bytebank_db'");
			ResultSet resultSet = ((java.sql.Statement) statement).getResultSet();
			resultSet.next();
			int count = resultSet.getInt(1);

			if (count <= 0) {
				((java.sql.Statement) statement).executeUpdate("CREATE DATABASE bytebank_db");
				logger.debug("Database created.");
			} else {
				logger.debug("Database already exist.");
			}
		} catch (SQLException e) {
			logger.error(e.toString());
		} finally {
			try {
				if (statement != null) {
					((java.sql.Statement) statement).close();
					logger.debug("Closed Statement.");
				}
				if (connection != null) {
					logger.debug("Closed Connection.");
					connection.close();
				}
			} catch (SQLException e) {
				logger.error(e.toString());
			}
		}


		SpringApplication.run(BankManagementApplication.class, args);
		System.out.println("System is running");
	}
}
