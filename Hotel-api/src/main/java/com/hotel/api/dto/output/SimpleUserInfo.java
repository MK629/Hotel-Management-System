package com.hotel.api.dto.output;

import com.hotel.api.entity.enums.UserRank;

public record SimpleUserInfo(
		String username,
		String email,
		UserRank rank
		) {
}
