package com.dspersist.configurations;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.core.userdetails.UserDetailsService;

import static com.dspersist.models.User.PASSWORD_ENCODER;

@Configuration
@EnableWebSecurity
public class WebSecurityConfig extends WebSecurityConfigurerAdapter {

    @Autowired
    private UserDetailsService userDetailsService;

    @Override
    protected void configure(AuthenticationManagerBuilder auth) throws Exception {
        auth.userDetailsService(userDetailsService).passwordEncoder(PASSWORD_ENCODER);
        System.out.println("OK");
    }

    // Test without js and css in ant Matcher's with httpBasic
    @Override
    protected void configure(HttpSecurity http) throws Exception {
        http   // .sessionManagement()
                 //   .sessionCreationPolicy(SessionCreationPolicy.NEVER)
                   // .and()
                .cors()
                    .and()
                .httpBasic()
                    .and()
                .authorizeRequests()
                    .antMatchers("/favicon.ico", "/api*", "/api/**", "/token", "/sign-up", "/login")
                    .permitAll()
                .anyRequest()
                    .authenticated()
                    .and()
                .logout()
                    .logoutSuccessUrl("/")
                    .and()
                .csrf().disable();
                    //.csrfTokenRepository(CookieCsrfTokenRepository.withHttpOnlyFalse());
    }

   // @Autowired
   // public void configureGlobal(AuthenticationManagerBuilder auth) throws Exception {
   //     User.UserBuilder users = User.withDefaultPasswordEncoder();
   //     User user = (User) users.username("admin@admin").password("admin").roles("ADMIN", "USER").build();
   //     auth.inMemoryAuthentication().withUser(user);
   // }

}
