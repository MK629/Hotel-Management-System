package com.hotel.api.service.util;

import java.util.Base64;
import com.hotel.api.dto.output.ReservationDTO;
import com.hotel.api.dto.output.RoomDTO;
import com.hotel.api.dto.output.SimpleUserInfo;
import com.hotel.api.entity.Reservation;
import com.hotel.api.entity.Room;
import com.hotel.api.entity.User;

public class ServiceUtil {

	public static RoomDTO changeToRoomDTO(Room room) {
		return new RoomDTO(room.getId(), room.getNumber(), room.getType(), room.getBeds(), room.getPrice(), room.getReserved());
	}
	
	public static ReservationDTO changeToReservationDTO(Reservation reservation) {
		return new ReservationDTO(reservation.getId(), reservation.getUser().getUsername(), reservation.getUser().getEmail(), reservation.getUserRankAtReservationTime(), reservation.getUser().getRank(), reservation.getReservationDateTime(),
				reservation.getBookedDate(), reservation.getNights(), reservation.getEstimatedCheckoutDate(), reservation.getContactNumber(), reservation.getRoomNumber(), reservation.getRoomType(),
				reservation.getReservationFee(),reservation.getEstimatedTotal(), reservation.getActualTotal(), reservation.getReservationType(), reservation.getReservationStatus(), reservation.getCheckInDateTime(),
				reservation.getCheckOutDateTime(), reservation.getCancelDateTime(), reservation.getExtendedStay(), reservation.getEarlyCheckout(), reservation.getBookingDateEdited());
	}
	
	public static SimpleUserInfo changeToSimpleUserInfo(User user) {
		return new SimpleUserInfo(user.getUsername(), user.getEmail(), user.getRank());
	}
	
	public static String decodeBase64(String encodedString) {
		return new String(Base64.getDecoder().decode(encodedString));
	}
}
