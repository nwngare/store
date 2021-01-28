package com.book.store;

import javax.persistence.*;

/**
 * @author Nicholas Ngare
 */

// TODO: determine if this entity needs to be serializable
@Entity
@Table(name = "authors")
public class Author {

    // Author entity properties
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="author_id")
    private long id;

    @Column(name="first_name")
    private String firstName;

    @Column(name="middle_name")
    private String middleName;

    @Column(name="last_name")
    private String lastName;

    protected Author() {}

    public Author(long id, String firstName, String middleName, String lastName) {
        this.id = id;
        this.firstName = firstName;
        this.middleName = middleName;
        this.lastName = lastName;
    }

    @Override
    public String toString() {
        return String.format("Author[id=%d, firstName='%s', middleName='%s', lastName='%s']", id, firstName, middleName, lastName);
    }

    public Long getId() {
        return id;
    }

    public String getFirstName() {
        return firstName;
    }

    public String getMiddleName() {
        return middleName;
    }

    public String getLastName() {
        return lastName;
    }
}
