package com.munyu.wamis.service

import com.munyu.wamis.domain.Connection
import com.munyu.wamis.domain.Customer
import com.munyu.wamis.repository.ConnectionRepository
import com.munyu.wamis.repository.CustomerRepository
import com.munyu.wamis.resource.CustomerConnectionRequest
import org.springframework.beans.factory.annotation.Value
import org.springframework.stereotype.Service

@Service
class CustomerServiceImpl(private val customerRepository: CustomerRepository): CustomerService {

    @Value("\${connection.code:}")
    private val code: String = ""

    override fun addConnection(customerId: Long, connection: Connection): Customer {
       val customer : Customer = customerRepository.findById(customerId).get()
       customer.addConnection(connection)
       return customerRepository.save(customer)
    }

    override fun createCustomerConnection(customer: Customer): Customer {
        return customerRepository.save(customer);
    }
}

