package com.dspersist;

import com.dspersist.configurations.EmbeddedTomcatConfiguration;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.builder.SpringApplicationBuilder;
import org.springframework.cache.annotation.EnableCaching;
import org.springframework.context.annotation.Import;

@SpringBootApplication
@Import({EmbeddedTomcatConfiguration.class})
public class TFPersistApplication{

	public static void main(String[] args) {
		SpringApplication.run(TFPersistApplication.class, args);
	}
}
