import React from 'react';
import { MessageCircle, Phone } from 'lucide-react';

const QuickContact = () => {
  const phoneNumber = '+49123456789';
  const whatsappMessage = encodeURIComponent(
    'Hallo! Ich interessiere mich für Ihre Reinigungsdienstleistungen. Können Sie mir ein Angebot machen?'
  );

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col space-y-3">
      {/* WhatsApp Button */}
      <a
        href={`https://wa.me/${phoneNumber.replace(/\D/g, '')}?text=${whatsappMessage}`}
        target="_blank"
        rel="noopener noreferrer"
        className="bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 group"
        aria-label="WhatsApp kontaktieren"
      >
        <MessageCircle className="w-6 h-6" />
        <div className="absolute right-full mr-3 top-1/2 transform -translate-y-1/2 bg-gray-900 text-white px-3 py-1 rounded-lg text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200">
          WhatsApp
        </div>
      </a>

      {/* Phone Button */}
      <a
        href={`tel:${phoneNumber}`}
        className="bg-primary hover:bg-primary-dark text-white p-4 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 group"
        aria-label="Telefon"
      >
        <Phone className="w-6 h-6" />
        <div className="absolute right-full mr-3 top-1/2 transform -translate-y-1/2 bg-gray-900 text-white px-3 py-1 rounded-lg text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200">
          Anrufen
        </div>
      </a>
    </div>
  );
};

export default QuickContact;