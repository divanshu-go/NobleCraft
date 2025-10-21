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
      gradient: 'from-blue-500 to-blue-600',
      stat: '$2,450',
      trend: '+18%'
    },
    {
      id: 'meeting',
      icon: '📅',
      title: 'Schedule',
      description: 'Book your next meeting',
      action: 'New Meeting',
      gradient: 'from-purple-500 to-purple-600',
      stat: '3 today',
      trend: '+2'
    },
    {
      id: 'food',
      icon: '🍔',
      title: 'Order Food',
      description: 'Your favorites ready',
      action: 'Quick Order',
      gradient: 'from-orange-500 to-orange-600',
      stat: '$12.99',
      trend: 'Chipotle'
    },
    {
      id: 'call',
      icon: '📞',
      title: 'Quick Call',
      description: 'Connect instantly',
      action: 'Start Call',
      gradient: 'from-green-500 to-emerald-600',
      stat: '8 calls',
      trend: '+3'
    },
    {
      id: 'record',
      icon: '🎥',
      title: 'Record',
      description: 'Screen & camera',
      action: 'Start Recording',
      gradient: 'from-red-500 to-rose-600',
      stat: '1080p',
      trend: 'HD'
    },
    {
      id: 'ai',
      icon: '✨',
      title: 'AI Assistant',
      description: 'Smart suggestions',
      action: 'View Tasks',
      gradient: 'from-violet-500 to-fuchsia-600',
      stat: '5 tasks',
      trend: 'pending'
    },
  ];

  const metrics = [
    { label: 'Productivity', value: '87%', change: '+12%', prevValue: '75%', icon: '📈', color: 'blue', chartData: [65, 70, 68, 75, 80, 85, 87] },
    { label: 'Tasks Completed', value: '24', change: '+8', prevValue: '16', icon: '✅', color: 'green', chartData: [12, 15, 14, 18, 20, 22, 24] },
    { label: 'Time Saved', value: '2.5h', change: '+30m', prevValue: '2h', icon: '⚡', color: 'purple', chartData: [1.5, 1.8, 1.6, 2.0, 2.2, 2.3, 2.5] },
    { label: 'Focus Score', value: '92', change: '+5', prevValue: '87', icon: '🎯', color: 'orange', chartData: [80, 82, 85, 87, 88, 90, 92] },
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
            className={`w-64 ${darkMode ? 'bg-gray-900 border-gray-800' : 'bg-white border-gray-200'} border-r flex flex-col`}
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
        <main className="flex-1 overflow-y-auto">
          {/* Hero Section with Key Stats */}
          <div className={`${darkMode ? 'bg-gradient-to-br from-gray-900 via-gray-900 to-gray-800 border-gray-800' : 'bg-gradient-to-br from-white via-blue-50 to-purple-50 border-gray-200'} border-b px-8 py-8`}>
            <div className="max-w-7xl mx-auto">
              <div className="flex items-center justify-between mb-8">
                <div>
                  <h1 className={`text-4xl font-bold mb-2 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                    Welcome back, John 👋
                  </h1>
                  <p className={`text-lg ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                    Here's what's happening with your productivity today
                  </p>
                </div>
                <div className="flex gap-2">
                  {['Today', 'Week', 'Month'].map((range) => (
                    <button
                      key={range}
                      onClick={() => setSelectedTimeRange(range.toLowerCase())}
                      className={`px-4 py-2 rounded-lg font-medium transition-all ${
                        selectedTimeRange === range.toLowerCase()
                          ? darkMode
                            ? 'bg-gray-800 text-white'
                            : 'bg-white text-gray-900 shadow-sm'
                          : darkMode
                          ? 'text-gray-400 hover:text-white hover:bg-gray-800'
                          : 'text-gray-600 hover:text-gray-900 hover:bg-white/50'
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
                    className={`${darkMode ? 'bg-gray-800/50 border-gray-700' : 'bg-white border-gray-200'} border rounded-2xl p-6 hover:shadow-xl transition-all duration-300 cursor-pointer group`}
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                        darkMode ? 'bg-gray-700' : 'bg-gray-100'
                      } group-hover:scale-110 transition-transform`}>
                        <span className="text-2xl">{metric.icon}</span>
                      </div>
                      <div className={`px-3 py-1 rounded-full text-xs font-bold ${
                        metric.change.startsWith('+')
                          ? darkMode
                            ? 'bg-green-500/20 text-green-400'
                            : 'bg-green-100 text-green-700'
                          : darkMode
                          ? 'bg-red-500/20 text-red-400'
                          : 'bg-red-100 text-red-700'
                      }`}>
                        {metric.change}
                      </div>
                    </div>
                    <p className={`text-sm font-medium mb-2 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                      {metric.label}
                    </p>
                    <div className="flex items-end justify-between">
                      <div>
                        <p className={`text-3xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                          {metric.value}
                        </p>
                        <p className="text-xs text-gray-500 mt-1">
                          from {metric.prevValue}
                        </p>
                      </div>
                      <div className="flex-shrink-0">
                        {generateSparkline(
                          metric.chartData,
                          metric.color === 'blue' ? '#3b82f6' :
                          metric.color === 'green' ? '#10b981' :
                          metric.color === 'purple' ? '#8b5cf6' : '#f59e0b'
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
                      <h2 className={`text-2xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                        Quick Actions
                      </h2>
                      <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                        One-click access to your daily tasks
                      </p>
                    </div>
                    <button className="text-sm text-blue-500 hover:text-blue-600 font-medium flex items-center gap-1">
                      View all
                      <span>→</span>
                    </button>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {quickActions.map((action, idx) => (
                      <motion.div
                        key={action.id}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: idx * 0.05 }}
                        className={`${darkMode ? 'bg-gray-900 border-gray-800' : 'bg-white border-gray-200'} border rounded-2xl p-5 hover:shadow-lg transition-all duration-300 cursor-pointer group`}
                      >
                        <div className="flex items-start gap-4">
                          <div className={`w-12 h-12 bg-gradient-to-br ${action.gradient} rounded-xl flex items-center justify-center shadow-lg flex-shrink-0 group-hover:scale-110 transition-transform`}>
                            <span className="text-2xl">{action.icon}</span>
                          </div>
                          <div className="flex-1 min-w-0">
                            <h3 className={`font-bold mb-1 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                              {action.title}
                            </h3>
                            <p className={`text-sm mb-2 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                              {action.description}
                            </p>
                            <div className="flex items-center justify-between">
                              <div className="flex items-baseline gap-2">
                                <span className={`text-lg font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                                  {action.stat}
                                </span>
                                <span className="text-xs text-gray-500">{action.trend}</span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <button
                          onClick={() => handleQuickAction(action.id)}
                          disabled={processingAction === action.id}
                          className={`w-full mt-4 py-2.5 rounded-xl font-semibold text-sm transition-all duration-200 ${
                            processingAction === action.id
                              ? 'bg-gray-200 dark:bg-gray-800 text-gray-500 cursor-not-allowed'
                              : `bg-gradient-to-r ${action.gradient} text-white hover:shadow-lg hover:scale-[1.02]`
                          }`}
                        >
                          {processingAction === action.id ? (
                            <span className="flex items-center justify-center gap-2">
                              <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24">
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
