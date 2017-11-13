package com.dspersist.repositories;

import com.dspersist.models.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.web.bind.annotation.CrossOrigin;

//@CrossOrigin(origins="${cross-origin}", maxAge=3600 ) //, allowedHeaders={"x-auth-token", "x-requested-with", "x-xsrf-token"})
@RepositoryRestResource(collectionResourceRel = "users", path = "users")
public interface UserRepository extends JpaRepository<User, Long> {
    User findByEmail(String email);
}
