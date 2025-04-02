package com.hotel.api.controller;

import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

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
import com.hotel.api.service.AdminOperationsService;

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
	
	@PostMapping("/getUsersByRole")
	public List<SimpleUserInfo> getUsersByRole(@RequestBody @Valid UserRoleForm userRoleForm){
		return adminOpsService.getUsersByRole(userRoleForm);
	}
	
	@PostMapping("/getRoomsByType")
	public List<RoomDTO> getRoomsByType(@RequestBody @Valid RoomTypeForm roomTypeForm){
		return adminOpsService.getRoomsByType(roomTypeForm);
	}
	
	@GetMapping("/getAllRooms")
	public List<RoomDTO> getAllRooms(){
		return adminOpsService.getAllRooms();
	}
	
	@PostMapping("/getRoomById")
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
	
	@PostMapping("/checkInReservation")
	public String checkIn(@RequestBody @Valid ReservationIdForm reservationIdForm) {
		return adminOpsService.checkIn(reservationIdForm);
	}
	
	@PostMapping("/checkOutReservation")
	public String checkOut(@RequestBody @Valid ReservationIdForm reservationIdForm) {
		return adminOpsService.checkOut(reservationIdForm);
	}
	
	@PostMapping("/cancelReservation")
	public String cancel(@RequestBody @Valid ReservationIdForm reservationIdForm) {
		return adminOpsService.cancel(reservationIdForm);
	}
	
	@PostMapping("/extendStay")
	public String extendStay(@RequestBody @Valid ExtendStayForm extendStayForm) {
		return adminOpsService.extendStay(extendStayForm);
	}
	
	@PostMapping("/editBookedDate")
	public String editBookedDate(@RequestBody @Valid EditBookedDateForm editBookedDateForm) {
		return adminOpsService.editBookedDate(editBookedDateForm);
	}
}
