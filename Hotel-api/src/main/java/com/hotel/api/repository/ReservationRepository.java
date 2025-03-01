package com.hotel.api.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.hotel.api.entity.Reservation;
import com.hotel.api.entity.enums.ReservationStatus;
import com.hotel.api.entity.enums.ReservationType;

public interface ReservationRepository extends JpaRepository<Reservation, Long>{

	@Query("select r from Reservation r where r.id = :id")
	Optional<Reservation> findById(@Param("id")Long id);
	
	@Query("select r from Reservation r where r.reservationStatus = :reservationStatus")
	List<Reservation> findAllByStatus(@Param("reservationStatus") ReservationStatus reservationStatus);	
	
	@Query("select r from Reservation r where r.reservationType = :reservationType")
	List<Reservation> findAllByType(@Param("reservationType") ReservationType reservationType);
}
