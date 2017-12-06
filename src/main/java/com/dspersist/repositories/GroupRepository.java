package com.dspersist.repositories;

import com.dspersist.models.Group;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.web.bind.annotation.CrossOrigin;

//, allowedHeaders={"x-auth-token", "x-requested-with", "x-xsrf-token"})
@CrossOrigin(origins = "*", maxAge = 3600)
@RepositoryRestResource(collectionResourceRel = "groups", path = "groups")
public interface GroupRepository
        extends JpaRepository<Group, Long> {

}
