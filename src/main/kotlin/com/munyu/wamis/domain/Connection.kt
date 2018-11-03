package com.munyu.wamis.domain

import org.springframework.beans.factory.annotation.Value
import javax.persistence.*

@Entity
data class Connection(
      /*  @ManyToOne(fetch = FetchType.LAZY)
        @JoinColumn(name = "customer_id", updatable = false, nullable = false)
        val customer: Customer,*/

        @Column(nullable = false,columnDefinition = "TEXT")
        val meterLocation: String,

        @Column(nullable = false)
        val meterSerialNumber: String,

        @Enumerated(EnumType.STRING)
        @Column(nullable = true)
        var status: ConnectionStatus? = null

) : AbstractAuditableEntity(){
    init{}
    @Column(nullable = false)
    var connectionCode: String = "";


    constructor(meterLoc: String,serialNumber: String,status: ConnectionStatus?, connectionCode: String ) : this(meterLoc,serialNumber,status){
        this.connectionCode = connectionCode.plus(this.generateConnectionCode())
        this.status = ConnectionStatus.ACTIVE;
    }

    fun generateConnectionCode(): String{
        return (0..9).shuffled().subList(3,6).toString()
    }

}



