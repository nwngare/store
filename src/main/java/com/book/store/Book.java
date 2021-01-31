package com.book.store;

import javax.persistence.*;
import java.sql.Date;

/**
 * The BookStore application is an online bookstore built
 * with React, Spring Boot, and PostgreSQL.
 *
 * @author Nicholas Ngare
 * @version 1.0.0
 */
@Entity
@Table(name = "books")
public class Book {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "book_id")
    private Long id;

    private String title;

    @Column(name = "total_pages")
    private Integer totalPages;

    private double rating;

    private String isbn;

    private Date publishedDate;

    @ManyToOne
    @JoinColumn(
            name = "publisher_id",
            referencedColumnName = "publisher_id"
    )
    private Publisher publisher;

    protected Book() {}

    public Book(String title, Integer totalPages, double rating, String isbn, Date publishedDate) {
        this.title = title;
        this.totalPages = totalPages;
        this.rating = rating;
        this.isbn = isbn;
        this.publishedDate = publishedDate;
    }

    @Override
    public String toString() {
        return "Book{" +
                "id=" + id +
                ", title='" + title + '\'' +
                ", totalPages=" + totalPages +
                ", rating=" + rating +
                ", isbn='" + isbn + '\'' +
                ", publishedDate=" + publishedDate +
                ", publisher=" + publisher +
                '}';
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public Integer getTotalPages() {
        return totalPages;
    }

    public void setTotalPages(Integer totalPages) {
        this.totalPages = totalPages;
    }

    public double getRating() {
        return rating;
    }

    public void setRating(double rating) {
        this.rating = rating;
    }

    public String getIsbn() {
        return isbn;
    }

    public void setIsbn(String isbn) {
        this.isbn = isbn;
    }

    public Date getPublishedDate() {
        return publishedDate;
    }

    public void setPublishedDate(Date publishedDate) {
        this.publishedDate = publishedDate;
    }

    public Publisher getPublisher() {
        return publisher;
    }

    public void setPublisher(Publisher publisher) {
        this.publisher = publisher;
    }
}
