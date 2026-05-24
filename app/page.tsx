"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

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

export default function Page() {
  return (
    <>
      <div className="lg:hidden">
        <MobileHeroSection />
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

      <main className="hidden min-h-screen bg-white text-[#000510] lg:block">
        <DesktopHeader />

        <section
          id="top"
          className="mx-auto w-full max-w-[1700px] px-[24px] pb-10 pt-6 sm:px-[36px] lg:px-[60px] lg:pb-12 lg:pt-7.5"
        >
          <div className="grid items-start gap-8 lg:grid-cols-[1.2fr_0.95fr] lg:gap-14">
            <div className="relative isolate h-[545px] overflow-hidden rounded-[40px] bg-[linear-gradient(180deg,#FE001A_0%,#C10013_19%,#530008_100%)] px-8 pt-[20px] text-white shadow-[0_18px_50px_rgba(63,0,6,0.16)] lg:px-9 lg:py-10">
              <div className="relative z-10 flex h-full flex-col justify-start">
                <div className="ml-[-8px] max-w-[1000px]">
                  <h1 className="mt-[10px] max-w-[628px] text-[67px] font-bold leading-[90px] tracking-[0.02em]">
                    Understand Crypto Finally!
                  </h1>

                  <p className="mt-[52px] max-w-[923px] text-[clamp(1.35rem,1.88vw,2.05rem)] font-semibold leading-[1.12] tracking-[0.03em]">
                    A clear, easy course that makes sense of it all.
                  </p>
                </div>

                <div className="ml-[70px] mt-[70px] flex w-fit items-center gap-1 self-start">
                  <div className="flex h-[100px] w-[100px] shrink-0 items-center justify-center rounded-[20px]">
                    <Image
                      src="/icons/certificate-white.png"
                      alt="Certificate icon"
                      width={100}
                      height={100}
                      className="h-[100px] w-[100px] object-contain"
                      priority
                    />
                  </div>

                  <p className="shrink-0 text-[clamp(1.55rem,2vw,2.35rem)] font-semibold leading-none tracking-[0.03em]">
                    Certificate Included
                  </p>
                </div>
              </div>

              <HeroGlowArt />
            </div>

            <div className="flex flex-col justify-start pt-4 lg:pl-[25px] lg:pt-[130px]">
              <h2 className="max-w-[580px] text-[clamp(2.0rem,4.5vw,4rem)] font-bold leading-[1.3] tracking-[0.03em] text-[#000510]">
                Join 1,000+ crypto learners.
              </h2>

              <div className="mt-10 flex max-w-[936px] flex-col gap-3 sm:flex-row sm:items-center">
                <label className="flex h-[54px] flex-1 items-center gap-4 rounded-[8px] border border-black/15 bg-white px-4 shadow-[0_10px_28px_rgba(0,0,0,0.05)] transition-all duration-200 focus-within:border-[#FE001A] focus-within:shadow-[0_10px_32px_rgba(254,0,26,0.12)] sm:px-5">
                  <Image
                    src="/icons/email.png"
                    alt="Email icon"
                    width={22}
                    height={22}
                    className="h-[24px] w-[24px] shrink-0 object-contain opacity-100"
                  />

                  <input
                    type="email"
                    placeholder="Type your email address here"
                    className="w-[290px] bg-transparent text-[3px] font-normal outline-none placeholder:font-normal placeholder:text-[#444548] sm:text-[17px]"
                  />
                </label>

                <button
                  type="button"
                  className="appearance-none h-[53px] w-[174px] rounded-[8px] bg-[#FE001A] text-[18px] font-bold text-white [font-smoothing:auto]"
                >
                  <span className="font-bold tracking-[0.05em]">Start Learning</span>
                </button>
              </div>

              <p className="mx-auto mt-[7px] w-[400px] -ml-[30px] text-center text-[12px] font-extralight italic leading-[1.35] text-[#444548]">
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
    </>
  );
}

