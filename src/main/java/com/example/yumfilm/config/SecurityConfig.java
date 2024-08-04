package com.example.yumfilm.config;

import com.example.yumfilm.jwt.JwtTokenProvider;
import com.example.yumfilm.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configurers.AbstractHttpConfigurer;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.CorsConfigurationSource;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;

import java.util.Arrays;

@Configuration
@EnableWebSecurity
public class SecurityConfig {
    @Autowired
    private UserService userService;

    public String base_url = "/api/v1";

    @Bean
    public BCryptPasswordEncoder bCryptPasswordEncoder() {
        return new BCryptPasswordEncoder();
    }

    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
        http
                .csrf(AbstractHttpConfigurer::disable)
                .cors(cors -> cors.configurationSource(this.corsConfigurationSource()))
                .userDetailsService(userService)
                .addFilterBefore(new JwtTokenProvider(userService), UsernamePasswordAuthenticationFilter.class)

//                .authenticationProvider(authencationProvider())
                .authorizeRequests(req -> {
                    req
                            .requestMatchers(String.format("%s/manage", base_url)).hasAuthority("ROLE_ADMIN")
                            .requestMatchers(base_url + "/booking", base_url + "/booking/**",
                                    base_url + "/manager", base_url + "/manager/**",
                                    base_url+"/account"
                            ).authenticated()
                            .anyRequest().permitAll();
                    ;
                })
                .formLogin(login -> {
                    login
                            .loginPage(base_url + "/login")
                            .defaultSuccessUrl(base_url + "/login/success")
                            .permitAll()
                    ;
                })
                .logout(out ->{out
                        .logoutUrl(base_url + "/logout")
                        .permitAll()
                ;})
        ;
        return http.build();
    }

    @Bean
    public CorsConfigurationSource corsConfigurationSource()
    {
        System.out.println("CorsConfigurationSource");
        CorsConfiguration cors = new CorsConfiguration();
        cors.setAllowedOrigins(Arrays.asList("http://localhost:8080/", "http://localhost:5173"));
        cors.setAllowedMethods(Arrays.asList("GET", "POST", "DELETE", "PUT"));
        cors.setAllowedHeaders(Arrays.asList("content-type", "authorization"));
        UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
        source.registerCorsConfiguration("/**", cors);
        return source;
    }
//    @Bean
//    public AuthenticationManager authencationManager(AuthenticationConfiguration authConfig) throws Exception
//    {
//        return authConfig.getAuthenticationManager();
//    }

//    @Bean
//    public DaoAuthenticationProvider authencationProvider()
//    {
//        DaoAuthenticationProvider provider = new DaoAuthenticationProvider();
//        provider.setUserDetailsService(userService);
//        provider.setPasswordEncoder(bCryptPasswordEncoder());
//        return provider;
//    }
}
