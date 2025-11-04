import clsx from 'clsx';

const cards = [
  { id: 1, title: 'Card 1', description: 'This is a description for card 1. Learn the basics of 3D graphics.' },
  { id: 2, title: 'Card 2', description: 'This is a description for card 2. Master animations and interactions.' },
  { id: 3, title: 'Card 3', description: 'This is a description for card 3. Create stunning visual effects.' },
  { id: 4, title: 'Card 4', description: 'This is a description for card 4. Build immersive 3D experiences.' },
  { id: 5, title: 'Card 5', description: 'This is a description for card 5. Optimize performance for the web.' },
  { id: 6, title: 'Card 6', description: 'This is a description for card 6. Deploy your 3D projects to production.' },
];

export default function Home() {
  return (
    <div className="min-h-screen p-8 md:p-12 lg:p-16">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Welcome to the Three.js Journey
          </h1>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Embark on an exciting adventure into the world of 3D graphics and WebGL. 
            Learn how to create stunning 3D experiences that run smoothly in any browser.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cards.map((card) => (
            <div
              key={card.id}
              className={clsx(
                'bg-white dark:bg-gray-800',
                'border border-gray-200 dark:border-gray-700',
                'rounded-lg p-6',
                'shadow-md hover:shadow-xl',
                'transition-all duration-300',
                'hover:scale-105',
                'cursor-pointer'
              )}
            >
              <h2 className="text-2xl font-semibold mb-3 text-gray-900 dark:text-white">
                {card.title}
              </h2>
              <p className="text-gray-600 dark:text-gray-300">
                {card.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
