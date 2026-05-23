import Image from "next/image";

type OutlineCard = {
  title: string;
  week: string;
  subtitle: string;
  description: string;
  icon: string;
  alt: string;
  iconBgClassName: string;
  iconBoxClassName: string;
  iconClassName: string;
  cardBgClassName: string;
  weekClassName: string;
  subtitleClassName: string;
  progress: number;
  progressFillClassName: string;
  barSrc: string;
  barClassName: string;
};

const cards: OutlineCard[] = [
  {
    title: "Starter Lessons",
    week: "Week 1",
    subtitle: "Foundations.",
    description: "Buying, sending\n& storing your crypto safely.",
    icon: "/icons/starter1.png",
    alt: "Starter lessons icon",
    iconBgClassName: "bg-[rgba(254,0,26,0.10)]",
    iconBoxClassName: "h-[60px] w-[60px]",
    iconClassName: "h-[40px] w-[40px]",
    cardBgClassName: "bg-[rgba(254,0,26,0.07)]",
    weekClassName: "text-[#FE001A]",
    subtitleClassName: "font-black",
    progress: 18,
    progressFillClassName: "bg-[#FE001A]",
    barSrc: "/icons/bar-1.png",
    barClassName: "w-[270px]",
  },
  {
    title: "Intermediate Lessons",
    week: "Week 2",
    subtitle: "Mechanics.",
    description: "Wallets, CEX vs DEX,\nspotting rugpulls, etc",
    icon: "/icons/intermediate.png",
    alt: "Intermediate lessons icon",
    iconBgClassName: "bg-[rgba(177,4,8,0.10)]",
    iconBoxClassName: "h-[60px] w-[60px]",
    iconClassName: "h-[40px] w-[40px]",
    cardBgClassName: "bg-[rgba(177,4,8,0.07)]",
    weekClassName: "text-[#B10408]",
    subtitleClassName: "font-black",
    progress: 56,
    progressFillClassName: "bg-[#B10408]",
    barSrc: "/icons/bar-2.png",
    barClassName: "w-[270px]",
  },
  {
    title: "Advanced Lessons",
    week: "Week 3",
    subtitle: "See the backend.",
    description: "Gas, tokenomics, swaps, bridges all in plain English",
    icon: "/icons/advanced.png",
    alt: "Advanced lessons icon",
    iconBgClassName: "bg-[rgba(254,0,26,0.10)]",
    iconBoxClassName: "h-[60px] w-[60px]",
    iconClassName: "h-[40px] w-[40px]",
    cardBgClassName: "bg-[rgba(254,0,26,0.07)]",
    weekClassName: "text-[#FE001A]",
    subtitleClassName: "font-bold",
    progress: 76,
    progressFillClassName: "bg-[#FE001A]",
    barSrc: "/icons/bar-3.png",
    barClassName: "w-[270px]",
  },
  {
    title: "Crypto Trading",
    week: "Week 4",
    subtitle: "Trade like the top 10%.",
    description: "Learn profit strategies for bull & bear markets",
    icon: "/icons/trading.png",
    alt: "Crypto trading icon",
    iconBgClassName: "bg-[rgba(177,4,8,0.10)]",
    iconBoxClassName: "h-[60px] w-[60px]",
    iconClassName: "h-[40px] w-[40px]",
    cardBgClassName: "bg-[rgba(177,4,8,0.10)]",
    weekClassName: "text-[#B10408]",
    subtitleClassName: "font-bold",
    progress: 98,
    progressFillClassName: "bg-[#B10408]",
    barSrc: "",
    barClassName: "w-[270px]",
  },
];

export default function FullOutlineSection() {
  return (
    <>
      <MobileFullOutlineSection />
      <DesktopFullOutlineSection />
    </>
  );
}

