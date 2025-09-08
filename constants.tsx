import React from 'react';
import type { NavLink, Service, GalleryImage, QualityStep } from './types';

export const NAV_LINKS: NavLink[] = [
  { href: '#/home', label: 'Home' },
  { 
    href: '#/services', 
    label: 'Services',
    children: [
      { href: '#/services', label: 'Our Services' },
      { href: '#/quality-inspection', label: 'Quality Inspection' },
    ]
  },
  { 
    href: '#/gallery', 
    label: 'Gallery',
    children: [
      { href: '#/gallery', label: 'Product Gallery' },
      { href: '#/office-gallery', label: 'Office Gallery' },
    ]
  },
  { href: '#/contact', label: 'Contact' },
];

const iconClass = "h-12 w-12 text-amber-400";

export const SERVICES: Service[] = [
  {
    icon: <svg xmlns="http://www.w3.org/2000/svg" className={iconClass} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.657 7.343A8 8 0 0117.657 18.657z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.879 16.121A3 3 0 1012.005 18c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3z" /></svg>,
    title: 'Product Development',
    description: 'From concept to sample, we guide you through the entire product development lifecycle, ensuring your vision is realized.',
  },
  {
    icon: <svg xmlns="http://www.w3.org/2000/svg" className={iconClass} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>,
    title: 'Quality Assurance',
    description: 'Our on-the-ground teams conduct rigorous quality checks at every stage of production to guarantee superior garment quality.',
  },
  {
    icon: <svg xmlns="http://www.w3.org/2000/svg" className={iconClass} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10l2 2h8a1 1 0 001-1zM3 18h6" /></svg>,
    title: 'Logistics & Shipping',
    description: 'We manage all logistics, from factory to your doorstep, ensuring timely and cost-effective delivery of your products.',
  },
  {
    icon: <svg xmlns="http://www.w3.org/2000/svg" className={iconClass} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>,
    title: 'Factory Sourcing',
    description: 'Leveraging our extensive network, we connect you with the most reliable and ethical manufacturers that fit your needs.',
  },
];


export const GALLERY_IMAGES: GalleryImage[] = [
    { id: 1, src: 'https://plus.unsplash.com/premium_photo-1698260795268-cc7e0d5c3174?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', alt: 'Denim Jacket', category: 'Jackets' },
    { id: 2, src: 'https://i.postimg.cc/NMZ63Yxd/29eecb56b3ba1dc-file-00000000341c61f5b2105d33a6cf8e9d-wm.jpg', alt: 'Denim jeans showcase', category: 'Denim' },
    { id: 3, src: '/images/3.png', alt: 'Rugged denim hoodie', category: 'Hoodies' },
    { id: 4, src: '/images/4.png', alt: 'Stylish denim jackets', category: 'Jackets' },
    { id: 5, src: 'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?q=80&w=800&h=600&fit=crop', alt: 'Jeans Pant', category: 'Denim' },
    { id: 6, src: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', alt: 'Stylish hoodie', category: 'Hoodies' },
    { id: 7, src: 'https://plus.unsplash.com/premium_photo-1707816508645-d229ddd3aa65?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', alt: 'Fashionable modern style', category: 'Jackets' },
    { id: 8, src: 'https://images.unsplash.com/photo-1715758890151-2c15d5d482aa?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', alt: 'Close up of Jeans', category: 'Denim' },
    { id: 9, src: '/images/9.png', alt: 'Premium denim hoodie', category: 'Hoodies' },
];

export const OFFICE_GALLERY_IMAGES: GalleryImage[] = [
    { id: 1, src: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=800&h=600&fit=crop', alt: 'Collaborative team meeting', category: 'Office' },
    { id: 2, src: 'https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=800&h=600&fit=crop', alt: 'Strategy session on a whiteboard', category: 'Office' },
    { id: 3, src: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=800&h=600&fit=crop', alt: 'Modern conference room', category: 'Office' },
    { id: 4, src: 'https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=800&h=600&fit=crop', alt: 'Team discussing project details', category: 'Office' },
    { id: 5, src: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=800&h=600&fit=crop', alt: 'Bright and open workspace', category: 'Office' },
    { id: 6, src: 'https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?q=80&w=800&h=600&fit=crop', alt: 'Unity and teamwork', category: 'Office' },
    { id: 7, src: '/public/images/Q 1.jpg', alt: 'Creative brainstorming session', category: 'Office' },
    { id: 8, src: '/public/images/q2.jpg', alt: 'Focused work environment', category: 'Office' },
    { id: 9, src: '/public/images/q3.jpg', alt: 'Team collaboration', category: 'Office' },
    { id: 10, src: '/public/images/q4.jpg', alt: 'Office workspace with laptop', category: 'Office' },
    { id: 11, src: '/public/images/q5.jpg', alt: 'Team meeting in progress', category: 'Office' },
];

export const QUALITY_INSPECTION_CONTENT: QualityStep[] = [
    { 
        image: '/public/images/o1.jpeg',
        title: "Raw Material Inspection",
        description: "Before production begins, we rigorously inspect all raw materials, including fabrics, threads, and accessories, to ensure they meet our stringent quality and durability standards."
    },
    { 
        image: 'https://plus.unsplash.com/premium_photo-1663047585881-ffb3880218da?w=600&auto=format&fit=crop',
        title: "In-Line Production Monitoring",
        description: "Our quality controllers are present on the factory floor, conducting in-line inspections at critical stages of the production process to identify and rectify any issues immediately."
    },
    { 
        image: 'https://plus.unsplash.com/premium_photo-1674273913197-0070a5638f45?w=600&auto=format&fit=crop',
        title: "Final Garment Audit",
        description: "Every finished product undergoes a comprehensive final audit. We check for stitching, measurements, color consistency, and overall craftsmanship to ensure it aligns perfectly with your specifications."
    },
    { 
        image: 'https://plus.unsplash.com/premium_photo-1661320820544-65a52ced48f8?w=600&auto=format&fit=crop',
        title: "Packaging & Logistics Check",
        description: "We ensure that garments are properly folded, tagged, and packed according to your requirements, safeguarding the product's integrity during transit."
    }
];
