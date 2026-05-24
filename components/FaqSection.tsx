"use client";

import Image from "next/image";
import { useState } from "react";

type FaqItem = {
  question: string;
};

const faqs: FaqItem[] = [
  { question: "Is the full course really free?" },
  { question: "Do I get a certificate when I've completed the lessons?" },
  { question: "How can I collect Bynno points?" },
  { question: "What do I get if I refer my friends to the course?" },
  { question: "Are there live classes where I can ask questions about crypto?" },
  { question: "Will the Bynno crypto course help me in my career?" },
  { question: "Can I chat with other learners in the Bynno crypto school?" },
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <>
      <MobileFaqSection
        faqs={faqs}
        openIndex={openIndex}
        setOpenIndex={setOpenIndex}
      />
      <DesktopFaqSection
        faqs={faqs}
        openIndex={openIndex}
        setOpenIndex={setOpenIndex}
      />
    </>
  );
}

function MobileFaqSection({
  faqs,
  openIndex,
  setOpenIndex,
}: {
  faqs: FaqItem[];
  openIndex: number | null;
  setOpenIndex: React.Dispatch<React.SetStateAction<number | null>>;
}) {
  return (
    <section className="relative overflow-hidden bg-white py-[99px] lg:hidden">
      <div className="pointer-events-none absolute inset-0">
        
      </div>

      <div className="relative mx-auto w-full max-w-[375px] px-[20px]">
        <div className="flex flex-col">
          <p className="inline-block w-fit border-b border-[#FE001A]/50 pb-[2px] text-[20px] font-medium uppercase leading-[1] tracking-[0.03em] text-[#FE001A]">
            QUESTIONS
          </p>

          <h2 className="mt-[14px] text-[25px] font-bold leading-[0.99] tracking-[0.01em] text-[#000510]">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="mt-[20px] flex flex-col gap-[15px]">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={faq.question}
                className="rounded-[20px] border border-[#E1E1E1] bg-white"
              >
                <button
                  type="button"
                  aria-expanded={isOpen}
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="flex w-full items-center justify-between gap-[15px] px-[15px] py-[15px] text-left"
                >
                  <span className="max-w-[262px] text-[18px] font-medium leading-[125%] tracking-[0.03em] text-[#000510]">
                    {faq.question}
                  </span>

                  <span className="flex h-[28px] w-[28px] shrink-0 items-center justify-center">
                    {isOpen ? (
                      <MinusCircleIcon />
                    ) : (
                      <Image
                        src="/icons/plus-circle.png"
                        alt=""
                        width={28}
                        height={28}
                        className="h-[28px] w-[28px] object-contain"
                      />
                    )}
                  </span>
                </button>

                <div
                  className={`grid overflow-hidden transition-all duration-300 ${
                    isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="min-h-0 overflow-hidden">
                    <div className="h-[1px]" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function DesktopFaqSection({
  faqs,
  openIndex,
  setOpenIndex,
}: {
  faqs: FaqItem[];
  openIndex: number | null;
  setOpenIndex: React.Dispatch<React.SetStateAction<number | null>>;
}) {
  return (
    <section className="relative hidden overflow-hidden bg-white py-[90px] lg:block">

      <div className="relative mx-auto w-full max-w-[1700px] px-[40px] lg:px-[80px]">
        <div className="max-w-[820px]">
  <p className="inline-block w-fit border-b border-[#FE001A]/50 pb-[2px] text-[20px] font-medium uppercase tracking-[0.05em] text-[#FE001A]">
    QUESTIONS
  </p>

  <h2 className="mt-[12px] text-[clamp(2.4rem,1.5vw,3rem)] font-bold leading-[1.05] tracking-[0.04em] text-[#000510]">
    Frequently Asked Questions
  </h2>
</div>

        <div className="mt-[34px] flex flex-col gap-[18px]">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={faq.question}
                className="rounded-[20px] border border-[#E7E7EA] bg-white px-[20px] py-[35px] shadow-[0_0_0_1px_rgba(15,23,42,0.03),0_12px_28px_rgba(15,23,42,0.04)] transition-all duration-300 hover:-translate-y-[1px] hover:shadow-[0_0_0_1px_rgba(15,23,42,0.04),0_18px_36px_rgba(15,23,42,0.06)]"
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="flex w-full items-center justify-between gap-[20px] text-left"
                  aria-expanded={isOpen}
                >
                  <span className="text-[clamp(1rem,1.6vw,1.5rem)] font-semibold leading-[1.2] tracking-[0.02em] text-[#000510]">
                    {faq.question}
                  </span>

                  <span className="shrink-0">
                    {isOpen ? (
                      <MinusCircleIcon />
                    ) : (
                      <Image
                        src="/icons/plus-circle.png"
                        alt=""
                        width={28}
                        height={28}
                        className="h-[28px] w-[28px] object-contain"
                      />
                    )}
                  </span>
                </button>

                <div
                  className={`grid overflow-hidden transition-all duration-300 ${
                    isOpen ? "mt-[16px] grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="min-h-0 overflow-hidden">
                    <div className="h-[6px]" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function MinusCircleIcon() {
  return (
    <span className="flex h-[28px] w-[28px] items-center justify-center rounded-full border border-[#FE001A] bg-white">
      <span className="h-[2px] w-[12px] rounded-full bg-[#FE001A]" />
    </span>
  );
}