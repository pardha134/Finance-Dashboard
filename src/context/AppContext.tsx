import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { Transaction, mockTransactions } from '../data/mockData';

export type UserRole = 'viewer' | 'admin';

interface AppContextType {
  transactions: Transaction[];
  role: UserRole;
  searchTerm: string;
  filterType: 'all' | 'income' | 'expense';
  sortBy: 'date' | 'amount';
  sortOrder: 'asc' | 'desc';
  darkMode: boolean;
  dateRange: { start: string; end: string } | null;
  setRole: (role: UserRole) => void;
  setSearchTerm: (term: string) => void;
  setFilterType: (type: 'all' | 'income' | 'expense') => void;
  setSortBy: (sort: 'date' | 'amount') => void;
  setSortOrder: (order: 'asc' | 'desc') => void;
  setDarkMode: (mode: boolean) => void;
  setDateRange: (range: { start: string; end: string } | null) => void;
  addTransaction: (transaction: Omit<Transaction, 'id'>) => void;
  deleteTransaction: (id: string) => void;
  getFilteredTransactions: () => Transaction[];
  exportToCSV: () => void;
  exportToJSON: () => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

const loadFromLocalStorage = <T,>(key: string, defaultValue: T): T => {
  try {
    const item = localStorage.getItem(key);
    return item ? JSON.parse(item) : defaultValue;
  } catch {
    return defaultValue;
  }
};

export const AppProvider = ({ children }: { children: ReactNode }) => {
  const [transactions, setTransactions] = useState<Transaction[]>(() => 
    loadFromLocalStorage('transactions', mockTransactions)
  );
  const [role, setRole] = useState<UserRole>(() => 
    loadFromLocalStorage('role', 'admin')
  );
  const [darkMode, setDarkMode] = useState<boolean>(() => 
    loadFromLocalStorage('darkMode', false)
  );
  const [searchTerm, setSearchTerm] = useState('');
  const [filterType, setFilterType] = useState<'all' | 'income' | 'expense'>('all');
  const [sortBy, setSortBy] = useState<'date' | 'amount'>('date');
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('desc');
  const [dateRange, setDateRange] = useState<{ start: string; end: string } | null>(null);

  useEffect(() => {
    localStorage.setItem('transactions', JSON.stringify(transactions));
  }, [transactions]);

  useEffect(() => {
    localStorage.setItem('role', JSON.stringify(role));
  }, [role]);

  useEffect(() => {
    localStorage.setItem('darkMode', JSON.stringify(darkMode));
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const addTransaction = (transaction: Omit<Transaction, 'id'>) => {
    const newTransaction: Transaction = {
      ...transaction,
      id: Date.now().toString(),
    };
    setTransactions([newTransaction, ...transactions]);
  };

  const deleteTransaction = (id: string) => {
    setTransactions(transactions.filter(t => t.id !== id));
  };

  const getFilteredTransactions = (): Transaction[] => {
    let filtered = [...transactions];

    if (searchTerm) {
      filtered = filtered.filter(t =>
        t.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
        t.description.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    if (filterType !== 'all') {
      filtered = filtered.filter(t => t.type === filterType);
    }

    if (dateRange) {
      filtered = filtered.filter(t => {
        const transactionDate = new Date(t.date);
        const start = new Date(dateRange.start);
        const end = new Date(dateRange.end);
        return transactionDate >= start && transactionDate <= end;
      });
    }

    filtered.sort((a, b) => {
      let comparison = 0;
      if (sortBy === 'date') {
        comparison = new Date(a.date).getTime() - new Date(b.date).getTime();
      } else {
        comparison = a.amount - b.amount;
      }
      return sortOrder === 'asc' ? comparison : -comparison;
    });

    return filtered;
  };

  const exportToCSV = () => {
    const filtered = getFilteredTransactions();
    const headers = ['Date', 'Type', 'Category', 'Amount', 'Description'];
    const rows = filtered.map(t => [
      t.date,
      t.type,
      t.category,
      t.amount.toString(),
      t.description
    ]);
    
    const csvContent = [
      headers.join(','),
      ...rows.map(row => row.map(cell => `"${cell}"`).join(','))
    ].join('\n');
    
    const blob = new Blob([csvContent], { type: 'text/csv' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `transactions_${new Date().toISOString().split('T')[0]}.csv`;
    link.click();
    URL.revokeObjectURL(url);
  };

  const exportToJSON = () => {
    const filtered = getFilteredTransactions();
    const jsonContent = JSON.stringify(filtered, null, 2);
    const blob = new Blob([jsonContent], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `transactions_${new Date().toISOString().split('T')[0]}.json`;
    link.click();
    URL.revokeObjectURL(url);
  };

  return (
    <AppContext.Provider
      value={{
        transactions,
        role,
        searchTerm,
        filterType,
        sortBy,
        sortOrder,
        darkMode,
        dateRange,
        setRole,
        setSearchTerm,
        setFilterType,
        setSortBy,
        setSortOrder,
        setDarkMode,
        setDateRange,
        addTransaction,
        deleteTransaction,
        getFilteredTransactions,
        exportToCSV,
        exportToJSON,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
};
