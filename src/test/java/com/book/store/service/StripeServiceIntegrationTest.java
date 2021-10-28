package com.book.store.service;

import com.book.store.dto.ClientSecret;
import com.book.store.dto.PaymentIntentRequest;
import org.junit.jupiter.api.Test;
import static org.junit.jupiter.api.Assertions.assertNotNull;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

/**
 * The BookStore application is an online bookstore built
 * with React, Spring Boot, and PostgreSQL
 *
 * @author Nicholas Ngare
 * @version 1.0.0
 */
@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.NONE)
public class StripeServiceIntegrationTest {

    @Autowired
    private StripeService stripeService;

    @Test
    public void testCreateClientSecret() {

        // Create a payment intent
        PaymentIntentRequest paymentIntentRequest = new PaymentIntentRequest();
        paymentIntentRequest.setPaymentMethodType("card");
        paymentIntentRequest.setCurrency("usd");
        paymentIntentRequest.setAmount(100L);

        // Test creating client secret
        ClientSecret clientSecret = stripeService.createClientSecret(paymentIntentRequest);

        // Verify client secret returned from Stripe
        assertNotNull(clientSecret);
        assertNotNull(clientSecret.getClientSecret());
    }
}
