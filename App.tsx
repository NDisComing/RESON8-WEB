import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Songs from './components/Songs';
import Footer from './components/Footer';
import ChatWidget from './components/ChatWidget';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-white text-gray-900 selection:bg-gray-900 selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Songs />
        {/* Placeholder sections for Podcasts/Merch to ensure links work smoothly */}
        <section id="podcasts" className="py-24 bg-white text-center">
            <h2 className="text-3xl font-serif font-bold mb-4 opacity-50">Podcasts Coming Soon</h2>
        </section>
        <section id="merch" className="py-24 bg-gray-50 text-center">
             <h2 className="text-3xl font-serif font-bold mb-4 opacity-50">Merch Coming Soon</h2>
        </section>
      </main>
      <Footer />
      <ChatWidget />
    </div>
  );
};

export default App;