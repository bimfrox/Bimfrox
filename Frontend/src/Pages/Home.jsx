import React from "react";
import FAQ from "../Components/Faqs";
import ContectBox from "../Components/ContectBox";
import Slide from "../Components/Slide";
import ReviewCarousel from "../Components/Review";
import Client from "../Components/Clients";
import ClientTrustSection from "../Components/Growth";
import { motion } from "framer-motion";
import ProcessPage from "../Components/Process";
import CeoSection from "../Components/CeoSection";
import SEO from "../Components/Seo";

motion;


const Home = () => {
  return (
    <div className="w-full overflow-x-hidden">
      {/* ✅ SEO Section */}
      <SEO
        title="BIMFROX - Empowering Digital Growth"
        description="BIMFROX helps Tier 2 & Tier 3 businesses grow with modern digital solutions, marketing strategies, and technology."
        keywords="BIMFROX, digital solutions, CEO Rahul Chaurasiya, marketing, growth, tier 2, tier 3 businesses"
        url="https://www.bimfrox.com"
        image="https://res.cloudinary.com/duji9wpsp/image/upload/v1755586879/bimfroxlogo_qoghav.png"  //
      />

      {/* Hero / Slider Section */}
      <section className="">
        <Slide />
      </section>

      {/* Trust Section */}
      <section className="bg-gray-50">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <ClientTrustSection />
        </motion.div>
      </section>

      {/* Clients */}
      <section className="">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Client />
        </motion.div>
      </section>

      {/* Reviews */}
      <section className="bg-gray-50 ">
        <ReviewCarousel />
      </section>

      {/* Process */}
      <section>
        <ProcessPage />
      </section>

      {/* CEO */}
      <section>
        <CeoSection />
      </section>

      {/* FAQ */}
      <section>
        <FAQ />
      </section>

      {/* Contact */}
      <section className="bg-green-50">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <ContectBox />
        </motion.div>
      </section>
    </div>
  );
};

export default Home;
