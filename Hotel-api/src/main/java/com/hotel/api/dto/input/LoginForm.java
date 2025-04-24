package com.hotel.api.dto.input;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotEmpty;

public record LoginForm(
		@NotBlank(message = "Please enter your username.")
		@NotEmpty(message = "Please enter your username.")
		String usernameOrEmail,
		@NotBlank(message = "Please enter your password.")
		@NotEmpty(message = "Please enter your password.")
		String password
		){}
