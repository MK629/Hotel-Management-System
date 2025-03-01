package com.hotel.api.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.hotel.api.entity.User;

public interface UserRepository extends JpaRepository<User, Long>{

	@Query("select u from User u where u.username = :username")
	User findByUsername(@Param("username") String username);
	
	@Query("select u from User u where u.email = :email")
	User findByEmail(@Param("email") String username);
	
	@Query("select u from User u where u.username = :usernameOrEmail or u.email =:usernameOrEmail")
	User SimpleFindByUsernameOrEmail(@Param("usernameOrEmail") String usernameOrEmail);
	
	@Query("select u from User u where u.username = :usernameOrEmail or u.email = :usernameOrEmail")
	Optional<User> findByUsernameOrEmail(@Param("usernameOrEmail") String usernameOrEmail);
}
