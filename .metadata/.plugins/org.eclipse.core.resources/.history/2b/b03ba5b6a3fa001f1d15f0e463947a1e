package com.hotel.api.dto.Input;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotEmpty;

public record RegisterForm(
		@NotBlank(message = "username cannot be blank")
		@NotEmpty(message = "username cannot be empty")
		String username,
		@NotBlank(message = "email cannot be blank")
		@NotEmpty(message = "email cannot be empty")
		@Email(message = "incorrect email format")
		String email,
		@NotBlank(message = "password cannot be blank")
		@NotEmpty(message = "password cannot be empty")
		String password
		){}
