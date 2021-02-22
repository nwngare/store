package com.book.store.repository;

import com.book.store.entity.BookGenre;
import com.book.store.entity.BookGenreKey;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

/**
 * The BookStore application is an online bookstore built
 * with React, Spring Boot, and PostgreSQL
 *
 * @author Nicholas Ngare
 * @version 1.0.0
 */
@RepositoryRestResource(collectionResourceRel = "bookgenres", path = "bookgenres")
public interface BookGenreRepository extends JpaRepository<BookGenre, BookGenreKey> {
}
