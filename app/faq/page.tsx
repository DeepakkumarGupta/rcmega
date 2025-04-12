"use client"
import Footer from "@/components/Footer"
import DuHeader from "@/components/DuHeader"

export default function FAQ() {
  return (
    <>
      <DuHeader />
      <main className="bg-gray-100 min-h-screen py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-[#1B1F3B] mb-8">Frequently Asked Questions (FAQ)</h1>
          <div className="bg-white rounded-lg shadow-md p-6 space-y-8">
            {/* Warranty Question */}
            <section>
              <h2 className="text-xl font-semibold text-[#1B1F3B] mb-3">
                1. Do you provide a warranty on your products?
              </h2>
              <p className="text-gray-700">
                We do not offer a warranty as our models are imported, and claiming warranty support can be challenging.
                However, our team provides excellent technical support for all our products to ensure you have the best
                experience with your purchase.
              </p>
            </section>

            {/* Spare Parts Question */}
            <section>
              <h2 className="text-xl font-semibold text-[#1B1F3B] mb-3">
                2. Do you offer spare parts for the RC models?
              </h2>
              <p className="text-gray-700">
                Yes, we provide spare parts support for the majority of our products. In the rare event of stock
                shortages, we have guaranteed timelines to ensure that your required spare parts reach you within 30
                days. Our commitment is to keep your RC cars running smoothly, and our spare parts service is designed
                to provide you with the support you need to maintain and enjoy your hobby.
              </p>
            </section>

            {/* Repair Services Question */}
            <section>
              <h2 className="text-xl font-semibold text-[#1B1F3B] mb-3">3. Do you provide repair services?</h2>
              <p className="text-gray-700">
                Yes! Customers can bring their vehicles to our showroom in Kalyan West (Mumbai) or courier them to us.
                If we have the necessary spare parts in stock, we will repair them promptly. If parts are unavailable,
                we will arrange them within a month. Your RC vehicles are in good hands with us!
              </p>
            </section>

            {/* Payment Modes Question */}
            <section>
              <h2 className="text-xl font-semibold text-[#1B1F3B] mb-3">4. What payment modes do you accept?</h2>
              <p className="text-gray-700">
                We accept all major payment modes, including credit cards, debit cards, net banking, and UPI.
              </p>
            </section>

            {/* EMI Question */}
            <section>
              <h2 className="text-xl font-semibold text-[#1B1F3B] mb-3">5. Do you offer EMI options?</h2>
              <p className="text-gray-700">Yes, EMI options are available for all our products.</p>
            </section>

            {/* COD Question */}
            <section>
              <h2 className="text-xl font-semibold text-[#1B1F3B] mb-3">6. Is Cash on Delivery (COD) available?</h2>
              <p className="text-gray-700">
                No, we do not offer COD. Due to the high value of our goods, offering COD would significantly increase
                the overall cost, leading to an unavoidable price hike for our customers. However, we do offer a
                convenient pickup option from our showroom in Kalyan West (Mumbai), allowing you to collect your RC cars
                directly from our store.
              </p>
            </section>

            {/* Store Pickup Question */}
            <section>
              <h2 className="text-xl font-semibold text-[#1B1F3B] mb-3">7. Can I pick up my order from your store?</h2>
              <p className="text-gray-700">
                Yes! We offer a convenient in-store pickup option from our showroom in Kalyan West (Mumbai). This allows
                you to collect your RC cars directly from our store at your convenience.
              </p>
            </section>

            {/* Contact Information */}
            <section className="mt-8 pt-8 border-t border-gray-200">
              <h2 className="text-2xl font-semibold text-[#1B1F3B] mb-4">Still have questions?</h2>
              <p className="text-gray-700">
                If you could not find the answer you are looking for, please contact us at:
                <br />
                Email: rcmegaofficial@gmail.com
                <br />
                Phone: +91 77373 73639
                <br />
                Address: RC Mega, Shrushti Apt, Birla College Road Bhoirwadi, Chowk, Chikan Ghar, Kalyan, Maharashtra 421301
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}

