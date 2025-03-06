package com.hotel.api.service.util;

import com.hotel.api.dto.output.ReservationDTO;
import com.hotel.api.dto.output.RoomDTO;
import com.hotel.api.dto.output.SimpleUserInfo;
import com.hotel.api.entity.Reservation;
import com.hotel.api.entity.Room;
import com.hotel.api.entity.User;

public class ServiceUtil {

	public static RoomDTO changeToRoomDTO(Room room) {
		return new RoomDTO(room.getId(), room.getNumber(), room.getType(), room.getBeds(), room.getPrice(), room.getReserved(), room.getImage());
	}
	
	public static ReservationDTO changeToReservationDTO(Reservation reservation) {
		return new ReservationDTO(reservation.getId(), reservation.getUsername(), reservation.getUserEmail(), reservation.getUserRank(), reservation.getReservationDateTime(),
				reservation.getBookedDate(), reservation.getNights(), reservation.getEstimatedCheckoutDate(), reservation.getContactNumber(), reservation.getRoomNumber(), reservation.getRoomType(),
				reservation.getReservationFee(),reservation.getTotal(), reservation.getReservationType(), reservation.getReservationStatus(), reservation.getCheckInDateTime(),
				reservation.getCheckOutDateTime(), reservation.getCancelDateTime(), reservation.getExtendedStay(), reservation.getBookingDateEdited());
	}
	
	public static SimpleUserInfo changeToSimpleUserInfo(User user) {
		return new SimpleUserInfo(user.getUsername(), user.getEmail(), user.getRank());
	}
}
