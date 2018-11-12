package com.munyu.wamis.resource

import com.munyu.wamis.domain.Connection
import com.munyu.wamis.domain.Reading
import com.munyu.wamis.repository.ConnectionRepository
import com.munyu.wamis.repository.specifications.ConnectionSpecification
import com.munyu.wamis.service.ConnectionService
import com.munyu.wamis.service.CustomerService
import org.springframework.data.domain.Page
import org.springframework.data.domain.PageRequest
import org.springframework.data.domain.Pageable
import org.springframework.data.domain.Sort
import org.springframework.web.bind.annotation.*

@RestController
@RequestMapping("/connections")
class ConnectionController(private val connectionRepository: ConnectionRepository,private val connectionService: ConnectionService) {

    @GetMapping("{connectionId}")
    fun getCustomer(@PathVariable("connectionId") connectionId: Long) : Connection {
        return connectionRepository.findById(connectionId).get()
    }

    @PostMapping("{connectionId}/bill")
    fun billConnection(@PathVariable("connectionId") connectionId: Long,@RequestBody reading: Reading) : Connection{
        return connectionService.bill(connectionId,reading)
    }

    @GetMapping("")
    fun getConnections(
            @RequestParam("filter") filter: String,
            @RequestParam("sortOrder", defaultValue = "ASC") sortOrder: String,
            @RequestParam("pageNumber", defaultValue = "0") pageNumber: Int,
            @RequestParam("pageSize", defaultValue = "10") pageSize: Int,
            pageable: Pageable
    ): Page<Connection> {
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
        return connectionRepository.findAll(ConnectionSpecification.findConnectionsBySpecification(filter), pageRequest)

    }
}