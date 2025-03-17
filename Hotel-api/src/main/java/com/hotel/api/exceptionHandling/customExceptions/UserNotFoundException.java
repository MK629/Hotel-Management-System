package com.hotel.api.exceptionHandling.customExceptions;

public class UserNotFoundException extends RuntimeException{

	private static final long serialVersionUID = 366729978099931471L;

	public UserNotFoundException(String message) {
		super(message);
		// TODO Auto-generated constructor stub
	}
}
