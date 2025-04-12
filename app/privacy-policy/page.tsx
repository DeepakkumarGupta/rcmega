"use client"
import React from 'react'
import Footer from '@/components/Footer'
import DuHeader from '@/components/DuHeader'

export default function PrivacyPolicy() {
  return (
    <>
      <DuHeader />
      <main className="bg-gray-100 min-h-screen py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-[#1B1F3B] mb-8">Privacy Policy</h1>
          <div className="bg-white rounded-lg shadow-md p-6 space-y-6">
            <section>
              <h2 className="text-2xl font-semibold text-[#1B1F3B] mb-4">1. Introduction</h2>
              <p>
                Welcome to RC Mega Privacy Policy. At RC Mega, we are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy explains how we collect, use, and safeguard your data when you interact with our website, visit our physical store, or participate in our RC community events.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-[#1B1F3B] mb-4">2. Information We Collect</h2>
              <p>
                Currently, we only collect email addresses from individuals who voluntarily sign up for our community updates. We do not collect any other personal data through our website at this time.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-[#1B1F3B] mb-4">3. How We Use Your Information</h2>
              <p>
                The email addresses we collect are used solely for the purpose of sending updates about our brand, products, and community events. We do not share this information with any third parties.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-[#1B1F3B] mb-4">4. Analytics</h2>
              <p>
                We use Google Analytics and Google Search Console to analyze traffic to our website. These tools collect anonymous data about website usage, which helps us improve our services and user experience.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-[#1B1F3B] mb-4">5. Payment Processing</h2>
              <p>
                Currently, we do not process payments directly through our website. When you click the Buy Now button, you will be redirected to WhatsApp to complete your purchase. We do not collect or store any payment information.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-[#1B1F3B] mb-4">6. Your Rights</h2>
              <p>
                You have the right to unsubscribe from our email updates at any time. If you wish to have your email address removed from our database, please contact us using the information provided in the Contact Us section.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-[#1B1F3B] mb-4">7. Changes to This Policy</h2>
              <p>
                We may update this Privacy Policy from time to time. Any changes will be posted on this page, and if significant changes are made, we will notify you via email.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-[#1B1F3B] mb-4">8. Contact Us</h2>
              <p>
                If you have any questions or concerns about our Privacy Policy, please contact us at:
              </p>
              <p className="mt-2">
                Email: rcmegaofficial@gmail.com
                <br />
                Phone: +91 77373 73639
                <br />
                Address: Shrushti Apt, Birla College Rd Bhoirwadi, Chowk, Chikan Ghar, Kalyan, Maharashtra 421301
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
