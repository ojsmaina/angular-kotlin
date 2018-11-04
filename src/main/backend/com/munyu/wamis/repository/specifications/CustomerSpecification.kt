package com.munyu.wamis.repository.specifications

import com.munyu.wamis.domain.Customer
import org.springframework.data.jpa.domain.Specification
import javax.persistence.criteria.Predicate

object CustomerSpecification {
    fun findCustomersBySpecification(searchTerm: String?): Specification<Customer> {
        return Specification { root, query, cb ->
            val predicates = mutableListOf<Predicate>()

            if (searchTerm != null) {
                val p1 = cb.like(cb.lower(root.get("firstName")), "%$searchTerm%")
                val p2 = cb.like(cb.lower(root.get("middleName")), "%$searchTerm%")
                val p3 = cb.like(cb.lower(root.get("surname")), "%$searchTerm%")
                val p4 = cb.like(cb.lower(root.get("idNumber")), "%$searchTerm%")
                val p5 = root.join<Any, Any>("phoneNumbers").get<Any>("number").`in`(searchTerm)

                val namePredicate = cb.or(p1, p2, p3,p4,p5)
                predicates.add(namePredicate)
            }
            cb.and(*predicates.toTypedArray())
        }
    }
}
