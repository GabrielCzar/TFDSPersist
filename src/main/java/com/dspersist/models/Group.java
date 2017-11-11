package com.dspersist.models;

import javax.persistence.*;
import java.util.List;

@Entity
public class Group {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String discipline;

    @ManyToMany
    @JoinTable(name = "participant_group",
            joinColumns = @JoinColumn(name = "group_id"),
            inverseJoinColumns = @JoinColumn(name = "participant_id"))
    private List<User> participants;
}
