package com.book.store.entity;

import java.io.Serializable;
import java.util.Objects;

/**
 * The BookStore application is an online bookstore built
 * with React, Spring Boot, and PostgreSQL.
 *
 * @author Nicholas Ngare
 * @version 1.0.0
 */
public final class BookAuthorKey implements Serializable {

    public Long bookId;
    public Long authorId;

    public BookAuthorKey() {}

    public BookAuthorKey(Long bookId, Long authorId) {
        this.bookId = bookId;
        this.authorId = authorId;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        BookAuthorKey that = (BookAuthorKey) o;
        return bookId.equals(that.bookId) && authorId.equals(that.authorId);
    }

    @Override
    public int hashCode() {
        return Objects.hash(bookId, authorId);
    }

    @Override
    public String toString() {
        return "BookAuthorKey{" +
                "bookId=" + bookId +
                ", authorId=" + authorId +
                '}';
    }
}
