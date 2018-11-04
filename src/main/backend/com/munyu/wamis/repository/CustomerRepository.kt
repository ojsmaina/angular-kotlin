package com.munyu.wamis.repository

import com.munyu.wamis.domain.Customer
import org.springframework.data.jpa.repository.JpaSpecificationExecutor
import org.springframework.data.jpa.repository.Query
import org.springframework.data.repository.PagingAndSortingRepository
import org.springframework.stereotype.Repository

@Repository
interface CustomerRepository : PagingAndSortingRepository<Customer, Long>, JpaSpecificationExecutor<Customer> {}