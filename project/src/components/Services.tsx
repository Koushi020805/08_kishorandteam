import React from 'react';
import { Zap, Palette, Settings, Shield, Wrench, Sparkles } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <Zap className="h-8 w-8" />,
      title: 'Performance Tuning',
      description: 'Engine modifications, ECU tuning, and performance upgrades to maximize your vehicle\'s potential.',
      features: ['Engine Remapping', 'Turbo Upgrades', 'Exhaust Systems', 'Cold Air Intakes']
    },
    {
      icon: <Palette className="h-8 w-8" />,
      title: 'Custom Paint & Wraps',
      description: 'Professional paint jobs, vinyl wraps, and protective coatings with unlimited color options.',
      features: ['Custom Paint Jobs', 'Vinyl Wraps', 'PPF Installation', 'Ceramic Coatings']
    },
    {
      icon: <Settings className="h-8 w-8" />,
      title: 'Suspension & Handling',
      description: 'Suspension modifications, lowering kits, and handling improvements for better performance.',
      features: ['Coilover Systems', 'Air Suspension', 'Sway Bars', 'Strut Tower Braces']
    },
    {
      icon: <Sparkles className="h-8 w-8" />,
      title: 'Interior Customization',
      description: 'Complete interior transformations with premium materials and cutting-edge technology.',
      features: ['Custom Upholstery', 'Audio Systems', 'Dashboard Wrapping', 'LED Lighting']
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: 'Body Kits & Aero',
      description: 'Aerodynamic enhancements and body modifications for improved performance and aesthetics.',
      features: ['Front Splitters', 'Rear Wings', 'Side Skirts', 'Diffusers']
    },
    {
      icon: <Wrench className="h-8 w-8" />,
      title: 'Wheels & Brakes',
      description: 'Premium wheel fitments and brake system upgrades for style and stopping power.',
      features: ['Custom Wheels', 'Brake Calipers', 'Performance Rotors', 'Wheel Spacers']
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            Our <span className="text-red-500">Services</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            From subtle enhancements to complete transformations, we offer comprehensive 
            automotive customization services tailored to your vision and budget.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-gray-900 rounded-xl p-8 hover:bg-gray-850 transition-all duration-300 hover:scale-105 hover:shadow-xl border border-gray-700 hover:border-red-500/30"
            >
              <div className="bg-red-600/10 p-3 rounded-lg w-fit mb-6 group-hover:bg-red-600/20 transition-colors">
                <div className="text-red-400">
                  {service.icon}
                </div>
              </div>
              
              <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
              <p className="text-gray-300 mb-6 leading-relaxed">{service.description}</p>
              
              <ul className="space-y-2">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-gray-400">
                    <div className="w-1.5 h-1.5 bg-red-500 rounded-full mr-3"></div>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105">
            Get Free Consultation
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;