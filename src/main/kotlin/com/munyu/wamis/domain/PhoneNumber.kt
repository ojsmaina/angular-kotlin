package com.munyu.wamis.domain

import javax.persistence.*

@Entity
data class PhoneNumber(
        @Column(nullable = false)
        val number: String
) : AbstractAuditableEntity()

