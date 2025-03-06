package com.hotel.api.dto.Input;

import jakarta.validation.constraints.NotNull;

public record RoomIdForm(
		@NotNull(message = "reservation id is null")
		Long id
		) {}
