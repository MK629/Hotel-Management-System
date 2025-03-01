package com.hotel.api.exceptionHandling.customExceptions;

public class InvalidDateException extends RuntimeException{

	private static final long serialVersionUID = -8114908537240830690L;

	public InvalidDateException(String message) {
		super(message);
	}
}
