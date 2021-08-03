package com.book.store.repository;


import com.book.store.entity.Author;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

import java.util.List;

/**
 * The BookStore application is an online bookstore built
 * with React, Spring Boot, and PostgreSQL.
 *
 * @author Nicholas Ngare
 * @version 1.0.0
 */
@RepositoryRestResource(collectionResourceRel = "authors", path = "authors")
public interface AuthorRepository extends PagingAndSortingRepository<Author, Long> {

    // Query methods using property expressions
    List<Author> findByFirstName(String firstName);
    List<Author> findByMiddleName(String middleName);
    List<Author> findByLastName(String lastName);

    // Example of a Spring Data JPA derived query
    List<Author> findByFirstNameOrMiddleNameOrLastNameContaining(String firstName, String middleName, String lastName);

    Author findById(long id);
}
