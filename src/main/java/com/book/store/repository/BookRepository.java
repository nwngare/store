package com.book.store.repository;

import com.book.store.entity.Book;
import com.book.store.entity.BookExcerpt;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.data.rest.core.annotation.RestResource;

import java.util.List;

/**
 * The BookStore application is an online bookstore built
 * with React, Spring Boot, and PostgreSQL.
 *
 * @author Nicholas Ngare
 * @version 1.0.0
 */
@RepositoryRestResource(excerptProjection = BookExcerpt.class)
public interface BookRepository extends PagingAndSortingRepository<Book, Long> {

    @RestResource(path = "title", rel = "title")
    Book findByTitle(@Param("title") String title);

}
