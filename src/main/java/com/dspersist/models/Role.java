package com.dspersist.models;

import lombok.Data;
import org.springframework.security.core.GrantedAuthority;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Data
@Entity
@Table(name = "roles")
public class Role implements GrantedAuthority {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String nome;
    private @ManyToMany(mappedBy = "roles") List<User> users = new ArrayList<>();

    public Role() { }

    public Role(String nome) {
        this.nome = nome;
    }

    public List<User> getUsers () {
        return this.users;
    }

    @Override
    public String getAuthority() {
        return nome;
    }
}
