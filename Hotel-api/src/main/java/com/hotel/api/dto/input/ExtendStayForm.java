package com.hotel.api.dto.input;

import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Positive;

public record ExtendStayForm(
		@NotNull(message = "Reservation ID is null.")
		Long reservationId,
		@NotNull(message = "Please enter the extended nights amount.")
		@Positive(message = "Negative values detected. Invalid.")
		Integer nights
		) {}
