package com.munyu.wamis.repository

import com.munyu.wamis.domain.Connection
import com.munyu.wamis.domain.Customer
import org.springframework.data.jpa.repository.JpaSpecificationExecutor
import org.springframework.data.jpa.repository.Query
import org.springframework.data.repository.PagingAndSortingRepository
import org.springframework.stereotype.Repository

@Repository
interface ConnectionRepository  : PagingAndSortingRepository<Connection, Long>, JpaSpecificationExecutor<Connection> {
    @Query("select c from Connection c join fetch c.readings r where c.customer = ?1")
    fun findByCustomer(customer: Customer): List<Connection>
}