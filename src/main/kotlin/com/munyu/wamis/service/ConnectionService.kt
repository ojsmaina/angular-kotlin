package com.munyu.wamis.service

import com.munyu.wamis.domain.Connection
import com.munyu.wamis.domain.Reading

interface ConnectionService {
    fun bill(connectionId: Long, reading: Reading): Connection
}