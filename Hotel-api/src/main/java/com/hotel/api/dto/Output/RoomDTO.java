package com.hotel.api.dto.Output;

import com.hotel.api.entity.enums.RoomType;

public record RoomDTO(
		Long id,
		String number,
		RoomType type,
		Integer beds,
		Double price,
		Boolean reserved,
		String image
		){}
