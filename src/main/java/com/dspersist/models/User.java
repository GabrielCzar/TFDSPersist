package com.dspersist.models;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.Data;
import lombok.ToString;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;

import javax.persistence.*;
import javax.validation.constraints.Email;
import java.util.ArrayList;
import java.util.Collection;
import java.util.List;
import java.util.Set;

@Data
@Entity
@Table(name = "users")
@ToString(exclude = "password")
public class User implements UserDetails {
    public static final PasswordEncoder PASSWORD_ENCODER = new BCryptPasswordEncoder();

    private @Version @JsonIgnore Long version;
    private @Id @GeneratedValue(strategy =  GenerationType.IDENTITY) Long id;

    // Content
    //@NotBlank(message = "O Nome é obrigatório")
    private String name;
    @Column(unique = true) @Email(message = "O email é inválido")
    private String email;
    private String photo;
    private @ManyToMany(mappedBy = "participants") Set<Group> groups;

    // Additional
    private @Transient String url;
    private @JsonIgnore String password;
    private @JsonIgnore String recoveryToken;
    private @JsonIgnore Boolean isEnable = true;
    @ManyToMany(fetch = FetchType.EAGER)
        @JoinTable(name="role_user",
                joinColumns=@JoinColumn(name="user_id"),
                inverseJoinColumns=@JoinColumn(name="role_id"))
    private @JsonIgnore List<Role> roles = new ArrayList<>();

    public User() { }

    public User(String name, String email, String password) {
        this.name = name;
        this.email = email;
        setPassword(password);
    }

    public User(String name, String email, String password, Set<Group> groups) {
        this.name = name;
        this.email = email;
        this.groups = groups;
        setPassword(password);
    }

    public List<Role> getRoles() {
        return this.roles;
    }

    @Override
    public String getName() {
        return name;
    }

    public void setPassword(String password) {
        this.password = PASSWORD_ENCODER.encode(password);
    }

    @Override @JsonIgnore
    public Collection<? extends GrantedAuthority> getAuthorities() {
        return roles;
    }

    @Override
    public String getPassword() {
        return password;
    }

    @Override
    public String getUsername() {
        return email;
    }

    @Override @JsonIgnore
    public boolean isAccountNonExpired() {
        return true;
    }

    @Override @JsonIgnore
    public boolean isAccountNonLocked() {
        return true;
    }

    @Override @JsonIgnore
    public boolean isCredentialsNonExpired() {
        return true;
    }

    @Override @JsonIgnore
    public boolean isEnabled() {
        return isEnable;
    }
}
