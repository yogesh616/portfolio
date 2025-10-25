// Contact.jsx
import React, { useState } from "react"
import { Mail, MapPin } from "lucide-react"
import { siteMeta } from "./data";
export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [showToast, setShowToast] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleSubmit = () => {
    // Client-side validation
    if (!formData.name || !formData.email || !formData.message) {
      alert('Please fill in all required fields');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      alert('Please enter a valid email address');
      return;
    }

    console.log('Form submitted:', formData);
    
    setShowToast(true);
    setTimeout(() => setShowToast(false), 3000);
    
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const copyEmail = () => {
    navigator.clipboard.writeText(siteMeta.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  return (
    <div className="space-y-8 animate-fade-in">
      <h2 className="text-4xl font-bold text-white text-center mb-12">Get in Touch</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Contact Info */}
        <div className="space-y-6">
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 space-y-4">
            <h3 className="text-xl font-semibold text-white mb-4">Contact Information</h3>
            
            <div className="space-y-3">
              <div className="flex items-start gap-3 text-gray-300">
                <Mail className="text-blue-400 mt-1" size={20} />
                <div className="flex-1">
                  <p className="text-sm text-gray-400">Email</p>
                  <div className="flex items-center gap-2">
                    <p className="text-white">{siteMeta.email}</p>
                    <button
                      onClick={copyEmail}
                      className="text-xs cursor-pointer px-2 py-1 bg-blue-500/20 text-blue-400 rounded hover:bg-blue-500/30 transition-colors"
                    >
                      {copiedEmail ? 'Copied!' : 'Copy'}
                    </button>
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-3 text-gray-300">
                <MapPin className="text-blue-400 mt-1" size={20} />
                <div>
                  <p className="text-sm text-gray-400">Location</p>
                  <p className="text-white">{siteMeta.location}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
              Name *
            </label>
            <input
              type="text"
              id="name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 transition-colors"
              placeholder="Your name"
              required
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
              Email *
            </label>
            <input
              type="email"
              id="email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 transition-colors"
              placeholder="your@email.com"
              required
            />
          </div>

          <div>
            <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
              Subject
            </label>
            <input
              type="text"
              id="subject"
              value={formData.subject}
              onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
              className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 transition-colors"
              placeholder="What's this about?"
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
              Message *
            </label>
            <textarea
              id="message"
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              rows={5}
              className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 transition-colors resize-none"
              placeholder="Your message..."
              required
            />
          </div>

          <button
            onClick={handleSubmit}
            className="w-full px-6 py-3 bg-blue-500 text-white rounded-full font-medium hover:-translate-y-0.5 transition-transform shadow-lg shadow-blue-500/30"
          >
            Send Message
          </button>
        </div>
      </div>

      {/* Toast */}
      {showToast && (
        <div className="fixed bottom-8 right-8 bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg animate-fade-in">
          Message sent successfully! (UI-only)
        </div>
      )}
    </div>
  );
}
