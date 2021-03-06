package com.munyu.wamis.domain

import com.fasterxml.jackson.annotation.JsonIgnoreProperties
import java.util.ArrayList
import javax.persistence.*

@Entity
data class Customer(
        @Column(nullable = false)
        val firstName: String,

        @Column(nullable = true)
        val middleName: String,

        @Column(nullable = false)
        val surname: String,

        @Column(nullable = false)
        val idNumber: String,

        @Column(nullable = true)
        val email: String,

        @Column(nullable = true)
        @OneToMany(cascade = [CascadeType.ALL])
        val phoneNumbers: MutableList<PhoneNumber>? = null,

        @JsonIgnoreProperties("customer")
        @OneToMany(mappedBy = "customer",cascade= [CascadeType.ALL])
        val connections: MutableList<Connection> = ArrayList()

) : AbstractAuditableEntity() {

    fun addConnection(connections: List<Connection>){
        this.connections.addAll(connections);
        connections.forEach { c -> c.customer = this }
    }
}

