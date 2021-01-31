package com.book.store;

import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

/**
 * The BookStore application is an online bookstore built
 * with React, Spring Boot, and PostgreSQL
 *
 * @author Nicholas Ngare
 * @version 1.0.0
 */
public interface GenreRepository extends JpaRepository<Genre, Long> {

    List<Genre> findByGenreLike(String genre);

    Genre findById(long id);
}
