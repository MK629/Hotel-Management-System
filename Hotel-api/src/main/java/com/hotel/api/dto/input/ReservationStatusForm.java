package com.hotel.api.dto.input;

import com.hotel.api.entity.enums.ReservationStatus;

import jakarta.validation.constraints.NotNull;

public record ReservationStatusForm(
		@NotNull(message = "Reservation status is null.")
		ReservationStatus reservationStatus
		) {

}
