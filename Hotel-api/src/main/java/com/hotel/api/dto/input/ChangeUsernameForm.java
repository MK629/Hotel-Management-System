package com.hotel.api.dto.input;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotEmpty;

public record ChangeUsernameForm(
		@NotBlank(message = "Please enter your current username.")
		@NotEmpty(message = "Please enter your current username.")
		String currentUsernameOrEmail,
		@NotBlank(message = "Please enter your current password.")
		@NotEmpty(message = "Please enter your current password.")
		String currentPassword,
		@NotBlank(message = "Please enter a new username.")
		@NotEmpty(message = "Please enter a new username.")
		String newUsername
		) {}
