package com.dspersist;

import com.dspersist.configurations.EmbeddedTomcatConfiguration;
import com.dspersist.configurations.SessionConfiguration;
import com.dspersist.configurations.WebSecurityConfig;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.builder.SpringApplicationBuilder;
import org.springframework.cache.annotation.EnableCaching;
import org.springframework.context.annotation.Import;
import org.springframework.security.access.SecurityConfig;
import org.springframework.session.web.context.AbstractHttpSessionApplicationInitializer;

@SpringBootApplication
@Import({EmbeddedTomcatConfiguration.class})
public class TFPersistApplication {

	public static void main(String[] args) {
		SpringApplication.run(TFPersistApplication.class, args);
	}
}
