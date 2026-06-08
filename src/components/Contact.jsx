import React, { useState } from 'react';
import { Mail, MapPin, Phone, User } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, message } = formData;
    const subject = encodeURIComponent(`Portfolio Contact from ${name}`);
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`);
    window.location.href = `mailto:lavanyagunje77@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="py-24 px-6 relative">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold mb-16 text-center text-slate-800">
          Get In Touch
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="glass-card p-8 animate-slide-up bg-white">
            <h3 className="text-2xl font-bold mb-6 text-slate-800">Contact Information</h3>
            <div className="space-y-6">
              <div className="flex items-center gap-4 text-slate-600">
                <div className="w-12 h-12 bg-green-50 rounded-full flex items-center justify-center text-primary shrink-0">
                  <Mail size={24} />
                </div>
                <div>
                  <p className="text-sm text-slate-500 font-medium">Email</p>
                  <a href="mailto:lavanyagunje77@gmail.com" className="font-medium hover:text-primary transition-colors">
                    lavanyagunje77@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4 text-slate-600">
                <div className="w-12 h-12 bg-green-50 rounded-full flex items-center justify-center text-primary shrink-0">
                  <Phone size={24} />
                </div>
                <div>
                  <p className="text-sm text-slate-500 font-medium">Phone</p>
                  <a href="tel:+919392510535" className="font-medium hover:text-primary transition-colors">
                    +91-9392510535
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4 text-slate-600">
                <div className="w-12 h-12 bg-green-50 rounded-full flex items-center justify-center text-primary shrink-0">
                  <User size={24} />
                </div>
                <div>
                  <p className="text-sm text-slate-500 font-medium">LinkedIn</p>
                  <a href="https://linkedin.com/in/lavanyagunje-a57029301" target="_blank" rel="noreferrer" className="font-medium hover:text-primary transition-colors break-all">
                    linkedin.com/in/lavanyagunje-a57029301
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4 text-slate-600">
                <div className="w-12 h-12 bg-green-50 rounded-full flex items-center justify-center text-primary shrink-0">
                  <MapPin size={24} />
                </div>
                <div>
                  <p className="text-sm text-slate-500 font-medium">Location</p>
                  <span className="font-medium">Hyderabad</span>
                </div>
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="glass-card p-8 animate-slide-up bg-white" style={{ animationDelay: '0.2s' }}>
            <h3 className="text-2xl font-bold mb-6 text-slate-800">Send a Message</h3>
            <div className="space-y-4">
              <div>
                <label htmlFor="name" className="text-sm font-medium text-slate-600 ml-1">Name</label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Your Name"
                  className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-transparent transition-all"
                />
              </div>
              <div>
                <label htmlFor="email" className="text-sm font-medium text-slate-600 ml-1">Email</label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="your@email.com"
                  className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-transparent transition-all"
                />
              </div>
              <div>
                <label htmlFor="message" className="text-sm font-medium text-slate-600 ml-1">Message</label>
                <textarea
                  id="message"
                  rows="4"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  placeholder="How can I help you?"
                  className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-transparent transition-all resize-none"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full py-3 bg-primary hover:bg-green-700 text-white font-bold rounded-lg transition-colors duration-300 shadow-md"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
