package com.hotel.api.service.DTOs.Output;

import com.hotel.api.entity.enums.RoomType;

public record RoomChoice(
		RoomType type,
		Integer beds,
		Double price,
		String image
		) {

}
