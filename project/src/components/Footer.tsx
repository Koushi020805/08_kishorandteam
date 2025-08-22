import React from 'react';
import { Wrench, Facebook, Instagram, Twitter, Youtube } from 'lucide-react';

const Footer = () => {
  const socialLinks = [
    { icon: <Facebook className="h-5 w-5" />, href: '#' },
    { icon: <Instagram className="h-5 w-5" />, href: '#' },
    { icon: <Twitter className="h-5 w-5" />, href: '#' },
    { icon: <Youtube className="h-5 w-5" />, href: '#' }
  ];

  const quickLinks = [
    'About Us',
    'Services',
    'Portfolio',
    'Contact',
    'Blog',
    'Careers'
  ];

  const services = [
    'Performance Tuning',
    'Custom Paint',
    'Interior Design',
    'Suspension Work',
    'Audio Systems',
    'Body Kits'
  ];

  return (
    <footer className="bg-gray-900 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-4 gap-12">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-6">
              <div className="bg-red-600 p-2 rounded-lg">
                <Wrench className="h-6 w-6 text-white" />
              </div>
              <span className="text-2xl font-bold text-white">AutoCustom Pro</span>
            </div>
            
            <p className="text-gray-300 mb-8 max-w-md leading-relaxed">
              Transforming automotive dreams into reality since 2012. Premium customization 
              services with unmatched quality and attention to detail.
            </p>
            
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="bg-gray-800 hover:bg-red-600 text-gray-400 hover:text-white p-3 rounded-lg transition-all duration-300"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-6">Quick Links</h3>
            <ul className="space-y-4">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href="#"
                    className="text-gray-300 hover:text-red-400 transition-colors duration-200"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-6">Services</h3>
            <ul className="space-y-4">
              {services.map((service, index) => (
                <li key={index}>
                  <a
                    href="#"
                    className="text-gray-300 hover:text-red-400 transition-colors duration-200"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 pt-8 mt-16">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2024 AutoCustom Pro. All rights reserved.
            </p>
            
            <div className="flex space-x-8 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-red-400 text-sm transition-colors duration-200">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-red-400 text-sm transition-colors duration-200">
                Terms of Service
              </a>
              <a href="#" className="text-gray-400 hover:text-red-400 text-sm transition-colors duration-200">
                Warranty
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;