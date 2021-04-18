package com.book.store.entity;

import com.sun.istack.NotNull;

import javax.persistence.*;
import java.util.Set;

/**
 * The BookStore application is an online bookstore built
 * with React, Spring Boot, and PostgreSQL.
 *
 * @author Nicholas Ngare
 * @version 1.0.0
 */

// TODO: determine if this entity needs to be serializable
@Entity
@Table(name = "authors")
public class Author {

    // Author entity properties
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="author_id")
    private Long id;

    @Column(
            name="first_name",
            nullable = false
    )
    private String firstName;

    @Column(
            name="middle_name",
            nullable = false
    )
    private String middleName;

    @Column(
            name="last_name",
            nullable = false
    )
    private String lastName;

    @ManyToMany(mappedBy = "authors")
    Set<Book> books;

    protected Author() {}

    public Author(String firstName, String middleName, String lastName) {
        this.firstName = firstName;
        this.middleName = middleName;
        this.lastName = lastName;
    }

    @Override
    public String toString() {
        return "Author{" +
                "id=" + id +
                ", firstName='" + firstName + '\'' +
                ", middleName='" + middleName + '\'' +
                ", lastName='" + lastName + '\'' +
                '}';
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getMiddleName() {
        return middleName;
    }

    public void setMiddleName(String middleName) {
        this.middleName = middleName;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }
}
