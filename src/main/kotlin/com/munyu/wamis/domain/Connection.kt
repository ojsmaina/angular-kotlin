package com.munyu.wamis.domain

import org.springframework.beans.factory.annotation.Value
import javax.persistence.Column
import javax.persistence.Entity
import javax.persistence.FetchType
import javax.persistence.ManyToOne
import javax.persistence.Enumerated
import javax.persistence.EnumType

@Entity
data class Connection(
        @ManyToOne(fetch = FetchType.LAZY)
        val customer: Customer,

        @Column(nullable = false,columnDefinition = "TEXT")
        val meterLocation: String,

        @Column(nullable = false)
        val meterSerialNumber: String,

        @Enumerated(EnumType.STRING)
        @Column(nullable = false)
        var status: ConnectionStatus? = null

) : AbstractAuditableEntity(){
    init{}
    @Column(nullable = false)
    var connectionCode: String = "";


    constructor(cus: Customer, meterLoc: String,serialNumber: String,status: ConnectionStatus?, connectionCode: String ) : this(cus,meterLoc,serialNumber,status){
        this.connectionCode = connectionCode.plus(this.generateConnectionCode())
        this.status = ConnectionStatus.ACTIVE;
    }

    fun generateConnectionCode(): String{
        return (0..9).shuffled().subList(3,6).toString()
    }

}



