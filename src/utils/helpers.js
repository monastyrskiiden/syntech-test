const isValidEmail = value =>
  value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
    ? false
    : true;

const validateAge = (day, month, year) => {
  const date_of_birth_ms = new Date(year, month - 1, day).getTime();
  const diff_ms = Date.now() - date_of_birth_ms;
  const age = Math.abs(new Date(diff_ms).getFullYear() - 1970);
  return age;
};

export const maxLength = length => value =>
  value && value.length > length ? value.slice(1, length + 1) : value;

export const normalizeDate = value => {
  // Trying to convert stringValue to a number
  let parsedValue = Number(value);

  // If converting failed prevents input change
  if (Number.isNaN(parsedValue)) return;

  return parsedValue;
};

export const toUnixTimestamp = (year, month, day) => {
  const unixTimestamp = Math.floor(Date.UTC(year, month - 1, day) / 1000);
  return unixTimestamp;
};

export const toDateString = value =>
  value && value < 10 ? String(value).padStart(2, '0') : String(value).slice(0);

export function validate(values) {
  let errors = {};

  // Email validation
  if (!values.email) {
    errors.email = 'Email is required';
  } else if (!isValidEmail(values.email)) {
    errors.email = 'Email is invalid';
  }

  // Password validation
  if (!values.password) {
    errors.password = 'Password is required';
  } else if (values.password.length < 6) {
    errors.password = 'Password should be at least 6 chars';
  }

  // Confirm password validation
  if (!values.confirm_password) {
    errors.confirm_password = 'Confirm password is required';
  } else if (values.password !== values.confirm_password) {
    errors.confirm_password = 'Confirm password is incorrect';
  }

  // Day validation
  if (!values.day) {
    errors.day = 'Day is required';
  } else if (values.day > 31 || values.day < 1) {
    errors.day = 'Day should be from 1 to 31';
  }

  // Month validation
  if (!values.month) {
    errors.month = 'Month is required';
  } else if (values.month > 12 || values.month < 1) {
    errors.month = 'Month should be from 1 to 12';
  }

  // Year validation
  if (!values.year) {
    errors.year = 'Year is required';
  }
  if (values.year >= new Date().getFullYear()) {
    errors.year = 'Who are You trying to fool? :)';
  } else if (validateAge(values.day, values.month, values.year) < 18) {
    errors.year = 'You are too young';
  }

  return errors;
}
