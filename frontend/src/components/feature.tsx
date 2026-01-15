import { FiUser, FiMessageSquare, FiShield } from "react-icons/fi";

interface FeatureCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  bgColor: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ title, description, icon, bgColor }) => {
  return (
    <div className="bg-white rounded-xl shadow-md p-6 flex flex-col items-start gap-4">
      <div className={`p-3 rounded-lg ${bgColor} text-white`}>
        {icon}
      </div>
      <h3 className="text-lg font-semibold">{title}</h3>
      <p className="text-gray-500">{description}</p>
    </div>
  );
};

const Features: React.FC = () => {
  return (
    <section id="features" className="container mx-auto px-4 py-20 bg-green-50">
      <div className="text-center mb-16">
        <h2 className="text-3xl font-bold mb-4">Everything you need to grow</h2>
        <p className="text-gray-500">
          Simple, powerful tools for meaningful connections
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        <FeatureCard
          title="Smart Matching"
          description="Connect with developers or clients based on your role. Find the perfect match for your next project."
          icon={<FiUser size={24} />}
          bgColor="bg-teal-400 text-teal-500"
        />
        <FeatureCard
          title="Real-time Chat"
          description="Instant messaging with notifications. Never miss an opportunity to connect."
          icon={<FiMessageSquare size={24} />}
          bgColor="bg-orange-400 text-orange-500"
        />
        <FeatureCard
          title="Quality Control"
          description="Daily connection limits ensure meaningful interactions, not spam."
          icon={<FiShield size={24} />}
          bgColor="bg-teal-400 text-teal-500"
        />
      </div>
    </section>
  );
};

export default Features;
