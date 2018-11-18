package com.od.demo.dao;

import com.od.demo.pojo.User;
import org.apache.ibatis.annotations.Mapper;
import org.springframework.stereotype.Repository;

@Repository
@Mapper
public interface UserDao {
    void insertUsers(User user);
}
