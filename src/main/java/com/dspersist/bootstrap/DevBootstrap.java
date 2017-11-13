package com.dspersist.bootstrap;

import com.dspersist.models.Post;
import com.dspersist.models.Role;
import com.dspersist.models.User;
import com.dspersist.repositories.PostRepository;
import com.dspersist.repositories.RoleRepository;
import com.dspersist.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.ApplicationListener;
import org.springframework.context.event.ContextRefreshedEvent;
import org.springframework.stereotype.Component;
import reactor.core.publisher.Flux;

import java.util.Optional;

@Component
public class DevBootstrap implements ApplicationListener<ContextRefreshedEvent> {

    @Autowired
    private PostRepository postRepository;

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private RoleRepository roleRepository;

    @Override
    public void onApplicationEvent(ContextRefreshedEvent contextRefreshedEvent) {
       // initDataMongo();
        initUsers();
    }

    private void initUsers () {
        userRepository.deleteAll();
        User gabriel = new User("Gabriel", "gabrielcesar.a.l@gmail.com", "gabriel");

        userRepository.saveAndFlush(gabriel);

        Role role = new Role("USER");
        roleRepository.saveAndFlush(role);

        gabriel.getRoles().add(role);

        role.getUsers().add(gabriel);

        roleRepository.save(role);
        userRepository.save(gabriel);
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
