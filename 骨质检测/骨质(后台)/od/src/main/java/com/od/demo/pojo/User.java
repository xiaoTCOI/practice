package com.od.demo.pojo;

public class User {
    private String userName;//用户名
    private String password;//密码
    private String assurePassword;//确认密码
    private String userId;//身份证号码
    private int gender;//性别
    private String email;//邮箱
    private String teleNumber;//电话号码
    private int identity;//普通用户1，医生0
    private int birthday;//出生日期

    public User() {
    }

    public User(String userName, String password, String assurePassword, String userId, int gender, String email, String teleNumber, int identity, int birthday) {
        this.userName = userName;
        this.password = password;
        this.assurePassword = assurePassword;
        this.userId = userId;
        this.gender = gender;
        this.email = email;
        this.teleNumber = teleNumber;
        this.identity = identity;
        this.birthday = birthday;
    }

    public String getUserName() {
        return userName;
    }

    public void setUserName(String userName) {
        this.userName = userName;
    }

    public int getIdentity() {
        return identity;
    }

    public void setIdentity(int identity) {
        this.identity = identity;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getAssurePassword() {
        return assurePassword;
    }

    public void setAssurePassword(String assurePassword) {
        this.assurePassword = assurePassword;
    }

    public String getUserId() {
        return userId;
    }

    public void setUserId(String userId) {
        this.userId = userId;
    }

    public int getGender() {
        return gender;
    }

    public void setGender(int gender) {
        this.gender = gender;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getTeleNumber() {
        return teleNumber;
    }

    public void setTeleNumber(String teleNumber) {
        this.teleNumber = teleNumber;
    }


    public int getBirthday() {
        return birthday;
    }

    public void setBirthday(int birthday) {
        this.birthday = birthday;
    }
}
