package com.hotel.api.exceptionHandling.customExceptions;

import javax.security.sasl.AuthenticationException;

public class IncorrectAuthoritiesException extends AuthenticationException{

	private static final long serialVersionUID = 1L;

	public IncorrectAuthoritiesException(String msg) {
		super(msg);
	}
}
