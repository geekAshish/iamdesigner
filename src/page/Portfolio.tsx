
import { Mail, Instagram, Linkedin, ArrowUpRight, Globe, Phone } from 'lucide-react';
import { useState, type ReactNode } from 'react';

import frontGreenImage from '../assets/front_green_1.png';
import aboutImage from '../assets/About.png'

import photoshop from '../assets/photoshop.png'
import after_effect from '../assets/after_effect.png'
import indesign from '../assets/indesign.png'
import figma from '../assets/illustrator.png'

import logo1 from '../assets/Portfolio/&DONE Logo.png'
import logo2 from '../assets/Portfolio/SicSem Logo.png'

import visualIdentity from '../assets/Portfolio/Visual Identiy Banner.png'
import visualIdentity1 from '../assets/Portfolio/Visual Identity Mockup set 1.png'
import visualIdentity2 from '../assets/Portfolio/Visual Identity Mockup set 2.png'

import social1 from '../assets/Portfolio/Social media 1.png'
import social2 from '../assets/Portfolio/Social media 2.png'
import social3 from '../assets/Portfolio/Social media 3.png'
import social6 from '../assets/Portfolio/Social media 6.png'
import social7 from '../assets/Portfolio/Social media 7.png'
import social8 from '../assets/Portfolio/Social media 8.png'
import social9 from '../assets/Portfolio/Social media 9.png'
import social10 from '../assets/Portfolio/Social media 10.png'

import ads1 from '../assets/Portfolio/AD.png'
import ads2 from '../assets/Portfolio/AD Banner 2.png'
import ads3 from '../assets/Portfolio/AD Banner 3.png'
import ads4 from '../assets/Portfolio/AD Banner 4.png'

import thumbnail1 from '../assets/Portfolio/thumbnail 1.png'
import thumbnail2 from '../assets/Portfolio/thumbnail 2.png'
import thumbnail3 from '../assets/Portfolio/thumbnail 3.png'
import thumbnail4 from '../assets/Portfolio/thumbnail 4.png'
import thumbnail5 from '../assets/Portfolio/thumbnail 5.png'
import thumbnail6 from '../assets/Portfolio/thumbnail 6.png'

const thumbnails = [
  thumbnail1, thumbnail2, thumbnail3, thumbnail4, thumbnail5, thumbnail6
]

const socialMediaLinks = [
  social1, social10, social8, social9, social3, social2, social6, social7, 
]

