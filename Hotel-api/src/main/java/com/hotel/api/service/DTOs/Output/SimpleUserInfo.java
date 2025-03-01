package com.hotel.api.service.DTOs.Output;

import com.hotel.api.entity.enums.UserRank;

public record SimpleUserInfo(
		String username,
		String email,
		UserRank rank
		) {
}
