package com.book.store.entity;

import org.springframework.data.rest.core.config.Projection;

/**
 * The BookStore application is an online bookstore built
 * with React, Spring Boot, and PostgreSQL
 *
 * @author Nicholas Ngare
 * @version 1.0.0
 */
@Projection(name = "genreExcerpt", types = Genre.class)
public interface GenreExcerpt {

    Long getId();
    String getGenre();

}
