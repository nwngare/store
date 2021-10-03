package com.book.store.dto;

/**
 * The BookStore application is an online bookstore built
 * with React, Spring Boot, and PostgreSQL
 *
 * @author Nicholas Ngare
 * @version 1.0.0
 */
public class PaymentIntentRequest {
    private String paymentMethodType;
    private String currency;
    private Long amount;

    public String getPaymentMethodType() {
        return paymentMethodType;
    }

    public String getCurrency() {
        return currency;
    }

    public Long getAmount() {
        return amount;
    }
}
