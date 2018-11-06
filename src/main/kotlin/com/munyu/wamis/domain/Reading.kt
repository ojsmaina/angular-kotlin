package com.munyu.wamis.domain

import com.fasterxml.jackson.annotation.JsonFormat
import java.util.*
import javax.persistence.*

@Entity
data class Reading(
        @Column(nullable = false)
        @Temporal(TemporalType.DATE)
        @JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "yyyy-MM-dd")
        val date_of_reading: Date,

        @Column(nullable = false)
        val previousReading: String,

        @Column(nullable = false)
        val currentReading: String,

        @ManyToOne(fetch = FetchType.EAGER)
        @JoinColumn(name = "connection_id")
       val connection: Connection
) : AbstractAuditableEntity()