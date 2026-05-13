import React from 'react';
import { Target, Lightbulb, ShieldCheck, Users } from 'lucide-react';

const About = () => {
  return (
    <div className="flex flex-col gap-20 pb-20">
      {/* Hero Section */}
      <section className="bg-slate-50 py-20 border-b">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-secondary-dark mb-6">À Propos de Sora Resto Lounge</h1>
          <p className="text-lg text-secondary max-w-3xl mx-auto leading-relaxed">
            Votre destination gastronomique d'exception au cœur de Douala, alliant saveurs d'Asie et produits du terroir camerounais 
            dans une ambiance raffinée et vibrante.
          </p>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl font-heading font-bold text-primary">Notre Passion</h2>
            <p className="text-secondary leading-relaxed">
              Chez Sora Resto Lounge, nous croyons que la cuisine est un voyage. Notre mission est de vous offrir une expérience culinaire immersive, 
              où la finesse des sushis japonais et la richesse des plats chinois rencontrent l'authenticité de la gastronomie camerounaise. 
              Chaque plat est une création unique, préparée avec des ingrédients frais et une passion sans compromis pour l'excellence.
            </p>
            <div className="grid grid-cols-2 gap-6 pt-4">
              <div className="space-y-2">
                <Target className="text-primary h-8 w-8" />
                <h4 className="font-bold">Innovation</h4>
                <p className="text-xs text-secondary">Réinventer les classiques pour surprendre vos papilles à chaque visite.</p>
              </div>
              <div className="space-y-2">
                <ShieldCheck className="text-primary h-8 w-8" />
                <h4 className="font-bold">Qualité</h4>
                <p className="text-xs text-secondary">Une hygiène irréprochable et des produits rigoureusement sélectionnés.</p>
              </div>
            </div>
          </div>
          <div className="bg-primary/5 rounded-3xl p-8 border-2 border-primary/10 border-dashed">
            <h3 className="text-xl font-bold mb-6 text-secondary-dark">Nos Univers</h3>
            <ul className="grid grid-cols-1 gap-3">
              {[
                "Sushi & Sashimi Bar (Premium)",
                "Cuisine Japonaise Traditionnelle",
                "Spécialités Wok & Cuisine Chinoise",
                "Gastronomie Camerounaise Revisitée",
                "Mixologie & Cocktails Signatures",
                "Tea Room & Infusions Artisanales",
                "Soirées Lounge avec DJ Live",
                "Service Traiteur Événementiel"
              ].map(item => (
                <li key={item} className="flex items-center text-sm text-secondary">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="container mx-auto px-4 mb-10 text-center bg-primary p-16 rounded-[2rem] text-white">
        <h2 className="text-3xl font-bold mb-6">Un événement à célébrer ?</h2>
        <p className="text-primary-light mb-8 max-w-2xl mx-auto">
          Qu'il s'agisse d'un dîner romantique, d'un déjeuner d'affaires ou d'une soirée privée, 
          notre équipe conçoit pour vous un moment d'exception.
        </p>
        <button className="bg-white text-primary px-8 py-3 rounded-full font-bold hover:bg-slate-100 transition-colors">
          Réserver votre moment
        </button>
      </section>
    </div>
  );
};

export default About;
