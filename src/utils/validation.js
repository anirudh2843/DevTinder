const validator = require("validator");

const validateSignUpData = (req) => {
  const { firstName, lastName, emailId, password } = req.body;
  if (!firstName || !lastName) {
    throw new Error("Name is not valid");
  } else if (firstName.length < 4 || firstName.length > 50) {
    throw new Error("firstName length in 5-50");
  } else if (!validator.isEmail(emailId)) {
    throw new Error("Email is not valid");
  }
  if (
    !validator.isStrongPassword(password, {
      minLength: 8,
      minLowercase: 1,
      minUppercase: 1,
      minNumbers: 1,
      minSymbols: 1,
    })
  ) {
    throw new Error("Please enter a strong password (min 8 characters, 1 uppercase, 1 lowercase, 1 number, 1 symbol)");
  }
};

module.exports = { validateSignUpData };
