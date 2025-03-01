package com.hotel.api.exceptionHandling.customExceptions;

public class ReservationStatusErrorException extends RuntimeException{

	private static final long serialVersionUID = -5538726724314812673L;

	public ReservationStatusErrorException(String message) {
		super(message);
	}
}
