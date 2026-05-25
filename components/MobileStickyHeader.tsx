"use client";

import Image from "next/image";
import { useState } from "react";

const navItems = ["Home", "Guides", "Trading", "Games", "Community"];

export default function MobileStickyHeader() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    
      <div className="sticky top-0 z-[9999] w-full isolate bg-white">
        <div className="bg-white text-[#000510] lg:hidden">
        <header className="relative z-50 bg-white">
          <div className="mx-auto flex h-[62px] w-full max-w-[575px] items-center justify-between px-[20px]">
            <div className="relative flex items-center">
              <button
                type="button"
                aria-label="Open menu"
                onClick={() => setMenuOpen((prev) => !prev)}
                className="absolute left-0 top-1/2 z-20 flex h-[22px] w-[22px] -translate-y-1/2 flex-col items-center justify-center gap-[4px]"
              >
                <span className="h-[3px] w-[20px] rounded-full bg-[#000510]" />
                <span className="h-[3px] w-[20px] rounded-full bg-[#000510]" />
                <span className="h-[3px] w-[20px] rounded-full bg-[#000510]" />
              </button>

              <a href="#top" aria-label="bynno home" className="relative z-20 ml-[38px]">
                <Image
                  src="/icons/bynno-logo.png"
                  alt="Bynno - Learn Crypto"
                  width={90}
                  height={30}
                  priority
                  className="h-auto w-[90px] object-contain"
                />
              </a>
            </div>

            <div className="flex items-center gap-[6px]">
              <button
                type="button"
                className="mr-[-2px] text-[16px] font-bold text-[#000510] transition-colors duration-200 hover:text-[#FE001A]"
              >
                Login
              </button>

              <button
                type="button"
                className="flex h-[29px] w-[122px] items-center justify-center rounded-[8px] bg-[#FE001A] px-[1px] text-[12px] font-bold text-white transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
              >
                <span className="text-[12px] font-semibold tracking-[0.03em]">
                  Start Learning free
                </span>
              </button>
            </div>
          </div>

          <div
            className={`absolute left-0 top-full z-[9999] w-full overflow-hidden bg-white shadow-[0_18px_40px_rgba(0,0,0,0.08)] transition-all duration-300 ${
              menuOpen ? "max-h-[320px] opacity-100" : "max-h-0 opacity-0"
            }`}
          >
            <div className="mx-auto flex max-w-[375px] flex-col px-[20px] pb-[14px] pt-[10px]">
              {navItems.map((item) => (
                <button
                  key={item}
                  type="button"
                  onClick={() => setMenuOpen(false)}
                  className="rounded-[10px] px-[12px] py-[12px] text-left text-[15px] font-semibold text-[#000510] transition-all duration-200 hover:translate-x-[3px] hover:bg-[#FE001A]/[0.06] hover:text-[#FE001A]"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        </header>

        
          <div className="h-[1px] w-full bg-[#FE001A]/50" />
        </div>
      </div>
   
  );
}