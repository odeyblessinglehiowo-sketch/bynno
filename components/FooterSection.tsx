import Image from "next/image";
import type { CSSProperties } from "react";

const desktopNavItems = [
  { label: "Home", href: "#top-desktop" },
  { label: "Guides", href: "#guides-desktop" },
  { label: "Trading", href: "#trading-desktop" },
  { label: "Games", href: "#games-desktop" },
  { label: "Community", href: "#community-desktop" },
];

const companyLinks = [
  "About",
  "Partnerships",
  "Contribute",
  "Referral Points",
  "Terms Of Service",
  "Disclaimer",
];

const courseLinks = [
  "Starter Lessons - Week 1",
  "Intermediate Lessons - Week 2",
  "Advanced Lessons - Week 3",
  "Trading - Week 4",
  "Bonus Resources",
  "How-To Guides",
  "Games",
];

const communityLinks = [
  { label: "X", icon: "/icons/social-x.png", href: "https://www.x.com/UseBynno" },
  {
    label: "TikTok",
    icon: "/icons/social-tiktok.png",
    href: "https://www.tiktok.com/@UseBynno",
  },
  {
    label: "Facebook",
    icon: "/icons/social-facebook.png",
    href: "https://www.facebook.com/UseBynno/",
  },
  { label: "Telegram", icon: "/icons/social-telegram.png", href: "https://www.t.me/useBynno" },
  { label: "WhatsApp", icon: "/icons/social-whatsapp.png", href: "#" },
];

const bottomIcons = [
  { icon: "/icons/social-x1.png", href: "https://www.x.com/UseBynno", label: "X" },
  {
    icon: "/icons/social-tiktok2.png",
    href: "https://www.tiktok.com/@UseBynno",
    label: "TikTok",
  },
  {
    icon: "/icons/social-facebook3.png",
    href: "https://www.facebook.com/UseBynno/",
    label: "Facebook",
  },
  { icon: "/icons/social-telegram4.png", 
    href: "https://www.t.me/useBynno", 
    label: "Telegram" },

  { icon: "/icons/social-whatsapp5.png", href: "#", label: "WhatsApp" },
];

const footerGlowStyle: CSSProperties = {
  background: `
    radial-gradient(
      ellipse 45% 18% at 50% 0%,
      rgba(254,0,26,0.08) 0%,
      rgba(254,0,26,0.04) 35%,
      rgba(255,255,255,0) 100%
    ),

    radial-gradient(
      ellipse 70% 38% at 50% 100%,
      rgba(254,0,26,0.18) 0%,
      rgba(254,0,26,0.10) 35%,
      rgba(254,0,26,0.04) 60%,
      rgba(255,255,255,0) 100%
    ),

    white
  `,
};

export default function FooterSection() {
  return (
    <>
      <MobileFooterSection />
      <DesktopFooterSection />
    </>
  );
}

