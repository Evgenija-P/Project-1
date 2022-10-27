// Create interfaces User and Admin
// Keys for User: login, email, password, isOnline, lastVisited
// Keys for Admin: login, email, password, isOnline, lastVisited, role

// Create a function login with param user (with keys login and password)
// Check if login and password are not empty and then greet user

interface User {
  login: string;
  email: string;
  password: string;
  isOnline: boolean;
  lastVisited: Date;
}

interface Admin {
  login: string;
  email: string;
  password: string;
  isOnline: boolean;
  lastVisited: Date;
  role: string;
}

const user1: User = {
  login: "eva",
  email: "eva@mail.com",
  password: "123145",
  isOnline: false,
  lastVisited: new Date(2022, 10, 25),
};

const admin1: Admin = {
  login: "geri",
  email: "geri@mail.com",
  password: "123145geri",
  isOnline: false,
  lastVisited: new Date(2022, 10, 25),
  role: "admin",
};

function login(user: { login: string; password: string }): void {
  if (user.login.length > 0 && user.password.length > 0) {
    console.log("Hello!", user.login, "your login", user.password);
  }
}

login(user1);
login(admin1);
