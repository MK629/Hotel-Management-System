package com.hotel.api.entity;

import com.hotel.api.entity.enums.RoomType;

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
public class Room {
	
	@Id
	@Column(nullable = false)
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	
	@Column(nullable = false, unique = true)
	private String number;
	
	@Enumerated(EnumType.STRING)
	@Column(nullable = false)
	private RoomType type;
	
	@Column(nullable = false)
	private Integer beds;
	
	@Column(nullable = false)
	private Double price;
	
	@Column(nullable = false, columnDefinition = "TINYINT(1)")
	private Boolean reserved;
	
	@Column(nullable = false)
	private String image;

	public Room(String number ,RoomType type, String image) {
		this.number = number;
		this.type = type;
		this.beds = resolveBedCount(type);
		this.price = resolvePrice(type);
		this.reserved = false;
		this.image = image;
	}
	
	private Double resolvePrice(RoomType type) {
		switch(type) {
		case Standard: return 50.00;
		case Double: return 70.00;
		case Twin: return 70.00;
		case Family: return 90.00;
		case Queen: return 120.00;
		case King: return 140.00;
		case Suite: return 200.00;
		case Penthouse: return 250.00;
		case Villa: return 400.00;
		default: return 0.00;		
		}
	}
	
	private Integer resolveBedCount(RoomType type) {
		if(type == RoomType.Standard || type == RoomType.Double || type == RoomType.Queen ||
				type == RoomType.King) {
			return 1;
		}
		else if(type == RoomType.Twin || type == RoomType.Suite) {
			return 2;
		}
		else if(type == RoomType.Family || type == RoomType.Penthouse) {
			return 3;
		}
		else if(type == RoomType.Villa) {
			return 4;
		}
		else {
			return 0;
		}
	}
	
	
	
}
