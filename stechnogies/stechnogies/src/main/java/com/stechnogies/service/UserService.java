package com.stechnogies.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.stechnogies.dao.UserDao;
import com.stechnogies.dto.User;

@Service
public class UserService {
	
	@Autowired
	UserDao userDao;
	
	public User save(User user) {
		return userDao.saveUser(user);
	}
	public User loginEmail(String email,String password) {
		return userDao.loginEmail(email, password);
	}
	
}
