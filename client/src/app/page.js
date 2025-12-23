"use client"
import React, { useState, useEffect } from 'react';
import { Search, Brain, Network, Image, Zap, Database, Eye, ArrowRight, Moon, Sun } from 'lucide-react';


export default function Home() {

  const [darkMode, setDarkMode] = useState(false);
  const [activeFeature, setActiveFeature] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveFeature((prev) => (prev + 1) % 3);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const features = [
    {
      icon: Eye,
      title: "Multi-Stage Vision Pipeline",
      description: "Advanced computer vision extracts objects, spatial relationships, and contextual information from every image"
    },
    {
      icon: Network,
      title: "Knowledge Graph Storage",
      description: "Structured visual data stored as an interconnected graph, enabling precise logical queries"
    },
    {
      icon: Brain,
      title: "Smart Hybrid Search",
      description: "Semantic embeddings as intelligent fallback for fuzzy matching when structure isn't enough"
    }
  ];

  return (
   <div className={`min-h-screen transition-colors duration-300 ${darkMode ? 'bg-gray-900 text-white' : 'bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 text-gray-900'}`}>
      {/* Theme Toggle */}
      <button
        onClick={() => setDarkMode(!darkMode)}
        className={`fixed top-6 right-6 z-50 p-3 rounded-full transition-all duration-300 ${
          darkMode ? 'bg-yellow-400 text-gray-900 hover:bg-yellow-300' : 'bg-gray-900 text-white hover:bg-gray-800'
        }`}
      >
        {darkMode ? <Sun size={20} /> : <Moon size={20} />}
      </button>

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className={`absolute w-96 h-96 rounded-full blur-3xl opacity-20 animate-pulse ${darkMode ? 'bg-purple-500' : 'bg-purple-400'} -top-48 -left-48`}></div>
          <div className={`absolute w-96 h-96 rounded-full blur-3xl opacity-20 animate-pulse ${darkMode ? 'bg-blue-500' : 'bg-blue-400'} -bottom-48 -right-48`} style={{ animationDelay: '1s' }}></div>
        </div>
        
        <div className="container mx-auto px-6 py-20 md:py-32 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 text-white mb-8 animate-bounce">
              <Zap size={16} />
              <span className="text-sm font-medium">Next-Gen Visual Memory</span>
            </div>
            
            <h1 className={`text-5xl md:text-7xl font-bold mb-6 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
              Remember Images
              <span className="block bg-gradient-to-r from-purple-600 via-blue-600 to-pink-600 bg-clip-text text-transparent">
                The Way You Think
              </span>
            </h1>
            
            <p className={`text-xl md:text-2xl mb-12 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
              Memora transforms how you search visual memories using structured knowledge graphs 
              instead of opaque embeddings. Ask logical questions. Get precise answers.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-xl font-semibold hover:shadow-2xl transform hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2">
                Get Started
                <ArrowRight size={20} />
              </button>
              <button className={`px-8 py-4 rounded-xl font-semibold border-2 transition-all duration-300 flex items-center justify-center gap-2 ${
                darkMode ? 'border-gray-700 hover:bg-gray-800' : 'border-gray-300 hover:bg-white hover:shadow-xl'
              }`}>
                <Search size={20} />
                View Demo
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Visual Showcase */}
      <section className={`py-20 ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className={`p-8 rounded-2xl transition-all duration-500 transform hover:scale-105 ${
              darkMode ? 'bg-gradient-to-br from-purple-900 to-blue-900' : 'bg-gradient-to-br from-purple-100 to-blue-100'
            }`}>
              <Database className="w-12 h-12 mb-4 text-purple-600" />
              <h3 className="text-2xl font-bold mb-2">Structured</h3>
              <p className={darkMode ? 'text-gray-300' : 'text-gray-600'}>
                Visual knowledge stored as queryable graphs, not black-box vectors
              </p>
            </div>
            
            <div className={`p-8 rounded-2xl transition-all duration-500 transform hover:scale-105 ${
              darkMode ? 'bg-gradient-to-br from-blue-900 to-pink-900' : 'bg-gradient-to-br from-blue-100 to-pink-100'
            }`}>
              <Image className="w-12 h-12 mb-4 text-blue-600" />
              <h3 className="text-2xl font-bold mb-2">Intelligent</h3>
              <p className={darkMode ? 'text-gray-300' : 'text-gray-600'}>
                Multi-stage vision pipeline extracts objects, relations, and context
              </p>
            </div>
            
            <div className={`p-8 rounded-2xl transition-all duration-500 transform hover:scale-105 ${
              darkMode ? 'bg-gradient-to-br from-pink-900 to-purple-900' : 'bg-gradient-to-br from-pink-100 to-purple-100'
            }`}>
              <Brain className="w-12 h-12 mb-4 text-pink-600" />
              <h3 className="text-2xl font-bold mb-2">Hybrid</h3>
              <p className={darkMode ? 'text-gray-300' : 'text-gray-600'}>
                Semantic embeddings as smart fallback for fuzzy matching
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <h2 className={`text-4xl md:text-5xl font-bold text-center mb-16 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
            How Memora Works
          </h2>
          
          <div className="max-w-5xl mx-auto space-y-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              const isActive = activeFeature === index;
              
              return (
                <div
                  key={index}
                  className={`p-8 rounded-2xl transition-all duration-500 cursor-pointer ${
                    isActive
                      ? darkMode
                        ? 'bg-gradient-to-r from-purple-900 to-blue-900 shadow-2xl scale-105'
                        : 'bg-gradient-to-r from-purple-100 to-blue-100 shadow-2xl scale-105'
                      : darkMode
                      ? 'bg-gray-800 hover:bg-gray-750'
                      : 'bg-white hover:bg-gray-50'
                  }`}
                  onMouseEnter={() => setActiveFeature(index)}
                >
                  <div className="flex items-start gap-6">
                    <div className={`p-4 rounded-xl ${
                      isActive
                        ? 'bg-gradient-to-br from-purple-600 to-blue-600'
                        : darkMode
                        ? 'bg-gray-700'
                        : 'bg-gray-200'
                    }`}>
                      <Icon className={`w-8 h-8 ${isActive ? 'text-white' : darkMode ? 'text-gray-300' : 'text-gray-600'}`} />
                    </div>
                    <div className="flex-1">
                      <h3 className={`text-2xl font-bold mb-3 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                        {feature.title}
                      </h3>
                      <p className={`text-lg ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Query Examples */}
      <section className={`py-20 ${darkMode ? 'bg-gray-800' : 'bg-gradient-to-br from-purple-50 to-blue-50'}`}>
        <div className="container mx-auto px-6">
          <h2 className={`text-4xl md:text-5xl font-bold text-center mb-16 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
            Ask Logical Questions
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {[
              '"Show me images where a dog is to the left of a tree"',
              '"Find photos with red cars near buildings"',
              '"Images containing both cats and laptops"',
              '"Scenes with people standing in front of mountains"'
            ].map((query, index) => (
              <div
                key={index}
                className={`p-6 rounded-xl transition-all duration-300 hover:scale-105 ${
                  darkMode ? 'bg-gray-900 border border-gray-700' : 'bg-white shadow-lg'
                }`}
              >
                <Search className={`w-6 h-6 mb-3 ${darkMode ? 'text-purple-400' : 'text-purple-600'}`} />
                <p className={`text-lg font-medium ${darkMode ? 'text-gray-200' : 'text-gray-800'}`}>
                  {query}
                </p>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <p className={`text-xl ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
              Traditional embeddings can't handle these queries. Memora can.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className={`max-w-4xl mx-auto p-12 rounded-3xl text-center ${
            darkMode 
              ? 'bg-gradient-to-r from-purple-900 to-blue-900' 
              : 'bg-gradient-to-r from-purple-600 to-blue-600'
          }`}>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Transform Visual Search?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Join the future of intelligent image memory systems
            </p>
            <button className="px-10 py-5 bg-white text-purple-600 rounded-xl font-bold text-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300">
              Start Building with Memora
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className={`py-12 border-t ${darkMode ? 'border-gray-800 bg-gray-900' : 'border-gray-200'}`}>
        <div className="container mx-auto px-6 text-center">
          <p className={darkMode ? 'text-gray-400' : 'text-gray-600'}>
            © 2024 Memora. Visual memory that thinks like you do.
          </p>
        </div>
      </footer>
    </div>
  );
}