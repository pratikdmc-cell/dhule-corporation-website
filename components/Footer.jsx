import Link from 'next/link';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaFacebook, FaTwitter } from 'react-icons/fa';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-b from-dark to-gray-900 text-white">
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* About */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-secondary">About DMC</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Dhule Municipal Corporation committed to providing efficient e-governance services and sustainable urban development for all citizens.
            </p>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-secondary">Contact Info</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-center gap-2">
                <FaPhone className="text-secondary flex-shrink-0" />
                <p className="text-gray-400">+91-XXXX-XXXX-XX</p>
              </div>
              <div className="flex items-center gap-2">
                <FaEnvelope className="text-secondary flex-shrink-0" />
                <p className="text-gray-400">info@dhulecorp.in</p>
              </div>
              <div className="flex items-center gap-2">
                <FaMapMarkerAlt className="text-secondary flex-shrink-0" />
                <p className="text-gray-400">Dhule, Maharashtra</p>
              </div>
            </div>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-secondary">Follow Us</h3>
            <div className="flex gap-4">
              <a href="#" className="text-gray-400 hover:text-secondary transition-colors text-2xl">
                <FaFacebook />
              </a>
              <a href="#" className="text-gray-400 hover:text-secondary transition-colors text-2xl">
                <FaTwitter />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-gray-700 pt-8 text-center text-gray-400 text-sm">
          <p>&copy; {currentYear} Dhule Municipal Corporation. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