function DesktopHeader() {
  return (
    <header className="bg-white">
      <div className="mx-auto grid h-[99px] w-full max-w-[1800px] grid-cols-[auto_1fr_auto] items-center px-[40px] xl:px-[72px] 2xl:px-[94px]">
        <a
          href="#top"
          aria-label="bynno home"
          className="flex items-center transition-transform duration-200 hover:scale-[1.02] active:scale-[0.98]"
        >
          <Image
            src="/icons/bynno-logo.png"
            alt="Bynno - Learn Crypto"
            width={128}
            height={40}
            priority
            className="mt-[-30px] h-[33px] w-[105.6px] sm:w-[110px] md:w-[158px] lg:w-[105.6px]"
          />
        </a>

        <nav className="mt-[-30px] flex items-center justify-center gap-10 xl:justify-start xl:pl-24 2xl:gap-15">
          {navItems.map((item) => (
            <a
  key={item}
  href="#"
  className="
    relative
    h-[20px]
    w-[65px]
    w-fit
    text-[18px]
    font-semibold
    tracking-[0.04em]
    text-[#000510]
    transition-colors duration-300
    hover:text-[#000510]

    after:absolute
    after:left-0
    after:bottom-[-6px]
    after:h-[2px]
    after:w-full
    after:origin-left
    after:scale-x-0
    after:bg-[#FE001A]
    after:transition-transform
    after:duration-300
    after:content-['']

    hover:after:scale-x-100
  "
>
  {item}
</a>
          ))}
        </nav>

        <div className="mt-[-20px] flex items-center gap-5 justify-self-end">
         <a
  href="#"
  className="
    relative
    text-[17px]
    font-semibold
    tracking-[0.05em]
    text-[#000510]
    transition-colors duration-300
    hover:text-[#000510]

    after:absolute
    after:left-0
    after:bottom-[-6px]
    after:h-[2px]
    after:w-full
    after:origin-left
    after:scale-x-0
    after:bg-[#FE001A]
    after:transition-transform
    after:duration-300
    after:content-['']

    hover:after:scale-x-100
  "
>
  Login
</a>

          <button
            type="button"
            className="h-[52px] w-[223px] rounded-[8px] bg-[#FE001A] text-[20px] font-heavy text-white"
          >
            <span className="text-[20px] font-bold tracking-[0.05em]">Start Learning Free</span>
          </button>
        </div>
      </div>
    </header>
  );
}

function MobileHeroSection() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="bg-white text-[#000510]">
      <header className="relative z-30 bg-white">
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

            <a
              href="#top"
              aria-label="bynno home"
              className="relative z-20 ml-[38px]"
            >
              <Image
                src="/icons/bynno-logo.png"
                alt="Bynno - Learn Crypto"
                width={59}
                height={18}
                priority
                className="h-auto w-[90px] object-cover"
              />
            </a>
          </div>

          <div className="flex items-center gap-[6px]">
            <button
              type="button"
              className="mr-[-2px] text-[12px] font-bold text-[#000510] transition-colors duration-200 hover:text-[#FE001A]"
            >
              <span className="text-[16px] font-bold tracking-[0.05em]">
                Login
              </span>
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
  className="mx-auto w-full max-w-[495px] px-[20px] pb-[20px] pt-[38px]"
>
  <div className="relative isolate overflow-hidden rounded-[28px] bg-[linear-gradient(180deg,#FE001A_0%,#C10013_24%,#530008_100%)] px-[22px] pb-[28px] pt-[22px] text-white shadow-[0_18px_50px_rgba(63,0,6,0.16)]">
    <MobileHeroGlowArt />

    <div className="relative z-10 max-w-[389px] rounded-[10px]">
      <h1 className="text-[35px] font-bold leading-[1.02] tracking-[-0.01em]">
        Understand Crypto
        <br />
        Finally!
      </h1>

      <p className="mt-[34px] max-w-[309px] text-[20px] font-semibold leading-[1.11] tracking-[0.03em]">
        A clear, easy course that makes sense of it all.
      </p>
    </div>

    <div className="relative z-10 mt-[48px] flex items-center gap-[14px]">
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

        <div className="pt-[38px]">
          <h2 className="max-w-[435px] text-[46px] font-bold leading-[1.02] tracking-[0.02em]">
            Join 1,000+ crypto learners.
          </h2>

          <div className="mt-[38px] flex flex-col gap-[12px]">
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
              <span className="text-[14px] font-semibold tracking-[0.05em]">Start Learning</span>
            </button>
          </div>

          <p className="mx-auto mt-[10px] max-w-[290px] text-center text-[10px] font-light italic leading-[1.35] text-[#444548]">
            Sign up now and collect free coins. Cost $0 to learn.
          </p>
        </div>
      </section>
    </div>
  );
}

function MobileHeroGlowArt() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <motion.div
        className="absolute right-[-70px] top-[10px] h-[360px] w-[360px] rounded-full blur-[55px]"
        style={{
          background:
            "radial-gradient(circle, rgba(255,255,255,0.18) 0%, rgba(255,90,90,0.10) 30%, rgba(255,0,0,0) 72%)",
        }}
        animate={{
          opacity: [0.02, 0.12, 0.4, 0.8, 1, 0.8, 0.4, 0.12, 0.02],
          scale: [0.96, 0.99, 1.03, 1.08, 1.1, 1.08, 1.03, 0.99, 0.96],
        }}
        transition={{
          duration: 12,
          ease: "easeInOut",
          repeat: Infinity,
        }}
      />

      <motion.div
        className="absolute right-[10px] top-[20px] h-[320px] w-[240px]"
        animate={{
          opacity: [0.04, 0.18, 0.6, 1, 0.6, 0.18, 0.04],
          scale: [0.96, 1, 1.08, 1.12, 1.08, 1, 0.96],
        }}
        transition={{
          duration: 12,
          ease: "easeInOut",
          repeat: Infinity,
        }}
      >
        <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle,rgba(255,255,255,0.28)_0%,rgba(255,120,120,0.18)_28%,rgba(255,0,0,0)_72%)] blur-[28px]" />
      </motion.div>

      <motion.div
        className="absolute bottom-[20px] right-[50px] h-[180px] w-[180px] rounded-full blur-[45px]"
        style={{
          background:
            "radial-gradient(circle, rgba(255,90,90,0.38) 0%, rgba(255,0,0,0) 75%)",
        }}
        animate={{
          opacity: [0.02, 0.08, 0.25, 0.55, 0.95, 0.55, 0.25, 0.08, 0.02],
          scale: [0.92, 0.96, 1, 1.06, 1.1, 1.06, 1, 0.96, 0.92],
        }}
        transition={{
          duration: 12,
          ease: "easeInOut",
          repeat: Infinity,
        }}
      />

      <motion.div
        className="absolute right-[92px] top-[90px] h-[8px] w-[8px] rounded-full bg-white blur-[1px]"
        animate={{ opacity: [0.1, 1, 0.1], scale: [0.8, 1.3, 0.8] }}
        transition={{ duration: 2.8, repeat: Infinity, ease: "easeInOut" }}
      />
    </div>
  );
}

