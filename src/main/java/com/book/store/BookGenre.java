package com.book.store;

import javax.persistence.*;

/**
 * The BookStore application is an online bookstore built
 * with React, Spring Boot, and PostgreSQL
 *
 * @author Nicholas Ngare
 * @version 1.0.0
 */
// TODO: Determine if BookGenre Entity should use @IdClass or @Embeddable / @EmbeddedId annotations
@Entity
@Table(name = "book_genres")
@IdClass(BookGenreKey.class)
public class BookGenre {

    @Id
    @Column(name = "book_id")
    private Long bookId;

    @Id
    @Column(name = "genre_id")
    private Long genreId;

    protected BookGenre() {}

    public BookGenre(Long bookId, Long genreId) {
        this.bookId = bookId;
        this.genreId = genreId;
    }

    @Override
    public String toString() {
        return "BookGenre{" +
                "bookId=" + bookId +
                ", genreId=" + genreId +
                '}';
    }

    public Long getBookId() {
        return bookId;
    }

    public void setBookId(Long bookId) {
        this.bookId = bookId;
    }

    public Long getGenreId() {
        return genreId;
    }

    public void setGenreId(Long genreId) {
        this.genreId = genreId;
    }
}
