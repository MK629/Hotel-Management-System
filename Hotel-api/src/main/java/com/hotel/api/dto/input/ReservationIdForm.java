package com.hotel.api.dto.input;

import jakarta.validation.constraints.NotNull;

public record ReservationIdForm(
		@NotNull(message = "Reservation ID is null.")
		Long id
		) {

}
