"use client";

import Image from "next/image";
import { Link as ScrollLink } from "react-scroll";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 bg-[#F5F5F5] z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo Container - Fixed size to prevent stretching */}
          <div className="flex items-center">
            <ScrollLink
              to="home"
              smooth={true}
              duration={500}
              className="relative z-10 cursor-pointer"
            >
              <div className="relative w-[120px] h-[60px] sm:w-[150px] sm:h-[60px]">
                <Image
                  src="/rcmegalogo.png"
                  alt="RC MEGA"
                  fill
                  style={{
                    objectFit: "contain",
                    objectPosition: "left center",
                  }}
                  priority
                />
              </div>
            </ScrollLink>
          </div>
        </div>
      </div>
    </header>
  );
}
