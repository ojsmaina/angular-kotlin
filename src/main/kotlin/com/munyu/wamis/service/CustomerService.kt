package com.munyu.wamis.service

import com.munyu.wamis.domain.Customer
import com.munyu.wamis.rest.CustomerConnectionRequest

interface CustomerService {
    fun createCustomerConnection(customerConnectionRequest: CustomerConnectionRequest): Customer
}