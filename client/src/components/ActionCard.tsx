import { motion } from 'framer-motion';

interface ActionCardProps {
  icon: string;
  title: string;
  description?: string;
  action: () => void;
  buttonText: string;
  loading?: boolean;
  color?: string;
  darkMode?: boolean;
}

export function ActionCard({
  icon,
  title,
  description,
  action,
  buttonText,
  loading = false,
  color = 'blue',
  darkMode = false
}: ActionCardProps) {
  const colorClasses = {
    blue: 'from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700',
    indigo: 'from-indigo-500 to-indigo-600 hover:from-indigo-600 hover:to-indigo-700',
    orange: 'from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700',
    green: 'from-green-500 to-green-600 hover:from-green-600 hover:to-green-700',
    red: 'from-red-500 to-red-600 hover:from-red-600 hover:to-red-700',
    purple: 'from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700',
  };

  const colorClass = colorClasses[color as keyof typeof colorClasses] || colorClasses.blue;

  return (
    <motion.div
      className={`${darkMode ? 'bg-gray-800/50 border-gray-700' : 'bg-white/70 border-white/20'} backdrop-blur-xl rounded-2xl p-6 shadow-xl border transition-all duration-300 hover:shadow-2xl`}
      whileHover={{ y: -8, scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      {/* Icon and Title */}
      <div className="flex items-center mb-4">
        <div className={`w-14 h-14 bg-gradient-to-br ${colorClass} rounded-2xl flex items-center justify-center shadow-lg transform transition-transform group-hover:scale-110`}>
          <span className="text-3xl">{icon}</span>
        </div>
        <h3 className={`text-xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'} ml-4`}>{title}</h3>
      </div>

      {/* Description */}
      {description && (
        <p className={`${darkMode ? 'text-gray-400' : 'text-gray-600'} mb-6 text-sm leading-relaxed`}>
          {description}
        </p>
      )}

      {/* Action Button */}
      <button
        onClick={action}
        disabled={loading}
        className={`w-full bg-gradient-to-r ${colorClass} text-white py-3.5 px-6 rounded-xl 
                   font-semibold transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed
                   shadow-lg hover:shadow-xl transform hover:scale-[1.02] active:scale-95
                   flex items-center justify-center gap-2`}
      >
        {loading ? (
          <>
            <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            <span>Processing...</span>
          </>
        ) : (
          buttonText
        )}
      </button>
    </motion.div>
  );
}

