package com.book.store.repository;

import com.book.store.entity.BookAuthor;
import com.book.store.entity.BookAuthorKey;
import org.springframework.data.jpa.repository.JpaRepository;

/**
 * The BookStore application is an online bookstore built
 * with React, Spring Boot, and PostgreSQL
 *
 * @author Nicholas Ngare
 * @version 1.0.0
 */
public interface BookAuthorRepository extends JpaRepository<BookAuthor, BookAuthorKey> {
}
