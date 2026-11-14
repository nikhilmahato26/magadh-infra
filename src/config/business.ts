export interface ContactPhone {
  display: string;
  value: string;
  isPrimary?: boolean;
  label?: string;
}

export interface BusinessConfig {
  name: string;
  tagline: string;
  heroHeading: string;
  heroSubheading: string;
  gstNumber: string;
  coverage: {
    title: string;
    description: string;
    scope: string;
  };
  location: {
    city: string;
    state: string;
    pincode: string;
    country: string;
    landmark: string;
    colony: string;
    area: string;
    fullAddress: string;
  };
  phones: ContactPhone[];
  email: string;
  whatsapp: {
    // Configurable active WhatsApp recipient number (e.g. '919424254090')
    // Defaults to the first contact number with country code, easily changed anytime.
    activeNumber: string;
    defaultMessage: string;
    formIntroMessage: string;
  };
  about: {
    heading: string;
    summary: string;
    missionFocus: string;
  };
  services: {
    placeholderNotice: string;
    expansionNote: string;
    // When MAGADH INFRA provides specific service categories in the future,
    // they can be enabled here without altering the page layout.
    categories: Array<{
      id: string;
      title: string;
      description: string;
    }>;
  };
  whyChooseUs: Array<{
    title: string;
    description: string;
    icon: string;
  }>;
}

export const BUSINESS_CONFIG: BusinessConfig = {
  name: "MAGADH INFRA",
  tagline: "Professional Corporate Services with All India Permit",
  heroHeading: "BUILDING TRUST. CONNECTING OPPORTUNITIES.",
  heroSubheading:
    "Welcome to MAGADH INFRA — your business connection for professional services with an All India Permit.",
  gstNumber: "22HRDPK5087E1Z9",
  coverage: {
    title: "ALL INDIA PERMIT",
    description: "Based in Raipur, Chhattisgarh, MAGADH INFRA has All India Permit coverage.",
    scope: "All India Coverage across states and union territories",
  },
  location: {
    colony: "RAWATPURA COLONY PHASE 2",
    landmark: "NEAR SAI MANDIR",
    area: "MATHPURENA",
    city: "RAIPUR",
    state: "CHHATTISGARH",
    pincode: "492013",
    country: "INDIA",
    fullAddress:
      "RAWATPURA COLONY PHASE 2, NEAR SAI MANDIR, MATHPURENA, RAIPUR, CHHATTISGARH – 492013, INDIA",
  },
  phones: [
    {
      display: "+91 94242 54090",
      value: "9424254090",
      isPrimary: true,
      label: "Main Enquiry",
    },
    {
      display: "+91 78801 04441",
      value: "7880104441",
      isPrimary: false,
      label: "Support & Coordination",
    },
    {
      display: "+91 94792 52524",
      value: "9479252524",
      isPrimary: false,
      label: "Direct Line",
    },
  ],
  email: "magadhinfra.cg@gmail.com",
  whatsapp: {
    // Configurable target phone number for WhatsApp interactions (prefix with 91 for India)
    activeNumber: "919424254090",
    defaultMessage:
      "Hello MAGADH INFRA, I visited your website and would like to know more about your business and services. Please share the details.",
    formIntroMessage:
      "Hello MAGADH INFRA, I would like to submit a business enquiry through your website.",
  },
  about: {
    heading: "About MAGADH INFRA",
    summary:
      "MAGADH INFRA is a business based in Raipur, Chhattisgarh, with All India Permit coverage. We aim to make it easy for customers and business partners to connect with us through direct communication and professional service.",
    missionFocus:
      "Established with a commitment to straightforward communication and nationwide reach, MAGADH INFRA provides a reliable corporate point of contact for clients across India.",
  },
  services: {
    placeholderNotice:
      "Connect with MAGADH INFRA to discuss your business requirements and available services.",
    expansionNote:
      "Our service operations and project capabilities can be tailored to your requirements. Contact our team directly to discuss specifications and cooperation.",
    categories: [], // Intentionally empty per requirements: No unverified services invented.
  },
  whyChooseUs: [
    {
      title: "All India Permit",
      description:
        "Authorized nationwide coverage allowing seamless connectivity and business reach across state borders.",
      icon: "Globe2",
    },
    {
      title: "Based in Raipur, Chhattisgarh",
      description:
        "Strategically located in central India with easy transit and administrative connectivity.",
      icon: "MapPin",
    },
    {
      title: "Multiple Direct Contact Numbers",
      description:
        "Three verified active phone lines ensuring prompt accessibility and responsive personal assistance.",
      icon: "PhoneCall",
    },
    {
      title: "Direct Email Communication",
      description:
        "Dedicated corporate email mailbox for official documentation, enquiries, and correspondence.",
      icon: "Mail",
    },
  ],
};

/**
 * Helper to build an encoded WhatsApp URL with a prefilled message
 */
export function getWhatsAppUrl(
  phone: string = BUSINESS_CONFIG.whatsapp.activeNumber,
  message: string = BUSINESS_CONFIG.whatsapp.defaultMessage
): string {
  // Clean phone number (strip spaces, dashes, plus signs)
  const cleanPhone = phone.replace(/\D/g, "");
  const encodedMessage = encodeURIComponent(message);
  return `https://wa.me/${cleanPhone}?text=${encodedMessage}`;
}

/**
 * Helper to format phone for tel: links
 */
export function getTelUrl(phone: string): string {
  const cleanPhone = phone.replace(/\D/g, "");
  // If 10 digits, prepend +91 for India
  if (cleanPhone.length === 10) {
    return `tel:+91${cleanPhone}`;
  }
  return `tel:+${cleanPhone}`;
}

/**
 * Helper for mailto: links
 */
export function getMailtoUrl(
  email: string = BUSINESS_CONFIG.email,
  subject: string = "Business Enquiry - MAGADH INFRA"
): string {
  return `mailto:${email}?subject=${encodeURIComponent(subject)}`;
}