function MobileFooterSection() {
  return (
    <footer 
    id="community-mobile"
    className="relative overflow-hidden bg-white text-[#2B2B2B] lg:hidden">
      <div className="pointer-events-none absolute inset-0" style={footerGlowStyle} />

      <div className="relative mx-auto w-full max-w-[395px] px-[20px] py-[28px]">
        <div className="flex flex-col">
          <Image
            src="/icons/bynno-logo-red.png"
            alt="Bynno"
            width={110.82}
            height={40}
            className="h-[34px] w-[110.82px]"
            priority={false}
          />

          <p className="mt-[18px] max-w-[345px] text-[17px] leading-[1.45] tracking-[0.02em] text-[#444548]">
            Helping the next million people understand crypto. One simple lesson at a time
          </p>

          <section
           className="mt-[26px] w-full text-left">
  <div className="flex items-start gap-[10px]">
    <Image
      src="/icons/phone-in-hand.png"
      alt=""
      width={24}
      height={24}
      className="mt-[2px] h-[24px] w-[24px] shrink-0 object-contain"
    />

    <div className="min-w-0">
      <p className="text-[14px] leading-[1.35] text-[#7A7A7A] tracking-[0.03em]">Get in Contact:</p>
      <a
                  href="mailto:Team@Bynno.com"
                  className="border-b border-[#FE001A]/50 text-[12px] text-[#FE001A] transition-colors duration-200 hover:border-[#000510] hover:text-[#000510]"
                >
                  Team@Bynno.com
                </a>
    </div>
  </div>

  <ul className="mt-[18px] space-y-[20px]">
    <li>
      <a href="#" className="block transition-colors duration-200 hover:text-[#FE001A]">
        Live Chat
      </a>
    </li>
    <li>
      <a href="#" className="block transition-colors duration-200 hover:text-[#FE001A]">
        FAQ
      </a>
    </li>
    <li>
      <a href="#" className="block transition-colors duration-200 hover:text-[#FE001A]">
        Sign Up
      </a>
    </li>
  </ul>
</section>
          <section className="mt-[24px]">
            <h3 className="text-[18px] font-bold uppercase tracking-[-0.02em] text-[#2B2B2B]">
              Communities
            </h3>

            <ul className="mt-[18px] space-y-[20px]">
              {communityLinks.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-[10px] text-[16px] tracking-[0.02em] transition-all duration-200 hover:-translate-y-[1px] hover:text-[#FE001A]"
                  >
                    <Image
                      src={item.icon}
                      alt={item.label}
                      width={24}
                      height={24}
                      className="h-[24px] w-[24px] shrink-0 object-contain"
                    />
                    <span>{item.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </section>

          <section className="mt-[26px]">
            <h3 className="text-[18px] font-bold uppercase tracking-[-0.02em] text-[#2B2B2B]">
              Courses
            </h3>

            <ul className="mt-[16px] space-y-[12px] text-[16px] leading-[1.35] text-[#2B2B2B]">
              {courseLinks.map((item) => (
                <li key={item}>
                  <a href="#" className="transition-colors duration-200 hover:text-[#FE001A]">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </section>

          <section className="mt-[66px]">
            <h3 className="text-[18px] font-bold uppercase tracking-[-0.02em] text-[#2B2B2B]">
              Bynno
            </h3>

            <ul className="mt-[16px] space-y-[12px] text-[16px] leading-[1.35] text-[#2B2B2B]">
              {companyLinks.map((item) => (
                <li key={item}>
                  <a href="#" className="transition-colors duration-200 hover:text-[#FE001A]">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </section>

          <div className="mt-[28px] border-t border-white/100 pt-[12px]">
            <p className="text-center text-[14px] leading-[1.4] text-[#0F1114]">
              © Copyright 2026 Bynno.{" "}
              <a
                href="#"
                className="border-b border-[#0F1114]/100 text-[#0F1114] transition-colors duration-200 hover:border-[#FE001A] hover:text-[#FE001A]"
              >
                Privacy Policy
              </a>
            </p>

            <div className="mt-[8px] flex items-center justify-center gap-[14px]">
              {bottomIcons.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={item.label}
                  className="transition-all duration-200 hover:-translate-y-[2px]"
                >
                  <Image
                    src={item.icon}
                    alt=""
                    width={22}
                    height={22}
                    className="h-[24px] w-[24px] object-contain"
                  />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

function DesktopFooterSection() {
  return (
    <footer 
    id="community-desktop"
    className="scroll-mt-[120px] relative hidden overflow-hidden bg-white text-[#2B2B2B] lg:block">
      <div className="pointer-events-none absolute inset-0" style={footerGlowStyle} />

      <div className="relative mx-auto w-full max-w-[1700px] px-[40px] py-[56px] lg:px-[80px] lg:py-[40px]">
        <div className="grid gap-[44px] lg:grid-cols-[1.45fr_0.98fr_1.2fr_0.65fr] lg:gap-[80px]">
          <div className="w-[350px]">
            <Image
              src="/icons/bynno-logo-red.png"
              alt="Bynno"
              width={110.82}
              height={40}
              className="h-[34px] w-auto"
              priority={false}
            />

            <p className="mt-[44px] max-w-[355px] text-[16px] font-normal leading-[1.45] tracking-[0.05em] text-[#444548]">
              Helping the next million people understand crypto. One simple lesson at a time
            </p>

            <div className="mt-[34px] flex items-start gap-[12px]">
              <Image
                src="/icons/phone-in-hand.png"
                alt=""
                width={28}
                height={28}
                className="mt-[2px] h-[28px] w-[28px] shrink-0 object-contain"
              />

              <div className="text-[17px] leading-[1.45] font-light">
                <p className="text-[#7A7A7A]">Get in Contact:</p>
                <a
                  href="mailto:Team@Bynno.com"
                  className="border-b border-[#FE001A]/50 text-[14px] text-[#FE001A] transition-colors duration-200 hover:border-[#000510] hover:text-[#000510]"
                >
                  Team@Bynno.com
                </a>

                <div className="mt-[12px] space-y-[10px]">
                  <a href="#" className="block text-[14px] font-light text-[#0F1114] hover:text-[#FE001A]">
                    Live Chat
                  </a>
                  <a href="#" className="block text-[14px] font-light text-[#0F1114] hover:text-[#FE001A]">
                    FAQ
                  </a>
                  <a href="#" className="block text-[14px] font-light text-[#0F1114] hover:text-[#FE001A]">
                    Sign Up
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-[18px] font-bold uppercase tracking-[-0.02em] text-[#2B2B2B]">
              Bynno
            </h3>

            <ul className="mt-[20px] space-y-[22px] text-[14px] font-light leading-[1.35] text-[#2B2B2B]">
              {companyLinks.map((item) => (
                <li key={item}>
                  <a href="#" className="transition-colors duration-200 hover:text-[#FE001A]">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-[18px] font-bold uppercase tracking-[-0.02em] text-[#2B2B2B]">
              Courses
            </h3>

            <ul className="mt-[20px] space-y-[22px] text-[14px] font-light leading-[1.35] text-[#2B2B2B]">
              {courseLinks.map((item) => (
                <li key={item}>
                  <a href="#" className="transition-colors duration-200 hover:text-[#FE001A]">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-[20px] font-bold uppercase tracking-[-0.02em] text-[#2B2B2B]">
              Communities
            </h3>

            <ul className="mt-[28px] space-y-[28px] text-[14px] font-light leading-[1.35] text-[#2B2B2B]">
              {communityLinks.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-[10px] transition-all duration-200 hover:-translate-y-[1px] hover:text-[#FE001A]"
                  >
                    <Image
                      src={item.icon}
                      alt={item.label}
                      width={24}
                      height={24}
                      className="h-[24px] w-[24px] shrink-0 object-contain"
                    />
                    <span>{item.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-[25px] flex items-center justify-between border-t border-white/100 pt-[24px]">
          <p className="text-[13px] text-[#7A7A7A]">
            © Copyright 2026 Bynno.{" "}
            <a
              href="#"
              className="border-b border-[#0F1114]/50 text-[#7A7A7A] transition-colors duration-200 hover:border-[#FE001A] hover:text-[#FE001A]"
            >
              Privacy Policy
            </a>
          </p>

          <div className="flex items-center gap-[20px]">
            {bottomIcons.map((item) => (
              <a
                key={item.label}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={item.label}
                className="transition-all duration-200 hover:-translate-y-[4px]"
              >
                <Image
                  src={item.icon}
                  alt=""
                  width={24}
                  height={24}
                  className="h-[24px] w-[24px] object-contain opacity-60 transition-all duration-200 hover:opacity-100"
                />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}