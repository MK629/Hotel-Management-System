package com.hotel.api.dto.output;

import com.hotel.api.entity.enums.RoomType;
import com.hotel.api.entity.enums.UserRank;
import java.time.LocalDate;
import java.time.LocalDateTime;

import com.hotel.api.entity.enums.ReservationStatus;
import com.hotel.api.entity.enums.ReservationType;

public record ReservationDTO(
		Long id,
		String username,
		String userEmail,
		UserRank userRankAtReservationTime,
		UserRank currentUserRank,
		LocalDateTime reservationTime,
		LocalDate bookedDate,
		Integer nights,
		LocalDate estimatedCheckoutDate,
		String contactNumber,
		String roomNumber,
		RoomType roomType,
		Double reservationFee,
		Double estimatedTotal,
		Double actualTotal,
		ReservationType reservationType,
		ReservationStatus reservationStatus,
		LocalDateTime checkInDateTime,
		LocalDateTime checkOutDateTime,
		LocalDateTime cancelDateTime,
		Boolean extendedStay,
		Boolean earlyCheckout,
		Integer bookingDateEdited
		) {}
