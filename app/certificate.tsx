"use client";
import Image from "next/image";
import FadeDown from "@/components/animations/FadeDown";
import FadeUp from "@/components/animations/FadeUp";
import GlareHover from "@/components/GlareHover";

interface CardItem {
  index: number;
  imagePath: string;
  title: string;
  liveDemoUrl: string;
}

function Card({ item }: { item: CardItem }) {
  return (
    <GlareHover className="group flex flex-col h-full bg-background border border-text-secondary/20 hover:border-text-primary/50 rounded-xl overflow-hidden transition-all duration-500 shadow-sm hover:shadow-2xl">
      <div className="relative overflow-hidden aspect-[16/10] bg-text-secondary/5 border-b border-text-secondary/10">
        <Image
          src={item.imagePath}
          alt={item.title}
          fill
          className="object-cover transition-all duration-700 group-hover:scale-105"
        />
      </div>

      <div className="p-6 md:p-8 flex flex-col flex-grow relative">
        {/* Numbering */}
        <div className="absolute top-0 right-6 -translate-y-1/2 bg-background border border-text-secondary/20 px-3 py-1 rounded-full text-[10px] font-bold tracking-widest text-text-secondary shadow-sm">
          {String(item.index + 1).padStart(2, "0")}
        </div>

        <div className="flex justify-between items-start mb-4">
          <h4 className="text-2xl font-black text-text-primary tracking-tight leading-tight group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-text-primary group-hover:to-text-secondary transition-all duration-500">
            {item.title}
          </h4>
        </div>

        <div className="flex items-center justify-end mt-auto pt-4 border-t border-text-secondary/10">
          <a
            href={item.liveDemoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 border border-text-secondary/20 rounded-full text-text-secondary hover:text-background hover:bg-text-primary hover:border-text-primary transition-all duration-300"
          >
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
              />
            </svg>
          </a>
        </div>
      </div>
    </GlareHover>
  );
}

function CardSection({
  id,
  label,
  title,
  list,
  moreUrl,
}: {
  id?: string;
  label: string;
  title: string;
  list: CardItem[];
  moreUrl?: string;
}) {
  return (
    <section
      id={id}
      className="w-full max-w-7xl mx-auto py-24 md:py-32 cursor-default bg-background relative border-t border-text-secondary/10"
    >
      <FadeDown>
        <div className="max-w-7xl mx-auto px-6 md:px-12 mb-16 md:mb-24 w-full text-left">
          <h2 className="text-sm font-bold tracking-[0.2em] text-text-secondary uppercase mb-4">
            {label}
          </h2>
          <h3 className="text-4xl md:text-5xl lg:text-6xl font-black text-text-primary tracking-tighter">
            {title}
          </h3>
        </div>
      </FadeDown>

      {/* Desktop View: Grid */}
      <div className="hidden lg:grid max-w-7xl mx-auto grid-cols-3 gap-8 px-6 md:px-12">
        {list.map((item, index) => (
          <FadeUp key={`desktop-${index}`}>
            <Card item={item} />
          </FadeUp>
        ))}
      </div>

      {/* Mobile & Tablet View: Infinite Loop Slider */}
      <div className="lg:hidden w-full overflow-hidden relative py-4">
        <div className="flex w-max animate-infinite-scroll hover:[animation-play-state:paused]">
          <div className="flex gap-6 px-3">
            {list.map((item, index) => (
              <div
                key={`mobile1-${index}`}
                className="w-[85vw] sm:w-[400px] flex-shrink-0"
              >
                <Card item={item} />
              </div>
            ))}
          </div>

          <div className="flex gap-6 px-3">
            {list.map((item, index) => (
              <div
                key={`mobile2-${index}`}
                className="w-[85vw] sm:w-[400px] flex-shrink-0"
              >
                <Card item={item} />
              </div>
            ))}
          </div>
        </div>
      </div>

      {moreUrl && (
        <FadeUp>
          <div className="mt-16 flex justify-center w-full px-6">
            <a
              href={moreUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 bg-background border border-text-secondary/20 text-text-primary hover:border-text-primary hover:bg-text-primary hover:text-background rounded-xl font-bold tracking-widest text-sm uppercase transition-all duration-300 ease-out group hover:-translate-y-1.5 hover:scale-[1.02] shadow-sm hover:shadow-xl"
            >
              <span>View More</span>
              <svg
                className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                />
              </svg>
            </a>
          </div>
        </FadeUp>
      )}
    </section>
  );
}

export default function Certificate() {
  return (
    <>
      <CardSection
        id="certificate"
        label="Portfolio"
        title="Certificate"
        list={certificateList}
        moreUrl="https://www.linkedin.com/in/adtynl"
      />
      <CardSection
        label="Portfolio"
        title="Writeups"
        list={writeupList}
        moreUrl="https://medium.com/@adtynll/"
      />
    </>
  );
}

const certificateList: CardItem[] = [
  {
    index: 0,
    imagePath: "/images/jakarta.jpg",
    title: "Certificate Of Appreciation",
    liveDemoUrl:
      "https://soc.jakarta.go.id//certificate/view?token=$2y$13$bu/43ZH.36zflSxZvFJtQOVvUroR.jTVXpd1t1zAp3TVOlTT.0yPu",
  },
  {
    index: 1,
    imagePath: "/images/course.jpg",
    title: "Course",
    liveDemoUrl: "#",
  },
  {
    index: 2,
    imagePath: "/images/unj.jpg",
    title: "Certificate Of Appreciation",
    liveDemoUrl: "#",
  },
];

const writeupList: CardItem[] = [
  {
    index: 0,
    imagePath: "/images/medium.png",
    title:
      "Broken Access Control Leading to Exposure of 7,000+ PII Records on a Jakarta Government Subdomain",
    liveDemoUrl:
      "https://medium.com/@adtynll/broken-access-control-leading-to-exposure-of-7-000-pii-records-on-a-jakarta-government-subdomain-8ebcee110ceb",
  },
  {
    index: 1,
    imagePath: "/images/medium.png",
    title: "How I Discovered Multiple Vulnerabilities on a vu.nl Subdomain",
    liveDemoUrl:
      "https://medium.com/@adtynll/how-i-discovered-multiple-vulnerabilities-on-a-vu-nl-subdomain-cf512c8abeaa",
  },
  {
    index: 2,
    imagePath: "/images/medium.png",
    title:
      "How I Found an SQL Injection Vulnerability at Universitas Negeri Jakarta (UNJ)",
    liveDemoUrl:
      "https://medium.com/@adtynll/how-i-found-an-sql-injection-vulnerability-at-universitas-negeri-jakarta-unj-f372203ffa71",
  },
];
