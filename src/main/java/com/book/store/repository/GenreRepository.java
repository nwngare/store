package com.book.store.repository;

import com.book.store.entity.Genre;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

import java.util.List;

/**
 * The BookStore application is an online bookstore built
 * with React, Spring Boot, and PostgreSQL
 *
 * @author Nicholas Ngare
 * @version 1.0.0
 */
@RepositoryRestResource(collectionResourceRel = "genres", path = "genres")
public interface GenreRepository extends JpaRepository<Genre, Long> {

    List<Genre> findByGenreLike(String genre);

    Genre findById(long id);
}
