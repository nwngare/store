package com.book.store.entity;

import javax.persistence.*;
import java.math.BigDecimal;
import java.sql.Date;

/**
 * The BookStore application is an online bookstore built
 * with React, Spring Boot, and PostgreSQL
 *
 * @author Nicholas Ngare
 * @version 1.0.0
 */
@Entity
@Table(name = "order_details")
public class OrderDetail {

    //TODO Change postgres data type from MONEY to NUMERIC for the following columns: price, total, freight, sales_tax

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "order_detail_id")
    private Long id;

    @ManyToOne
    @JoinColumn(
            name = "order_id",
            referencedColumnName = "order_id"
    )
    private Order order;

    @ManyToOne
    @JoinColumn(
            name = "book_id",
            referencedColumnName = "book_id"
    )
    private Book book;

    @Column(name = "price")
    private BigDecimal price;

    @Column(name = "quantity")
    private Integer quantity;

    @Column(name = "discount")
    private BigDecimal discount;

    @Column(name = "total")
    private BigDecimal total;

    @Column(
            name = "fulfilled",
            columnDefinition = "BIT"
    )
    private Boolean fulfilled;

    @Column(name = "bill_date")
    private Date billDate;

    @Column(name = "ship_date")
    private Date shipDate;

    @ManyToOne
    @JoinColumn(
            name = "shipper_id",
            referencedColumnName = "shipper_id"
    )
    private Shipper shipper;

    @Column(name = "freight")
    private BigDecimal freight;

    @Column(name = "sales_tax")
    private BigDecimal salesTax;

    @Override
    public String toString() {
        return "OrderDetail{" +
                "order=" + order +
                ", book=" + book +
                ", price=" + price +
                ", quantity=" + quantity +
                ", discount=" + discount +
                ", total=" + total +
                ", fulfilled=" + fulfilled +
                ", billDate=" + billDate +
                ", shipDate=" + shipDate +
                ", shipper=" + shipper +
                ", freight=" + freight +
                ", sales_tax=" + salesTax +
                '}';
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Order getOrder() {
        return order;
    }

    public void setOrder(Order order) {
        this.order = order;
    }

    public Book getBook() {
        return book;
    }

    public void setBook(Book book) {
        this.book = book;
    }

    public BigDecimal getPrice() {
        return price;
    }

    public void setPrice(BigDecimal price) {
        this.price = price;
    }

    public Integer getQuantity() {
        return quantity;
    }

    public void setQuantity(Integer quantity) {
        this.quantity = quantity;
    }

    public BigDecimal getDiscount() {
        return discount;
    }

    public void setDiscount(BigDecimal discount) {
        this.discount = discount;
    }

    public BigDecimal getTotal() {
        return total;
    }

    public void setTotal(BigDecimal total) {
        this.total = total;
    }

    public Boolean getFulfilled() {
        return fulfilled;
    }

    public void setFulfilled(Boolean fulfilled) {
        this.fulfilled = fulfilled;
    }

    public Date getBillDate() {
        return billDate;
    }

    public void setBillDate(Date billDate) {
        this.billDate = billDate;
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
}
