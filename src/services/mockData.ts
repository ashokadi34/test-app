export const mockUser = {
  name: "Alex Doe",
  email: "alex.doe@example.com",
  kycStatus: "verified",
  salary: 150000,
};

export const mockBuckets = [
  { id: 1, name: "Emergency Fund", type: "LOW", amount: 30000 },
  { id: 2, name: "Insurance", type: "TERM_INSURANCE", amount: 2000 },
  { id: 3, name: "Mutual Funds", type: "MODERATE", amount: 40000 },
  { id: 4, name: "Stocks", type: "HIGH", amount: 20000 },
];

export const mockTransactions = [
  { id: 1, date: "2025-07-31", description: "Salary Credit", type: "credit", amount: 150000 },
  { id: 2, date: "2025-07-31", description: "Emergency Fund Deposit", type: "debit", amount: 30000 },
  { id: 3, date: "2025-07-31", description: "Insurance Premium", type: "debit", amount: 2000 },
  { id: 4, date: "2025-07-31", description: "Equity Allocation", type: "debit", amount: 20000 },
];
