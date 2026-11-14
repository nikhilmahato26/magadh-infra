import React from 'react';
import { Phone, Mail, MapPin, FileText, CheckCircle2, Copy, Check } from 'lucide-react';
import { BUSINESS_CONFIG, getTelUrl, getMailtoUrl } from '../config/business';

export const ContactCard: React.FC = () => {
  const [copiedGst, setCopiedGst] = React.useState(false);

  const handleCopyGst = () => {
    navigator.clipboard.writeText(BUSINESS_CONFIG.gstNumber);
    setCopiedGst(true);
    setTimeout(() => setCopiedGst(false), 2000);
  };

  return (
    <div className="bg-white rounded-xl border border-steel-200/80 shadow-corporate overflow-hidden">
      {/* Top Banner */}
      <div className="bg-navy-900 px-6 py-5 text-white flex items-center justify-between border-b border-navy-800">
        <div>
          <span className="text-xs font-semibold text-accent-orange tracking-wider uppercase">
            Official Business Details
          </span>
          <h3 className="font-heading text-xl font-bold text-white mt-0.5">
            {BUSINESS_CONFIG.name}
          </h3>
        </div>
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-white/10 text-white border border-white/15">
          <CheckCircle2 className="w-3.5 h-3.5 text-accent-orange" />
          {BUSINESS_CONFIG.coverage.title}
        </span>
      </div>

      <div className="p-6 sm:p-8 space-y-6">
        {/* Contact Numbers */}
        <div>
          <div className="flex items-center gap-2 text-xs font-bold text-steel-500 uppercase tracking-wider mb-3">
            <Phone className="w-4 h-4 text-accent-orange" />
            <span>Direct Contact Numbers (Click to Call)</span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {BUSINESS_CONFIG.phones.map((phone, idx) => (
              <a
                key={idx}
                href={getTelUrl(phone.value)}
                className="group flex flex-col p-3 rounded-lg border border-steel-200 hover:border-accent-orange bg-steel-50/50 hover:bg-orange-50/30 transition-all"
                title={`Call ${phone.display}`}
              >
                <span className="text-[11px] text-steel-500 font-medium group-hover:text-accent-orange">
                  {phone.label || `Line ${idx + 1}`}
                </span>
                <span className="font-heading font-bold text-navy-900 group-hover:text-accent-orange text-sm sm:text-base mt-0.5">
                  {phone.display}
                </span>
              </a>
            ))}
          </div>
        </div>

        {/* Email Address */}
        <div>
          <div className="flex items-center gap-2 text-xs font-bold text-steel-500 uppercase tracking-wider mb-2">
            <Mail className="w-4 h-4 text-accent-orange" />
            <span>Official Email</span>
          </div>
          <a
            href={getMailtoUrl(BUSINESS_CONFIG.email)}
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg border border-steel-200 hover:border-navy-700 bg-steel-50/50 hover:bg-navy-50/50 text-navy-900 hover:text-navy-700 font-medium text-sm transition-all"
            title="Send an email to MAGADH INFRA"
          >
            <span>{BUSINESS_CONFIG.email}</span>
          </a>
        </div>

        {/* Registered Address */}
        <div>
          <div className="flex items-center gap-2 text-xs font-bold text-steel-500 uppercase tracking-wider mb-2">
            <MapPin className="w-4 h-4 text-accent-orange shrink-0" />
            <span>Business Address</span>
          </div>
          <div className="p-4 rounded-lg bg-steel-50 border border-steel-200 text-sm text-navy-900 leading-relaxed font-normal">
            <p className="font-semibold text-navy-900">
              {BUSINESS_CONFIG.location.colony},
            </p>
            <p className="text-steel-700">
              {BUSINESS_CONFIG.location.landmark}, {BUSINESS_CONFIG.location.area},
            </p>
            <p className="text-steel-700">
              {BUSINESS_CONFIG.location.city}, {BUSINESS_CONFIG.location.state} –{' '}
              {BUSINESS_CONFIG.location.pincode}, {BUSINESS_CONFIG.location.country}
            </p>
          </div>
        </div>

        {/* GST Registration Panel */}
        <div className="pt-2 border-t border-steel-200/80 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-md bg-navy-100 flex items-center justify-center text-navy-900 shrink-0">
              <FileText className="w-4 h-4 text-navy-700" />
            </div>
            <div>
              <span className="block text-[11px] font-semibold text-steel-500 uppercase tracking-wider">
                GSTIN / Tax Identifier
              </span>
              <span className="font-mono font-bold text-navy-900 text-sm tracking-wide">
                {BUSINESS_CONFIG.gstNumber}
              </span>
            </div>
          </div>

          <button
            type="button"
            onClick={handleCopyGst}
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-steel-600 hover:text-navy-900 px-3 py-1.5 rounded-md border border-steel-200 hover:bg-steel-100 transition-colors self-start sm:self-auto cursor-pointer"
            aria-label="Copy GST Number"
          >
            {copiedGst ? (
              <>
                <Check className="w-3.5 h-3.5 text-emerald-600" />
                <span className="text-emerald-700">Copied</span>
              </>
            ) : (
              <>
                <Copy className="w-3.5 h-3.5" />
                <span>Copy GST</span>
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};
