package com.hotel.api.dto.input;

import com.hotel.api.entity.enums.RoomType;

import jakarta.validation.constraints.NotNull;

public record RoomTypeForm(
		@NotNull(message = "Room type is null.")
		RoomType roomType
		) {

}
