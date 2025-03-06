package com.hotel.api.controller;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.hotel.api.dto.Input.LoginForm;
import com.hotel.api.dto.Input.RegisterForm;
import com.hotel.api.service.AuthenticationService;

import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;

@RestController
@RequiredArgsConstructor
@RequestMapping("/hotel/auth")
public class AuthenticationController {

	private final AuthenticationService authenticationService;
	
	@PostMapping("/userLogin")
	public String userLogin(@RequestBody @Valid LoginForm loginForm){
		return authenticationService.userLogin(loginForm);
	}
	
	@PostMapping("/adminLogin")
	public String adminLogin(@RequestBody @Valid LoginForm loginForm){
		return authenticationService.adminLogin(loginForm);
	}
	
	
	@PostMapping("/register")
	public String register(@RequestBody @Valid RegisterForm registerForm) {
		return authenticationService.register(registerForm);
	}
}
