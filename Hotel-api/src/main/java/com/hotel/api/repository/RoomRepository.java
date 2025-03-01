package com.hotel.api.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.hotel.api.entity.Room;
import com.hotel.api.entity.enums.RoomType;

public interface RoomRepository extends JpaRepository<Room, Long>{

	@Query("select r from Room r where r.id = :id")
	Room getRoomById(@Param("id") Long id);
	
	@Query("select r from Room r where r.number = :number")
	Room getRoomByNumber(@Param("number") String number);
	
	@Query("select r from Room r where r.type = :type")
	List<Room> getRoomsByType(@Param("type") RoomType type); 
}
