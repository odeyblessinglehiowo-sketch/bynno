"use client";

import Image from "next/image";
import { useState } from "react";

type ResourceItem = {
  title: string;
  iconSrc: string;
  iconAlt: string;
};

const resources: ResourceItem[] = [
  {
    title: "Bynno Crypto Dictionary: A-Z",
    iconSrc: "/bonus-resources/dictionary.png",
    iconAlt: "Dictionary icon",
  },
  {
    title: "Is crypto real money?",
    iconSrc: "/bonus-resources/money.png",
    iconAlt: "Money icon",
  },
  {
    title: "Top biggest exchanges to buy and sell crypto",
    iconSrc: "/bonus-resources/exchanges.png",
    iconAlt: "Exchanges icon",
  },
  {
    title: "Proof of Stake & Proof of Work",
    iconSrc: "/bonus-resources/proof-of-stake.png",
    iconAlt: "Proof of stake icon",
  },
  
  {
    title: "Winning patterns from early crypto projects",
    iconSrc: "/bonus-resources/patterns.png",
    iconAlt: "Patterns icon",
  },
  {
    title: "Airdrops, staking & yield farming",
    iconSrc: "/bonus-resources/airdrops.png",
    iconAlt: "Airdrops icon",
  },
  {
    title: "Longing vs shorting in crypto trading",
    iconSrc: "/bonus-resources/long-short.png",
    iconAlt: "Long vs short icon",
  },
  {
    title: "10 ways you can use bitcoin",
    iconSrc: "/bonus-resources/bitcoin-uses.png",
    iconAlt: "Bitcoin uses icon",
  },
  {
    title: "Crypto coins vs tokens",
    iconSrc: "/bonus-resources/coins-vs-tokens.png",
    iconAlt: "Coins vs tokens icon",
  },
  {
    title: "Will bitcoin ever replace your everyday money?",
    iconSrc: "/bonus-resources/everyday-money.png",
    iconAlt: "Everyday money icon",
  },
  {
    title: "Taxes and crypto trading",
    iconSrc: "/bonus-resources/taxes.png",
    iconAlt: "Taxes icon",
  },
  {
    title: "Understand whitepapers like a pro",
    iconSrc: "/bonus-resources/whitepapers.png",
    iconAlt: "Whitepapers icon",
  },
];

const INITIAL_VISIBLE_COUNT = 5;
const TOGGLE_ICON_SRC = "/icons/load-more-icon.png";

