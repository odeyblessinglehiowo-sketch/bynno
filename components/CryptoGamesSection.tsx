"use client";

import Image from "next/image";
import type { CSSProperties } from "react";

type PlayCard = {
  kind: "play";
  title: string;
  subtitle: string;
  iconSrc: string;
  iconAlt: string;
  buttonTone: "red" | "dark";
  cardWidthClassName: string;
  iconSizeClassName?: string;
};

type LeaderboardCard = {
  kind: "leaderboard";
  title: string;
  iconSrc: string;
  iconAlt: string;
  iconSizeClassName: string;
  leaderboardSrc: string;
  leaderboardAlt: string;
  cardWidthClassName: string;
};

type GameCard = PlayCard | LeaderboardCard;

const HOME_HREF = "/#home";

const games: GameCard[] = [
  {
    kind: "play",
    title: "Blockchain Builder",
    subtitle: "Build fun blockchains here",
    iconSrc: "/icons/blockcain-builder.png",
    iconAlt: "Blockchain Builder icon",
    buttonTone: "red",
    cardWidthClassName: "w-[284px] max-w-[284px]",
    iconSizeClassName: "h-[126.11px] w-[130px]",
  },
  {
    kind: "play",
    title: "Crypto Wordle",
    subtitle: "Imaginative crypto word games",
    iconSrc: "/icons/crpto-wordle.png",
    iconAlt: "Crypto Wordle icon",
    buttonTone: "dark",
    cardWidthClassName: "w-[284px] max-w-[284px]",
    iconSizeClassName: "h-[130px] w-[130px]",
  },
  {
    kind: "play",
    title: "Crypto Millionaire",
    subtitle: "Who wants to be a crypto millionaire",
    iconSrc: "/icons/crpto-millionaire.png",
    iconAlt: "Crypto Millionaire icon",
    buttonTone: "red",
    cardWidthClassName: "w-[284.5px] max-w-[284.5px]",
    iconSizeClassName: "h-[140px] w-[207px]",
  },
  {
    kind: "leaderboard",
    title: "Top Players Today",
    iconSrc: "/icons/tp-players.png",
    iconAlt: "Top Players Today trophy icon",
    iconSizeClassName: "h-[130px] w-[130px]",
    leaderboardSrc: "/icons/top-players-list.png",
    leaderboardAlt: "Top players list",
    cardWidthClassName: "w-[284.5px] max-w-[284.5px]",
  },
];

const sectionStyle: CSSProperties = {
  backgroundColor: "#f00808",
  backgroundImage: `
    radial-gradient(
      circle at 70% 68%,
      rgba(177,4,8,0.14) 0%,
      rgba(177,4,8,0.10) 28%,
      rgba(254,0,26,0.06) 32%,
      rgba(255,255,255,0.78) 68%,
      rgba(255,255,255,1) 94%
    ),

    radial-gradient(
      circle at top left,
      rgba(255,120,120,0.30) 0%,
      rgba(255,170,170,0.18) 24%,
      rgba(255,255,255,0.82) 58%,
      rgba(255,255,255,0) 84%
    ),

    radial-gradient(
      circle at top right,
      rgba(252,232,235,0.22) 0%,
      rgba(252,232,235,0.14) 28%,
      rgba(255,255,255,0) 78%
    ),

    radial-gradient(
      circle at bottom left,
      rgba(252,232,235,0.22) 10%,
      rgba(252,232,235,0.14) 18%,
      rgba(255,255,255,0) 98%
    ),

    radial-gradient(
      circle at bottom right,
      rgba(255,255,255,1) 0%,
      rgba(255,255,255,0.98) 38%,
      rgba(255,255,255,0.92) 62%,
      rgba(255, 9, 9, 0.96) 84%
    )
  `,
};

export default function GamesSection() {
  return (
    <>
      <MobileGamesSection />
      <DesktopGamesSection />
    </>
  );
}

