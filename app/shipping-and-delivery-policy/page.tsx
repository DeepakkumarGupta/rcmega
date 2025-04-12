"use client"
import Footer from "@/components/Footer"
import DuHeader from "@/components/DuHeader"

export default function ShippingAndDeliveryPolicy() {
  return (
    <>
      <DuHeader />
      <main className="bg-gray-100 min-h-screen py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-[#1B1F3B] mb-8">Shipping & Delivery Policy</h1>
          <div className="bg-white rounded-lg shadow-md p-6 space-y-6">
            <section>
              <h2 className="text-2xl font-semibold text-[#1B1F3B] mb-4">1. Standard Delivery Timeline</h2>
              <ul className="list-disc pl-5 space-y-2">
                <li>
                  All orders are processed and shipped within 3-5 business days from the date of order confirmation.
                </li>
                <li>Orders placed before 4 PM are shipped on the same day.</li>
                <li>Orders placed after 4 PM will be shipped on the next business day.</li>
                <li>
                  Our courier partners are closed on Sundays and public holidays, which may impact delivery timelines.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-[#1B1F3B] mb-4">2. Expedited & Priority Shipping</h2>
              <ul className="list-disc pl-5 space-y-2">
                <li>We offer priority shipping (1-2 days) at an additional cost.</li>
                <li>Customers can select this option at checkout for faster delivery.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-[#1B1F3B] mb-4">3. Delivery Partners</h2>
              <p className="mb-2">
                We have partnered with the following courier services to ensure reliable and timely deliveries:
              </p>
              <ul className="list-disc pl-5 space-y-2">
                <li>Ekart</li>
                <li>Delhivery</li>
                <li>Ecom</li>
                <li>DTDC</li>
                <li>Bluedart</li>
                <li>Xpressbees</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-[#1B1F3B] mb-4">4. Tracking Information</h2>
              <ul className="list-disc pl-5 space-y-2">
                <li>Tracking details for all orders are generated and updated after 6 PM on working days.</li>
                <li>
                  Customers will receive an email or SMS with tracking information once their order has been shipped.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-[#1B1F3B] mb-4">5. Delivery Timeline Based on Location</h2>
              <p className="mb-4">
                The estimated delivery timelines vary based on the destination zone. Below is the expected Turnaround
                Time (TAT) for delivery:
              </p>
              <div className="overflow-x-auto">
                <table className="min-w-full border-collapse border border-gray-200">
                  <thead>
                    <tr className="bg-gray-50">
                      <th className="border border-gray-200 px-4 py-2 text-left">Zone Name</th>
                      <th className="border border-gray-200 px-4 py-2 text-left">Zone Code</th>
                      <th className="border border-gray-200 px-4 py-2 text-left">TAT (Air)</th>
                      <th className="border border-gray-200 px-4 py-2 text-left">TAT (Surface)</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-200 px-4 py-2">Within City</td>
                      <td className="border border-gray-200 px-4 py-2">A</td>
                      <td className="border border-gray-200 px-4 py-2">1-2 days</td>
                      <td className="border border-gray-200 px-4 py-2">1-2 days</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-200 px-4 py-2">Regional Surface (Up to 500 km)</td>
                      <td className="border border-gray-200 px-4 py-2">B</td>
                      <td className="border border-gray-200 px-4 py-2">2-3 days</td>
                      <td className="border border-gray-200 px-4 py-2">2-3 days</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-200 px-4 py-2">Metro to Metro</td>
                      <td className="border border-gray-200 px-4 py-2">C</td>
                      <td className="border border-gray-200 px-4 py-2">2-3 days</td>
                      <td className="border border-gray-200 px-4 py-2">3-4 days</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-200 px-4 py-2">Rest of India</td>
                      <td className="border border-gray-200 px-4 py-2">D</td>
                      <td className="border border-gray-200 px-4 py-2">4-5 days</td>
                      <td className="border border-gray-200 px-4 py-2">5-7 days</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-200 px-4 py-2">North East, J&K, HP, Leh Ladakh, Port Blair</td>
                      <td className="border border-gray-200 px-4 py-2">E</td>
                      <td className="border border-gray-200 px-4 py-2">5-7 days</td>
                      <td className="border border-gray-200 px-4 py-2">6-9 days</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-[#1B1F3B] mb-4">6. Shipping Charges</h2>
              <ul className="list-disc pl-5 space-y-2">
                <li>Standard shipping is included for most orders unless specified at checkout.</li>
                <li>Priority shipping charges will be displayed at checkout before finalizing the order.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-[#1B1F3B] mb-4">Contact Us</h2>
              <p>For any shipping-related queries, feel free to contact our support team at:</p>
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

