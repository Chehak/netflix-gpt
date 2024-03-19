export const ValidateForm = (email, password) => {
  const emailisValid = /\b[\w\.-]+@[\w\.-]+\.\w{2,4}\b/.test(email);
  const passwordisValid =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);

  if (!emailisValid) return "Email is not valid";
  if (!passwordisValid) return "Password is not valid";

  return null;
};
