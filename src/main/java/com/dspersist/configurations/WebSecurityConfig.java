package com.dspersist.configurations;

import com.dspersist.services.SpringUserDetailsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;

import static com.dspersist.models.User.PASSWORD_ENCODER;

@Configuration
@EnableWebSecurity
public class WebSecurityConfig extends WebSecurityConfigurerAdapter {

    @Autowired
    private SpringUserDetailsService userDetailsService;

    @Override
    protected void configure(AuthenticationManagerBuilder auth) throws Exception {
        auth.userDetailsService(userDetailsService).passwordEncoder(PASSWORD_ENCODER);
    }

    // Test without js and css in ant Matcher's with httpBasic
    @Override
    protected void configure(HttpSecurity http) throws Exception {
        http
                .httpBasic()
                .and()
                .csrf()
                .disable()
                .authorizeRequests()
                .antMatchers("/", "/bower_components/**", "/js/**", "/css/**",
                        "/api*", "/api/**", "/404", "/favicon.ico")
                .permitAll()
                .antMatchers(HttpMethod.POST, "/login")
                .permitAll()
                .anyRequest()
                .authenticated()
                .and()
                .logout()
                .logoutSuccessUrl("/");
        //   .csrfTokenRepository(CookieCsrfTokenRepository
        //          .withHttpOnlyFalse());
    }

    //@Autowired
    //  public void configureGlobal(AuthenticationManagerBuilder auth) throws Exception {
    // User.UserBuilder users = User.withDefaultPasswordEncoder();
    //   User user = (User) users.username("admin").password("admin").roles("ADMIN").build();
    //     auth.inMemoryAuthentication().withUser(user);
    //   }

}
