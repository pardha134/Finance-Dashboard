import { TrendingUp, AlertCircle, Calendar } from 'lucide-react';
import { useApp } from '../context/AppContext';
import { getHighestSpendingCategory, getAverageMonthlyExpense, getMonthlyTrend } from '../utils/calculations';
import { formatCurrency } from '../utils/formatters';

export const Insights = () => {
  const { transactions } = useApp();

  const highestCategory = getHighestSpendingCategory(transactions);
  const avgMonthlyExpense = getAverageMonthlyExpense(transactions);
  const monthlyTrend = getMonthlyTrend(transactions);

  const lastTwoMonths = monthlyTrend.slice(-2);
  const expenseChange =
    lastTwoMonths.length === 2
      ? ((lastTwoMonths[1].expenses - lastTwoMonths[0].expenses) / lastTwoMonths[0].expenses) * 100
      : 0;

  const insights = [
    {
      icon: TrendingUp,
      title: 'Highest Spending Category',
      value: highestCategory ? highestCategory.category : 'N/A',
      detail: highestCategory ? `Total: ${formatCurrency(highestCategory.amount)}` : '',
      color: 'text-blue-600',
      bgColor: 'bg-blue-50',
    },
    {
      icon: Calendar,
      title: 'Average Monthly Expense',
      value: formatCurrency(avgMonthlyExpense),
      detail: 'Based on recent activity',
      color: 'text-green-600',
      bgColor: 'bg-green-50',
    },
    {
      icon: AlertCircle,
      title: 'Monthly Expense Trend',
      value: expenseChange > 0 ? `+${expenseChange.toFixed(1)}%` : `${expenseChange.toFixed(1)}%`,
      detail: expenseChange > 0 ? 'Spending increased' : expenseChange < 0 ? 'Spending decreased' : 'No change',
      color: expenseChange > 0 ? 'text-red-600' : 'text-green-600',
      bgColor: expenseChange > 0 ? 'bg-red-50' : 'bg-green-50',
    },
  ];

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-6 transition-colors duration-200">
      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Financial Insights</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {insights.map((insight) => (
          <div key={insight.title} className="flex items-start gap-4">
            <div className={`${insight.bgColor} dark:opacity-80 p-3 rounded-lg transition-transform hover:scale-110`}>
              <insight.icon className={`w-6 h-6 ${insight.color}`} />
            </div>
            <div className="flex-1">
              <p className="text-sm text-gray-600 dark:text-gray-400">{insight.title}</p>
              <p className={`text-xl font-bold mt-1 ${insight.color} dark:opacity-90`}>
                {insight.value}
              </p>
              <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">{insight.detail}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
