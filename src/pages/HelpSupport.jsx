import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';

const HelpSupport = () => {
  const { t } = useLanguage();
  const [activeTab, setActiveTab] = useState('faq');
  const [searchQuery, setSearchQuery] = useState('');

  const faqs = [
    {
      category: 'Getting Started',
      questions: [
        {
          question: 'How do I connect my MetaMask wallet?',
          answer: 'Click the "Connect with MetaMask" button on the login page. Make sure you have MetaMask installed in your browser. If you don\'t have MetaMask, you can download it from metamask.io.'
        },
        {
          question: 'What roles are available in the system?',
          answer: 'There are five main roles: Farmer (grows and harvests products), Distributor (transports products), Retailer (sells products), Consumer (buys and verifies products), and Admin (manages the system).'
        },
        {
          question: 'How do I get approved as a user?',
          answer: 'Submit a registration request through the sign-up page. An administrator will review your application and approve your account. You\'ll receive an email notification once approved.'
        }
      ]
    },
    {
      category: 'QR Codes',
      questions: [
        {
          question: 'How do I generate QR codes for my products?',
          answer: 'As a farmer, go to your dashboard and click "Add Product". Fill in the product details and a QR code will be automatically generated. You can also use the QR Code Generator tool.'
        },
        {
          question: 'How do I scan QR codes as a consumer?',
          answer: 'Use the QR Code Scanner in your dashboard. Click "Start Camera Scan" and point your camera at the QR code. The product information will be displayed automatically.'
        },
        {
          question: 'What information is stored in the QR code?',
          answer: 'QR codes contain a unique identifier that links to the product\'s blockchain record, including harvest date, location, processing details, and transportation history.'
        }
      ]
    },
    {
      category: 'Blockchain & Security',
      questions: [
        {
          question: 'How does blockchain verification work?',
          answer: 'Each product transaction is recorded on the blockchain, creating an immutable record. When you scan a QR code, the system verifies the product\'s authenticity against the blockchain.'
        },
        {
          question: 'Is my data secure?',
          answer: 'Yes, all data is encrypted and stored securely. The blockchain provides additional security by making data tamper-proof and transparent.'
        },
        {
          question: 'What if I find a fraudulent product?',
          answer: 'Report any suspicious products immediately through the support system. Our fraud detection algorithms will investigate, and appropriate action will be taken.'
        }
      ]
    },
    {
      category: 'Troubleshooting',
      questions: [
        {
          question: 'The camera isn\'t working for QR scanning',
          answer: 'Make sure you\'ve granted camera permissions to your browser. Try refreshing the page or using a different browser. If the issue persists, contact support.'
        },
        {
          question: 'I can\'t see my products in the dashboard',
          answer: 'Check your internet connection and refresh the page. If products still don\'t appear, contact your administrator or support team.'
        },
        {
          question: 'The app is running slowly',
          answer: 'Try clearing your browser cache and cookies. Close unnecessary browser tabs and ensure you have a stable internet connection.'
        }
      ]
    }
  ];

  const contactMethods = [
    {
      type: 'Email',
      value: 'support@agrichain.com',
      icon: '📧',
      description: 'Get help via email within 24 hours'
    },
    {
      type: 'Phone',
      value: '+1 (555) 123-4567',
      icon: '📞',
      description: 'Call us during business hours (9 AM - 5 PM EST)'
    },
    {
      type: 'Live Chat',
      value: 'Available 24/7',
      icon: '💬',
      description: 'Chat with our support team in real-time'
    }
  ];

  const filteredFaqs = faqs.map(category => ({
    ...category,
    questions: category.questions.filter(q => 
      q.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      q.answer.toLowerCase().includes(searchQuery.toLowerCase())
    )
  })).filter(category => category.questions.length > 0);

  const tabs = [
    { id: 'faq', label: t('help.faq'), icon: '❓' },
    { id: 'contact', label: t('help.contact'), icon: '📞' },
    { id: 'guides', label: t('help.guides'), icon: '📚' }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-xl shadow-lg overflow-hidden"
        >
          {/* Header */}
          <div className="bg-gradient-to-r from-blue-600 to-green-600 px-8 py-6 text-white">
            <h1 className="text-3xl font-bold">{t('help.title')}</h1>
            <p className="text-blue-100 mt-2">Find answers to your questions and get help when you need it</p>
          </div>

          <div className="p-8">
            {/* Tabs */}
            <div className="border-b border-gray-200 mb-8">
              <nav className="flex space-x-8">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`py-4 px-1 border-b-2 font-medium text-sm transition-colors ${
                      activeTab === tab.id
                        ? 'border-blue-500 text-blue-600'
                        : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                    }`}
                  >
                    <span className="mr-2">{tab.icon}</span>
                    {tab.label}
                  </button>
                ))}
              </nav>
            </div>

            {/* FAQ Tab */}
            {activeTab === 'faq' && (
              <div className="space-y-8">
                {/* Search */}
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search FAQs..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full px-4 py-3 pl-12 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                  <span className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400">🔍</span>
                </div>

                {/* FAQ Categories */}
                <div className="space-y-8">
                  {filteredFaqs.map((category, categoryIndex) => (
                    <div key={categoryIndex}>
                      <h2 className="text-2xl font-semibold text-gray-900 mb-6">{category.category}</h2>
                      <div className="space-y-4">
                        {category.questions.map((faq, faqIndex) => (
                          <motion.div
                            key={faqIndex}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: (categoryIndex * 0.1) + (faqIndex * 0.05) }}
                            className="bg-gray-50 rounded-xl p-6 hover:bg-gray-100 transition-colors"
                          >
                            <h3 className="text-lg font-semibold text-gray-900 mb-3">{faq.question}</h3>
                            <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>

                {filteredFaqs.length === 0 && searchQuery && (
                  <div className="text-center py-12">
                    <span className="text-6xl">🔍</span>
                    <h3 className="text-xl font-semibold text-gray-900 mt-4">No results found</h3>
                    <p className="text-gray-600 mt-2">Try searching with different keywords</p>
                  </div>
                )}
              </div>
            )}

            {/* Contact Tab */}
            {activeTab === 'contact' && (
              <div className="space-y-8">
                <div className="text-center">
                  <h2 className="text-2xl font-semibold text-gray-900 mb-4">Get in Touch</h2>
                  <p className="text-gray-600">Choose your preferred way to contact us</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {contactMethods.map((method, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="bg-gradient-to-r from-blue-50 to-green-50 rounded-xl p-6 text-center hover:shadow-lg transition-shadow"
                    >
                      <div className="text-4xl mb-4">{method.icon}</div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">{method.type}</h3>
                      <p className="text-gray-700 font-medium mb-2">{method.value}</p>
                      <p className="text-sm text-gray-600">{method.description}</p>
                    </motion.div>
                  ))}
                </div>

                <div className="bg-gray-50 rounded-xl p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Send us a Message</h3>
                  <form className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <input
                        type="text"
                        placeholder="Your Name"
                        className="px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                      <input
                        type="email"
                        placeholder="Your Email"
                        className="px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>
                    <select className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                      <option>Select a topic</option>
                      <option>Technical Support</option>
                      <option>Account Issues</option>
                      <option>Feature Request</option>
                      <option>Bug Report</option>
                      <option>Other</option>
                    </select>
                    <textarea
                      placeholder="Describe your issue or question..."
                      rows={4}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                    />
                    <button
                      type="submit"
                      className="w-full bg-gradient-to-r from-blue-600 to-green-600 text-white py-3 px-6 rounded-xl hover:from-blue-700 hover:to-green-700 transition-all duration-200"
                    >
                      Send Message
                    </button>
                  </form>
                </div>
              </div>
            )}

            {/* Guides Tab */}
            {activeTab === 'guides' && (
              <div className="space-y-8">
                <div className="text-center">
                  <h2 className="text-2xl font-semibold text-gray-900 mb-4">User Guides</h2>
                  <p className="text-gray-600">Step-by-step guides to help you get the most out of AgriChain</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {[
                    {
                      title: 'Getting Started',
                      description: 'Learn the basics of using AgriChain',
                      icon: '🚀',
                      steps: 5
                    },
                    {
                      title: 'Farmer Guide',
                      description: 'How to add products and generate QR codes',
                      icon: '🌾',
                      steps: 8
                    },
                    {
                      title: 'Consumer Guide',
                      description: 'How to scan products and verify authenticity',
                      icon: '🛒',
                      steps: 6
                    },
                    {
                      title: 'QR Code Management',
                      description: 'Creating and managing QR codes',
                      icon: '📱',
                      steps: 4
                    },
                    {
                      title: 'Blockchain Verification',
                      description: 'Understanding blockchain verification',
                      icon: '🔗',
                      steps: 7
                    },
                    {
                      title: 'Troubleshooting',
                      description: 'Common issues and solutions',
                      icon: '🔧',
                      steps: 10
                    }
                  ].map((guide, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow cursor-pointer"
                    >
                      <div className="text-4xl mb-4">{guide.icon}</div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">{guide.title}</h3>
                      <p className="text-gray-600 mb-4">{guide.description}</p>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-500">{guide.steps} steps</span>
                        <button className="text-blue-600 hover:text-blue-700 font-medium">
                          Read Guide →
                        </button>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default HelpSupport;
