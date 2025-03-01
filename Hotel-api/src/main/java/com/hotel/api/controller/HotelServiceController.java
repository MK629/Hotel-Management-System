package com.hotel.api.controller;

import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.hotel.api.service.HotelService;
import com.hotel.api.service.DTOs.Input.ChangePasswordRequestForm;
import com.hotel.api.service.DTOs.Input.ManualReservationForm;
import com.hotel.api.service.DTOs.Input.StandardReservationForm;
import com.hotel.api.service.DTOs.Input.UsernameOrEmailAndReservationStatusForm;
import com.hotel.api.service.DTOs.Input.UsernameOrEmailAndReservationTypeForm;
import com.hotel.api.service.DTOs.Input.UsernameOrEmailForm;
import com.hotel.api.service.DTOs.Output.ReservationDTO;
import com.hotel.api.service.DTOs.Output.RoomChoice;
import com.hotel.api.service.DTOs.Output.RoomDTO;
import com.hotel.api.service.DTOs.Output.SimpleUserInfo;

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
	
	@PostMapping("/changePassword")
	public String changePassword(@RequestBody @Valid ChangePasswordRequestForm changePasswordRequestForm) {
		return hotelService.changePassword(changePasswordRequestForm);
	}
	
	@GetMapping("/getAllRooms")
	public List<RoomDTO> getAllRooms(){
		return hotelService.getAllRooms();
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
	
	@GetMapping("/initStandardReservationPage")
	public List<RoomChoice> initStandardReservationPage(){
		return hotelService.initStandardReservationPage();
	}
}
