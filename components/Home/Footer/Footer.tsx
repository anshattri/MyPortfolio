import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-[#0f0715] text-white py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Footer Content */}
        <div className="flex flex-col md:flex-row justify-between items-start">
          {/* Quick Links */}
          <div className="mb-6 md:mb-0">
            <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="block text-gray-400 hover:text-blue-400 transition-colors duration-300 text-sm"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block text-gray-400 hover:text-blue-400 transition-colors duration-300 text-sm"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block text-gray-400 hover:text-blue-400 transition-colors duration-300 text-sm"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block text-gray-400 hover:text-blue-400 transition-colors duration-300 text-sm"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Follow Us */}
          <div className="text-center md:text-right">
            <h3 className="text-lg font-semibold mb-3 my-10">Follow Us</h3>
            <div className="flex space-x-4 justify-center md:justify-end">
              {[
                { Icon: FaFacebookF, link: 'https://www.facebook.com/' },
                { Icon: FaTwitter, link: 'https://x.com/?lang=en&mx=2' },
                { Icon: FaInstagram, link: 'https://www.instagram.com/' },
                { Icon: FaLinkedinIn, link: 'https://www.linkedin.com/feed/' },
              ].map(({ Icon, link }, index) => (
                <a
                  key={index}
                  href={link}
                  className="w-10 h-10 flex items-center justify-center rounded-full bg-gradient-to-r from-blue-500 to-blue-800 hover:from-blue-600 hover:to-blue-700 transition-all duration-300"
                >
                  <Icon className="text-white text-lg" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Divider and Copyright */}
        <div className="border-t border-gray-700 mt-6 pt-4 text-center">
          <p className="text-sm text-gray-400">
            © {new Date().getFullYear()} YourCompany. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;