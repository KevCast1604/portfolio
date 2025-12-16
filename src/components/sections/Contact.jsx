import React, { useState } from "react";
import { Mail, MapPin, Phone, Send } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const FORMSPREE_URL = import.meta.env.VITE_FORMSPREE_ENDPOINT;;

  // ✅ FORM VALIDATION
  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(formData.email))
      newErrors.email = "Invalid email";

    if (!formData.subject.trim()) newErrors.subject = "Subject is required";
    if (!formData.message.trim()) newErrors.message = "Message is required";
    else if (formData.message.trim().length < 10)
      newErrors.message = "Message must be at least 10 characters";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // ✅ HANDLE INPUT
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  // ✅ SUBMIT TO FORMSPREE
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
        setTimeout(() => setSubmitSuccess(false), 5000);
      } else {
        console.error("Error sending message:", response.statusText);
        alert("Error sending message. Try again later.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Connection error. Try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: <Mail size={24} />,
      title: "Email",
      value: "kevin.castaneda.llanos@gmail.com",
      link: "mailto:kevin.castaneda.llanos@gmail.com",
    },
    {
      icon: <Phone size={24} />,
      title: "Telephone",
      value: "+51 922 922 315",
      link: "tel:+51922922315",
    },
    {
      icon: <MapPin size={24} />,
      title: "Location",
      value: "Lima, Perú",
      link: null,
    },
  ];

  return (
    <section id="contact" className="py-20 bg-gray-900 px-4">
      <div className="mt-16 max-w-6xl mx-auto">
        {/* Section Title */}
        <h2 className="text-3xl sm:text-4xl font-bold text-white text-center mb-4">
          Let's Work Together
        </h2>
        <div className="h-1 w-20 mb-16 bg-cyan-400 mx-auto"></div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact Info */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-6 text-center">
              Contact Information
            </h3>
            <div className="space-y-4 mb-8">
              {contactInfo.map((info, idx) => (
                <div
  key={idx}
  className="
    flex flex-col gap-3 p-4 bg-gray-800 rounded-lg border border-gray-700
    hover:border-cyan-400 transition-colors
    sm:flex-row sm:items-start sm:gap-4
  "
>
  <span className="text-cyan-400 sm:mt-1">{info.icon}</span>

  <div className="min-w-0">
    <p className="text-gray-400 text-sm mb-1">{info.title}</p>

    {info.link ? (
      <a
        href={info.link}
        className="
          text-white font-medium hover:text-cyan-400 transition-colors
          break-words
        "
      >
        {info.value}
      </a>
    ) : (
      <p className="text-white font-medium break-words">{info.value}</p>
    )}
  </div>
</div>

              ))}
            </div>

            {/* Additional Info */}
            <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
              <h4 className="text-xl font-bold text-white mb-3">Answer Time</h4>
              <p className="text-gray-400 text-sm leading-relaxed">
                Normally within a few hours to max 24 hours. I try to respond as
                quickly as possible.
              </p>
            </div>
          </div>

          {/* Contact Form */}
<div className="bg-gray-800 rounded-lg border border-gray-700 mx-auto w-full p-5 sm:p-8">
            <h3 className="text-2xl font-bold text-white mb-6">
              Send me a message
            </h3>

            {submitSuccess && (
              <div className="mb-6 p-4 bg-green-500/10 border border-green-500 rounded-lg">
                <p className="text-green-400 text-sm">
                  ✅ Message sent successfully! I'll reply as soon as possible.
                </p>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Name */}
              <div>
                <label className="block text-gray-300 mb-2 text-sm font-medium">
                  Name *
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={`w-full px-3 py-2.5 sm:px-4 sm:py-3 bg-gray-900 border ${
  errors.name ? "border-red-500" : "border-gray-700"
} rounded-lg text-white focus:border-cyan-400 focus:outline-none transition-colors`}
                  placeholder="Your Name"
                />
                {errors.name && (
                  <p className="text-red-400 text-xs mt-1">{errors.name}</p>
                )}
              </div>

              {/* Email */}
              <div>
                <label className="block text-gray-300 mb-2 text-sm font-medium">
                  Email *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 bg-gray-900 border ${
                    errors.email ? "border-red-500" : "border-gray-700"
                  } rounded-lg text-white focus:border-cyan-400 focus:outline-none transition-colors`}
                  placeholder="your@email.com"
                />
                {errors.email && (
                  <p className="text-red-400 text-xs mt-1">{errors.email}</p>
                )}
              </div>

              {/* Subject */}
              <div>
                <label className="block text-gray-300 mb-2 text-sm font-medium">
                  Subject *
                </label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 bg-gray-900 border ${
                    errors.subject ? "border-red-500" : "border-gray-700"
                  } rounded-lg text-white focus:border-cyan-400 focus:outline-none transition-colors`}
                  placeholder="What do you want to talk about?"
                />
                {errors.subject && (
                  <p className="text-red-400 text-xs mt-1">{errors.subject}</p>
                )}
              </div>

              {/* Message */}
              <div>
                <label className="block text-gray-300 mb-2 text-sm font-medium">
                  Message *
                </label>
                <textarea
                  rows="5"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 bg-gray-900 border ${
                    errors.message ? "border-red-500" : "border-gray-700"
                  } rounded-lg text-white focus:border-cyan-400 focus:outline-none transition-colors resize-none`}
                  placeholder="Tell me about your project or question..."
                ></textarea>
                {errors.message && (
                  <p className="text-red-400 text-xs mt-1">{errors.message}</p>
                )}
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className={`cursor-pointer w-full flex items-center justify-center gap-2 px-8 py-3 rounded-lg transition-colors duration-300 font-semibold ${
                  isSubmitting
                    ? "bg-gray-700 text-gray-400 cursor-not-allowed"
                    : "bg-cyan-500 hover:bg-cyan-600 text-white"
                }`}
              >
                {isSubmitting ? (
                  <>
                    <span className="animate-spin">⏳</span>
                    Sending...
                  </>
                ) : (
                  <>
                    Send Message
                    <Send size={18} />
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
