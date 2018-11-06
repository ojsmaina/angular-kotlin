package com.munyu.wamis.repository

import com.munyu.wamis.domain.Connection
import com.munyu.wamis.domain.Customer
import org.springframework.data.jpa.repository.JpaSpecificationExecutor
import org.springframework.data.jpa.repository.Query
import org.springframework.data.repository.PagingAndSortingRepository
import org.springframework.stereotype.Repository

@Repository
interface ConnectionRepository  : PagingAndSortingRepository<Connection, Long>, JpaSpecificationExecutor<Connection> {
    @Query("from Connection c where c.customer = ?1")
    fun findByCustomer(customer: Customer): List<Connection>
}