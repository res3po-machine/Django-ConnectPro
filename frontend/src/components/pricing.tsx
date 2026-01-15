import { useState } from "react";

const PricingCard = ({
  name,
  price,
  features,
  selected,
  onSelect,
}: {
  name: string;
  price: string;
  features: string[];
  selected: boolean;
  onSelect: () => void;
}) => (
  <div
    onClick={onSelect}
    className={`
      rounded-lg border p-6 space-y-4 cursor-pointer transform transition-all duration-300
      ${selected ? "scale-105 border-teal-500" : "border-gray-300"}
      bg-card
    `}
  >
    <h3 className="text-2xl font-bold">{name}</h3>
    <div className="text-4xl font-bold">{price}</div>
    <ul className="space-y-2">
      {features.map((f, i) => (
        <li key={i}>✓ {f}</li>
      ))}
    </ul>
    <button
      className={`w-full h-10 rounded-md border transition-colors duration-300
        ${selected ? "bg-teal-500 text-white border-teal-500" : "border-gray-300"}
      `}
    >
      Select
    </button>
  </div>
);

const Pricing: React.FC = () => {
  const [selectedCard, setSelectedCard] = useState<string | null>(null);

  const cards = [
    { name: "Free", price: "$0", features: ["2 connections/day", "Basic profile"] },
    { name: "Plus", price: "$19/mo", features: ["5 connections/day", "Priority support"] },
    { name: "Pro", price: "$49/mo", features: ["Unlimited connections", "24/7 support"] },
  ];

  return (
    <section id="pricing" className="container mx-auto px-4 py-20">
      <div className="text-center mb-16">
        <h2 className="text-3xl font-bold">Simple, transparent pricing</h2>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {cards.map((card) => (
          <PricingCard
            key={card.name}
            name={card.name}
            price={card.price}
            features={card.features}
            selected={selectedCard === card.name}
            onSelect={() => setSelectedCard(card.name)}
          />
        ))}
      </div>
    </section>
  );
};

export default Pricing;
