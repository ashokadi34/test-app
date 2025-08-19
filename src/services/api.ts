import { mockUser, mockBuckets, mockTransactions } from './mockData';

export const api = {
  login: async (email: string, password: string) => {
    if (email && password) {
      localStorage.setItem('mock_user', JSON.stringify(mockUser));
      return mockUser;
    }
    throw new Error("Login failed");
  },
  getUser: async () => {
    return JSON.parse(localStorage.getItem('mock_user') || '{}');
  },
  getBuckets: async () => {
    return mockBuckets;
  },
  getTransactions: async () => {
    return mockTransactions;
  }
};
