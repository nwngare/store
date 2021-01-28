package com.book.store;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

@SpringBootApplication
public class StoreApplication {

	private static final Logger log = LoggerFactory.getLogger(StoreApplication.class);

	public static void main(String[] args) {
		SpringApplication.run(StoreApplication.class, args);
	}

	@Bean
	public CommandLineRunner demo(AuthorRepository repository) {
		return(args) -> {
			// fetch all authors
			log.info("Authors found with findAll():");
			log.info("-------------------------------");
			for (Author author : repository.findAll()) {
				log.info(author.toString());
			}
			log.info("");

			// fetch an individual author by ID
			Author author = repository.findById(1L);
			log.info("Author found with findById(1L):");
			log.info("--------------------------------");
			log.info(author.toString());
			log.info("");

			// fetch authors by first name
			log.info("Author found with findByFirstName('Josh'):");
			log.info("--------------------------------------------");
			repository.findByFirstName("Josh").forEach(josh -> {
				log.info(josh.toString());
			});
			log.info("");
		};
	}

}