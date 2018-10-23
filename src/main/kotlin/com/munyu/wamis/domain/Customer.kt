package com.munyu.wamis.domain

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
        val phoneNumbers: List<PhoneNumber>? = null

) : AbstractAuditableEntity()
