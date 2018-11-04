package com.munyu.wamis.resource

import com.munyu.wamis.domain.Connection
import com.munyu.wamis.domain.Customer
import com.munyu.wamis.repository.CustomerRepository
import com.munyu.wamis.repository.specifications.CustomerSpecification
import com.munyu.wamis.service.CustomerService
import org.springframework.data.domain.Page
import org.springframework.data.domain.PageRequest
import org.springframework.data.domain.Pageable
import org.springframework.data.domain.Sort
import org.springframework.web.bind.annotation.*
import javax.validation.Valid


@RestController
@RequestMapping("/customers")
class CustomerController(private val customerRepository: CustomerRepository,private val customerService: CustomerService) {

    @PostMapping("")
    fun createCustomer(@Valid @RequestBody customer: Customer): Customer {
       return customerService.createCustomerConnection(customer);
    }

    @GetMapping("{customerId}")
    fun getCustomer(@PathVariable("customerId") customerId: Long) : Customer{
        return customerRepository.findById(customerId).get()
    }

    @PostMapping("{customerId}/connect")
    fun connect(@PathVariable("customerId") customerId: Long, @RequestBody connection: Connection): Customer {
       return customerService.addConnection(customerId,connection);
    }

    @GetMapping("")
    fun getCustomers(
            @RequestParam("filter") filter: String,
            @RequestParam("sortOrder", defaultValue = "ASC") sortOrder: String,
            @RequestParam("pageNumber", defaultValue = "0") pageNumber: Int,
            @RequestParam("pageSize", defaultValue = "10") pageSize: Int,
            pageable: Pageable
    ): Page<Customer> {
        val direction: Sort.Direction = if(sortOrder == "asc".toUpperCase()){
            Sort.Direction.ASC
        }else{
            Sort.Direction.DESC
        };

        val pageNum: Int =  if(pageNumber == 0){
            pageNumber
        }else{
            pageNumber - 1
        };

        val pageRequest= PageRequest.of(pageNum , pageSize, direction, "id")
        return customerRepository.findAll(CustomerSpecification.findCustomersBySpecification(filter), pageRequest)
    }
}




