package com.od.demo.service.Impl;

import com.od.demo.dao.UserDao;
import com.od.demo.pojo.User;
import com.od.demo.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
@Service
public class UserServiceImpl implements UserService {

    @Autowired
    private UserDao userDao;

    public void insertUsers(User user){
        userDao.insertUsers(user);};
}

