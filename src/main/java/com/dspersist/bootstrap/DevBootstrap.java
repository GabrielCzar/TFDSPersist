package com.dspersist.bootstrap;

import com.dspersist.models.Post;
import com.dspersist.repositories.PostRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.ApplicationListener;
import org.springframework.context.event.ContextRefreshedEvent;
import org.springframework.stereotype.Component;

@Component
public class DevBootstrap implements ApplicationListener<ContextRefreshedEvent> {

    @Autowired
    private PostRepository postRepository;

    @Override
    public void onApplicationEvent(ContextRefreshedEvent contextRefreshedEvent) {
        initData();
    }

    // Prencher BD
    private void initData()
    {
        // Criar posts para testar
        Post post = new Post("Title post teste", "Content post teste");

        postRepository.save(post);
    }
}
