package com.dspersist.repositories;

import com.dspersist.models.User;
import org.springframework.cache.annotation.Cacheable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.web.bind.annotation.CrossOrigin;

//@CrossOrigin(origins="${cross-origin}", maxAge=3600 ) //, allowedHeaders={"x-auth-token", "x-requested-with", "x-xsrf-token"})
@CrossOrigin("*")
@RepositoryRestResource(collectionResourceRel = "users", path = "users")
public interface UserRepository extends JpaRepository<User, Long> {
    @Cacheable("users")
    User findByEmail(String email);
}
