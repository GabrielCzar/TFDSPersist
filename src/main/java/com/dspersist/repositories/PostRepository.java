package com.dspersist.repositories;

import com.dspersist.models.Post;
import org.springframework.cache.annotation.Cacheable;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.data.rest.core.annotation.RestResource;
import org.springframework.web.bind.annotation.CrossOrigin;

import java.util.List;

//@CrossOrigin(origins="${cross-origin}", maxAge=3600) //, allowedHeaders={"x-auth-token", "x-requested-with", "x-xsrf-token"})
@CrossOrigin("*")
@RepositoryRestResource(collectionResourceRel = "posts", path = "posts")
public interface PostRepository extends MongoRepository<Post, String> {

    @RestResource(path="searchByTitle", rel="searchByTitle")
    Page findPostsByTitleContains(@Param("pattern") String pattern, Pageable pageable);

    @RestResource(path="searchByContent", rel="searchByContent")
    Page findPostsByContentContains(@Param("pattern") String pattern, Pageable pageable);

    @Cacheable("read-posts")
    @RestResource(path="searchFirstTitle", rel="searchFirstTitle")
    Post findFirstByTitle(@Param("pattern") String pattern);
}
