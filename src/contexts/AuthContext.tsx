import React, { createContext, useContext, useReducer, useEffect, ReactNode } from 'react';
import {
  User,
  UserRegistrationData,
  UserLoginData,
  registerUser,
  loginUser,
  getCurrentUser,
  saveCurrentUser,
  clearCurrentUser,
  updateUserProfile,
  isValidAuthToken
} from '@/utils/userStorage';

interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  error: string | null;
}

type AuthAction =
  | { type: 'SET_LOADING'; payload: boolean }
  | { type: 'SET_USER'; payload: User | null }
  | { type: 'SET_ERROR'; payload: string | null }
  | { type: 'CLEAR_ERROR' }
  | { type: 'LOGOUT' };

const initialState: AuthState = {
  user: null,
  isAuthenticated: false,
  isLoading: true,
  error: null,
};

const authReducer = (state: AuthState, action: AuthAction): AuthState => {
  switch (action.type) {
    case 'SET_LOADING':
      return { ...state, isLoading: action.payload };
    
    case 'SET_USER':
      return {
        ...state,
        user: action.payload,
        isAuthenticated: !!action.payload,
        isLoading: false,
        error: null,
      };
    
    case 'SET_ERROR':
      return {
        ...state,
        error: action.payload,
        isLoading: false,
      };
    
    case 'CLEAR_ERROR':
      return { ...state, error: null };
    
    case 'LOGOUT':
      return {
        ...state,
        user: null,
        isAuthenticated: false,
        isLoading: false,
        error: null,
      };
    
    default:
      return state;
  }
};

interface AuthContextType {
  state: AuthState;
  login: (loginData: UserLoginData) => Promise<{ success: boolean; error?: string }>;
  register: (registrationData: UserRegistrationData) => Promise<{ success: boolean; error?: string }>;
  logout: () => void;
  updateProfile: (updates: Partial<UserRegistrationData>) => Promise<{ success: boolean; error?: string }>;
  clearError: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, initialState);

  // Initialize auth state on app load
  useEffect(() => {
    const initializeAuth = () => {
      dispatch({ type: 'SET_LOADING', payload: true });
      
      try {
        // Check if there's a valid session
        if (isValidAuthToken()) {
          const currentUser = getCurrentUser();
          if (currentUser) {
            dispatch({ type: 'SET_USER', payload: currentUser });
            return;
          }
        }
        
        // No valid session found
        clearCurrentUser();
        dispatch({ type: 'SET_USER', payload: null });
      } catch (error) {
        console.error('Error initializing auth:', error);
        clearCurrentUser();
        dispatch({ type: 'SET_USER', payload: null });
      }
    };

    initializeAuth();
  }, []);

  const login = async (loginData: UserLoginData): Promise<{ success: boolean; error?: string }> => {
    dispatch({ type: 'SET_LOADING', payload: true });
    dispatch({ type: 'CLEAR_ERROR' });

    try {
      const result = await new Promise<{ success: boolean; user?: User; error?: string }>((resolve) => {
        // Simulate async operation
        setTimeout(() => {
          resolve(loginUser(loginData));
        }, 1000);
      });

      if (result.success && result.user) {
        saveCurrentUser(result.user);
        dispatch({ type: 'SET_USER', payload: result.user });
        return { success: true };
      } else {
        dispatch({ type: 'SET_ERROR', payload: result.error || 'Login failed' });
        return { success: false, error: result.error };
      }
    } catch (error) {
      const errorMessage = 'Login failed. Please try again.';
      dispatch({ type: 'SET_ERROR', payload: errorMessage });
      return { success: false, error: errorMessage };
    }
  };

  const register = async (registrationData: UserRegistrationData): Promise<{ success: boolean; error?: string }> => {
    dispatch({ type: 'SET_LOADING', payload: true });
    dispatch({ type: 'CLEAR_ERROR' });

    try {
      const result = await new Promise<{ success: boolean; user?: User; error?: string }>((resolve) => {
        // Simulate async operation
        setTimeout(() => {
          resolve(registerUser(registrationData));
        }, 1500);
      });

      if (result.success && result.user) {
        saveCurrentUser(result.user);
        dispatch({ type: 'SET_USER', payload: result.user });
        return { success: true };
      } else {
        dispatch({ type: 'SET_ERROR', payload: result.error || 'Registration failed' });
        return { success: false, error: result.error };
      }
    } catch (error) {
      const errorMessage = 'Registration failed. Please try again.';
      dispatch({ type: 'SET_ERROR', payload: errorMessage });
      return { success: false, error: errorMessage };
    }
  };

  const logout = () => {
    clearCurrentUser();
    dispatch({ type: 'LOGOUT' });
  };

  const updateProfile = async (updates: Partial<UserRegistrationData>): Promise<{ success: boolean; error?: string }> => {
    if (!state.user) {
      return { success: false, error: 'No user logged in' };
    }

    dispatch({ type: 'SET_LOADING', payload: true });
    dispatch({ type: 'CLEAR_ERROR' });

    try {
      const result = await new Promise<{ success: boolean; user?: User; error?: string }>((resolve) => {
        // Simulate async operation
        setTimeout(() => {
          resolve(updateUserProfile(state.user!.id, updates));
        }, 1000);
      });

      if (result.success && result.user) {
        dispatch({ type: 'SET_USER', payload: result.user });
        return { success: true };
      } else {
        dispatch({ type: 'SET_ERROR', payload: result.error || 'Update failed' });
        return { success: false, error: result.error };
      }
    } catch (error) {
      const errorMessage = 'Profile update failed. Please try again.';
      dispatch({ type: 'SET_ERROR', payload: errorMessage });
      return { success: false, error: errorMessage };
    }
  };

  const clearError = () => {
    dispatch({ type: 'CLEAR_ERROR' });
  };

  const contextValue: AuthContextType = {
    state,
    login,
    register,
    logout,
    updateProfile,
    clearError,
  };

  return (
    <AuthContext.Provider value={contextValue}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export default AuthContext;
