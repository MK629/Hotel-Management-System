package com.hotel.api.dto.Output;

import com.hotel.api.entity.enums.RoomType;

public record RoomChoice(
		RoomType type,
		Integer beds,
		Double price,
		String image
		) {

}
