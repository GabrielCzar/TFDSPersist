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

    private String email;

    private String discipline;

    public Post() {}

    public Post(String title, String content, String email, String discipline) {
        this.title = title;
        this.content = content;
        this.email = email;
        this.discipline = discipline;
    }
}
