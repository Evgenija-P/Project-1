"use strict";
// Create interfaces User and Admin
// Keys for User: login, email, password, isOnline, lastVisited
// Keys for Admin: login, email, password, isOnline, lastVisited, role
const user1 = {
    login: "eva",
    email: "eva@mail.com",
    password: "123145",
    isOnline: false,
    lastVisited: new Date(2022, 10, 25),
};
const admin1 = {
    login: "geri",
    email: "geri@mail.com",
    password: "123145geri",
    isOnline: false,
    lastVisited: new Date(2022, 10, 25),
    role: "admin",
};
function login(user) {
    if (user.login.length > 0 && user.password.length > 0) {
        console.log("Hello!", user.login, "your login", user.password);
    }
}
login(user1);
login(admin1);
