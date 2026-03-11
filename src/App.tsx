/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { 
  CheckCircle, 
  Play, 
  Users, 
  Star, 
  ArrowRight, 
  Zap, 
  ShieldCheck, 
  Clock,
  BookOpen,
  Award,
  ChevronDown
} from 'lucide-react';

const Navbar = () => (
  <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-black/5">
    <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
      <div className="flex items-center gap-2">
        <div className="w-10 h-10 bg-black rounded-xl flex items-center justify-center">
          <Zap className="text-white w-6 h-6" />
        </div>
        <span className="font-sans font-bold text-xl tracking-tight">MasterClass Pro</span>
      </div>
      <div className="hidden md:flex items-center gap-8 text-sm font-medium text-black/60">
        <a href="#beneficios" className="hover:text-black transition-colors">Benefícios</a>
        <a href="#curriculo" className="hover:text-black transition-colors">Currículo</a>
        <a href="#depoimentos" className="hover:text-black transition-colors">Depoimentos</a>
        <a href="#preco" className="px-5 py-2.5 bg-black text-white rounded-full hover:bg-black/80 transition-all">Garantir Vaga</a>
      </div>
    </div>
  </nav>
);

const Hero = () => (
  <section className="pt-32 pb-20 px-6 overflow-hidden">
    <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
      <motion.div 
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 text-emerald-700 text-xs font-bold uppercase tracking-wider mb-6">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          Inscrições Abertas - Vagas Limitadas
        </div>
        <h1 className="font-sans text-5xl md:text-7xl font-bold leading-[1.1] tracking-tight text-black mb-8">
          Domine o <span className="text-emerald-600 italic">Próximo Nível</span> da sua Carreira.
        </h1>
        <p className="text-lg md:text-xl text-black/60 mb-10 max-w-xl leading-relaxed">
          O método passo a passo para você sair do absoluto zero e se tornar um especialista reconhecido no mercado em apenas 12 semanas.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <a href="#preco" className="px-8 py-4 bg-black text-white rounded-2xl font-bold text-lg flex items-center justify-center gap-2 hover:scale-105 transition-transform shadow-xl shadow-black/10">
            Quero Começar Agora <ArrowRight className="w-5 h-5" />
          </a>
          <button className="px-8 py-4 bg-white border border-black/10 text-black rounded-2xl font-bold text-lg flex items-center justify-center gap-2 hover:bg-black/5 transition-all">
            <Play className="w-5 h-5 fill-black" /> Ver Trailer
          </button>
        </div>
        <div className="mt-12 flex items-center gap-4">
          <div className="flex -space-x-3">
            {[1,2,3,4].map(i => (
              <img 
                key={i}
                src={`https://picsum.photos/seed/user${i}/100/100`} 
                alt="Aluno" 
                className="w-10 h-10 rounded-full border-2 border-white"
                referrerPolicy="no-referrer"
              />
            ))}
          </div>
          <div className="text-sm">
            <div className="flex items-center gap-1 text-amber-500">
              {[1,2,3,4,5].map(i => <Star key={i} className="w-4 h-4 fill-current" />)}
            </div>
            <p className="text-black/60 font-medium">+2.500 alunos satisfeitos</p>
          </div>
        </div>
      </motion.div>
      
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="relative"
      >
        <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl shadow-black/20 border border-black/5">
          <img 
            src="https://picsum.photos/seed/course/1200/800" 
            alt="Course Preview" 
            className="w-full aspect-video object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-8">
            <div className="text-white">
              <p className="text-sm font-medium opacity-80 mb-1">Aula em destaque:</p>
              <h3 className="text-xl font-bold">Módulo 04: Estratégias Avançadas de Escala</h3>
            </div>
          </div>
        </div>
        {/* Decorative elements */}
        <div className="absolute -top-6 -right-6 w-32 h-32 bg-emerald-500/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-indigo-500/10 rounded-full blur-3xl"></div>
      </motion.div>
    </div>
  </section>
);

