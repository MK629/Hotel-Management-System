package com.hotel.api.exceptionHandling.customExceptions;

public class ReservationNotFoundException extends RuntimeException{

	private static final long serialVersionUID = -6486158548109036958L;

	public ReservationNotFoundException(String message) {
		super(message);
	}
}
