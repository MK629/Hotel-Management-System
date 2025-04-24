package com.hotel.api.dto.input;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotEmpty;

public record ChangePasswordForm(
		@NotBlank(message = "Please enter your current username.")
		@NotEmpty(message = "Please enter your current username.")
		String currentUsernameOrEmail,
		@NotBlank(message = "Please enter your current password.")
		@NotEmpty(message = "Please enter your current password.")
		String currentPassword,
		@NotBlank(message = "Please enter a new password.")
		@NotEmpty(message = "Please enter a new password.")
		String newPassword
		) {
}
