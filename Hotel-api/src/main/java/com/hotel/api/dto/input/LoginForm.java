package com.hotel.api.dto.input;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotEmpty;

public record LoginForm(
		@NotBlank(message = "username is blank")
		@NotEmpty(message = "username is empty")
		String usernameOrEmail,
		@NotBlank(message = "password is blank")
		@NotEmpty(message = "password is empty")
		String password
		){}
