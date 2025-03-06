package com.hotel.api.dto.input;

import java.time.LocalDate;

import jakarta.validation.constraints.FutureOrPresent;
import jakarta.validation.constraints.NotNull;

public record EditBookedDateForm(
		@NotNull(message = "reservation reservationId is null")
		Long reservationId,
		@NotNull(message = "booking date is null")
		@FutureOrPresent(message = "the fixed booking date must be in the future or the present.")
		LocalDate bookedDate
		) {
}
