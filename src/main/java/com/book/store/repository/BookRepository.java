package com.book.store.repository;

import com.book.store.entity.Book;
import com.book.store.entity.BookExcerpt;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.data.rest.core.annotation.RestResource;
import org.springframework.transaction.annotation.Transactional;

import java.sql.Date;
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

    // Query methods using property expressions
    List<BookExcerpt> findByTotalPages(Integer totalPages);
    List<BookExcerpt> findByRating(double rating);
    BookExcerpt findByIsbn(String isbn);
    List<BookExcerpt> findByPublishedDate(Date publishedDate);

    // Query methods for REST endpoints that pass URL parameters
    @RestResource(path = "title", rel = "title")
    BookExcerpt findByTitle(@Param("title") String title);

//    @Query("SELECT b.id AS id, b.title AS title, b.rating AS rating, b.authors AS authors, b.genres AS genres FROM Books b where ")
    Page<Book> findByGenresId(Long Id, Pageable page);

}
