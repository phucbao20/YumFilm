package com.example.yumfilm.repository;

import com.example.yumfilm.model.InvoiceDetail;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface InvoiceDetailRepository extends JpaRepository<InvoiceDetail, Long> {
    @Query(value = "SELECT COUNT(id.invoiceDetailId) FROM InvoiceDetail id where id.invoice.status = true")
    long getAllTicket();

    @Query(value = "SELECT f.filmName, f.filmImage, f.price, COUNT(id.invoiceDetailId) as Ticket , f.price * COUNT(id.invoiceDetailId) as Total "
            + " FROM InvoiceDetail id "
            + " LEFT JOIN id.invoice i"
            + "	LEFT JOIN id.showTime st"
            + " LEFT JOIN st.film f"
            + " WHERE f.status = true and i.status = true"
            + " GROUP BY f.filmName, f.filmImage, f.price "
            + " ORDER BY COUNT(id.invoiceDetailId) DESC "
            + " limit 5 ")
    List<Object[]> getTop5Film();
}
