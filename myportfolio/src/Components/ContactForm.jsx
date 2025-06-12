"use client";

import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { useTheme } from "@/app/Context/ThemeContext"; // ✅ Adjust path if needed

const ContactForm = () => {
  const form = useRef();
  const [sent, setSent] = useState(false);
  const [error, setError] = useState(false);

  const { isDark } = useTheme();

  const inputBg = isDark ? "bg-gray-800" : "bg-gray-100";
  const inputBorder = isDark ? "border-gray-700" : "border-gray-300";
  const textPrimary = isDark ? "text-white" : "text-black";

  const sendEmail = (e) => {
    e.preventDefault();

    const timeInput = document.createElement("input");
    timeInput.type = "hidden";
    timeInput.name = "time";
    timeInput.value = new Date().toLocaleString();
    form.current.appendChild(timeInput);

    emailjs
      .sendForm(
        "service_vjpefft",
        "template_ybyc9q2",
        form.current,
        "ylg3eoBKC3HG2CrYI"
      )
      .then(() => {
        setSent(true);
        setError(false);
        form.current.reset();
        form.current.removeChild(timeInput);
      })
      .catch((err) => {
        console.log("EmailJS error:", err);
        setSent(false);
        setError(true);
        form.current.removeChild(timeInput);
      });
  };

  return (
    <form
      ref={form}
      onSubmit={sendEmail}
      className="space-y-5 transition-all duration-300"
    >
      {/* Name */}
      <div>
        <label className={`block mb-1 text-sm ${textPrimary}`}>Your Name</label>
        <input
          name="name"
          type="text"
          placeholder="John Doe"
          required
          className={`w-full px-4 py-2 rounded border focus:outline-none focus:border-blue-500 ${inputBg} ${inputBorder} ${textPrimary}`}
        />
      </div>

      {/* Email */}
      <div>
        <label className={`block mb-1 text-sm ${textPrimary}`}>Your Email</label>
        <input
          name="email"
          type="email"
          placeholder="john@example.com"
          required
          className={`w-full px-4 py-2 rounded border focus:outline-none focus:border-blue-500 ${inputBg} ${inputBorder} ${textPrimary}`}
        />
      </div>

      {/* Message */}
      <div>
        <label className={`block mb-1 text-sm ${textPrimary}`}>Message</label>
        <textarea
          name="message"
          rows="5"
          placeholder="Your message here..."
          required
          className={`w-full px-4 py-2 rounded border resize-none focus:outline-none focus:border-blue-500 ${inputBg} ${inputBorder} ${textPrimary}`}
        ></textarea>
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-2 rounded transition-all duration-200"
      >
        Send
      </button>

      {/* Feedback */}
      {sent && <p className="text-green-500">✅ Message sent successfully!</p>}
      {error && <p className="text-red-500">❌ Something went wrong. Try again.</p>}
    </form>
  );
};

export default ContactForm;
