package com.hotel.api.service;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.List;
import java.util.stream.Collectors;

import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.hotel.api.dto.input.EditBookedDateForm;
import com.hotel.api.dto.input.ExtendStayForm;
import com.hotel.api.dto.input.ReservationIdForm;
import com.hotel.api.dto.input.ReservationStatusForm;
import com.hotel.api.dto.input.ReservationTypeForm;
import com.hotel.api.dto.input.RoomAddForm;
import com.hotel.api.dto.input.RoomEditForm;
import com.hotel.api.dto.input.RoomIdForm;
import com.hotel.api.dto.input.RoomTypeForm;
import com.hotel.api.dto.input.UserRoleForm;
import com.hotel.api.dto.input.UsernameOrEmailAndReservationStatusForm;
import com.hotel.api.dto.input.UsernameOrEmailAndReservationTypeForm;
import com.hotel.api.dto.input.UsernameOrEmailForm;
import com.hotel.api.dto.output.ReservationDTO;
import com.hotel.api.dto.output.RoomDTO;
import com.hotel.api.dto.output.SimpleUserInfo;
import com.hotel.api.entity.Reservation;
import com.hotel.api.entity.Room;
import com.hotel.api.entity.User;
import com.hotel.api.entity.enums.ReservationStatus;
import com.hotel.api.exceptionHandling.customExceptions.DuplicateDataException;
import com.hotel.api.exceptionHandling.customExceptions.EditLimitExceededException;
import com.hotel.api.exceptionHandling.customExceptions.InvalidDateException;
import com.hotel.api.exceptionHandling.customExceptions.ReservationNotFoundException;
import com.hotel.api.exceptionHandling.customExceptions.ReservationStatusErrorException;
import com.hotel.api.exceptionHandling.customExceptions.UnavailableRoomException;
import com.hotel.api.exceptionHandling.customExceptions.UserNotFoundException;
import com.hotel.api.repository.ReservationRepository;
import com.hotel.api.repository.RoleRepository;
import com.hotel.api.repository.RoomRepository;
import com.hotel.api.repository.UserRepository;
import com.hotel.api.service.util.ServiceUtil;
import com.hotel.api.service.util.UserRankPointsCalculator;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class AdminOperationsService {
	
	private final RoomRepository roomRepository;
	private final RoleRepository roleRepository;
	private final ReservationRepository reservationRepository;
	private final UserRepository userRepository;
	
	//Get all user info.
	public List<SimpleUserInfo> getAllUsers(){
		return userRepository.findAll().stream().map(user -> {return ServiceUtil.changeToSimpleUserInfo(user);}).collect(Collectors.toList());
	}
	
	//Get user info by roles.
	public List<SimpleUserInfo> getUsersByRole(UserRoleForm userRoleForm){
		return roleRepository.findUsersByRole(userRoleForm.roleName()).stream().map(user -> {return ServiceUtil.changeToSimpleUserInfo(user);}).collect(Collectors.toList());
	}
	
	//Get all room info.
	public List<RoomDTO> getAllRooms(){
		return roomRepository.findAll().stream().map((room) -> {return ServiceUtil.changeToRoomDTO(room);}).collect(Collectors.toList());
	}
	
	//Get rooms according to a specified type.
	public List<RoomDTO> getRoomsByType(RoomTypeForm roomTypeForm){
		return roomRepository.getRoomsByType(roomTypeForm.roomType()).stream().map((room) -> {return ServiceUtil.changeToRoomDTO(room);}).collect(Collectors.toList());
	}
	
	
	//Get room info by id.
	public RoomDTO getRoomById(RoomIdForm roomIdForm) {
		Room foundRoom = roomRepository.findById(roomIdForm.id()).orElse(null);
		if(foundRoom == null) {
			throw new UnavailableRoomException("Room not found.");
		}
		return ServiceUtil.changeToRoomDTO(foundRoom);
	}
	
	//Create new room.
	public String addNewRoom(RoomAddForm roomAddForm) {
		try {
			Room newRoom = new Room(roomAddForm.number(), roomAddForm.type());
			roomRepository.save(newRoom);
			return "success";
		}
		//Handle duplicate entries gracefully with an exception.
		catch (DataIntegrityViolationException e) {
			throw new DuplicateDataException("Room number already exists."); 
		}
	}
	
	//Edit a room by id.
	public String editRoom(RoomEditForm roomEditForm) {
		Room roomToEdit = roomRepository.findById(roomEditForm.id()).orElse(null);
		if(roomToEdit == null) {
			throw new UnavailableRoomException("Room not found.");
		}
		roomToEdit.setNumber(roomEditForm.number());
		roomToEdit.setType(roomEditForm.type());
		roomToEdit.setBeds(roomEditForm.beds());
		roomToEdit.setPrice(roomEditForm.price());
		roomRepository.save(roomToEdit);
		return "success";
	}
	
	//Get all reservations
	public List<ReservationDTO> getAllReservations(){
		return reservationRepository.findAll().stream().map((reservation) -> {return ServiceUtil.changeToReservationDTO(reservation);}).collect(Collectors.toList());
	}
	
	//Get reservations by reservation status (Awaiting, Checked in, Checked out, Cancelled).
	public List<ReservationDTO> getAllReservationsByStatus(ReservationStatusForm reservationStatusForm){
		return reservationRepository.findAllByStatus(reservationStatusForm.reservationStatus()).stream().map((reservation) -> {return ServiceUtil.changeToReservationDTO(reservation);}).collect(Collectors.toList());
	}
	
	//Get reservations by reservation type (Standard, Manual).
	public List<ReservationDTO> getAllReservationsByType(ReservationTypeForm reservationTypeForm){
		return reservationRepository.findAllByType(reservationTypeForm.reservationType()).stream().map((reservation) -> {return ServiceUtil.changeToReservationDTO(reservation);}).collect(Collectors.toList());
	}
	
	//Get reservations from a specific user.
	public List<ReservationDTO> getAllReservationsByUsernameOrEmail(UsernameOrEmailForm usernameOrEmailForm){
		return userRepository.SimpleFindByUsernameOrEmail(usernameOrEmailForm.usernameOrEmail()).getReservations().
				stream().map((reservation) -> {return ServiceUtil.changeToReservationDTO(reservation);}).collect(Collectors.toList());
	}
	
	//Get reservations from a specific user and filter by reservation status.
	public List<ReservationDTO> getAllReservationsByUsernameOrEmailAndStatus(UsernameOrEmailAndReservationStatusForm usernameOrEmailAndReservationStatusForm){
		return userRepository.SimpleFindByUsernameOrEmail(usernameOrEmailAndReservationStatusForm.usernameOrEmail()).getReservations().
				stream().filter((reservation) -> {return reservation.getReservationStatus() == usernameOrEmailAndReservationStatusForm.reservationStatus();}).
				map((reservation) -> {return ServiceUtil.changeToReservationDTO(reservation);}).collect(Collectors.toList());
	}
	
	//Get reservations from a specific user and filter by reservation type.
	public List<ReservationDTO> getAllReservationsByUsernameOrEmailAndType(UsernameOrEmailAndReservationTypeForm usernameOrEmailAndReservationTypeForm){
		return userRepository.SimpleFindByUsernameOrEmail(usernameOrEmailAndReservationTypeForm.usernameOrEmail()).getReservations().
				stream().filter((reservation) -> {return reservation.getReservationType() == usernameOrEmailAndReservationTypeForm.reservationType();}).
				map((reservation) -> {return ServiceUtil.changeToReservationDTO(reservation);}).collect(Collectors.toList());
	}
	
	@Transactional
	//Check in a user. Change reservation status to 'Checked_In'
	public String checkIn(ReservationIdForm reservationIdForm) {
		Reservation checkInReservation = reservationRepository.findById(reservationIdForm.id()).orElse(null);
		
		//Make sure reservation exists.
		if(checkInReservation == null) { 
			throw new ReservationNotFoundException("Reservation not found.");
		}
		
		//Make sure it's checked in on the day that it's booked.
		if(!LocalDate.now().isEqual(checkInReservation.getBookedDate())) { 
			throw new InvalidDateException("Today is not the registered booked date.");
		}
		
		//Make sure reservation is in 'Awaiting' status.
		if(checkInReservation.getReservationStatus() == ReservationStatus.Awaiting) {
			
			//Change status to 'Checked_In'.
			checkInReservation.setReservationStatus(ReservationStatus.Checked_In);
			checkInReservation.setCheckInDateTime(LocalDateTime.now());
			
			//Just in case if there was anything wrong.
			if(checkInReservation.getReservationStatus() != ReservationStatus.Checked_In) {
				throw new ReservationStatusErrorException("Something went wrong. please contact the developer.");
			}
			
			//Save to database.
			reservationRepository.save(checkInReservation);
			
			return "Successfully checked in user: " + checkInReservation.getUser().getUsername() + ".";
		}
		//Throw a custom exception if reservation status is not 'Awaiting'.
		else {
			throw new ReservationStatusErrorException("Inappropriate reservation status.");
		}
	}
	
	@Transactional
	//Check out a user. Change reservation status to 'Checked_Out'
	public String checkOut(ReservationIdForm reservationIdForm) {
		Reservation checkOutReservation = reservationRepository.findById(reservationIdForm.id()).orElse(null);
		
		//Make sure reservation exists.
		if(checkOutReservation == null) {
			throw new ReservationNotFoundException("Reservation not found.");
		}
		
		//Make sure reservation is in 'Checked_In' status.
		if(checkOutReservation.getReservationStatus() == ReservationStatus.Checked_In) {
			
			//Determine if it's an early checkout.(Earlier than the estimated check out date.)
			if(LocalDate.now().isBefore(checkOutReservation.getEstimatedCheckoutDate())) {
				checkOutReservation.setEarlyCheckout(true);
			}
			
			//Change status to 'Checked_Out'.
			Room checkOutRoom = checkOutReservation.getRoom();
			checkOutReservation.setReservationStatus(ReservationStatus.Checked_Out);
			checkOutReservation.setCheckOutDateTime(LocalDateTime.now());
			checkOutReservation.calculateActualTotal();
			checkOutRoom.setReserved(false);
			
			//Just in case if there was anything wrong.
			if(checkOutReservation.getReservationStatus() != ReservationStatus.Checked_Out) {
				throw new ReservationStatusErrorException("Something went wrong. please contact the developer.");
			}
			
			//Save to database.
			roomRepository.save(checkOutRoom);
			reservationRepository.save(checkOutReservation);
			
			return "Successfully checked out user: " + checkOutReservation.getUser().getUsername() + ".";
		}
		//Throw a custom exception if reservation status is not 'Checked_In'.
		else {
			throw new ReservationStatusErrorException("Inappropriate reservation status.");
		}
	}
	
	@Transactional
	//Cancel a user's reservation. Change reservation status to 'Cancelled'.
	public String cancel(ReservationIdForm reservationIdForm) {
		Reservation cancelReservation = reservationRepository.findById(reservationIdForm.id()).orElse(null);
		
		//Make sure reservation exists.
		if(cancelReservation == null) {
			throw new ReservationNotFoundException("Reservation not found.");
		}
		
		//Make sure reservation is in 'Awaiting' status.
		if(cancelReservation.getReservationStatus() == ReservationStatus.Awaiting) {
			
			//Change status to 'Cancelled'.
			Room cancelRoom = cancelReservation.getRoom();
			cancelReservation.setReservationStatus(ReservationStatus.Cancelled);
			cancelReservation.setCancelDateTime(LocalDateTime.now());
			cancelReservation.setActualTotal(cancelReservation.getReservationFee());
			cancelRoom.setReserved(false);
			
			//Deduct points from user
			User cancelUser = cancelReservation.getUser();
			cancelUser.deductUserRankPoints(UserRankPointsCalculator.calculatePoints(cancelRoom.getType(), cancelReservation.getNights()));
			
			//Just in case if there was anything wrong.
			if(cancelReservation.getReservationStatus() != ReservationStatus.Cancelled) {
				throw new ReservationStatusErrorException("Something went wrong. please contact the developer.");
			}
			
			//Save to database.
			userRepository.save(cancelUser);
			roomRepository.save(cancelRoom);
			reservationRepository.save(cancelReservation);
			
			return "Successfully cancelled the reservation for user: " + cancelReservation.getUser().getUsername() + ".";
		}
		//Throw a custom exception if reservation status is not 'Awaiting'.
		else {
			throw new ReservationStatusErrorException("Inappropriate reservation status.");
		}
	}
	
	@Transactional
	//Increase 'nights' count for a user's reservation.
	public String extendStay(ExtendStayForm extendStayForm) {
		Reservation extendReservation = reservationRepository.findById(extendStayForm.reservationId()).orElse(null);
		
		//Make sure reservation exists.
		if(extendReservation == null) {
			throw new ReservationNotFoundException("Reservation not found.");
		}
		
		//Make sure reservation is in either 'Awaiting' or 'Checked_In' status
		if(extendReservation.getReservationStatus() == ReservationStatus.Awaiting || extendReservation.getReservationStatus() == ReservationStatus.Checked_In) {
			//Increase 'nights' count and mark 'extendedStay' as 'true'.
			extendReservation.addNights(extendStayForm.nights());
			extendReservation.setExtendedStay(true);
			
			//Give user rank points for extended nights.
			User updateUser = extendReservation.getUser();
			
			//Make sure user exists.
			if(updateUser == null) {
				throw new UserNotFoundException("User not found.");
			}
			
			updateUser.grantUserRankPoints(UserRankPointsCalculator.grantPointsByExtendedNights(extendStayForm.nights()));
			
			//Save to database.
			userRepository.save(updateUser);
			reservationRepository.save(extendReservation);
			
			return "Nights extended to " + extendReservation.getNights() + " for user: " + extendReservation.getUser().getUsername() + ".";
		}
		//Throw a custom exception if reservation status is neither 'Awaiting' not 'Checked_In'.
		else {
			throw new ReservationStatusErrorException("Inappropriate reservation status.");
		}
	}
	
	@Transactional
	//Edit the booked date of a user's reservation. Sometimes, the user might check in later or earlier than the actual booked date. This function is to make it possible.
	public String editBookedDate(EditBookedDateForm editBookedDateForm) {
		
		//Make sure that the new booking date doesn't exceed the one month threshold.
		if(editBookedDateForm.bookedDate().isAfter(LocalDate.now().plusMonths(1))) {
			throw new InvalidDateException("You can only book less than one month in advance.");
		}
		
		Reservation editReservation = reservationRepository.findById(editBookedDateForm.reservationId()).orElse(null);
		
		//Make sure reservation exists.
		if(editReservation == null) {
			throw new ReservationNotFoundException("Reservation not found.");
		}
		
		//Make sure reservation is in 'Awaiting' status.
		if(editReservation.getReservationStatus() == ReservationStatus.Awaiting) {
			//Change limit is 2. Check if it exceeds it.
			if(editReservation.getBookingDateEdited() >= 2) {
				throw new EditLimitExceededException("You can only change the booked date up to a maximum of two times.");
			}
			
			//Edit booking date.
			editReservation.editBookedDate(editBookedDateForm.bookedDate());
			
			//Save to database.
			reservationRepository.save(editReservation);
			
			return "Booked date changed to " + editReservation.getBookedDate() + " for user: " + editReservation.getUser().getUsername() + ".";
		}
		//Throw a custom exception if reservation status is not 'Awaiting'.
		else {
			throw new ReservationStatusErrorException("Inappropriate reservation status.");
		}
	}

}
