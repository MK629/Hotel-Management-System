package com.hotel.api.dto.input;

import jakarta.validation.constraints.NotNull;

public record ReservationIdForm(
		@NotNull(message = "reservation id is null")
		Long id
		) {

}
