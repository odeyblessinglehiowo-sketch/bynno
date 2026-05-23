"use client";

import Image from "next/image";
import { useRef } from "react";
import type { RefObject } from "react";

type LessonCard = {
  title: string;
  badgeSrc: string;
  badgeAlt: string;
  accent: string;
  dividerColor: string;
  checkIcon: string;
  items: string[];
};

const lessonCards: LessonCard[] = [
  {
    title: "Starter Lessons",
    badgeSrc: "/icons/1.png",
    badgeAlt: "Week 1",
    accent: "#FE001A",
    dividerColor: "border-[#FE001A]/20",
    checkIcon: "/icons/check-red1.png",
    items: [
      "Step-by-step intro to bitcoin and crypto",
      "How to buy bitcoin & other crypto",
      "Sending, receiving & storing your crypto",
      "Weekly live sessions on Saturdays ask experts anything",
    ],
  },
  {
    title: "Intermediate Lessons",
    badgeSrc: "/icons/2.png",
    badgeAlt: "Week 2",
    accent: "#B10408",
    dividerColor: "border-[#B10408]/20",
    checkIcon: "/icons/check-dark.png",
    items: [
      "Wallets explained: hot vs cold wallets",
      "CEX vs DEX, swaps and bridges",
      "Spotting rugpulls and protecting yourself",
      "Live Q&A with the Bynno team",
    ],
  },
  {
    title: "Advanced Lessons",
    badgeSrc: "/icons/3.png",
    badgeAlt: "Week 3",
    accent: "#FE001A",
    dividerColor: "border-[#FE001A]/20",
    checkIcon: "/icons/check-red1.png",
    items: [
      "Gas fees and blockchain networks",
      "Swaps, bridges, staking",
      "Cryptocurrency tokenomics",
      "Reading on-chain data",
    ],
  },
];

type ScrollDirection = -1 | 1;

type SectionProps = {
  scrollCards: (direction: ScrollDirection) => void;
  scrollerRef: RefObject<HTMLDivElement | null>;
};

export default function LessonsCarouselSection() {
  const desktopScrollerRef = useRef<HTMLDivElement | null>(null);
  const mobileScrollerRef = useRef<HTMLDivElement | null>(null);

  const scrollCards = (
    direction: ScrollDirection,
    targetRef: RefObject<HTMLDivElement | null>
  ) => {
    const el = targetRef.current;
    if (!el) return;

    el.scrollBy({
      left: direction * 620,
      behavior: "smooth",
    });
  };

  return (
    <>
      <MobileLessonsSection
        scrollCards={(direction) => scrollCards(direction, mobileScrollerRef)}
        scrollerRef={mobileScrollerRef}
      />

      <DesktopLessonsSection
        scrollCards={(direction) => scrollCards(direction, desktopScrollerRef)}
        scrollerRef={desktopScrollerRef}
      />
    </>
  );
}

