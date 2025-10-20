import React, { useState } from "react";
import { Mail, Phone, MapPin } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    investment: "",
    goals: "",
    privacy: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // You can integrate API / backend call here
  };

  const contactMethods = [
    {
      icon: <Mail className="w-6 h-6 text-primary" />,
      title: "Email Us",
      value: "info@emperiorbulls.com",
    },
    {
      icon: <Phone className="w-6 h-6 text-accent" />,
      title: "Call Us",
      value: "+91 98765 43210",
    },
    {
      icon: <MapPin className="w-6 h-6 text-secondary" />,
      title: "Visit Us",
      value: "Ludhiana, Punjab, India",
    },
  ];

  return (
     <section
      id="contact" // this is important for navbar links
      className="w-full bg-gradient-to-r from-gray-900 via-black to-gray-800 text-white py-20 px-6"
    >
      {/* Background effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -left-40 w-96 h-96 bg-purple-700 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-700 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
      </div>

      <div className="container mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-2xl shadow-xl border border-gray-700">
            <h2 className="text-3xl font-bold mb-6 text-gradient bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-500">
              Get in Touch
            </h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  placeholder="First Name"
                  className="p-3 rounded-lg bg-gray-800 border border-gray-600 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  placeholder="Last Name"
                  className="p-3 rounded-lg bg-gray-800 border border-gray-600 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
              </div>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email Address"
                className="w-full p-3 rounded-lg bg-gray-800 border border-gray-600 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Phone Number"
                className="w-full p-3 rounded-lg bg-gray-800 border border-gray-600 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
              <select
                name="investment"
                value={formData.investment}
                onChange={handleChange}
                className="w-full p-3 rounded-lg bg-gray-800 border border-gray-600 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
              >
                <option value="">Investment Range</option>
                <option value="1-5L">₹1L - ₹5L</option>
                <option value="5-10L">₹5L - ₹10L</option>
                <option value="10L+">₹10L+</option>
              </select>
              <textarea
                name="goals"
                value={formData.goals}
                onChange={handleChange}
                placeholder="Your Goals"
                rows={4}
                className="w-full p-3 rounded-lg bg-gray-800 border border-gray-600 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  name="privacy"
                  checked={formData.privacy}
                  onChange={handleChange}
                  className="w-4 h-4 text-purple-500 focus:ring-purple-400 border-gray-600 rounded"
                />
                <label className="text-gray-300 text-sm">
                  I agree to the Privacy Policy
                </label>
              </div>
              <button
                type="submit"
                className="w-full py-3 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg font-semibold hover:opacity-90 transition"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col justify-center space-y-8">
            <h2 className="text-3xl font-bold">Contact Information</h2>
            {contactMethods.map((method, index) => (
              <div key={index} className="flex items-center gap-4">
                {method.icon}
                <div>
                  <h3 className="font-semibold">{method.title}</h3>
                  <p className="text-gray-400">unknown</p>
                </div>
              </div>
            ))}
            <div className="mt-8">
              <button className="px-6 py-3 rounded-lg bg-gradient-to-r from-purple-600 to-blue-600 font-semibold hover:opacity-90 transition">
                🚀 Schedule Premium Consultation
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
