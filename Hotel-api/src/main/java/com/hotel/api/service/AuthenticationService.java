package com.hotel.api.service;

import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import com.hotel.api.entity.User;
import com.hotel.api.exceptionHandling.customExceptions.DuplicateUsernameOrEmailException;
import com.hotel.api.repository.RoleRepository;
import com.hotel.api.repository.UserRepository;
import com.hotel.api.service.DTOs.Input.LoginForm;
import com.hotel.api.service.DTOs.Input.RegisterForm;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class AuthenticationService{

	private final UserRepository userRepository;
	private final RoleRepository roleRepository;
	private final AuthenticationManager authenticationManager;
	private final PasswordEncoder passwordEncoder;
	
	public String userLogin(LoginForm loginForm){
		Authentication authentication = authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(loginForm.usernameOrEmail(), loginForm.password()));
		if (authentication.getAuthorities().stream().anyMatch((authority) -> {return authority.getAuthority().equals("ROLE_USER");}) ||
				authentication.getAuthorities().stream().anyMatch((authority) -> {return authority.getAuthority().equals("ROLE_DEVELOPER");})) {
			SecurityContextHolder.getContext().setAuthentication(authentication);
			return "success";
		}
		else {
			throw new BadCredentialsException("incorrect authorities");
		}
	}
	
	public String adminLogin(LoginForm loginForm){
		Authentication authentication = authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(loginForm.usernameOrEmail(), loginForm.password()));
		if (authentication.getAuthorities().stream().anyMatch((authority) -> {return authority.getAuthority().equals("ROLE_ADMIN");}) || 
				authentication.getAuthorities().stream().anyMatch((authority) -> {return authority.getAuthority().equals("ROLE_DEVELOPER");})) {
			SecurityContextHolder.getContext().setAuthentication(authentication);
			return "success";
		}
		else {
			throw new BadCredentialsException("incorrect authorities");
		}

	}
	
	@Transactional
	public String register(RegisterForm registerForm) {
		try {
			User newUser = new User(registerForm.username(), registerForm.email(), passwordEncoder.encode(registerForm.password()));
			newUser.addRole(roleRepository.findRoleByName("ROLE_USER"));
			userRepository.save(newUser);
			return "success";
		}
		catch(DataIntegrityViolationException e) {
			throw new DuplicateUsernameOrEmailException("Username or E-mail already exists. Please try a different one.");
		}
	}
}
