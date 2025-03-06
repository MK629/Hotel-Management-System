package com.hotel.api.controller;

import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.hotel.api.service.AdminOperationsService;
import com.hotel.api.service.DTOs.Input.EditBookedDateForm;
import com.hotel.api.service.DTOs.Input.ExtendStayForm;
import com.hotel.api.service.DTOs.Input.ReservationIdForm;
import com.hotel.api.service.DTOs.Input.ReservationStatusForm;
import com.hotel.api.service.DTOs.Input.ReservationTypeForm;
import com.hotel.api.service.DTOs.Input.RoomAddForm;
import com.hotel.api.service.DTOs.Input.RoomEditForm;
import com.hotel.api.service.DTOs.Input.RoomIdForm;
import com.hotel.api.service.DTOs.Input.UserRoleForm;
import com.hotel.api.service.DTOs.Input.UsernameOrEmailAndReservationStatusForm;
import com.hotel.api.service.DTOs.Input.UsernameOrEmailAndReservationTypeForm;
import com.hotel.api.service.DTOs.Input.UsernameOrEmailForm;
import com.hotel.api.service.DTOs.Output.ReservationDTO;
import com.hotel.api.service.DTOs.Output.RoomDTO;
import com.hotel.api.service.DTOs.Output.SimpleUserInfo;

import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;

@RestController
@RequiredArgsConstructor
@RequestMapping("/hotel/adminOps")
public class AdminOperationsController {
	
	public final AdminOperationsService adminOpsService;
	
	@GetMapping("/getAllUsers")
	public List<SimpleUserInfo> getAllUsers(){
		return adminOpsService.getAllUsers();
	}
	
	@GetMapping("/getUsersByRole")
	public List<SimpleUserInfo> getUsersByRole(@RequestBody @Valid UserRoleForm userRoleForm){
		return adminOpsService.getUsersByRole(userRoleForm);
	}
	
	@GetMapping("/getAllRooms")
	public List<RoomDTO> getAllRooms(){
		return adminOpsService.getAllRooms();
	}
	
	@GetMapping("/getRoomById")
	public RoomDTO getRoomById(@RequestBody @Valid RoomIdForm roomIdForm) {
		return adminOpsService.getRoomById(roomIdForm);
	}
	
	@PostMapping("/addNewRoom")
	public String addNewRoom(@RequestBody @Valid RoomAddForm roomAddForm) {
		return adminOpsService.addNewRoom(roomAddForm);
	}
	
	@PostMapping("/editRoom")
	public String editRoom(@RequestBody @Valid RoomEditForm roomEditForm) {
		return adminOpsService.editRoom(roomEditForm);
	}
	
	@GetMapping("/getAllReservations")
	public List<ReservationDTO> getAllReservations(){
		return adminOpsService.getAllReservations();
	}
	
	@PostMapping("/getAllReservationsByStatus")
	public List<ReservationDTO> getAllReservationsByStatus(@RequestBody @Valid ReservationStatusForm reservationStatusForm){
		return adminOpsService.getAllReservationsByStatus(reservationStatusForm);
	}
	
	@PostMapping("getAllReservationsByType")
	public List<ReservationDTO> getAllReservationsByType(@RequestBody @Valid ReservationTypeForm reservationTypeForm){
		return adminOpsService.getAllReservationsByType(reservationTypeForm);
	}
	
	@PostMapping("/getAllReservationsByUsernameOrEmail")
	public List<ReservationDTO> getAllReservationByUsernameOrEmail(@RequestBody @Valid UsernameOrEmailForm usernameOrEmailForm){
		return adminOpsService.getAllReservationsByUsernameOrEmail(usernameOrEmailForm);
	}
	
	@PostMapping("/getAllReservationsByUsernameOrEmailAndStatus")
	public List<ReservationDTO> getAllReservationByUsernameOrEmailAndStatus(@RequestBody @Valid UsernameOrEmailAndReservationStatusForm usernameOrEmailAndReservationStatusForm){
		return adminOpsService.getAllReservationsByUsernameOrEmailAndStatus(usernameOrEmailAndReservationStatusForm);
	}
	
	@PostMapping("/getAllReservationsByUsernameOrEmailAndType")
	public List<ReservationDTO> getAllReservationByUsernameOrEmailAndType(@RequestBody @Valid UsernameOrEmailAndReservationTypeForm usernameOrEmailFormAndReservationTypeForm){
		return adminOpsService.getAllReservationsByUsernameOrEmailAndType(usernameOrEmailFormAndReservationTypeForm);
	}
	
	@GetMapping("/checkInReservation")
	public String checkIn(@RequestBody @Valid ReservationIdForm reservationIdForm) {
		return adminOpsService.checkIn(reservationIdForm);
	}
	
	@GetMapping("/checkOutReservation")
	public String checkOut(@RequestBody @Valid ReservationIdForm reservationIdForm) {
		return adminOpsService.checkOut(reservationIdForm);
	}
	
	@GetMapping("/cancelReservation")
	public String cancel(@RequestBody @Valid ReservationIdForm reservationIdForm) {
		return adminOpsService.cancel(reservationIdForm);
	}
	
	@GetMapping("/extendStay")
	public String extendStay(@RequestBody @Valid ExtendStayForm extendStayForm) {
		return adminOpsService.extendStay(extendStayForm);
	}
	
	@GetMapping("/editBookedDate")
	public String editBookedDate(@RequestBody @Valid EditBookedDateForm editBookedDateForm) {
		return adminOpsService.editBookedDate(editBookedDateForm);
	}
}
