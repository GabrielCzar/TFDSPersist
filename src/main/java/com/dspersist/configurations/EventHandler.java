package com.dspersist.configurations;

import com.dspersist.models.Post;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.rest.core.annotation.HandleAfterCreate;
import org.springframework.data.rest.core.annotation.HandleAfterDelete;
import org.springframework.data.rest.core.annotation.HandleAfterSave;
import org.springframework.data.rest.core.annotation.RepositoryEventHandler;
import org.springframework.hateoas.EntityLinks;
import org.springframework.messaging.simp.SimpMessagingTemplate;
import org.springframework.stereotype.Component;

import static com.dspersist.configurations.WebSocketConfiguration.MESSAGE_PREFIX;

// Tem q configurar no JS
@Component
@RepositoryEventHandler(Post.class)
public class EventHandler {
    private final SimpMessagingTemplate websocket;

    private final EntityLinks entityLinks;

    @Autowired
    public EventHandler(SimpMessagingTemplate websocket, EntityLinks entityLinks) {
        this.websocket = websocket;
        this.entityLinks = entityLinks;
    }

    @HandleAfterCreate
    public void newPost(Post post) {
        this.websocket.convertAndSend(
                MESSAGE_PREFIX + "/newPost", getPath(post));
    }

    @HandleAfterDelete
    public void deletePost(Post post)  {
        this.websocket.convertAndSend(
                MESSAGE_PREFIX + "/deletePost", getPath(post));
    }

    @HandleAfterSave
    public void updatePost(Post post)  {
        this.websocket.convertAndSend(
                MESSAGE_PREFIX + "/updatePost", getPath(post));
    }

    private String getPath(Post post)  {
        return this.entityLinks.linkForSingleResource(post.getClass(),
                post.getId()).toUri().getPath();
    }

}
