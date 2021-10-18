package com.book.store.service;

import com.book.store.dto.ClientSecret;
import com.book.store.dto.PaymentIntentRequest;
import com.stripe.Stripe;
import com.stripe.exception.StripeException;
import com.stripe.model.PaymentIntent;
import com.stripe.param.PaymentIntentCreateParams;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

import javax.annotation.PostConstruct;

/**
 * The BookStore application is an online bookstore built
 * with React, Spring Boot, and PostgreSQL
 *
 * @author Nicholas Ngare
 * @version 1.0.0
 */
@Service
public class StripeService {

    @Value("${STRIPE_SECRET_KEY}")
    private String stripeSecretKey;

    @PostConstruct
    public void init() {
        Stripe.apiKey = stripeSecretKey;
    }

    /**
     * method to create payment intent on Stripe backend and return client secret
     * @param paymentIntentRequest
     * @return clientSecret
     */
    public ClientSecret createClientSecret(PaymentIntentRequest paymentIntentRequest) {

        ClientSecret clientSecret = new ClientSecret();
        try {
        PaymentIntentCreateParams.Builder paramsBuilder = new PaymentIntentCreateParams.Builder()
                .addPaymentMethodType(paymentIntentRequest.getPaymentMethodType())
                .setCurrency(paymentIntentRequest.getCurrency())
                .setAmount(paymentIntentRequest.getAmount());

        PaymentIntentCreateParams params = paramsBuilder.build();

        PaymentIntent paymentIntent = PaymentIntent.create(params);
        clientSecret.setClientSecret(paymentIntent.getClientSecret());

        return clientSecret;

        } catch(StripeException se) {
            System.out.println(se);
        } catch(Exception e) {
            System.out.println(e);
        }

        return clientSecret;
    }
}