import React from 'react';
import { Phone, Mail, MapPin, Clock, Send } from 'lucide-react';

const Contact = () => {
  const contactInfo = [
    {
      icon: <Phone className="h-6 w-6" />,
      title: 'Phone',
      details: ['+1 (555) 123-4567', '+1 (555) 987-6543']
    },
    {
      icon: <Mail className="h-6 w-6" />,
      title: 'Email',
      details: ['info@autocustompro.com', 'support@autocustompro.com']
    },
    {
      icon: <MapPin className="h-6 w-6" />,
      title: 'Location',
      details: ['123 Performance Drive', 'Los Angeles, CA 90210']
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: 'Hours',
      details: ['Mon-Fri: 8:00 AM - 6:00 PM', 'Sat: 9:00 AM - 4:00 PM']
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            Get In <span className="text-red-500">Touch</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Ready to transform your vehicle? Contact us today for a free consultation 
            and let's discuss your automotive dreams.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Information */}
          <div className="lg:col-span-1 space-y-8">
            {contactInfo.map((info, index) => (
              <div key={index} className="flex items-start space-x-4">
                <div className="bg-red-600/10 p-3 rounded-lg">
                  <div className="text-red-400">
                    {info.icon}
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">{info.title}</h3>
                  {info.details.map((detail, idx) => (
                    <p key={idx} className="text-gray-300">{detail}</p>
                  ))}
                </div>
              </div>
            ))}

            <div className="bg-gray-800 rounded-xl p-6 mt-8">
              <h3 className="text-xl font-bold text-white mb-4">Why Choose Us?</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-center">
                  <div className="w-1.5 h-1.5 bg-red-500 rounded-full mr-3"></div>
                  Free initial consultation
                </li>
                <li className="flex items-center">
                  <div className="w-1.5 h-1.5 bg-red-500 rounded-full mr-3"></div>
                  Transparent pricing
                </li>
                <li className="flex items-center">
                  <div className="w-1.5 h-1.5 bg-red-500 rounded-full mr-3"></div>
                  Expert craftsmanship
                </li>
                <li className="flex items-center">
                  <div className="w-1.5 h-1.5 bg-red-500 rounded-full mr-3"></div>
                  Comprehensive warranty
                </li>
              </ul>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <form className="bg-gray-800 rounded-xl p-8 space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    First Name
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-red-500 focus:ring-red-500/20 focus:ring-2 transition-all duration-200"
                    placeholder="John"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Last Name
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-red-500 focus:ring-red-500/20 focus:ring-2 transition-all duration-200"
                    placeholder="Doe"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-red-500 focus:ring-red-500/20 focus:ring-2 transition-all duration-200"
                    placeholder="john@example.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Phone
                  </label>
                  <input
                    type="tel"
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-red-500 focus:ring-red-500/20 focus:ring-2 transition-all duration-200"
                    placeholder="(555) 123-4567"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Vehicle Information
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-red-500 focus:ring-red-500/20 focus:ring-2 transition-all duration-200"
                  placeholder="Year, Make, Model (e.g., 2020 BMW M3)"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Project Description
                </label>
                <textarea
                  rows={5}
                  className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-red-500 focus:ring-red-500/20 focus:ring-2 transition-all duration-200 resize-none"
                  placeholder="Tell us about your customization goals, budget, and timeline..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-red-600 hover:bg-red-700 text-white py-4 rounded-lg font-semibold flex items-center justify-center group transition-all duration-300 transform hover:scale-105"
              >
                Send Message
                <Send className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;