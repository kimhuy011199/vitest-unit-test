import { vi, describe, it, expect } from 'vitest';
import { generateOtp } from '../mock-lib';
import { generate } from '../libs/otplib';

vi.mock('../libs/otplib');

describe('test suite', () => {
  it('test case', () => {
    // Create a mock for the following function
    const sendMessage = vi.fn();
    sendMessage.mockReturnValue('sent');
    // sendMessage.mockImplementation(() => 'sent');

    // Call the mock function
    const result = sendMessage('hello', 'name@domain.com');

    // Assert the mock function was called with the correct arguments
    expect(sendMessage).toHaveBeenCalledWith('hello', 'name@domain.com');
    expect(sendMessage.mock.calls[0][0]).toEqual('hello');
    expect(sendMessage.mock.calls[0][1]).toEqual('name@domain.com');

    // Assert the mock function was called only once
    expect(sendMessage).toHaveBeenCalledOnce();
    expect(sendMessage).toHaveBeenCalledTimes(1);
    expect(sendMessage.mock.calls.length).toBe(1);

    // Assert the mock function was returned the correct value
    expect(result).toBe('sent');
    expect(sendMessage.mock.results[0].value).toEqual('sent');
  });
});

describe('generateOtp', () => {
  it('should return otp', () => {
    vi.mocked(generate).mockReturnValue('1234');

    const otp = generateOtp();

    expect(generate).toHaveBeenCalled();
    expect(otp).toBe('1234');
  });

  it('should otp generated fail', () => {
    vi.mocked(generate).mockReturnValue(null);

    const otp = generateOtp();

    expect(generate).toHaveBeenCalled();
    expect(otp).toMatch(/failed./i);
  });
});

// describe('otplib', () => {
//   it('should generate otp', () => {
//     const spy = vi.spyOn(global, 'generate');

//     const otp = generateOtp();

//     const generatedOtp = spy.mock.results[0].value;

//     expect(otp).toBe(generatedOtp);
//   });
// });
