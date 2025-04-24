package com.hotel.api.dto.input;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotEmpty;

public record RegisterForm(
		@NotBlank(message = "Please enter your username.")
		@NotEmpty(message = "Please enter your username.")
		String username,
		@NotBlank(message = "Please enter your E-Mail address.")
		@NotEmpty(message = "Please enter your E-Mail address.")
		@Email(message = "Incorrect email format.")
		String email,
		@NotBlank(message = "Please enter a password.")
		@NotEmpty(message = "Please enter a password.")
		String password
		){}
