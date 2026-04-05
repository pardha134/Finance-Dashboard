export interface Transaction {
  id: string;
  date: string;
  amount: number;
  category: string;
  type: 'income' | 'expense';
  description: string;
}

export const mockTransactions: Transaction[] = [
  { id: '1', date: '2024-03-01', amount: 5000, category: 'Salary', type: 'income', description: 'Monthly salary' },
  { id: '2', date: '2024-03-02', amount: 1200, category: 'Rent', type: 'expense', description: 'Monthly rent payment' },
  { id: '3', date: '2024-03-03', amount: 350, category: 'Groceries', type: 'expense', description: 'Weekly groceries' },
  { id: '4', date: '2024-03-05', amount: 80, category: 'Transportation', type: 'expense', description: 'Gas and metro' },
  { id: '5', date: '2024-03-07', amount: 200, category: 'Entertainment', type: 'expense', description: 'Movie and dinner' },
  { id: '6', date: '2024-03-10', amount: 500, category: 'Freelance', type: 'income', description: 'Web design project' },
  { id: '7', date: '2024-03-12', amount: 150, category: 'Utilities', type: 'expense', description: 'Electricity and water' },
  { id: '8', date: '2024-03-15', amount: 300, category: 'Shopping', type: 'expense', description: 'Clothing purchase' },
  { id: '9', date: '2024-03-18', amount: 90, category: 'Healthcare', type: 'expense', description: 'Doctor visit' },
  { id: '10', date: '2024-03-20', amount: 250, category: 'Groceries', type: 'expense', description: 'Monthly stock up' },
  { id: '11', date: '2024-03-22', amount: 1000, category: 'Investment', type: 'income', description: 'Dividend payout' },
  { id: '12', date: '2024-03-25', amount: 120, category: 'Entertainment', type: 'expense', description: 'Concert tickets' },
  { id: '13', date: '2024-03-27', amount: 60, category: 'Transportation', type: 'expense', description: 'Uber rides' },
  { id: '14', date: '2024-03-28', amount: 400, category: 'Education', type: 'expense', description: 'Online course' },
  { id: '15', date: '2024-03-30', amount: 180, category: 'Dining', type: 'expense', description: 'Restaurants' },
  { id: '16', date: '2024-02-01', amount: 5000, category: 'Salary', type: 'income', description: 'Monthly salary' },
  { id: '17', date: '2024-02-03', amount: 1200, category: 'Rent', type: 'expense', description: 'Monthly rent payment' },
  { id: '18', date: '2024-02-05', amount: 300, category: 'Groceries', type: 'expense', description: 'Weekly groceries' },
  { id: '19', date: '2024-02-10', amount: 450, category: 'Shopping', type: 'expense', description: 'Electronics' },
  { id: '20', date: '2024-02-15', amount: 800, category: 'Freelance', type: 'income', description: 'Consulting work' },
  { id: '21', date: '2024-02-20', amount: 200, category: 'Entertainment', type: 'expense', description: 'Weekend activities' },
  { id: '22', date: '2024-02-25', amount: 150, category: 'Utilities', type: 'expense', description: 'Monthly bills' },
  { id: '23', date: '2024-01-01', amount: 5000, category: 'Salary', type: 'income', description: 'Monthly salary' },
  { id: '24', date: '2024-01-05', amount: 1200, category: 'Rent', type: 'expense', description: 'Monthly rent payment' },
  { id: '25', date: '2024-01-15', amount: 600, category: 'Groceries', type: 'expense', description: 'Monthly groceries' },
];

export const categories = [
  'Salary',
  'Freelance',
  'Investment',
  'Rent',
  'Groceries',
  'Transportation',
  'Entertainment',
  'Utilities',
  'Shopping',
  'Healthcare',
  'Education',
  'Dining',
  'Other'
];
