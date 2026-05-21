"use client";

import { useState } from "react";
import Image from "next/image";

import FeatureCards from "@/components/FeatureCards";
import FullOutlineSection from "@/components/FullOutlineSection";
import VideoLibrarySection from "@/components/VideoLibrarySection";
import LessonsCarouselSection from "@/components/LessonsCarouselSection";
import TradingLessonsSection from "@/components/TradingLessonsSection";
import CryptoGamesSection from "@/components/CryptoGamesSection";
import BonusResourcesSection from "@/components/BonusResourcesSection";
import FaqSection from "@/components/FaqSection";
import FooterSection from "@/components/FooterSection";

const navItems = ["Home", "Guides", "Trading", "Games", "Community"];

function MobileHeroSection() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="bg-white text-[#000510] lg:hidden">
      <header className="relative z-30 bg-white">
        <div className="mx-auto flex h-[62px] w-full max-w-[365px] items-center justify-between px-[5px]">
          <div className="relative flex items-center">
            <button
              type="button"
              aria-label="Open menu"
              onClick={() => setMenuOpen((prev) => !prev)}
              className="absolute left-0 top-1/2 z-20 flex h-[26px] w-[26px] -translate-y-1/2 flex-col items-center justify-center gap-[4px]"
            >
              <span className="h-[3px] w-[26px] rounded-full bg-[#000510]" />
              <span className="h-[3px] w-[26px] rounded-full bg-[#000510]" />
              <span className="h-[3px] w-[26px] rounded-full bg-[#000510]" />
            </button>

            <a
              href="#top"
              aria-label="bynno home"
              className="relative z-20 ml-[38px]"
            >
              <Image
                src="/icons/bynno-logo.png"
                alt="bynno"
                width={59}
                height={18}
                priority
                className="h-auto w-[59px] object-contain"
              />
            </a>
          </div>

          <div className="flex items-center gap-[6px]">
            <button
              type="button"
              className="mr-[-2px] text-[12px] font-bold text-[#000510] transition-colors duration-200 hover:text-[#FE001A]"
            >
             <span className="tracking-[0.05em] font-bold text-[12px]">Login</span>
            </button>

            <button
              type="button"
              className="flex h-[29px] w-[110] items-center justify-center rounded-[8px] bg-[#FE001A] px-[14px] text-[12px] font-bold text-white transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
            >
              <span className="tracking-[0.03em] font-bold text-[12px]">Join for free</span>
            </button>
          </div>
        </div>

        <div
          className={`absolute left-0 top-full z-20 w-full overflow-hidden bg-white shadow-[0_18px_40px_rgba(0,0,0,0.08)] transition-all duration-300 ${
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
    

      <section
        id="top"
        className="mx-auto w-full max-w-[495px] px-[20px] pb-[20px] pt-[10px]"
      >
        <div className="rounded-[28px] bg-[linear-gradient(180deg,#FE001A_0%,#C10013_24%,#530008_100%)] px-[22px] pb-[28px] pt-[22px] text-white shadow-[0_18px_50px_rgba(63,0,6,0.16)]">
          <div className="max-w-[389px] h-[140px] rounded-[10px]">
            <h1 className="text-[35px] font-bold leading-[1.02] tracking-[-0.01em]">
              Understand Crypto
              <br />
              Finally!
            </h1>

            <p className="mt-[34px] max-w-[309px] text-[20px] font-semibold leading-[1.11] tracking-[0.03em]">
              A clear, easy course that makes sense of it all.
            </p>
          </div>

          <div className="mt-[48px] flex items-center gap-[14px]">
            <Image
              src="/icons/certificate-white.png"
              alt="Certificate icon"
              width={40}
              height={40}
              className="h-[40px] w-[40px] shrink-0 object-contain"
            />

            <p className="text-[20px] font-semibold leading-none tracking-[0.04em]">
              Certificate Included
            </p>
          </div>
        </div>

        <div className="pt-[28px]">
          <h2 className="max-w-[335px] text-[47px] font-bold leading-[1.02] tracking-[0.02em]">
            Join 2,000+ learners today.
          </h2>

          <div className="mt-[20px] flex flex-col gap-[12px]">
            <label className="flex h-[42px] items-center gap-[14px] rounded-[8px] border border-black/10 bg-white px-[14px] shadow-[0_10px_28px_rgba(0,0,0,0.05)]">
              <Image
                src="/icons/email.png"
                alt="Email icon"
                width={24}
                height={24}
                className="h-[24px] w-[24px] shrink-0 object-contain"
              />

              <input
                type="email"
                placeholder="Type your email address here"
                className="w-full bg-transparent text-[12px] font-medium outline-none placeholder:text-[#444548]"
              />
            </label>

            <button
              type="button"
              className="h-[42px] w-full rounded-[8px] bg-[#FE001A] text-[14px] font-bold text-white transition-all duration-200 hover:scale-[1.01] active:scale-[0.99]"
            >
              Start Free
            </button>
          </div>

          <p className="mx-auto mt-[10px] max-w-[290px] text-center text-[11px] font-light italic leading-[1.35] text-[#444548]">
            Sign up now and collect free coins. Cost $0 to learn.
          </p>
        </div>
      </section>

      <FeatureCards />
      <FullOutlineSection />
      <VideoLibrarySection />
      <LessonsCarouselSection />
      <TradingLessonsSection />
      <CryptoGamesSection />
      <BonusResourcesSection />
      <FaqSection />
      <FooterSection />
    </div>
  );
}

function DesktopHeroSection() {
  return (
    <div className="hidden lg:block">
      <main className="min-h-screen bg-white text-[#000510]">
        <header className="bg-white">
          <div className="mx-auto grid h-[99px] w-full max-w-[1432px] grid-cols-[auto_1fr_auto] items-center px-[44px] lg:px-[76px]">
            <a
              href="#top"
              aria-label="bynno home"
              className="flex items-center transition-transform duration-200 hover:scale-[1.02] active:scale-[0.98]"
            >
              <Image
                src="/icons/bynno-logo.png"
                alt="bynno"
                width={128}
                height={40}
                priority
                className="h-[33px] w-[105.6px] sm:w-[110px] md:w-[118px] lg:w-[105.6px]"
              />
            </a>

            <nav className="flex items-center justify-center gap-10 xl:justify-start xl:pl-24 2xl:gap-12">
              {navItems.map((item) => (
                <a
                  key={item}
                  href="#"
                  className="h-[20px] w-[65px] text-[18px] font-extrabold tracking-[0.02em] text-[#000510] transition-all duration-200 hover:-translate-y-0.5 hover:text-[#FE001A]"
                >
                  {item}
                </a>
              ))}
            </nav>

            <div className="flex items-center gap-5 justify-self-end">
              <a
                href="#"
                className="text-[17px] font-semibold tracking-[0.05em] text-[#000510] transition-all duration-200 hover:text-[#FE001A]"
              >
                Login
              </a>

              <button
                type="button"
                className="h-[52px] w-[162px] rounded-[8px] border border-[#444548] bg-[#FE001A] text-[18px] font-black text-white"
              >
                <span className="font-bold tracking-[0.05em]">
                  Join for Free
                </span>
              </button>
            </div>
          </div>
        </header>

        <section
          id="top"
          className="mx-auto w-full max-w-[1400px] px-[60px] pb-13 pt-6"
        >
          <div className="grid items-start gap-8 lg:grid-cols-[1.2fr_0.95fr] lg:gap-14">
            <div className="h-[545px] rounded-[40px] bg-[linear-gradient(180deg,#FE001A_0%,#C10013_19%,#530008_100%)] px-8 pb-[20px] pt-[20px] text-white shadow-[0_18px_50px_rgba(63,0,6,0.16)] lg:px-9 lg:py-10">
              <div className="flex h-full flex-col justify-start">
                <div className="ml-[-8px] max-w-[680px]">
                  <h1 className="mt-[10px] max-w-[628px] text-[67px] font-bold leading-[90px] tracking-[0.02em]">
                    Understand Crypto Finally!
                  </h1>

                  <p className="mt-[52px] max-w-[623px] text-[clamp(1.35rem,1.88vw,2.05rem)] font-semibold leading-[1.12] tracking-[0.03em]">
                    A clear, easy course that makes sense of it all.
                  </p>
                </div>

                <div className="ml-[70px] mt-[70px] flex w-fit items-center gap-1">
                  <div className="flex h-[100px] w-[100px] items-center justify-center rounded-[20px]">
                    <Image
                      src="/icons/certificate-white.png"
                      alt="Certificate icon"
                      width={62}
                      height={62}
                      className="h-[100px] w-[100px] object-contain"
                    />
                  </div>

                  <p className="text-[clamp(1.55rem,2vw,2.35rem)] font-semibold tracking-[0.03em]">
                    Certificate Included
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-col justify-start pt-4 lg:pl-[25px] lg:pt-[130px]">
              <h2 className="max-w-[480px] text-[clamp(2rem,4.5vw,5rem)] font-bold leading-[1.3] tracking-[0.03em]">
                Join 1,000+ learners today.
              </h2>

              <div className="mt-10 flex max-w-[490px] flex-col gap-3 sm:flex-row sm:items-center">
                <label className="flex h-[52px] flex-1 items-center gap-4 rounded-[8px] border border-black/15 bg-white px-4 shadow-[0_10px_28px_rgba(0,0,0,0.05)] transition-all duration-200 focus-within:border-[#FE001A] focus-within:shadow-[0_10px_32px_rgba(254,0,26,0.12)] sm:px-5">
                  <Image
                    src="/icons/email.png"
                    alt="Email icon"
                    width={22}
                    height={22}
                    className="h-[24px] w-[24px] shrink-0 object-contain"
                  />

                  <input
                    type="email"
                    placeholder="Type your email address here"
                    className="w-[250px] bg-transparent text-[14px] outline-none placeholder:text-[#444548] sm:text-[17px]"
                  />
                </label>

                <button
                  type="button"
                  className="h-[52px] w-[134px] rounded-[8px] bg-[#FE001A] text-[18px] font-bold text-white"
                >
                  <span className="tracking-[0.05em]">Start Free</span>
                </button>
              </div>

              <p className="-ml-[40px] mt-[5px] w-[430px] text-center text-[12px] font-extralight italic leading-[1.35] text-[#444548]">
                Sign up now and collect free coins. Cost $0 to learn.
              </p>
            </div>
          </div>
        </section>

        <FeatureCards />
        <FullOutlineSection />
        <VideoLibrarySection />
        <LessonsCarouselSection />
        <TradingLessonsSection />
        <CryptoGamesSection />
        <BonusResourcesSection />
        <FaqSection />
        <FooterSection />
      </main>
    </div>
  );
}

export default function Home() {
  return (
    <>
      <MobileHeroSection />
      <DesktopHeroSection />
    </>
  );
}