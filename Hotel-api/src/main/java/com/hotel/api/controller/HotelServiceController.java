package com.hotel.api.controller;

import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.hotel.api.dto.input.ChangePasswordForm;
import com.hotel.api.dto.input.ChangeUsernameForm;
import com.hotel.api.dto.input.ManualReservationForm;
import com.hotel.api.dto.input.RoomTypeForm;
import com.hotel.api.dto.input.StandardReservationForm;
import com.hotel.api.dto.input.UsernameOrEmailAndReservationStatusForm;
import com.hotel.api.dto.input.UsernameOrEmailAndReservationTypeForm;
import com.hotel.api.dto.input.UsernameOrEmailForm;
import com.hotel.api.dto.output.ReservationDTO;
import com.hotel.api.dto.output.RoomTypeChoice;
import com.hotel.api.dto.output.RoomDTO;
import com.hotel.api.dto.output.SimpleUserInfo;
import com.hotel.api.service.HotelService;

import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;

@RestController
@RequiredArgsConstructor
@RequestMapping("/hotel/api")
public class HotelServiceController {
	
	private final HotelService hotelService;
	
	@PostMapping("/standardReservation")
	public String standardReservation(@RequestBody @Valid StandardReservationForm standardReservationForm) {
		return hotelService.standardReservation(standardReservationForm);
	}
	
	@PostMapping("/manualReservation")
	public String standardReservation(@RequestBody @Valid ManualReservationForm manualReservationForm) {
		return hotelService.manualReservation(manualReservationForm);
	}
	
	@PostMapping("/getSimpleUserInfo")
	public SimpleUserInfo getSimpleUserInfo(@RequestBody @Valid UsernameOrEmailForm usernameOrEmailForm) {
		return hotelService.getSimpleUserInfo(usernameOrEmailForm);
	}
	
	@PostMapping("/changeUsername")
	public String changeUsername(@RequestBody @Valid ChangeUsernameForm changeUsernameForm) {
		return hotelService.changeUsername(changeUsernameForm);
	}
	
	@PostMapping("/changePassword")
	public String changePassword(@RequestBody @Valid ChangePasswordForm changePasswordForm) {
		return hotelService.changePassword(changePasswordForm);
	}
	
	@GetMapping("/getAllRooms")
	public List<RoomDTO> getAllRooms(){
		return hotelService.getAllRooms();
	}
	
	@PostMapping("/getRoomsByType")
	public List<RoomDTO> getRoomsByType(@RequestBody @Valid RoomTypeForm roomTypeForm){
		return hotelService.getRoomsByType(roomTypeForm);
	}
	
	@PostMapping("/getAllReservationsByUsernameOrEmail")
	public List<ReservationDTO> getAllReservationByUsernameOrEmail(@RequestBody @Valid UsernameOrEmailForm usernameOrEmailForm){
		return hotelService.getAllReservationsByUsernameOrEmail(usernameOrEmailForm);
	}
	
	@PostMapping("/getAllReservationsByUsernameOrEmailAndStatus")
	public List<ReservationDTO> getAllReservationByUsernameOrEmailAndStatus(@RequestBody @Valid UsernameOrEmailAndReservationStatusForm usernameOrEmailFormAndReservationStatusForm){
		return hotelService.getAllReservationsByUsernameOrEmailAndStatus(usernameOrEmailFormAndReservationStatusForm);
	}
	
	@PostMapping("/getAllReservationsByUsernameOrEmailAndType")
	public List<ReservationDTO> getAllReservationByUsernameOrEmailAndType(@RequestBody @Valid UsernameOrEmailAndReservationTypeForm usernameOrEmailFormAndReservationTypeForm){
		return hotelService.getAllReservationsByUsernameOrEmailAndType(usernameOrEmailFormAndReservationTypeForm);
	}
	
	@GetMapping("/initRoomTypeChoices")
	public List<RoomTypeChoice> initRoomTypeChoices(){
		return hotelService.initRoomTypeChoices();
	}
}
