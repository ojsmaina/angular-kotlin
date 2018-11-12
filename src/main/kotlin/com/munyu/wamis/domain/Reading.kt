package com.munyu.wamis.domain

import com.fasterxml.jackson.annotation.JsonFormat
import java.util.*
import javax.persistence.*

@Entity
data class Reading(
        @Column(nullable = false)
        @Temporal(TemporalType.DATE)
        @JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "yyyy-MM-dd")
        val date_of_reading: Date = Date(),

        @Column(nullable = false)
        val previousReading: Int,

        @Column(nullable = false)
        val currentReading: Int

) : AbstractAuditableEntity(){

        @ManyToOne(fetch = FetchType.EAGER)
        @JoinColumn(name = "connection_id")
        var connection: Connection? = null

        @Column(nullable = false)
        var units: Int? = null

        init{
           this.units = currentReading - previousReading;
        }

        constructor(date_of_reading: Date, previousReading: Int, currentReading: Int,units: Int,connection: Connection): this(date_of_reading,previousReading,currentReading){
                this.connection = connection
        }
}