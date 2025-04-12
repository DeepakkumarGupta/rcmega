"use client"
import Footer from "@/components/Footer"
import DuHeader from "@/components/DuHeader"

export default function RefundAndReturnPolicy() {
  return (
    <>
      <DuHeader />
      <main className="bg-gray-100 min-h-screen py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-[#1B1F3B] mb-8">Refund and Return Policy</h1>
          <div className="bg-white rounded-lg shadow-md p-6 space-y-6">
            <section>
              <h2 className="text-2xl font-semibold text-[#1B1F3B] mb-4">1. Return Policy Overview</h2>
              <p>
                As a small business, we do not offer returns or exchanges on our products. However, we are committed to
                ensuring that you are satisfied with your purchase. If you have any concerns about your order, please
                contact our customer support team, and we will do our best to address your issue promptly.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-[#1B1F3B] mb-4">2. Quality Assurance</h2>
              <p>
                All our RC cars undergo rigorous quality testing before shipment. If you encounter any defects or
                issues, please reach out to us, and our dedicated support team will assist you with troubleshooting and
                possible solutions.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-[#1B1F3B] mb-4">3. Refund Policy</h2>
              <p>
                Refunds will only be issued in cases where the product is found to be defective upon arrival and cannot
                be replaced. To initiate a refund request, please contact our support team within 48 hours of receiving
                the product, along with photos or videos showing the issue.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-[#1B1F3B] mb-4">4. Contact Us</h2>
              <p>For any concerns regarding your order, please contact our customer support at:</p>
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

