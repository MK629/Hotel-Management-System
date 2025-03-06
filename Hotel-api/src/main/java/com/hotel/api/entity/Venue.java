package com.hotel.api.entity;

import com.hotel.api.entity.enums.VenueType;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Entity
@Getter
@Setter
@NoArgsConstructor
@ToString
public class Venue {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(nullable = false)
	private Long id;
	
	@Column(nullable = false)
	private String name;
	
	@Column(nullable = false)
	@Enumerated(EnumType.STRING)
	private VenueType type;
	
	@Column(nullable = false)
	private Double price;
	
	@Column(nullable = false, columnDefinition = "TINYINT(1)")
	private Boolean reserved;
	
	@Column(nullable = false)
	private String image;

	public Venue(String name, VenueType type, Double price, String image) {
		super();
		this.name = name;
		this.type = type;
		this.price = price;
		this.reserved = false;
		this.image = image;
	}
}
