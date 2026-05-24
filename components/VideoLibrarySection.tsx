import Image from "next/image";
import { motion } from "framer-motion";

export default function VideoLibrarySection() {
  return (
    <>
      <MobileVideoLibrarySection />
      <DesktopVideoLibrarySection />
    </>
  );
}

function MobileVideoLibrarySection() {
  return (
    <section className="bg-white lg:hidden">
  <div className="mx-auto w-full max-w-[375px] px-[20px] py-[90px]">
    
    {/* WRITE UP FIRST */}
    <div>
      <motion.p
  initial="hidden"
  whileInView="show"
  viewport={{ once: false, amount: 0.7 }}
  className="inline-block w-fit text-[20px] font-medium uppercase tracking-[0.08em] text-[#FE001A]"
>
  VIDEO LIBRARY
  <motion.span
    className="mt-[2px] block h-[2px] w-full origin-left bg-[#FE001A]"
    variants={{
      hidden: { scaleX: 0 },
      show: {
        scaleX: 1,
        transition: { duration: 0.8, ease: "easeOut" },
      },
    }}
  />
</motion.p>

      <h2 className="mt-[8px] text-[22px] font-semibold leading-[1.16] tracking-[0.03em] text-[#000510]">
        The Straightforward Path To
        <br />
        Crypto Mastery
      </h2>

      <p className="mt-[18px] text-[18px] leading-[1.25] tracking-[0.01em] text-[#444548]">
        Watch animated, easy-to-understand explainers on Bynno YouTube
        Channel
      </p>
    </div>

    {/* IMAGE SECOND */}
    <div className="relative mt-[22px] aspect-[335/330] w-full overflow-hidden rounded-[18px] bg-[#111] shadow-[0_18px_42px_rgba(0,0,0,0.10)]">
      <Image
        src="/icons/video-library9.png"
        alt="Video library preview"
        fill
        priority
        className="object-cover"
      />

      
    </div>

    {/* EMAIL + CTA LAST */}
    <div className="mt-[44px] flex flex-col gap-[12px]">
      <label className="flex h-[52px] items-center gap-[12px] rounded-[8px] border border-black/10 bg-white px-[14px] shadow-[0_10px_24px_rgba(0,0,0,0.05)]">
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

      <button
        type="button"
        className="h-[42px] w-full rounded-[8px] bg-[#FE001A] text-[18px] tracking-[0.05em] font-bold text-white shadow-[0_10px_24px_rgba(254,0,26,0.18)]"
      >
        <span className="font-bold tracking-[0.05em]">
          Join to View
        </span>
      </button>
    </div>
  </div>
</section>
  );
}

function DesktopVideoLibrarySection() {
  return (
    <section className="mx-auto hidden w-full max-w-[1700px] px-[80px] py-[36px] lg:block lg:py-[96px]">
      <div className="grid items-center gap-[40px] lg:grid-cols-[1.08fr_0.92fr] lg:gap-[48px]">
  
  {/* VIDEO BOX LEFT */}
  <div className="flex justify-center lg:justify-start">
    <div className="relative h-[330px] w-full max-w-[636px] overflow-hidden rounded-[8px] shadow-[0_18px_42px_rgba(0,0,0,0.10)]">
      <Image
        src="/icons/video-library.png"
        alt="Video library preview"
        fill
        className="object-cover"
        priority
      />
    </div>
  </div>

  {/* TEXT RIGHT */}
  <div className="flex flex-col justify-start lg:pl-[30px]">
   <motion.p
  initial="hidden"
  whileInView="show"
  viewport={{ once: false, amount: 0.7 }}
  className="inline-block w-fit text-[20px] font-medium uppercase tracking-[0.08em] text-[#FE001A]"
>
  VIDEO LIBRARY
  <motion.span
    className="mt-[2px] block h-[2px] w-full origin-left bg-[#FE001A]"
    variants={{
      hidden: { scaleX: 0 },
      show: {
        scaleX: 1,
        transition: { duration: 0.8, ease: "easeOut" },
      },
    }}
  />
</motion.p>

    <h2 className="mt-[5px] max-w-[604px] text-[clamp(2.2rem,3vw,2.4rem)] font-bold leading-[2.05] tracking-[0.01em] text-[#000510]">
      Videos That Make It Fun.
    </h2>

    <p className="mt-[10px] max-w-[604px] text-[clamp(1.6rem,1.5vw,1.55rem)] leading-[1.18] tracking-[0.03em] text-[#4c4c4c]">
      Watch animated, easy-to-understand explainers on Bynno YouTube Channel
    </p>

    <div className="mt-[90px] flex max-w-[518px] flex-col gap-3 sm:flex-row sm:items-center">
      <label className="flex h-[60px] flex-1 items-center gap-3 rounded-[12px] border border-[#444548]/25 bg-white px-[15px] shadow-[0_10px_24px_rgba(0,0,0,0.05)] transition-all duration-200 focus-within:border-[#FE001A] focus-within:shadow-[0_10px_28px_rgba(254,0,26,0.10)]">
        <Image
          src="/icons/email2.png"
          alt="Email icon"
          width={18}
          height={18}
          className="h-[24px] w-[24px] shrink-0 object-contain"
        />

        <input
          type="email"
          placeholder="Type your email address here"
          className="w-full bg-transparent text-[14px] font-semibold outline-none placeholder:text-[#444548] sm:text-[15px]"
        />
      </label>

      <button
        type="button"
        className="appearance-none h-[52px] w-[158px] rounded-[8px] bg-[#FE001A] text-[20px] font-bold text-white [font-smoothing:auto]"
      >
        <span className="font-bold tracking-[0.05em]">
          Join to View
        </span>
      </button>
    </div>
  </div>
</div>
    </section>
  );
}