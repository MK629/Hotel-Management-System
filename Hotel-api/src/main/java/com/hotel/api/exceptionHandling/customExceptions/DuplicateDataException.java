package com.hotel.api.exceptionHandling.customExceptions;

public class DuplicateDataException extends RuntimeException{

	private static final long serialVersionUID = -4804261140178510510L;

	public DuplicateDataException(String message) {
		super(message);
	}
}
