package com.dspersist.bootstrap;

import com.dspersist.models.Post;
import com.dspersist.models.User;
import com.dspersist.repositories.PostRepository;
import com.dspersist.repositories.UserRepository;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.ApplicationListener;
import org.springframework.context.event.ContextRefreshedEvent;
import org.springframework.stereotype.Component;
import reactor.core.publisher.Flux;

@Component
public class DevBootstrap implements ApplicationListener<ContextRefreshedEvent> {

    @Autowired
    private PostRepository postRepository;

    @Autowired
    private UserRepository userRepository;

    @Override
    public void onApplicationEvent(ContextRefreshedEvent contextRefreshedEvent) {
       // initDataMongo();
        //initUsers();
    }

    private void initUsers () {
        User user = new User("Gabriel", "gabrielcesar.a.l@gmail.com", "gabriel");
        userRepository.save(user);
    }

    // Insert in MongoDB
    private void initDataMongo()
    {
        // Create posts

        Flux<Post> flux =
                Flux.just(
                        new Post("Walter", "White"),
                        new Post("Skyler", "White"),
                        new Post("Saul", "Goodman"),
                        new Post("Jesse", "Pinkman"));

        postRepository.saveAll(flux.toIterable());

        for (int i = 0; i < 30; i++)
            postRepository.save(new Post("Walter" + i, "White" + i));


    }
}
