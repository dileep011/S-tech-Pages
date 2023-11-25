package com.stechnogies.dao;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.stechnogies.dto.User;
import com.stechnogies.repository.UserRepository;

@Repository
public class UserDao {
	
	@Autowired
	UserRepository repository;
	
	public User saveUser(User user) {
		return repository.save(user);
	}
	
	public User loginEmail(String email,String password) {
		return repository.loginEmail(email, password);
		
	}
	

}
