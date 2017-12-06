package com.dspersist.models;

import lombok.Data;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Data
@Entity
@Table(name = "groups")
public class Group {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(unique = true)
    private String discipline;

    public Group() {}

    public Group(String discipline) {
        this.discipline = discipline;
        participants = new ArrayList<>();
    }

    @ManyToMany
    @JoinTable(name = "participant_group",
            joinColumns = @JoinColumn(name = "group_id"),
            inverseJoinColumns = @JoinColumn(name = "participant_id"))
    private List<User> participants;
}
