package com.book.store.entity;

import javax.persistence.*;
import java.time.OffsetDateTime;

/**
 * The BookStore application is an online bookstore built
 * with React, Spring Boot, and PostgreSQL
 *
 * @author Nicholas Ngare
 * @version 1.0.0
 */
@Entity
@Table(name = "customers")
public class Customer {

    //TODO: Modify db schema for Customer entity. Rethink which values should not be null.
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "customer_id")
    private Long id;

    @Column(
            name = "first_name",
            nullable = false
    )
    private String firstName;

    @Column(
            name = "last_name",
            nullable = false
    )
    private String lastName;

    @Column(
            name = "address_1",
            nullable = false
    )
    private String address1;

    @Column(
            name = "address_2",
            nullable = false
    )
    private String address2;

    @Column(
            name = "city",
            nullable = false
    )
    private String city;

    @Column(
            name = "state_abbr",
            nullable = false
    )
    private String stateAbbr;

    @Column(
            name = "postal_code"
    )
    private String postalCode;

    @Column(
            name = "country"
    )
    private String country;

    @Column(
            name = "phone"
    )
    private String phone;

    @Column(
            name = "email"
    )
    private String email;

    @Column(
            name = "customer_password"
    )
    private String customerPassword;

    @Column(
            name = "date_created"
    )
    private OffsetDateTime dateCreated;

    @Column(
            name = "date_modified"
    )
    private OffsetDateTime dateModified;

    @Column(
            name = "billing_address_1"
    )
    private String billingAddress1;

    @Column(
            name = "billing_address_2"
    )
    private String billingAddress2;

    @Column(
            name = "billing_city"
    )
    private String billingCity;

    @Column(
            name = "billing_region"
    )
    private String billingRegion;

    @Column(
            name = "billing_postal_code"
    )
    private String billingPostalCode;

    @Column(
            name = "billing_country"
    )
    private String billingCountry;

    @Column(
            name = "ship_address_1"
    )
    private String shipAddress1;

    @Column(
            name = "ship_address_2"
    )
    private String shipAddress2;

    @Column(
            name = "ship_city"
    )
    private String shipCity;

    @Column(
            name = "ship_region"
    )
    private String shipRegion;

    @Column(
            name = "ship_postal_code"
    )
    private String shipPostalCode;

    @Column(
            name = "ship_country"
    )
    private String shipCountry;

    @Column(
            name = "date_entered"
    )
    private OffsetDateTime dateEntered;

    @Override
    public String toString() {
        return "Customer{" +
                "id=" + id +
                ", firstName='" + firstName + '\'' +
                ", lastName='" + lastName + '\'' +
                ", address1='" + address1 + '\'' +
                ", address2='" + address2 + '\'' +
                ", city='" + city + '\'' +
                ", stateAbbr='" + stateAbbr + '\'' +
                ", postalCode='" + postalCode + '\'' +
                ", country='" + country + '\'' +
                ", phone='" + phone + '\'' +
                ", email='" + email + '\'' +
                ", customer_password='" + customerPassword + '\'' +
                ", dateCreated=" + dateCreated +
                ", dateModified=" + dateModified +
                ", billingAddress1='" + billingAddress1 + '\'' +
                ", billingAddress2='" + billingAddress2 + '\'' +
                ", billingCity='" + billingCity + '\'' +
                ", billingRegion='" + billingRegion + '\'' +
                ", billingPostalCode='" + billingPostalCode + '\'' +
                ", billingCountry='" + billingCountry + '\'' +
                ", shipAddress1='" + shipAddress1 + '\'' +
                ", shipAddress2='" + shipAddress2 + '\'' +
                ", shipCity='" + shipCity + '\'' +
                ", shipRegion='" + shipRegion + '\'' +
                ", shipPostalCode='" + shipPostalCode + '\'' +
                ", shipCountry='" + shipCountry + '\'' +
                ", dateEntered=" + dateEntered +
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

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public String getAddress1() {
        return address1;
    }

    public void setAddress1(String address1) {
        this.address1 = address1;
    }

    public String getAddress2() {
        return address2;
    }

    public void setAddress2(String address2) {
        this.address2 = address2;
    }

    public String getCity() {
        return city;
    }

    public void setCity(String city) {
        this.city = city;
    }

    public String getStateAbbr() {
        return stateAbbr;
    }

    public void setStateAbbr(String stateAbbr) {
        this.stateAbbr = stateAbbr;
    }

    public String getPostalCode() {
        return postalCode;
    }

    public void setPostalCode(String postalCode) {
        this.postalCode = postalCode;
    }

    public String getCountry() {
        return country;
    }

    public void setCountry(String country) {
        this.country = country;
    }

    public String getPhone() {
        return phone;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getCustomerPassword() {
        return customerPassword;
    }

    public void setCustomerPassword(String customerPassword) {
        this.customerPassword = customerPassword;
    }

    public OffsetDateTime getDateCreated() {
        return dateCreated;
    }

    public void setDateCreated(OffsetDateTime dateCreated) {
        this.dateCreated = dateCreated;
    }

    public OffsetDateTime getDateModified() {
        return dateModified;
    }

    public void setDateModified(OffsetDateTime dateModified) {
        this.dateModified = dateModified;
    }

    public String getBillingAddress1() {
        return billingAddress1;
    }

    public void setBillingAddress1(String billingAddress1) {
        this.billingAddress1 = billingAddress1;
    }

    public String getBillingAddress2() {
        return billingAddress2;
    }

    public void setBillingAddress2(String billingAddress2) {
        this.billingAddress2 = billingAddress2;
    }

    public String getBillingCity() {
        return billingCity;
    }

    public void setBillingCity(String billingCity) {
        this.billingCity = billingCity;
    }

    public String getBillingRegion() {
        return billingRegion;
    }

    public void setBillingRegion(String billingRegion) {
        this.billingRegion = billingRegion;
    }

    public String getBillingPostalCode() {
        return billingPostalCode;
    }

    public void setBillingPostalCode(String billingPostalCode) {
        this.billingPostalCode = billingPostalCode;
    }

    public String getBillingCountry() {
        return billingCountry;
    }

    public void setBillingCountry(String billingCountry) {
        this.billingCountry = billingCountry;
    }

    public String getShipAddress1() {
        return shipAddress1;
    }

    public void setShipAddress1(String shipAddress1) {
        this.shipAddress1 = shipAddress1;
    }

    public String getShipAddress2() {
        return shipAddress2;
    }

    public void setShipAddress2(String shipAddress2) {
        this.shipAddress2 = shipAddress2;
    }

    public String getShipCity() {
        return shipCity;
    }

    public void setShipCity(String shipCity) {
        this.shipCity = shipCity;
    }

    public String getShipRegion() {
        return shipRegion;
    }

    public void setShipRegion(String shipRegion) {
        this.shipRegion = shipRegion;
    }

    public String getShipPostalCode() {
        return shipPostalCode;
    }

    public void setShipPostalCode(String shipPostalCode) {
        this.shipPostalCode = shipPostalCode;
    }

    public String getShipCountry() {
        return shipCountry;
    }

    public void setShipCountry(String shipCountry) {
        this.shipCountry = shipCountry;
    }

    public OffsetDateTime getDateEntered() {
        return dateEntered;
    }

    public void setDateEntered(OffsetDateTime dateEntered) {
        this.dateEntered = dateEntered;
    }
}
