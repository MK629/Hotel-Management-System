package com.hotel.api.dto.input;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotEmpty;

public record ChangePasswordForm(
		@NotBlank(message = "current username is blank")
		@NotEmpty(message = "current username is empty")
		String currentUsernameOrEmail,
		@NotBlank(message = "current password is blank")
		@NotEmpty(message = "current password is empty")
		String currentPassword,
		@NotBlank(message = "new password is blank")
		@NotEmpty(message = "new password is empty")
		String newPassword
		) {

}
