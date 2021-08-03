package com.book.store.entity;

import javax.persistence.*;

/**
 * The BookStore application is an online bookstore built
 * with React, Spring Boot, and PostgreSQL
 *
 * @author Nicholas Ngare
 * @version 1.0.0
 */
@Entity
@Table(name = "stripe_customers")
public class StripeCustomer {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "stripe_customer_id")
    private Long id;

    @Column(
            name = "stripe_id",
            nullable = false
    )
    private String stripeId;

    @OneToOne
    @JoinColumn(name = "customer_id")
    private Customer customer;

    @Override
    public String toString() {
        return "StripeCustomer{" +
                "stripeCustomerId=" + id +
                ", stripeId='" + stripeId + '\'' +
                ", customer=" + customer +
                '}';
    }

    public Long getStripeCustomerId() {
        return id;
    }

    public void setStripeCustomerId(Long stripeCustomerId) {
        this.id = stripeCustomerId;
    }

    public String getStripeId() {
        return stripeId;
    }

    public void setStripeId(String stripeId) {
        this.stripeId = stripeId;
    }

    public Customer getCustomer() {
        return customer;
    }

    public void setCustomer(Customer customer) {
        this.customer = customer;
    }
}
