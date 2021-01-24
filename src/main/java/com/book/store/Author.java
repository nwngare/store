package com.book.store;

public class Author {
    private long authorId;
    private String firstName, middleName, lastName;

    public Author(long authorId, String firstName, String middleName, String lastName) {
        this.authorId = authorId;
        this.firstName = firstName;
        this.middleName = middleName;
        this.lastName = lastName;
    }

    @Override
    public String toString() {
        return String.format("Author[authorId=%d, firstName='%s', middleName='%s', lastName='%s']", authorId, firstName, middleName, lastName);
    }

    // getters and setters
}
