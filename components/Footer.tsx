import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";
import Link from "next/link";

import React from "react";

const Footer = () => {
  return (
    <>
   
    <footer className="relative bg-[#FF6600] text-white pt-20">
      {/* SVG Separator */}
      <div
        className="absolute top-0 w-full h-[69px] overflow-hidden transform -translate-y-11"
        style={{ lineHeight: 0 }}
      >
        <div
          className="w-[709px] 2xl:w-[50vw] h-[69px] bg-[#FF6600] absolute right-0 transform translate-x-[50%] sm:translate-x-[45%] md:translate-x-[50%] lg:translate-x-[40%] xl:translate-x-[37%] 2xl:translate-x-[23%] border-black box-border"
          style={{
            clipPath:
              "polygon(0.15% 99.28%, 0.15% 93.25%, 23.85% 0.72%, 99.93% 0.72%, 99.93% 99.28%)",
          }}
        ></div>
      </div>

      {/* Footer Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About The Store */}
          <div>
            <h3 className="text-xl font-bold mb-4">ABOUT THE STORE</h3>
            <address className="not-italic">
              <p>Shop No 1, Shrushti Apt, Birla College Rd Bhoirwadi, Chowk,</p>
              <p>Chikan Ghar, Kalyan</p>
              <p>Maharashtra 421301</p>
              <p className="mt-4">+91 77373 73639</p>
              <p>Email: {"rcmegaofficial@gmail.com"}</p>
            </address>
          </div>

          {/* Our Category */}
          <div>
            <h3 className="text-xl font-bold mb-4">OUR CATEGORY</h3>
            <ul className="space-y-2">
              <li>On-Road</li>
              <li>Off-Road</li>
              <li>Crawler</li>
              <li>Accessories</li>
              <li>Parts</li>
            </ul>
          </div>

          {/* Top Brands */}
          <div>
            <h3 className="text-xl font-bold mb-4">TOP BRANDS</h3>
            <ul className="space-y-2">
              <li>FMS</li>
              <li>MJX Hyper Go</li>
              <li>Traxxas</li>
              <li>Rlaarlo</li>
              <li>FSR</li>
            </ul>
          </div>

          {/* Useful Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">USEFUL LINKS</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/privacy-policy">Privacy Policy</Link>
              </li>
              <li>
                <Link href="/refundandreturnpolicy">
                  Refund and Return Policy
                </Link>
              </li>
              <li>
                <Link href="/shipping-and-delivery-policy">
                  Shipping and Delivery Policy
                </Link>
              </li>
              <li>
                <Link href="/faq">FAQ</Link>
              </li>
              <li>
                <Link href="/#contact">Contact US</Link>
              </li>
              <li>
                <Link href="/termsandconditions">Terms & Conditions</Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Social Media Links */}
        <div className="mt-8 text-center">
          <h3 className="text-xl font-bold mb-4">FOLLOW US</h3>
          <div className="flex justify-center space-x-4">
            <a
              href="https://facebook.com/rcmegaofficial"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white"
            >
              <FaFacebook size={24} />
            </a>
            <a
              href="https://instagram.com/rcmegaofficial"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white"
            >
              <FaInstagram size={24} />
            </a>
            <a
              href="https://youtube.com/@rcmegaofficial"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white"
            >
              <FaYoutube size={24} />
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className="py-8 text-center">
          <p>&copy; 2025 RC MEGA. All rights reserved.</p>
          <p>
            Design & Developed By{" "}
            <a href="http://www.clicktrick.in" className="underline">
              Click Trick
            </a>
          </p>
        </div>
      </div>
    </footer>
    </>
  );
};

export default Footer;
