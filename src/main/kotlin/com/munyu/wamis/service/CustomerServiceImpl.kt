package com.munyu.wamis.service

import com.munyu.wamis.domain.Connection
import com.munyu.wamis.domain.Customer
import com.munyu.wamis.repository.ConnectionRepository
import com.munyu.wamis.repository.CustomerRepository
import org.springframework.stereotype.Service

@Service
class CustomerServiceImpl(private val customerRepository: CustomerRepository, private val connectionRepository: ConnectionRepository): CustomerService {
    override fun addConnection(customerId: Long, connection: Connection): Customer {
       val customer : Customer = customerRepository.findById(customerId).get()
       customer.addConnection(listOf(connection))
       return customerRepository.save(customer)
    }

    override fun createCustomerConnection(customer: Customer): Customer {
       customer.connections.forEach { connection -> connection.customer = customer }
       return customerRepository.save(customer);
    }

    override fun getCustomerConnections(customerId: Long): List<Connection> {
        val customer : Customer = customerRepository.findById(customerId).get()
        return connectionRepository.findByCustomer(customer);
    }
}

