// 🔍 SEOOptimization.jsx
import React from "react";
import banner from "../assets/images/banner_bimfrox.png"


const SEOOptimization = () => {
  return (
    <div className="max-w-6xl mx-auto px-6 py-12">
      {/* Page Header */}
      <h1 className="text-4xl font-bold text-green-800 mb-6">
        SEO Optimization
      </h1>
      <p className="text-gray-700 leading-relaxed mb-8">
        In today’s digital world, appearing at the top of search results can
        make or break your business. Our SEO Optimization services help you
        drive targeted traffic, improve brand visibility, and generate more
        leads through proven strategies. We offer a complete suite of SEO
        solutions to help you dominate your niche.
      </p>

      <img
        src={banner}
        alt="SEO Optimization"
        className="rounded-lg shadow-lg mb-10"
      />

      {/* What We Offer */}
      <h2 className="text-2xl font-semibold text-green-700 mb-4">
        What We Offer
      </h2>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-10">
        <li>
          <strong>Keyword Research & Analysis:</strong> Identifying profitable
          keywords your audience is searching for.
        </li>
        <li>
          <strong>On-Page Optimization:</strong> Optimizing meta tags, headings,
          content, and internal linking.
        </li>
        <li>
          <strong>Technical SEO:</strong> Enhancing site speed, mobile
          responsiveness, and fixing crawl errors.
        </li>
        <li>
          <strong>Link Building:</strong> Acquiring high-quality backlinks from
          reputable websites.
        </li>
        <li>
          <strong>Content Strategy:</strong> Creating optimized content that
          resonates with users and search engines.
        </li>
      </ul>

      {/* SEO Process */}
      <h2 className="text-2xl font-semibold text-green-700 mb-4">
        Our SEO Process
      </h2>
      <ol className="list-decimal pl-6 space-y-3 text-gray-700 mb-10">
        <li>Initial website audit to identify strengths & weaknesses.</li>
        <li>Competitor analysis to find opportunities.</li>
        <li>Keyword mapping for targeted optimization.</li>
        <li>Implementation of on-page & technical improvements.</li>
        <li>Link building & content marketing campaigns.</li>
        <li>Regular monitoring & monthly reporting.</li>
      </ol>

      {/* Why SEO Matters */}
      <h2 className="text-2xl font-semibold text-green-700 mb-4">
        Why Invest in SEO?
      </h2>
      <p className="text-gray-700 mb-10">
        SEO is one of the highest ROI marketing channels. Unlike paid ads, SEO
        delivers long-term, sustainable traffic without ongoing ad spend.
        Businesses that rank higher on search engines enjoy more trust,
        credibility, and better conversion rates.
      </p>

      {/* FAQ Section */}
      <h2 className="text-2xl font-semibold text-green-700 mb-4">
        Frequently Asked Questions
      </h2>
      <div className="space-y-4 mb-10">
        <div>
          <h3 className="font-semibold">How long does SEO take to work?</h3>
          <p className="text-gray-600">
            SEO is a long-term strategy. Most websites start seeing noticeable
            results within 3-6 months.
          </p>
        </div>
        <div>
          <h3 className="font-semibold">Do you guarantee #1 rankings?</h3>
          <p className="text-gray-600">
            No ethical SEO agency can guarantee #1 rankings, but we ensure
            measurable improvements in visibility and traffic.
          </p>
        </div>
        <div>
          <h3 className="font-semibold">Will I need to keep paying for SEO?</h3>
          <p className="text-gray-600">
            Yes, SEO is an ongoing process to maintain rankings and adapt to
            search engine updates.
          </p>
        </div>
      </div>

      {/* Call to Action */}
      <div className="mt-10 p-6 bg-green-900 text-white rounded-lg shadow-md">
        <h3 className="text-xl font-semibold mb-2">
          Boost Your Website Traffic
        </h3>
        <p className="mb-4">
          Let our experts help you get found by your target audience and stay
          ahead of your competitors.
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

export default SEOOptimization;
