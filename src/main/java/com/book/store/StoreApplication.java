package com.book.store;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.jdbc.core.JdbcTemplate;

@SpringBootApplication
public class StoreApplication implements CommandLineRunner {

	private static final Logger log = LoggerFactory.getLogger(StoreApplication.class);

	public static void main(String[] args) {
		SpringApplication.run(StoreApplication.class, args);
	}

	@Autowired
	JdbcTemplate jdbcTemplate;

	// test connection to database
	@Override
	public void run(String... strings) throws Exception {
		log.info("Querying for author records where first_name = 'John':");
		jdbcTemplate.query("SELECT author_id, first_name, middle_name, last_name FROM bookstore.authors WHERE first_name = ?", new Object[] { "John" },
				(rs, rowNum) -> new Author(rs.getLong("author_id"), rs.getString("first_name"), rs.getString("middle_name"), rs.getString("last_name"))
		).forEach(author -> log.info(author.toString()));
	}

}