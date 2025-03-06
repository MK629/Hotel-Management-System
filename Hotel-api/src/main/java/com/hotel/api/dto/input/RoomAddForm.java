package com.hotel.api.dto.input;

import com.hotel.api.entity.enums.RoomType;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotEmpty;
import jakarta.validation.constraints.NotNull;

public record RoomAddForm(
		@NotEmpty(message = "room number is empty.")
		@NotBlank(message = "room number is blank.")
		String number,
		@NotNull(message = "room number is null.")
		RoomType type,
		@NotEmpty(message = "image url is empty.")
		@NotBlank(message = "image url is blank.")
		String image
		) {

}
