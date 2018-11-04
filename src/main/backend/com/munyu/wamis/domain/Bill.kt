package com.munyu.wamis.domain

import com.fasterxml.jackson.annotation.JsonView
import org.jetbrains.annotations.NotNull
import javax.persistence.*

@Entity
data class Bill(
        @OneToOne
        @JoinColumn(name = "connection_id")
        val reading: Reading,

        @Enumerated(EnumType.STRING)
        @Column(nullable = false)
        val status: BillStatus
) : AbstractAuditableEntity()
