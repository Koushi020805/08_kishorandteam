import React from 'react';
import { ArrowRight, Star } from 'lucide-react';

const Hero = () => {
  const scrollToServices = () => {
    const element = document.getElementById('services');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.pexels.com/photos/3802510/pexels-photo-3802510.jpeg"
          alt="Custom Car"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900/80 via-gray-900/60 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center lg:text-left">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="flex items-center justify-center lg:justify-start mb-6">
              <div className="flex items-center space-x-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <span className="text-gray-300 ml-3">Rated #1 in Custom Auto Work</span>
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              Transform Your
              <span className="block text-red-500">Dream Car</span>
            </h1>
            
            <p className="text-xl text-gray-300 mb-8 max-w-2xl">
              Premium automotive customization services. From performance upgrades to aesthetic enhancements, 
              we bring your vision to life with precision and passion.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={scrollToServices}
                className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-lg font-semibold flex items-center justify-center group transition-all duration-300 transform hover:scale-105"
              >
                Explore Services
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </button>
              
              <button className="border-2 border-gray-300 hover:border-red-500 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 hover:bg-red-500/10">
                View Portfolio
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-gray-400 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;