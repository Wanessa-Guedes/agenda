function createUser() {
  const userInfo = {
    email: "teste@teste.com",
    userName: "Testeh",
    password: "teste",
    confirmPassword: "teste",
  };
  return userInfo;
}

export const authFactory = {
  createUser,
};
