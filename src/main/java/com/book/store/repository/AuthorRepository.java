package com.book.store.repository;


import com.book.store.entity.Author;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

/**
 * The BookStore application is an online bookstore built
 * with React, Spring Boot, and PostgreSQL.
 *
 * @author Nicholas Ngare
 * @version 1.0.0
 */
public interface AuthorRepository extends JpaRepository<Author, Long> {

    List<Author> findByFirstName(String firstName);

    Author findById(long id);
}