const Portfolio = () => {
  const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbyFPsM5PEBvhi_7-dI9y-37AISo1Un-3wjx9_LTaEhELEykyUUqDPeKMeTIxKFoQfyQ/exec";

  const [formData, setFormData] = useState({
    name: '',
    contact_number: '',
    email: '',
    description: '',
    is_follow_up: 'No' // Default value
  });

  const [status, setStatus] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('Submitting...');

    try {
      // We use 'no-cors' mode because Google Scripts redirects, which browser security often blocks in standard CORS checks.
      // NOTE: With 'no-cors', you won't get a readable JSON response back, but the data WILL save.
      await fetch(GOOGLE_SCRIPT_URL, {
        method: "POST",
        mode: "no-cors", 
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      setStatus('Success! Details saved.');
      // Optional: Reset form
      setFormData({ name: '', contact_number: '', email: '', description: '', is_follow_up: 'No' });

    } catch (error) {
      console.error("Error:", error);
      setStatus('Error submitting form.');
    }
  };


  const tools = [
  { 
    name: 'Photoshop', 
    src: photoshop, 
    // Top Left: Tilted Left
    style: "top-[-20px] left-[-20px] md:top-[-40px] md:left-[-40px] -rotate-12" 
  },
  { 
    name: 'After Effects', 
    src: after_effect, 
    // Top Right: Tilted Right
    style: "top-[-20px] right-[-20px] md:top-[-40px] md:right-[-40px] rotate-12" 
  },
  { 
    name: 'Premiere', 
    src: figma, 
    // Bottom Left: Tilted Left
    style: "bottom-[-20px] left-[-20px] md:bottom-[-40px] md:left-[-40px] -rotate-12" 
  },
  { 
    name: 'DaVinci', 
    src: indesign, 
    // Bottom Right: Tilted Right
    style: "bottom-[10%] right-[-20px] md:bottom-[15%] md:right-[-40px] rotate-12" 
  },
];

  return (
    <div className="min-h-screen bg-black text-white font-sans selection:bg-green-500 selection:text-black">
      
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-black/80 backdrop-blur-md border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-xl font-bold tracking-widest">PORTFOLIO</div>
          <div className="flex gap-6 text-sm text-gray-300">
            <a href="#work" className="hover:text-green-400 transition-colors">Work</a>
            <a href="#about" className="hover:text-green-400 transition-colors">About</a>
            <a href="#contact" className="hover:text-green-400 transition-colors">Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="pt-32 pb-20 px-6 relative overflow-hidden min-h-screen flex items-center">
      
      {/* Green Glow Background Effect */}
      <div className="absolute top-20 right-0 w-96 h-96 bg-green-600/20 rounded-full blur-[100px] -z-10"></div>

      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10 w-full">
        
        {/* --- Left Content --- */}
        <div className="max-w-2xl z-20">
          <p className="text-green-500 mb-4 tracking-widest text-sm uppercase">Welcome</p>
          <h1 className="text-5xl md:text-7xl font-serif italic leading-tight mb-6">
            Graphic Designer <br />
            <span className="not-italic font-sans font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500">
              & Art Director
            </span>
          </h1>
          <p className="text-gray-400 text-lg max-w-lg mb-8">
            Specializing in <span className='font-semibold text-white'> Brand Identity, Packaging Design, and Social Media visuals </span> that leave a lasting impression.
          </p>
          <button className="bg-green-600 text-black px-8 py-3 rounded-full font-bold hover:bg-green-500 transition-all flex items-center gap-2 cursor-pointer">
            View My Work <ArrowUpRight size={20} />
          </button>
        </div>

        {/* --- Right Content --- */}
        <div className="relative flex justify-center items-center mt-16 md:mt-0">
          
          {/* Main Container */}
          <div className="relative w-64 h-64 md:w-80 md:h-80">
            
            {/* --- 1. THE SPINNING CIRCLE (Added Back) --- */}
            {/* scale-125 makes it slightly larger than the profile image, just like your original */}
            <div className="absolute inset-0 border border-dashed border-gray-700 rounded-full scale-125 animate-[spin_40s_linear_infinite]"></div>

            {/* --- 2. Profile Image --- */}
            <div className="w-full h-full rounded-full border-2 border-green-500/50 p-2 relative z-10 bg-black">
              <img
                src={frontGreenImage}
                alt="Profile"
                className="w-full h-full object-cover rounded-full"
              />
            </div>

            {/* --- 3. Floating Icons --- */}
            {tools.map((tool, index) => (
              <div
                key={tool.name}
                className={`absolute w-16 h-16 md:w-20 md:h-20 bg-black/80 rounded-2xl border border-gray-800 flex items-center justify-center animate-float hover:scale-110 transition-transform duration-300 z-20 ${tool.style}`}
                style={{ animationDelay: `${index * 0.5}s` }}
              >
                <img 
                  src={tool.src} 
                  alt={tool.name} 
                  className="w-10 h-10 md:w-12 md:h-12 object-contain" 
                />
              </div>
            ))}

          </div>
        </div>

      </div>
    </header>

      {/* Main Content Container */}
      <main className="max-w-7xl mx-auto px-4 py-10 space-y-32">

        {/* Section: Logo Folio */}
        <section id="work">
          <SectionTitle title="Logo Folio" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <ProjectCard img={logo1} title="& Done" category="Tech" color="bg-blue-900" />
            <ProjectCard img={logo2} title="Sicsem" category="Apparel" color="bg-gray-800" />
          </div>
        </section>

        {/* Section: Visual Identity */}
        <section>
          <SectionTitle title="Visual Identity" />
          <div className="grid grid-cols-1 gap-6">
             {/* Wide banner style cards */}
            <div className="h-64 bg-gray-900 rounded-lg overflow-hidden group relative border border-gray-800">
              
              <img src={visualIdentity} className="w-full h-full group-hover:scale-105" alt="Identity" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <ProjectCard img={visualIdentity1} title="Mockup Set 1" category="Identity" color="bg-gray-800" />
                <ProjectCard img={visualIdentity2} title="Mockup Set 2" category="Identity" color="bg-gray-800" />
            </div>
          </div>
        </section>

        {/* Section: Packaging */}
        <section>
          <SectionTitle title="Thumbnail" />
          <p className="text-center text-gray-400 max-w-2xl mx-auto mb-10">
            Product presentation designs focusing on shelf impact and brand consistency.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {thumbnails?.map((item) => (
              <div className="aspect-video bg-gray-900 rounded-lg overflow-hidden hover:ring-2 hover:ring-green-500 transition-all cursor-pointer">
                <img src={item} alt="Packaging" className="w-full h-full object-cover opacity-80 hover:opacity-100" />
              </div>
            ))}
          </div>
        </section>

        {/* Section: Social Media Post */}
        <section>
          <SectionTitle title="Social Media Post" />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
             {socialMediaLinks.map((item) => (
              <div key={item} className="aspect-square  rounded-lg overflow-hidden group">
                 <img src={item} alt="Social" className="w-full h-full object-cover transition-opacity" />
              </div>
            ))}
          </div>
        </section>

        {/* Section: Web Ads */}
        <section>
          <SectionTitle title="Ads" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="aspect-video bg-gray-800 rounded-lg border border-gray-700 flex items-center justify-center">
                <img src={ads1} alt="Social" className="w-full h-full object-cover transition-opacity" />
            </div>
            <div className="aspect-video bg-gray-800 rounded-lg border border-gray-700 flex items-center justify-center">
                <img src={ads2} alt="Social" className="w-full h-full object-cover transition-opacity" />
            </div>
            <div className="aspect-video bg-gray-800 rounded-lg border border-gray-700 flex items-center justify-center">
                <img src={ads3} alt="Social" className="w-full h-full object-cover transition-opacity" />
            </div>
            <div className="aspect-video bg-gray-800 rounded-lg border border-gray-700 flex items-center justify-center">
                <img src={ads4} alt="Social" className="w-full h-full object-cover transition-opacity" />
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
                I’m Sanjay Sondhiya — a visual storyteller obsessed with clarity. With extensive experience in Art Direction, I combine bold typography, color theory, and market logic to craft distinctive designs that resonate.
              </p>
              <p className="text-gray-300 leading-relaxed">
                I move beyond surface-level aesthetics to build visual systems that solve problems and communicate value instantly. My work doesn't just decorate a brand; it defines it, ensuring your business leaves a memorable mark in a crowded marketplace.
              </p>
            </div>
            <div className="w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-red-900/50 shadow-2xl">
               <img src={aboutImage} alt="About Portrait" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Footer / Let's Talk */}
      <footer id="contact" className="bg-black pt-20 pb-10 border-t border-gray-900">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-green-500 text-4xl md:text-6xl font-bold mb-4">Let's Talk</h2>
          {/* Clickable Email */}

          <div className='flex flex-col md:flex-row items-center justify-center gap-6'>
  {/* Clickable Email */}
  <a 
    href="mailto:example@gmail.com" 
    className="flex items-center gap-2 text-white text-xl md:text-2xl mb-8 hover:text-gray-300 transition-colors"
  >
    <Mail className="w-3 h-3 md:w-7 md:h-7" />
    <span>example@gmail.com</span>
  </a>

  {/* Clickable Mobile */}
  <a 
    href="tel:+918090564901" 
    className="flex items-center gap-2 text-white text-xl md:text-2xl mb-8 hover:text-gray-300 transition-colors"
  >
    <Phone className="w-3 h-3 md:w-6 md:h-6" />
    <span>+91 8090564901</span>
  </a>
</div>

          <div className="max-w-md mx-auto mt-3 mb-7 rounded-lg shadow-md">
      
      <form onSubmit={handleSubmit} className="space-y-4">
        
        {/* Name */}
        <div>
          <label className="block text-sm text-left font-medium text-gray-200">Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="mt-1 block w-full rounded-md border border-gray-300 p-2 focus:border-blue-500 focus:ring-blue-500"
          />
        </div>

        {/* Contact Number */}
        <div>
          <label className="block text-sm font-medium text-gray-200 text-left">Contact Number</label>
          <input
            type="tel"
            name="contact_number"
            value={formData.contact_number}
            onChange={handleChange}
            required
            className="mt-1 block w-full rounded-md border border-gray-300 p-2"
          />
        </div>

        {/* Email */}
        <div>
          <label className="block text-sm font-medium text-gray-200 text-left">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="mt-1 block w-full rounded-md border border-gray-300 p-2"
          />
        </div>

        {/* Description */}
        <div>
          <label className="block text-sm font-medium text-gray-200 text-left">Description</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            rows={3}
            className="mt-1 block w-full rounded-md border border-gray-300 p-2"
          ></textarea>
        </div>

        <div className="relative inline-block">
          <div className="absolute inset-0 m-auto w-48 h-12 bg-gradient-to-r from-red-500 via-yellow-400 to-green-500 rounded-full blur-xl opacity-40 animate-pulse"></div>
          <button
            type="submit"
            className="relative bg-white m-auto w-48 text-black font-semibold py-2 px-10 rounded-lg text-lg transition-transform transform hover:scale-105 duration-300 shadow-md hover:shadow-lg"
          >
            {status === 'Submitting...' ? 'Sending...' : 'Submit'}
          </button>
        </div>

        {status && <p className="text-center text-sm mt-4 text-green-600">{status}</p>}
      </form>
    </div>
          
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

const ProjectCard = ({ title, img, category, color }: {title: string, img: string, category: string, color: string}) => (
  <div className={`group relative w-full rounded-lg overflow-hidden border border-gray-800 ${color}`}>
    
    {/* 1. IMAGE (Natural Height) */}
    {/* Removed 'absolute'. Added 'block w-full h-auto'. 
        This lets the image dictate the height of the card. */}
    <img 
        src={img} 
        alt={title} 
        className="block w-full h-auto group-hover:scale-110 transition-transform duration-500"
    />

    {/* 2. OVERLAY & CONTENT (Sit on top) */}
    {/* These remain absolute so they float over the image */}
    <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-all duration-300"></div>

    <div className="absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-black via-black/70 to-transparent">
        <h3 className="text-xl font-bold text-white mb-1 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
            {title}
        </h3>
        <p className="text-green-400 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
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