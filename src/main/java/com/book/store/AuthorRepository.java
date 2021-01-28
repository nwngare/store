package com.book.store;

import org.springframework.data.repository.CrudRepository;

import java.util.List;

/**
 * @author Nicholas Ngare
 */
public interface AuthorRepository extends CrudRepository<Author, Long> {

    List<Author> findByFirstName(String firstName);

    Author findById(long id);
}
