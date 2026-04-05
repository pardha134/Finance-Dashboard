import { Transaction } from '../data/mockData';

export const calculateTotalIncome = (transactions: Transaction[]): number => {
  return transactions
    .filter(t => t.type === 'income')
    .reduce((sum, t) => sum + t.amount, 0);
};

export const calculateTotalExpenses = (transactions: Transaction[]): number => {
  return transactions
    .filter(t => t.type === 'expense')
    .reduce((sum, t) => sum + t.amount, 0);
};

export const calculateBalance = (transactions: Transaction[]): number => {
  return calculateTotalIncome(transactions) - calculateTotalExpenses(transactions);
};

export const getExpensesByCategory = (transactions: Transaction[]) => {
  const expenses = transactions.filter(t => t.type === 'expense');
  const categoryMap: { [key: string]: number } = {};

  expenses.forEach(t => {
    categoryMap[t.category] = (categoryMap[t.category] || 0) + t.amount;
  });

  return Object.entries(categoryMap)
    .map(([name, value]) => ({ name, value }))
    .sort((a, b) => b.value - a.value);
};

export const getMonthlyTrend = (transactions: Transaction[]) => {
  const monthlyData: { [key: string]: { income: number; expenses: number; balance: number } } = {};

  transactions.forEach(t => {
    const month = t.date.substring(0, 7);
    if (!monthlyData[month]) {
      monthlyData[month] = { income: 0, expenses: 0, balance: 0 };
    }

    if (t.type === 'income') {
      monthlyData[month].income += t.amount;
    } else {
      monthlyData[month].expenses += t.amount;
    }
  });

  return Object.entries(monthlyData)
    .map(([month, data]) => ({
      month,
      income: data.income,
      expenses: data.expenses,
      balance: data.income - data.expenses
    }))
    .sort((a, b) => a.month.localeCompare(b.month));
};

export const getHighestSpendingCategory = (transactions: Transaction[]): { category: string; amount: number } | null => {
  const categoryExpenses = getExpensesByCategory(transactions);
  if (categoryExpenses.length === 0) return null;
  return { category: categoryExpenses[0].name, amount: categoryExpenses[0].value };
};

export const getAverageMonthlyExpense = (transactions: Transaction[]): number => {
  const monthlyTrend = getMonthlyTrend(transactions);
  if (monthlyTrend.length === 0) return 0;

  const totalExpenses = monthlyTrend.reduce((sum, month) => sum + month.expenses, 0);
  return totalExpenses / monthlyTrend.length;
};
