import Jumbotron from '@/components/Jumbotron';
import Card from '@/components/Card';
import Footer from "@/components/Footer";

const cards = [
  { id: 1, title: 'Card 1', description: 'This is a description for card 1. Learn the basics of 3D graphics.', image: 'https://hobcxfhiydtdxnxh.public.blob.vercel-storage.com/low_poly_city.jpg' },
  { id: 2, title: 'Card 2', description: 'This is a description for card 2. Master animations and interactions.', image: 'https://hobcxfhiydtdxnxh.public.blob.vercel-storage.com/low_poly_city.jpg' },
  { id: 3, title: 'Card 3', description: 'This is a description for card 3. Create stunning visual effects.', image: 'https://hobcxfhiydtdxnxh.public.blob.vercel-storage.com/low_poly_city.jpg' },
  { id: 4, title: 'Card 4', description: 'This is a description for card 4. Build immersive 3D experiences.', image: 'https://hobcxfhiydtdxnxh.public.blob.vercel-storage.com/low_poly_city.jpg' },
  { id: 5, title: 'Card 5', description: 'This is a description for card 5. Optimize performance for the web.', image: 'https://hobcxfhiydtdxnxh.public.blob.vercel-storage.com/low_poly_city.jpg' },
  { id: 6, title: 'Card 6', description: 'This is a description for card 6. Deploy your 3D projects to production.', image: 'https://hobcxfhiydtdxnxh.public.blob.vercel-storage.com/low_poly_city.jpg' },
];

export default function Home() {
  return (
    <>
      <Jumbotron />
      
      <section className="max-w-7xl mx-auto px-8">

        {/* Cards Grid */}
        <div className="grid grid-cols-1 gap-6">
          {cards.map((card, index) => {
            const variant = 
              index % 3 === 0 ? 'orange' :
              index % 3 === 1 ? 'magenta' :
              'redOrange';
            
            return (
              <Card
                key={card.id}
                title={card.title}
                description={card.description}
                variant={variant}
                image={card.image}
                isEven={index % 2 === 1}
              />
            );
          })}
        </div>
      </section>
      <Footer />
    </>
  );
}
