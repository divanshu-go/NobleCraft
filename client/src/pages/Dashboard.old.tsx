import { useState } from 'react';
import { ActionCard } from '../components/ActionCard';

export default function Dashboard() {
  const [paymentLoading, setPaymentLoading] = useState(false);
  const [meetingLoading, setMeetingLoading] = useState(false);
  const [foodLoading, setFoodLoading] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  const handlePayment = () => {
    setPaymentLoading(true);
    // Simulate API call
    setTimeout(() => {
      alert('✅ Payment of $500 sent successfully!');
      setPaymentLoading(false);
    }, 2000);
  };

  const handleMeeting = () => {
    setMeetingLoading(true);
    // Simulate API call
    setTimeout(() => {
      alert('📅 Meeting scheduled for today at 2:30 PM!');
      setMeetingLoading(false);
    }, 2000);
  };

  const handleFood = () => {
    setFoodLoading(true);
    // Simulate API call
    setTimeout(() => {
      alert('🍔 Your Chipotle Bowl has been ordered! ETA: 25-35 min');
      setFoodLoading(false);
    }, 2000);
  };

  const handleCall = () => {
    alert('📞 Calling Alice...');
  };

  const handleRecord = () => {
    alert('🎥 Starting screen recording...');
  };

  const handleTasks = () => {
    alert('🤖 AI analyzing your emails and calendar...');
  };

  return (
    <div className={`min-h-screen ${darkMode ? 'bg-gray-900' : 'bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Modern Header with Glassmorphism */}
        <header className="mb-8">
          <div className={`${darkMode ? 'bg-gray-800/50' : 'bg-white/70'} backdrop-blur-xl rounded-2xl shadow-xl p-6 border ${darkMode ? 'border-gray-700' : 'border-white/20'}`}>
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
                  <span className="text-2xl">🎯</span>
                </div>
                <div>
                  <h1 className={`text-3xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'} tracking-tight`}>
                    Life Assistant
                  </h1>
                  <p className={`${darkMode ? 'text-gray-400' : 'text-gray-600'} text-sm mt-1`}>
                    Your productivity command center
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <button 
                  onClick={() => setDarkMode(!darkMode)}
                  className={`p-3 ${darkMode ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-100 hover:bg-gray-200'} rounded-xl transition-all duration-300 transform hover:scale-105`}
                >
                  <span className="text-xl">{darkMode ? '☀️' : '🌙'}</span>
                </button>
                <button className={`p-3 relative ${darkMode ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-100 hover:bg-gray-200'} rounded-xl transition-all duration-300 transform hover:scale-105`}>
                  <span className="text-xl">🔔</span>
                  <span className="absolute -top-1 -right-1 inline-flex items-center justify-center w-5 h-5 text-xs font-bold text-white bg-gradient-to-r from-red-500 to-pink-500 rounded-full shadow-lg">
                    3
                  </span>
                </button>
                <button className={`p-3 ${darkMode ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-100 hover:bg-gray-200'} rounded-xl transition-all duration-300 transform hover:scale-105`}>
                  <span className="text-xl">⚙️</span>
                </button>
                <button className={`flex items-center space-x-3 ${darkMode ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-100 hover:bg-gray-200'} rounded-xl px-4 py-3 transition-all duration-300 transform hover:scale-105`}>
                  <div className="w-8 h-8 bg-gradient-to-br from-blue-400 to-purple-500 rounded-lg flex items-center justify-center">
                    <span className="text-lg">👤</span>
                  </div>
                  <span className={`text-sm font-semibold ${darkMode ? 'text-white' : 'text-gray-900'}`}>John Doe</span>
                </button>
              </div>
            </div>
          </div>
        </header>

        {/* Modern Welcome Banner with Enhanced Gradient */}
        <div className="relative overflow-hidden rounded-3xl mb-8 shadow-2xl">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 opacity-90"></div>
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJ3aGl0ZSIgc3Ryb2tlLW9wYWNpdHk9IjAuMSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-20"></div>
          <div className="relative p-8">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-3xl font-bold text-white mb-3 flex items-center gap-3">
                  Good morning, John! 
                  <span className="text-4xl animate-bounce">👋</span>
                </h2>
                <div className="space-y-2">
                  <p className="text-white/90 text-lg flex items-center gap-2">
                    <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                    You have <span className="font-bold">3 meetings</span> today and <span className="font-bold">5 tasks</span> pending
                  </p>
                  <p className="text-white/80 flex items-center gap-2">
                    <span className="text-2xl">🌤️</span>
                    <span className="font-medium">72°F</span> in San Francisco
                  </p>
                </div>
              </div>
              <div className="hidden md:flex flex-col items-end space-y-3">
                <div className="bg-white/20 backdrop-blur-sm rounded-2xl px-6 py-3 border border-white/30">
                  <p className="text-white/80 text-sm">Productivity Score</p>
                  <p className="text-4xl font-bold text-white">87%</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Action Cards Grid with Enhanced Design */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          <ActionCard
            icon="💰"
            title="Quick Pay"
            description="Send money instantly to your contacts"
            action={handlePayment}
            buttonText="💸 Send $500"
            loading={paymentLoading}
            color="blue"
            darkMode={darkMode}
          />

          <ActionCard
            icon="📅"
            title="Book Meeting"
            description="Next available: Today at 2:30 PM"
            action={handleMeeting}
            buttonText="📆 Schedule Meeting"
            loading={meetingLoading}
            color="indigo"
            darkMode={darkMode}
          />

          <ActionCard
            icon="🍔"
            title="Order Food"
            description="Reorder: Chipotle Bowl - $12.99"
            action={handleFood}
            buttonText="🛒 Reorder Favorite"
            loading={foodLoading}
            color="orange"
            darkMode={darkMode}
          />

          <ActionCard
            icon="📞"
            title="Quick Call"
            description="Call your recent contacts"
            action={handleCall}
            buttonText="☎️ Call Alice"
            color="green"
            darkMode={darkMode}
          />

          <ActionCard
            icon="🎥"
            title="Record Video"
            description="Screen + Camera recording in 1080p"
            action={handleRecord}
            buttonText="⏺️ Start Recording"
            color="red"
            darkMode={darkMode}
          />

          <ActionCard
            icon="🤖"
            title="AI Tasks"
            description="Smart suggestions from emails & calendar"
            action={handleTasks}
            buttonText="✨ Show AI Tasks"
            color="purple"
            darkMode={darkMode}
          />
        </div>

        {/* Modern Overview Widget with Glassmorphism */}
        <div className={`${darkMode ? 'bg-gray-800/50' : 'bg-white/70'} backdrop-blur-xl rounded-3xl shadow-2xl border ${darkMode ? 'border-gray-700' : 'border-white/20'} overflow-hidden`}>
          <div className="p-8">
            <div className="flex items-center justify-between mb-6">
              <h3 className={`text-2xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'} flex items-center gap-3`}>
                <span className="text-3xl">📊</span>
                Today's Overview
              </h3>
              <button className={`px-4 py-2 ${darkMode ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-100 hover:bg-gray-200'} rounded-xl text-sm font-medium ${darkMode ? 'text-white' : 'text-gray-700'} transition-all duration-300`}>
                View Details
              </button>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
              <div className={`${darkMode ? 'bg-blue-500/10 border-blue-500/20' : 'bg-gradient-to-br from-blue-50 to-blue-100/50'} p-6 rounded-2xl border ${darkMode ? 'border-blue-500/20' : 'border-blue-100'} transition-all duration-300 hover:scale-105 hover:shadow-lg cursor-pointer`}>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-3xl">📅</span>
                  <span className={`text-3xl font-bold ${darkMode ? 'text-blue-400' : 'text-blue-600'}`}>3</span>
                </div>
                <div className={`text-sm font-medium ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>Meetings</div>
              </div>

              <div className={`${darkMode ? 'bg-purple-500/10 border-purple-500/20' : 'bg-gradient-to-br from-purple-50 to-purple-100/50'} p-6 rounded-2xl border ${darkMode ? 'border-purple-500/20' : 'border-purple-100'} transition-all duration-300 hover:scale-105 hover:shadow-lg cursor-pointer`}>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-3xl">📧</span>
                  <span className={`text-3xl font-bold ${darkMode ? 'text-purple-400' : 'text-purple-600'}`}>12</span>
                </div>
                <div className={`text-sm font-medium ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>Emails Unread</div>
              </div>

              <div className={`${darkMode ? 'bg-green-500/10 border-green-500/20' : 'bg-gradient-to-br from-green-50 to-green-100/50'} p-6 rounded-2xl border ${darkMode ? 'border-green-500/20' : 'border-green-100'} transition-all duration-300 hover:scale-105 hover:shadow-lg cursor-pointer`}>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-3xl">✅</span>
                  <span className={`text-3xl font-bold ${darkMode ? 'text-green-400' : 'text-green-600'}`}>5</span>
                </div>
                <div className={`text-sm font-medium ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>Tasks Pending</div>
              </div>

              <div className={`${darkMode ? 'bg-amber-500/10 border-amber-500/20' : 'bg-gradient-to-br from-amber-50 to-amber-100/50'} p-6 rounded-2xl border ${darkMode ? 'border-amber-500/20' : 'border-amber-100'} transition-all duration-300 hover:scale-105 hover:shadow-lg cursor-pointer`}>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-3xl">💵</span>
                  <span className={`text-2xl font-bold ${darkMode ? 'text-amber-400' : 'text-amber-600'}`}>$2,450</span>
                </div>
                <div className={`text-sm font-medium ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>This Week</div>
              </div>

              <div className={`${darkMode ? 'bg-pink-500/10 border-pink-500/20' : 'bg-gradient-to-br from-pink-50 to-pink-100/50'} p-6 rounded-2xl border ${darkMode ? 'border-pink-500/20' : 'border-pink-100'} transition-all duration-300 hover:scale-105 hover:shadow-lg cursor-pointer`}>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-3xl">📞</span>
                  <span className={`text-3xl font-bold ${darkMode ? 'text-pink-400' : 'text-pink-600'}`}>8</span>
                </div>
                <div className={`text-sm font-medium ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>Calls Today</div>
              </div>

              <div className={`${darkMode ? 'bg-indigo-500/10 border-indigo-500/20' : 'bg-gradient-to-br from-indigo-50 to-indigo-100/50'} p-6 rounded-2xl border ${darkMode ? 'border-indigo-500/20' : 'border-indigo-100'} transition-all duration-300 hover:scale-105 hover:shadow-lg cursor-pointer`}>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-3xl">⚡</span>
                  <span className={`text-3xl font-bold ${darkMode ? 'text-indigo-400' : 'text-indigo-600'}`}>2.5h</span>
                </div>
                <div className={`text-sm font-medium ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>Time Saved</div>
              </div>
            </div>

            {/* Enhanced Progress Bar */}
            <div className={`${darkMode ? 'bg-gray-700/50' : 'bg-gray-50'} rounded-2xl p-6`}>
              <div className="flex justify-between items-center mb-4">
                <span className={`text-sm font-semibold ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>Daily Progress</span>
                <span className={`text-sm font-bold ${darkMode ? 'text-blue-400' : 'text-blue-600'}`}>60% of day scheduled</span>
              </div>
              <div className="relative">
                <div className={`w-full ${darkMode ? 'bg-gray-600' : 'bg-gray-200'} rounded-full h-3 overflow-hidden`}>
                  <div className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 h-3 rounded-full transition-all duration-1000 ease-out shadow-lg" style={{ width: '60%' }}>
                    <div className="h-full w-full bg-gradient-to-r from-white/20 to-transparent"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Modern Footer with Quick Actions */}
        <div className="mt-8 text-center">
          <div className={`inline-flex items-center gap-2 ${darkMode ? 'bg-gray-800/50' : 'bg-white/70'} backdrop-blur-xl rounded-2xl px-6 py-4 shadow-lg border ${darkMode ? 'border-gray-700' : 'border-white/20'}`}>
            <span className="text-xl">⌨️</span>
            <span className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              <span className="font-semibold">Keyboard shortcuts:</span> ⌘+P Pay | ⌘+M Meeting | ⌘+K Command | ⌘+/ Search
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
