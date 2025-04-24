package com.hotel.api.dto.input;

import com.hotel.api.entity.enums.RoomType;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotEmpty;
import jakarta.validation.constraints.NotNull;

public record RoomAddForm(
		@NotEmpty(message = "Please enter a room number.")
		@NotBlank(message = "Please enter a room number.")
		String number,
		@NotNull(message = "Please select a room type.")
		RoomType type
		) {

}
