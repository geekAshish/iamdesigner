
import { Mail, Instagram, Linkedin, ArrowUpRight, Globe } from 'lucide-react';
import type { ReactNode } from 'react';

const Portfolio = () => {
  return (
    <div className="min-h-screen bg-black text-white font-sans selection:bg-green-500 selection:text-black">
      
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-black/80 backdrop-blur-md border-b border-gray-800">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-xl font-bold tracking-widest">PORTFOLIO</div>
          <div className="flex gap-6 text-sm text-gray-300">
            <a href="#work" className="hover:text-green-400 transition-colors">Work</a>
            <a href="#about" className="hover:text-green-400 transition-colors">About</a>
            <a href="#contact" className="hover:text-green-400 transition-colors">Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="pt-32 pb-20 px-6 relative overflow-hidden">
        {/* Green Glow Background Effect */}
        <div className="absolute top-20 right-0 w-96 h-96 bg-green-600/20 rounded-full blur-[100px] -z-10"></div>

        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10">
          <div className="max-w-2xl">
            <p className="text-green-500 mb-4 tracking-widest text-sm uppercase">Welcome</p>
            <h1 className="text-5xl md:text-7xl font-serif italic leading-tight mb-6">
              Graphic Designer <br />
              <span className="not-italic font-sans font-bold text-transparent bg-clip-text bg-linear-to-r from-white to-gray-500">
                & Art Director
              </span>
            </h1>
            <p className="text-gray-400 text-lg max-w-lg mb-8">
              Specializing in Brand Identity, Packaging Design, and Social Media visuals that leave a lasting impression.
            </p>
            <button className="bg-green-600 text-black px-8 py-3 rounded-full font-bold hover:bg-green-500 transition-all flex items-center gap-2">
              View My Work <ArrowUpRight size={20} />
            </button>
          </div>
          
          {/* Avatar Placeholder */}
          <div className="relative">
            <div className="w-64 h-64 md:w-80 md:h-80 rounded-full border-2 border-green-500/50 p-2 relative z-10">
              <img 
                src="/api/placeholder/400/400" 
                alt="Profile" 
                className="w-full h-full object-cover rounded-full grayscale hover:grayscale-0 transition-all duration-500"
              />
            </div>
            {/* Decorative ring */}
            <div className="absolute inset-0 border border-dashed border-gray-700 rounded-full scale-125 animate-spin-slow"></div>
          </div>
        </div>
      </header>

      {/* Main Content Container */}
      <main className="max-w-6xl mx-auto px-4 py-10 space-y-32">

        {/* Section: Logo Folio */}
        <section id="work">
          <SectionTitle title="Logo Folio" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <ProjectCard title="Blue Tech" category="Tech" color="bg-blue-900" />
            <ProjectCard title="Winged Brand" category="Apparel" color="bg-gray-800" />
            <ProjectCard title="Pink Cosmetics" category="Beauty" color="bg-pink-900" />
            <ProjectCard title="Luxury Gold" category="Real Estate" color="bg-yellow-900" />
          </div>
        </section>

        {/* Section: Visual Identity */}
        <section>
          <SectionTitle title="Visual Identity" />
          <div className="grid grid-cols-1 gap-6">
             {/* Wide banner style cards */}
            <div className="h-64 bg-gray-900 rounded-lg overflow-hidden group relative border border-gray-800">
              <div className="absolute inset-0 bg-linear-to-r from-black/80 to-transparent z-10 flex flex-col justify-center px-10">
                <h3 className="text-3xl font-serif text-white mb-2">Corporate Branding</h3>
                <p className="text-gray-400">Stationery & Digital Assets</p>
              </div>
              <img src="/api/placeholder/800/400" className="w-full h-full object-cover opacity-50 group-hover:scale-105 transition-transform" alt="Identity" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <ProjectCard title="Mockup Set 1" category="Identity" color="bg-gray-800" />
                <ProjectCard title="Mockup Set 2" category="Identity" color="bg-gray-800" />
            </div>
          </div>
        </section>

        {/* Section: Packaging */}
        <section>
          <SectionTitle title="Packaging" />
          <p className="text-center text-gray-400 max-w-2xl mx-auto mb-10">
            Product presentation designs focusing on shelf impact and brand consistency.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <div key={item} className="aspect-square bg-gray-900 rounded-lg overflow-hidden hover:ring-2 hover:ring-green-500 transition-all cursor-pointer">
                <img src={`/api/placeholder/400/400?text=Pack+${item}`} alt="Packaging" className="w-full h-full object-cover opacity-80 hover:opacity-100" />
              </div>
            ))}
          </div>
        </section>

        {/* Section: Social Media Post */}
        <section>
          <SectionTitle title="Social Media Post" />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
             {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
              <div key={item} className="aspect-square bg-gray-900 rounded-lg overflow-hidden group">
                 <img src={`/api/placeholder/300/300?text=Social+${item}`} alt="Social" className="w-full h-full object-cover opacity-70 group-hover:opacity-100 transition-opacity" />
              </div>
            ))}
          </div>
        </section>

        {/* Section: Web Ads */}
        <section>
          <SectionTitle title="Web Ads" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="aspect-video bg-gray-800 rounded-lg border border-gray-700 flex items-center justify-center">
                <span className="text-gray-500">Banner Ad Campaign 1</span>
            </div>
            <div className="aspect-video bg-gray-800 rounded-lg border border-gray-700 flex items-center justify-center">
                <span className="text-gray-500">Banner Ad Campaign 2</span>
            </div>
            <div className="aspect-video bg-gray-800 rounded-lg border border-gray-700 flex items-center justify-center">
                <span className="text-gray-500">Banner Ad Campaign 3</span>
            </div>
            <div className="aspect-video bg-gray-800 rounded-lg border border-gray-700 flex items-center justify-center">
                <span className="text-gray-500">Banner Ad Campaign 4</span>
            </div>
          </div>
        </section>

      </main>

      {/* About Section */}
      <section id="about" className="relative py-24 px-6 mt-20 bg-linear-to-b from-black via-red-950/20 to-black">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl font-serif mb-12">About</h2>
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="flex-1 text-left space-y-6">
              <p className="text-gray-300 leading-relaxed">
                Hello! I am a passionate graphic designer with over 5 years of experience in creating visual concepts that inspire, inform, and captivate consumers. My expertise lies in branding, digital design, and packaging.
              </p>
              <p className="text-gray-300 leading-relaxed">
                I believe that great design is not just about making things look good, but about solving problems and communicating effectively. Let's work together to bring your vision to life.
              </p>
            </div>
            <div className="w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-red-900/50 shadow-2xl">
               <img src="/api/placeholder/300/300" alt="About Portrait" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Footer / Let's Talk */}
      <footer id="contact" className="bg-black pt-20 pb-10 border-t border-gray-900">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-green-500 text-4xl md:text-6xl font-bold mb-4">Let's Talk</h2>
          <p className="text-white text-xl md:text-2xl mb-8">example@gmail.com</p>
          
          <div className="flex justify-center gap-8 mb-12">
            <SocialLink icon={<Instagram size={24} />} label="Instagram" />
            <SocialLink icon={<Linkedin size={24} />} label="LinkedIn" />
            <SocialLink icon={<Globe size={24} />} label="Behance" />
            <SocialLink icon={<Mail size={24} />} label="Email" />
          </div>

          <div className="text-center">
            <button className="bg-white text-black px-10 py-3 rounded-full font-bold hover:bg-gray-200 transition-colors">
              Thanks for visiting!
            </button>
          </div>
          
          <div className="mt-20 border-t border-gray-900 pt-8 flex flex-col md:flex-row justify-between items-center text-gray-500 text-sm">
            <p>© 2025 Portfolio. All rights reserved.</p>
            <div className="flex gap-4 mt-4 md:mt-0">
                <span>Privacy Policy</span>
                <span>Terms of Use</span>
            </div>
          </div>
        </div>
      </footer>

    </div>
  );
};

