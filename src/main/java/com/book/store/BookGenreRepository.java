package com.book.store;

import org.springframework.data.jpa.repository.JpaRepository;

/**
 * The BookStore application is an online bookstore built
 * with React, Spring Boot, and PostgreSQL
 *
 * @author Nicholas Ngare
 * @version 1.0.0
 */
public interface BookGenreRepository extends JpaRepository<BookGenre, BookGenreKey> {
}
