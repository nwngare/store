package com.book.store;

import java.io.Serializable;
import java.util.Objects;

/**
 * The BookStore application is an online bookstore built
 * with React, Spring Boot, and PostgreSQL
 *
 * @author Nicholas Ngare
 * @version 1.0.0
 */
public class BookGenreKey implements Serializable {

    public Long bookId;
    public Long genreId;

    public BookGenreKey() {}

    public BookGenreKey(Long bookId, Long genreId) {
        this.bookId = bookId;
        this.genreId = genreId;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        BookGenreKey that = (BookGenreKey) o;
        return bookId.equals(that.bookId) && genreId.equals(that.genreId);
    }

    @Override
    public int hashCode() {
        return Objects.hash(bookId, genreId);
    }

    @Override
    public String toString() {
        return "BookGenreKey{" +
                "bookId=" + bookId +
                ", genreId=" + genreId +
                '}';
    }
}
