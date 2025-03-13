package com.hotel.api.service;

import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.hotel.api.dto.input.LoginForm;
import com.hotel.api.dto.input.RegisterForm;
import com.hotel.api.entity.User;
import com.hotel.api.exceptionHandling.customExceptions.DuplicateUsernameOrEmailException;
import com.hotel.api.exceptionHandling.customExceptions.IncorrectAuthoritiesException;
import com.hotel.api.repository.RoleRepository;
import com.hotel.api.repository.UserRepository;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class AuthenticationService{

	private final UserRepository userRepository;
	private final RoleRepository roleRepository;
	private final AuthenticationManager authenticationManager;
	private final PasswordEncoder passwordEncoder;
	
	public String userLogin(LoginForm loginForm){
		try {
			Authentication authentication = authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(loginForm.usernameOrEmail(), loginForm.password()));
			if (authentication.getAuthorities().stream().anyMatch((authority) -> {return authority.getAuthority().equals("ROLE_USER");}) ||
					authentication.getAuthorities().stream().anyMatch((authority) -> {return authority.getAuthority().equals("ROLE_DEVELOPER");})) {
				SecurityContextHolder.getContext().setAuthentication(authentication);
				return "success";
			}
			else {
				throw new IncorrectAuthoritiesException("Incorrect authorities.");
			}
		}
		catch (IncorrectAuthoritiesException e) {
			throw new BadCredentialsException(e.getMessage());
		}
		catch (BadCredentialsException e) {
			throw new BadCredentialsException("Incorrect username or password.");
		}
		catch (AuthenticationException e) {
			throw new BadCredentialsException("User does not exist.");
		}
	}
	
	public String adminLogin(LoginForm loginForm){
		try {
			Authentication authentication = authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(loginForm.usernameOrEmail(), loginForm.password()));
			if (authentication.getAuthorities().stream().anyMatch((authority) -> {return authority.getAuthority().equals("ROLE_ADMIN");}) || 
					authentication.getAuthorities().stream().anyMatch((authority) -> {return authority.getAuthority().equals("ROLE_DEVELOPER");})) {
				SecurityContextHolder.getContext().setAuthentication(authentication);
				return "success";
			}
			else {
				throw new IncorrectAuthoritiesException("Incorrect authorities.");
			}
		}
		catch (IncorrectAuthoritiesException e) {
			throw new BadCredentialsException(e.getMessage());
		}
		catch (BadCredentialsException e) {
			throw new BadCredentialsException("Incorrect username or password.");
		}
		catch (AuthenticationException e) {
			throw new BadCredentialsException("User does not exist.");
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
