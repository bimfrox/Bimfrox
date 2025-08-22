// 📢 DigitalMarketing.jsx
import React from "react";
import banner from "../assets/images/banner_bimfrox.png"


const DigitalMarketing = () => {
  return (
    <div className="max-w-6xl mx-auto px-6 py-12">
      {/* Main Heading */}
      <h1 className="text-4xl font-bold text-green-800 mb-6">Digital Marketing</h1>
      <p className="text-gray-700 leading-relaxed mb-8">
        At <span className="font-semibold">Bimfrox</span>, we craft powerful, data-driven digital marketing
        strategies that deliver measurable results. Whether you want to boost your brand awareness,
        drive traffic to your website, or increase conversions, our team ensures your campaigns
        reach the right audience at the right time.
      </p>

      {/* Hero Image */}
      <img
        src={banner}
        alt="Digital Marketing"
        className="rounded-lg shadow-lg mb-8"
      />

      {/* Services Section */}
      <h2 className="text-2xl font-semibold text-green-700 mb-4">Our Services</h2>
      <ul className="list-disc pl-6 space-y-2 text-gray-700">
        <li>
          <strong>Social Media Marketing (SMM)</strong> – Building brand loyalty and engagement on
          platforms like Facebook, Instagram, LinkedIn, and Twitter.
        </li>
        <li>
          <strong>Pay-Per-Click Advertising (PPC)</strong> – High-conversion ad campaigns on
          Google Ads and social platforms with optimized targeting.
        </li>
        <li>
          <strong>Email Marketing</strong> – Personalized campaigns to nurture leads and boost
          customer retention.
        </li>
        <li>
          <strong>Content Marketing</strong> – Blogs, videos, infographics, and more to establish
          your authority and attract organic traffic.
        </li>
        <li>
          <strong>Search Engine Optimization (SEO)</strong> – On-page, off-page, and technical
          optimization to improve rankings.
        </li>
      </ul>

      {/* How We Work */}
      <h2 className="text-2xl font-semibold text-green-700 mt-10 mb-4">Our Process</h2>
      <ol className="list-decimal pl-6 space-y-2 text-gray-700">
        <li>📊 <strong>Research & Analysis:</strong> Understand your industry, audience, and competitors.</li>
        <li>🎯 <strong>Strategy Creation:</strong> Define goals, platforms, and messaging for maximum impact.</li>
        <li>🚀 <strong>Execution:</strong> Launch campaigns with optimized creatives and targeting.</li>
        <li>📈 <strong>Monitoring & Optimization:</strong> Analyze performance and make real-time adjustments.</li>
        <li>✅ <strong>Reporting:</strong> Deliver transparent results with insights and next steps.</li>
      </ol>

      {/* Why Choose Us */}
      <h2 className="text-2xl font-semibold text-green-700 mt-10 mb-4">Why Choose Us?</h2>
      <p className="text-gray-700 mb-6">
        Our team of digital marketing specialists combines creativity with analytics to ensure your
        business stands out in the competitive online space. We believe in transparency, measurable
        results, and strategies that align with your brand’s vision.
      </p>

      {/* Benefits Section */}
      <div className="grid md:grid-cols-3 gap-6 mb-10">
        <div className="bg-green-50 p-6 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold text-green-700 mb-2">📈 Increased ROI</h3>
          <p className="text-gray-600">Maximize every marketing dollar with optimized ad spending.</p>
        </div>
        <div className="bg-green-50 p-6 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold text-green-700 mb-2">🌍 Global Reach</h3>
          <p className="text-gray-600">Target customers locally or across the globe with precision.</p>
        </div>
        <div className="bg-green-50 p-6 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold text-green-700 mb-2">💡 Data-Driven Decisions</h3>
          <p className="text-gray-600">Use analytics to guide campaigns and improve performance.</p>
        </div>
      </div>

      {/* Call to Action */}
      <div className="mt-10 p-6 bg-green-900 text-white rounded-lg shadow-md">
        <h3 className="text-xl font-semibold mb-2">Let’s Grow Your Business Together</h3>
        <p className="mb-4">
          Get in touch today to create a digital marketing strategy that drives traffic, converts
          leads, and boosts revenue.
        </p>
        <a
          href="/contact"
          className="bg-white text-green-900 px-4 py-2 rounded-lg hover:bg-green-100 transition"
        >
          Get Started
        </a>
      </div>
    </div>
  );
};

export default DigitalMarketing;
