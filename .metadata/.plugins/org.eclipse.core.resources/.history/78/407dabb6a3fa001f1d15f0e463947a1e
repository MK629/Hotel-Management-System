package com.hotel.api.dto.Input;

import java.time.LocalDate;
import com.hotel.api.entity.enums.RoomType;
import jakarta.validation.constraints.Future;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotEmpty;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Pattern;
import jakarta.validation.constraints.Positive;
import jakarta.validation.constraints.Size;

public record StandardReservationForm(
		@NotBlank(message = "username is blank.")
		@NotEmpty(message = "username is empty.")
		String usernameOrEmail,
		@NotNull(message = "booking date is null.")
		@Future(message = "booking date must be in the future.")
		LocalDate bookedDate,
		@NotNull(message = "nights can't be null!")
		@Positive(message = "nights can't be negative.")
		Integer nights,
		@NotBlank(message = "contact number is blank.")
		@NotEmpty(message = "contact number is empty.")
		@Size(min=7, message = "contact number must have at least 7 numbers.")
		@Pattern(regexp = "^[0-9]+$", message = "contact number must contain only digits.")
		String contactNumber,
		@NotNull(message = "Room type is null.")
		RoomType roomType
		) {}
