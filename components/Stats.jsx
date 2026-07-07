import { FaCheckCircle, FaClock, FaUsers, FaLeaf } from 'react-icons/fa';

const stats = [
  { icon: <FaCheckCircle />, label: 'Services', value: '25+' },
  { icon: <FaClock />, label: 'Available', value: '24/7' },
  { icon: <FaUsers />, label: 'Citizens', value: '5L+' },
  { icon: <FaLeaf />, label: 'Green', value: 'Initiative' }
];

export default function Stats() {
  return (
    <div className="bg-gray-50 py-16 border-y border-gray-200">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="card text-center hover:shadow-lg hover:scale-105 transition-all duration-300">
              <div className="text-5xl text-secondary mb-4 flex justify-center animate-bounce">
                {stat.icon}
              </div>
              <p className="text-gray-600 text-sm font-semibold mb-2">{stat.label}</p>
              <p className="text-3xl font-bold text-primary">{stat.value}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
