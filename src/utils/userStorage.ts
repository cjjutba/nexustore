import { v4 as uuidv4 } from 'uuid';
import {
  safeLocalStorage,
  validateEmail,
  validatePassword,
  validateRequired,
  createError,
  ErrorType,
  ERROR_MESSAGES,
  logError
} from './errorHandling';

export interface User {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  phone: string;
  password: string; // Encoded password
  dateCreated: string;
  lastLogin: string;
}

export interface UserRegistrationData {
  email: string;
  firstName: string;
  lastName: string;
  phone: string;
  password: string;
}

export interface UserLoginData {
  email: string;
  password: string;
}

// Storage keys
const USERS_STORAGE_KEY = 'nexustore-users';
const CURRENT_USER_STORAGE_KEY = 'nexustore-current-user';
const AUTH_TOKEN_STORAGE_KEY = 'nexustore-auth-token';

// Simple password encoding (not real encryption - frontend only)
const encodePassword = (password: string): string => {
  return btoa(password + 'nexustore-salt');
};

const verifyPassword = (password: string, encodedPassword: string): boolean => {
  return encodePassword(password) === encodedPassword;
};

// Generate a simple auth token
const generateAuthToken = (userId: string): string => {
  const timestamp = Date.now();
  return btoa(`${userId}:${timestamp}:nexustore-token`);
};

// Get all users from localStorage
export const getAllUsers = (): User[] => {
  const users = safeLocalStorage.getItem(USERS_STORAGE_KEY);
  if (!users) return [];

  try {
    return JSON.parse(users);
  } catch (error) {
    logError(createError(ErrorType.STORAGE, 'Failed to parse users data'));
    return [];
  }
};

// Save users to localStorage
const saveUsers = (users: User[]): boolean => {
  try {
    const success = safeLocalStorage.setItem(USERS_STORAGE_KEY, JSON.stringify(users));
    if (!success) {
      logError(createError(ErrorType.STORAGE, 'Failed to save users to storage'));
    }
    return success;
  } catch (error) {
    logError(createError(ErrorType.STORAGE, 'Failed to serialize users data'));
    return false;
  }
};

// Check if email already exists
export const emailExists = (email: string): boolean => {
  const users = getAllUsers();
  return users.some(user => user.email.toLowerCase() === email.toLowerCase());
};

// Register a new user
export const registerUser = (userData: UserRegistrationData): { success: boolean; user?: User; error?: string } => {
  try {
    // Validate input data
    const emailValidation = validateRequired(userData.email, 'Email');
    if (!emailValidation.isValid) {
      return { success: false, error: emailValidation.message };
    }

    if (!validateEmail(userData.email)) {
      return { success: false, error: ERROR_MESSAGES.INVALID_EMAIL };
    }

    const firstNameValidation = validateRequired(userData.firstName, 'First name');
    if (!firstNameValidation.isValid) {
      return { success: false, error: firstNameValidation.message };
    }

    const lastNameValidation = validateRequired(userData.lastName, 'Last name');
    if (!lastNameValidation.isValid) {
      return { success: false, error: lastNameValidation.message };
    }

    const passwordValidation = validatePassword(userData.password);
    if (!passwordValidation.isValid) {
      return { success: false, error: passwordValidation.message };
    }

    // Check if email already exists
    if (emailExists(userData.email)) {
      return { success: false, error: ERROR_MESSAGES.EMAIL_EXISTS };
    }

    // Create new user
    const newUser: User = {
      id: uuidv4(),
      email: userData.email.toLowerCase(),
      firstName: userData.firstName.trim(),
      lastName: userData.lastName.trim(),
      phone: userData.phone.trim(),
      password: encodePassword(userData.password),
      dateCreated: new Date().toISOString(),
      lastLogin: new Date().toISOString()
    };

    // Save to storage
    const users = getAllUsers();
    users.push(newUser);
    const saveSuccess = saveUsers(users);

    if (!saveSuccess) {
      return { success: false, error: ERROR_MESSAGES.STORAGE_ERROR };
    }

    // Return user without password
    const { password, ...userWithoutPassword } = newUser;
    return { success: true, user: userWithoutPassword as User };
  } catch (error) {
    logError(createError(ErrorType.UNKNOWN, 'Registration failed', error instanceof Error ? error.message : 'Unknown error'));
    return { success: false, error: ERROR_MESSAGES.OPERATION_FAILED };
  }
};

