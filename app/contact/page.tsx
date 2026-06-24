"use client";

import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { sendEmail } from "@/app/actions/sendEmail";
import FadeIn from "@/components/FadeIn";

export default function Contact() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    serviceType: "",
    additionalInfo: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    // Simple validation
    if (!formData.firstName || !formData.email || !formData.serviceType) {
      setError("Please fill out all required fields (First Name, Email, and Service Type).");
      return;
    }

    setIsSubmitting(true);

    try {
      const result = await sendEmail(formData);
      if (result.success) {
        setIsSubmitted(true);
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          serviceType: "",
          additionalInfo: "",
        });
      } else {
        setError(result.error || "Something went wrong. Please try again later.");
      }
    } catch (err) {
      setError("An unexpected error occurred.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Header */}
      <Header />

      {/* Main Content */}
      <main className="flex-grow py-12 md:py-20">
        <div className="max-w-4xl mx-auto px-6">
          <FadeIn direction="up" delay={0} className="mb-10">
            <h1 className="text-4xl md:text-5xl font-extrabold text-brand-primary tracking-tight">Get In Touch</h1>
            <p className="mt-3 text-base md:text-lg text-brand-darker/70">
              Tell us about your project and we&apos;ll get back to you shortly.
            </p>
          </FadeIn>

          <FadeIn direction="up" delay={0.15}>
          {isSubmitted ? (
            /* Success State */
            <div className="bg-[#f0f5ff] border-2 border-brand-primary rounded-[2.5rem] p-12 text-center my-12 animate-in fade-in zoom-in-95 duration-300">
              <div className="w-20 h-20 bg-brand-primary rounded-full flex items-center justify-center mx-auto mb-6 text-white text-4xl shadow-lg shadow-brand-primary/20">
                ✓
              </div>
              <h2 className="text-3xl font-extrabold text-brand-darker mb-4">Message Sent!</h2>
              <p className="text-lg text-brand-darker/70 max-w-md mx-auto mb-8">
                Thank you for reaching out to Afro Admiral Inc. We have received your request and will get back to you shortly.
              </p>
              <button
                onClick={() => setIsSubmitted(false)}
                className="px-8 py-3 bg-brand-primary hover:bg-brand-dark text-white font-semibold rounded-full transition-smooth shadow-md hover:shadow-lg active:scale-98"
              >
                Send Another Message
              </button>
            </div>
          ) : (
            /* Form State */
            <form onSubmit={handleSubmit} className="space-y-10">
              {error && (
                <div className="p-4 bg-red-50 border border-red-200 text-red-700 rounded-2xl text-sm font-medium">
                  {error}
                </div>
              )}

              {/* Row 1: First Name & Email */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
                <div className="flex flex-col space-y-3">
                  <label htmlFor="firstName" className="text-xl md:text-2xl font-bold text-[#0a2d8f] pl-1">
                    First Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    className="w-full h-16 px-8 rounded-full border-[3px] border-[#0e4ee5] focus:outline-none focus:ring-4 focus:ring-brand-primary/10 text-brand-darker font-medium text-lg placeholder-gray-400 bg-white transition-smooth"
                    placeholder="Afro"
                    required
                  />
                </div>
                <div className="flex flex-col space-y-3">
                  <label htmlFor="email" className="text-xl md:text-2xl font-bold text-[#0a2d8f] pl-1">
                    Email <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full h-16 px-8 rounded-full border-[3px] border-[#0e4ee5] focus:outline-none focus:ring-4 focus:ring-brand-primary/10 text-brand-darker font-medium text-lg placeholder-gray-400 bg-white transition-smooth"
                    placeholder="solomon@example.com"
                    required
                  />
                </div>
              </div>

              {/* Row 2: Last Name & Telephone Number */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
                <div className="flex flex-col space-y-3">
                  <label htmlFor="lastName" className="text-xl md:text-2xl font-bold text-[#0a2d8f] pl-1">
                    Last Name
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    className="w-full h-16 px-8 rounded-full border-[3px] border-[#0e4ee5] focus:outline-none focus:ring-4 focus:ring-brand-primary/10 text-brand-darker font-medium text-lg placeholder-gray-400 bg-white transition-smooth"
                    placeholder="Admiral"
                  />
                </div>
                <div className="flex flex-col space-y-3">
                  <label htmlFor="phone" className="text-xl md:text-2xl font-bold text-[#0a2d8f] pl-1">
                    Telephone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full h-16 px-8 rounded-full border-[3px] border-[#0e4ee5] focus:outline-none focus:ring-4 focus:ring-brand-primary/10 text-brand-darker font-medium text-lg placeholder-gray-400 bg-white transition-smooth"
                    placeholder="xxx xxx xxxx"
                  />
                </div>
              </div>

              {/* Row 3: Service Type Dropdown */}
              <div className="flex flex-col space-y-3">
                <label htmlFor="serviceType" className="text-xl md:text-2xl font-bold text-[#0a2d8f] pl-1">
                  Service Type <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <select
                    id="serviceType"
                    name="serviceType"
                    value={formData.serviceType}
                    onChange={handleChange}
                    className="w-full h-16 px-8 rounded-full border-[3px] border-[#0e4ee5] focus:outline-none focus:ring-4 focus:ring-brand-primary/10 text-brand-darker font-medium text-lg bg-white appearance-none cursor-pointer transition-smooth"
                    required
                  >
                    <option value="" disabled>Select a service...</option>
                    <option value="Public Relations">Public Relations</option>
                    <option value="Advertising">Advertising</option>
                    <option value="Production">Production</option>
                    <option value="Brand and Event Management">Brand and Event Management</option>
                    <option value="Lobby Services">Lobby Services</option>
                    <option value="Content/Ghost Writing">Content/Ghost Writing</option>
                    <option value="Corporate/Governance Liaison">Corporate/Governance Liaison</option>
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-6 flex items-center px-2 text-brand-primary">
                    <svg className="fill-current h-6 w-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                      <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Row 4: Additional Information Textarea */}
              <div className="flex flex-col space-y-3">
                <label htmlFor="additionalInfo" className="text-xl md:text-2xl font-bold text-[#0a2d8f] pl-1">
                  Additional Information (Optional)
                </label>
                <textarea
                  id="additionalInfo"
                  name="additionalInfo"
                  value={formData.additionalInfo}
                  onChange={handleChange}
                  rows={8}
                  className="w-full p-8 rounded-[2rem] border-[3px] border-[#0e4ee5] focus:outline-none focus:ring-4 focus:ring-brand-primary/10 text-brand-darker font-medium text-lg placeholder-gray-400 bg-white resize-none transition-smooth"
                  placeholder="Tell us more about your request or project details..."
                />
              </div>

              {/* Submit Button */}
              <div className="flex justify-center pt-4">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="px-12 py-4 bg-brand-primary hover:bg-brand-dark disabled:bg-gray-400 text-white font-bold text-lg rounded-full transition-smooth shadow-lg hover:shadow-xl active:scale-[0.98] transform flex items-center space-x-3 cursor-pointer"
                >
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                      </svg>
                      <span>Submitting...</span>
                    </>
                  ) : (
                    <span>Submit Request</span>
                  )}
                </button>
              </div>
            </form>
          )}
          </FadeIn>
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
