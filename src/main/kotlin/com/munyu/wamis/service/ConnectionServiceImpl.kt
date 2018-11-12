package com.munyu.wamis.service

import com.munyu.wamis.domain.Connection
import com.munyu.wamis.domain.Reading
import com.munyu.wamis.repository.ConnectionRepository
import org.springframework.stereotype.Service

@Service
class ConnectionServiceImpl (private val connectionRepository: ConnectionRepository):ConnectionService {

    override fun bill(connectionId: Long,reading: Reading): Connection {
        val connection: Connection = connectionRepository.findById(connectionId).get()
        connection.bill(listOf(reading))
        return connectionRepository.save(connection)
    }
}