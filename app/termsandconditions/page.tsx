"use client"
import Footer from "@/components/Footer"
import DuHeader from "@/components/DuHeader"

export default function TermsAndConditions() {
  return (  
    <>
      <DuHeader />
      <main className="bg-gray-100 min-h-screen py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-[#1B1F3B] mb-8">Terms and Conditions</h1>
          <div className="bg-white rounded-lg shadow-md p-6 space-y-6">
            <section>
              <h2 className="text-2xl font-semibold text-[#1B1F3B] mb-4">1. Introduction</h2>
              <p>
                Welcome to RC Mega. These Terms and Conditions govern your use of our website, physical store, and
                participation in our RC community events. By accessing our website or making a purchase, you agree to be
                bound by these Terms and Conditions.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-[#1B1F3B] mb-4">2. Use of Website</h2>
              <p>
                Our website is primarily for informational purposes and to showcase our products. While we do not
                currently process payments through the website, you may use it to browse products and initiate purchases
                via WhatsApp.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-[#1B1F3B] mb-4">3. Product Information</h2>
              <p>
                We strive to provide accurate product information, but we do not warrant that product descriptions or
                other content is accurate, complete, reliable, current, or error-free.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-[#1B1F3B] mb-4">4. Pricing and Availability</h2>
              <p>
                All prices are subject to change without notice. We reserve the right to modify or discontinue any
                product without notice. We are not liable to you or any third party for any modification, price change,
                or discontinuance of any product.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-[#1B1F3B] mb-4">5. Purchases and Payment</h2>
              <p>
                When you make a purchase, you will be redirected to WhatsApp to complete the transaction. By making a
                purchase, you agree to provide current, complete, and accurate purchase and account information.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-[#1B1F3B] mb-4">6. RC Community</h2>
              <p>
                By signing up for our RC community updates, you agree to receive emails from us. You can unsubscribe at
                any time. Participation in community events is subject to additional rules and regulations, which will
                be provided separately.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-[#1B1F3B] mb-4">7. Intellectual Property</h2>
              <p>
                The content on our website, including text, graphics, logos, and images, is the property of RC Mega and
                is protected by copyright and other intellectual property laws.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-[#1B1F3B] mb-4">8. Limitation of Liability</h2>
              <p>
                RC Mega shall not be liable for any direct, indirect, incidental, consequential, or punitive damages
                arising out of your access to, or use of, the website or products purchased from us.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-[#1B1F3B] mb-4">9. Governing Law</h2>
              <p>
                These Terms and Conditions are governed by and construed in accordance with the laws of [Your
                State/Country], without regard to its conflict of law principles.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-[#1B1F3B] mb-4">10. Changes to Terms</h2>
              <p>
                We reserve the right to update or modify these Terms and Conditions at any time without prior notice.
                Your continued use of our website following any changes indicates your acceptance of the new Terms and
                Conditions.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-[#1B1F3B] mb-4">11. Contact Information</h2>
              <p>If you have any questions about these Terms and Conditions, please contact us at:</p>
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

