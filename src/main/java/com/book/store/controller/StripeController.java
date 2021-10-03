package com.book.store.controller;

import com.book.store.dto.ClientSecret;
import com.book.store.dto.PaymentIntentRequest;
import com.book.store.service.StripeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseBody;

/**
 * The BookStore application is an online bookstore built
 * with React, Spring Boot, and PostgreSQL
 *
 * @author Nicholas Ngare
 * @version 1.0.0
 */
@Controller
public class StripeController {

    @Autowired
    private StripeService stripeService;

    @PostMapping(value = "/create-payment-intent")
    @ResponseBody
    public ClientSecret createClientSecret(@RequestBody PaymentIntentRequest paymentIntentRequest) {
        return stripeService.createClientSecret(paymentIntentRequest);
    }

}
