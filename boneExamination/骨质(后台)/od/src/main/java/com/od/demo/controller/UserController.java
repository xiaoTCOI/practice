package com.od.demo.controller;

import com.od.demo.pojo.User;
import com.od.demo.service.Impl.UserServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
public class UserController {

    /*
    注册

     */
    @Autowired
    private UserServiceImpl userServiceImpl;

    @RequestMapping(value = "/1",method = RequestMethod.POST)
    //从前端得到的所有数据写入
    public void insertUsers(@ModelAttribute("user") User user){

    }

}
