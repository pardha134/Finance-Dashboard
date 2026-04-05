import { useState } from 'react';
import { Plus, Download } from 'lucide-react';
import { useApp } from '../context/AppContext';
import { Navbar } from '../components/Navbar';
import { DashboardCards } from '../components/DashboardCards';
import { Charts } from '../components/Charts';
import { Filters } from '../components/Filters';
import { TransactionsTable } from '../components/TransactionsTable';
import { Insights } from '../components/Insights';
import { AddTransactionModal } from '../components/AddTransactionModal';

export const Dashboard = () => {
  const { role, exportToCSV, exportToJSON } = useApp();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showExportMenu, setShowExportMenu] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-200">
      <Navbar />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="space-y-6">
          <DashboardCards />

          <Charts />

          <Insights />

          <div className="space-y-4">
            <div className="flex items-center justify-between flex-wrap gap-4">
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white">Transactions</h2>
              <div className="flex items-center gap-3">
                <div className="relative">
                  <button
                    onClick={() => setShowExportMenu(!showExportMenu)}
                    className="flex items-center gap-2 px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors"
                  >
                    <Download className="w-4 h-4" />
                    Export
                  </button>
                  {showExportMenu && (
                    <div className="absolute right-0 mt-2 w-40 bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 z-10">
                      <button
                        onClick={() => {
                          exportToCSV();
                          setShowExportMenu(false);
                        }}
                        className="w-full px-4 py-2 text-left text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-t-lg transition-colors"
                      >
                        Export as CSV
                      </button>
                      <button
                        onClick={() => {
                          exportToJSON();
                          setShowExportMenu(false);
                        }}
                        className="w-full px-4 py-2 text-left text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-b-lg transition-colors"
                      >
                        Export as JSON
                      </button>
                    </div>
                  )}
                </div>
                {role === 'admin' && (
                  <button
                    onClick={() => setIsModalOpen(true)}
                    className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    <Plus className="w-4 h-4" />
                    Add Transaction
                  </button>
                )}
              </div>
            </div>

            <Filters />

            <TransactionsTable />
          </div>
        </div>
      </main>

      <AddTransactionModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
};
