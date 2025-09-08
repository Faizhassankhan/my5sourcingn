
import React, { useState } from 'react';

const Contact: React.FC = () => {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formState);
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-20 bg-gray-900 text-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">Let's Create Together</h2>
          <p className="text-gray-400 mt-2 max-w-2xl mx-auto">
            Ready to elevate your brand? Reach out to us to discuss your sourcing needs and how we can help you succeed.
          </p>
          <div className="mt-4 w-24 h-1 bg-amber-400 mx-auto"></div>
        </div>
        <div className="max-w-3xl mx-auto bg-gray-800 p-8 rounded-lg shadow-lg">
          {submitted ? (
            <div className="text-center py-10">
              <h3 className="text-2xl font-bold text-white mb-2">Thank you!</h3>
              <p className="text-gray-300">Your message has been sent. We'll get back to you shortly.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="home-name" className="block text-sm font-medium text-gray-300 mb-2">Full Name</label>
                  <input type="text" name="name" id="home-name" required value={formState.name} onChange={handleChange} className="w-full bg-gray-700 text-white rounded-md border-gray-600 focus:ring-amber-400 focus:border-amber-400 transition" />
                </div>
                <div>
                  <label htmlFor="home-email" className="block text-sm font-medium text-gray-300 mb-2">Email Address</label>
                  <input type="email" name="email" id="home-email" required value={formState.email} onChange={handleChange} className="w-full bg-gray-700 text-white rounded-md border-gray-600 focus:ring-amber-400 focus:border-amber-400 transition" />
                </div>
              </div>
              <div>
                <label htmlFor="home-message" className="block text-sm font-medium text-gray-300 mb-2">Message</label>
                <textarea name="message" id="home-message" rows={5} required value={formState.message} onChange={handleChange} className="w-full bg-gray-700 text-white rounded-md border-gray-600 focus:ring-amber-400 focus:border-amber-400 transition"></textarea>
              </div>
              <div>
                <button type="submit" className="w-full bg-amber-400 text-gray-900 font-bold py-3 px-6 rounded-md hover:bg-amber-500 transition-all duration-300 transform hover:scale-105">
                  Send Message
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default Contact;
