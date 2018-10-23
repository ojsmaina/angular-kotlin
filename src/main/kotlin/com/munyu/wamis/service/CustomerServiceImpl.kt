package com.munyu.wamis.service

import com.munyu.wamis.domain.Connection
import com.munyu.wamis.domain.Customer
import com.munyu.wamis.repository.ConnectionRepository
import com.munyu.wamis.repository.CustomerRepository
import com.munyu.wamis.rest.CustomerConnectionRequest
import org.springframework.beans.factory.annotation.Value
import org.springframework.stereotype.Service

@Service
class CustomerServiceImpl(private val customerRepository: CustomerRepository, private val connectionRepository: ConnectionRepository): CustomerService {

    @Value("\${connection.code:}")
    private val code: String = ""

    override fun createCustomerConnection(customerConnectionRequest: CustomerConnectionRequest): Customer {
        val customer = customerRepository.save(Customer(
                customerConnectionRequest.firstName,
                customerConnectionRequest.middleName,
                customerConnectionRequest.surname,
                customerConnectionRequest.idNumber,
                customerConnectionRequest.email,
                customerConnectionRequest.phoneNumbers
        ));

        connectionRepository.save(Connection(customer,customerConnectionRequest.meterLocation,customerConnectionRequest.meterSerialNumber,null,code));
        return customer
    }
}

