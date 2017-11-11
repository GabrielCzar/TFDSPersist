package com.dspersist.repositories;

import com.dspersist.models.Post;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

import java.util.List;

@RepositoryRestResource(collectionResourceRel = "posts", path = "posts")
public interface PostRepository extends MongoRepository<Post, String> {

    List<Post> findPostsByTitle(@Param("title") String title);

}
