package com.hotel.api.dto.input;

import com.hotel.api.entity.enums.ReservationStatus;

import jakarta.validation.constraints.NotNull;

public record ReservationStatusForm(
		@NotNull(message = "reservation reservationStatus is null.")
		ReservationStatus reservationStatus
		) {

}
