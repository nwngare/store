package com.book.store;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

/**
 * The BookStore application is an online bookstore built
 * with React, Spring Boot, and PostgreSQL.
 *
 * @author Nicholas Ngare
 * @version 1.0.0
 */
@SpringBootApplication
public class StoreApplication {

	private static final Logger log = LoggerFactory.getLogger(StoreApplication.class);

	public static void main(String[] args) {
		SpringApplication.run(StoreApplication.class, args);
	}

	/*
	@Bean
	public CommandLineRunner demo(BookGenreRepository repository) {
		return(args) -> {
			/*
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

			// fetch author by first name
			log.info("Author found with findByFirstName('Josh'):");
			log.info("--------------------------------------------");
			repository.findByFirstName("Josh").forEach(josh -> {
				log.info(josh.toString());
			});
			log.info("");

			// fetch all books
			log.info("Books found with findAll():");
			log.info("-------------------------------");
			for (Book book : repository.findAll()) {
				log.info(book.toString());
			}
			log.info("");

			// fetch an individual book by ID
			Book book = repository.findById(1L);
			log.info("Book found with findById(1L):");
			log.info("--------------------------------");
			log.info(book.toString());
			log.info("");

			// fetch books by title
			log.info("Book found with findByTitle('%Software%'):");
			log.info("--------------------------------------------");
			repository.findByTitleLike("%Software%").forEach(software -> {
				log.info(software.toString());
			});
			log.info("");


			// fetch all genres
			log.info("Genres found with findAll():");
			log.info("-------------------------------");
			for (Genre genre : repository.findAll()) {
				log.info(genre.toString());
			}
			log.info("");

			// fetch an individual genre by ID
			Genre genre = repository.findById(1L);
			log.info("Genre found with findById(1L):");
			log.info("--------------------------------");
			log.info(genre.toString());
			log.info("");

			// fetch genres by genre name
			log.info("Genre found with findByGenreLike('%Comput%'):");
			log.info("--------------------------------------------");
			repository.findByGenreLike("%Comput%").forEach(comput -> {
				log.info(comput.toString());
			});
			log.info("");

			// fetch all book_authors
			log.info("BookAuthors found with findAll():");
			log.info("-------------------------------");
			for (BookAuthor bookAuthor : repository.findAll()) {
				log.info(bookAuthor.toString());
			}
			log.info("");


			// fetch all book_genres
			log.info("BookGenres found with findAll():");
			log.info("-------------------------------");
			for (BookGenre bookGenre : repository.findAll()) {
				log.info(bookGenre.toString());
			}
			log.info("");
		};
	}
	*/

}