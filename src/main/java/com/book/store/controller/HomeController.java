package com.book.store.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

/**
 * The BookStore application is an online bookstore built
 * with React, Spring Boot, and PostgreSQL
 *
 * @author Nicholas Ngare
 * @version 1.0.0
 */
@Controller
public class HomeController {

    @GetMapping(value = "/")
    public String index() {
        return "index";
    }
}