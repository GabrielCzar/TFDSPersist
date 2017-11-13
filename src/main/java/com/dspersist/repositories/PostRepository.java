package com.dspersist.repositories;

import com.dspersist.models.Post;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.web.bind.annotation.CrossOrigin;

//@CrossOrigin(origins="${cross-origin}", maxAge=3600) //, allowedHeaders={"x-auth-token", "x-requested-with", "x-xsrf-token"})
@RepositoryRestResource(collectionResourceRel = "posts", path = "posts")
public interface PostRepository extends MongoRepository<Post, String> { }
