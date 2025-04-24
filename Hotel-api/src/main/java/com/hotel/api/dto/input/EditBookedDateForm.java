package com.hotel.api.dto.input;

import java.time.LocalDate;

import jakarta.validation.constraints.FutureOrPresent;
import jakarta.validation.constraints.NotNull;

public record EditBookedDateForm(
		@NotNull(message = "Reservation ID is null.")
		Long reservationId,
		@NotNull(message = "Please enter a new booking date.")
		@FutureOrPresent(message = "The new booking date must be in the future or the present.")
		LocalDate bookedDate
		) {
}
