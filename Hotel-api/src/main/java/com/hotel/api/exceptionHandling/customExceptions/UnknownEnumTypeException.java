package com.hotel.api.exceptionHandling.customExceptions;

public class UnknownEnumTypeException extends RuntimeException{

	private static final long serialVersionUID = -4423420692588187900L;

	public UnknownEnumTypeException(String message) {
		super(message);
	}
}
