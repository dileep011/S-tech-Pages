package com.stechnogies.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.stechnogies.dto.Login;
import com.stechnogies.dto.User;
import com.stechnogies.service.UserService;

@RestController
public class UserController {
	
	@Autowired
	UserService userService;
	
	@PostMapping("/user")
	public User saveUser(@RequestBody User user) {
		return userService.save(user);
	}
	@PostMapping("user/login")
	public User login(@RequestBody Login login) {
		return userService.loginEmail(login.getEmail(), login.getPassword());
	}
}
