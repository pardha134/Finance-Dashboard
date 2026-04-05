import { TrendingUp, TrendingDown, Wallet } from 'lucide-react';
import { useApp } from '../context/AppContext';
import { calculateBalance, calculateTotalIncome, calculateTotalExpenses } from '../utils/calculations';
import { formatCurrency } from '../utils/formatters';

export const DashboardCards = () => {
  const { transactions } = useApp();

  const balance = calculateBalance(transactions);
  const totalIncome = calculateTotalIncome(transactions);
  const totalExpenses = calculateTotalExpenses(transactions);

  const cards = [
    {
      title: 'Total Balance',
      amount: balance,
      icon: Wallet,
      color: 'bg-blue-500',
      textColor: 'text-blue-600',
      bgColor: 'bg-blue-50',
    },
    {
      title: 'Total Income',
      amount: totalIncome,
      icon: TrendingUp,
      color: 'bg-green-500',
      textColor: 'text-green-600',
      bgColor: 'bg-green-50',
    },
    {
      title: 'Total Expenses',
      amount: totalExpenses,
      icon: TrendingDown,
      color: 'bg-red-500',
      textColor: 'text-red-600',
      bgColor: 'bg-red-50',
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {cards.map((card) => (
        <div key={card.title} className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-6 transition-all duration-200 hover:shadow-md">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600 dark:text-gray-400">{card.title}</p>
              <h3 className={`text-3xl font-bold mt-2 ${card.textColor} dark:opacity-90`}>
                {formatCurrency(card.amount)}
              </h3>
            </div>
            <div className={`${card.bgColor} dark:opacity-80 p-3 rounded-lg transition-transform hover:scale-110`}>
              <card.icon className={`w-8 h-8 ${card.textColor}`} />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
