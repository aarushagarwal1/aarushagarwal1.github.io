import React, { useState } from 'react';
import { 
  Heart, 
  Zap, 
  Users, 
  Target, 
  Sparkles, 
  Globe, 
  Bot, 
  Rocket, 
  Award, 
  TrendingUp, 
  MessageCircle, 
  ArrowRight,
  CheckCircle,
  Play,
  Mail,
  Phone,
  MapPin,
  Twitter,
  Github,
  Linkedin
} from 'lucide-react';

function App() {
  const [activeDemo, setActiveDemo] = useState('website');

  const differentiators = [
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Nonprofit Pricing",
      description: "Affordable services without the agency markup.",
      bgColor: "bg-gradient-to-br from-red-500/10 to-pink-500/10 border-red-500/20",
      hoverColor: "hover:from-red-500/20 hover:to-pink-500/20"
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Built for the AI Boom",
      description: "All websites are designed AI-ready and scalable.",
      bgColor: "bg-gradient-to-br from-blue-500/10 to-cyan-500/10 border-blue-500/20",
      hoverColor: "hover:from-blue-500/20 hover:to-cyan-500/20"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Limited Clients, Full Focus",
      description: "We only take on a few projects at a time so each one gets our full attention.",
      bgColor: "bg-gradient-to-br from-green-500/10 to-emerald-500/10 border-green-500/20",
      hoverColor: "hover:from-green-500/20 hover:to-emerald-500/20"
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Mission-Driven Tech",
      description: "Your project supports digital education and nonprofit tools.",
      bgColor: "bg-gradient-to-br from-purple-500/10 to-violet-500/10 border-purple-500/20",
      hoverColor: "hover:from-purple-500/20 hover:to-violet-500/20"
    },
    {
      icon: <Sparkles className="w-8 h-8" />,
      title: "Designs That Convert",
      description: "Clean, fast, mobile-friendly layouts built for real user engagement.",
      bgColor: "bg-gradient-to-br from-orange-500/10 to-yellow-500/10 border-orange-500/20",
      hoverColor: "hover:from-orange-500/20 hover:to-yellow-500/20"
    }
  ];

  const services = [
    {
      icon: <Globe className="w-12 h-12 text-blue-400" />,
      title: "Professional Websites",
      description: "Modern, responsive websites that showcase your mission and convert visitors into supporters.",
      features: ["Mobile-first design", "SEO optimized", "Lightning fast", "CMS integration"]
    },
    {
      icon: <Bot className="w-12 h-12 text-green-400" />,
      title: "AI Chatbots",
      description: "Intelligent chatbots that handle inquiries, schedule appointments, and engage your audience 24/7.",
      features: ["Natural language processing", "Custom training", "Multi-platform", "Analytics dashboard"]
    },
    {
      icon: <Rocket className="w-12 h-12 text-purple-400" />,
      title: "Digital Strategy",
      description: "Comprehensive digital strategy to maximize your online impact and reach your target audience.",
      features: ["Market analysis", "Content strategy", "Social media planning", "Growth optimization"]
    }
  ];

  const impactStats = [
    { number: "150+", label: "Small Businesses Served", icon: <Users className="w-6 h-6" /> },
    { number: "300%", label: "Average Traffic Increase", icon: <TrendingUp className="w-6 h-6" /> },
    { number: "50+", label: "AI Chatbots Deployed", icon: <Bot className="w-6 h-6" /> },
    { number: "98%", label: "Client Satisfaction Rate", icon: <Award className="w-6 h-6" /> }
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-black/90 backdrop-blur-sm border-b border-gray-800 z-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between h-16">
            <div className="text-2xl font-bold text-blue-500">BotWeb</div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#home" className="text-gray-300 hover:text-white transition-colors">Home</a>
              <a href="#about" className="text-gray-300 hover:text-white transition-colors">About</a>
              <a href="#services" className="text-gray-300 hover:text-white transition-colors">Services</a>
              <a href="#contact" className="text-gray-300 hover:text-white transition-colors">Contact</a>
              <button className="bg-blue-600 hover:bg-blue-700 px-6 py-2 rounded-full font-semibold transition-colors">
                Donate Now
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center px-6 pt-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <h1 className="text-5xl lg:text-7xl font-extrabold leading-tight mb-6">
                <span className="block">We Build Websites</span>
                <span className="block text-blue-400">You Build Impact</span>
              </h1>
              <p className="text-xl lg:text-2xl text-gray-300 mb-8 max-w-2xl">
                Professional websites and AI chatbots for small businesses and charities, 
                designed to amplify your mission with ease.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <button className="bg-blue-600 hover:bg-blue-700 px-8 py-4 rounded-full text-lg font-semibold transition-all transform hover:scale-105">
                  Donate Now
                </button>
                <button className="border-2 border-blue-600 text-blue-400 hover:bg-blue-600 hover:text-white px-8 py-4 rounded-full text-lg font-semibold transition-all">
                  Learn More
                </button>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-video bg-gradient-to-br from-blue-600/20 to-purple-600/20 rounded-2xl border border-gray-700 flex items-center justify-center">
                <Play className="w-16 h-16 text-blue-400" />
              </div>
              <p className="text-center text-gray-400 mt-4">BotWeb promotional video</p>
            </div>
          </div>
        </div>
      </section>

      {/* What Makes Us Different Section */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">What Makes Us Different</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We're not just another web agency. Here's what sets us apart in the digital landscape.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {differentiators.map((item, index) => (
              <div
                key={index}
                className={`${item.bgColor} ${item.hoverColor} border rounded-2xl p-8 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-2xl`}
              >
                <div className="text-blue-400 mb-6">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold mb-4">{item.title}</h3>
                <p className="text-gray-300 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What We Do Section */}
      <section id="services" className="py-24 px-6 bg-gray-900/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">What We Do</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We specialize in creating digital solutions that help small businesses and nonprofits thrive online.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-12">
            {services.map((service, index) => (
              <div key={index} className="bg-gray-800/50 border border-gray-700 rounded-2xl p-8 hover:border-blue-500/50 transition-all duration-300">
                <div className="mb-6">{service.icon}</div>
                <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                <p className="text-gray-300 mb-6 leading-relaxed">{service.description}</p>
                <ul className="space-y-3">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">Impact</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Numbers tell the story of how we're making a difference in the digital world.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {impactStats.map((stat, index) => (
              <div key={index} className="text-center p-6 bg-gradient-to-b from-gray-800/50 to-gray-900/50 rounded-2xl border border-gray-700">
                <div className="text-blue-400 mb-4 flex justify-center">{stat.icon}</div>
                <div className="text-4xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-gray-300">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Botweb in Action Section */}
      <section className="py-24 px-6 bg-gray-900/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">Botweb in Action</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              See how our solutions work in real-world scenarios to drive engagement and results.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            {/* Demo Toggle */}
            <div className="flex justify-center mb-8">
              <div className="bg-gray-800 p-2 rounded-full">
                <button
                  onClick={() => setActiveDemo('website')}
                  className={`px-6 py-3 rounded-full transition-all ${
                    activeDemo === 'website' 
                      ? 'bg-blue-600 text-white' 
                      : 'text-gray-300 hover:text-white'
                  }`}
                >
                  Website Demo
                </button>
                <button
                  onClick={() => setActiveDemo('chatbot')}
                  className={`px-6 py-3 rounded-full transition-all ${
                    activeDemo === 'chatbot' 
                      ? 'bg-blue-600 text-white' 
                      : 'text-gray-300 hover:text-white'
                  }`}
                >
                  Chatbot Demo
                </button>
              </div>
            </div>

            {/* Demo Content */}
            <div className="bg-gray-800 rounded-2xl p-8 border border-gray-700">
              {activeDemo === 'website' ? (
                <div className="text-center">
                  <Globe className="w-16 h-16 text-blue-400 mx-auto mb-6" />
                  <h3 className="text-2xl font-bold mb-4">Interactive Website Preview</h3>
                  <p className="text-gray-300 mb-6">
                    Experience how our websites deliver seamless user experiences with modern design and functionality.
                  </p>
                  <div className="aspect-video bg-gradient-to-br from-blue-600/20 to-purple-600/20 rounded-xl border border-gray-600 flex items-center justify-center">
                    <span className="text-gray-400">Website Demo Preview</span>
                  </div>
                </div>
              ) : (
                <div className="text-center">
                  <MessageCircle className="w-16 h-16 text-green-400 mx-auto mb-6" />
                  <h3 className="text-2xl font-bold mb-4">AI Chatbot in Action</h3>
                  <p className="text-gray-300 mb-6">
                    Watch how our AI chatbots handle customer inquiries with natural conversation and intelligent responses.
                  </p>
                  <div className="aspect-video bg-gradient-to-br from-green-600/20 to-teal-600/20 rounded-xl border border-gray-600 flex items-center justify-center">
                    <span className="text-gray-400">Chatbot Demo Preview</span>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">Ready to Make an Impact?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Join the growing community of businesses and nonprofits using AI-powered digital solutions 
            to amplify their mission and reach.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-blue-600 hover:bg-blue-700 px-8 py-4 rounded-full text-lg font-semibold transition-all transform hover:scale-105 flex items-center justify-center">
              Start Your Project
              <ArrowRight className="w-5 h-5 ml-2" />
            </button>
            <button className="border-2 border-blue-600 text-blue-400 hover:bg-blue-600 hover:text-white px-8 py-4 rounded-full text-lg font-semibold transition-all">
              Schedule Consultation
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-gray-900 border-t border-gray-800 py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-4 gap-12">
            {/* Brand Column */}
            <div className="lg:col-span-2">
              <div className="text-3xl font-bold text-blue-500 mb-4">BotWeb</div>
              <p className="text-gray-300 mb-6 max-w-md">
                Building AI-integrated websites and chatbots for small businesses and nonprofits. 
                Together, we're creating digital solutions that matter.
              </p>
              <div className="flex space-x-4">
                <Twitter className="w-6 h-6 text-gray-400 hover:text-blue-400 cursor-pointer transition-colors" />
                <Github className="w-6 h-6 text-gray-400 hover:text-blue-400 cursor-pointer transition-colors" />
                <Linkedin className="w-6 h-6 text-gray-400 hover:text-blue-400 cursor-pointer transition-colors" />
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2 text-gray-300">
                <li><a href="#home" className="hover:text-white transition-colors">Home</a></li>
                <li><a href="#about" className="hover:text-white transition-colors">About</a></li>
                <li><a href="#services" className="hover:text-white transition-colors">Services</a></li>
                <li><a href="#contact" className="hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact</h3>
              <div className="space-y-3 text-gray-300">
                <div className="flex items-center">
                  <Mail className="w-5 h-5 mr-3 text-blue-400" />
                  hello@botweb.org
                </div>
                <div className="flex items-center">
                  <Phone className="w-5 h-5 mr-3 text-blue-400" />
                  (555) 123-4567
                </div>
                <div className="flex items-center">
                  <MapPin className="w-5 h-5 mr-3 text-blue-400" />
                  San Francisco, CA
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; 2024 BotWeb. All rights reserved. Made with ❤️ for small businesses and nonprofits.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;