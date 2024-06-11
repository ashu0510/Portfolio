// import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto flex flex-col items-center">
        <div className="flex space-x-4 mb-4">
          <a href="https://example.com/twitter" className="text-gray-300 hover:text-white transition duration-300">
            Twitter
          </a>
          <a href="https://example.com/facebook" className="text-gray-300 hover:text-white transition duration-300">
            Facebook
          </a>
          <a href="https://example.com/instagram" className="text-gray-300 hover:text-white transition duration-300">
            Instagram
          </a>
          <a href="mailto:contact@example.com" className="text-gray-300 hover:text-white transition duration-300">
            Email Us
          </a>
        </div>
        <p className="text-center text-gray-400 text-sm">© 2024 Your Company. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
