package com.munyu.wamis.domain

import com.fasterxml.jackson.annotation.JsonFormat
import org.springframework.data.annotation.CreatedBy
import org.springframework.data.annotation.CreatedDate
import org.springframework.data.annotation.LastModifiedBy
import org.springframework.data.annotation.LastModifiedDate
import org.springframework.data.jpa.domain.support.AuditingEntityListener
import java.time.LocalDateTime
import javax.persistence.*

@MappedSuperclass
@EntityListeners(AuditingEntityListener::class)
abstract class AbstractAuditableEntity(

    @Column(columnDefinition = "DATETIME")
    @JsonFormat(pattern = "yyyy-MM-dd'T'HH:mm:ss")
    @CreatedDate
    val dateCreated: LocalDateTime? = null,

    @Column(columnDefinition = "DATETIME")
    @JsonFormat(pattern = "yyyy-MM-dd'T'HH:mm:ss")
    @LastModifiedDate
    val dateModified: LocalDateTime? = null,

    @Column(columnDefinition = "DATETIME")
    @CreatedBy
    val createdBy: String? = null,

    @Column(columnDefinition = "DATETIME")
    @LastModifiedBy
    val modifiedBy: String? = null
) : AbstractEntity()