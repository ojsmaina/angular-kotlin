package com.munyu.wamis.repository.specifications

import com.munyu.wamis.domain.Connection
import org.springframework.data.jpa.domain.Specification
import javax.persistence.criteria.Predicate

object ConnectionSpecification {
    fun findConnectionsBySpecification(searchTerm: String?): Specification<Connection> {
        return Specification { root, _, cb ->
            val predicates = mutableListOf<Predicate>()

            if (searchTerm != null) {
                val p1 = cb.like(cb.lower(root.get("meterSerialNumber")), "%$searchTerm%")
                val p2 = cb.like(cb.lower(root.get("meterLocation")), "%$searchTerm%")
                val p3 = root.join<Any, Any>("customer").get<Any>("firstName").`in`(searchTerm)
                val p4 = root.join<Any, Any>("customer").get<Any>("middleName").`in`(searchTerm)
                val p5 = root.join<Any, Any>("customer").get<Any>("surname").`in`(searchTerm)
                val p6 = root.join<Any, Any>("customer").get<Any>("idNumber").`in`(searchTerm)

                val namePredicate = cb.or(p1, p2,p3,p4,p5,p6)
                predicates.add(namePredicate)
            }
            cb.and(*predicates.toTypedArray())
        }
    }

}
