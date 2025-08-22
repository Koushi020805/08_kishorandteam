import React from 'react';
import { Award, Users, Clock, Target } from 'lucide-react';

const About = () => {
  const stats = [
    { icon: <Award className="h-8 w-8" />, number: '500+', label: 'Projects Completed' },
    { icon: <Users className="h-8 w-8" />, number: '15+', label: 'Expert Technicians' },
    { icon: <Clock className="h-8 w-8" />, number: '12+', label: 'Years Experience' },
    { icon: <Target className="h-8 w-8" />, number: '100%', label: 'Customer Satisfaction' }
  ];

  return (
    <section id="about" className="py-20 bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              About <span className="text-red-500">AutoCustom Pro</span>
            </h2>
            
            <p className="text-xl text-gray-300 mb-6 leading-relaxed">
              Founded in 2012, AutoCustom Pro has established itself as the premier destination 
              for automotive customization and performance enhancement. Our passion for automotive 
              excellence drives us to deliver unparalleled craftsmanship and innovation.
            </p>
            
            <p className="text-lg text-gray-400 mb-8 leading-relaxed">
              From subtle modifications to complete ground-up builds, our team of certified 
              technicians brings decades of combined experience to every project. We work with 
              the industry's leading brands and cutting-edge technology to ensure your vision 
              becomes reality.
            </p>

            <div className="space-y-4">
              {[
                'Certified technicians with specialized training',
                'State-of-the-art facility with advanced equipment',
                'Comprehensive warranty on all work performed',
                'Personalized consultation and project management'
              ].map((item, index) => (
                <div key={index} className="flex items-center">
                  <div className="w-2 h-2 bg-red-500 rounded-full mr-4"></div>
                  <span className="text-gray-300">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-8">
            <div className="bg-gray-900 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-white mb-6">Our Mission</h3>
              <p className="text-gray-300 leading-relaxed">
                To transform automotive dreams into reality through exceptional craftsmanship, 
                innovative solutions, and unwavering commitment to quality. We believe every 
                vehicle has the potential to be extraordinary.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <div key={index} className="bg-gray-900 rounded-xl p-6 text-center">
                  <div className="text-red-400 flex justify-center mb-3">
                    {stat.icon}
                  </div>
                  <div className="text-3xl font-bold text-white mb-2">{stat.number}</div>
                  <div className="text-gray-400 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;