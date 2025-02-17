import { toastify } from './toastify/toastify';

export const validateEmail = (email: string) => {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
};

export const signInValidtions = (
  email: string,
  password: string,
): boolean => {

  if (!Boolean(email)) {
    toastify("Please enter your email.", 'warn', 2000);
    return false;
  }
  if (!Boolean(validateEmail(email))) {
    toastify("Please enter a valid email.", 'warn', 2000);
    return false;
  }
  if (!Boolean(password)) {
    toastify("Please Enter Password", 'warn', 2000);
    return false;
  }
  if (password.length < 8) {
    toastify("The Password  MinLength is 8", 'warn', 2000);
    return false;
  }
  return true;
};
export const signUpValidtions = (
  name: string,
  email: string,
  password: string,
  checked: boolean
): boolean => {

  if (!Boolean(name)) {
    toastify("Please enter your full name.", 'warn', 2000);
    return false;
  }
  if (!Boolean(email)) {
    toastify("Please enter your email.", 'warn', 2000);
    return false;
  }
  if (!Boolean(validateEmail(email))) {
    toastify("Please enter a valid email.", 'warn', 2000);
    return false;
  }
  if (!Boolean(password)) {
    toastify("Please enter the password.", 'warn', 2000);
    return false;
  }
  if (password.length < 9) {
    toastify("The Password  MinLength is 8", 'warn', 2000);
    return false;
  }
  if (!Boolean(checked)) {
    toastify("You must agree to all terms, privacy policies, and fees.", 'warn', 2000);
    return false;
  }

  return true;
};
