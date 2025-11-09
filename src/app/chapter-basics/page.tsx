import Link from 'next/link'
import Footer from '@/components/Footer'
import BackLink from '@/components/BackLink'

export default function ChapterBasicsPage() {
  const lessons = [
    { id: 1, title: 'Hello Three.js!', href: '/chapter-basics/hello-threejs' }
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
          <BackLink href="/" text="Back to Home" />
        </div>
      </div>
    </section>
    <Footer />
    </>
  );
}

