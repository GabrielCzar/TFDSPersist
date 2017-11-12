package com.dspersist.models;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.Data;
import lombok.ToString;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.AuthorityUtils;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;

import javax.persistence.*;
import java.util.Collection;
import java.util.Set;

@Data
@Entity
@ToString(exclude = "password")
@Table(name = "users")
public class User implements UserDetails {
    public static final PasswordEncoder PASSWORD_ENCODER = new BCryptPasswordEncoder();
    private @Version @JsonIgnore Long version;
    private @Id @GeneratedValue(strategy =  GenerationType.IDENTITY) Long id;

    // Content
    private String name;
    private String email;
    private String photo;
    private @ManyToMany(mappedBy = "participants") Set<Group> groups;

    // Additional
    private @JsonIgnore String password;
    private String recoveryToken;
    private @Transient String url;
    private Boolean isEnable;
    private String [] roles;

    public User() { }

    public User(String name, String email, Set<Group> groups) {
        this.name = name;
        this.email = email;
        this.groups = groups;
    }

    public void setPassword(String password) {
        this.password = PASSWORD_ENCODER.encode(password);
    }

    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        return AuthorityUtils.createAuthorityList(roles);
    }

    @Override
    public String getPassword() {
        return password;
    }

    @Override
    public String getUsername() {
        return email;
    }

    @Override
    public boolean isAccountNonExpired() {
        return true;
    }

    @Override
    public boolean isAccountNonLocked() {
        return true;
    }

    @Override
    public boolean isCredentialsNonExpired() {
        return true;
    }

    @Override
    public boolean isEnabled() {
        return isEnable;
    }
}
