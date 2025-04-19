"use client";
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { FaAmazonPay, FaWhatsapp } from "react-icons/fa6";
import { IBrand, IProduct } from "@/types/product";
import { load } from "@cashfreepayments/cashfree-js";


export default function ProductCard({
  product,
  layout,
  brands
}: {
  product: IProduct;
  layout: "grid" | "list";
  brands: IBrand[];
}) {
  // Function to get session ID for CashFree Payment Gateway
  const getSessionID = async (): Promise<string | undefined> => {
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/payment/create-order`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            orderId: `order_${Date.now()}`,
            orderAmount: product.price,
            customerDetails: {
              customer_id: `customer_${Date.now()}`,
              customer_email: "debugrror@gmail.com",
              customer_phone: "+91993964432",
            } // Replace with actual customer email
          }),
        }
      );

      if (!response.ok) {
        // throw new Error("Failed to create session");
        return "Failed to create session";
      }

      const data = await response.json();
      return data.data.payment_session_id;
    } catch (error) {
      console.log(error);
    }
  };

  const hadelBuyNow = async (e: React.MouseEvent<HTMLButtonElement, MouseEvent>): Promise<void> => {
    e.preventDefault();
    try {
      const sessionId = await getSessionID();

      if (!sessionId) {
        throw new Error("Session ID not received");
      }

      // Initiate the Cashfree Checkout
  // Initialize Cashfree SDK and wait for it to load
  const cashfree = await load({
    mode: "sandbox"
  });

  const checkoutOptions = {
    paymentSessionId: sessionId,
    redirectTarget: "_target",
    // redirectTarget: document.getElementById("cf_checkout"),
  };

  if (cashfree) {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    cashfree.checkout(checkoutOptions).then((result: any) => {
      if(result.error){
          // This will be true when there is any error during the payment
          console.log("There is some payment error, Check for Payment Status");
          console.log(result.error);
      }
      if(result.redirect){
          // This will be true when the payment redirection page couldnt be opened in the same window
          // This is an exceptional case only when the page is opened inside an inAppBrowser
          // In this case the customer will be redirected to return url once payment is completed
          console.log("Payment will be redirected");
      }
      if(result.paymentDetails){
          // This will be called whenever the payment is completed irrespective of transaction status
          console.log("Payment has been completed, Check for Payment Status");
          console.log(result.paymentDetails.paymentMessage);
      }
    });
  } else {
    console.error("Cashfree SDK failed to load.");
  }

    } catch (error) {
      console.log(error);
    }
  };

  // Filter only the first 3 images from the media array
  const productImages = product.media
    .filter((media) => media.type === "image")
    .slice(0, 3);

  // Find the brand object for this product
  const brandObj = brands.find((b) => b.name === product.brand);

  return (
    <div
      className={`z-10 bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 ${
        layout === "list" ? "flex flex-col md:flex-row gap-4 p-4" : "p-3"
      }`}
    >
      {/* Image Section */}

      <Link
        href={`/products/${product.slug}`}
        className={`block relative ${
          layout === "list" ? "md:w-1/3" : "w-full"
        }`}
      >
        <div className="relative aspect-square rounded-xl overflow-hidden">
          <Swiper
            modules={[Pagination]}
            pagination={{ clickable: true }}
            className="h-full w-full"
          >
            {productImages.map((media, index) => (
              <SwiperSlide key={index}>
                <Image
                  src={media.url || "/rcmegalogo.png"}
                  alt={`${product.name} - Image ${index + 1}`}
                  fill
                  className="object-cover"
                />
              </SwiperSlide>
            ))}
          </Swiper>
          {/* Discount badge */}
          {product.OutOfStock && (
            <div className="absolute top-2 right-2 z-20 flex flex-col items-start gap-1">
              <div className="bg-[#FF4500] text-white text-xs font-bold px-3 py-1.5 rounded-md shadow-md">
                <span className="block">Sold Out</span>
              </div>
            </div>
          )}
          {/* Brand Badge */}
          <div className="absolute top-2 left-2 bg-white/90 px-2 py-1 rounded-full flex items-center gap-1 text-xs">
            <Image
              src={brandObj?.logo || "/placeholder.svg"}
              alt={brandObj?.name || product.brand}
              width={16}
              height={16}
              className="h-4 w-4 object-contain"
            />
            {brandObj?.name || product.brand}
          </div>
        </div>
      </Link>

      {/* Info Section */}
      <div className={` flex-1 ${layout === "list" ? "md:py-2" : "pt-3"}`}>
        <Link href={`/products/${product.slug}`}>
          <h3 className="font-medium text-gray-900 mb-1 line-clamp-2 hover:text-blue-600">
            {product.name}
          </h3>
        </Link>

        <div className="flex items-center gap-2 mb-2">
          <span className="text-gray-500 text-sm">
            Model: {product.modelCode}
          </span>
        </div>

        <div className="flex flex-wrap gap-2 mb-3">
          <span className="px-2 py-1 bg-gray-100 rounded-md text-xs">
            Scale: {product.scale}
          </span>
          <span className="px-2 py-1 bg-gray-100 rounded-md text-xs">
            Color: {product.color}
          </span>
        </div>

        <div className="flex items-center justify-between">
          <p className="text-lg font-bold text-gray-900">
            ₹{product.price.toLocaleString()}
          </p>

          <div className="flex gap-2">
            {product.OutOfStock ? (
              <a
                href={`https://wa.me/?text=${encodeURIComponent(
                  `Hi! I'm interested in ${product.name}. Please notify me when it's back in stock.`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-blue-700"
              >
                <FaWhatsapp size={16} />
                <span className="sm:inline">Notify Me</span>
              </a>
            ) : (
              <button
                onClick={hadelBuyNow}
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-green-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-green-700"
              >
                <span className="sm:inline">Buy Now</span>
                <FaAmazonPay size={16} />
              </button>
            )}
            <div id="cf_checkout"></div>
            <button
              onClick={() => {
                const url = `${window.location.origin}/products/${product.slug}`;
                if (navigator.share) {
                  navigator
                    .share({
                      title: product.name,
                      text: `Check out this ${product.name} from RC MEGA!`,
                      url: url,
                    })
                    .catch(() => {
                      navigator.clipboard.writeText(url);
                      alert("Link copied to clipboard!");
                    });
                } else {
                  navigator.clipboard.writeText(url);
                  alert("Link copied to clipboard!");
                }
              }}
              className="flex items-center justify-center bg-gray-200 text-gray-700 p-2 rounded-lg hover:bg-gray-300"
              aria-label="Share product"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="18" cy="5" r="3"></circle>
                <circle cx="6" cy="12" r="3"></circle>
                <circle cx="18" cy="19" r="3"></circle>
                <line x1="8.59" y1="13.51" x2="15.42" y2="17.49"></line>
                <line x1="15.41" y1="6.51" x2="8.59" y2="10.49"></line>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}