import React from 'react';
import { HelmetProvider, Helmet } from 'react-helmet-async';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { QuickFloatActions } from './components/QuickFloatActions';
import { Home } from './pages/Home';

export const App: React.FC = () => {
  return (
    <HelmetProvider>
      <div className="min-h-screen flex flex-col bg-surface-light text-navy-900 selection:bg-accent-orange selection:text-white">
        <Helmet>
          <title>MAGADH INFRA | All India Permit | Raipur, Chhattisgarh</title>
          <meta
            name="description"
            content="Connect with MAGADH INFRA, based in Raipur, Chhattisgarh. Explore our business information and get in touch for enquiries. All India Permit."
          />
          <meta property="og:title" content="MAGADH INFRA | All India Permit | Raipur, Chhattisgarh" />
          <meta
            property="og:description"
            content="Connect with MAGADH INFRA, based in Raipur, Chhattisgarh. Explore our business information and get in touch for enquiries. All India Permit."
          />
          <meta property="og:type" content="website" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content="MAGADH INFRA | All India Permit | Raipur, Chhattisgarh" />
          <meta
            name="twitter:description"
            content="Connect with MAGADH INFRA, based in Raipur, Chhattisgarh. Explore our business information and get in touch for enquiries. All India Permit."
          />
        </Helmet>

        {/* Global Navigation */}
        <Navbar />

        {/* Main Content Area */}
        <div className="flex-grow">
          <Home />
        </div>

        {/* Global Corporate Footer */}
        <Footer />

        {/* Floating Quick Action buttons (Call, WhatsApp & Back To Top) */}
        <QuickFloatActions />
      </div>
    </HelmetProvider>
  );
};

export default App;
