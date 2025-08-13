import React from 'react';
import { FaCheckCircle } from 'react-icons/fa';
import ContectBox from '../Components/ContectBox';

const CareerPage = () => {
  return (
    <div className="bg-white text-gray-800">
      {/* Hero Section */}
      <section className="flex flex-col md:flex-row items-center justify-between px-6 md:px-20 py-16 bg-gradient-to-r from-green-900 to-green-700 text-white">
        <div className="max-w-lg">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Join our team and be part of something great
          </h1>
          <p className="text-lg mb-6">
            Bimfrox is a new-age startup driven by innovation and passion. We create powerful solutions 
            that inspire change and deliver real impact. Be part of our mission to build something extraordinary.
          </p>
          <button className="bg-white text-green-800 font-semibold px-6 py-3 rounded-lg shadow-md hover:bg-green-100 transition">
            <a href="https://wa.me/8401809966" target='block'> WhatsApp Me </a>
          </button>
        </div>
        <img
          src="https://cdn-icons-png.flaticon.com/512/1087/1087927.png"
          alt="Join Team"
          className="w-72 mt-8 md:mt-0"
        />
      </section>

      {/* Benefits Section */}
      <section className="px-6 md:px-20 py-16 bg-gray-50">
        <h2 className="text-3xl font-bold text-center mb-12">
          Benefits of working at <span className="text-green-700">Bimfrox</span>
        </h2>
        <div className="flex flex-col md:flex-row items-center gap-10">
          <img
            src="https://cdn-icons-png.flaticon.com/512/747/747376.png"
            alt="Benefits"
            className="w-72"
          />
          <div>
            <ul className="space-y-4 text-lg">
              {[
                'Competitive salaries and bonuses',
                'Fun and engaging work environment',
                'Opportunities for career growth and advancement',
                'Collaborative and supportive team culture',
                'Training and development programs',
                'Access to cutting-edge technology and tools'
              ].map((benefit, index) => (
                <li key={index} className="flex items-center gap-3">
                  <FaCheckCircle className="text-green-700" />
                  {benefit}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Hiring Process */}
      <section className="px-6 md:px-20 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">
          Joining <span className="text-green-700">Bimfrox</span> - Our Hiring Process
        </h2>
        <div className="grid md:grid-cols-4 gap-8 text-center">
          {[
            { title: 'Screening of application', desc: 'We carefully review your application to understand your skills and experience.', icon: '📄' },
            { title: 'Technical Interview', desc: 'An in-depth discussion about your technical expertise and problem-solving skills.', icon: '💻' },
            { title: 'Technical Task', desc: 'A short assignment to test your abilities in real-world scenarios.', icon: '🛠' },
            { title: 'Offer Letter', desc: 'If selected, you’ll receive your offer letter to officially join the team!', icon: '📜' }
          ].map((step, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition">
              <div className="text-4xl mb-4">{step.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
              <p className="text-gray-600">{step.desc}</p>
            </div>
          ))}
        </div>
      </section>
      <ContectBox/> 
    </div>
  );
};

export default CareerPage;
