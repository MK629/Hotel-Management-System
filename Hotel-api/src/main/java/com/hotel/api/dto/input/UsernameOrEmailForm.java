package com.hotel.api.dto.input;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotEmpty;

public record UsernameOrEmailForm(
		@NotBlank(message = "username is blank")
		@NotEmpty(message = "username is empty")
		String usernameOrEmail
		) {

}
