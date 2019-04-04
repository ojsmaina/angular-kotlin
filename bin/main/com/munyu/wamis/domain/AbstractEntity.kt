package com.munyu.wamis.domain

import com.fasterxml.jackson.annotation.JsonView
import java.io.Serializable
import javax.persistence.*

@MappedSuperclass
open class AbstractEntity : Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(nullable = false)
    val id: Long = 1
}