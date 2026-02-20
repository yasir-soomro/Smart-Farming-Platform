import { create } from 'zustand';

interface AppState {
  isAuthenticated: boolean;
  user: { name: string; email: string; farmName?: string } | null;
  login: (userData: { name: string; email: string; farmName?: string }) => void;
  logout: () => void;
  theme: 'light' | 'dark';
  toggleTheme: () => void;
}

export const useAuthStore = create<AppState>((set) => ({
  isAuthenticated: false,
  user: null,
  login: (userData) => set({ isAuthenticated: true, user: userData }),
  logout: () => set({ isAuthenticated: false, user: null }),
  theme: 'light',
  toggleTheme: () => set((state) => {
    const newTheme = state.theme === 'light' ? 'dark' : 'light';
    if (newTheme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    return { theme: newTheme };
  }),
}));
