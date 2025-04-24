package com.hotel.api.dto.input;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotEmpty;

public record UsernameOrEmailForm(
		@NotBlank(message = "Please enter a username.")
		@NotEmpty(message = "Please enter a username.")
		String usernameOrEmail
		) {

}
