package com.hotel.api.dto.input;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotEmpty;

public record ChangeUsernameForm(
		@NotBlank(message = "current username is blank")
		@NotEmpty(message = "current username is empty")
		String currentUsernameOrEmail,
		@NotBlank(message = "current password is blank")
		@NotEmpty(message = "current password is empty")
		String currentPassword,
		@NotBlank(message = "new username is blank")
		@NotEmpty(message = "new username is empty")
		String newUsername
		) {}
