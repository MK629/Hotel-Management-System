package com.hotel.api.entity;

import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Objects;
import java.util.Set;

import com.hotel.api.entity.enums.UserRank;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToMany;
import jakarta.persistence.OneToMany;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Getter
@Setter
@NoArgsConstructor
public class User{
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(nullable = false)
	private Long id;

	@Column(nullable = false, unique = true)
	private String username;
	
	@Column(nullable = false, unique = true)
	private String email;
	
	@Column(nullable = false)
	private String password;
	
	@ManyToMany(fetch = FetchType.EAGER)
	private Set<Role> roles = new HashSet<Role>();

	@Column(nullable = false)
	@Enumerated(EnumType.STRING)
	private UserRank rank;
	
	@OneToMany(cascade = CascadeType.PERSIST, mappedBy = "user")
	private List<Reservation> reservations = new ArrayList<>();

	public User(String username, String email, String password) {
		this.username = username;
		this.email = email;
		this.password = password;
		this.rank = determineUserRank(this.reservations);
	}
	
	public void addRole(Role role) {
		role.addUser(this);
		this.roles.add(role);
	}
	
	public void recordReservation(Reservation reservation) {
		this.reservations.add(reservation);
		this.rank = determineUserRank(this.reservations);
	}
	
	private UserRank determineUserRank(List<Reservation> reservations) {
		if(reservations.size() >= 20) {
			return UserRank.Platinum;
		}
		else if(reservations.size() >= 10) {
			return UserRank.Gold;
		}
		else if(reservations.size() >= 5) {
			return UserRank.Silver;
		}
		else {
			return UserRank.Bronze;
		}
	}

	@Override
	public int hashCode() {
		return Objects.hash(email, id, username);
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		User other = (User) obj;
		return Objects.equals(email, other.email) && Objects.equals(id, other.id)
				&& Objects.equals(username, other.username);
	}
}




