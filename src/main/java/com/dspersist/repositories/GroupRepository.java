package com.dspersist.repositories;

import com.dspersist.models.Group;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.web.bind.annotation.CrossOrigin;

//CrossOrigin(origins="${cross-origin}", maxAge=3600)//, allowedHeaders={"x-auth-token", "x-requested-with", "x-xsrf-token"})
@CrossOrigin("*")
@RepositoryRestResource(collectionResourceRel = "groups", path = "groups")
public interface GroupRepository
        extends PagingAndSortingRepository<Group, Long> { }
