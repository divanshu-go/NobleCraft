import { useState } from 'react';
import { ActionCard } from '../components/ActionCard';

export default function Dashboard() {
  const [paymentLoading, setPaymentLoading] = useState(false);
  const [meetingLoading, setMeetingLoading] = useState(false);
  const [foodLoading, setFoodLoading] = useState(false);

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
    <div className="max-w-7xl mx-auto px-4 py-8">
      {/* Header */}
      <header className="mb-8">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">
              🎯 Life Assistant Dashboard
            </h1>
            <p className="text-gray-600 mt-2">One-click access to your daily tasks</p>
          </div>
          <div className="flex items-center space-x-4">
            <button className="text-gray-600 hover:text-gray-900">
              <span className="relative inline-block">
                🔔
                <span className="absolute top-0 right-0 inline-flex items-center justify-center w-4 h-4 text-xs font-bold text-white bg-red-600 rounded-full">
                  3
                </span>
              </span>
            </button>
            <button className="text-gray-600 hover:text-gray-900">⚙️</button>
            <button className="flex items-center space-x-2 text-gray-600 hover:text-gray-900">
              <span>👤</span>
              <span className="text-sm font-medium">John Doe</span>
            </button>
          </div>
        </div>
      </header>

      {/* Welcome Banner */}
      <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg p-6 mb-8 text-white">
        <h2 className="text-xl font-semibold mb-2">Good morning, John! 👋</h2>
        <p className="text-blue-100">You have 3 meetings today and 5 tasks pending</p>
        <p className="text-blue-100 mt-1">🌤️ 72°F in San Francisco</p>
      </div>

      {/* Action Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        <ActionCard
          icon="💰"
          title="Quick Pay"
          description="Send money instantly to your contacts"
          action={handlePayment}
          buttonText="💸 Send $500"
          loading={paymentLoading}
          color="blue"
        />

        <ActionCard
          icon="📅"
          title="Book Meeting"
          description="Next available: Today at 2:30 PM"
          action={handleMeeting}
          buttonText="📆 Schedule Meeting"
          loading={meetingLoading}
          color="indigo"
        />

        <ActionCard
          icon="🍔"
          title="Order Food"
          description="Reorder: Chipotle Bowl - $12.99"
          action={handleFood}
          buttonText="🛒 Reorder Favorite"
          loading={foodLoading}
          color="orange"
        />

        <ActionCard
          icon="📞"
          title="Quick Call"
          description="Call your recent contacts"
          action={handleCall}
          buttonText="☎️ Call Alice"
          color="green"
        />

        <ActionCard
          icon="🎥"
          title="Record Video"
          description="Screen + Camera recording in 1080p"
          action={handleRecord}
          buttonText="⏺️ Start Recording"
          color="red"
        />

        <ActionCard
          icon="🤖"
          title="AI Tasks"
          description="Smart suggestions from emails & calendar"
          action={handleTasks}
          buttonText="✨ Show AI Tasks"
          color="purple"
        />
      </div>

      {/* Overview Widget */}
      <div className="bg-white rounded-xl p-6 shadow-md">
        <h3 className="text-xl font-semibold text-gray-900 mb-4">📊 Today's Overview</h3>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          <div className="text-center p-4 bg-blue-50 rounded-lg">
            <div className="text-2xl font-bold text-blue-600">3</div>
            <div className="text-sm text-gray-600">Meetings</div>
          </div>
          <div className="text-center p-4 bg-purple-50 rounded-lg">
            <div className="text-2xl font-bold text-purple-600">12</div>
            <div className="text-sm text-gray-600">Emails Unread</div>
          </div>
          <div className="text-center p-4 bg-green-50 rounded-lg">
            <div className="text-2xl font-bold text-green-600">5</div>
            <div className="text-sm text-gray-600">Tasks Pending</div>
          </div>
          <div className="text-center p-4 bg-amber-50 rounded-lg">
            <div className="text-2xl font-bold text-amber-600">$2,450</div>
            <div className="text-sm text-gray-600">This Week</div>
          </div>
          <div className="text-center p-4 bg-pink-50 rounded-lg">
            <div className="text-2xl font-bold text-pink-600">8</div>
            <div className="text-sm text-gray-600">Calls Today</div>
          </div>
          <div className="text-center p-4 bg-indigo-50 rounded-lg">
            <div className="text-2xl font-bold text-indigo-600">2.5h</div>
            <div className="text-sm text-gray-600">Time Saved</div>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="mt-6">
          <div className="flex justify-between text-sm text-gray-600 mb-2">
            <span>Daily Progress</span>
            <span>60% of day scheduled</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div className="bg-blue-600 h-2 rounded-full" style={{ width: '60%' }}></div>
          </div>
        </div>
      </div>

      {/* Quick Actions Bar */}
      <div className="mt-6 text-center text-sm text-gray-500">
        <p>Keyboard shortcuts: ⌘+P Pay | ⌘+M Meeting | ⌘+K Command | ⌘+/ Search</p>
      </div>
    </div>
  );
}
