package com.hotel.api.dto.input;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotEmpty;

public record UserRoleForm(
		@NotBlank(message = "Please select a user role.")
		@NotEmpty(message = "Please select a user role.")
		String roleName
		) {}
