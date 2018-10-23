package com.munyu.wamis.repository

import com.munyu.wamis.domain.Connection
import org.springframework.data.jpa.repository.JpaSpecificationExecutor
import org.springframework.data.repository.PagingAndSortingRepository
import org.springframework.stereotype.Repository

@Repository
interface ConnectionRepository  : PagingAndSortingRepository<Connection, Long>, JpaSpecificationExecutor<Connection> {}