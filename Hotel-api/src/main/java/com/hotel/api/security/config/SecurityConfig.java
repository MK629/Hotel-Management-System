package com.hotel.api.security.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.Customizer;
import org.springframework.security.config.annotation.authentication.configuration.AuthenticationConfiguration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.CorsConfigurationSource;

import jakarta.servlet.http.HttpServletRequest;

@Configuration
public class SecurityConfig {

    @Bean
    PasswordEncoder passwordEncoder() {
		return new BCryptPasswordEncoder();
	}
	
	@Bean
	AuthenticationManager authenticationManager(AuthenticationConfiguration config) throws Exception {
		return config.getAuthenticationManager();
	}
	
	@Bean
	SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
		http.httpBasic(Customizer.withDefaults());
		http.csrf(c -> c.disable());
		http.cors(c -> {
			CorsConfigurationSource source = new CorsConfigurationSource() {
				@Override
				public CorsConfiguration getCorsConfiguration(HttpServletRequest request) {
					CorsConfiguration config = new CorsConfiguration();
                    config.setAllowCredentials(true);
                    config.addAllowedOrigin("http://localhost:5173");
                    config.addAllowedOrigin("http://localhost:3000");
                    config.addAllowedHeader("*");
                    config.addAllowedMethod("*");
					return config;
				}
			};
			c.configurationSource(source);
		});
		http.authorizeHttpRequests(c -> {
			c.requestMatchers("/hotel/adminOps/**").hasAnyRole("DEVELOPER","ADMIN");
			c.requestMatchers("/hotel/api/**").hasAnyRole("DEVELOPER","USER");
			c.requestMatchers("/hotel/auth/**").permitAll();
		});
		return http.build();
	}
}
