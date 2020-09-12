package com.cts.user.entity;

import org.springframework.data.mongodb.repository.MongoRepository;

public interface UserDao extends MongoRepository<User, Object>{

}
