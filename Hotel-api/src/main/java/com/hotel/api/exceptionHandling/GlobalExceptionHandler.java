package com.hotel.api.exceptionHandling;

import org.springframework.http.ResponseEntity;
import org.springframework.http.converter.HttpMessageNotReadableException;
import org.springframework.security.core.AuthenticationException;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

import com.hotel.api.exceptionHandling.customExceptions.DuplicateDataException;
import com.hotel.api.exceptionHandling.customExceptions.EditLimitExceededException;
import com.hotel.api.exceptionHandling.customExceptions.InvalidDateException;
import com.hotel.api.exceptionHandling.customExceptions.ReservationNotFoundException;
import com.hotel.api.exceptionHandling.customExceptions.ReservationStatusErrorException;
import com.hotel.api.exceptionHandling.customExceptions.UnavailableRoomException;
import com.hotel.api.exceptionHandling.customExceptions.UnknownEnumTypeException;
import com.hotel.api.exceptionHandling.customExceptions.UserNotFoundException;

@RestControllerAdvice
public class GlobalExceptionHandler {
	
	@ExceptionHandler(UnknownEnumTypeException.class)
	ResponseEntity<String> handleUnknownErrors(UnknownEnumTypeException e){
		return ResponseEntity.status(400).body(e.getMessage());
	}
	
	@ExceptionHandler(MethodArgumentNotValidException.class)
	ResponseEntity<String> handleConstraintErrors(MethodArgumentNotValidException e){
		return ResponseEntity.status(400).body(e.getBindingResult().getFieldError().getDefaultMessage());
	}
	
	@ExceptionHandler(ReservationStatusErrorException.class)
	ResponseEntity<String> handleReservationStatusErrors(ReservationStatusErrorException e){
		return ResponseEntity.status(400).body(e.getMessage());
	}
	
	@ExceptionHandler(InvalidDateException.class)
	ResponseEntity<String> handleDateInputErrors(InvalidDateException e){
		return ResponseEntity.status(400).body(e.getMessage());
	}
	
	@ExceptionHandler(EditLimitExceededException.class)
	ResponseEntity<String> handleExceedingEditLimits(EditLimitExceededException e){
		return ResponseEntity.status(400).body(e.getMessage());
	}
	
	@ExceptionHandler(DuplicateDataException.class)
	ResponseEntity<String> handleDuplicateIdentitiesErrorInDBLevel(DuplicateDataException e){
		return ResponseEntity.status(400).body(e.getMessage());
	}
	
	@ExceptionHandler(HttpMessageNotReadableException.class)
	ResponseEntity<String> handleUnreadableHttpMessageError(HttpMessageNotReadableException e){
		return ResponseEntity.status(400).body(e.getMessage());
	}
	
	@ExceptionHandler(AuthenticationException.class)
	ResponseEntity<String> handleAuthenticationErrors(AuthenticationException e){
		return ResponseEntity.status(401).body(e.getMessage());
	}
	
	@ExceptionHandler(UnavailableRoomException.class)
	ResponseEntity<String> handleFindRoomErrors(UnavailableRoomException e){
		return ResponseEntity.status(404).body(e.getMessage());
	}
	
	@ExceptionHandler(ReservationNotFoundException.class)
	ResponseEntity<String> handleReservationNotFoundErrors(ReservationNotFoundException e){
		return ResponseEntity.status(404).body(e.getMessage());
	}
	
	@ExceptionHandler(UserNotFoundException.class)
	ResponseEntity<String> handleUserNotFoundErrors(UserNotFoundException e){
		return ResponseEntity.status(404).body(e.getMessage());
	}
}


