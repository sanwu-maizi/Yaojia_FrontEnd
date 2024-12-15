export const getUserName = () => {
  return localStorage.getItem("user_name");
}

export const getUserEmail = () => {
  return localStorage.getItem("user_email")
}

export const getUserPermission = () => {
  return localStorage.getItem("role")
}

export const setUserName = (userName: string) => {
  localStorage.setItem("user_name", userName);
}

export const setUserEmail = (userEmail: string) => {
  localStorage.setItem("user_email", userEmail);
}

export const setUserPermission = (role: string) => {
  localStorage.setItem("role", role);
}

export const getToken = () => {
  return localStorage.getItem("token");
}

export const setToken = (token: string) => {
  localStorage.setItem("token", token);
}


export const getStore = () => {
  return {
    user_name: getUserName(),
    user_email: getUserEmail(),
    token: getToken(),
    role: getUserPermission()
  }
}

export const setUserStore = (user: { userName: string; userEmail: string; permission: string; token: string }) => {
  setUserName(user.userName);
  setUserEmail(user.userEmail);
  setUserPermission(user.permission);
  setToken(user.token)
};

