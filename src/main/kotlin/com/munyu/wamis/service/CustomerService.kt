package com.munyu.wamis.service

import com.munyu.wamis.domain.Connection
import com.munyu.wamis.domain.Customer
import com.munyu.wamis.domain.Reading

interface CustomerService {
    fun createCustomerConnection(customer: Customer): Customer
    fun addConnection(customerId: Long, connection: List<Connection>) : Customer
    fun getCustomerConnections(customerId: Long): List<Connection>

}