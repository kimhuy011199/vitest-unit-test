import { generate } from './libs/otplib';

export const generateOtp = () => {
  const otp = generate();
  if (!otp) {
    return 'Generate OTP failed.';
  }
  return otp;
};