function HeroGlowArt() {
  return (
    <div className="pointer-events-none absolute inset-0 hidden overflow-hidden lg:block">
      <motion.div
        className="absolute right-[-140px] top-[-120px] h-[760px] w-[760px] rounded-full blur-[90px]"
        style={{
          background:
            "radial-gradient(circle, rgba(255,255,255,0.18) 0%, rgba(255,80,80,0.10) 28%, rgba(255,0,0,0) 72%)",
        }}
        animate={{
          opacity: [0.02, 0.08, 0.18, 0.35, 0.6, 0.85, 1, 0.85, 0.6, 0.35, 0.18, 0.08, 0.02],
          scale: [0.96, 0.98, 1, 1.02, 1.05, 1.08, 1.1, 1.08, 1.05, 1.02, 1, 0.98, 0.96],
        }}
        transition={{
          duration: 12,
          ease: "easeInOut",
          repeat: Infinity,
        }}
      />

      <motion.div
        className="absolute right-[0px] top-[40px] h-[620px] w-[420px]"
        animate={{
          opacity: [0.05, 0.18, 0.65, 0.18, 0.05],
          scale: [0.98, 1, 1.06, 1, 0.98],
        }}
        transition={{
          duration: 12,
          ease: "easeInOut",
          repeat: Infinity,
        }}
      >
        <div className="absolute inset-0 rounded-[999px] bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.26)_0%,rgba(255,140,140,0.18)_28%,rgba(255,70,70,0.10)_48%,rgba(255,0,0,0)_75%)] blur-[22px]" />
      </motion.div>

      <motion.div
        className="absolute right-[120px] top-[120px] h-[120px] w-[120px] rounded-full bg-[radial-gradient(circle,rgba(255,255,255,0.95)_0%,rgba(255,210,120,0.55)_22%,rgba(255,120,120,0.12)_45%,rgba(255,0,0,0)_72%)] blur-[3px]"
        animate={{
          opacity: [0.05, 0.25, 1, 0.25, 0.05],
          scale: [0.7, 0.95, 1.22, 0.95, 0.7],
        }}
        transition={{
          duration: 12,
          ease: "easeInOut",
          repeat: Infinity,
        }}
      />

      <motion.div
        className="absolute inset-y-0 right-[-30px] flex items-stretch"
        animate={{
          opacity: [0, 0.08, 0.18, 0.35, 0.55, 0.75, 0.95, 1, 0.95, 0.75, 0.55, 0.35, 0.18, 0.08, 0],
          x: [8, 6, 4, 2, 0, -1, -2, -2, -2, -1, 0, 2, 4, 6, 8],
        }}
        transition={{
          duration: 12,
          ease: "easeInOut",
          repeat: Infinity,
        }}
      >
  
      </motion.div>

      <motion.div
        className="absolute bottom-[20px] right-[70px] h-[340px] w-[340px] rounded-full blur-[80px]"
        style={{
          background:
            "radial-gradient(circle, rgba(255,90,90,0.38) 0%, rgba(255,0,0,0) 75%)",
        }}
        animate={{
          opacity: [0.02, 0.08, 0.25, 0.5, 0.75, 0.95, 1, 0.95, 0.75, 0.5, 0.25, 0.08, 0.02],
          scale: [0.92, 0.96, 1, 1.03, 1.07, 1.1, 1.12, 1.1, 1.07, 1.03, 1, 0.96, 0.92],
        }}
        transition={{
          duration: 12,
          ease: "easeInOut",
          repeat: Infinity,
        }}
      />

      <motion.div
        className="absolute right-[170px] top-[90px] h-[10px] w-[10px] rounded-full bg-white blur-[1px]"
        animate={{ opacity: [0.1, 1, 0.1], scale: [0.8, 1.4, 0.8] }}
        transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute right-[90px] top-[260px] h-[8px] w-[8px] rounded-full bg-white blur-[1px]"
        animate={{ opacity: [0.05, 0.9, 0.05], scale: [0.7, 1.3, 0.7] }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0.4,
        }}
      />
      <motion.div
        className="absolute right-[210px] top-[320px] h-[6px] w-[6px] rounded-full bg-[#FFD6A3] blur-[1px]"
        animate={{ opacity: [0.08, 0.8, 0.08], scale: [0.7, 1.2, 0.7] }}
        transition={{
          duration: 2.8,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0.8,
        }}
      />
    </div>
  );
}