package com.hotel.api.dto.input;

import com.hotel.api.entity.enums.ReservationType;

import jakarta.validation.constraints.NotNull;

public record ReservationTypeForm(
		@NotNull(message = "reservation status is null.")
		ReservationType reservationType
		) {}
