package com.hotel.api.dto.Input;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotEmpty;

public record UserRoleForm(
		@NotBlank(message = "user roleName is blank.")
		@NotEmpty(message = "user roleName is empty")
		String roleName
		) {}