function MobileLessonsSection({ scrollCards, scrollerRef }: SectionProps) {
  return (
    <section className="overflow-hidden bg-white py-[6px] lg:hidden">
      <div className="mx-auto w-full max-w-[370px] px-[20px]">
        <div className="flex items-start justify-between gap-[12px]">
          <div className="min-w-0">
            <p className="inline-block w-fit border-b border-[#FE001A]/50 pb-[2px] text-[20px] font-medium uppercase tracking-[0.05em] text-[#FE001A]">
              STEP BY STEP
            </p>

            <h2 className="mt-[10px] max-w-[400px] text-[20px] font-bold leading-[1.09] tracking-[0.02em] text-[#000510]">
              The Straightforward Path To
               Crypto Mastery
            </h2>
          </div>

          <div className="mt-[2px] flex shrink-0 items-center gap-[8px]">
            <button
              type="button"
              onClick={() => scrollCards(-1)}
              className="transition-all duration-300 active:scale-[0.96]"
              aria-label="Scroll left"
            >
              <Image
                src="/icons/left.png"
                alt="Previous"
                width={30}
                height={30}
                className="h-[40px] w-[40px] object-contain"
              />
            </button>

            <button
              type="button"
              onClick={() => scrollCards(1)}
              className="transition-all duration-300 active:scale-[0.96]"
              aria-label="Scroll right"
            >
              <Image
                src="/icons/right.png"
                alt="Next"
                width={30}
                height={30}
                className="h-[40px] w-[40px] object-contain"
              />
            </button>
          </div>
        </div>

        <div className="mt-[8px] overflow-hidden">
          <div
            ref={scrollerRef}
            className="scrollbar-hide flex gap-[12px] overflow-x-auto pb-[12px] pr-[24px] scroll-smooth"
          >
            {lessonCards.map((card, index) => (
              <article
                key={card.title}
                className="
                  w-[72vw]
                  min-w-[245px]
                  max-w-[300px]
                  shrink-0
                  rounded-[12px]
                  bg-white
                  px-[14px]
                  py-[16px]
                  min-h-[521px]
                  shadow-[0_10px_10px_rgba(15,23,42,0.08),0_1px_0px_rgba(1,23,42,0.04)]
                  transition-all duration-300
                  hover:-translate-y-[6px]
                  hover:shadow-[0_14px_32px_rgba(15,23,42,0.12)]
                  active:scale-[0.99]
                "
              >
                <Image
                  src={card.badgeSrc}
                  alt={card.badgeAlt}
                  width={60}
                  height={60}
                  className="h-[60px] w-[60px] object-contain"
                />

                <div className="mt-[14px]">
                  <h3 className="text-[26px] font-bold leading-[1.08] tracking-[0.02em] text-[#000510]">
                    {card.title}
                  </h3>

                  <p
                    className="mt-[8px] text-[24px] font-medium leading-[1.2]"
                    style={{ color: card.accent }}
                  >
                    Week {index + 1}
                  </p>
                </div>

                <div className="mt-[14px] flex flex-col">
                  {card.items.map((item, itemIndex) => {
                    const isLast = itemIndex === card.items.length - 1;

                    return (
                      <div
                        key={`${card.title}-${itemIndex}`}
                        className={`flex items-start gap-[10px] py-[15px] ${
                          !isLast ? `border-b ${card.dividerColor}` : ""
                        }`}
                      >
                        <Image
                          src={card.checkIcon}
                          alt=""
                          width={24}
                          height={24}
                          className="mt-[12px] h-[24px] w-[24px] shrink-0 object-contain"
                        />

                        <p className="text-[19px] leading-[1.25] tracking-[0.02em] text-[#444548]">
                          {item}
                        </p>
                      </div>
                    );
                  })}
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function DesktopLessonsSection({ scrollCards, scrollerRef }: SectionProps) {
  return (
    <section className="hidden overflow-hidden bg-white py-[56px] md:py-[8px] lg:block">
      <div className="mx-auto w-full max-w-[2550px] px-[20px] md:px-[40px] xl:px-[53px]">
        <div className="flex flex-col gap-[28px] lg:flex-row lg:items-start lg:justify-between">
          <div className="max-w-[2550px]">
            <p className="inline-block w-fit border-b border-[#FE001A]/50 pb-[2px] text-[16px] font-medium uppercase tracking-[0.08em] text-[#FE001A] md:text-[20px]">
              STEP BY STEP
            </p>

            <h2 className="mt-[10px] max-w-[990px] text-[30px] font-semibold leading-[1.95] tracking-[-0.01em] text-[#000510] md:text-[48px]">
              The Straightforward Path To Crypto Mastery
            </h2>
          </div>

          <div className="flex items-center gap-[18px] lg:mt-[40px]">
            <button
              type="button"
              onClick={() => scrollCards(-1)}
              className="flex h-[56px] w-[56px] items-center justify-center transition-all duration-200 hover:-translate-y-[2px]"
              aria-label="Scroll left"
            >
              <Image
                src="/icons/left.png"
                alt="Previous"
                width={56}
                height={56}
                className="h-[56px] w-[56px] object-contain"
              />
            </button>

            <button
              type="button"
              onClick={() => scrollCards(1)}
              className="flex h-[56px] w-[56px] items-center justify-center transition-all duration-200 hover:-translate-y-[2px]"
              aria-label="Scroll right"
            >
              <Image
                src="/icons/right.png"
                alt="Next"
                width={56}
                height={56}
                className="h-[56px] w-[56px] object-contain"
              />
            </button>
          </div>
        </div>

        <div className="mt-[42px] overflow-visible">
          <div
            ref={scrollerRef}
            className="scrollbar-hide overflow-x-auto overflow-y-visible scroll-smooth"
          >
            <div className="flex w-max gap-[22px] px-[28px] pb-10 pr-[240px]">
              {lessonCards.map((card, index) => (
                <article
                  key={card.title}
                  className="flex h-[486px] w-[88vw] max-w-[600px] shrink-0 flex-col rounded-[10px] bg-white px-[16px] py-[20px] shadow-[0_20px_18px_rgba(15,23,42,0.12)] transition-all duration-300 hover:-translate-y-[6px] hover:shadow-[0_10px_10px_rgba(15,23,42,0.18)] active:scale-[0.99]"
                >
                  <Image
                    src={card.badgeSrc}
                    alt={card.badgeAlt}
                    width={60}
                    height={60}
                    className="h-[60px] w-[60px] object-contain"
                  />

                  <div className="mt-[18px]">
                    <h3 className="text-[28px] font-bold leading-[1.2] tracking-[0.01em] text-[#000510] md:text-[30px]">
                      {card.title}
                    </h3>

                    <p
                      className="mt-[8px] text-[24px] font-medium leading-[1.2]"
                      style={{ color: card.accent }}
                    >
                      Week {index + 1}
                    </p>
                  </div>

                  <div className="mt-[18px] flex flex-1 flex-col">
                    {card.items.map((item, itemIndex) => {
                      const isLast = itemIndex === card.items.length - 1;

                      return (
                        <div
                          key={`${card.title}-${itemIndex}`}
                          className={`flex min-h-[68px] items-center gap-[14px] py-[10px] ${
                            !isLast ? `border-b ${card.dividerColor}` : ""
                          }`}
                        >
                          <Image
                            src={card.checkIcon}
                            alt=""
                            width={22}
                            height={22}
                            className="h-[22px] w-[22px] shrink-0 object-contain"
                          />

                          <p className="text-[21px] leading-[1.6] tracking-[0.01em] text-[#444548]">
                            {item}
                          </p>
                        </div>
                      );
                    })}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}