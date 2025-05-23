package com.hotel.api.service.util;

import com.hotel.api.entity.enums.RoomType;
import com.hotel.api.exceptionHandling.customExceptions.UnknownEnumTypeException;

public class UserRankPointsCalculator {

	public static Double calculatePoints(RoomType roomType, Integer nights) {
		return (calculatePointsByRoomType(roomType) + calculatePointsByNights(nights));
	}
	
	private static Double calculatePointsByRoomType(RoomType roomType) {
		switch(roomType) {
		case Standard: return 50.00;
		case Double: return 75.00;
		case Twin: return 75.00;
		case Family: return 100.00;
		case Queen: return 125.00;
		case King: return 150.00;
		case Suite: return 175.00;
		case Penthouse: return 200.00;
		case Villa: return 250.00;
		default: throw new UnknownEnumTypeException("Enum type does not exist.");
		}
	}
	
	private static Double calculatePointsByNights(Integer nights) {
		return 7.50 * nights;
	}
	
	public static Double grantPointsByExtendedNights(Integer nights) {
		return 7.50 * nights;
	}
}
