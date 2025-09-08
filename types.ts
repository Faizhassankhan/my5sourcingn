import React from 'react';

export interface NavLink {
  href: string;
  label: string;
  children?: NavLink[];
}

export interface Service {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export interface GalleryImage {
  id: number;
  src: string;
  alt: string;
  category: string;
}

export interface QualityStep {
  image: string;
  title: string;
  description: string;
}
