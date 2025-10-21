import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface QuickAction {
  id: string;
  icon: string;
  title: string;
  description: string;
  action: string;
  gradient: string;
  stat?: string;
}

export default function Dashboard() {
  const [darkMode, setDarkMode] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [activeSection, setActiveSection] = useState('dashboard');
  const [processingAction, setProcessingAction] = useState<string | null>(null);

  const quickActions: QuickAction[] = [
    {
      id: 'pay',
      icon: '💳',
      title: 'Quick Pay',
      description: 'Send money instantly',
      action: 'Send Payment',
      gradient: 'from-blue-500 via-blue-600 to-indigo-600',
      stat: '$2,450 sent this week'
    },
    {
      id: 'meeting',
      icon: '📅',
      title: 'Schedule',
      description: 'Book your next meeting',
      action: 'New Meeting',
      gradient: 'from-purple-500 via-purple-600 to-pink-600',
      stat: '3 meetings today'
    },
    {
      id: 'food',
      icon: '🍔',
      title: 'Order Food',
      description: 'Your favorites ready',
      action: 'Quick Order',
      gradient: 'from-orange-500 via-orange-600 to-red-600',
      stat: 'Last: Chipotle $12.99'
    },
    {
      id: 'call',
      icon: '📞',
      title: 'Quick Call',
      description: 'Connect instantly',
      action: 'Start Call',
      gradient: 'from-green-500 via-green-600 to-emerald-600',
      stat: '8 calls today'
    },
    {
      id: 'record',
      icon: '🎥',
      title: 'Record',
      description: 'Screen & camera',
      action: 'Start Recording',
      gradient: 'from-red-500 via-red-600 to-rose-600',
      stat: '1080p HD ready'
    },
    {
      id: 'ai',
      icon: '✨',
      title: 'AI Assistant',
      description: 'Smart suggestions',
      action: 'View Tasks',
      gradient: 'from-violet-500 via-purple-600 to-fuchsia-600',
      stat: '5 tasks pending'
    },
  ];

  const metrics = [
    { label: 'Productivity', value: '87%', change: '+12%', icon: '📈', color: 'text-green-500' },
    { label: 'Tasks Done', value: '24', change: '+8', icon: '✅', color: 'text-blue-500' },
    { label: 'Time Saved', value: '2.5h', change: '+30m', icon: '⚡', color: 'text-purple-500' },
    { label: 'Focus Score', value: '92', change: '+5', icon: '🎯', color: 'text-orange-500' },
  ];

  const handleQuickAction = async (actionId: string) => {
    setProcessingAction(actionId);
    await new Promise(resolve => setTimeout(resolve, 1500));
    setProcessingAction(null);
    alert(`${actionId} action completed!`);
  };

  return (
    <div className={`flex h-screen ${darkMode ? 'bg-gray-950' : 'bg-gray-50'} transition-colors duration-300`}>
      {/* Sidebar */}
      <AnimatePresence>
        {sidebarOpen && (
          <motion.aside
            initial={{ x: -280 }}
            animate={{ x: 0 }}
            exit={{ x: -280 }}
            transition={{ type: 'spring', bounce: 0, duration: 0.4 }}
            className={`w-70 ${darkMode ? 'bg-gray-900 border-gray-800' : 'bg-white border-gray-200'} border-r flex flex-col`}
          >
            {/* Logo */}
            <div className="p-6 border-b border-gray-200 dark:border-gray-800">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
                  <span className="text-2xl">⚡</span>
                </div>
                <div>
                  <h1 className={`text-lg font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>Life Assistant</h1>
                  <p className="text-xs text-gray-500">Pro Plan</p>
                </div>
              </div>
            </div>

            {/* Navigation */}
            <nav className="flex-1 p-4 space-y-1">
              {[
                { id: 'dashboard', icon: '🏠', label: 'Dashboard' },
                { id: 'tasks', icon: '✓', label: 'Tasks', badge: '5' },
                { id: 'calendar', icon: '📅', label: 'Calendar', badge: '3' },
                { id: 'analytics', icon: '📊', label: 'Analytics' },
                { id: 'contacts', icon: '👥', label: 'Contacts' },
                { id: 'payments', icon: '💰', label: 'Payments' },
                { id: 'settings', icon: '⚙️', label: 'Settings' },
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => setActiveSection(item.id)}
                  className={`w-full flex items-center justify-between px-4 py-3 rounded-xl transition-all duration-200 ${
                    activeSection === item.id
                      ? darkMode
                        ? 'bg-gray-800 text-white'
                        : 'bg-gray-100 text-gray-900'
                      : darkMode
                      ? 'text-gray-400 hover:bg-gray-800 hover:text-white'
                      : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span className="text-xl">{item.icon}</span>
                    <span className="font-medium">{item.label}</span>
                  </div>
                  {item.badge && (
                    <span className="px-2 py-0.5 text-xs font-bold rounded-full bg-blue-500 text-white">
                      {item.badge}
                    </span>
                  )}
                </button>
              ))}
            </nav>

            {/* User Profile */}
            <div className={`p-4 border-t ${darkMode ? 'border-gray-800' : 'border-gray-200'}`}>
              <div className="flex items-center gap-3 p-3 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-800 cursor-pointer transition-colors">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold">JD</span>
                </div>
                <div className="flex-1">
                  <p className={`font-medium text-sm ${darkMode ? 'text-white' : 'text-gray-900'}`}>John Doe</p>
                  <p className="text-xs text-gray-500">john@example.com</p>
                </div>
              </div>
            </div>
          </motion.aside>
        )}
      </AnimatePresence>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Top Bar */}
        <header className={`${darkMode ? 'bg-gray-900 border-gray-800' : 'bg-white border-gray-200'} border-b px-8 py-4`}>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <button
                onClick={() => setSidebarOpen(!sidebarOpen)}
                className={`p-2 rounded-lg ${darkMode ? 'hover:bg-gray-800' : 'hover:bg-gray-100'} transition-colors`}
              >
                <span className="text-xl">☰</span>
              </button>
              <div>
                <h2 className={`text-2xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                  Good morning, John 👋
                </h2>
                <p className="text-sm text-gray-500">Tuesday, Oct 21, 2025 • San Francisco, 72°F ☀️</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <button className={`p-2 rounded-lg ${darkMode ? 'hover:bg-gray-800' : 'hover:bg-gray-100'} transition-colors relative`}>
                <span className="text-xl">🔔</span>
                <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full"></span>
              </button>
              <button
                onClick={() => setDarkMode(!darkMode)}
                className={`p-2 rounded-lg ${darkMode ? 'hover:bg-gray-800' : 'hover:bg-gray-100'} transition-colors`}
              >
                <span className="text-xl">{darkMode ? '☀️' : '🌙'}</span>
              </button>
            </div>
          </div>
        </header>

        {/* Main Content Area */}
        <main className="flex-1 overflow-y-auto p-8">
          {/* Metrics Row */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
            {metrics.map((metric, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                className={`${darkMode ? 'bg-gray-900 border-gray-800' : 'bg-white border-gray-200'} border rounded-2xl p-6 hover:shadow-lg transition-shadow`}
              >
                <div className="flex items-start justify-between mb-3">
                  <span className="text-3xl">{metric.icon}</span>
                  <span className={`text-sm font-semibold ${metric.color}`}>{metric.change}</span>
                </div>
                <p className="text-3xl font-bold mb-1 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  {metric.value}
                </p>
                <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>{metric.label}</p>
              </motion.div>
            ))}
          </div>

          {/* Quick Actions */}
          <div className="mb-8">
            <div className="flex items-center justify-between mb-6">
              <h3 className={`text-xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>Quick Actions</h3>
              <button className="text-sm text-blue-500 hover:text-blue-600 font-medium">View all →</button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {quickActions.map((action, idx) => (
                <motion.div
                  key={action.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: idx * 0.1 }}
                  whileHover={{ y: -4 }}
                  className={`${darkMode ? 'bg-gray-900 border-gray-800' : 'bg-white border-gray-200'} border rounded-2xl p-6 cursor-pointer group relative overflow-hidden`}
                >
                  {/* Gradient background on hover */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${action.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>
                  
                  <div className="relative z-10">
                    <div className="flex items-start justify-between mb-4">
                      <div className={`w-14 h-14 bg-gradient-to-br ${action.gradient} rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                        <span className="text-3xl">{action.icon}</span>
                      </div>
                    </div>
                    <h4 className={`text-lg font-bold mb-1 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                      {action.title}
                    </h4>
                    <p className={`text-sm mb-3 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                      {action.description}
                    </p>
                    {action.stat && (
                      <p className="text-xs text-gray-500 mb-4">{action.stat}</p>
                    )}
                    <button
                      onClick={() => handleQuickAction(action.id)}
                      disabled={processingAction === action.id}
                      className={`w-full py-3 rounded-xl font-semibold transition-all duration-200 ${
                        processingAction === action.id
                          ? 'bg-gray-200 dark:bg-gray-800 text-gray-500 cursor-not-allowed'
                          : `bg-gradient-to-r ${action.gradient} text-white hover:shadow-lg hover:scale-[1.02]`
                      }`}
                    >
                      {processingAction === action.id ? (
                        <span className="flex items-center justify-center gap-2">
                          <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Processing...
                        </span>
                      ) : (
                        action.action
                      )}
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Activity Section */}
          <div className={`${darkMode ? 'bg-gray-900 border-gray-800' : 'bg-white border-gray-200'} border rounded-2xl p-6`}>
            <div className="flex items-center justify-between mb-6">
              <h3 className={`text-xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>Recent Activity</h3>
              <button className="text-sm text-blue-500 hover:text-blue-600 font-medium">View all →</button>
            </div>
            <div className="space-y-4">
              {[
                { icon: '💰', title: 'Payment sent to Sarah', time: '2 minutes ago', color: 'bg-blue-500' },
                { icon: '📅', title: 'Meeting scheduled with Team', time: '1 hour ago', color: 'bg-purple-500' },
                { icon: '🍔', title: 'Food order delivered', time: '3 hours ago', color: 'bg-orange-500' },
                { icon: '✓', title: 'Task completed: Q4 Report', time: '5 hours ago', color: 'bg-green-500' },
              ].map((activity, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  className={`flex items-center gap-4 p-4 rounded-xl ${darkMode ? 'hover:bg-gray-800' : 'hover:bg-gray-50'} transition-colors cursor-pointer`}
                >
                  <div className={`w-10 h-10 ${activity.color} rounded-full flex items-center justify-center`}>
                    <span className="text-xl">{activity.icon}</span>
                  </div>
                  <div className="flex-1">
                    <p className={`font-medium ${darkMode ? 'text-white' : 'text-gray-900'}`}>{activity.title}</p>
                    <p className="text-sm text-gray-500">{activity.time}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
