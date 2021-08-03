package com.book.store.entity;

import javax.persistence.*;
import java.math.BigDecimal;
import java.sql.Date;
import java.time.OffsetDateTime;

/**
 * The BookStore application is an online bookstore built
 * with React, Spring Boot, and PostgreSQL
 *
 * @author Nicholas Ngare
 * @version 1.0.0
 */
@Entity
@Table(name = "orders")
public class Order {

    //TODO Change postgres data type from MONEY to NUMERIC for the following columns: freight, sales_tax, paid

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "order_id")
    private Long id;

    @OneToOne
    @JoinColumn(name = "customer_id")
    private Customer customer;

    @Column(name = "order_date")
    private OffsetDateTime orderDate;

    @Column(name = "required_date")
    private Date requiredDate;

    @Column(name = "ship_date")
    private Date shipDate;

    @OneToOne
    @JoinColumn(
            name = "shipper_id",
            referencedColumnName = "shipper_id"
    )
    private Shipper shipper;

    @Column(name = "freight")
    private BigDecimal freight;

    @Column(name = "sales_tax")
    private BigDecimal salesTax;

    @Column(name = "time_stamp")
    private OffsetDateTime timeStamp;

    @Column(name = "fulfilled")
    private String fulfilled;

    @Column(
            name = "deleted",
            columnDefinition = "BIT"
    )
    private Boolean deleted;

    @Column(name = "paid")
    private BigDecimal paid;

    @Column(name = "payment_date")
    private OffsetDateTime paymentDate;

    @Override
    public String toString() {
        return "Order{" +
                "id=" + id +
                ", customer=" + customer +
                ", orderDate=" + orderDate +
                ", requiredDate=" + requiredDate +
                ", shipDate=" + shipDate +
                ", shipper=" + shipper +
                ", freight=" + freight +
                ", salesTax=" + salesTax +
                ", timeStamp=" + timeStamp +
                ", fulfilled='" + fulfilled + '\'' +
                ", deleted=" + deleted +
                ", paid=" + paid +
                ", paymentDate=" + paymentDate +
                '}';
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Customer getCustomer() {
        return customer;
    }

    public void setCustomer(Customer customer) {
        this.customer = customer;
    }

    public OffsetDateTime getOrderDate() {
        return orderDate;
    }

    public void setOrderDate(OffsetDateTime orderDate) {
        this.orderDate = orderDate;
    }

    public Date getRequiredDate() {
        return requiredDate;
    }

    public void setRequiredDate(Date requiredDate) {
        this.requiredDate = requiredDate;
    }

    public Date getShipDate() {
        return shipDate;
    }

    public void setShipDate(Date shipDate) {
        this.shipDate = shipDate;
    }

    public Shipper getShipper() {
        return shipper;
    }

    public void setShipper(Shipper shipper) {
        this.shipper = shipper;
    }

    public BigDecimal getFreight() {
        return freight;
    }

    public void setFreight(BigDecimal freight) {
        this.freight = freight;
    }

    public BigDecimal getSalesTax() {
        return salesTax;
    }

    public void setSalesTax(BigDecimal salesTax) {
        this.salesTax = salesTax;
    }

    public OffsetDateTime getTimeStamp() {
        return timeStamp;
    }

    public void setTimeStamp(OffsetDateTime timeStamp) {
        this.timeStamp = timeStamp;
    }

    public String getFulfilled() {
        return fulfilled;
    }

    public void setFulfilled(String fulfilled) {
        this.fulfilled = fulfilled;
    }

    public Boolean getDeleted() {
        return deleted;
    }

    public void setDeleted(Boolean deleted) {
        this.deleted = deleted;
    }

    public BigDecimal getPaid() {
        return paid;
    }

    public void setPaid(BigDecimal paid) {
        this.paid = paid;
    }

    public OffsetDateTime getPaymentDate() {
        return paymentDate;
    }

    public void setPaymentDate(OffsetDateTime paymentDate) {
        this.paymentDate = paymentDate;
    }
}
