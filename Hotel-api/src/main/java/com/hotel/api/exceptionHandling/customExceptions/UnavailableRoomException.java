package com.hotel.api.exceptionHandling.customExceptions;

public class UnavailableRoomException extends RuntimeException{

	private static final long serialVersionUID = -8549348592582375776L;

	public UnavailableRoomException(String message) {
		super(message);
	}

	
}
