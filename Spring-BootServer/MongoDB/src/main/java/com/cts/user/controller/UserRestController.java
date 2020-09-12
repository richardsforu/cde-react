package com.cts.user.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.cts.user.entity.User;
import com.cts.user.entity.UserDao;

@RestController
@CrossOrigin
@RequestMapping("/api/users")
public class UserRestController {

	@Autowired
	private UserDao userDao;

	@GetMapping
	public List<User> listAll() {
		return userDao.findAll();
	}

	@PostMapping
	public User save(@RequestBody User user) {
		return userDao.save(user);
	}

	@GetMapping("/{id}")
	public User getUser(@PathVariable("id") Object id) {
		return userDao.findById(id).orElse(null);
	}

	@PutMapping("/{id}")
	public User update(@PathVariable("id") Object id,@RequestBody User user) {
		user.setId(id);
		return userDao.save(user);
	}

	@DeleteMapping("/{id}")
	public void delete(@PathVariable("id") Object id) {
		userDao.deleteById(id);
	}

}
