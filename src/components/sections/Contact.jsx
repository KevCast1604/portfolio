import React, { useState } from "react";
import {
  Mail,
  MapPin,
  Phone,
  ArrowUpRight,
  Copy,
  Check,
  Clock,
} from "lucide-react";
import { useLanguage } from "../../context/LanguageContext";

const Contact = () => {
  const { t } = useLanguage();
  const contactT = t("contact");
  const channelsT = contactT.channels || {};
  const slaT = contactT.sla || {};
  const formT = contactT.form || {};
  const errorsT = contactT.errors || {};

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [copied, setCopied] = useState(false);

  const FORMSPREE_URL = import.meta.env.VITE_FORMSPREE_ENDPOINT;

  const copyEmail = () => {
    const email = "kevin.castaneda.llanos@gmail.com";
    navigator.clipboard.writeText(email).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2400);
    });
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = errorsT.nameRequired || "Identifier / Name is required";
    }
    if (!formData.email.trim()) {
      newErrors.email = errorsT.emailRequired || "Valid communication email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = errorsT.emailInvalid || "Invalid email format";
    }

    if (!formData.subject.trim()) {
      newErrors.subject = errorsT.subjectRequired || "Subject / Scope is required";
    }
    if (!formData.message.trim()) {
      newErrors.message = errorsT.messageRequired || "Message content is required";
    } else if (formData.message.trim().length < 10) {
      newErrors.message = errorsT.messageMinLength || "Message must be at least 10 characters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) return;
    setIsSubmitting(true);

    try {
      const response = await fetch(FORMSPREE_URL, {
        method: "POST",
        headers: {
          Accept: "application/json",
        },
        body: new FormData(e.target),
      });

      if (response.ok) {
        setSubmitSuccess(true);
        setFormData({ name: "", email: "", subject: "", message: "" });
        setTimeout(() => setSubmitSuccess(false), 6000);
      } else {
        console.error("Transmission error:", response.statusText);
        alert(errorsT.transmissionError || "Transmission error. Please dispatch directly via email.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert(errorsT.networkError || "Network connection error. Please dispatch directly via email.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      className="relative bg-[#fafaf9] dark:bg-[#08080a] text-neutral-900 dark:text-neutral-100 transition-colors duration-500 py-28 sm:py-36 lg:py-44 border-t border-neutral-200/70 dark:border-neutral-800/60 overflow-hidden"
    >
      {/* Structural Architectural Guide Lines */}
      <div className="absolute inset-0 pointer-events-none select-none overflow-hidden">
        <div className="absolute top-0 left-6 sm:left-12 lg:left-24 bottom-0 w-px bg-neutral-200/50 dark:bg-neutral-800/40" />
        <div className="absolute top-0 right-6 sm:right-12 lg:right-24 bottom-0 w-px bg-neutral-200/50 dark:bg-neutral-800/40 hidden sm:block" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-12 lg:px-24">
        {/* Section Header Meta */}
        <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-4 pb-12 sm:pb-16 border-b border-neutral-200/80 dark:border-neutral-800/80">
          <div>
            <span className="font-mono text-xs uppercase tracking-widest text-neutral-400 dark:text-neutral-500 block mb-2">
              {contactT.meta}
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight text-neutral-950 dark:text-neutral-50">
              {contactT.title}
            </h2>
          </div>
          <p className="font-mono text-xs tracking-wider uppercase text-neutral-500 dark:text-neutral-400 max-w-sm">
            {contactT.tagline}
          </p>
        </div>

        {/* Asymmetric Two-Column Editorial Spread (No Generic Cards) */}
        <div className="mt-14 sm:mt-20 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Transmission Protocols & Channel Specs */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-10">
            <div>
              <h3 className="text-2xl sm:text-3xl font-medium tracking-tight text-neutral-950 dark:text-neutral-50 leading-snug">
                {contactT.heading}
              </h3>
              <p className="mt-4 text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed font-normal">
                {contactT.paragraph}
              </p>
            </div>

            {/* Channels Ledger */}
            <div className="border-t border-neutral-200/80 dark:border-neutral-800/80 divide-y divide-neutral-200/70 dark:divide-neutral-800/70">
              {/* Channel 01: Email */}
              <div className="py-4.5 flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 group">
                <div className="space-y-0.5">
                  <div className="flex items-center gap-2 text-neutral-400 dark:text-neutral-500 font-mono text-[11px] uppercase tracking-wider">
                    <Mail size={13} />
                    <span>{channelsT.emailLabel}</span>
                  </div>
                  <a
                    href="mailto:kevin.castaneda.llanos@gmail.com"
                    className="font-mono text-xs sm:text-sm text-neutral-900 dark:text-neutral-100 hover:text-neutral-600 dark:hover:text-neutral-300 transition-colors break-all"
                  >
                    kevin.castaneda.llanos@gmail.com
                  </a>
                </div>

                <button
                  type="button"
                  onClick={copyEmail}
                  aria-label="Copy email address"
                  className="self-start sm:self-center inline-flex items-center gap-1.5 px-2.5 py-1 font-mono text-[10px] tracking-wider uppercase border border-neutral-300 dark:border-neutral-700 text-neutral-700 dark:text-neutral-300 hover:bg-neutral-950 hover:text-white dark:hover:bg-neutral-100 dark:hover:text-neutral-950 transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)]"
                >
                  {copied ? (
                    <>
                      <Check size={12} className="text-emerald-500" />
                      <span className="text-emerald-500 font-semibold">{channelsT.copied}</span>
                    </>
                  ) : (
                    <>
                      <Copy size={12} />
                      <span>{channelsT.copy}</span>
                    </>
                  )}
                </button>
              </div>

              {/* Channel 02: Telephone */}
              <div className="py-4.5 flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 group">
                <div className="space-y-0.5">
                  <div className="flex items-center gap-2 text-neutral-400 dark:text-neutral-500 font-mono text-[11px] uppercase tracking-wider">
                    <Phone size={13} />
                    <span>{channelsT.phoneLabel}</span>
                  </div>
                  <a
                    href="tel:+51922922315"
                    className="font-mono text-xs sm:text-sm text-neutral-900 dark:text-neutral-100 hover:text-neutral-600 dark:hover:text-neutral-300 transition-colors"
                  >
                    +51 922 922 315
                  </a>
                </div>
                <span className="self-start sm:self-center font-mono text-[10px] tracking-widest text-neutral-400 dark:text-neutral-500">
                  UTC-5
                </span>
              </div>

              {/* Channel 03: Location */}
              <div className="py-4.5 flex flex-col sm:flex-row sm:items-center justify-between gap-2.5">
                <div className="space-y-0.5">
                  <div className="flex items-center gap-2 text-neutral-400 dark:text-neutral-500 font-mono text-[11px] uppercase tracking-wider">
                    <MapPin size={13} />
                    <span>{channelsT.locationLabel}</span>
                  </div>
                  <span className="font-mono text-xs sm:text-sm text-neutral-900 dark:text-neutral-100">
                    {channelsT.locationValue}
                  </span>
                </div>
                <span className="self-start sm:self-center font-mono text-[10px] tracking-widest text-emerald-600 dark:text-emerald-400">
                  {channelsT.locationStatus}
                </span>
              </div>
            </div>

            {/* SLA Protocol Banner */}
            <div className="p-4 sm:p-5 bg-neutral-100/70 dark:bg-neutral-900/40 border border-neutral-200/80 dark:border-neutral-800/80 font-mono text-xs space-y-2">
              <div className="flex items-center gap-2 text-neutral-900 dark:text-neutral-100 font-semibold tracking-wider uppercase text-[11px]">
                <Clock size={14} className="text-neutral-500" />
                <span>{slaT.title}</span>
              </div>
              <p className="text-neutral-500 dark:text-neutral-400 text-[11px] leading-relaxed">
                {slaT.desc}
              </p>
            </div>
          </div>

          {/* Right Column: Architectural Dispatch Form */}
          <div className="lg:col-span-7 bg-[#fafaf9] dark:bg-[#08080a] border border-neutral-200/80 dark:border-neutral-800/80 p-7 sm:p-10 lg:p-12">
            <div className="flex items-center justify-between pb-6 mb-8 border-b border-neutral-200/80 dark:border-neutral-800/80">
              <span className="font-mono text-xs uppercase tracking-widest text-neutral-400 dark:text-neutral-500">
                {formT.header}
              </span>
            </div>

            {/* Transmission Status Feedback */}
            {submitSuccess && (
              <div className="mb-8 p-4 bg-emerald-500/10 border border-emerald-500/30 text-emerald-600 dark:text-emerald-400 font-mono text-xs">
                <div className="flex items-center gap-2 font-semibold tracking-wider uppercase">
                  <Check size={14} />
                  <span>{formT.successTitle}</span>
                </div>
                <p className="mt-1 text-[11px] opacity-90">
                  {formT.successDesc}
                </p>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {/* Name */}
                <div>
                  <label
                    htmlFor="name"
                    className="block font-mono text-xs uppercase tracking-wider text-neutral-700 dark:text-neutral-300 mb-2"
                  >
                    {formT.nameLabel} <span className="text-neutral-400">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 bg-neutral-100/50 dark:bg-neutral-900/50 border ${
                      errors.name
                        ? "border-red-500 dark:border-red-400"
                        : "border-neutral-300 dark:border-neutral-700"
                    } text-neutral-950 dark:text-neutral-50 font-mono text-xs focus:border-neutral-950 dark:focus:border-neutral-100 focus:outline-none transition-colors duration-300 ease-[cubic-bezier(0.16,1,0.3,1)]`}
                    placeholder={formT.namePlaceholder}
                  />
                  {errors.name && (
                    <p className="font-mono text-[11px] text-red-500 dark:text-red-400 mt-1.5">
                      // {errors.name}
                    </p>
                  )}
                </div>

                {/* Email */}
                <div>
                  <label
                    htmlFor="email"
                    className="block font-mono text-xs uppercase tracking-wider text-neutral-700 dark:text-neutral-300 mb-2"
                  >
                    {formT.emailLabel} <span className="text-neutral-400">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 bg-neutral-100/50 dark:bg-neutral-900/50 border ${
                      errors.email
                        ? "border-red-500 dark:border-red-400"
                        : "border-neutral-300 dark:border-neutral-700"
                    } text-neutral-950 dark:text-neutral-50 font-mono text-xs focus:border-neutral-950 dark:focus:border-neutral-100 focus:outline-none transition-colors duration-300 ease-[cubic-bezier(0.16,1,0.3,1)]`}
                    placeholder={formT.emailPlaceholder}
                  />
                  {errors.email && (
                    <p className="font-mono text-[11px] text-red-500 dark:text-red-400 mt-1.5">
                      // {errors.email}
                    </p>
                  )}
                </div>
              </div>

              {/* Subject */}
              <div>
                <label
                  htmlFor="subject"
                  className="block font-mono text-xs uppercase tracking-wider text-neutral-700 dark:text-neutral-300 mb-2"
                >
                  {formT.subjectLabel} <span className="text-neutral-400">*</span>
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 bg-neutral-100/50 dark:bg-neutral-900/50 border ${
                    errors.subject
                      ? "border-red-500 dark:border-red-400"
                      : "border-neutral-300 dark:border-neutral-700"
                  } text-neutral-950 dark:text-neutral-50 font-mono text-xs focus:border-neutral-950 dark:focus:border-neutral-100 focus:outline-none transition-colors duration-300 ease-[cubic-bezier(0.16,1,0.3,1)]`}
                  placeholder={formT.subjectPlaceholder}
                />
                {errors.subject && (
                  <p className="font-mono text-[11px] text-red-500 dark:text-red-400 mt-1.5">
                    // {errors.subject}
                  </p>
                )}
              </div>

              {/* Message */}
              <div>
                <label
                  htmlFor="message"
                  className="block font-mono text-xs uppercase tracking-wider text-neutral-700 dark:text-neutral-300 mb-2"
                >
                  {formT.messageLabel} <span className="text-neutral-400">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 bg-neutral-100/50 dark:bg-neutral-900/50 border ${
                    errors.message
                      ? "border-red-500 dark:border-red-400"
                      : "border-neutral-300 dark:border-neutral-700"
                  } text-neutral-950 dark:text-neutral-50 font-mono text-xs focus:border-neutral-950 dark:focus:border-neutral-100 focus:outline-none transition-colors duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] resize-none leading-relaxed`}
                  placeholder={formT.messagePlaceholder}
                ></textarea>
                {errors.message && (
                  <p className="font-mono text-[11px] text-red-500 dark:text-red-400 mt-1.5">
                    // {errors.message}
                  </p>
                )}
              </div>

              {/* Submit Dispatch Action */}
              <div className="pt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <span className="font-mono text-[11px] text-neutral-400 dark:text-neutral-500">
                  {formT.validationNotice}
                </span>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`group relative inline-flex items-center justify-center gap-2.5 px-8 py-3.5 text-xs font-mono uppercase tracking-wider transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] active:scale-[0.98] ${
                    isSubmitting
                      ? "bg-neutral-400 dark:bg-neutral-700 text-neutral-200 cursor-not-allowed"
                      : "bg-neutral-950 text-neutral-50 hover:bg-neutral-800 dark:bg-neutral-100 dark:text-neutral-950 dark:hover:bg-neutral-200"
                  }`}
                >
                  {isSubmitting ? (
                    <>
                      <span className="animate-spin text-sm">⟳</span>
                      <span>{formT.btnDispatching}</span>
                    </>
                  ) : (
                    <>
                      <span>{formT.btnTransmit}</span>
                      <ArrowUpRight
                        size={14}
                        className="transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                      />
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