function MobileGamesSection() {
  return (
    <section className="bg-white px-[20px] py-[3px] lg:hidden">
      <div
        className="relative mx-auto w-full max-w-[375px] overflow-hidden rounded-[20px]"
        style={sectionStyle}
      >
        <div className="mx-auto w-full px-[20px] py-[24px]">
          <div className="mx-auto max-w-[335px] text-center">
            <p className="text-[20px] font-medium uppercase tracking-[0.08em] text-[#FE001A]">
              LEARN BY PLAYING
            </p>

            <h2 className="mt-[13px] text-[26px] font-bold leading-[1.09] tracking-[0.02em] text-[#000510]">
              Fun Crypto Games
              <br />
              Collect Coins As You Play
            </h2>
          </div>

          <div className="mt-[48px] flex flex-col gap-[18px]">
            {games.map((game) => {
              if (game.kind === "play") {
                const buttonBg = game.buttonTone === "dark" ? "#B10408" : "#FE001A";

                return (
                  <article
                    key={game.title}
                    className="group flex min-h-[384px] w-full flex-col rounded-[12px] bg-white px-[15px] py-[20px] shadow-[0_18px_34px_rgba(15,23,42,0.12)] transition-all duration-300 hover:-translate-y-[2px] hover:shadow-[0_24px_44px_rgba(15,23,42,0.16)] active:scale-[0.99]"
                  >
                    <div className="mt-[20px] flex justify-center">
                      <Image
                        src={game.iconSrc}
                        alt={game.iconAlt}
                        width={130}
                        height={130}
                        className={`${game.iconSizeClassName ?? "h-[126.11px] w-[130px]"} object-contain transition-transform duration-300 group-hover:scale-[1.04]`}
                      />
                    </div>

                    <div className="mt-[32px] text-center">
                      <h3 className="text-[26px] font-bold leading-[1.06] tracking-[0.03em] text-[#000510]">
                        {game.title}
                      </h3>

                      <p className="mt-[22px] text-[16px] leading-[1.35] tracking-[0.02em] text-[#444548]">
                        {game.subtitle}
                      </p>
                    </div>

                    <a
                      href={HOME_HREF}
                      className="mt-auto inline-flex h-[48px] items-center justify-center gap-[10px] rounded-[8px] px-[18px] text-[15px] font-bold text-white shadow-[0_10px_24px_rgba(0,0,0,0.12)] transition-all duration-300 hover:-translate-y-[1px] hover:brightness-95 active:translate-y-0 active:scale-[0.98]"
                      style={{ backgroundColor: buttonBg }}
                      aria-label={`Open ${game.title}`}
                    >
                      <Image
                        src="/icons/play-button.png"
                        alt=""
                        width={28}
                        height={28}
                        className="h-[28px] w-[28px] shrink-0 object-contain"
                      />
                      <span>Play</span>
                    </a>
                  </article>
                );
              }

              return (
                <article
                  key={game.title}
                  className="group flex min-h-[364px] w-full flex-col rounded-[12px] bg-white px-[15px] py-[20px] shadow-[0_18px_34px_rgba(15,23,42,0.12)] transition-all duration-300 hover:-translate-y-[2px] hover:shadow-[0_24px_44px_rgba(15,23,42,0.16)] active:scale-[0.99]"
                >
                  <div className="flex justify-center">
                    <Image
                      src={game.iconSrc}
                      alt={game.iconAlt}
                      width={130}
                      height={130}
                      className={`${game.iconSizeClassName} object-contain transition-transform duration-300 group-hover:scale-[1.04]`}
                    />
                  </div>

                  <h3 className="mt-[25px] text-left text-[26px] font-bold leading-[1.06] tracking-[0.03em] text-[#000510]">
                    {game.title}
                  </h3>

                  <div className="mt-[20px] flex-1">
                    <Image
                      src={game.leaderboardSrc}
                      alt={game.leaderboardAlt}
                      width={269}
                      height={112}
                      className="h-auto w-[269px] object-contain"
                    />
                  </div>
                </article>
              );
            })}
          </div>

          <div className="mt-[45px] flex flex-col gap-[30px]">
            <a
              href={HOME_HREF}
              className="inline-flex h-[50px] items-center justify-center rounded-[8px] bg-[#FE001A] px-[24px] text-[20px] tracking-[0.05em] font-bold text-white shadow-[0_10px_24px_rgba(254,0,26,0.18)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#e50017] active:translate-y-0 active:scale-[0.98]"
            >
              Open All Games
            </a>

            <a
              href={HOME_HREF}
              className="inline-flex h-[50px] items-center justify-center rounded-[8px] bg-[#B10408] px-[24px] text-[20px] tracking-[0.05em] font-bold text-white shadow-[0_10px_24px_rgba(177,4,8,0.18)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#9b0307] active:translate-y-0 active:scale-[0.98]"
            >
              Daily Challenge
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function DesktopGamesSection() {
  return (
    <section className="hidden bg-white px-[20px] py-[24px] sm:px-[28px] sm:py-[32px] lg:block lg:px-[40px] lg:py-[40px]">
      <div
        className="relative mx-auto w-full max-w-[1280px] overflow-hidden rounded-[40px]"
        style={sectionStyle}
      >
        <div className="mx-auto flex min-h-[780px] w-full flex-col items-center px-[20px] py-[44px] sm:px-[28px] sm:py-[56px] lg:px-[40px] lg:py-[66px]">
          <div className="mx-auto max-w-[832px] text-center">
            <p className="text-[20px] font-medium uppercase tracking-[0.08em] text-[#FE001A]">
              LEARN BY PLAYING
            </p>

            <h2 className="mt-[12px] text-[clamp(2.4rem,1.3vw,1.8rem)] font-bold leading-[1.76] tracking-[0.04em] text-[#000510]">
              Fun Crypto Games
              <br />
              Collect Coins As You Play
            </h2>
          </div>

          <div className="mt-[34px] grid w-full gap-[20px] xl:grid-cols-4 xl:justify-items-center">
            {games.map((game) => {
              if (game.kind === "play") {
                const buttonBg = game.buttonTone === "dark" ? "#B10408" : "#FE001A";

                return (
                  <article
                    key={game.title}
                    className={`flex h-[364px] ${game.cardWidthClassName} shrink-0 flex-col rounded-[12px] bg-white px-[15px] py-[20px] shadow-[0_18px_34px_rgba(15,23,42,0.12)] transition-transform duration-200 hover:-translate-y-[2px]`}
                  >
                    <div className="flex justify-center">
                      <Image
                        src={game.iconSrc}
                        alt={game.iconAlt}
                        width={130}
                        height={130}
                        className={`${game.iconSizeClassName ?? "h-[130px] w-[130px]"} object-contain`}
                      />
                    </div>

                    <div className="mt-[30px] text-center">
                      <h3 className="text-[24px] font-bold leading-[1.1] tracking-[0.04em] text-[#000510]">
                        {game.title}
                      </h3>

                      <p className="mt-[20px] text-[16px] leading-[1.35] tracking-[0.03em] text-[#444548]">
                        {game.subtitle}
                      </p>
                    </div>

                    <a
                      href={HOME_HREF}
                      className="mt-auto inline-flex h-[52px] items-center justify-center gap-[10px] rounded-[8px] px-[18px] text-[15px] font-bold text-white shadow-[0_10px_24px_rgba(0,0,0,0.12)] transition-all duration-200 hover:-translate-y-[1px] hover:brightness-95 active:translate-y-0 active:scale-[0.99]"
                      style={{ backgroundColor: buttonBg }}
                      aria-label={`Open ${game.title}`}
                    >
                      <Image
                        src="/icons/play-button.png"
                        alt=""
                        width={30}
                        height={30}
                        className="h-[30px] w-[30px] shrink-0 object-contain"
                      />
                      <span>Play</span>
                    </a>
                  </article>
                );
              }

              return (
                <article
                  key={game.title}
                  className={`flex h-[364px] ${game.cardWidthClassName} shrink-0 flex-col rounded-[20px] bg-white px-[15px] py-[20px] shadow-[0_18px_34px_rgba(15,23,42,0.12)] transition-transform duration-200 hover:-translate-y-[2px]`}
                >
                  <div className="flex justify-center">
                    <Image
                      src={game.iconSrc}
                      alt={game.iconAlt}
                      width={130}
                      height={130}
                      className={`${game.iconSizeClassName} object-contain`}
                    />
                  </div>

                  <h3 className="mt-[8px] text-center text-[24px] font-bold leading-[1.1] tracking-[-0.02em] text-[#000510]">
                    {game.title}
                  </h3>

                  <div className="mt-[12px] flex-1">
                    <Image
                      src={game.leaderboardSrc}
                      alt={game.leaderboardAlt}
                      width={264}
                      height={112}
                      className="h-auto w-full object-contain"
                    />
                  </div>
                </article>
              );
            })}
          </div>

          <div className="mt-[34px] flex flex-wrap justify-center gap-[16px]">
            <a
              href={HOME_HREF}
              className="inline-flex h-[52px] items-center justify-center rounded-[8px] bg-[#FE001A] px-[24px] text-[20px] font-bold text-white shadow-[0_10px_24px_rgba(254,0,26,0.18)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#e50017] active:translate-y-0 active:scale-[0.98]"
            >
              Open All Games
            </a>

            <a
              href={HOME_HREF}
              className="inline-flex h-[52px] items-center justify-center rounded-[8px] bg-[#B10408] px-[24px] text-[20px] font-bold text-white shadow-[0_10px_24px_rgba(177,4,8,0.18)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#9b0307] active:translate-y-0 active:scale-[0.98]"
            >
              Daily Challenge
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}