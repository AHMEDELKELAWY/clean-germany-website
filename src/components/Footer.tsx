import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-neutral-dark text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-primary to-accent rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">RC</span>
              </div>
              <span className="text-xl font-semibold">ReinigungsCompany</span>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              Ihr vertrauensvoller Partner für professionelle Reinigungs­dienst­leistungen 
              in Deutschland. Saubere Räume, zufriedene Kunden.
            </p>
            <div className="flex space-x-3">
              <a
                href="tel:+49123456789"
                className="text-gray-300 hover:text-accent transition-colors duration-200"
              >
                <Phone className="w-5 h-5" />
              </a>
              <a
                href="mailto:info@reinigungscompany.de"
                className="text-gray-300 hover:text-accent transition-colors duration-200"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Schnellzugriff</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/"
                  className="text-gray-300 hover:text-white transition-colors duration-200 text-sm"
                >
                  Startseite
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="text-gray-300 hover:text-white transition-colors duration-200 text-sm"
                >
                  Leistungen
                </Link>
              </li>
              <li>
                <Link
                  to="/quote"
                  className="text-gray-300 hover:text-white transition-colors duration-200 text-sm"
                >
                  Angebot anfordern
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-gray-300 hover:text-white transition-colors duration-200 text-sm"
                >
                  Kontakt
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Leistungen</h3>
            <ul className="space-y-2">
              <li className="text-gray-300 text-sm">Hausreinigung</li>
              <li className="text-gray-300 text-sm">Büroreinigung</li>
              <li className="text-gray-300 text-sm">Grundreinigung</li>
              <li className="text-gray-300 text-sm">Fensterreinigung</li>
              <li className="text-gray-300 text-sm">Teppichreinigung</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Kontakt</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="w-4 h-4 mt-0.5 text-accent flex-shrink-0" />
                <div className="text-gray-300 text-sm">
                  <p>Musterstraße 123</p>
                  <p>12345 Berlin, Deutschland</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-accent flex-shrink-0" />
                <a
                  href="tel:+49123456789"
                  className="text-gray-300 hover:text-white transition-colors text-sm"
                >
                  +49 123 456 789
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-accent flex-shrink-0" />
                <a
                  href="mailto:info@reinigungscompany.de"
                  className="text-gray-300 hover:text-white transition-colors text-sm"
                >
                  info@reinigungscompany.de
                </a>
              </div>
              <div className="flex items-start space-x-3">
                <Clock className="w-4 h-4 mt-0.5 text-accent flex-shrink-0" />
                <div className="text-gray-300 text-sm">
                  <p>Mo-Fr: 8:00 - 18:00</p>
                  <p>Sa: 9:00 - 16:00</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © 2024 ReinigungsCompany. Alle Rechte vorbehalten.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link
              to="/privacy"
              className="text-gray-400 hover:text-white transition-colors text-sm"
            >
              Datenschutz
            </Link>
            <Link
              to="/terms"
              className="text-gray-400 hover:text-white transition-colors text-sm"
            >
              AGB
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;