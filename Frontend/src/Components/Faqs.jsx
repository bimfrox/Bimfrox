import React, { useState } from "react";

const faqs = [
  {
    question: "What is BIMFROX and which businesses does it help?",
    answer:
      "BIMFROX is an IT service agency that helps small-town and startup businesses build and grow their digital presence."
  },
  {
    question: "What are your main services?",
    answer:
      "Website Development, E-commerce Platform Creation, Custom Web Applications, AI-powered Solutions, Branding, Digital Marketing, Social Media Management, and SEO Optimization."
  },
  {
    question: "Which industries are you suitable for?",
    answer:
      "Retail Shops, Service Providers, Educational Institutes, Startups, Small Businesses, and more."
  },
  {
    question: "How much time and cost does it take to build a website with BIMFROX?",
    answer:
    "Time and cost depend on the project requirements. The initial consultation is free."
  },
  {
    question: "Do you provide maintenance and updates?",
    answer:
    "Yes, we offer monthly support packages that include updates, security, and bug fixing."
  },
  {
    question: "How can I start working with BIMFROX?",
    answer : 
    "Reach out via our website contact form or call us, share your requirements, and we will design the best solution for you."
  }
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="max-w-screen-lg mx-auto px-4 py-10">
      <h2 className="text-3xl font-bold text-center mb-8">Frequently Asked Questions</h2>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="border border-gray-200 rounded-lg shadow-sm overflow-hidden"
          >
            <button
              className="w-full flex justify-between items-center p-4 text-left text-lg font-medium bg-gray-100 hover:bg-gray-200 transition"
              onClick={() => toggleFAQ(index)}
            >
              {faq.question}
              <span className="ml-4">{openIndex === index ? "−" : "+"}</span>
            </button>
            {openIndex === index && (
              <div className="p-4 bg-white text-gray-700 border-t border-gray-200">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQ;