function MobileFullOutlineSection() {
  return (
    <section className="bg-white lg:hidden">
      <div className="mx-auto w-full max-w-[375px] px-[10px] pt-[2px] pb-[19px]">
        <div className="max-w-[335px]">
          <p className="inline-block w-fit border-b border-[#FE001A]/50 pb-[2px] text-[14px] font-medium uppercase tracking-[0.05em] text-[#FE001A]">
            THE FULL OUTLINE
          </p>

          <h2 className="mt-[8px] text-[22px] font-bold leading-[1.08] tracking-[0.02em] text-[#000510]">
            Everything You Need To Know...
            <br />
            Explained Each Week.
          </h2>
        </div>

        <div className="mt-[18px] flex flex-col gap-[15px]">
          {cards.map((card) => (
            <article
              key={card.title}
              className={`rounded-[12px] px-[15px] py-[25px] shadow-[0_1px_24px_rgba(15,23,42,0.019)] ${card.cardBgClassName}`}
            >
              <div className="flex flex-col items-start gap-[10px]">
                <div
  className={`-mt-[12px] flex shrink-0 items-center justify-center rounded-[10px] ${card.iconBgClassName} ${card.iconBoxClassName}`}
>
                  <Image
                    src={card.icon}
                    alt={card.alt}
                    width={40}
                    height={40}
                    className={`${card.iconClassName} object-contain`}
                  />
                </div>

                <div className="min-w-0 flex-1">
                  <h3 className="text-[24px] font-bold leading-[1.05] tracking-[0.02em] text-[#000510]">
                    {card.title}
                  </h3>

                  <p
                    className={`mt-[12px] text-[18px] font-bold leading-[1.15] tracking-[0.01em] ${card.weekClassName}`}
                  >
                    {card.week}
                  </p>

                  <p
                    className={`mt-[18px] whitespace-pre-line text-[18px] leading-[1.32] tracking-[0.01em] text-[#444548] ${card.subtitleClassName}`}
                  >
                    {card.subtitle}
                  </p>

                  <p className="mt-[1px] whitespace-pre-line text-[18px] leading-[1.52] tracking-[0.01em] text-[#444548]">
                    {card.description}
                  </p>
                </div>
              </div>

              <div className="mt-[16px] h-[6px] overflow-hidden rounded-full bg-[#F2D6D8]">
                <div
                  className={`h-full rounded-full ${card.progressFillClassName}`}
                  style={{ width: `${card.progress}%` }}
                />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function DesktopFullOutlineSection() {
  return (
    <section className="mx-auto hidden w-full max-w-[4500px] px-[80px] pt-[2px] pb-[54px] lg:block">
      <div className="max-w-[611px]">
        <p className="inline-block w-fit border-b border-[#FE001A]/50 pb-[2px] text-[20px] font-medium uppercase tracking-[0.08em] text-[#FE001A]">
  THE FULL OUTLINE
</p>

        <div className="mt-[14px]">
          <h2 className="text-[38px] font-bold leading-[1.02] tracking-[0.05em] text-[#000510]">
            Everything You Need To Know...
          </h2>

          <h2 className="mt-[4px] text-[38px] font-bold leading-[1.02] tracking-[0.05em] text-[#000510]">
            Explained Each Week.
          </h2>
        </div>
      </div>

      <div className="mt-[34px] grid gap-[31px] xl:grid-cols-4">
        {cards.map((card) => (
          <article
            key={card.title}
            className={`
              group flex h-[279px] flex-col rounded-[20px] px-[15px] py-[15px]
              shadow-[0_18px_42px_rgba(0,0,0,0.00)]
              transition-all duration-300 hover:-translate-y-1
              hover:shadow-[0_24px_60px_rgba(0,0,0,0.10)]
              active:scale-[0.99]
              ${card.cardBgClassName}
            `}
          >
            <div
              className={`flex items-center justify-center rounded-[10px] ${card.iconBgClassName} ${card.iconBoxClassName}`}
            >
              <Image
                src={card.icon}
                alt={card.alt}
                width={60}
                height={60}
                className={`${card.iconClassName} object-contain transition-transform duration-300 group-hover:scale-[1.05]`}
              />
            </div>

            <div className="mt-[14px]">
              <h3 className="text-[24px] font-bold leading-[1.05] tracking-[0.03em] text-[#000510]">
                {card.title}
              </h3>

              <p
                className={`
                  mt-[4px] text-[18px] leading-[2.15] tracking-[0.03em]
                  ${card.weekClassName === "text-[#FE001A]" ? "font-bold" : "font-extrabold"}
                  ${card.weekClassName}
                `}
              >
                {card.week}
              </p>

              <p
                className={`
                  mt-[10px] text-[18px] leading-[1.15] tracking-[0.03em] text-[#444548]
                  ${card.subtitleClassName}
                `}
              >
                {card.subtitle}
              </p>

              <p className="mt-[4px] whitespace-pre-line text-[17px] leading-[1.45] tracking-[0.03em] text-[#444548]">
                {card.description}
              </p>
            </div>

            <div className="mt-auto pt-[14px]">
              {card.title === "Crypto Trading" ? (
                <div className="h-[6px] w-[267.25px] overflow-hidden rounded-full bg-[#F2D6D8]">
                  <div className="h-full w-[98%] rounded-full bg-[#B10408]" />
                </div>
              ) : (
                <Image
                  src={card.barSrc}
                  alt=""
                  width={180}
                  height={6}
                  className={`${card.barClassName} h-auto object-contain`}
                />
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}