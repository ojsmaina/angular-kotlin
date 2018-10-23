package com.munyu.wamis.rest

import com.munyu.wamis.domain.Customer
import com.munyu.wamis.domain.PhoneNumber
import com.munyu.wamis.repository.CustomerRepository
import com.munyu.wamis.repository.specifications.CustomerSpecification
import com.munyu.wamis.service.CustomerService
import org.springframework.data.domain.*
import org.springframework.web.bind.annotation.*
import javax.validation.Valid


@RestController
@RequestMapping("/customers")
class CustomerController(private val customerRepository: CustomerRepository,private val customerService: CustomerService) {

    @PostMapping("")
    fun createCustomer(@Valid @RequestBody customerConnectionRequest: CustomerConnectionRequest): Customer {
       return customerService.createCustomerConnection(customerConnectionRequest);
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

class CustomerConnectionRequest(val firstName: String, val middleName: String, val surname: String, val idNumber: String, val email: String, val phoneNumbers: List<PhoneNumber>, val meterLocation: String,val meterSerialNumber: String) {
}