export default function BonusResourcesSection() {
  const [showAll, setShowAll] = useState(false);

  const visibleResources = resources.slice(0, INITIAL_VISIBLE_COUNT);
  const hiddenResources = resources.slice(INITIAL_VISIBLE_COUNT);

  return (
    <>
      <section className="bg-white px-[20px] py-[14px] lg:hidden">
        <div className="mx-auto w-full max-w-[375px]">
          <p className="inline-block w-fit border-b border-[#FE001A]/50 pb-[2px] text-[20px] font-medium uppercase tracking-[0.05em] text-[#FE001A]">
            FOR EXTRA KNOWLEDGE
          </p>

          <h2 className="mt-[6px] text-[26px] font-bold leading-[1.05] tracking-[0.04em] text-[#000510]">
            Bonus Resources
          </h2>

          <div className="mt-[24px] flex flex-col gap-[12px]">
            {visibleResources.map((resource) => (
              <ResourceCard key={resource.title} resource={resource} variant="mobile" />
            ))}

            <div
              className={`overflow-hidden transition-[max-height,opacity,transform] duration-300 ease-out ${
                showAll
                  ? "max-h-[1200px] opacity-100 translate-y-0"
                  : "max-h-0 opacity-0 translate-y-[-4px]"
              }`}
            >
              <div className="pt-[12px]">
                {hiddenResources.map((resource) => (
                  <div key={resource.title} className="mb-[12px] last:mb-0">
                    <ResourceCard resource={resource} variant="mobile" />
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-[16px] flex justify-center">
            <button
              type="button"
              onClick={() => setShowAll((prev) => !prev)}
              aria-expanded={showAll}
              className="inline-flex items-center gap-[10px] rounded-[10px] px-[10px] py-[8px] text-[16px] font-semibold text-[#444548] transition-all duration-200 hover:text-[#000510] active:scale-[0.98]"
            >
              <span className="inline-flex h-[20px] w-[20px] shrink-0 items-center justify-center">
                <Image
                  src={TOGGLE_ICON_SRC}
                  alt=""
                  width={20}
                  height={20}
                  className={`h-[20px] w-[20px] object-contain transition-transform duration-300 ${
                    showAll ? "rotate-180" : "rotate-0"
                  }`}
                />
              </span>

              <span className="text-[14px] font-bold tracking-[0.04em]">
                {showAll ? "See Less" : "Load More"}
              </span>
            </button>
          </div>

          <div className="mt-[18px] flex flex-col gap-[10px]">
            <label className="flex h-[50px] items-center gap-[12px] rounded-[10px] border border-black/10 bg-white px-[14px] shadow-[0_10px_24px_rgba(0,0,0,0.05)] transition-all duration-200 focus-within:border-[#FE001A] focus-within:shadow-[0_10px_28px_rgba(254,0,26,0.90)]">
              <Image
                src="/bonus-resources/emai1l.png"
                alt="Email icon"
                width={20}
                height={20}
                className="h-[20px] w-[20px] shrink-0 object-contain"
              />
              <input
                type="email"
                placeholder="Type your email address here"
                className="w-full bg-transparent text-[13px] font-semibold outline-none placeholder:text-[#444548]"
              />
            </label>

            <button
              type="button"
              className="h-[48px] rounded-[10px] bg-[#FE001A] px-[20px] text-[16px] font-bold text-white shadow-[0_10px_24px_rgba(254,0,26,0.18)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#e50017] active:translate-y-0 active:scale-[0.98]"
            >
              <span className="font-bold tracking-[0.03em]">Learn Free Now</span>
            </button>

            <p className="text-[12px] italic leading-[1.35] tracking-[0.02em] text-[#444548]">
              Sign up and collect free coins. Cost $0 to learn.
            </p>
          </div>
        </div>
      </section>

      <section className="hidden bg-white py-[18px] lg:block">
        <div className="mx-auto w-full max-w-[4450px] px-[40px] lg:px-[80px]">
          <div className="max-w-[1414px]">
            <p className="inline-block w-fit border-b border-[#FE001A]/50 pb-[2px] text-[20px] font-medium uppercase tracking-[0.05em] text-[#FE001A]">
              FOR EXTRA KNOWLEDGE
            </p>

            <h2 className="mt-[12px] text-[clamp(1.5rem,2.7vw,4rem)] font-bold leading-[1.05] tracking-[0.02em] text-[#000510]">
              Bonus Resources
            </h2>
          </div>

          <div className="mt-[34px] grid gap-[18px] md:grid-cols-2 lg:grid-cols-3">
            {resources.map((resource) => (
              <a
                key={resource.title}
                href="/#home"
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <article className="group flex h-[100px] items-center gap-[16px] rounded-[12px] bg-white px-[15px] py-[20px] shadow-[0_12px_50px_rgba(15,23,42,0.08),0_8px_10px_rgba(15,23,42,0.06)] transition-all duration-300 hover:-translate-y-[3px] hover:shadow-[0_28px_35px_rgba(15,23,42,0.10),0_55px_120px_rgba(15,23,42,0.08)] active:scale-[0.99]">
                  <div className="flex h-[60px] w-[60px] shrink-0 items-center justify-center overflow-hidden rounded-[10px]">
                    <Image
                      src={resource.iconSrc}
                      alt={resource.iconAlt}
                      width={60}
                      height={60}
                      className="h-[60px] w-[60px] object-cover"
                    />
                  </div>

                  <span className="block min-w-0 flex-1 text-[18px] font-medium leading-[1.25] tracking-[0.04em] text-[#444548] transition-colors duration-200 group-hover:text-[#000510]">
                    {resource.title}
                  </span>
                </article>
              </a>
            ))}
          </div>

          <div className="mt-[34px] flex justify-center">
            <div className="flex flex-col gap-[12px] sm:flex-row sm:items-center">
              <label className="flex h-[52px] w-[336px] items-center gap-[16px] rounded-[8px] border border-black/10 bg-white px-[15px] shadow-[0_10px_24px_rgba(0,0,0,0.05)] transition-all duration-200 focus-within:border-[#FE001A] focus-within:shadow-[0_10px_28px_rgba(254,0,26,0.10)]">
                <Image
                  src="/bonus-resources/emai1l.png"
                  alt="Email icon"
                  width={24}
                  height={24}
                  className="h-[24px] w-[24px] shrink-0 object-contain"
                />
                <input
                  type="email"
                  placeholder="Type your email address here"
                  className="w-full bg-transparent text-[14px] font-medium outline-none placeholder:text-[#444548]"
                />
              </label>

              <button
                type="button"
                className="appearance-none h-[52px] rounded-[8px] bg-[#FE001A] px-[26px] text-[20px] font-bold text-white shadow-[0_10px_24px_rgba(254,0,26,0.18)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#e50017] active:translate-y-0 active:scale-[0.98]"
              >
                <span className="font-semibold tracking-[0.04em] text-[18px]">
                  Learn Free Now
                </span>
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function ResourceCard({
  resource,
  variant,
}: {
  resource: ResourceItem;
  variant: "mobile" | "desktop";
}) {
  const isMobile = variant === "mobile";

  return (
    <a href="/#home" className="block">
      <article
        className={[
          "group flex items-center gap-[14px] bg-white transition-all duration-300 active:scale-[0.99]",
          isMobile
            ? "min-h-[92px] rounded-[16px] px-[14px] py-[12px] shadow-[0_12px_32px_rgba(15,23,42,0.10),0_30px_60px_rgba(15,23,42,0.05)] hover:-translate-y-[2px]"
            : "h-[100px] rounded-[12px] px-[15px] py-[20px] shadow-[0_12px_50px_rgba(15,23,42,0.08),0_42px_10px_rgba(15,23,42,0.06)] hover:-translate-y-[3px] hover:shadow-[0_28px_65px_rgba(15,23,42,0.10),0_55px_120px_rgba(15,23,42,0.08)]",
        ].join(" ")}
      >
        <div
          className={[
            "shrink-0 overflow-hidden",
            isMobile
              ? "flex h-[64px] w-[64px] items-center justify-center rounded-[12px]"
              : "flex h-[60px] w-[60px] items-center justify-center rounded-[10px]",
          ].join(" ")}
        >
          <Image
            src={resource.iconSrc}
            alt={resource.iconAlt}
            width={isMobile ? 64 : 60}
            height={isMobile ? 64 : 60}
            className={[
              "object-cover",
              isMobile ? "h-[64px] w-[64px]" : "h-[60px] w-[60px]",
            ].join(" ")}
          />
        </div>

        <span
          className={[
            "block min-w-0 flex-1 text-[#444548] transition-colors duration-200 group-hover:text-[#000510]",
            isMobile
              ? "text-[15px] leading-[1.28] tracking-[-0.01em]"
              : "text-[18px] font-semibold leading-[1.25] tracking-[0.04em]",
          ].join(" ")}
        >
          {resource.title}
        </span>
      </article>
    </a>
  );
}