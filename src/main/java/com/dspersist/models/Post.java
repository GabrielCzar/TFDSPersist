package com.dspersist.models;

import lombok.Data;
import org.bson.types.ObjectId;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Data
@Document
public class Post {
    @Id
    private ObjectId id;
    private String title;
    private String content;
    
    private User user;

    public Post() {}

    public Post(String title, String content) {
        this.title = title;
        this.content = content;
    }

}
