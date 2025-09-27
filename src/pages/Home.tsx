import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { CheckCircle, Star, Shield, Clock, Sparkles, Home, Building } from 'lucide-react';
import heroImage from '@/assets/hero-cleaning.jpg';
import homeCleaningImage from '@/assets/home-cleaning.jpg';
import officeCleaningImage from '@/assets/office-cleaning.jpg';
import deepCleaningImage from '@/assets/deep-cleaning.jpg';

const HomePage = () => {
  const services = [
    {
      title: 'Hausreinigung',
      description: 'Professionelle Reinigung Ihres Zuhauses mit höchster Sorgfalt und Qualität.',
      image: homeCleaningImage,
      icon: Home,
    },
    {
      title: 'Büroreinigung',
      description: 'Saubere und hygienische Arbeitsplätze für ein produktives Arbeitsumfeld.',
      image: officeCleaningImage,
      icon: Building,
    },
    {
      title: 'Grundreinigung',
      description: 'Intensive Tiefenreinigung für gründlich saubere und hygienische Räume.',
      image: deepCleaningImage,
      icon: Sparkles,
    },
  ];

  const benefits = [
    {
      icon: Shield,
      title: 'Versichert & Zertifiziert',
      description: 'Vollständig versichert mit ISO-Zertifizierung für Ihre Sicherheit.',
    },
    {
      icon: Clock,
      title: 'Pünktlich & Zuverlässig',
      description: 'Termingerechte Ausführung und flexible Zeiten nach Ihren Wünschen.',
    },
    {
      icon: CheckCircle,
      title: 'Qualitätsgarantie',
      description: '100% Zufriedenheitsgarantie oder kostenlose Nachbearbeitung.',
    },
  ];

  const testimonials = [
    {
      name: 'Anna Mueller',
      text: 'Ausgezeichneter Service! Das Team ist sehr professionell und gründlich. Meine Wohnung war noch nie so sauber.',
      rating: 5,
    },
    {
      name: 'Thomas Schmidt',
      text: 'Zuverlässige Büroreinigung seit 2 Jahren. Immer pünktlich und das Ergebnis ist top!',
      rating: 5,
    },
    {
      name: 'Maria Weber',
      text: 'Sehr freundliches Personal und faire Preise. Die Grundreinigung war perfekt!',
      rating: 5,
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center">
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="Professionelle Reinigungsdienstleistungen"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-primary/40"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
          <div className="max-w-3xl">
            <h1 className="text-hero mb-6">
              Professionelle Reinigung für Ihr Zuhause und Büro
            </h1>
            <p className="text-subtitle mb-8 text-white/90">
              Vertrauen Sie auf über 10 Jahre Erfahrung in der Reinigungsbranche. 
              Wir sorgen für hygienische Sauberkeit und ein gesundes Raumklima.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/quote">
                <Button size="lg" className="btn-hero">
                  Kostenloses Angebot erhalten
                </Button>
              </Link>
              <Link to="/services">
                <Button size="lg" variant="outline" className="btn-outline border-white text-white hover:bg-white hover:text-primary">
                  Unsere Leistungen
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 section-gradient">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-section-title mb-4">Unsere Leistungen</h2>
            <p className="text-subtitle max-w-2xl mx-auto">
              Von der regelmäßigen Hausreinigung bis zur professionellen Büroreinigung – 
              wir bieten maßgeschneiderte Lösungen für jeden Bedarf.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <Card key={index} className="card-service group cursor-pointer">
                  <CardContent className="p-0">
                    <div className="relative overflow-hidden rounded-t-xl">
                      <img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute top-4 left-4 bg-primary text-white p-2 rounded-lg">
                        <IconComponent className="w-6 h-6" />
                      </div>
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                        {service.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {service.description}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          <div className="text-center mt-12">
            <Link to="/services">
              <Button className="btn-secondary">
                Alle Leistungen ansehen
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-section-title mb-4">Warum ReinigungsCompany?</h2>
            <p className="text-subtitle max-w-2xl mx-auto">
              Ihre Zufriedenheit steht bei uns an erster Stelle. 
              Professionelle Ausrüstung, geschultes Personal und höchste Qualitätsstandards.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => {
              const IconComponent = benefit.icon;
              return (
                <div key={index} className="text-center group">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/20 transition-colors">
                    <IconComponent className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{benefit.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{benefit.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 section-gradient">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-section-title mb-4">Kundenbewertungen</h2>
            <p className="text-subtitle max-w-2xl mx-auto">
              Überzeugen Sie sich von der Qualität unserer Arbeit durch die Erfahrungen 
              unserer zufriedenen Kunden.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="card-elevated">
                <CardContent className="p-6">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-4 italic">"{testimonial.text}"</p>
                  <p className="font-semibold">- {testimonial.name}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 hero-gradient">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-3xl mx-auto text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Bereit für professionelle Sauberkeit?
            </h2>
            <p className="text-xl mb-8 text-white/90">
              Kontaktieren Sie uns noch heute für ein kostenloses und unverbindliches Angebot. 
              Wir freuen uns darauf, Ihnen zu helfen!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/quote">
                <Button size="lg" className="bg-white text-primary hover:bg-gray-100">
                  Jetzt Angebot anfordern
                </Button>
              </Link>
              <Link to="/contact">
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary">
                  Kontakt aufnehmen
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;