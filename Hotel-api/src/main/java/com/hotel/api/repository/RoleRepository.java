package com.hotel.api.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.hotel.api.entity.Role;
import com.hotel.api.entity.User;

public interface RoleRepository extends JpaRepository<Role, Long>{
	@Query("select r from Role r where r.roleName = :roleName")
	Role findRoleByName(@Param("roleName") String roleName);
	
	@Query("select r.users from Role r where r.roleName = :roleName")
	List<User> findUsersByRole(@Param("roleName") String roleName);
}
