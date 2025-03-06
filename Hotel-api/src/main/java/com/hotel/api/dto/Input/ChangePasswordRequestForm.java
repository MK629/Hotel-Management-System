package com.hotel.api.dto.Input;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotEmpty;

public record ChangePasswordRequestForm(
		@NotBlank(message = "username is blank")
		@NotEmpty(message = "username is empty")
		String usernameOrEmail,
		@NotBlank(message = "old password is blank")
		@NotEmpty(message = "old password is empty")
		String oldPassword,
		@NotBlank(message = "new password is blank")
		@NotEmpty(message = "new password is empty")
		String newPassword
		) {

}
