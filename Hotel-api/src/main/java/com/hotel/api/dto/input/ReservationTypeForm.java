package com.hotel.api.dto.input;

import com.hotel.api.entity.enums.ReservationType;

import jakarta.validation.constraints.NotNull;

public record ReservationTypeForm(
		@NotNull(message = "Reservation status is null.")
		ReservationType reservationType
		) {}
