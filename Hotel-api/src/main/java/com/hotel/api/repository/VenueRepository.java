package com.hotel.api.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.hotel.api.entity.Venue;

public interface VenueRepository extends JpaRepository<Venue, Long>{

}
