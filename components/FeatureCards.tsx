import Image from "next/image";
import type { ReactNode } from "react";

type FeatureCard = {
  title: ReactNode;
  iconSrc: string;
  iconAlt: string;
  iconClassName: string;
  titleWidthClassName: string;
};

const features: FeatureCard[] = [
  {
    title: (
      <>
        Downloadable guides with
        step-by-step examples
      </>
    ),
    iconSrc: "/icons/download.png",
    iconAlt: "Download guide icon",
    iconClassName: "h-[78px] w-[78px]",
    titleWidthClassName: "max-w-[240px]",
  },
  {
    title: (
      <>
        Weekly live sessions
        <br />
        on Saturdays
      </>
    ),
    iconSrc: "/icons/live-session.png",
    iconAlt: "Live session icon",
    iconClassName: "h-[88px] w-[88px]",
    titleWidthClassName: "max-w-[220px]",
  },
  {
    title: (
      <>
        Answer fun quizzes and collect points
        
        everytime you pass
      </>
    ),
    iconSrc: "/icons/question.png",
    iconAlt: "Quiz icon",
    iconClassName: "h-[88px] w-[88px]",
    titleWidthClassName: "max-w-[250px]",
  },
  {
    title: (
      <>
        Certificate given on passing all weekly
        
        quizzes
      </>
    ),
    iconSrc: "/icons/certificate.png",
    iconAlt: "Certificate icon",
    iconClassName: "h-[88px] w-[88px]",
    titleWidthClassName: "max-w-[235px]",
  },
];

export default function FeaturesSection() {
  return (
    <>
      <section className="bg-white lg:hidden">
        <div className="mx-auto w-full max-w-[375px] px-[20px] py-[60px]">
          <div className="flex flex-col gap-[16px]">
            {features.map((feature) => (
              <article
                key={feature.iconAlt}
                className="flex min-h-[198px] flex-col items-center justify-center rounded-[12px] bg-white px-[20px] py-[22px] text-center shadow-[0_10px_26px_rgba(15,23,42,0.08),0_28px_50px_rgba(15,23,42,0.04)]"
              >
                <div className="flex h-[104px] items-center justify-center">
                  <Image
                    src={feature.iconSrc}
                    alt={feature.iconAlt}
                    width={96}
                    height={96}
                    className={`${feature.iconClassName} object-contain`}
                  />
                </div>

                <p
                  className={`mt-[10px] ${feature.titleWidthClassName} text-[16px] font-medium leading-[1.28] tracking-[0.02em] text-[#4C4C4C]`}
                >
                  {feature.title}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="relative z-10 mx-auto hidden max-w-[4500px] px-[44px] pb-22 pt-[6px] lg:block lg:px-[50px] lg:pt-[42px]">
        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4 lg:gap-15">
          {features.map((feature) => (
            <div
              key={feature.iconAlt}
              className="group flex h-[198px] flex-col items-center justify-start rounded-[10px] bg-white px-6 pt-8 pb-6 text-center shadow-[0_40px_50px_rgba(15,23,42,0.10)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_24px_54px_rgba(15,23,42,0.16)] active:scale-[0.99] sm:px-6"
            >
              <div className="flex h-[92px] w-[92px] items-center justify-center">
                <Image
                  src={feature.iconSrc}
                  alt={feature.iconAlt}
                  width={74}
                  height={74}
                  className={`${feature.iconClassName} object-contain transition-transform duration-300 group-hover:scale-[1.06]`}
                />
              </div>

              <p
                className={`mx-auto mt-3 ${feature.titleWidthClassName} text-[16px] leading-[1.23] tracking-[0.03em] text-[#4c4c4c] transition-colors duration-200 group-hover:text-[#000510] sm:text-[17px]`}
              >
                {feature.title}
              </p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}