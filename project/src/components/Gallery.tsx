import React, { useState } from 'react';
import { ExternalLink } from 'lucide-react';

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  
  const categories = ['All', 'Performance', 'Paint & Wraps', 'Interior', 'Wheels'];
  
  const projects = [
    {
      id: 1,
      title: 'BMW M3 Performance Build',
      category: 'Performance',
      image: 'https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg',
      description: 'Complete performance overhaul with turbo upgrades and custom exhaust'
    },
    {
      id: 2,
      title: 'McLaren Custom Wrap',
      category: 'Paint & Wraps',
      image: 'https://images.pexels.com/photos/3802508/pexels-photo-3802508.jpeg',
      description: 'Stunning chrome wrap with protective coating application'
    },
    {
      id: 3,
      title: 'Porsche Interior Transformation',
      category: 'Interior',
      image: 'https://images.pexels.com/photos/1592384/pexels-photo-1592384.jpeg',
      description: 'Premium leather interior with custom stitching and ambient lighting'
    },
    {
      id: 4,
      title: 'Lamborghini Wheel Upgrade',
      category: 'Wheels',
      image: 'https://images.pexels.com/photos/3802505/pexels-photo-3802505.jpeg',
      description: 'Custom forged wheels with performance brake system upgrade'
    },
    {
      id: 5,
      title: 'Ferrari Engine Bay Detail',
      category: 'Performance',
      image: 'https://images.pexels.com/photos/1545506/pexels-photo-1545506.jpeg',
      description: 'Engine bay beautification with performance cooling upgrades'
    },
    {
      id: 6,
      title: 'Audi Custom Paint Job',
      category: 'Paint & Wraps',
      image: 'https://images.pexels.com/photos/3729464/pexels-photo-3729464.jpeg',
      description: 'Multi-layer custom paint with ceramic coating protection'
    }
  ];

  const filteredProjects = selectedCategory === 'All' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  return (
    <section id="gallery" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            Our <span className="text-red-500">Portfolio</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Witness the transformation of dreams into reality. Each project represents 
            our commitment to excellence and attention to detail.
          </p>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-red-600 text-white'
                    : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group relative bg-gray-800 rounded-xl overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <ExternalLink className="h-6 w-6 text-white bg-red-600 p-1 rounded" />
                </div>
              </div>
              
              <div className="p-6">
                <span className="text-red-400 text-sm font-medium">{project.category}</span>
                <h3 className="text-xl font-bold text-white mt-2 mb-3">{project.title}</h3>
                <p className="text-gray-300 leading-relaxed">{project.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="border-2 border-red-500 hover:bg-red-500 text-red-500 hover:text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300">
            View All Projects
          </button>
        </div>
      </div>
    </section>
  );
};

export default Gallery;