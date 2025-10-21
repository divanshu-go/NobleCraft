import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface QuickAction {
  id: string;
  icon: string;
  title: string;
  description: string;
  action: string;
  gradient: string;
  bgColor: string;
  stat?: string;
  trend?: string;
}

export default function Dashboard() {
  const [darkMode, setDarkMode] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [activeSection, setActiveSection] = useState('dashboard');
  const [processingAction, setProcessingAction] = useState<string | null>(null);
  const [selectedTimeRange, setSelectedTimeRange] = useState('week');

  const quickActions: QuickAction[] = [
    {
      id: 'pay',
      icon: '💳',
      title: 'Quick Pay',
      description: 'Send money instantly',
      action: 'Send Payment',
      gradient: 'from-blue-500 via-blue-600 to-cyan-500',
      bgColor: 'bg-blue-500',
      stat: '$2,450',
      trend: '+18%'
    },
    {
      id: 'meeting',
      icon: '📅',
      title: 'Schedule',
      description: 'Book your next meeting',
      action: 'New Meeting',
      gradient: 'from-purple-500 via-purple-600 to-pink-500',
      bgColor: 'bg-purple-500',
      stat: '3 today',
      trend: '+2'
    },
    {
      id: 'food',
      icon: '🍔',
      title: 'Order Food',
      description: 'Your favorites ready',
      action: 'Quick Order',
      gradient: 'from-orange-500 via-orange-600 to-amber-500',
      bgColor: 'bg-orange-500',
      stat: '$12.99',
      trend: 'Chipotle'
    },
    {
      id: 'call',
      icon: '📞',
      title: 'Quick Call',
      description: 'Connect instantly',
      action: 'Start Call',
      gradient: 'from-green-500 via-emerald-600 to-teal-500',
      bgColor: 'bg-green-500',
      stat: '8 calls',
      trend: '+3'
    },
    {
      id: 'record',
      icon: '🎥',
      title: 'Record',
      description: 'Screen & camera',
      action: 'Start Recording',
      gradient: 'from-red-500 via-rose-600 to-pink-500',
      bgColor: 'bg-red-500',
      stat: '1080p',
      trend: 'HD'
    },
    {
      id: 'ai',
      icon: '✨',
      title: 'AI Assistant',
      description: 'Smart suggestions',
      action: 'View Tasks',
      gradient: 'from-violet-500 via-fuchsia-600 to-purple-500',
      bgColor: 'bg-violet-500',
      stat: '5 tasks',
      trend: 'pending'
    },
  ];

  const metrics = [
    { label: 'Productivity', value: '87%', change: '+12%', prevValue: '75%', icon: '📈', color: 'blue', gradient: 'from-blue-500 to-cyan-500', chartData: [65, 70, 68, 75, 80, 85, 87] },
    { label: 'Tasks Completed', value: '24', change: '+8', prevValue: '16', icon: '✅', color: 'green', gradient: 'from-green-500 to-emerald-500', chartData: [12, 15, 14, 18, 20, 22, 24] },
    { label: 'Time Saved', value: '2.5h', change: '+30m', prevValue: '2h', icon: '⚡', color: 'purple', gradient: 'from-purple-500 to-pink-500', chartData: [1.5, 1.8, 1.6, 2.0, 2.2, 2.3, 2.5] },
    { label: 'Focus Score', value: '92', change: '+5', prevValue: '87', icon: '🎯', color: 'orange', gradient: 'from-orange-500 to-amber-500', chartData: [80, 82, 85, 87, 88, 90, 92] },
  ];

  const handleQuickAction = async (actionId: string) => {
    setProcessingAction(actionId);
    await new Promise(resolve => setTimeout(resolve, 1500));
    setProcessingAction(null);
    alert(`${actionId} action completed!`);
  };

  // Helper function to generate simple sparkline SVG
  const generateSparkline = (data: number[], color: string) => {
    const width = 80;
    const height = 24;
    const max = Math.max(...data);
    const min = Math.min(...data);
    const range = max - min;
    
    const points = data.map((value, index) => {
      const x = (index / (data.length - 1)) * width;
      const y = height - ((value - min) / range) * height;
      return `${x},${y}`;
    }).join(' ');
    
    return (
      <svg width={width} height={height} className="opacity-50">
        <polyline
          points={points}
          fill="none"
          stroke={color}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
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
            className={`w-64 ${darkMode ? 'bg-gradient-to-b from-indigo-950 via-purple-950 to-indigo-950 border-purple-800' : 'bg-gradient-to-b from-white via-blue-50 to-purple-50 border-blue-300'} border-r-2 flex flex-col shadow-2xl`}
          >
            {/* Logo */}
            <div className={`p-6 border-b-2 ${darkMode ? 'border-purple-800' : 'border-blue-200'}`}>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 rounded-2xl flex items-center justify-center shadow-xl animate-pulse">
                  <span className="text-3xl">⚡</span>
                </div>
                <div>
                  <h1 className={`text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent`}>Life Assistant</h1>
                  <p className="text-xs font-bold text-purple-600">Pro Plan ✨</p>
                </div>
              </div>
            </div>

            {/* Navigation */}
            <nav className="flex-1 p-4 space-y-2">
              {[
                { id: 'dashboard', icon: '🏠', label: 'Dashboard', color: 'from-blue-500 to-cyan-500' },
                { id: 'tasks', icon: '✓', label: 'Tasks', badge: '5', color: 'from-green-500 to-emerald-500' },
                { id: 'calendar', icon: '📅', label: 'Calendar', badge: '3', color: 'from-purple-500 to-pink-500' },
                { id: 'analytics', icon: '📊', label: 'Analytics', color: 'from-orange-500 to-amber-500' },
                { id: 'contacts', icon: '👥', label: 'Contacts', color: 'from-rose-500 to-red-500' },
                { id: 'payments', icon: '💰', label: 'Payments', color: 'from-yellow-500 to-orange-500' },
                { id: 'settings', icon: '⚙️', label: 'Settings', color: 'from-gray-500 to-slate-500' },
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => setActiveSection(item.id)}
                  className={`w-full flex items-center justify-between px-4 py-3 rounded-xl transition-all duration-200 ${
                    activeSection === item.id
                      ? `bg-gradient-to-r ${item.color} text-white shadow-lg scale-105`
                      : darkMode
                      ? 'text-gray-300 hover:bg-purple-900/50 hover:text-white'
                      : 'text-gray-700 hover:bg-blue-100 hover:text-gray-900'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span className="text-xl">{item.icon}</span>
                    <span className="font-semibold">{item.label}</span>
                  </div>
                  {item.badge && (
                    <span className="px-2.5 py-1 text-xs font-bold rounded-full bg-gradient-to-r from-red-500 to-pink-500 text-white shadow-lg animate-pulse">
                      {item.badge}
                    </span>
                  )}
                </button>
              ))}
            </nav>

            {/* User Profile */}
            <div className={`p-4 border-t-2 ${darkMode ? 'border-purple-800' : 'border-blue-200'}`}>
              <div className="flex items-center gap-3 p-3 rounded-xl hover:bg-gradient-to-r from-blue-500 to-purple-500 hover:text-white cursor-pointer transition-all duration-300 hover:shadow-xl">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 rounded-full flex items-center justify-center shadow-lg">
                  <span className="text-white font-bold text-lg">JD</span>
                </div>
                <div className="flex-1">
                  <p className={`font-bold text-sm ${darkMode ? 'text-white' : 'text-gray-900'}`}>John Doe</p>
                  <p className="text-xs font-semibold text-purple-500">john@example.com</p>
                </div>
              </div>
            </div>
          </motion.aside>
        )}
      </AnimatePresence>

      {/* Main Content */}
      <div className={`flex-1 flex flex-col overflow-hidden ${sidebarOpen ? 'ml-64' : 'ml-0'} transition-all duration-300`}>
        {/* Top Bar */}
        <header className={`${darkMode ? 'bg-gradient-to-r from-indigo-950 via-purple-950 to-indigo-950 border-purple-800' : 'bg-gradient-to-r from-white via-blue-50 to-purple-50 border-blue-200'} border-b-2 px-8 py-4 shadow-xl`}>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <button
                onClick={() => setSidebarOpen(!sidebarOpen)}
                className={`p-3 rounded-xl ${darkMode ? 'bg-purple-900/50 hover:bg-purple-800' : 'bg-blue-100 hover:bg-blue-200'} transition-all duration-200 shadow-lg`}
              >
                <span className="text-2xl">☰</span>
              </button>
              <div>
                <h2 className={`text-3xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent`}>
                  Good morning, John 👋
                </h2>
                <p className="text-sm font-semibold text-purple-500">Tuesday, Oct 21, 2025 • San Francisco, 72°F ☀️</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <button className={`p-3 rounded-xl ${darkMode ? 'bg-purple-900/50 hover:bg-purple-800' : 'bg-blue-100 hover:bg-blue-200'} transition-all duration-200 relative shadow-lg`}>
                <span className="text-2xl">🔔</span>
                <span className="absolute top-0 right-0 w-3 h-3 bg-gradient-to-r from-red-500 to-pink-500 rounded-full animate-pulse"></span>
              </button>
              <button
                onClick={() => setDarkMode(!darkMode)}
                className={`p-3 rounded-xl ${darkMode ? 'bg-purple-900/50 hover:bg-purple-800' : 'bg-blue-100 hover:bg-blue-200'} transition-all duration-200 shadow-lg`}
              >
                <span className="text-2xl">{darkMode ? '☀️' : '🌙'}</span>
              </button>
            </div>
          </div>
        </header>

        {/* Main Content Area */}
        <main className={`flex-1 overflow-y-auto ${darkMode ? 'bg-gradient-to-br from-indigo-950 via-purple-950 to-indigo-950' : 'bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50'}`}>
          {/* Hero Section with Key Stats */}
          <div className="px-8 py-8">
            <div className="max-w-7xl mx-auto">
              <div className="flex items-center justify-between mb-8">
                <div>
                  <h1 className={`text-5xl font-black mb-2 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent`}>
                    Welcome back, John 👋
                  </h1>
                  <p className={`text-xl font-semibold ${darkMode ? 'text-purple-300' : 'text-purple-700'}`}>
                    Here's what's happening with your productivity today ✨
                  </p>
                </div>
                <div className="flex gap-3">
                  {['Today', 'Week', 'Month'].map((range) => (
                    <button
                      key={range}
                      onClick={() => setSelectedTimeRange(range.toLowerCase())}
                      className={`px-6 py-3 rounded-xl font-bold transition-all duration-200 shadow-lg ${
                        selectedTimeRange === range.toLowerCase()
                          ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white scale-105'
                          : darkMode
                          ? 'bg-purple-900/50 text-purple-300 hover:bg-purple-800'
                          : 'bg-white text-gray-700 hover:bg-blue-100'
                      }`}
                    >
                      {range}
                    </button>
                  ))}
                </div>
              </div>

              {/* Key Metrics with Sparklines */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {metrics.map((metric, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.1 }}
                    className={`${darkMode ? 'bg-gradient-to-br from-purple-900/50 to-indigo-900/50 border-purple-700' : 'bg-gradient-to-br from-white to-blue-50 border-blue-200'} border-2 rounded-2xl p-6 hover:shadow-2xl transition-all duration-300 cursor-pointer group hover:scale-105`}
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div className={`w-14 h-14 rounded-2xl flex items-center justify-center bg-gradient-to-br ${metric.gradient} shadow-lg group-hover:scale-110 transition-transform`}>
                        <span className="text-3xl">{metric.icon}</span>
                      </div>
                      <div className={`px-4 py-2 rounded-full text-sm font-bold shadow-lg ${
                        metric.change.startsWith('+')
                          ? 'bg-gradient-to-r from-green-500 to-emerald-500 text-white'
                          : 'bg-gradient-to-r from-red-500 to-rose-500 text-white'
                      }`}>
                        {metric.change}
                      </div>
                    </div>
                    <p className={`text-sm font-bold mb-2 ${darkMode ? 'text-purple-300' : 'text-purple-700'}`}>
                      {metric.label}
                    </p>
                    <div className="flex items-end justify-between">
                      <div>
                        <p className={`text-4xl font-black bg-gradient-to-r ${metric.gradient} bg-clip-text text-transparent`}>
                          {metric.value}
                        </p>
                        <p className="text-xs font-semibold text-gray-500 mt-1">
                          from {metric.prevValue}
                        </p>
                      </div>
                      <div className="flex-shrink-0">
                        {generateSparkline(
                          metric.chartData,
                          metric.color === 'blue' ? '#3b82f6' :
                          metric.color === 'green' ? '#10b981' :
                          metric.color === 'purple' ? '#a855f7' : '#f59e0b'
                        )}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* Main Content Grid */}
          <div className="max-w-7xl mx-auto px-8 py-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Left Column - Quick Actions */}
              <div className="lg:col-span-2 space-y-8">
                {/* Quick Actions */}
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div>
                      <h2 className={`text-3xl font-black bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent`}>
                        Quick Actions ⚡
                      </h2>
                      <p className={`text-sm font-semibold ${darkMode ? 'text-purple-300' : 'text-purple-700'}`}>
                        One-click access to your daily tasks
                      </p>
                    </div>
                    <button className="text-sm font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent hover:from-blue-700 hover:to-purple-700 flex items-center gap-1">
                      View all
                      <span>→</span>
                    </button>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {quickActions.map((action, idx) => (
                      <motion.div
                        key={action.id}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: idx * 0.05 }}
                        className={`${darkMode ? 'bg-gradient-to-br from-purple-900/50 to-indigo-900/50 border-purple-700' : 'bg-gradient-to-br from-white to-blue-50 border-blue-200'} border-2 rounded-2xl p-6 hover:shadow-2xl transition-all duration-300 cursor-pointer group hover:scale-105`}
                      >
                        <div className="flex items-start gap-4">
                          <div className={`w-16 h-16 bg-gradient-to-br ${action.gradient} rounded-2xl flex items-center justify-center shadow-xl flex-shrink-0 group-hover:scale-110 group-hover:rotate-6 transition-all`}>
                            <span className="text-3xl">{action.icon}</span>
                          </div>
                          <div className="flex-1 min-w-0">
                            <h3 className={`text-xl font-black mb-1 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                              {action.title}
                            </h3>
                            <p className={`text-sm font-semibold mb-2 ${darkMode ? 'text-purple-300' : 'text-purple-700'}`}>
                              {action.description}
                            </p>
                            <div className="flex items-center justify-between">
                              <div className="flex items-baseline gap-2">
                                <span className={`text-2xl font-black bg-gradient-to-r ${action.gradient} bg-clip-text text-transparent`}>
                                  {action.stat}
                                </span>
                                <span className="text-xs font-bold text-gray-500">{action.trend}</span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <button
                          onClick={() => handleQuickAction(action.id)}
                          disabled={processingAction === action.id}
                          className={`w-full mt-5 py-4 rounded-xl font-black text-base transition-all duration-200 shadow-lg ${
                            processingAction === action.id
                              ? 'bg-gray-200 dark:bg-gray-800 text-gray-500 cursor-not-allowed'
                              : `bg-gradient-to-r ${action.gradient} text-white hover:shadow-2xl hover:scale-105`
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
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Upcoming Schedule */}
                <div className={`${darkMode ? 'bg-gray-900 border-gray-800' : 'bg-white border-gray-200'} border rounded-2xl p-6`}>
                  <div className="flex items-center justify-between mb-6">
                    <div>
                      <h3 className={`text-xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                        Today's Schedule
                      </h3>
                      <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                        3 meetings scheduled
                      </p>
                    </div>
                    <button className="text-sm text-blue-500 hover:text-blue-600 font-medium">
                      View calendar →
                    </button>
                  </div>
                  <div className="space-y-4">
                    {[
                      { time: '09:00 AM', title: 'Team Standup', attendees: '5 people', color: 'blue' },
                      { time: '02:30 PM', title: 'Client Meeting', attendees: '3 people', color: 'purple', upcoming: true },
                      { time: '04:00 PM', title: 'Product Review', attendees: '8 people', color: 'orange' },
                    ].map((meeting, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: idx * 0.1 }}
                        className={`flex items-center gap-4 p-4 rounded-xl transition-all ${
                          meeting.upcoming
                            ? darkMode
                              ? 'bg-blue-500/10 border border-blue-500/50'
                              : 'bg-blue-50 border border-blue-200'
                            : darkMode
                            ? 'hover:bg-gray-800'
                            : 'hover:bg-gray-50'
                        }`}
                      >
                        <div className={`w-2 h-16 rounded-full ${
                          meeting.color === 'blue' ? 'bg-blue-500' :
                          meeting.color === 'purple' ? 'bg-purple-500' : 'bg-orange-500'
                        }`}></div>
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-1">
                            <p className={`font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                              {meeting.title}
                            </p>
                            {meeting.upcoming && (
                              <span className="px-2 py-0.5 text-xs font-bold rounded-full bg-blue-500 text-white">
                                Next
                              </span>
                            )}
                          </div>
                          <div className="flex items-center gap-3 text-sm text-gray-500">
                            <span className="flex items-center gap-1">
                              <span>🕐</span>
                              {meeting.time}
                            </span>
                            <span className="flex items-center gap-1">
                              <span>👥</span>
                              {meeting.attendees}
                            </span>
                          </div>
                        </div>
                        <button className={`px-4 py-2 rounded-lg font-medium text-sm transition-colors ${
                          darkMode
                            ? 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                            : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                        }`}>
                          Join
                        </button>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Column - Activity & Insights */}
              <div className="space-y-8">
                {/* Recent Activity */}
                <div className={`${darkMode ? 'bg-gray-900 border-gray-800' : 'bg-white border-gray-200'} border rounded-2xl p-6`}>
                  <div className="flex items-center justify-between mb-6">
                    <h3 className={`text-xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                      Recent Activity
                    </h3>
                    <button className="text-xs text-blue-500 hover:text-blue-600 font-medium">
                      View all →
                    </button>
                  </div>
                  <div className="space-y-4">
                    {[
                      { icon: '💰', title: 'Payment sent', detail: '$500 to Sarah', time: '2m ago', color: 'bg-blue-500' },
                      { icon: '📅', title: 'Meeting added', detail: 'Team sync at 2:30', time: '1h ago', color: 'bg-purple-500' },
                      { icon: '✓', title: 'Task completed', detail: 'Q4 Report finished', time: '3h ago', color: 'bg-green-500' },
                      { icon: '🍔', title: 'Order delivered', detail: 'Chipotle Bowl', time: '5h ago', color: 'bg-orange-500' },
                    ].map((activity, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: idx * 0.1 }}
                        className={`flex items-start gap-3 p-3 rounded-lg ${darkMode ? 'hover:bg-gray-800' : 'hover:bg-gray-50'} transition-colors cursor-pointer`}
                      >
                        <div className={`w-8 h-8 ${activity.color} rounded-lg flex items-center justify-center flex-shrink-0`}>
                          <span className="text-sm">{activity.icon}</span>
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className={`font-medium text-sm ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                            {activity.title}
                          </p>
                          <p className="text-xs text-gray-500 truncate">{activity.detail}</p>
                        </div>
                        <span className="text-xs text-gray-500 flex-shrink-0">{activity.time}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Quick Insights */}
                <div className={`${darkMode ? 'bg-gradient-to-br from-blue-500/20 to-purple-500/20 border-blue-500/30' : 'bg-gradient-to-br from-blue-50 to-purple-50 border-blue-200'} border rounded-2xl p-6`}>
                  <div className="flex items-start gap-3 mb-4">
                    <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-500 rounded-xl flex items-center justify-center">
                      <span className="text-xl">💡</span>
                    </div>
                    <div>
                      <h3 className={`font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                        AI Insight
                      </h3>
                      <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                        Based on your activity
                      </p>
                    </div>
                  </div>
                  <p className={`text-sm mb-4 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                    Your productivity is <span className="font-bold text-blue-500">12% higher</span> this week! 
                    You've been most focused during morning hours (9-11 AM).
                  </p>
                  <button className={`w-full py-2.5 rounded-xl font-medium text-sm transition-all ${
                    darkMode
                      ? 'bg-white/10 text-white hover:bg-white/20'
                      : 'bg-white text-gray-900 hover:bg-gray-50'
                  }`}>
                    View detailed analytics
                  </button>
                </div>

                {/* Goals Progress */}
                <div className={`${darkMode ? 'bg-gray-900 border-gray-800' : 'bg-white border-gray-200'} border rounded-2xl p-6`}>
                  <h3 className={`text-xl font-bold mb-6 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                    Daily Goals
                  </h3>
                  <div className="space-y-5">
                    {[
                      { label: 'Complete 5 tasks', progress: 80, color: 'blue', current: 4, total: 5 },
                      { label: 'Focus time (2h)', progress: 62, color: 'purple', current: '1.2h', total: '2h' },
                      { label: 'Respond to emails', progress: 100, color: 'green', current: 12, total: 12 },
                    ].map((goal, idx) => (
                      <div key={idx}>
                        <div className="flex items-center justify-between mb-2">
                          <span className={`text-sm font-medium ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                            {goal.label}
                          </span>
                          <span className={`text-sm font-bold ${
                            goal.progress === 100
                              ? 'text-green-500'
                              : darkMode
                              ? 'text-gray-400'
                              : 'text-gray-600'
                          }`}>
                            {goal.current} / {goal.total}
                          </span>
                        </div>
                        <div className={`h-2 rounded-full ${darkMode ? 'bg-gray-800' : 'bg-gray-200'} overflow-hidden`}>
                          <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: `${goal.progress}%` }}
                            transition={{ delay: idx * 0.1, duration: 0.8 }}
                            className={`h-full rounded-full ${
                              goal.color === 'blue' ? 'bg-blue-500' :
                              goal.color === 'purple' ? 'bg-purple-500' : 'bg-green-500'
                            }`}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
