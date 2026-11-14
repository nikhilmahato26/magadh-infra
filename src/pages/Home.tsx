import React from 'react';
import { Hero } from '../sections/Hero';
import { About } from '../sections/About';
import { Services } from '../sections/Services';
import { Coverage } from '../sections/Coverage';
import { WhyChooseUs } from '../sections/WhyChooseUs';
import { Contact } from '../sections/Contact';

export const Home: React.FC = () => {
  return (
    <main>
      <Hero />
      <About />
      <Services />
      <Coverage />
      <WhyChooseUs />
      <Contact />
    </main>
  );
};
