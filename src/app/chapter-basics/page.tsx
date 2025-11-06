import Link from 'next/link';
import Footer from "@/components/Footer";

export default function ChapterBasicsPage() {
  const lessons = [
    { id: 1, title: 'Introduction to Three.js', href: '/chapter-basics/lesson-01' },
    { id: 2, title: 'Basic Scene', href: '/chapter-basics/lesson-02' },
    { id: 3, title: 'Transform Objects', href: '/chapter-basics/lesson-03' },
    { id: 4, title: 'Animations', href: '/chapter-basics/lesson-04' },
    { id: 5, title: 'Cameras', href: '/chapter-basics/lesson-05' },
    { id: 6, title: 'Fullscreen and Resizing', href: '/chapter-basics/lesson-06' },
    { id: 7, title: 'Geometries', href: '/chapter-basics/lesson-07' },
    { id: 8, title: 'Debug UI', href: '/chapter-basics/lesson-08' },
  ];

  return (
    <>
    <section className="min-h-screen p-8 md:p-12 lg:p-16">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
          Chapter: Basics
        </h1>
        <p className="text-lg text-white/80 mb-8">
          Learn the fundamentals of Three.js and 3D graphics
        </p>

        <div className="space-y-4">
          {lessons.map((lesson) => (
            <Link
              key={lesson.id}
              href={lesson.href}
              className="block p-6 bg-white/5 backdrop-blur-sm border-2 border-orange-500/30 rounded-xl hover:bg-white/10 hover:border-orange-500/50 transition-all duration-300 hover:scale-102"
            >
              <div className="flex items-center gap-4">
                <span className="text-2xl font-bold text-orange-500">
                  {lesson.id.toString().padStart(2, '0')}
                </span>
                <h2 className="text-xl font-semibold text-white">
                  {lesson.title}
                </h2>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-8">
          <Link
            href="/"
            className="inline-block text-orange-500 hover:text-orange-400 transition-colors"
          >
            ← Back to Home
          </Link>
        </div>
      </div>
    </section>
    <Footer />
    </>
  );
}

