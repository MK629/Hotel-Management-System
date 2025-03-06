package com.hotel.api.dto.Input;

import com.hotel.api.entity.enums.ReservationType;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotEmpty;
import jakarta.validation.constraints.NotNull;

public record UsernameOrEmailAndReservationTypeForm(
		@NotBlank(message = "username is blank")
		@NotEmpty(message = "username is empty")
		String usernameOrEmail,
		@NotNull(message = "reservation status is null.")
		ReservationType reservationType
		) {}
