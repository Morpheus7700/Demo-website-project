'use client';

import { useState } from 'react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log(formData);
    alert('Thank you for your message! We will get back to you shortly.');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="animate-fadeIn bg-white">
      {/* Hero Section */}
      <section className="bg-gray-100 text-gray-800 text-center py-20 md:py-32">
        <div className="container mx-auto px-6">
          <h1 className="text-5xl md:text-6xl font-extrabold leading-tight text-primary">
            Get in Touch
          </h1>
          <p className="text-xl md:text-2xl mt-6 max-w-3xl mx-auto text-gray-600">
            We'd love to hear from you! Whether you have a question about our holidays, pricing, or anything else, our team is ready to answer all your questions.
          </p>
        </div>
      </section>

      {/* Contact Form and Details Section */}
      <section className="py-20 md:py-24">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div className="bg-gray-100 p-8 md:p-12 rounded-lg shadow-lg">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Send us a Message</h2>
              <form onSubmit={handleSubmit}>
                <div className="mb-6">
                  <label htmlFor="name" className="block text-gray-700 font-semibold mb-2">Your Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    name="name" 
                    className="w-full px-4 py-3 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-primary bg-white text-gray-900"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="mb-6">
                  <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">Your Email</label>
                  <input 
                    type="email" 
                    id="email" 
                    name="email" 
                    className="w-full px-4 py-3 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-primary bg-white text-gray-900"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="mb-6">
                  <label htmlFor="message" className="block text-gray-700 font-semibold mb-2">Message</label>
                  <textarea 
                    id="message" 
                    name="message" 
                    rows={5} 
                    className="w-full px-4 py-3 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-primary bg-white text-gray-900"
                    value={formData.message}
                    onChange={handleChange}
                    required
                  ></textarea>
                </div>
                <button 
                  type="submit" 
                  className="w-full bg-primary hover:bg-secondary text-white font-bold py-3 px-6 rounded-lg transition-colors shadow-lg hover:shadow-xl"
                >
                  Send Message
                </button>
              </form>
            </div>

            {/* Contact Details */}
            <div className="text-lg text-gray-600">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Contact Information</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="font-bold text-xl text-secondary">Address</h3>
                  <p>123 Holiday Lane, London, UK</p>
                </div>
                <div>
                  <h3 className="font-bold text-xl text-secondary">Email</h3>
                  <p>support@thomascook.com</p>
                </div>
                <div>
                  <h3 className="font-bold text-xl text-secondary">Phone</h3>
                  <p>+44 20 1234 5678</p>
                </div>
              </div>
              <div className="mt-12">
                <h3 className="font-bold text-xl text-gray-900 mb-4">Our Location</h3>
                <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden shadow-lg">
                  <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2483.323238224203!2d-0.1277583842305861!3d51.507350979635!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487604ce3da423a3%3A0x26647b5b5a567c5!2sLondon%2C%20UK!5e0!3m2!1sen!2sus!4v1678886400000!5m2!1sen!2sus"
                    width="100%" 
                    height="100%" 
                    style={{ border:0 }} 
                    allowFullScreen={true} 
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}