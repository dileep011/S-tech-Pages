package com.stechnogies.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.web.bind.annotation.RequestParam;

import com.stechnogies.dto.User;

public interface UserRepository extends JpaRepository<User, Integer> {
	
	@Query("select a from User a where email=:email and password=:password")
	public User loginEmail(@RequestParam String email, @RequestParam String password);
	
}
