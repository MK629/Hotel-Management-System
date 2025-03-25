package com.hotel.api.dto.output;

import com.hotel.api.entity.enums.RoomType;

public record RoomTypeChoice(
		RoomType type,
		Integer beds,
		Double price,
		String image
		) {

}
