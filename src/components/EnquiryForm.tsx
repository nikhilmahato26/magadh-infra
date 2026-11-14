import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Send, CheckCircle2, AlertCircle, MessageSquare, ExternalLink } from 'lucide-react';
import { BUSINESS_CONFIG, getWhatsAppUrl } from '../config/business';
import { Button } from './Button';

const enquirySchema = z.object({
  fullName: z
    .string()
    .trim()
    .min(2, { message: 'Please enter your full name (at least 2 characters)' }),
  phone: z
    .string()
    .trim()
    .regex(/^[0-9+ \-]{10,15}$/, {
      message: 'Please enter a valid 10-digit phone number',
    }),
  email: z
    .string()
    .trim()
    .email({ message: 'Please enter a valid email address' }),
  subject: z
    .string()
    .trim()
    .min(3, { message: 'Please provide an enquiry subject' }),
  message: z
    .string()
    .trim()
    .min(10, { message: 'Message must be at least 10 characters long' }),
});

type EnquiryFormData = z.infer<typeof enquirySchema>;

export const EnquiryForm: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedUrl, setSubmittedUrl] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<EnquiryFormData>({
    resolver: zodResolver(enquirySchema),
    defaultValues: {
      fullName: '',
      phone: '',
      email: '',
      subject: '',
      message: '',
    },
  });

  const onSubmit = (data: EnquiryFormData) => {
    setIsSubmitting(true);

    // Format the WhatsApp message with business details and client enquiry
    const formattedMessage = [
      `*NEW BUSINESS ENQUIRY - MAGADH INFRA*`,
      `---------------------------------`,
      `👤 *Name:* ${data.fullName}`,
      `📞 *Phone:* ${data.phone}`,
      `✉️ *Email:* ${data.email}`,
      `📋 *Subject:* ${data.subject}`,
      `---------------------------------`,
      `💬 *Message:*`,
      data.message,
      `---------------------------------`,
      `_Sent via website enquiry portal_`,
    ].join('\n');

    const whatsappUrl = getWhatsAppUrl(
      BUSINESS_CONFIG.whatsapp.activeNumber,
      formattedMessage
    );

    // Provide a brief loading state for feedback
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmittedUrl(whatsappUrl);

      // Open WhatsApp in a new tab/window
      const win = window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
      if (!win) {
        // In case popup blockers prevent automatic opening, user can click the button
      }
    }, 600);
  };

  const handleResetForm = () => {
    reset();
    setSubmittedUrl(null);
  };

  return (
    <div className="bg-white rounded-xl border border-steel-200/80 shadow-corporate p-6 sm:p-8">
      <div className="border-b border-steel-100 pb-5 mb-6">
        <div className="flex items-center gap-2 text-accent-orange font-semibold text-xs uppercase tracking-wider mb-1">
          <MessageSquare className="w-4 h-4" />
          <span>Direct WhatsApp Enquiry Generator</span>
        </div>
        <h3 className="font-heading text-xl font-bold text-navy-900">
          Send a Business Message
        </h3>
        <p className="text-sm text-steel-500 mt-1">
          Complete the details below to generate an instant enquiry via WhatsApp.
        </p>
      </div>

      {submittedUrl ? (
        <div className="rounded-lg bg-emerald-50 border border-emerald-200 p-6 text-center space-y-4">
          <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center mx-auto text-emerald-600">
            <CheckCircle2 className="w-6 h-6" />
          </div>
          <div>
            <h4 className="font-heading font-bold text-emerald-950 text-lg">
              WhatsApp Enquiry Generated!
            </h4>
            <p className="text-sm text-emerald-800 mt-1 max-w-md mx-auto">
              Your message was compiled and redirected to WhatsApp. If the chat window did not open automatically, click the button below to proceed.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
            <Button
              href={submittedUrl}
              isExternal
              variant="whatsapp"
              size="md"
              rightIcon={<ExternalLink className="w-4 h-4" />}
            >
              Open WhatsApp Chat Now
            </Button>
            <Button
              type="button"
              variant="outline"
              size="md"
              onClick={handleResetForm}
            >
              Send Another Enquiry
            </Button>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4" noValidate>
          {/* Full Name */}
          <div>
            <label
              htmlFor="fullName"
              className="block text-xs font-bold text-navy-900 uppercase tracking-wider mb-1.5"
            >
              Full Name <span className="text-accent-orange">*</span>
            </label>
            <input
              id="fullName"
              type="text"
              placeholder="e.g. Rahul Sharma"
              {...register('fullName')}
              className={`w-full px-3.5 py-2.5 rounded-lg border text-sm text-navy-900 placeholder:text-steel-400 focus:outline-none transition-all ${
                errors.fullName
                  ? 'border-red-500 focus:ring-1 focus:ring-red-500 bg-red-50/20'
                  : 'border-steel-300 focus:border-navy-700 focus:ring-1 focus:ring-navy-700 bg-white'
              }`}
              disabled={isSubmitting}
            />
            {errors.fullName && (
              <p className="flex items-center gap-1 text-xs text-red-600 mt-1 font-medium">
                <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                <span>{errors.fullName.message}</span>
              </p>
            )}
          </div>

          {/* Grid: Phone & Email */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Phone */}
            <div>
              <label
                htmlFor="phone"
                className="block text-xs font-bold text-navy-900 uppercase tracking-wider mb-1.5"
              >
                Phone Number <span className="text-accent-orange">*</span>
              </label>
              <input
                id="phone"
                type="tel"
                placeholder="e.g. 9876543210"
                {...register('phone')}
                className={`w-full px-3.5 py-2.5 rounded-lg border text-sm text-navy-900 placeholder:text-steel-400 focus:outline-none transition-all ${
                  errors.phone
                    ? 'border-red-500 focus:ring-1 focus:ring-red-500 bg-red-50/20'
                    : 'border-steel-300 focus:border-navy-700 focus:ring-1 focus:ring-navy-700 bg-white'
                }`}
                disabled={isSubmitting}
              />
              {errors.phone && (
                <p className="flex items-center gap-1 text-xs text-red-600 mt-1 font-medium">
                  <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                  <span>{errors.phone.message}</span>
                </p>
              )}
            </div>

            {/* Email */}
            <div>
              <label
                htmlFor="email"
                className="block text-xs font-bold text-navy-900 uppercase tracking-wider mb-1.5"
              >
                Email Address <span className="text-accent-orange">*</span>
              </label>
              <input
                id="email"
                type="email"
                placeholder="e.g. rahul@example.com"
                {...register('email')}
                className={`w-full px-3.5 py-2.5 rounded-lg border text-sm text-navy-900 placeholder:text-steel-400 focus:outline-none transition-all ${
                  errors.email
                    ? 'border-red-500 focus:ring-1 focus:ring-red-500 bg-red-50/20'
                    : 'border-steel-300 focus:border-navy-700 focus:ring-1 focus:ring-navy-700 bg-white'
                }`}
                disabled={isSubmitting}
              />
              {errors.email && (
                <p className="flex items-center gap-1 text-xs text-red-600 mt-1 font-medium">
                  <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                  <span>{errors.email.message}</span>
                </p>
              )}
            </div>
          </div>

          {/* Subject */}
          <div>
            <label
              htmlFor="subject"
              className="block text-xs font-bold text-navy-900 uppercase tracking-wider mb-1.5"
            >
              Subject / Requirement <span className="text-accent-orange">*</span>
            </label>
            <input
              id="subject"
              type="text"
              placeholder="e.g. Inquiry regarding All India Permit cooperation"
              {...register('subject')}
              className={`w-full px-3.5 py-2.5 rounded-lg border text-sm text-navy-900 placeholder:text-steel-400 focus:outline-none transition-all ${
                errors.subject
                  ? 'border-red-500 focus:ring-1 focus:ring-red-500 bg-red-50/20'
                  : 'border-steel-300 focus:border-navy-700 focus:ring-1 focus:ring-navy-700 bg-white'
              }`}
              disabled={isSubmitting}
            />
            {errors.subject && (
              <p className="flex items-center gap-1 text-xs text-red-600 mt-1 font-medium">
                <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                <span>{errors.subject.message}</span>
              </p>
            )}
          </div>

          {/* Message */}
          <div>
            <label
              htmlFor="message"
              className="block text-xs font-bold text-navy-900 uppercase tracking-wider mb-1.5"
            >
              Message <span className="text-accent-orange">*</span>
            </label>
            <textarea
              id="message"
              rows={4}
              placeholder="Please provide details of your enquiry or business requirement..."
              {...register('message')}
              className={`w-full px-3.5 py-2.5 rounded-lg border text-sm text-navy-900 placeholder:text-steel-400 focus:outline-none transition-all resize-none ${
                errors.message
                  ? 'border-red-500 focus:ring-1 focus:ring-red-500 bg-red-50/20'
                  : 'border-steel-300 focus:border-navy-700 focus:ring-1 focus:ring-navy-700 bg-white'
              }`}
              disabled={isSubmitting}
            ></textarea>
            {errors.message && (
              <p className="flex items-center gap-1 text-xs text-red-600 mt-1 font-medium">
                <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                <span>{errors.message.message}</span>
              </p>
            )}
          </div>

          {/* Submission Info Notice */}
          <div className="rounded-lg bg-steel-50 border border-steel-200/80 p-3 text-xs text-steel-600 flex items-start gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-accent-orange shrink-0 mt-1.5"></span>
            <p>
              Submitting this form prepares a formatted enquiry that opens directly in WhatsApp for prompt communication with MAGADH INFRA.
            </p>
          </div>

          {/* Submit Button */}
          <Button
            type="submit"
            variant="primary"
            size="lg"
            isLoading={isSubmitting}
            className="w-full justify-center"
            rightIcon={<Send className="w-4 h-4" />}
          >
            {isSubmitting ? 'Preparing WhatsApp Message...' : 'Submit via WhatsApp'}
          </Button>
        </form>
      )}
    </div>
  );
};
