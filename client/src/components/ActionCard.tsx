import { motion } from 'framer-motion';

interface ActionCardProps {
  icon: string;
  title: string;
  description?: string;
  action: () => void;
  buttonText: string;
  loading?: boolean;
  color?: string;
}

export function ActionCard({
  icon,
  title,
  description,
  action,
  buttonText,
  loading = false,
  color = 'blue'
}: ActionCardProps) {
  const colorClasses = {
    blue: 'bg-blue-600 hover:bg-blue-700',
    indigo: 'bg-indigo-600 hover:bg-indigo-700',
    orange: 'bg-orange-600 hover:bg-orange-700',
    green: 'bg-green-600 hover:bg-green-700',
    red: 'bg-red-600 hover:bg-red-700',
    purple: 'bg-purple-600 hover:bg-purple-700',
  };

  const colorClass = colorClasses[color as keyof typeof colorClasses] || colorClasses.blue;

  return (
    <motion.div
      className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow"
      whileHover={{ y: -4 }}
      whileTap={{ scale: 0.98 }}
    >
      <div className="flex items-center mb-4">
        <div className="text-3xl mr-3">{icon}</div>
        <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
      </div>

      {description && (
        <p className="text-gray-600 mb-4 text-sm">{description}</p>
      )}

      <button
        onClick={action}
        disabled={loading}
        className={`w-full ${colorClass} text-white py-3 rounded-lg 
                   font-medium transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed`}
      >
        {loading ? '⌛ Processing...' : buttonText}
      </button>
    </motion.div>
  );
}

