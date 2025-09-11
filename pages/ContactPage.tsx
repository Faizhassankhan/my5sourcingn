
import React, { useState, useEffect } from 'react';
import emailjs from 'emailjs-com';
import AOS from 'aos';
import 'aos/dist/aos.css';

const ContactPage: React.FC = () => {
    const [formState, setFormState] = useState({ name: '', email: '', message: '' });
    const [submitted, setSubmitted] = useState(false);
    useEffect(() => { AOS.init({ duration: 1000, once: true }); }, []);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormState({ ...formState, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            await emailjs.send(
                'service_ia3hkis',
                'template_7mzqxbc',
                {
                    from_name: formState.name,
                    from_email: formState.email,
                    message: formState.message,
                },
                'BmDO6rVPl-Bl5Do4n'
            );
            setSubmitted(true);
        } catch (error) {
            alert('Failed to send message. Please try again later.');
        }
    };

    return (
    <section id="contact-page" className="bg-gray-900 text-white min-h-screen flex items-center justify-center pt-40 pb-20 font-sans" data-aos="fade-up">
            <div className="container mx-auto px-8">
                <div className="grid md:grid-cols-2 gap-16 items-center">
                    <div className="text-left">
                        <h1 className="text-4xl md:text-5xl font-bold mb-4" data-aos="fade-down">Get in Touch</h1>
                        <p className="text-gray-300 mb-8 max-w-md" data-aos="fade-up" data-aos-delay="200">
                            Have a question or a project in mind? We'd love to hear from you. Fill out the form, and we'll get back to you as soon as possible.
                        </p>
                        <div className="space-y-4" data-aos="zoom-in" data-aos-delay="400">
                            <div className="flex items-center gap-4">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                                <a href="mailto:info@my5sourcing.com" className="hover:text-amber-400 transition-colors">info@my5sourcing.com</a>
                            </div>
                            <div className="flex items-center gap-4">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                </svg>
                                <span>+1 (123) 456-7890</span>
                            </div>
                            <div className="flex items-start gap-4">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-amber-400 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                </svg>
                                <span>123 Fashion Ave, Garment District,<br />New York, NY 10018</span>
                            </div>
                        </div>
                    </div>
                    <div className="bg-black p-8 rounded-lg shadow-lg">
                        {submitted ? (
                            <div className="text-center py-10 h-full flex flex-col justify-center">
                                <h3 className="text-2xl font-bold text-white mb-2">Thank you!</h3>
                                <p className="text-gray-300">Your message has been sent. We'll get back to you shortly.</p>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div>
                                    <label htmlFor="contact-name" className="block text-sm font-medium text-gray-300 mb-2">Full Name</label>
                                    <input type="text" name="name" id="contact-name" required value={formState.name} onChange={handleChange} className="w-full bg-gray-700 text-white rounded-md border-gray-600 focus:ring-amber-400 focus:border-amber-400 transition" />
                                </div>
                                <div>
                                    <label htmlFor="contact-email" className="block text-sm font-medium text-gray-300 mb-2">Email Address</label>
                                    <input type="email" name="email" id="contact-email" required value={formState.email} onChange={handleChange} className="w-full bg-gray-700 text-white rounded-md border-gray-600 focus:ring-amber-400 focus:border-amber-400 transition" />
                                </div>
                                <div>
                                    <label htmlFor="contact-message" className="block text-sm font-medium text-gray-300 mb-2">Message</label>
                                    <textarea name="message" id="contact-message" rows={5} required value={formState.message} onChange={handleChange} className="w-full bg-gray-700 text-white rounded-md border-gray-600 focus:ring-amber-400 focus:border-amber-400 transition"></textarea>
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
            </div>
        </section>
    );
};

export default ContactPage;
