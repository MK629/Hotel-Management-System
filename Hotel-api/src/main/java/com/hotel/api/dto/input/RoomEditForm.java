package com.hotel.api.dto.input;

import com.hotel.api.entity.enums.RoomType;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotEmpty;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Positive;

public record RoomEditForm(
		@NotNull(message = "room id is null")
		Long id,
		@NotEmpty(message = "room number is empty.")
		@NotBlank(message = "room number is blank.")
		String number,
		@NotNull(message = "room type is null.")
		RoomType type,
		@NotNull(message = "bed count is null.")
		@Positive(message = "bed count is below 1.")
		Integer beds,
		@NotNull(message = "price is null.")
		@Positive(message = "price is below 1.")
		Double price,
		@NotEmpty(message = "image url is empty.")
		@NotBlank(message = "image url is blank.")
		String image
		) {

}