// Login user
export const loginUser = (loginData: UserLoginData): { success: boolean; user?: User; error?: string } => {
  try {
    const users = getAllUsers();
    const user = users.find(u => u.email.toLowerCase() === loginData.email.toLowerCase());

    if (!user) {
      return { success: false, error: 'Invalid email or password' };
    }

    if (!verifyPassword(loginData.password, user.password)) {
      return { success: false, error: 'Invalid email or password' };
    }

    // Update last login
    user.lastLogin = new Date().toISOString();
    const userIndex = users.findIndex(u => u.id === user.id);
    users[userIndex] = user;
    saveUsers(users);

    // Return user without password
    const { password, ...userWithoutPassword } = user;
    return { success: true, user: userWithoutPassword as User };
  } catch (error) {
    console.error('Error logging in user:', error);
    return { success: false, error: 'Login failed' };
  }
};

// Save current user session
export const saveCurrentUser = (user: User): void => {
  try {
    const { password, ...userWithoutPassword } = user;
    localStorage.setItem(CURRENT_USER_STORAGE_KEY, JSON.stringify(userWithoutPassword));
    localStorage.setItem(AUTH_TOKEN_STORAGE_KEY, generateAuthToken(user.id));
  } catch (error) {
    console.error('Error saving current user:', error);
  }
};

// Get current user session
export const getCurrentUser = (): User | null => {
  try {
    const user = localStorage.getItem(CURRENT_USER_STORAGE_KEY);
    const token = localStorage.getItem(AUTH_TOKEN_STORAGE_KEY);
    
    if (!user || !token) {
      return null;
    }

    return JSON.parse(user);
  } catch (error) {
    console.error('Error getting current user:', error);
    return null;
  }
};

// Clear current user session
export const clearCurrentUser = (): void => {
  try {
    localStorage.removeItem(CURRENT_USER_STORAGE_KEY);
    localStorage.removeItem(AUTH_TOKEN_STORAGE_KEY);
  } catch (error) {
    console.error('Error clearing current user:', error);
  }
};

// Update user profile
export const updateUserProfile = (userId: string, updates: Partial<UserRegistrationData>): { success: boolean; user?: User; error?: string } => {
  try {
    const users = getAllUsers();
    const userIndex = users.findIndex(u => u.id === userId);

    if (userIndex === -1) {
      return { success: false, error: 'User not found' };
    }

    // Check if email is being updated and already exists
    if (updates.email && updates.email !== users[userIndex].email && emailExists(updates.email)) {
      return { success: false, error: 'Email already exists' };
    }

    // Update user data
    const updatedUser = {
      ...users[userIndex],
      ...updates,
      email: updates.email ? updates.email.toLowerCase() : users[userIndex].email,
      password: updates.password ? encodePassword(updates.password) : users[userIndex].password
    };

    users[userIndex] = updatedUser;
    saveUsers(users);

    // Update current user session if it's the same user
    const currentUser = getCurrentUser();
    if (currentUser && currentUser.id === userId) {
      saveCurrentUser(updatedUser);
    }

    // Return user without password
    const { password, ...userWithoutPassword } = updatedUser;
    return { success: true, user: userWithoutPassword as User };
  } catch (error) {
    console.error('Error updating user profile:', error);
    return { success: false, error: 'Update failed' };
  }
};

// Validate auth token
export const isValidAuthToken = (): boolean => {
  try {
    const token = localStorage.getItem(AUTH_TOKEN_STORAGE_KEY);
    const user = localStorage.getItem(CURRENT_USER_STORAGE_KEY);
    
    if (!token || !user) {
      return false;
    }

    // Simple token validation (in real app, check expiry, etc.)
    const decodedToken = atob(token);
    return decodedToken.includes('nexustore-token');
  } catch (error) {
    console.error('Error validating auth token:', error);
    return false;
  }
};
