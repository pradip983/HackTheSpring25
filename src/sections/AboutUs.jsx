'use client';
import React from 'react';
import Header from './Header';
import Footer from './Footer';

export default function AboutUs() {
  return (
    <>
    <Header/>
    <div className="min-h-screen mt-20 bg-gray-100 text-gray-800">
      <header className="bg-[#f5f5f5] shadow-2xl text-gray-700 py-10">
        <div className="max-w-screen-xl mx-auto text-center">
          <h1 className="text-4xl font-bold">About Us</h1>
          <p className="mt-3 lg:text-lg text-base">
          Welcome to <span className="font-semibold">Expanding-Express</span>, a platform designed to bridge the gap between customers and businesses.
            Our mission is to create a seamless connection where businesses can grow and customers can find unique investment opportunities.
          </p>
        </div>
      </header>

      <main className="max-w-screen-xl mx-auto py-12 px-6">
        {/* Our Mission Section */}
        <section className="mb-12">
          <h2 className="lg:text-3xl text-2xl font-bold text-sky-800">Our Vision</h2>
          <p className="mt-4 lg:text-lg text-base leading-relaxed">
          We aim to become the leading platform for franchise sales and startup investments, ensuring a transparent and
            efficient process for both vendors and customers.
          </p>
        </section>

        {/* Why Choose Us Section */}
        <section className="mb-12">
          <h2 className="lg:text-3xl text-2xl font-bold text-sky-800">How It Works</h2>
          <p className="text-gray-700 mb-4">Our platform consists of two primary sections:</p>
          <ul className="text-gray-700 mb-4 text-left list-disc list-inside">
            <li><span className="font-semibold">Franchise:</span> Vendors can list their franchises for sale, and customers can browse and invest.</li>
            <li><span className="font-semibold">Startup:</span> Entrepreneurs can seek investments, and customers can explore new business opportunities.</li>
          </ul>
          
          <p className="text-gray-700 mb-4">
            We earn a commission from both vendors and customers as a premium service.
            Future enhancements will include a business section to provide insights on investments and returns.
          </p>
        </section>

        {/* Our Story Section */}
        <section className="mb-12">
          <h2 className="lg:text-3xl text-2xl font-bold text-sky-800">Join Us</h2>
          <p className="text-gray-700">
            Whether you're a business looking for growth or an investor seeking opportunities,
            <span className="font-semibold"> Expanding-Express </span> is the place for you.
            Let's build a strong business network together!
          </p>
        </section>

         {/* Developer Section */}
         <section className="mb-12">
          <h2 className="lg:text-3xl text-2xl font-bold text-sky-800">Meet the Developer</h2>
          <p className="text-gray-700 mb-4">Our dedicated team of developers:</p>
          <ul className="text-gray-700 mb-4 text-left list-disc list-inside">
            <li>Pradip Vasan - Lead Developer & Project Manager</li>
            <li>Bhagy Patel - Frontend Developer & UI Designer</li>
            <li>Labh Patel - Backend Developer & Database Architect</li>
            <li>Jenil Patel - Full Stack Developer & API Specialist</li>
          </ul>
          <p className="text-gray-700">
            Our team is passionate about building intuitive, user-friendly, and scalable platforms.
            With expertise in modern web technologies, we aim to provide the best experience for our users.
          </p>
        </section>

        {/* Call to Action Section */}
        <section className="bg-[#f5f5f5] text-sky-800 py-10 rounded-lg shadow-2xl text-center">
          <h2 className="lg:text-3xl text-2xl font-bold">Start Your Journey with Expanding-Express</h2>
          <p className="mt-3 lg:text-lg text-sm lg:p-0 p-2">
            Journey begins with us and explore the world of opportunities
          </p>
          <div className="mt-6">
            <a
              href="/"
              className="bg-white border border-sky-800 text-sky-800 font-semibold px-8 py-3 rounded-full hover:bg-gray-200 transition"
            >
              Explore  /
            </a>
          </div>
        </section>
      </main>
    </div>
    <Footer />
    </>
  );
}
