package com.book.store.repository;

import com.book.store.entity.BookGenre;
import com.book.store.entity.BookGenreKey;
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
