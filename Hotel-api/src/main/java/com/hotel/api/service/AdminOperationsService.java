package com.hotel.api.service;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.List;
import java.util.stream.Collectors;

import org.springframework.stereotype.Service;

import com.hotel.api.dto.input.EditBookedDateForm;
import com.hotel.api.dto.input.ExtendStayForm;
import com.hotel.api.dto.input.ReservationIdForm;
import com.hotel.api.dto.input.ReservationStatusForm;
import com.hotel.api.dto.input.ReservationTypeForm;
import com.hotel.api.dto.input.RoomAddForm;
import com.hotel.api.dto.input.RoomEditForm;
import com.hotel.api.dto.input.RoomIdForm;
import com.hotel.api.dto.input.UserRoleForm;
import com.hotel.api.dto.input.UsernameOrEmailAndReservationStatusForm;
import com.hotel.api.dto.input.UsernameOrEmailAndReservationTypeForm;
import com.hotel.api.dto.input.UsernameOrEmailForm;
import com.hotel.api.dto.output.ReservationDTO;
import com.hotel.api.dto.output.RoomDTO;
import com.hotel.api.dto.output.SimpleUserInfo;
import com.hotel.api.entity.Reservation;
import com.hotel.api.entity.Room;
import com.hotel.api.entity.enums.ReservationStatus;
import com.hotel.api.exceptionHandling.customExceptions.EditLimitExceededException;
import com.hotel.api.exceptionHandling.customExceptions.InvalidDateException;
import com.hotel.api.exceptionHandling.customExceptions.ReservationNotFoundException;
import com.hotel.api.exceptionHandling.customExceptions.ReservationStatusErrorException;
import com.hotel.api.exceptionHandling.customExceptions.UnavailableRoomException;
import com.hotel.api.repository.ReservationRepository;
import com.hotel.api.repository.RoleRepository;
import com.hotel.api.repository.RoomRepository;
import com.hotel.api.repository.UserRepository;
import com.hotel.api.service.util.ServiceUtil;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class AdminOperationsService {
	
	private final RoomRepository roomRepository;
	private final RoleRepository roleRepository;
	private final ReservationRepository reservationRepository;
	private final UserRepository userRepository;
	
	
	public List<SimpleUserInfo> getAllUsers(){
		return userRepository.findAll().stream().map(user -> {return ServiceUtil.changeToSimpleUserInfo(user);}).collect(Collectors.toList());
	}
	
	public List<SimpleUserInfo> getUsersByRole(UserRoleForm userRoleForm){
		return roleRepository.findUsersByRole(userRoleForm.roleName()).stream().map(user -> {return ServiceUtil.changeToSimpleUserInfo(user);}).collect(Collectors.toList());
	}
	
	public List<RoomDTO> getAllRooms(){
		return roomRepository.findAll().stream().map((room) -> {return ServiceUtil.changeToRoomDTO(room);}).collect(Collectors.toList());
	}
	
	public RoomDTO getRoomById(RoomIdForm roomIdForm) {
		Room foundRoom = roomRepository.findById(roomIdForm.id()).orElse(null);
		if(foundRoom == null) {
			throw new UnavailableRoomException("room not found.");
		}
		return ServiceUtil.changeToRoomDTO(foundRoom);
	}
	
	public String addNewRoom(RoomAddForm roomAddForm) {
		Room newRoom = new Room(roomAddForm.number(), roomAddForm.type(), roomAddForm.image());
		roomRepository.save(newRoom);
		return "success";
	}
	
	public String editRoom(RoomEditForm roomEditForm) {
		Room roomToEdit = roomRepository.findById(roomEditForm.id()).orElse(null);
		if(roomToEdit == null) {
			throw new UnavailableRoomException("room not found.");
		}
		roomToEdit.setNumber(roomEditForm.number());
		roomToEdit.setType(roomEditForm.type());
		roomToEdit.setBeds(roomEditForm.beds());
		roomToEdit.setPrice(roomEditForm.price());
		roomToEdit.setImage(roomEditForm.image());
		roomRepository.save(roomToEdit);
		return "success";
	}
	
	public List<ReservationDTO> getAllReservations(){
		return reservationRepository.findAll().stream().map((reservation) -> {return ServiceUtil.changeToReservationDTO(reservation);}).collect(Collectors.toList());
	}
	
	public List<ReservationDTO> getAllReservationsByStatus(ReservationStatusForm reservationStatusForm){
		return reservationRepository.findAllByStatus(reservationStatusForm.reservationStatus()).stream().map((reservation) -> {return ServiceUtil.changeToReservationDTO(reservation);}).collect(Collectors.toList());
	}
	
	public List<ReservationDTO> getAllReservationsByType(ReservationTypeForm reservationTypeForm){
		return reservationRepository.findAllByType(reservationTypeForm.reservationType()).stream().map((reservation) -> {return ServiceUtil.changeToReservationDTO(reservation);}).collect(Collectors.toList());
	}
	
	public List<ReservationDTO> getAllReservationsByUsernameOrEmail(UsernameOrEmailForm usernameOrEmailForm){
		return userRepository.SimpleFindByUsernameOrEmail(usernameOrEmailForm.usernameOrEmail()).getReservations().
				stream().map((reservation) -> {return ServiceUtil.changeToReservationDTO(reservation);}).collect(Collectors.toList());
	}
	
	public List<ReservationDTO> getAllReservationsByUsernameOrEmailAndStatus(UsernameOrEmailAndReservationStatusForm usernameOrEmailAndReservationStatusForm){
		return userRepository.SimpleFindByUsernameOrEmail(usernameOrEmailAndReservationStatusForm.usernameOrEmail()).getReservations().
				stream().filter((reservation) -> {return reservation.getReservationStatus() == usernameOrEmailAndReservationStatusForm.reservationStatus();}).
				map((reservation) -> {return ServiceUtil.changeToReservationDTO(reservation);}).collect(Collectors.toList());
	}
	
	public List<ReservationDTO> getAllReservationsByUsernameOrEmailAndType(UsernameOrEmailAndReservationTypeForm usernameOrEmailAndReservationTypeForm){
		return userRepository.SimpleFindByUsernameOrEmail(usernameOrEmailAndReservationTypeForm.usernameOrEmail()).getReservations().
				stream().filter((reservation) -> {return reservation.getReservationType() == usernameOrEmailAndReservationTypeForm.reservationType();}).
				map((reservation) -> {return ServiceUtil.changeToReservationDTO(reservation);}).collect(Collectors.toList());
	}
	
	
	public String checkIn(ReservationIdForm reservationIdForm) {
		Reservation checkInReservation = reservationRepository.findById(reservationIdForm.id()).orElse(null);
		if(checkInReservation == null) {
			throw new ReservationNotFoundException("reservation not found.");
		}
		
		if(LocalDate.now().isBefore(checkInReservation.getBookedDate())) {
			throw new InvalidDateException("The registered booked date has not arrived yet.");
		}
		
		if(checkInReservation.getReservationStatus() == ReservationStatus.Awaiting) {
			checkInReservation.setReservationStatus(ReservationStatus.Checked_In);
			checkInReservation.setCheckInDateTime(LocalDateTime.now());
			reservationRepository.save(checkInReservation);
			
			if(checkInReservation.getReservationStatus() != ReservationStatus.Checked_In) {
				checkInReservation.setCheckInDateTime(null);
				reservationRepository.save(checkInReservation);
				throw new ReservationStatusErrorException("something went wrong. please contact the developer.");
			}
			
			return "successfully checked in user: " + checkInReservation.getUsername() + ".";
		}
		else {
			throw new ReservationStatusErrorException("inappropriate reservation status.");
		}
	}
	
	
	public String checkOut(ReservationIdForm reservationIdForm) {
		Reservation checkOutReservation = reservationRepository.findById(reservationIdForm.id()).orElse(null);
		if(checkOutReservation == null) {
			throw new ReservationNotFoundException("reservation not found.");
		}
		
		if(checkOutReservation.getReservationStatus() == ReservationStatus.Checked_In) {
			Room checkOutRoom = checkOutReservation.getRoom();
			checkOutReservation.setReservationStatus(ReservationStatus.Checked_Out);
			checkOutReservation.setCheckOutDateTime(LocalDateTime.now());
			checkOutRoom.setReserved(false);
			roomRepository.save(checkOutRoom);
			reservationRepository.save(checkOutReservation);
			
			if(checkOutReservation.getReservationStatus() != ReservationStatus.Checked_Out) {
				checkOutRoom.setReserved(true);
				checkOutReservation.setCheckOutDateTime(null);
				roomRepository.save(checkOutRoom);
				reservationRepository.save(checkOutReservation);
				throw new ReservationStatusErrorException("something went wrong. please contact the developer.");
			}
			return "successfully checked out user: " + checkOutReservation.getUsername() + ".";
		}
		else {
			throw new ReservationStatusErrorException("inappropriate reservation status.");
		}
	}
	
	
	public String cancel(ReservationIdForm reservationIdForm) {
		Reservation cancelReservation = reservationRepository.findById(reservationIdForm.id()).orElse(null);
		if(cancelReservation == null) {
			throw new ReservationNotFoundException("reservation not found.");
		}
		
		if(cancelReservation.getReservationStatus() == ReservationStatus.Awaiting) {
			Room cancelRoom = cancelReservation.getRoom();
			cancelReservation.setReservationStatus(ReservationStatus.Cancelled);
			cancelReservation.setCancelDateTime(LocalDateTime.now());
			cancelRoom.setReserved(false);
			roomRepository.save(cancelRoom);
			reservationRepository.save(cancelReservation);
			
			if(cancelReservation.getReservationStatus() != ReservationStatus.Cancelled) {
				cancelRoom.setReserved(true);
				roomRepository.save(cancelRoom);
				reservationRepository.save(cancelReservation);
				throw new ReservationStatusErrorException("something went wrong. please contact the developer.");
			}
			return "successfully cancelled the reservation for user: " + cancelReservation.getUsername() + ".";
		}
		else {
			throw new ReservationStatusErrorException("inappropriate reservation status.");
		}
	}
	
	
	public String extendStay(ExtendStayForm extendStayForm) {
		Reservation extendReservation = reservationRepository.findById(extendStayForm.reservationId()).orElse(null);
		if(extendReservation == null) {
			throw new ReservationNotFoundException("reservation not found.");
		}
		
		if(extendReservation.getReservationStatus() == ReservationStatus.Awaiting || extendReservation.getReservationStatus() == ReservationStatus.Checked_In) {
			extendReservation.addNights(extendStayForm.nights());
			extendReservation.setExtendedStay(true);
			reservationRepository.save(extendReservation);
			return "nights extended to " + extendReservation.getNights() + " for user: " + extendReservation.getUsername() + ".";
		}
		else {
			throw new ReservationStatusErrorException("inappropriate reservation status.");
		}
	}
	
	public String editBookedDate(EditBookedDateForm editBookedDateForm) {
		if(editBookedDateForm.bookedDate().isAfter(LocalDate.now().plusMonths(1))) {
			throw new InvalidDateException("You can only book less than one month in advance.");
		}
		
		Reservation editReservation = reservationRepository.findById(editBookedDateForm.reservationId()).orElse(null);
		if(editReservation == null) {
			throw new ReservationNotFoundException("reservation not found.");
		}
		
		if(editReservation.getReservationStatus() == ReservationStatus.Awaiting) {
			if(editReservation.getBookingDateEdited() >= 2) {
				throw new EditLimitExceededException("You can only change the booked date up to a maximum of two times.");
			}
			editReservation.editBookedDate(editBookedDateForm.bookedDate());
			reservationRepository.save(editReservation);
			return "Booked date changed to " + editReservation.getBookedDate() + " for user: " + editReservation.getUsername() + ".";
		}
		else {
			throw new ReservationStatusErrorException("inappropriate reservation status.");
		}
	}

}
