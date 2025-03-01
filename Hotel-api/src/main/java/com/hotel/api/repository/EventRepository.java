package com.hotel.api.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.hotel.api.entity.Event;

public interface EventRepository extends JpaRepository<Event, Long>{

}
