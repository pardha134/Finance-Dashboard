# Finance Dashboard UI

A responsive and interactive finance dashboard built with React, TypeScript, and Tailwind CSS. This project demonstrates modern frontend development practices including component architecture, state management, and data visualization.

## Overview

The Finance Dashboard UI helps users track, analyze, and understand their financial activity through an intuitive interface. Users can view financial summaries, explore transactions, and gain insights into spending patterns.

## Features

### Dashboard Overview
- **Summary Cards**: Display total balance, income, and expenses at a glance
- **Financial Trend Chart**: Line chart showing income, expenses, and balance over time
- **Spending Breakdown**: Pie chart visualizing expenses by category

### Transactions Management
- **Comprehensive List**: View all transactions with date, amount, category, and type
- **Search Functionality**: Find transactions by category or description
- **Advanced Filtering**: Filter by transaction type (income/expense) and date range
- **Flexible Sorting**: Sort by date or amount in ascending/descending order
- **Empty State Handling**: Graceful display when no transactions match filters
- **Export Options**: Download transactions as CSV or JSON files

### Role-Based Access Control
- **Viewer Role**: Read-only access to view all data
- **Admin Role**: Full access to add and delete transactions
- **Easy Role Switching**: Toggle between roles using dropdown in navbar

### Financial Insights
- **Highest Spending Category**: Identifies where most money is spent
- **Average Monthly Expense**: Calculates spending patterns over time
- **Expense Trend Analysis**: Shows percentage change in monthly spending

### Optional Enhancements Implemented
- **Dark Mode**: Full dark mode support with smooth transitions
- **Local Storage Persistence**: Transactions, role, and theme preferences persist across sessions
- **Date Range Filtering**: Advanced filtering by custom date ranges
- **Export Functionality**: Export filtered transactions to CSV or JSON
- **Smooth Animations**: Animated modals, hover effects, and transitions throughout

### User Experience
- Clean, modern, and professional design
- Fully responsive across all device sizes
- Smooth transitions and hover effects
- Intuitive navigation and interactions
- Dark mode support with smooth transitions
- Local storage persistence for data and preferences
- Advanced date range filtering
- Export functionality (CSV/JSON)
- Animated modals and UI elements

## Technology Stack

- **Framework**: React 18 with TypeScript
- **Styling**: Tailwind CSS
- **Charts**: Recharts
- **Icons**: Lucide React
- **Build Tool**: Vite
- **State Management**: React Context API

## Project Structure

```
src/
├── components/           # Reusable UI components
│   ├── AddTransactionModal.tsx
│   ├── Charts.tsx
│   ├── DashboardCards.tsx
│   ├── Filters.tsx
│   ├── Insights.tsx
│   ├── Navbar.tsx
│   └── TransactionsTable.tsx
├── context/             # Global state management
│   └── AppContext.tsx
├── data/                # Mock data
│   └── mockData.ts
├── pages/               # Page-level components
│   └── Dashboard.tsx
├── utils/               # Helper functions
│   ├── calculations.ts
│   └── formatters.ts
├── App.tsx              # Root component
└── main.tsx             # Application entry point
```

## Setup Instructions

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd finance-dashboard
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Build for production**
   ```bash
   npm run build
   ```

5. **Preview production build**
   ```bash
   npm run preview
   ```

## Usage

### Dark Mode
Click the moon/sun icon in the top-right corner to toggle between light and dark modes. Your preference is saved automatically.

### Switching Roles
Use the role dropdown in the top-right corner to switch between Viewer and Admin modes.

### Adding Transactions (Admin Only)
1. Click the "Add Transaction" button
2. Fill in the transaction details (date, type, category, amount, description)
3. Click "Add Transaction" to save

### Deleting Transactions (Admin Only)
Click the trash icon next to any transaction in the table.

### Filtering and Searching
- Use the search box to find specific transactions
- Select filter options to view only income or expenses
- Choose date range to filter transactions by period
- Choose sorting preferences to organize the list

### Exporting Data
1. Click the "Export" button above the transactions table
2. Choose CSV or JSON format
3. File will download automatically with current date in filename

## Design Decisions

### Component Architecture
- **Modularity**: Each component has a single, well-defined responsibility
- **Reusability**: Components are designed to be reused across the application
- **Separation of Concerns**: UI components are separate from business logic

### State Management
- **Context API**: Chosen for its simplicity and adequacy for this scale
- **Centralized State**: All application state managed in one place
- **Derived State**: Filtered and sorted data computed on-demand for efficiency

### Data Visualization
- **Recharts**: Selected for its React-native implementation and ease of use
- **Multiple Chart Types**: Line charts for trends, pie charts for categorical breakdown
- **Responsive Charts**: All visualizations adapt to different screen sizes

### Styling Approach
- **Tailwind CSS**: Utility-first approach for rapid development
- **Consistent Design System**: Unified colors, spacing, and typography
- **Mobile-First**: Responsive design prioritizing mobile experience
- **Dark Mode**: Full dark mode support with class-based toggling
- **Smooth Transitions**: CSS transitions for enhanced user experience

## Key Concepts Demonstrated

- Component-based architecture
- TypeScript for type safety
- React Context API for state management
- Conditional rendering based on user roles
- Data visualization with charts
- Responsive design principles
- Search, filter, and sort functionality
- Form handling and validation
- Modal dialogs for user interactions
- Local storage for data persistence
- Dark mode implementation
- Export functionality (CSV/JSON)
- Advanced filtering with date ranges
- CSS animations and transitions

## Future Enhancements

Potential improvements for production readiness:

- ~~Dark mode support~~ ✅ Implemented
- ~~Local storage persistence~~ ✅ Implemented
- ~~Export to CSV/JSON functionality~~ ✅ Implemented
- ~~Advanced filtering with date ranges~~ ✅ Implemented
- ~~Animations or transitions~~ ✅ Implemented
- Budget tracking and alerts
- Multi-currency support
- Backend integration with API
- User authentication
- Data import functionality
- Performance optimizations with code splitting
- Charts with more customization options
- Recurring transactions support

## Browser Support

Modern browsers including:
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is created for educational and evaluation purposes.

## Contact

For questions or feedback regarding this project, please reach out to the project maintainer.
