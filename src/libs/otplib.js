// This file simulates the `otplib` library.

/**
 * Generates a random 4-digit OTP (One-Time Password).
 * @returns {string} The generated OTP.
 */
const generate = () => {
  return Math.floor(Math.random() * 10000)
    .toString()
    .padStart(4, '0');
};

// ...

export { generate };
