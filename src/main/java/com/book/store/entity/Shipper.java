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
@Table(name = "shippers")
public class Shipper {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "shipper_id")
    private Long id;

    @Column(
            name = "company_name",
            nullable = false
    )
    private String companyName;

    @Column(
            name = "phone"
    )
    private String phone;

    @Override
    public String toString() {
        return "Shipper{" +
                "shipperId=" + id +
                ", companyName='" + companyName + '\'' +
                ", phone='" + phone + '\'' +
                '}';
    }

    public Long getShipperId() {
        return id;
    }

    public void setShipperId(Long shipperId) {
        this.id = shipperId;
    }

    public String getCompanyName() {
        return companyName;
    }

    public void setCompanyName(String companyName) {
        this.companyName = companyName;
    }

    public String getPhone() {
        return phone;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }
}