const Features = () => {
  const features = [
    {
      icon: <BookOpen className="w-6 h-6" />,
      title: "Conteúdo Prático",
      desc: "Aulas direto ao ponto, sem enrolação, focadas em resultados reais."
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Comunidade VIP",
      desc: "Acesso ao nosso grupo exclusivo para networking e suporte."
    },
    {
      icon: <ShieldCheck className="w-6 h-6" />,
      title: "Certificado",
      desc: "Certificado de conclusão reconhecido para turbinar seu currículo."
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Acesso Vitalício",
      desc: "Assista quando e onde quiser, para sempre, com todas as atualizações."
    }
  ];

  return (
    <section id="beneficios" className="py-24 bg-black/5 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">Por que escolher este curso?</h2>
          <p className="text-black/60 max-w-2xl mx-auto">Tudo o que você precisa para acelerar seu aprendizado e alcançar seus objetivos profissionais.</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((f, i) => (
            <motion.div 
              key={i}
              whileHover={{ y: -5 }}
              className="bg-white p-8 rounded-3xl border border-black/5 shadow-sm"
            >
              <div className="w-12 h-12 bg-black text-white rounded-2xl flex items-center justify-center mb-6">
                {f.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{f.title}</h3>
              <p className="text-black/60 leading-relaxed">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Curriculum = () => {
  const modules = [
    { title: "Módulo 01: Fundamentos e Mentalidade", duration: "4 aulas • 1h 20min" },
    { title: "Módulo 02: Ferramentas e Setup Inicial", duration: "6 aulas • 2h 45min" },
    { title: "Módulo 03: Execução e Primeiros Passos", duration: "8 aulas • 4h 10min" },
    { title: "Módulo 04: Otimização e Performance", duration: "5 aulas • 2h 30min" },
    { title: "Módulo 05: Escala e Automação", duration: "7 aulas • 3h 50min" },
  ];

  return (
    <section id="curriculo" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">O que você vai aprender</h2>
          <p className="text-black/60">Um cronograma completo pensado na sua evolução gradual.</p>
        </div>
        <div className="space-y-4">
          {modules.map((m, i) => (
            <div key={i} className="group p-6 rounded-2xl border border-black/5 hover:border-black/20 transition-all cursor-pointer flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-black/5 flex items-center justify-center font-bold text-sm">
                  {i + 1}
                </div>
                <div>
                  <h4 className="font-bold text-lg">{m.title}</h4>
                  <p className="text-sm text-black/40">{m.duration}</p>
                </div>
              </div>
              <ChevronDown className="w-5 h-5 text-black/20 group-hover:text-black transition-colors" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Pricing = () => (
  <section id="preco" className="py-24 bg-black text-white px-6 overflow-hidden relative">
    <div className="max-w-7xl mx-auto relative z-10">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-8 leading-tight">
            Pronto para transformar sua <span className="text-emerald-400">realidade?</span>
          </h2>
          <ul className="space-y-6 mb-10">
            {[
              "Acesso vitalício ao curso completo",
              "Suporte individual via Discord",
              "Planilhas e templates exclusivos",
              "Bônus: Masterclass de Vendas",
              "Garantia incondicional de 7 dias"
            ].map((item, i) => (
              <li key={i} className="flex items-center gap-3 text-lg opacity-80">
                <CheckCircle className="text-emerald-400 w-6 h-6 flex-shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </div>
        
        <div className="bg-white text-black p-10 rounded-[2.5rem] shadow-2xl relative">
          <div className="absolute -top-4 right-10 bg-emerald-500 text-white px-4 py-1 rounded-full text-sm font-bold uppercase tracking-widest">
            Melhor Oferta
          </div>
          <p className="text-black/40 font-bold uppercase tracking-widest text-sm mb-2">Acesso Completo</p>
          <div className="flex items-baseline gap-2 mb-8">
            <span className="text-5xl font-bold">R$ 497</span>
            <span className="text-black/40 line-through text-xl">R$ 997</span>
          </div>
          <p className="text-black/60 mb-8">Ou em até 12x de <span className="font-bold text-black">R$ 49,90</span> no cartão de crédito.</p>
          
          <button className="w-full py-5 bg-emerald-600 text-white rounded-2xl font-bold text-xl hover:bg-emerald-700 transition-all shadow-lg shadow-emerald-600/20 mb-6">
            Quero Minha Vaga Agora
          </button>
          
          <div className="flex items-center justify-center gap-4 opacity-40 grayscale">
            <img src="https://upload.wikimedia.org/wikipedia/commons/5/5e/Visa_Inc._logo.svg" alt="Visa" className="h-4" referrerPolicy="no-referrer" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg" alt="Mastercard" className="h-6" referrerPolicy="no-referrer" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg" alt="PayPal" className="h-4" referrerPolicy="no-referrer" />
          </div>
        </div>
      </div>
    </div>
    
    {/* Background Glows */}
    <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-emerald-600/20 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2"></div>
    <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-indigo-600/10 rounded-full blur-[120px] translate-y-1/2 -translate-x-1/2"></div>
  </section>
);

const Footer = () => (
  <footer className="py-12 border-t border-black/5 px-6">
    <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
      <div className="flex items-center gap-2">
        <Zap className="w-6 h-6" />
        <span className="font-bold text-lg">MasterClass Pro</span>
      </div>
      <p className="text-black/40 text-sm">
        © 2026 MasterClass Pro. Todos os direitos reservados.
      </p>
      <div className="flex gap-6 text-sm font-medium text-black/60">
        <a href="#" className="hover:text-black">Termos de Uso</a>
        <a href="#" className="hover:text-black">Privacidade</a>
      </div>
    </div>
  </footer>
);

export default function App() {
  return (
    <div className="min-h-screen bg-white selection:bg-emerald-100 selection:text-emerald-900">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Curriculum />
        <Pricing />
      </main>
      <Footer />
    </div>
  );
}
