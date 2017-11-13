package com.dspersist.configurations;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;

@Configuration
@EnableWebSecurity
public class WebSecurityConfig extends WebSecurityConfigurerAdapter {

   // @Autowired
  //  private SpringUserDetailsService userDetailsService;

   // @Bean
  //  public BCryptPasswordEncoder bCryptPasswordEncoder() {
   //     return new BCryptPasswordEncoder();
  //  }

    //@Override
  //  protected void configure(AuthenticationManagerBuilder auth) throws Exception {
//        auth.userDetailsService(userDetailsService).passwordEncoder(bCryptPasswordEncoder()); }

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
                            "/api*", "/api/**", "/404")
                    .permitAll()
                    .antMatchers(HttpMethod.POST, "/login")
                    .permitAll()
                    .antMatchers("/home").hasRole("ADMIN")
                    .anyRequest()
                    .authenticated()
                    .and()
                .logout()
                    .logoutSuccessUrl("/");
                 //   .csrfTokenRepository(CookieCsrfTokenRepository
                  //          .withHttpOnlyFalse());
    }

    @Autowired
    public void configureGlobal(AuthenticationManagerBuilder auth) throws Exception {
        auth
                .inMemoryAuthentication()
                .withUser("admin").password("admin").roles("ADMIN");
    }

}