// --- Reusable Sub-Components ---

const SectionTitle = ({ title }: {title: string}) => (
  <div className="text-center mb-12">
    <h2 className="text-4xl md:text-5xl font-serif text-white inline-block relative pb-4">
      {title}
      <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-24 h-1 bg-green-500 rounded-full"></span>
    </h2>
  </div>
);

const ProjectCard = ({ title, category, color }: {title: string, category: string, color: string}) => (
  <div className={`group relative h-64 rounded-lg overflow-hidden border border-gray-800 ${color}`}>
    <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all duration-300"></div>
    {/* Placeholder content centered */}
    <div className="absolute inset-0 flex items-center justify-center">
        <span className="text-6xl font-serif opacity-20 text-white group-hover:scale-110 transition-transform duration-500">
            {title.charAt(0)}
        </span>
    </div>
    
    {/* Bottom info */}
    <div className="absolute bottom-0 left-0 w-full p-6 bg-linear-to-t from-black to-transparent">
      <h3 className="text-xl font-bold text-white mb-1 translate-y-2 group-hover:translate-y-0 transition-transform">
        {title}
      </h3>
      <p className="text-green-400 text-sm opacity-0 group-hover:opacity-100 transition-opacity">
        {category}
      </p>
    </div>
  </div>
);

const SocialLink = ({ icon, label }: {icon: ReactNode, label: string}) => (
  <a href="#" className="w-12 h-12 rounded-full bg-gray-900 flex items-center justify-center text-white hover:bg-green-600 hover:text-black transition-all duration-300" aria-label={label}>
    {icon}
  </a>
);

export default Portfolio;