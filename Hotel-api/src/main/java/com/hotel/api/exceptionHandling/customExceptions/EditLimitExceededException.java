package com.hotel.api.exceptionHandling.customExceptions;

public class EditLimitExceededException extends RuntimeException{

	private static final long serialVersionUID = 7176227628414080016L;

	public EditLimitExceededException(String message) {
		super(message);
	}
}
