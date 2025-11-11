/**
 * @jest-environment jsdom
 */

const { authenticate } = require('./auth');

describe('Role-Based Authentication', () => {
  test('should return "user" for valid user credentials', () => {
    expect(authenticate('user1', 'password1')).toBe('user');
  });

  test('should return "admin" for valid admin credentials', () => {
    expect(authenticate('admin', 'adminpassword')).toBe('admin');
  });

  test('should return null for invalid credentials', () => {
    expect(authenticate('wronguser', 'wrongpass')).toBeNull();
  });
});
