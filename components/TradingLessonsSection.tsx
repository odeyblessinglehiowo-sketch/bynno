"use client";

import Image from "next/image";
import type { ReactNode } from "react";

type LessonItem = {
  content: ReactNode;
  className?: string;
};

const lessonItems: LessonItem[] = [
  {
    content: "Fundamentals of trading",
    className: "text-[19px] font-medium",
  },
  {
    content: "Picking the coins to trade",
    className: "text-[18px]",
  },
  {
    content: "Making money in bull and bear markets",
    className: "text-[18px]",
  },
  {
    content: (
      <>
        Free mentorship: Ask questions and get answers from
        
        real-life profitable traders
      </>
    ),
    className: "text-[18px]",
  },
  {
    content: "Lessons from the world’s first professional trader - Jesse Livermore",
    className: "text-[18px]",
  },
];

export default function TradingLessonsSection() {
  return (
    <>
      <MobileTradingLessonsSection />
      <DesktopTradingLessonsSection />
    </>
  );
}

function MobileTradingLessonsSection() {
  return (
    <section className="bg-white pt-[8px] pb-[22px] lg:hidden">
      <div className="mx-auto w-full max-w-[382px] max-h-[994px] px-[20px]">
        <div className="flex items-start justify-between gap-[12px]">
    
        </div>

        <article className="group mt-[18px] overflow-hidden rounded-[12px] bg-white px-[15px] pt-[14px] pb-[14px] shadow-[0_12px_40px_rgba(15,23,42,0.16)] transition-all duration-500 hover:-translate-y-[2px] hover:shadow-[0_18px_48px_rgba(177,4,8,0.14)]">
          <Image
            src="/icons/4.png"
            alt="Week 4"
            width={60}
            height={60}
            className="h-[60px] w-[60px] object-contain"
          />

          <div className="mt-[10px]">
            <h3 className="max-w-[400px] text-[25px] font-bold leading-[1.02] tracking-[0.02em] text-[#000510]">
              Trading: How Top Traders <br /> Beat the Markets
            </h3>

            <p className="mt-[10px] text-[24px] font-medium leading-none text-[#B10408]">
              Week 4
            </p>
          </div>

          <div className="mt-[4px]">
            {lessonItems.map((item, itemIndex) => {
              const isLast = itemIndex === lessonItems.length - 1;

              return (
                <div
                  key={itemIndex}
                  className={`flex items-start gap-[10px] py-[16px] ${
                    !isLast ? "border-b border-[#B10408]/20" : ""
                  }`}
                >
                  <Image
                    src="/icons/check1.png"
                    alt=""
                    width={24}
                    height={24}
                    className="mt-[2px] h-[24px] w-[24px] shrink-0 object-contain"
                  />

                  <p
                    className={`max-w-[290px] text-[20px] font-normal leading-[1.25] tracking-[0.04em] text-[#444548] ${item.className ?? ""}`}
                  >
                    {item.content}
                  </p>
                </div>
              );
            })}
          </div>

          <div className="mt-[14px] overflow-hidden rounded-[6px]">
            <Image
              src="/icons/trading1-image.png"
              alt="Trading lesson"
              width={306}
              height={223}
              priority
              sizes="100vw"
              className="h-[223px] w-[306px] object-cover object-center transition-all duration-500 group-hover:scale-[1.02] group-hover:brightness-[1.12] group-hover:drop-shadow-[0_25px_60px_rgba(177,4,8,0.38)]"
            />
          </div>
        </article>
          {/* EMAIL + CTA LAST */}
            <div className="mt-[24px] flex flex-col gap-[12px]">
              <label className="flex h-[46px] items-center gap-[12px] rounded-[8px] border border-black/10 bg-white px-[14px] shadow-[0_10px_24px_rgba(0,0,0,0.05)]">
                <Image
                  src="/icons/email2.png"
                  alt="Email icon"
                  width={22}
                  height={22}
                  className="h-[22px] w-[22px] shrink-0 object-contain"
                />
        
                <input
                  type="email"
                  placeholder="Type your email address here"
                  className="w-full bg-transparent text-[14px] font-medium text-[#444548] outline-none placeholder:text-[#444548]"
                />
              </label>
              </div>
         <div className="mt-[10px] flex justify-center">
          <button
            type="button"
            className="flex h-[42px] w-[335px] items-center justify-center rounded-[8px] bg-[#FE001A] px-[24px] text-white transition-all duration-200 hover:bg-[#d10016]"
          >
            <span className="text-[14px] font-bold tracking-[0.05em] [font-smoothing:auto]">
              Start Learning Today
            </span>
          </button>
        </div>
      </div>
    </section>
  );
}

function DesktopTradingLessonsSection() {
  return (
    <section className="hidden bg-white pt-[10px] pb-[70px] lg:block">
      <div className="mx-auto w-full max-w-[1700px] px-[24px] lg:px-[50px]">
        <article className="overflow-hidden rounded-[12px] bg-white shadow-[0_12px_40px_rgba(15,23,42,0.16)]">
          <div className="grid items-start gap-[60px] p-[15px] lg:grid-cols-[1.1fr_1fr]">
            <div className="mt-[10px] flex flex-col justify-start">
              <Image
                src="/icons/4.png"
                alt="Week 4"
                width={60}
                height={60}
                className="h-[60px] w-[60px] object-contain"
              />

              <div className="mt-[10px]">
                <h3 className="text-[30px] font-bold leading-[1.08] tracking-[-0.03em] text-[#000510]">
                  Trading...
                  <br />
                  How Top Traders Beat The Markets
                </h3>

                <p className="mt-[18px] text-[24px] font-medium leading-none text-[#B10408]">
                  Week 4
                </p>
              </div>

              <div className="mt-[2px]">
                {lessonItems.map((item, itemIndex) => {
                  const isLast = itemIndex === lessonItems.length - 1;

                  return (
                    <div
                      key={itemIndex}
                      className={`flex items-start gap-[14px] py-[18px] ${
                        !isLast ? "border-b border-[#B10408]/20" : ""
                      }`}
                    >
                      <Image
                        src="/icons/check1.png"
                        alt=""
                        width={24}
                        height={24}
                        className="mt-[2px] h-[24px] w-[24px] shrink-0 object-contain"
                      />

                      <p
                        className={`max-w-[800px] leading-[1.82] tracking-[0.03em] text-[#444548] transition-colors duration-300 hover:text-[#B10408]/70 ${item.className ?? ""}`}
                      >
                        {item.content}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="overflow-hidden rounded-[24px] transition-all duration-500 hover:-translate-y-[2px] hover:shadow-[0_18px_48px_rgba(177,4,8,0.14)]">
              <Image
                src="/icons/trading-image.png"
                alt="Trading lesson"
                width={564}
                height={557}
                quality={100}
                priority
                sizes="(min-width: 1024px) 594px, 100vw"
                className="h-[597px] w-[1084px] object-fit object-center transition-all duration-500 hover:scale-[1.02] hover:brightness-[1.29] hover:drop-shadow-[0_25px_60px_rgba(177,4,8,0.38)]"
              />
            </div>
          </div>
        </article>

        <div className="mt-[45px] flex justify-center">
          <button
            type="button"
            className="flex h-[52px] w-[310px] items-center justify-center rounded-[9px] bg-[#FE001A] px-[24px] text-white transition-all duration-200 hover:bg-[#d10016]"
          >
            <span className="text-[20px] font-semibold tracking-[0.05em] [font-smoothing:auto]">
              Start Learning Today
            </span>
          </button>
        </div>
      </div>
    </section>
  );
}