package com.book.store.entity;

import org.springframework.data.rest.core.config.Projection;

import java.util.Set;

/**
 * The BookStore application is an online bookstore built
 * with React, Spring Boot, and PostgreSQL
 *
 * @author Nicholas Ngare
 * @version 1.0.0
 */
@Projection(name = "bookExcerpt", types = Book.class)
public interface BookExcerpt {

    String getTitle();

    double getRating();

    Set<Author> getAuthors();

    Set<Genre> getGenres();

}
