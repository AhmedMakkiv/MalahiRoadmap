import svgPaths from "./svg-03h6tnyy7n";
import { imgGroup } from "./svg-7c4of";

function Container() {
  return <div className="bg-[#00c2ff] blur-[128px] opacity-20 rounded-[16777200px] size-[384px]" data-name="Container" />;
}

function HeroSection() {
  return (
    <div className="content-stretch flex flex-col items-start pl-[221px] pr-[165px] pt-[96px] relative size-[1325px]" data-name="HeroSection" style={{ backgroundImage: "linear-gradient(90.0135deg, rgb(255, 255, 255) 95.709%, rgb(15, 20, 33) 116.32%)" }}>
      <div className="flex items-center justify-center relative shrink-0 size-[384px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="-rotate-90 flex-none">
          <Container />
        </div>
      </div>
    </div>
  );
}

function Frame() {
  return (
    <div className="h-[1325px] relative shrink-0 w-full">
      <div className="absolute flex items-center justify-center left-0 size-[1325px] top-0" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-90">
          <HeroSection />
        </div>
      </div>
    </div>
  );
}

function Heading() {
  return (
    <div className="h-[60px] relative shrink-0 w-full" data-name="Heading 1">
      <p className="absolute font-['IBM_Plex_Sans_Arabic:Bold','Noto_Sans:Bold',sans-serif] leading-[60px] left-[41px] text-[60px] text-white top-0" dir="auto" style={{ fontVariationSettings: "\'CTGR\' 0, \'wdth\' 100, \'wght\' 700" }}>
        خطة تطوير الأعمال ورفع المبيعات – ملاهي
      </p>
    </div>
  );
}

function Paragraph() {
  return (
    <div className="h-[36px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="-translate-x-full absolute font-['IBM_Plex_Sans_Arabic:Regular','Noto_Sans:Regular',sans-serif] leading-[36px] left-[1024.31px] text-[#b4c6d8] text-[20px] text-right top-0 w-[894px] whitespace-pre-wrap" dir="auto" style={{ fontVariationSettings: "\'CTGR\' 0, \'wdth\' 100, \'wght\' 400" }}>
        خطة نمو متكاملة لمدة 12 شهر تهدف إلى رفع المبيعات الرقمية، زيادة الحجوزات، وبناء نظام إيرادات مستدام وقابل للتوسع.
      </p>
    </div>
  );
}

function Container2() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] h-[120px] items-start relative shrink-0 w-full" data-name="Container">
      <Heading />
      <Paragraph />
    </div>
  );
}

function Paragraph1() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['IBM_Plex_Sans_Arabic:Regular',sans-serif] leading-[20px] left-[63.71px] not-italic text-[#94a3b8] text-[14px] top-[-0.5px]" dir="auto">
        القنوات الرقمية
      </p>
    </div>
  );
}

function Paragraph2() {
  return (
    <div className="h-[46.797px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="-translate-x-full absolute font-['IBM_Plex_Sans_Arabic:SemiBold',sans-serif] leading-[23.4px] left-[142.55px] not-italic text-[18px] text-right text-white top-0 w-[136px] whitespace-pre-wrap" dir="auto">
        الموقع – التطبيق – الحملات
      </p>
    </div>
  );
}

function Container6() {
  return (
    <div className="flex-[1_0_0] h-[66.797px] min-h-px min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Paragraph1 />
        <Paragraph2 />
      </div>
    </div>
  );
}

function Icon() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icon">
      <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon">
          <path d={svgPaths.p1adf7700} id="Vector" stroke="var(--stroke-0, #EF4444)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d="M12 18H12.01" id="Vector_2" stroke="var(--stroke-0, #EF4444)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Container7() {
  return (
    <div className="bg-[rgba(239,68,68,0.2)] h-[48px] relative rounded-[14px] shrink-0 w-[34.344px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Icon />
      </div>
    </div>
  );
}

function Container5() {
  return (
    <div className="content-stretch flex gap-[12px] h-[66.797px] items-center relative shrink-0 w-full" data-name="Container">
      <Container6 />
      <Container7 />
    </div>
  );
}

function Container4() {
  return (
    <div className="bg-[rgba(255,255,255,0.05)] col-1 justify-self-stretch relative rounded-[16px] row-1 self-stretch shrink-0" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <div className="content-stretch flex flex-col items-start pb-px pt-[25px] px-[25px] relative size-full">
        <Container5 />
      </div>
    </div>
  );
}

function Paragraph3() {
  return (
    <div className="h-[20px] relative shrink-0 w-[135.375px]" data-name="Paragraph">
      <p className="absolute font-['IBM_Plex_Sans_Arabic:Regular',sans-serif] leading-[20px] left-[58.8px] not-italic text-[#94a3b8] text-[14px] top-[-0.5px]" dir="auto">
        إجمالي الميزانية
      </p>
    </div>
  );
}

function Paragraph4() {
  return (
    <div className="h-[64px] relative shrink-0 w-[135.375px]" data-name="Paragraph">
      <p className="-translate-x-full absolute font-['IBM_Plex_Sans_Arabic:SemiBold',sans-serif] leading-[32px] left-[136.27px] not-italic text-[24px] text-right text-white top-0 w-[116px] whitespace-pre-wrap" dir="auto">
        1,200,000 ريال
      </p>
    </div>
  );
}

function Container10() {
  return (
    <div className="h-[84px] relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col h-full items-start relative">
        <Paragraph3 />
        <Paragraph4 />
      </div>
    </div>
  );
}

function Icon1() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icon">
      <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon">
          <path d="M12 2V22" id="Vector" stroke="var(--stroke-0, #F59E0B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d={svgPaths.p2ba0dca0} id="Vector_2" stroke="var(--stroke-0, #F59E0B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Container11() {
  return (
    <div className="bg-[rgba(245,158,11,0.2)] h-[48px] relative rounded-[14px] shrink-0 w-[40.625px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Icon1 />
      </div>
    </div>
  );
}

function Container9() {
  return (
    <div className="content-stretch flex gap-[12px] h-[84px] items-center relative shrink-0" data-name="Container">
      <Container10 />
      <Container11 />
    </div>
  );
}

function Container8() {
  return (
    <div className="bg-[rgba(255,255,255,0.05)] col-2 justify-self-stretch relative rounded-[16px] row-1 self-stretch shrink-0" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <div className="content-stretch flex flex-col items-start pb-px pt-[25px] px-[25px] relative size-full">
        <Container9 />
      </div>
    </div>
  );
}

function Paragraph5() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['IBM_Plex_Sans_Arabic:Regular',sans-serif] leading-[20px] left-[46.44px] not-italic text-[#94a3b8] text-[14px] top-[-0.5px]" dir="auto">
        الميزانية الشهرية
      </p>
    </div>
  );
}

function Paragraph6() {
  return (
    <div className="h-[64px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="-translate-x-full absolute font-['IBM_Plex_Sans_Arabic:SemiBold',sans-serif] leading-[32px] left-[131.13px] not-italic text-[24px] text-right text-white top-0 w-[94px] whitespace-pre-wrap" dir="auto">
        100,000 ريال
      </p>
    </div>
  );
}

function Container14() {
  return (
    <div className="flex-[1_0_0] h-[84px] min-h-px min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Paragraph5 />
        <Paragraph6 />
      </div>
    </div>
  );
}

function Icon2() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icon">
      <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon">
          <path d={svgPaths.p13253c0} id="Vector" stroke="var(--stroke-0, #22C55E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d="M16 7H22V13" id="Vector_2" stroke="var(--stroke-0, #22C55E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Container15() {
  return (
    <div className="bg-[rgba(34,197,94,0.2)] h-[48px] relative rounded-[14px] shrink-0 w-[45.32px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center pl-[0.008px] relative size-full">
        <Icon2 />
      </div>
    </div>
  );
}

function Container13() {
  return (
    <div className="content-stretch flex gap-[12px] h-[84px] items-center relative shrink-0 w-full" data-name="Container">
      <Container14 />
      <Container15 />
    </div>
  );
}

function Container12() {
  return (
    <div className="bg-[rgba(255,255,255,0.05)] col-3 justify-self-stretch relative rounded-[16px] row-1 self-stretch shrink-0" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <div className="content-stretch flex flex-col items-start pb-px pt-[25px] px-[25px] relative size-full">
        <Container13 />
      </div>
    </div>
  );
}

function Paragraph7() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['IBM_Plex_Sans_Arabic:Regular',sans-serif] leading-[20px] left-[16.36px] not-italic text-[#94a3b8] text-[14px] top-[-0.5px]" dir="auto">
        مدة الخطة
      </p>
    </div>
  );
}

function Paragraph8() {
  return (
    <div className="h-[32px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="-translate-x-full absolute font-['IBM_Plex_Sans_Arabic:SemiBold',sans-serif] leading-[32px] left-[73px] not-italic text-[24px] text-right text-white top-0 w-[73px] whitespace-pre-wrap" dir="auto">
        12 شهر
      </p>
    </div>
  );
}

function Container18() {
  return (
    <div className="h-[52px] relative shrink-0 w-[72.633px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Paragraph7 />
        <Paragraph8 />
      </div>
    </div>
  );
}

function Icon3() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icon">
      <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon">
          <path d="M8 2V6" id="Vector" stroke="var(--stroke-0, #00C2FF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d="M16 2V6" id="Vector_2" stroke="var(--stroke-0, #00C2FF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d={svgPaths.p32f12c00} id="Vector_3" stroke="var(--stroke-0, #00C2FF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d="M3 10H21" id="Vector_4" stroke="var(--stroke-0, #00C2FF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Container19() {
  return (
    <div className="bg-[rgba(0,194,255,0.2)] relative rounded-[14px] shrink-0 size-[48px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Icon3 />
      </div>
    </div>
  );
}

function Container17() {
  return (
    <div className="h-[52px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[12px] items-center pl-[55.367px] relative size-full">
          <Container18 />
          <Container19 />
        </div>
      </div>
    </div>
  );
}

function Container16() {
  return (
    <div className="bg-[rgba(255,255,255,0.05)] col-4 justify-self-stretch relative rounded-[16px] row-1 self-stretch shrink-0" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <div className="content-stretch flex flex-col items-start pb-px pt-[25px] px-[25px] relative size-full">
        <Container17 />
      </div>
    </div>
  );
}

function Container3() {
  return (
    <div className="gap-x-[24px] gap-y-[24px] grid grid-cols-[repeat(4,minmax(0,1fr))] grid-rows-[repeat(1,minmax(0,1fr))] h-[146px] relative shrink-0 w-full" data-name="Container">
      <Container4 />
      <Container8 />
      <Container12 />
      <Container16 />
    </div>
  );
}

function Text() {
  return (
    <div className="bg-[rgba(255,255,255,0.05)] h-[38px] relative rounded-[10px] shrink-0 w-[87.836px]" data-name="Text">
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['IBM_Plex_Sans_Arabic:Regular','Noto_Sans:Regular',sans-serif] leading-[20px] left-[17px] text-[14px] text-white top-[8.5px]" style={{ fontVariationSettings: "\'CTGR\' 0, \'wdth\' 100, \'wght\' 400" }}>
          YouTube
        </p>
      </div>
    </div>
  );
}

function Text1() {
  return (
    <div className="bg-[rgba(255,255,255,0.05)] h-[38px] relative rounded-[10px] shrink-0 w-[94.57px]" data-name="Text">
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['IBM_Plex_Sans_Arabic:Regular','Noto_Sans:Regular',sans-serif] leading-[20px] left-[17px] text-[14px] text-white top-[8.5px]" style={{ fontVariationSettings: "\'CTGR\' 0, \'wdth\' 100, \'wght\' 400" }}>
          Facebook
        </p>
      </div>
    </div>
  );
}

function Text2() {
  return (
    <div className="bg-[rgba(255,255,255,0.05)] h-[38px] relative rounded-[10px] shrink-0 w-[98.836px]" data-name="Text">
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['IBM_Plex_Sans_Arabic:Regular','Noto_Sans:Regular',sans-serif] leading-[20px] left-[17px] text-[14px] text-white top-[8.5px]" style={{ fontVariationSettings: "\'CTGR\' 0, \'wdth\' 100, \'wght\' 400" }}>
          Instagram
        </p>
      </div>
    </div>
  );
}

function Text3() {
  return (
    <div className="bg-[rgba(255,255,255,0.05)] h-[38px] relative rounded-[10px] shrink-0 w-[42.586px]" data-name="Text">
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['IBM_Plex_Sans_Arabic:Regular','Noto_Sans:Regular',sans-serif] leading-[20px] left-[17px] text-[14px] text-white top-[8.5px]" style={{ fontVariationSettings: "\'CTGR\' 0, \'wdth\' 100, \'wght\' 400" }}>
          X
        </p>
      </div>
    </div>
  );
}

function Text4() {
  return (
    <div className="bg-[rgba(255,255,255,0.05)] h-[38px] relative rounded-[10px] shrink-0 w-[73.539px]" data-name="Text">
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['IBM_Plex_Sans_Arabic:Regular',sans-serif] leading-[20px] left-[17px] not-italic text-[14px] text-white top-[8.5px]" dir="auto">
          التطبيق
        </p>
      </div>
    </div>
  );
}

function Text5() {
  return (
    <div className="bg-[rgba(255,255,255,0.05)] flex-[1_0_0] h-[38px] min-h-px min-w-px relative rounded-[10px]" data-name="Text">
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['IBM_Plex_Sans_Arabic:Regular',sans-serif] leading-[20px] left-[17px] not-italic text-[14px] text-white top-[8.5px]" dir="auto">
          الموقع الإلكتروني
        </p>
      </div>
    </div>
  );
}

function Container21() {
  return (
    <div className="h-[38px] relative shrink-0 w-[574.602px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[12px] items-start relative size-full">
        <Text />
        <Text1 />
        <Text2 />
        <Text3 />
        <Text4 />
        <Text5 />
      </div>
    </div>
  );
}

function Paragraph9() {
  return (
    <div className="h-[20px] relative shrink-0 w-[50.266px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['IBM_Plex_Sans_Arabic:Regular','Noto_Sans:Regular',sans-serif] leading-[20px] left-0 text-[#94a3b8] text-[14px] top-[-0.5px]" dir="auto" style={{ fontVariationSettings: "\'CTGR\' 0, \'wdth\' 100, \'wght\' 400" }}>
          المنصات:
        </p>
      </div>
    </div>
  );
}

function Container20() {
  return (
    <div className="h-[38px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[16px] items-center pl-[383.133px] relative size-full">
          <Container21 />
          <Paragraph9 />
        </div>
      </div>
    </div>
  );
}

function Container1() {
  return (
    <div className="content-stretch flex flex-col gap-[48px] h-[413px] items-center relative shrink-0 w-full" data-name="Container">
      <Container2 />
      <Container3 />
      <Container20 />
    </div>
  );
}

function HeroSection1() {
  return (
    <div className="absolute bg-gradient-to-l content-stretch flex flex-col from-[#0e1320] h-[656px] items-start left-0 pl-[221px] pr-[80px] pt-[96px] to-black top-0 w-[1325px]" data-name="HeroSection">
      <Container1 />
    </div>
  );
}

function Frame1() {
  return (
    <div className="h-[656px] relative shrink-0 w-full">
      <HeroSection1 />
    </div>
  );
}

function Heading1() {
  return (
    <div className="h-[48px] relative shrink-0 w-[383.664px]" data-name="Heading 2">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-full absolute font-['IBM_Plex_Sans_Arabic:Bold',sans-serif] leading-[48px] left-[384px] not-italic text-[#0e1320] text-[48px] text-right top-0" dir="auto">
          الأهداف الاستراتيجية
        </p>
      </div>
    </div>
  );
}

function Icon4() {
  return (
    <div className="relative shrink-0 size-[32px]" data-name="Icon">
      <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="Icon">
          <path d={svgPaths.p1dee4500} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
          <path d={svgPaths.p1fa92f00} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
          <path d={svgPaths.p230c5e00} id="Vector_3" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
        </g>
      </svg>
    </div>
  );
}

function Container23() {
  return (
    <div className="bg-gradient-to-b from-[#00c2ff] relative rounded-[16px] shrink-0 size-[64px] to-[#09c]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Icon4 />
      </div>
    </div>
  );
}

function Container22() {
  return (
    <div className="h-[64px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[16px] items-center pl-[560.336px] relative size-full">
          <Heading1 />
          <Container23 />
        </div>
      </div>
    </div>
  );
}

function Paragraph10() {
  return (
    <div className="h-[96px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="-translate-x-full absolute font-['IBM_Plex_Sans_Arabic:Regular','Noto_Sans:Regular',sans-serif] leading-[48px] left-[924.46px] text-[#1e293b] text-[24px] text-right top-0 w-[887px] whitespace-pre-wrap" dir="auto" style={{ fontVariationSettings: "\'CTGR\' 0, \'wdth\' 100, \'wght\' 400" }}>
        تهدف هذه الخطة إلى زيادة عدد الحجوزات الرقمية، رفع متوسط قيمة العميل، تنويع مصادر الدخل، بناء قاعدة عملاء متكررين، وتحويل النمو من مجهودات تشغيلية إلى نظام رقمي قابل للقياس والتوسع.
      </p>
    </div>
  );
}

function Container24() {
  return (
    <div className="bg-gradient-to-b from-[#f8fafc] h-[196px] relative rounded-[24px] shrink-0 to-[#e2e8f0] w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-2 border-[rgba(0,194,255,0.2)] border-solid inset-0 pointer-events-none rounded-[24px]" />
      <div className="content-stretch flex flex-col items-start pb-[2px] pt-[50px] px-[50px] relative size-full">
        <Paragraph10 />
      </div>
    </div>
  );
}

function StrategicGoals() {
  return (
    <div className="absolute bg-white content-stretch cursor-pointer flex flex-col gap-[32px] h-[452px] items-start left-0 pl-[221px] pr-[80px] pt-[80px] top-0 w-[1325px]" data-name="StrategicGoals">
      <Container22 />
      <Container24 />
    </div>
  );
}

function Frame2() {
  return (
    <div className="h-[452px] relative shrink-0 w-full">
      <StrategicGoals />
    </div>
  );
}

function Heading2() {
  return (
    <div className="absolute h-[48px] left-0 top-0 w-[1152px]" data-name="Heading 2">
      <p className="-translate-x-1/2 absolute font-['IBM_Plex_Sans_Arabic:Bold',sans-serif] leading-[48px] left-[576.37px] not-italic text-[#0e1320] text-[48px] text-center top-0" dir="auto">
        دورة النمو المتكاملة
      </p>
    </div>
  );
}

function Paragraph11() {
  return (
    <div className="absolute h-[114px] left-[128px] top-[72px] w-[896px]" data-name="Paragraph">
      <p className="-translate-x-1/2 absolute font-['IBM_Plex_Sans_Arabic:Regular','Noto_Sans:Regular',sans-serif] leading-[38px] left-[448.48px] text-[#475569] text-[20px] text-center top-0 w-[884px] whitespace-pre-wrap" dir="auto" style={{ fontVariationSettings: "\'CTGR\' 0, \'wdth\' 100, \'wght\' 400" }}>
        تعتمد الخطة على دورة نمو مستمرة تبدأ من نشر الوعي بالعلامة التجارية، ثم جذب الزوار إلى المنصات الرقمية، وتحويلهم إلى حجوزات مدفوعة، ثم رفع الإيراد من كل عميل، ثم إعادة استهدافه ليصبح عميلًا متكررًا، ثم توسيع نطاق النمو والعودة مرة أخرى إلى مرحلة الوعي.
      </p>
    </div>
  );
}

function Container26() {
  return (
    <div className="absolute h-[186px] left-0 top-0 w-[1152px]" data-name="Container">
      <Heading2 />
      <Paragraph11 />
    </div>
  );
}

function Container28() {
  return <div className="absolute bg-[#00c2ff] left-[278.58px] opacity-96 rounded-[16777200px] size-[12px] top-[24px]" data-name="Container" />;
}

function Paragraph12() {
  return (
    <div className="absolute h-[28px] left-[32px] top-[16px] w-[234.578px]" data-name="Paragraph">
      <p className="-translate-x-1/2 absolute font-['IBM_Plex_Sans_Arabic:SemiBold',sans-serif] leading-[28px] left-[117.5px] not-italic text-[#0e1320] text-[18px] text-center top-[0.5px]" dir="auto">
        دورة مستمرة قابلة للتكرار والتوسع
      </p>
    </div>
  );
}

function Container27() {
  return (
    <div className="absolute bg-gradient-to-r border-2 border-[rgba(0,194,255,0.3)] border-solid from-[rgba(0,194,255,0.1)] h-[64px] left-[412.71px] rounded-[16777200px] to-[rgba(34,197,94,0.1)] top-[1198px] w-[326.578px]" data-name="Container">
      <Container28 />
      <Paragraph12 />
    </div>
  );
}

function Container29() {
  return <div className="absolute h-0 left-0 top-[250px] w-[1152px]" data-name="Container" />;
}

function Container33() {
  return (
    <div className="bg-[#22c55e] relative rounded-[16777200px] shrink-0 size-[48px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <p className="font-['IBM_Plex_Sans_Arabic:Bold','Noto_Sans:Bold',sans-serif] leading-[36px] relative shrink-0 text-[24px] text-white" style={{ fontVariationSettings: "\'CTGR\' 0, \'wdth\' 100, \'wght\' 700" }}>
          1
        </p>
      </div>
    </div>
  );
}

function Heading3() {
  return (
    <div className="h-[28px] relative shrink-0 w-[79.305px]" data-name="Heading 3">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 absolute font-['IBM_Plex_Sans_Arabic:Bold',sans-serif] leading-[28px] left-[40px] not-italic text-[#0e1320] text-[20px] text-center top-0" dir="auto">
          نشر الوعي
        </p>
      </div>
    </div>
  );
}

function Paragraph13() {
  return (
    <div className="h-[20px] relative shrink-0 w-[113.891px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 absolute font-['IBM_Plex_Sans_Arabic:Regular',sans-serif] leading-[20px] left-[57px] not-italic text-[#64748b] text-[14px] text-center top-[-0.5px]" dir="auto">
          بالعلامة التجارية
        </p>
      </div>
    </div>
  );
}

function Container32() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[12px] items-center justify-center left-0 p-[3px] rounded-[16777200px] size-[192px] top-0" data-name="Container" style={{ backgroundImage: "linear-gradient(135deg, rgba(34, 197, 94, 0.082) 0%, rgba(34, 197, 94, 0.19) 100%)" }}>
      <div aria-hidden="true" className="absolute border-3 border-[#22c55e] border-solid inset-0 pointer-events-none rounded-[16777200px] shadow-[0px_8px_32px_0px_rgba(34,197,94,0.25)]" />
      <Container33 />
      <Heading3 />
      <Paragraph13 />
    </div>
  );
}

function Container31() {
  return (
    <div className="absolute left-0 size-[192px] top-0" data-name="Container">
      <Container32 />
    </div>
  );
}

function Icon5() {
  return (
    <div className="h-[32px] opacity-50 overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute bottom-[20.83%] left-[20.83%] right-1/2 top-[20.83%]" data-name="Vector">
        <div className="absolute inset-[-7.14%_-14.29%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 21.3333">
            <path d={svgPaths.p2b972580} id="Vector" stroke="var(--stroke-0, #22C55E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
          </svg>
        </div>
      </div>
      <div className="absolute bottom-1/2 left-[20.83%] right-[20.83%] top-1/2" data-name="Vector">
        <div className="absolute inset-[-1.33px_-7.14%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 21.3333 2.66667">
            <path d="M20 1.33333H1.33333" id="Vector" stroke="var(--stroke-0, #22C55E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Container34() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[220px] size-[32px] top-[80px]" data-name="Container">
      <Icon5 />
    </div>
  );
}

function Container30() {
  return (
    <div className="absolute left-[772.5px] size-[192px] top-[391px]" data-name="Container">
      <Container31 />
      <Container34 />
    </div>
  );
}

function Container38() {
  return (
    <div className="bg-[#00c2ff] relative rounded-[16777200px] shrink-0 size-[48px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <p className="font-['IBM_Plex_Sans_Arabic:Bold','Noto_Sans:Bold',sans-serif] leading-[36px] relative shrink-0 text-[24px] text-white" style={{ fontVariationSettings: "\'CTGR\' 0, \'wdth\' 100, \'wght\' 700" }}>
          2
        </p>
      </div>
    </div>
  );
}

function Heading4() {
  return (
    <div className="h-[28px] relative shrink-0 w-[86.602px]" data-name="Heading 3">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 absolute font-['IBM_Plex_Sans_Arabic:Bold',sans-serif] leading-[28px] left-[43.5px] not-italic text-[#0e1320] text-[20px] text-center top-0" dir="auto">
          جذب الزوار
        </p>
      </div>
    </div>
  );
}

function Paragraph14() {
  return (
    <div className="h-[20px] relative shrink-0 w-[134.109px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 absolute font-['IBM_Plex_Sans_Arabic:Regular',sans-serif] leading-[20px] left-[67.5px] not-italic text-[#64748b] text-[14px] text-center top-[-0.5px]" dir="auto">
          إلى المنصات الرقمية
        </p>
      </div>
    </div>
  );
}

function Container37() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[12px] items-center justify-center left-0 p-[3px] rounded-[16777200px] size-[192px] top-0" data-name="Container" style={{ backgroundImage: "linear-gradient(135deg, rgba(0, 194, 255, 0.082) 0%, rgba(0, 194, 255, 0.19) 100%)" }}>
      <div aria-hidden="true" className="absolute border-3 border-[#00c2ff] border-solid inset-0 pointer-events-none rounded-[16777200px] shadow-[0px_8px_32px_0px_rgba(0,194,255,0.25)]" />
      <Container38 />
      <Heading4 />
      <Paragraph14 />
    </div>
  );
}

function Container36() {
  return (
    <div className="absolute left-0 size-[192px] top-0" data-name="Container">
      <Container37 />
    </div>
  );
}

function Icon6() {
  return (
    <div className="h-[32px] opacity-50 overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute bottom-[20.83%] left-[20.83%] right-1/2 top-[20.83%]" data-name="Vector">
        <div className="absolute inset-[-7.14%_-14.29%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 21.3333">
            <path d={svgPaths.p2b972580} id="Vector" stroke="var(--stroke-0, #00C2FF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
          </svg>
        </div>
      </div>
      <div className="absolute bottom-1/2 left-[20.83%] right-[20.83%] top-1/2" data-name="Vector">
        <div className="absolute inset-[-1.33px_-7.14%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 21.3333 2.66667">
            <path d="M20 1.33333H1.33333" id="Vector" stroke="var(--stroke-0, #00C2FF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Container39() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[220px] size-[32px] top-[80px]" data-name="Container">
      <Icon6 />
    </div>
  );
}

function Container35() {
  return (
    <div className="absolute left-[480.5px] size-[192px] top-[391px]" data-name="Container">
      <Container36 />
      <Container39 />
    </div>
  );
}

function Container43() {
  return (
    <div className="bg-[#f59e0b] relative rounded-[16777200px] shrink-0 size-[48px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <p className="font-['IBM_Plex_Sans_Arabic:Bold','Noto_Sans:Bold',sans-serif] leading-[36px] relative shrink-0 text-[24px] text-white" style={{ fontVariationSettings: "\'CTGR\' 0, \'wdth\' 100, \'wght\' 700" }}>
          3
        </p>
      </div>
    </div>
  );
}

function Heading5() {
  return (
    <div className="h-[28px] relative shrink-0 w-[50.281px]" data-name="Heading 3">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 absolute font-['IBM_Plex_Sans_Arabic:Bold',sans-serif] leading-[28px] left-[25.5px] not-italic text-[#0e1320] text-[20px] text-center top-0" dir="auto">
          تحويل
        </p>
      </div>
    </div>
  );
}

function Paragraph15() {
  return (
    <div className="h-[20px] relative shrink-0 w-[135.141px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 absolute font-['IBM_Plex_Sans_Arabic:Regular',sans-serif] leading-[20px] left-[68px] not-italic text-[#64748b] text-[14px] text-center top-[-0.5px]" dir="auto">
          إلى حجوزات مدفوعة
        </p>
      </div>
    </div>
  );
}

function Container42() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[12px] items-center justify-center left-0 p-[3px] rounded-[16777200px] size-[192px] top-0" data-name="Container" style={{ backgroundImage: "linear-gradient(135deg, rgba(245, 158, 11, 0.082) 0%, rgba(245, 158, 11, 0.19) 100%)" }}>
      <div aria-hidden="true" className="absolute border-3 border-[#f59e0b] border-solid inset-0 pointer-events-none rounded-[16777200px] shadow-[0px_8px_32px_0px_rgba(245,158,11,0.25)]" />
      <Container43 />
      <Heading5 />
      <Paragraph15 />
    </div>
  );
}

function Container41() {
  return (
    <div className="absolute left-0 size-[192px] top-0" data-name="Container">
      <Container42 />
    </div>
  );
}

function Icon7() {
  return (
    <div className="h-[32px] opacity-50 overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute bottom-[20.83%] left-[20.83%] right-1/2 top-[20.83%]" data-name="Vector">
        <div className="absolute inset-[-7.14%_-14.29%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 21.3333">
            <path d={svgPaths.p2b972580} id="Vector" stroke="var(--stroke-0, #F59E0B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
          </svg>
        </div>
      </div>
      <div className="absolute bottom-1/2 left-[20.83%] right-[20.83%] top-1/2" data-name="Vector">
        <div className="absolute inset-[-1.33px_-7.14%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 21.3333 2.66667">
            <path d="M20 1.33333H1.33333" id="Vector" stroke="var(--stroke-0, #F59E0B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Container44() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[220px] size-[32px] top-[80px]" data-name="Container">
      <Icon7 />
    </div>
  );
}

function Container40() {
  return (
    <div className="absolute left-[188.5px] size-[192px] top-[391px]" data-name="Container">
      <Container41 />
      <Container44 />
    </div>
  );
}

function Container47() {
  return (
    <div className="bg-[#ec4899] relative rounded-[16777200px] shrink-0 size-[48px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <p className="font-['IBM_Plex_Sans_Arabic:Bold','Noto_Sans:Bold',sans-serif] leading-[36px] relative shrink-0 text-[24px] text-white" style={{ fontVariationSettings: "\'CTGR\' 0, \'wdth\' 100, \'wght\' 700" }}>
          6
        </p>
      </div>
    </div>
  );
}

function Heading6() {
  return (
    <div className="h-[28px] relative shrink-0 w-[54.641px]" data-name="Heading 3">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 absolute font-['IBM_Plex_Sans_Arabic:Bold',sans-serif] leading-[28px] left-[27.5px] not-italic text-[#0e1320] text-[20px] text-center top-0" dir="auto">
          التوسع
        </p>
      </div>
    </div>
  );
}

function Paragraph16() {
  return (
    <div className="h-[20px] relative shrink-0 w-[115.055px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 absolute font-['IBM_Plex_Sans_Arabic:Regular',sans-serif] leading-[20px] left-[58px] not-italic text-[#64748b] text-[14px] text-center top-[-0.5px]" dir="auto">
          والنمو المستدام
        </p>
      </div>
    </div>
  );
}

function Container46() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[12px] items-center justify-center left-0 p-[3px] rounded-[16777200px] size-[192px] top-0" data-name="Container" style={{ backgroundImage: "linear-gradient(135deg, rgba(236, 72, 153, 0.082) 0%, rgba(236, 72, 153, 0.19) 100%)" }}>
      <div aria-hidden="true" className="absolute border-3 border-[#ec4899] border-solid inset-0 pointer-events-none rounded-[16777200px] shadow-[0px_8px_32px_0px_rgba(236,72,153,0.25)]" />
      <Container47 />
      <Heading6 />
      <Paragraph16 />
    </div>
  );
}

function Container45() {
  return (
    <div className="absolute left-[188.5px] size-[192px] top-[679px]" data-name="Container">
      <Container46 />
    </div>
  );
}

function Container51() {
  return (
    <div className="bg-[#ef4444] relative rounded-[16777200px] shrink-0 size-[48px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <p className="font-['IBM_Plex_Sans_Arabic:Bold','Noto_Sans:Bold',sans-serif] leading-[36px] relative shrink-0 text-[24px] text-white" style={{ fontVariationSettings: "\'CTGR\' 0, \'wdth\' 100, \'wght\' 700" }}>
          4
        </p>
      </div>
    </div>
  );
}

function Heading7() {
  return (
    <div className="h-[28px] relative shrink-0 w-[75.906px]" data-name="Heading 3">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 absolute font-['IBM_Plex_Sans_Arabic:Bold',sans-serif] leading-[28px] left-[38px] not-italic text-[#0e1320] text-[20px] text-center top-0" dir="auto">
          رفع الإيراد
        </p>
      </div>
    </div>
  );
}

function Paragraph17() {
  return (
    <div className="h-[20px] relative shrink-0 w-[98.055px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 absolute font-['IBM_Plex_Sans_Arabic:Regular',sans-serif] leading-[20px] left-[49.5px] not-italic text-[#64748b] text-[14px] text-center top-[-0.5px]" dir="auto">
          من كل عميل
        </p>
      </div>
    </div>
  );
}

function Container50() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[12px] items-center justify-center left-0 p-[3px] rounded-[16777200px] size-[192px] top-0" data-name="Container" style={{ backgroundImage: "linear-gradient(135deg, rgba(239, 68, 68, 0.082) 0%, rgba(239, 68, 68, 0.19) 100%)" }}>
      <div aria-hidden="true" className="absolute border-3 border-[#ef4444] border-solid inset-0 pointer-events-none rounded-[16777200px] shadow-[0px_8px_32px_0px_rgba(239,68,68,0.25)]" />
      <Container51 />
      <Heading7 />
      <Paragraph17 />
    </div>
  );
}

function Container49() {
  return (
    <div className="absolute left-0 size-[192px] top-0" data-name="Container">
      <Container50 />
    </div>
  );
}

function Icon8() {
  return (
    <div className="h-[32px] opacity-50 overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute bottom-[20.83%] left-[20.83%] right-1/2 top-[20.83%]" data-name="Vector">
        <div className="absolute inset-[-7.14%_-14.29%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 21.3333">
            <path d={svgPaths.p2b972580} id="Vector" stroke="var(--stroke-0, #EF4444)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
          </svg>
        </div>
      </div>
      <div className="absolute bottom-1/2 left-[20.83%] right-[20.83%] top-1/2" data-name="Vector">
        <div className="absolute inset-[-1.33px_-7.14%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 21.3333 2.66667">
            <path d="M20 1.33333H1.33333" id="Vector" stroke="var(--stroke-0, #EF4444)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Container52() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[220px] size-[32px] top-[80px]" data-name="Container">
      <Icon8 />
    </div>
  );
}

function Container48() {
  return (
    <div className="absolute left-[772.5px] size-[192px] top-[679px]" data-name="Container">
      <Container49 />
      <Container52 />
    </div>
  );
}

function Container56() {
  return (
    <div className="bg-[#8b5cf6] relative rounded-[16777200px] shrink-0 size-[48px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <p className="font-['IBM_Plex_Sans_Arabic:Bold','Noto_Sans:Bold',sans-serif] leading-[36px] relative shrink-0 text-[24px] text-white" style={{ fontVariationSettings: "\'CTGR\' 0, \'wdth\' 100, \'wght\' 700" }}>
          5
        </p>
      </div>
    </div>
  );
}

function Heading8() {
  return (
    <div className="h-[28px] relative shrink-0 w-[90.102px]" data-name="Heading 3">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 absolute font-['IBM_Plex_Sans_Arabic:Bold',sans-serif] leading-[28px] left-[45.5px] not-italic text-[#0e1320] text-[20px] text-center top-0" dir="auto">
          عميل متكرر
        </p>
      </div>
    </div>
  );
}

function Paragraph18() {
  return (
    <div className="h-[20px] relative shrink-0 w-[115.148px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 absolute font-['IBM_Plex_Sans_Arabic:Regular',sans-serif] leading-[20px] left-[58px] not-italic text-[#64748b] text-[14px] text-center top-[-0.5px]" dir="auto">
          ولاء وتكرار الزيارة
        </p>
      </div>
    </div>
  );
}

function Container55() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[12px] items-center justify-center left-0 p-[3px] rounded-[16777200px] size-[192px] top-0" data-name="Container" style={{ backgroundImage: "linear-gradient(135deg, rgba(139, 92, 246, 0.082) 0%, rgba(139, 92, 246, 0.19) 100%)" }}>
      <div aria-hidden="true" className="absolute border-3 border-[#8b5cf6] border-solid inset-0 pointer-events-none rounded-[16777200px] shadow-[0px_8px_32px_0px_rgba(139,92,246,0.25)]" />
      <Container56 />
      <Heading8 />
      <Paragraph18 />
    </div>
  );
}

function Container54() {
  return (
    <div className="absolute left-0 size-[192px] top-0" data-name="Container">
      <Container55 />
    </div>
  );
}

function Icon9() {
  return (
    <div className="h-[32px] opacity-50 overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute bottom-[20.83%] left-[20.83%] right-1/2 top-[20.83%]" data-name="Vector">
        <div className="absolute inset-[-7.14%_-14.29%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 21.3333">
            <path d={svgPaths.p2b972580} id="Vector" stroke="var(--stroke-0, #8B5CF6)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
          </svg>
        </div>
      </div>
      <div className="absolute bottom-1/2 left-[20.83%] right-[20.83%] top-1/2" data-name="Vector">
        <div className="absolute inset-[-1.33px_-7.14%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 21.3333 2.66667">
            <path d="M20 1.33333H1.33333" id="Vector" stroke="var(--stroke-0, #8B5CF6)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Container57() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[220px] size-[32px] top-[80px]" data-name="Container">
      <Icon9 />
    </div>
  );
}

function Container53() {
  return (
    <div className="absolute left-[480.5px] size-[192px] top-[679px]" data-name="Container">
      <Container54 />
      <Container57 />
    </div>
  );
}

function Icon10() {
  return (
    <div className="h-[32px] opacity-50 overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute bottom-[20.83%] left-[20.83%] right-1/2 top-[20.83%]" data-name="Vector">
        <div className="absolute inset-[-7.14%_-14.29%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 21.3333">
            <path d={svgPaths.p2b972580} id="Vector" stroke="var(--stroke-0, #EC4899)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
          </svg>
        </div>
      </div>
      <div className="absolute bottom-1/2 left-[20.83%] right-[20.83%] top-1/2" data-name="Vector">
        <div className="absolute inset-[-1.33px_-7.14%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 21.3333 2.66667">
            <path d="M20 1.33333H1.33333" id="Vector" stroke="var(--stroke-0, #EC4899)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Container58() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[409.5px] size-[32px] top-[759px]" data-name="Container">
      <Icon10 />
    </div>
  );
}

function Container25() {
  return (
    <div className="h-[1262px] relative shrink-0 w-full" data-name="Container">
      <Container26 />
      <Container27 />
      <Container29 />
      <Container30 />
      <Container35 />
      <Container40 />
      <Container45 />
      <Container48 />
      <Container53 />
      <Container58 />
    </div>
  );
}

function GrowthEcosystem() {
  return (
    <div className="absolute bg-gradient-to-b content-stretch flex flex-col from-white h-[1454px] items-start left-0 pt-[96px] px-[86.5px] to-[#f8fafc] top-0 w-[1325px]" data-name="GrowthEcosystem">
      <Container25 />
    </div>
  );
}

function Frame3() {
  return (
    <div className="h-[1454px] relative shrink-0 w-full">
      <GrowthEcosystem />
    </div>
  );
}

function Heading9() {
  return (
    <div className="h-[48px] relative shrink-0 w-full" data-name="Heading 2">
      <p className="absolute font-['IBM_Plex_Sans_Arabic:Bold',sans-serif] leading-[48px] left-0 not-italic text-[#0e1320] text-[48px] top-0" dir="auto">
        الإطلاق وبناء الوعي
      </p>
    </div>
  );
}

function Paragraph19() {
  return (
    <div className="h-[28px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['IBM_Plex_Sans_Arabic:Regular','Noto_Sans:Regular',sans-serif] leading-[28px] left-[226.77px] text-[#64748b] text-[20px] top-0 w-[134px] whitespace-pre-wrap" dir="auto" style={{ fontVariationSettings: "\'CTGR\' 0, \'wdth\' 100, \'wght\' 400" }}>
        الشهور 1 – 2 – 3
      </p>
    </div>
  );
}

function Container61() {
  return (
    <div className="h-[84px] relative shrink-0 w-[359.953px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[8px] items-start relative size-full">
        <Heading9 />
        <Paragraph19 />
      </div>
    </div>
  );
}

function Container62() {
  return (
    <div className="relative rounded-[16px] shadow-[0px_8px_32px_0px_rgba(34,197,94,0.25)] shrink-0 size-[80px]" data-name="Container" style={{ backgroundImage: "linear-gradient(135deg, rgb(34, 197, 94) 0%, rgba(34, 197, 94, 0.8) 100%)" }}>
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <p className="font-['IBM_Plex_Sans_Arabic:Bold','Noto_Sans:Bold',sans-serif] leading-[36px] relative shrink-0 text-[30px] text-white" style={{ fontVariationSettings: "\'CTGR\' 0, \'wdth\' 100, \'wght\' 700" }}>
          Q1
        </p>
      </div>
    </div>
  );
}

function Container60() {
  return (
    <div className="h-[84px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[16px] items-center pl-[709.047px] relative size-full">
          <Container61 />
          <Container62 />
        </div>
      </div>
    </div>
  );
}

function Icon11() {
  return (
    <div className="absolute left-[1073px] size-[24px] top-[4px]" data-name="Icon">
      <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon">
          <path d={svgPaths.p13253c0} id="Vector" stroke="var(--stroke-0, #22C55E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d="M16 7H22V13" id="Vector_2" stroke="var(--stroke-0, #22C55E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Paragraph20() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['IBM_Plex_Sans_Arabic:SemiBold',sans-serif] leading-[20px] left-[485.41px] not-italic text-[#64748b] text-[14px] top-[-0.5px]" dir="auto">
        الهدف
      </p>
    </div>
  );
}

function Paragraph21() {
  return (
    <div className="h-[36px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['IBM_Plex_Sans_Arabic:Regular','Noto_Sans:Regular',sans-serif] leading-[36px] left-0 text-[#0e1320] text-[20px] top-0" dir="auto" style={{ fontVariationSettings: "\'CTGR\' 0, \'wdth\' 100, \'wght\' 400" }}>
        إطلاق قوي للمنصات الرقمية وزيادة الوعي بالعلامة وتحفيز الطلب الأولي.
      </p>
    </div>
  );
}

function Container65() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[8px] h-[64px] items-start left-[540.12px] top-0 w-[520.883px]" data-name="Container">
      <Paragraph20 />
      <Paragraph21 />
    </div>
  );
}

function Container64() {
  return (
    <div className="h-[64px] relative shrink-0 w-full" data-name="Container">
      <Icon11 />
      <Container65 />
    </div>
  );
}

function Container63() {
  return (
    <div className="bg-gradient-to-r from-white h-[132px] relative rounded-[16px] shrink-0 to-[#f9fafb] w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-2 border-[rgba(34,197,94,0.25)] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <div className="content-stretch flex flex-col items-start pb-[2px] pt-[34px] px-[34px] relative size-full">
        <Container64 />
      </div>
    </div>
  );
}

function Container59() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] h-[232px] items-start relative shrink-0 w-full" data-name="Container">
      <Container60 />
      <Container63 />
    </div>
  );
}

function Heading10() {
  return (
    <div className="h-[32px] relative shrink-0 w-full" data-name="Heading 3">
      <p className="absolute font-['IBM_Plex_Sans_Arabic:Bold',sans-serif] leading-[32px] left-[435.88px] not-italic text-[#0e1320] text-[24px] top-0" dir="auto">
        التنفيذ
      </p>
    </div>
  );
}

function Icon12() {
  return (
    <div className="absolute left-[478.5px] size-[20px] top-[2px]" data-name="Icon">
      <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g clipPath="url(#clip0_2_3914)" id="Icon">
          <path d={svgPaths.p14d24500} id="Vector" stroke="var(--stroke-0, #22C55E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p3e012060} id="Vector_2" stroke="var(--stroke-0, #22C55E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
        <defs>
          <clipPath id="clip0_2_3914">
            <rect fill="white" height="20" width="20" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Paragraph22() {
  return (
    <div className="absolute h-[25.594px] left-[220.64px] top-0 w-[245.859px]" data-name="Paragraph">
      <p className="absolute font-['IBM_Plex_Sans_Arabic:Regular',sans-serif] leading-[25.6px] not-italic right-[228.5px] text-[#475569] text-[16px] top-[-0.5px] translate-x-full" dir="auto">
        إطلاق حملات تعريفية بالملاهي والمنتجات
      </p>
    </div>
  );
}

function Container69() {
  return (
    <div className="h-[25.594px] relative shrink-0 w-full" data-name="Container">
      <Icon12 />
      <Paragraph22 />
    </div>
  );
}

function Icon13() {
  return (
    <div className="absolute left-[478.5px] size-[20px] top-[2px]" data-name="Icon">
      <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g clipPath="url(#clip0_2_3914)" id="Icon">
          <path d={svgPaths.p14d24500} id="Vector" stroke="var(--stroke-0, #22C55E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p3e012060} id="Vector_2" stroke="var(--stroke-0, #22C55E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
        <defs>
          <clipPath id="clip0_2_3914">
            <rect fill="white" height="20" width="20" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Paragraph23() {
  return (
    <div className="absolute h-[25.594px] left-[260.81px] top-0 w-[205.688px]" data-name="Paragraph">
      <p className="absolute font-['IBM_Plex_Sans_Arabic:Regular',sans-serif] leading-[25.6px] not-italic right-[196.5px] text-[#475569] text-[16px] top-[-0.5px] translate-x-full" dir="auto">
        حملات موسمية مرتبطة بالمناسبات
      </p>
    </div>
  );
}

function Container70() {
  return (
    <div className="h-[25.594px] relative shrink-0 w-full" data-name="Container">
      <Icon13 />
      <Paragraph23 />
    </div>
  );
}

function Icon14() {
  return (
    <div className="absolute left-[478.5px] size-[20px] top-[2px]" data-name="Icon">
      <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g clipPath="url(#clip0_2_3914)" id="Icon">
          <path d={svgPaths.p14d24500} id="Vector" stroke="var(--stroke-0, #22C55E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p3e012060} id="Vector_2" stroke="var(--stroke-0, #22C55E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
        <defs>
          <clipPath id="clip0_2_3914">
            <rect fill="white" height="20" width="20" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Paragraph24() {
  return (
    <div className="absolute h-[25.594px] left-[291.52px] top-0 w-[174.977px]" data-name="Paragraph">
      <p className="absolute font-['IBM_Plex_Sans_Arabic:Regular',sans-serif] leading-[25.6px] not-italic right-[174.5px] text-[#475569] text-[16px] top-[-0.5px] translate-x-full" dir="auto">
        التعاون مع مؤثرين لنشر الوعي
      </p>
    </div>
  );
}

function Container71() {
  return (
    <div className="h-[25.594px] relative shrink-0 w-full" data-name="Container">
      <Icon14 />
      <Paragraph24 />
    </div>
  );
}

function Icon15() {
  return (
    <div className="absolute left-[478.5px] size-[20px] top-[2px]" data-name="Icon">
      <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g clipPath="url(#clip0_2_3914)" id="Icon">
          <path d={svgPaths.p14d24500} id="Vector" stroke="var(--stroke-0, #22C55E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p3e012060} id="Vector_2" stroke="var(--stroke-0, #22C55E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
        <defs>
          <clipPath id="clip0_2_3914">
            <rect fill="white" height="20" width="20" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Paragraph25() {
  return (
    <div className="absolute h-[25.594px] left-[226.55px] top-0 w-[239.953px]" data-name="Paragraph">
      <p className="absolute font-['IBM_Plex_Sans_Arabic:Regular',sans-serif] leading-[25.6px] not-italic right-[231.5px] text-[#475569] text-[16px] top-[-0.5px] translate-x-full" dir="auto">
        تجهيز المحتوى التعريفي للموقع والتطبيق
      </p>
    </div>
  );
}

function Container72() {
  return (
    <div className="h-[25.594px] relative shrink-0 w-full" data-name="Container">
      <Icon15 />
      <Paragraph25 />
    </div>
  );
}

function Container68() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] h-[138.375px] items-start relative shrink-0 w-full" data-name="Container">
      <Container69 />
      <Container70 />
      <Container71 />
      <Container72 />
    </div>
  );
}

function Container67() {
  return (
    <div className="bg-white col-1 justify-self-stretch relative rounded-[16px] row-1 self-stretch shrink-0" data-name="Container">
      <div aria-hidden="true" className="absolute border-2 border-[rgba(34,197,94,0.19)] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <div className="content-stretch flex flex-col gap-[24px] items-start pb-[2px] pt-[34px] px-[34px] relative size-full">
        <Heading10 />
        <Container68 />
      </div>
    </div>
  );
}

function Heading11() {
  return (
    <div className="h-[32px] relative shrink-0 w-[75.625px]" data-name="Heading 3">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['IBM_Plex_Sans_Arabic:Bold',sans-serif] leading-[32px] left-0 not-italic text-[#0e1320] text-[24px] top-0" dir="auto">
          الميزانية
        </p>
      </div>
    </div>
  );
}

function Icon16() {
  return (
    <div className="relative shrink-0 size-[32px]" data-name="Icon">
      <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="Icon">
          <path d="M16 2.66667V29.3333" id="Vector" stroke="var(--stroke-0, #22C55E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
          <path d={svgPaths.p30e9cc00} id="Vector_2" stroke="var(--stroke-0, #22C55E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
        </g>
      </svg>
    </div>
  );
}

function Container74() {
  return (
    <div className="h-[32px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[12px] items-center pl-[378.875px] relative size-full">
          <Heading11 />
          <Icon16 />
        </div>
      </div>
    </div>
  );
}

function Text6() {
  return (
    <div className="h-[28px] relative shrink-0 w-[115.344px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['IBM_Plex_Sans_Arabic:SemiBold',sans-serif] leading-[28px] left-0 not-italic text-[#0e1320] text-[20px] top-0 w-[116px] whitespace-pre-wrap" dir="auto">
          100,000 ريال
        </p>
      </div>
    </div>
  );
}

function Text7() {
  return (
    <div className="h-[24px] relative shrink-0 w-[47.094px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['IBM_Plex_Sans_Arabic:Regular','Noto_Sans:Regular',sans-serif] leading-[24px] left-0 text-[#64748b] text-[16px] top-0 w-[48px] whitespace-pre-wrap" dir="auto" style={{ fontVariationSettings: "\'CTGR\' 0, \'wdth\' 100, \'wght\' 400" }}>
          الشهر 1
        </p>
      </div>
    </div>
  );
}

function Container76() {
  return (
    <div className="content-stretch flex h-[28px] items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Text6 />
      <Text7 />
    </div>
  );
}

function Text8() {
  return (
    <div className="h-[28px] relative shrink-0 w-[115.344px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['IBM_Plex_Sans_Arabic:SemiBold',sans-serif] leading-[28px] left-0 not-italic text-[#0e1320] text-[20px] top-0 w-[116px] whitespace-pre-wrap" dir="auto">
          100,000 ريال
        </p>
      </div>
    </div>
  );
}

function Text9() {
  return (
    <div className="h-[24px] relative shrink-0 w-[47.094px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['IBM_Plex_Sans_Arabic:Regular','Noto_Sans:Regular',sans-serif] leading-[24px] left-0 text-[#64748b] text-[16px] top-0 w-[48px] whitespace-pre-wrap" dir="auto" style={{ fontVariationSettings: "\'CTGR\' 0, \'wdth\' 100, \'wght\' 400" }}>
          الشهر 2
        </p>
      </div>
    </div>
  );
}

function Container77() {
  return (
    <div className="content-stretch flex h-[28px] items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Text8 />
      <Text9 />
    </div>
  );
}

function Text10() {
  return (
    <div className="h-[28px] relative shrink-0 w-[115.344px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['IBM_Plex_Sans_Arabic:SemiBold',sans-serif] leading-[28px] left-0 not-italic text-[#0e1320] text-[20px] top-0 w-[116px] whitespace-pre-wrap" dir="auto">
          100,000 ريال
        </p>
      </div>
    </div>
  );
}

function Text11() {
  return (
    <div className="h-[24px] relative shrink-0 w-[47.094px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['IBM_Plex_Sans_Arabic:Regular','Noto_Sans:Regular',sans-serif] leading-[24px] left-0 text-[#64748b] text-[16px] top-0 w-[48px] whitespace-pre-wrap" dir="auto" style={{ fontVariationSettings: "\'CTGR\' 0, \'wdth\' 100, \'wght\' 400" }}>
          الشهر 3
        </p>
      </div>
    </div>
  );
}

function Container78() {
  return (
    <div className="content-stretch flex h-[28px] items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Text10 />
      <Text11 />
    </div>
  );
}

function Text12() {
  return (
    <div className="h-[36px] relative shrink-0 w-[174.609px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['IBM_Plex_Sans_Arabic:Bold','Noto_Sans:Bold',sans-serif] leading-[36px] left-0 text-[#22c55e] text-[30px] top-[0.5px] w-[175px] whitespace-pre-wrap" dir="auto" style={{ fontVariationSettings: "\'CTGR\' 0, \'wdth\' 100, \'wght\' 700" }}>
          300,000 ريال
        </p>
      </div>
    </div>
  );
}

function Text13() {
  return (
    <div className="h-[28px] relative shrink-0 w-[81.742px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['IBM_Plex_Sans_Arabic:SemiBold',sans-serif] leading-[28px] left-0 not-italic text-[#0e1320] text-[18px] top-[0.5px]" dir="auto">
          إجمالي الربع
        </p>
      </div>
    </div>
  );
}

function Container80() {
  return (
    <div className="content-stretch flex h-[36px] items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Text12 />
      <Text13 />
    </div>
  );
}

function Container79() {
  return (
    <div className="content-stretch flex flex-col h-[54px] items-start pt-[18px] relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[rgba(34,197,94,0.13)] border-solid border-t-2 inset-0 pointer-events-none" />
      <Container80 />
    </div>
  );
}

function Container75() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] h-[186px] items-start relative shrink-0 w-full" data-name="Container">
      <Container76 />
      <Container77 />
      <Container78 />
      <Container79 />
    </div>
  );
}

function Container73() {
  return (
    <div className="bg-white col-2 justify-self-stretch relative rounded-[16px] row-1 self-stretch shrink-0" data-name="Container">
      <div aria-hidden="true" className="absolute border-2 border-[rgba(34,197,94,0.19)] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <div className="content-stretch flex flex-col gap-[24px] items-start pb-[2px] pt-[34px] px-[34px] relative size-full">
        <Container74 />
        <Container75 />
      </div>
    </div>
  );
}

function Container66() {
  return (
    <div className="gap-x-[32px] gap-y-[32px] grid grid-cols-[repeat(2,minmax(0,1fr))] grid-rows-[repeat(1,minmax(0,1fr))] h-[310px] relative shrink-0 w-full" data-name="Container">
      <Container67 />
      <Container73 />
    </div>
  );
}

function Heading12() {
  return (
    <div className="h-[32px] relative shrink-0 w-[94.539px]" data-name="Heading 3">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['IBM_Plex_Sans_Arabic:Bold',sans-serif] leading-[32px] left-[-38.96px] not-italic text-[#0e1320] text-[24px] top-0" dir="auto">
          الجدول الزمني
        </p>
      </div>
    </div>
  );
}

function Icon17() {
  return (
    <div className="relative shrink-0 size-[32px]" data-name="Icon">
      <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="Icon">
          <path d="M10.6667 2.66667V8" id="Vector" stroke="var(--stroke-0, #22C55E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
          <path d="M21.3333 2.66667V8" id="Vector_2" stroke="var(--stroke-0, #22C55E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
          <path d={svgPaths.p8d31b00} id="Vector_3" stroke="var(--stroke-0, #22C55E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
          <path d="M4 13.3333H28" id="Vector_4" stroke="var(--stroke-0, #22C55E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
        </g>
      </svg>
    </div>
  );
}

function Container83() {
  return (
    <div className="h-[32px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[12px] items-center pl-[359.961px] relative size-full">
          <Heading12 />
          <Icon17 />
        </div>
      </div>
    </div>
  );
}

function Paragraph26() {
  return (
    <div className="h-[28px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['IBM_Plex_Sans_Arabic:SemiBold',sans-serif] leading-[28px] left-[396.43px] not-italic text-[#0e1320] text-[18px] top-[0.5px]" dir="auto">
        الشهر الأول
      </p>
    </div>
  );
}

function Paragraph27() {
  return (
    <div className="content-stretch flex h-[24px] items-start relative shrink-0 w-full" data-name="Paragraph">
      <p className="flex-[1_0_0] font-['IBM_Plex_Sans_Arabic:Regular',sans-serif] leading-[24px] min-h-px min-w-px not-italic relative text-[#64748b] text-[16px] text-right whitespace-pre-wrap" dir="auto">
        نشر الوعي بالعلامة وجذب الانتباه
      </p>
    </div>
  );
}

function Container86() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[4px] h-[56px] items-start left-0 top-[-6px] w-[474.5px]" data-name="Container">
      <Paragraph26 />
      <Paragraph27 />
    </div>
  );
}

function Container87() {
  return <div className="absolute bg-[#22c55e] left-[483.5px] rounded-[16777200px] size-[16px] top-0" data-name="Container" />;
}

function Container88() {
  return <div className="absolute bg-[rgba(34,197,94,0.19)] h-[56px] left-[490.5px] top-[16px] w-[2px]" data-name="Container" />;
}

function Container85() {
  return (
    <div className="h-[56px] relative shrink-0 w-full" data-name="Container">
      <Container86 />
      <Container87 />
      <Container88 />
    </div>
  );
}

function Paragraph28() {
  return (
    <div className="h-[28px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['IBM_Plex_Sans_Arabic:SemiBold',sans-serif] leading-[28px] left-[396.7px] not-italic text-[#0e1320] text-[18px] top-[0.5px]" dir="auto">
        الشهر الثاني
      </p>
    </div>
  );
}

function Paragraph29() {
  return (
    <div className="content-stretch flex h-[24px] items-start relative shrink-0 w-full" data-name="Paragraph">
      <p className="flex-[1_0_0] font-['IBM_Plex_Sans_Arabic:Regular',sans-serif] leading-[24px] min-h-px min-w-px not-italic relative text-[#64748b] text-[16px] text-right whitespace-pre-wrap" dir="auto">
        زيادة الزيارات والتفاعل
      </p>
    </div>
  );
}

function Container90() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[4px] h-[56px] items-start left-0 top-[-6px] w-[474.5px]" data-name="Container">
      <Paragraph28 />
      <Paragraph29 />
    </div>
  );
}

function Container91() {
  return <div className="absolute bg-[#22c55e] left-[483.5px] rounded-[16777200px] size-[16px] top-0" data-name="Container" />;
}

function Container92() {
  return <div className="absolute bg-[rgba(34,197,94,0.19)] h-[56px] left-[490.5px] top-[16px] w-[2px]" data-name="Container" />;
}

function Container89() {
  return (
    <div className="h-[56px] relative shrink-0 w-full" data-name="Container">
      <Container90 />
      <Container91 />
      <Container92 />
    </div>
  );
}

function Paragraph30() {
  return (
    <div className="h-[28px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['IBM_Plex_Sans_Arabic:SemiBold',sans-serif] leading-[28px] left-[388.22px] not-italic text-[#0e1320] text-[18px] top-[0.5px]" dir="auto">
        الشهر الثالث
      </p>
    </div>
  );
}

function Paragraph31() {
  return (
    <div className="content-stretch flex h-[24px] items-start relative shrink-0 w-full" data-name="Paragraph">
      <p className="flex-[1_0_0] font-['IBM_Plex_Sans_Arabic:Regular',sans-serif] leading-[24px] min-h-px min-w-px not-italic relative text-[#64748b] text-[16px] text-right whitespace-pre-wrap" dir="auto">
        تحويل الزيارات إلى حجوزات
      </p>
    </div>
  );
}

function Container94() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[4px] h-[56px] items-start left-0 top-[-6px] w-[474.5px]" data-name="Container">
      <Paragraph30 />
      <Paragraph31 />
    </div>
  );
}

function Container95() {
  return <div className="absolute bg-[#22c55e] left-[483.5px] rounded-[16777200px] size-[16px] top-0" data-name="Container" />;
}

function Container93() {
  return (
    <div className="h-[56px] relative shrink-0 w-full" data-name="Container">
      <Container94 />
      <Container95 />
    </div>
  );
}

function Container84() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] h-[200px] items-start relative shrink-0 w-full" data-name="Container">
      <Container85 />
      <Container89 />
      <Container93 />
    </div>
  );
}

function Container82() {
  return (
    <div className="bg-white col-1 justify-self-stretch relative rounded-[16px] row-1 self-stretch shrink-0" data-name="Container">
      <div aria-hidden="true" className="absolute border-2 border-[rgba(34,197,94,0.19)] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <div className="content-stretch flex flex-col gap-[24px] items-start pb-[2px] pt-[34px] px-[34px] relative size-full">
        <Container83 />
        <Container84 />
      </div>
    </div>
  );
}

function Heading13() {
  return (
    <div className="h-[32px] relative shrink-0 w-full" data-name="Heading 3">
      <p className="absolute font-['IBM_Plex_Sans_Arabic:Bold',sans-serif] leading-[32px] left-[369.84px] not-italic text-[#0e1320] text-[24px] top-0" dir="auto">
        مؤشرات الأداء
      </p>
    </div>
  );
}

function Paragraph32() {
  return (
    <div className="h-[24px] relative shrink-0 w-[225.305px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['IBM_Plex_Sans_Arabic:Medium',sans-serif] leading-[24px] not-italic right-0 text-[#0e1320] text-[16px] text-right top-0" dir="auto">
          زيادة عدد الزيارات الرقمية بنسبة 40%
        </p>
      </div>
    </div>
  );
}

function Icon18() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d={svgPaths.p3c797180} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p3ac0b600} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Container99() {
  return (
    <div className="bg-[#22c55e] relative rounded-[10px] shrink-0 size-[40px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Icon18 />
      </div>
    </div>
  );
}

function Container98() {
  return (
    <div className="bg-[rgba(34,197,94,0.06)] h-[72px] relative rounded-[14px] shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[12px] items-center pl-[205.195px] relative size-full">
          <Paragraph32 />
          <Container99 />
        </div>
      </div>
    </div>
  );
}

function Paragraph33() {
  return (
    <div className="h-[24px] relative shrink-0 w-[166.445px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['IBM_Plex_Sans_Arabic:Medium',sans-serif] leading-[24px] not-italic right-0 text-[#0e1320] text-[16px] text-right top-0" dir="auto">
          زيادة الحجوزات بنسبة 20%
        </p>
      </div>
    </div>
  );
}

function Icon19() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d={svgPaths.p3c797180} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p3ac0b600} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Container101() {
  return (
    <div className="bg-[#22c55e] relative rounded-[10px] shrink-0 size-[40px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Icon19 />
      </div>
    </div>
  );
}

function Container100() {
  return (
    <div className="bg-[rgba(34,197,94,0.06)] h-[72px] relative rounded-[14px] shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[12px] items-center pl-[264.055px] relative size-full">
          <Paragraph33 />
          <Container101 />
        </div>
      </div>
    </div>
  );
}

function Paragraph34() {
  return (
    <div className="h-[24px] relative shrink-0 w-[169.078px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <div className="flex flex-col font-['IBM_Plex_Sans_Arabic:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#0e1320] text-[16px] text-center w-[175px]">
          <p className="leading-[24px] whitespace-pre-wrap" dir="auto">
            استقرار تكلفة اكتساب العميل
          </p>
        </div>
      </div>
    </div>
  );
}

function Icon20() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d={svgPaths.p3c797180} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p3ac0b600} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Container103() {
  return (
    <div className="bg-[#22c55e] relative rounded-[10px] shrink-0 size-[40px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Icon20 />
      </div>
    </div>
  );
}

function Container102() {
  return (
    <div className="bg-[rgba(34,197,94,0.06)] h-[72px] relative rounded-[14px] shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[12px] items-center pl-[261.422px] relative size-full">
          <Paragraph34 />
          <Container103 />
        </div>
      </div>
    </div>
  );
}

function Container97() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] h-[248px] items-start relative shrink-0 w-full" data-name="Container">
      <Container98 />
      <Container100 />
      <Container102 />
    </div>
  );
}

function Container96() {
  return (
    <div className="bg-white col-2 justify-self-stretch relative rounded-[16px] row-1 self-stretch shrink-0" data-name="Container">
      <div aria-hidden="true" className="absolute border-2 border-[rgba(34,197,94,0.19)] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <div className="content-stretch flex flex-col gap-[24px] items-start pb-[2px] pt-[34px] px-[34px] relative size-full">
        <Heading13 />
        <Container97 />
      </div>
    </div>
  );
}

function Container81() {
  return (
    <div className="gap-x-[32px] gap-y-[32px] grid grid-cols-[repeat(2,minmax(0,1fr))] grid-rows-[repeat(1,minmax(0,1fr))] h-[372px] relative shrink-0 w-full" data-name="Container">
      <Container82 />
      <Container96 />
    </div>
  );
}

function Heading14() {
  return (
    <div className="h-[28px] relative shrink-0 w-full" data-name="Heading 3">
      <p className="absolute font-['IBM_Plex_Sans_Arabic:Bold',sans-serif] leading-[28px] left-[318.26px] not-italic text-[#0e1320] text-[20px] top-0" dir="auto">
        الميزانية مقابل الوصول
      </p>
    </div>
  );
}

function Group1() {
  return (
    <div className="absolute inset-[2%_1%_14%_13.03%]" data-name="Group">
      <div className="absolute inset-[-0.24%_0]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 428.57 210.999">
          <g id="Group">
            <path d="M0 210.499H428.57" id="Vector" stroke="var(--stroke-0, #E2E8F0)" strokeDasharray="3 3" strokeWidth="0.998998" />
            <path d="M0 157.999H428.57" id="Vector_2" stroke="var(--stroke-0, #E2E8F0)" strokeDasharray="3 3" strokeWidth="0.998998" />
            <path d="M0 105.499H428.57" id="Vector_3" stroke="var(--stroke-0, #E2E8F0)" strokeDasharray="3 3" strokeWidth="0.998998" />
            <path d="M0 52.9994H428.57" id="Vector_4" stroke="var(--stroke-0, #E2E8F0)" strokeDasharray="3 3" strokeWidth="0.998998" />
            <path d="M5.7488e-06 0.499499H428.57" id="Vector_5" stroke="var(--stroke-0, #E2E8F0)" strokeDasharray="3 3" strokeWidth="0.998998" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Group2() {
  return (
    <div className="absolute inset-[2%_1%_14%_13.03%]" data-name="Group">
      <div className="absolute inset-[0_-0.12%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 429.569 210">
          <g id="Group">
            <path d="M71.9279 0.000116933V210" id="Vector" stroke="var(--stroke-0, #E2E8F0)" strokeDasharray="3 3" strokeWidth="0.998998" />
            <path d="M214.785 0.000116933V210" id="Vector_2" stroke="var(--stroke-0, #E2E8F0)" strokeDasharray="3 3" strokeWidth="0.998998" />
            <path d="M357.641 0.000116933V210" id="Vector_3" stroke="var(--stroke-0, #E2E8F0)" strokeDasharray="3 3" strokeWidth="0.998998" />
            <path d="M0.499499 0.000244141V210" id="Vector_4" stroke="var(--stroke-0, #E2E8F0)" strokeDasharray="3 3" strokeWidth="0.998998" />
            <path d="M429.07 0.000116933V210" id="Vector_5" stroke="var(--stroke-0, #E2E8F0)" strokeDasharray="3 3" strokeWidth="0.998998" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Group() {
  return (
    <div className="absolute contents inset-[2%_1%_14%_13.03%]" data-name="Group">
      <Group1 />
      <Group2 />
    </div>
  );
}

function Group5() {
  return (
    <div className="absolute contents inset-[86%_66.62%_6.19%_21.34%]" data-name="Group">
      <div className="absolute inset-[86%_72.65%_11.6%_27.35%]" data-name="Vector">
        <div className="absolute inset-[0_-0.5px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 0.998998 6">
            <path d="M0.499499 6V0" id="Vector" stroke="var(--stroke-0, #64748B)" strokeWidth="0.998998" />
          </svg>
        </div>
      </div>
      <p className="absolute font-['Inter:Regular','Noto_Sans_Arabic:Regular',sans-serif] font-normal inset-[87.81%_66.62%_6.19%_21.34%] leading-[normal] not-italic text-[#64748b] text-[11.988px] text-center whitespace-pre-wrap" dir="auto">
        فبراير
      </p>
    </div>
  );
}

function Group6() {
  return (
    <div className="absolute contents inset-[86%_36.76%_6.19%_48.8%]" data-name="Group">
      <div className="absolute inset-[86%_43.99%_11.6%_56.01%]" data-name="Vector">
        <div className="absolute inset-[0_-0.5px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 0.998998 6">
            <path d="M0.499499 6V0" id="Vector" stroke="var(--stroke-0, #64748B)" strokeWidth="0.998998" />
          </svg>
        </div>
      </div>
      <p className="absolute font-['Inter:Regular','Noto_Sans_Arabic:Regular',sans-serif] font-normal inset-[87.81%_36.76%_6.19%_48.8%] leading-[normal] not-italic text-[#64748b] text-[11.988px] text-center whitespace-pre-wrap" dir="auto">
        مارس
      </p>
    </div>
  );
}

function Group7() {
  return (
    <div className="absolute contents inset-[86%_10.51%_6.19%_79.86%]" data-name="Group">
      <div className="absolute inset-[86%_15.33%_11.6%_84.67%]" data-name="Vector">
        <div className="absolute inset-[0_-0.5px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 0.998998 6">
            <path d="M0.499499 6V0" id="Vector" stroke="var(--stroke-0, #64748B)" strokeWidth="0.998998" />
          </svg>
        </div>
      </div>
      <p className="absolute font-['Inter:Regular','Noto_Sans_Arabic:Regular',sans-serif] font-normal inset-[87.81%_10.51%_6.19%_79.86%] leading-[normal] not-italic text-[#64748b] text-[11.988px] text-center whitespace-pre-wrap" dir="auto">
        ابريل
      </p>
    </div>
  );
}

function Group4() {
  return (
    <div className="absolute contents inset-[86%_10.51%_6.19%_21.34%]" data-name="Group">
      <Group5 />
      <Group6 />
      <Group7 />
    </div>
  );
}

function Group3() {
  return (
    <div className="absolute contents inset-[86%_1%_6.19%_13.03%]" data-name="Group">
      <div className="absolute inset-[86%_1%_14%_13.03%]" data-name="Vector">
        <div className="absolute inset-[-0.5px_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 428.57 0.998998">
            <path d="M0 0.499499H428.57" id="Vector" stroke="var(--stroke-0, #64748B)" strokeWidth="0.998998" />
          </svg>
        </div>
      </div>
      <Group4 />
    </div>
  );
}

function Group10() {
  return (
    <div className="absolute contents inset-[82.9%_86.97%_11.09%_9.82%]" data-name="Group">
      <div className="absolute inset-[86%_86.97%_14%_11.82%]" data-name="Vector">
        <div className="absolute inset-[-0.5px_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5.99399 0.998998">
            <path d="M0 0.499499H5.99399" id="Vector" stroke="var(--stroke-0, #64748B)" strokeWidth="0.998998" />
          </svg>
        </div>
      </div>
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal inset-[82.9%_88.58%_11.09%_9.82%] leading-[normal] not-italic text-[#64748b] text-[11.988px] text-right whitespace-pre-wrap">0</p>
    </div>
  );
}

function Group11() {
  return (
    <div className="absolute contents inset-[61.9%_86.97%_32.09%_3.81%]" data-name="Group">
      <div className="absolute inset-[65%_86.97%_35%_11.82%]" data-name="Vector">
        <div className="absolute inset-[-0.5px_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5.99399 0.998998">
            <path d="M0 0.499499H5.99399" id="Vector" stroke="var(--stroke-0, #64748B)" strokeWidth="0.998998" />
          </svg>
        </div>
      </div>
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal inset-[61.9%_88.57%_32.09%_3.81%] leading-[normal] not-italic text-[#64748b] text-[11.988px] text-right whitespace-pre-wrap">35000</p>
    </div>
  );
}

function Group12() {
  return (
    <div className="absolute contents inset-[40.9%_86.97%_53.09%_4.01%]" data-name="Group">
      <div className="absolute inset-[44%_86.97%_56%_11.82%]" data-name="Vector">
        <div className="absolute inset-[-0.5px_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5.99399 0.998998">
            <path d="M0 0.499499H5.99399" id="Vector" stroke="var(--stroke-0, #64748B)" strokeWidth="0.998998" />
          </svg>
        </div>
      </div>
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal inset-[40.9%_88.57%_53.09%_4.01%] leading-[normal] not-italic text-[#64748b] text-[11.988px] text-right whitespace-pre-wrap">70000</p>
    </div>
  );
}

function Group13() {
  return (
    <div className="absolute contents inset-[19.9%_86.97%_74.09%_2.81%]" data-name="Group">
      <div className="absolute inset-[23%_86.97%_77%_11.82%]" data-name="Vector">
        <div className="absolute inset-[-0.5px_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5.99399 0.998998">
            <path d="M0 0.499499H5.99399" id="Vector" stroke="var(--stroke-0, #64748B)" strokeWidth="0.998998" />
          </svg>
        </div>
      </div>
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal inset-[19.9%_88.57%_74.09%_2.81%] leading-[normal] not-italic text-[#64748b] text-[11.988px] text-right whitespace-pre-wrap">105000</p>
    </div>
  );
}

function Group14() {
  return (
    <div className="absolute contents inset-[0.5%_86.97%_93.49%_2.61%]" data-name="Group">
      <div className="absolute inset-[2%_86.97%_98%_11.82%]" data-name="Vector">
        <div className="absolute inset-[-0.5px_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5.99399 0.998998">
            <path d="M0 0.499499H5.99399" id="Vector" stroke="var(--stroke-0, #64748B)" strokeWidth="0.998998" />
          </svg>
        </div>
      </div>
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal inset-[0.5%_88.57%_93.49%_2.61%] leading-[normal] not-italic text-[#64748b] text-[11.988px] text-right whitespace-pre-wrap">140000</p>
    </div>
  );
}

function Group9() {
  return (
    <div className="absolute contents inset-[0.5%_86.97%_11.09%_2.61%]" data-name="Group">
      <Group10 />
      <Group11 />
      <Group12 />
      <Group13 />
      <Group14 />
    </div>
  );
}

function Group8() {
  return (
    <div className="absolute contents inset-[0.5%_86.97%_11.09%_2.61%]" data-name="Group">
      <div className="absolute inset-[2%_86.97%_14%_13.03%]" data-name="Vector">
        <div className="absolute inset-[0_-0.5px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 0.998998 210">
            <path d="M0.499499 0V210" id="Vector" stroke="var(--stroke-0, #64748B)" strokeWidth="0.998998" />
          </svg>
        </div>
      </div>
      <Group9 />
    </div>
  );
}

function Group18() {
  return (
    <div className="absolute inset-[26%_73.09%_14%_15.89%]" data-name="Group">
      <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 54.9449 150">
        <g id="Group">
          <path d={svgPaths.p392bb800} fill="var(--fill-0, #94A3B8)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group19() {
  return (
    <div className="absolute inset-[26%_44.43%_14%_44.55%]" data-name="Group">
      <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 54.9449 150">
        <g id="Group">
          <path d={svgPaths.p170e1280} fill="var(--fill-0, #94A3B8)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group20() {
  return (
    <div className="absolute inset-[26%_15.77%_14%_73.21%]" data-name="Group">
      <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 54.9449 150">
        <g id="Group">
          <path d={svgPaths.p217db6b0} fill="var(--fill-0, #94A3B8)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group17() {
  return (
    <div className="absolute contents inset-[26%_15.77%_14%_15.89%]" data-name="Group">
      <Group18 />
      <Group19 />
      <Group20 />
    </div>
  );
}

function Group16() {
  return (
    <div className="absolute contents inset-[26%_15.77%_14%_15.89%]" data-name="Group">
      <Group17 />
    </div>
  );
}

function Group15() {
  return (
    <div className="absolute contents inset-[26%_15.77%_14%_15.89%]" data-name="Group">
      <Group16 />
    </div>
  );
}

function Group24() {
  return (
    <div className="absolute inset-[54.8%_61.26%_14%_27.72%]" data-name="Group">
      <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 54.9449 78">
        <g id="Group">
          <path d={svgPaths.p26656280} fill="var(--fill-0, #22C55E)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group25() {
  return (
    <div className="absolute inset-[29.6%_32.61%_14%_56.37%]" data-name="Group">
      <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 54.9449 141">
        <g id="Group">
          <path d={svgPaths.p3a592700} fill="var(--fill-0, #22C55E)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group26() {
  return (
    <div className="absolute inset-[3.2%_3.95%_14%_85.03%]" data-name="Group">
      <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 54.9449 207">
        <g id="Group">
          <path d={svgPaths.p7c024f0} fill="var(--fill-0, #22C55E)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group23() {
  return (
    <div className="absolute contents inset-[3.2%_3.95%_14%_27.72%]" data-name="Group">
      <Group24 />
      <Group25 />
      <Group26 />
    </div>
  );
}

function Group22() {
  return (
    <div className="absolute contents inset-[3.2%_3.95%_14%_27.72%]" data-name="Group">
      <Group23 />
    </div>
  );
}

function Group21() {
  return (
    <div className="absolute contents inset-[3.2%_3.95%_14%_27.72%]" data-name="Group">
      <Group22 />
    </div>
  );
}

function Surface() {
  return (
    <div className="absolute h-[250px] left-0 overflow-clip top-0 w-[498.5px]" data-name="Surface">
      <Group />
      <Group3 />
      <Group8 />
      <Group15 />
      <Group21 />
    </div>
  );
}

function BarChart() {
  return (
    <div className="h-[250px] relative shrink-0 w-full" data-name="BarChart">
      <Surface />
    </div>
  );
}

function Container105() {
  return (
    <div className="bg-white col-1 justify-self-stretch relative rounded-[16px] row-1 self-stretch shrink-0" data-name="Container">
      <div aria-hidden="true" className="absolute border-2 border-[rgba(34,197,94,0.19)] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <div className="content-stretch flex flex-col gap-[24px] items-start pb-[2px] pt-[34px] px-[34px] relative size-full">
        <Heading14 />
        <BarChart />
      </div>
    </div>
  );
}

function Heading15() {
  return (
    <div className="h-[28px] relative shrink-0 w-full" data-name="Heading 3">
      <p className="absolute font-['IBM_Plex_Sans_Arabic:Bold',sans-serif] leading-[28px] left-[344.7px] not-italic text-[#0e1320] text-[20px] top-0" dir="auto">
        نمو الزيارات الرقمية
      </p>
    </div>
  );
}

function Group28() {
  return (
    <div className="absolute inset-[2%_1%_14%_13.03%]" data-name="Group">
      <div className="absolute inset-[-0.24%_0]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 428.57 210.999">
          <g id="Group">
            <path d="M0 210.499H428.57" id="Vector" stroke="var(--stroke-0, #E2E8F0)" strokeDasharray="3 3" strokeWidth="0.998998" />
            <path d="M0 157.999H428.57" id="Vector_2" stroke="var(--stroke-0, #E2E8F0)" strokeDasharray="3 3" strokeWidth="0.998998" />
            <path d="M0 105.499H428.57" id="Vector_3" stroke="var(--stroke-0, #E2E8F0)" strokeDasharray="3 3" strokeWidth="0.998998" />
            <path d="M0 52.9994H428.57" id="Vector_4" stroke="var(--stroke-0, #E2E8F0)" strokeDasharray="3 3" strokeWidth="0.998998" />
            <path d="M5.7488e-06 0.499499H428.57" id="Vector_5" stroke="var(--stroke-0, #E2E8F0)" strokeDasharray="3 3" strokeWidth="0.998998" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Group29() {
  return (
    <div className="absolute inset-[2%_1%_14%_13.03%]" data-name="Group">
      <div className="absolute inset-[0_-0.12%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 429.569 210">
          <g id="Group">
            <path d="M0.499499 0.000244141V210" id="Vector" stroke="var(--stroke-0, #E2E8F0)" strokeDasharray="3 3" strokeWidth="0.998998" />
            <path d="M143.356 0.000116933V210" id="Vector_2" stroke="var(--stroke-0, #E2E8F0)" strokeDasharray="3 3" strokeWidth="0.998998" />
            <path d="M286.213 0.000116933V210" id="Vector_3" stroke="var(--stroke-0, #E2E8F0)" strokeDasharray="3 3" strokeWidth="0.998998" />
            <path d="M429.07 0.000116933V210" id="Vector_4" stroke="var(--stroke-0, #E2E8F0)" strokeDasharray="3 3" strokeWidth="0.998998" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Group27() {
  return (
    <div className="absolute contents inset-[2%_1%_14%_13.03%]" data-name="Group">
      <Group28 />
      <Group29 />
    </div>
  );
}

function Group32() {
  return (
    <div className="absolute contents inset-[86%_77.64%_6.19%_3.71%]" data-name="Group">
      <div className="absolute inset-[86%_86.97%_11.6%_13.03%]" data-name="Vector">
        <div className="absolute inset-[0_-0.5px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 0.998998 6">
            <path d="M0.499499 6V0" id="Vector" stroke="var(--stroke-0, #64748B)" strokeWidth="0.998998" />
          </svg>
        </div>
      </div>
      <p className="absolute font-['Inter:Regular','Noto_Sans_Arabic:Regular',sans-serif] font-normal inset-[87.81%_77.64%_6.19%_3.71%] leading-[normal] not-italic text-[#64748b] text-[11.988px] text-center whitespace-pre-wrap" dir="auto">
        الأسبوع 1
      </p>
    </div>
  );
}

function Group33() {
  return (
    <div className="absolute contents inset-[86%_48.78%_6.19%_32.16%]" data-name="Group">
      <div className="absolute inset-[86%_58.32%_11.6%_41.68%]" data-name="Vector">
        <div className="absolute inset-[0_-0.5px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 0.998998 6">
            <path d="M0.499499 6V0" id="Vector" stroke="var(--stroke-0, #64748B)" strokeWidth="0.998998" />
          </svg>
        </div>
      </div>
      <p className="absolute font-['Inter:Regular','Noto_Sans_Arabic:Regular',sans-serif] font-normal inset-[87.81%_48.78%_6.19%_32.16%] leading-[normal] not-italic text-[#64748b] text-[11.988px] text-center whitespace-pre-wrap" dir="auto">
        الأسبوع 4
      </p>
    </div>
  );
}

function Group34() {
  return (
    <div className="absolute contents inset-[86%_20.12%_6.19%_60.82%]" data-name="Group">
      <div className="absolute inset-[86%_29.66%_11.6%_70.34%]" data-name="Vector">
        <div className="absolute inset-[0_-0.5px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 0.998998 6">
            <path d="M0.499499 6V0" id="Vector" stroke="var(--stroke-0, #64748B)" strokeWidth="0.998998" />
          </svg>
        </div>
      </div>
      <p className="absolute font-['Inter:Regular','Noto_Sans_Arabic:Regular',sans-serif] font-normal inset-[87.81%_20.12%_6.19%_60.82%] leading-[normal] not-italic text-[#64748b] text-[11.988px] text-center whitespace-pre-wrap" dir="auto">
        الأسبوع 8
      </p>
    </div>
  );
}

function Group35() {
  return (
    <div className="absolute contents inset-[86%_-4.95%_6.19%_84.89%]" data-name="Group">
      <div className="absolute inset-[86%_1%_11.6%_99%]" data-name="Vector">
        <div className="absolute inset-[0_-0.5px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 0.998998 6">
            <path d="M0.499499 6V0" id="Vector" stroke="var(--stroke-0, #64748B)" strokeWidth="0.998998" />
          </svg>
        </div>
      </div>
      <p className="absolute font-['Inter:Regular','Noto_Sans_Arabic:Regular',sans-serif] font-normal inset-[87.81%_-4.95%_6.19%_84.89%] leading-[normal] not-italic text-[#64748b] text-[11.988px] text-center whitespace-pre-wrap" dir="auto">
        الأسبوع 12
      </p>
    </div>
  );
}

function Group31() {
  return (
    <div className="absolute contents inset-[86%_-4.95%_6.19%_3.71%]" data-name="Group">
      <Group32 />
      <Group33 />
      <Group34 />
      <Group35 />
    </div>
  );
}

function Group30() {
  return (
    <div className="absolute contents inset-[86%_-4.95%_6.19%_3.71%]" data-name="Group">
      <div className="absolute inset-[86%_1%_14%_13.03%]" data-name="Vector">
        <div className="absolute inset-[-0.5px_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 428.57 0.998998">
            <path d="M0 0.499499H428.57" id="Vector" stroke="var(--stroke-0, #64748B)" strokeWidth="0.998998" />
          </svg>
        </div>
      </div>
      <Group31 />
    </div>
  );
}

function Group38() {
  return (
    <div className="absolute contents inset-[82.9%_86.97%_11.09%_9.82%]" data-name="Group">
      <div className="absolute inset-[86%_86.97%_14%_11.82%]" data-name="Vector">
        <div className="absolute inset-[-0.5px_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5.99399 0.998998">
            <path d="M0 0.499499H5.99399" id="Vector" stroke="var(--stroke-0, #64748B)" strokeWidth="0.998998" />
          </svg>
        </div>
      </div>
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal inset-[82.9%_88.58%_11.09%_9.82%] leading-[normal] not-italic text-[#64748b] text-[11.988px] text-right whitespace-pre-wrap">0</p>
    </div>
  );
}

function Group39() {
  return (
    <div className="absolute contents inset-[61.9%_86.97%_32.09%_5.41%]" data-name="Group">
      <div className="absolute inset-[65%_86.97%_35%_11.82%]" data-name="Vector">
        <div className="absolute inset-[-0.5px_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5.99399 0.998998">
            <path d="M0 0.499499H5.99399" id="Vector" stroke="var(--stroke-0, #64748B)" strokeWidth="0.998998" />
          </svg>
        </div>
      </div>
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal inset-[61.9%_88.57%_32.09%_5.41%] leading-[normal] not-italic text-[#64748b] text-[11.988px] text-right whitespace-pre-wrap">3500</p>
    </div>
  );
}

function Group40() {
  return (
    <div className="absolute contents inset-[40.9%_86.97%_53.09%_5.41%]" data-name="Group">
      <div className="absolute inset-[44%_86.97%_56%_11.82%]" data-name="Vector">
        <div className="absolute inset-[-0.5px_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5.99399 0.998998">
            <path d="M0 0.499499H5.99399" id="Vector" stroke="var(--stroke-0, #64748B)" strokeWidth="0.998998" />
          </svg>
        </div>
      </div>
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal inset-[40.9%_88.57%_53.09%_5.41%] leading-[normal] not-italic text-[#64748b] text-[11.988px] text-right whitespace-pre-wrap">7000</p>
    </div>
  );
}

function Group41() {
  return (
    <div className="absolute contents inset-[19.9%_86.97%_74.09%_4.21%]" data-name="Group">
      <div className="absolute inset-[23%_86.97%_77%_11.82%]" data-name="Vector">
        <div className="absolute inset-[-0.5px_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5.99399 0.998998">
            <path d="M0 0.499499H5.99399" id="Vector" stroke="var(--stroke-0, #64748B)" strokeWidth="0.998998" />
          </svg>
        </div>
      </div>
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal inset-[19.9%_88.57%_74.09%_4.21%] leading-[normal] not-italic text-[#64748b] text-[11.988px] text-right whitespace-pre-wrap">10500</p>
    </div>
  );
}

function Group42() {
  return (
    <div className="absolute contents inset-[0.5%_86.97%_93.49%_4.21%]" data-name="Group">
      <div className="absolute inset-[2%_86.97%_98%_11.82%]" data-name="Vector">
        <div className="absolute inset-[-0.5px_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5.99399 0.998998">
            <path d="M0 0.499499H5.99399" id="Vector" stroke="var(--stroke-0, #64748B)" strokeWidth="0.998998" />
          </svg>
        </div>
      </div>
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal inset-[0.5%_88.57%_93.49%_4.21%] leading-[normal] not-italic text-[#64748b] text-[11.988px] text-right whitespace-pre-wrap">14000</p>
    </div>
  );
}

function Group37() {
  return (
    <div className="absolute contents inset-[0.5%_86.97%_11.09%_4.21%]" data-name="Group">
      <Group38 />
      <Group39 />
      <Group40 />
      <Group41 />
      <Group42 />
    </div>
  );
}

function Group36() {
  return (
    <div className="absolute contents inset-[0.5%_86.97%_11.09%_4.21%]" data-name="Group">
      <div className="absolute inset-[2%_86.97%_14%_13.03%]" data-name="Vector">
        <div className="absolute inset-[0_-0.5px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 0.998998 210">
            <path d="M0.499499 0V210" id="Vector" stroke="var(--stroke-0, #64748B)" strokeWidth="0.998998" />
          </svg>
        </div>
      </div>
      <Group37 />
    </div>
  );
}

function Group46() {
  return (
    <div className="absolute inset-[11.6%_1%_14%_13.03%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px_-29px] mask-size-[428.57px_218px]" data-name="Group" style={{ maskImage: `url('${imgGroup}')` }}>
      <div className="absolute inset-[-0.74%_-0.14%_0_0]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 429.566 187.371">
          <g id="Group">
            <path d={svgPaths.p9907230} fill="url(#paint0_linear_2_3807)" id="Vector" />
            <path d={svgPaths.p2652f800} id="Vector_2" stroke="var(--stroke-0, #22C55E)" strokeWidth="2.99699" />
          </g>
          <defs>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_2_3807" x1="0.391111" x2="0.391111" y1="1.37109" y2="187.371">
              <stop offset="0.05" stopColor="#22C55E" stopOpacity="0.3" />
              <stop offset="0.95" stopColor="#22C55E" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </div>
  );
}

function Group45() {
  return (
    <div className="absolute contents inset-[11.6%_1%_14%_13.03%]" data-name="Group">
      <Group46 />
    </div>
  );
}

function ClipPathGroup() {
  return (
    <div className="absolute contents inset-[0_1%_12.8%_13.03%]" data-name="Clip path group">
      <Group45 />
    </div>
  );
}

function Group44() {
  return (
    <div className="absolute contents inset-[0_1%_12.8%_13.03%]" data-name="Group">
      <ClipPathGroup />
    </div>
  );
}

function Group43() {
  return (
    <div className="absolute contents inset-[0_1%_12.8%_13.03%]" data-name="Group">
      <Group44 />
    </div>
  );
}

function Surface1() {
  return (
    <div className="absolute h-[250px] left-0 overflow-clip top-0 w-[498.5px]" data-name="Surface">
      <Group27 />
      <Group30 />
      <Group36 />
      <Group43 />
    </div>
  );
}

function AreaChart() {
  return (
    <div className="h-[250px] relative shrink-0 w-full" data-name="AreaChart">
      <Surface1 />
    </div>
  );
}

function Container106() {
  return (
    <div className="bg-white col-2 justify-self-stretch relative rounded-[16px] row-1 self-stretch shrink-0" data-name="Container">
      <div aria-hidden="true" className="absolute border-2 border-[rgba(34,197,94,0.19)] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <div className="content-stretch flex flex-col gap-[24px] items-start pb-[2px] pt-[34px] px-[34px] relative size-full">
        <Heading15 />
        <AreaChart />
      </div>
    </div>
  );
}

function Container104() {
  return (
    <div className="gap-x-[32px] gap-y-[32px] grid grid-cols-[repeat(2,minmax(0,1fr))] grid-rows-[repeat(1,minmax(0,1fr))] h-[370px] relative shrink-0 w-full" data-name="Container">
      <Container105 />
      <Container106 />
    </div>
  );
}

function Heading16() {
  return (
    <div className="h-[28px] relative shrink-0 w-full" data-name="Heading 3">
      <p className="absolute font-['IBM_Plex_Sans_Arabic:Bold','Noto_Sans:Bold',sans-serif] leading-[28px] left-[262.69px] text-[#0e1320] text-[20px] top-0 w-[236px] whitespace-pre-wrap" dir="auto" style={{ fontVariationSettings: "\'CTGR\' 0, \'wdth\' 100, \'wght\' 700" }}>
        تطور تكلفة الألف ظهور (CPM)
      </p>
    </div>
  );
}

function Group48() {
  return (
    <div className="absolute inset-[2%_1%_14%_13.03%]" data-name="Group">
      <div className="absolute inset-[-0.24%_0]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 428.57 210.999">
          <g id="Group">
            <path d="M0 210.499H428.57" id="Vector" stroke="var(--stroke-0, #E2E8F0)" strokeDasharray="3 3" strokeWidth="0.998998" />
            <path d="M0 157.999H428.57" id="Vector_2" stroke="var(--stroke-0, #E2E8F0)" strokeDasharray="3 3" strokeWidth="0.998998" />
            <path d="M0 105.499H428.57" id="Vector_3" stroke="var(--stroke-0, #E2E8F0)" strokeDasharray="3 3" strokeWidth="0.998998" />
            <path d="M0 52.9994H428.57" id="Vector_4" stroke="var(--stroke-0, #E2E8F0)" strokeDasharray="3 3" strokeWidth="0.998998" />
            <path d="M5.7488e-06 0.499499H428.57" id="Vector_5" stroke="var(--stroke-0, #E2E8F0)" strokeDasharray="3 3" strokeWidth="0.998998" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Group49() {
  return (
    <div className="absolute inset-[2%_1%_14%_13.03%]" data-name="Group">
      <div className="absolute inset-[0_-0.12%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 429.569 210">
          <g id="Group">
            <path d="M0.499499 0.000127208V210" id="Vector" stroke="var(--stroke-0, #E2E8F0)" strokeDasharray="3 3" strokeWidth="0.998998" />
            <path d="M214.785 0V210" id="Vector_2" stroke="var(--stroke-0, #E2E8F0)" strokeDasharray="3 3" strokeWidth="0.998998" />
            <path d="M429.07 0V210" id="Vector_3" stroke="var(--stroke-0, #E2E8F0)" strokeDasharray="3 3" strokeWidth="0.998998" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Group47() {
  return (
    <div className="absolute contents inset-[2%_1%_14%_13.03%]" data-name="Group">
      <Group48 />
      <Group49 />
    </div>
  );
}

function Group52() {
  return (
    <div className="absolute contents inset-[86%_80.95%_6.19%_7.01%]" data-name="Group">
      <div className="absolute inset-[86%_86.97%_11.6%_13.03%]" data-name="Vector">
        <div className="absolute inset-[0_-0.5px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 0.998998 6">
            <path d="M0.499499 6V0" id="Vector" stroke="var(--stroke-0, #64748B)" strokeWidth="0.998998" />
          </svg>
        </div>
      </div>
      <p className="absolute font-['Inter:Regular','Noto_Sans_Arabic:Regular',sans-serif] font-normal inset-[87.81%_80.95%_6.19%_7.01%] leading-[normal] not-italic text-[#64748b] text-[11.988px] text-center whitespace-pre-wrap" dir="auto">
        فبراير
      </p>
    </div>
  );
}

function Group53() {
  return (
    <div className="absolute contents inset-[86%_36.76%_6.19%_48.8%]" data-name="Group">
      <div className="absolute inset-[86%_43.99%_11.6%_56.01%]" data-name="Vector">
        <div className="absolute inset-[0_-0.5px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 0.998998 6">
            <path d="M0.499499 6V0" id="Vector" stroke="var(--stroke-0, #64748B)" strokeWidth="0.998998" />
          </svg>
        </div>
      </div>
      <p className="absolute font-['Inter:Regular','Noto_Sans_Arabic:Regular',sans-serif] font-normal inset-[87.81%_36.76%_6.19%_48.8%] leading-[normal] not-italic text-[#64748b] text-[11.988px] text-center whitespace-pre-wrap" dir="auto">
        مارس
      </p>
    </div>
  );
}

function Group54() {
  return (
    <div className="absolute contents inset-[86%_-2.19%_6.19%_92.56%]" data-name="Group">
      <div className="absolute inset-[86%_1%_11.6%_99%]" data-name="Vector">
        <div className="absolute inset-[0_-0.5px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 0.998998 6">
            <path d="M0.499499 6V0" id="Vector" stroke="var(--stroke-0, #64748B)" strokeWidth="0.998998" />
          </svg>
        </div>
      </div>
      <p className="absolute font-['Inter:Regular','Noto_Sans_Arabic:Regular',sans-serif] font-normal inset-[87.81%_-2.19%_6.19%_92.56%] leading-[normal] not-italic text-[#64748b] text-[11.988px] text-center whitespace-pre-wrap" dir="auto">
        ابريل
      </p>
    </div>
  );
}

function Group51() {
  return (
    <div className="absolute contents inset-[86%_-2.19%_6.19%_7.01%]" data-name="Group">
      <Group52 />
      <Group53 />
      <Group54 />
    </div>
  );
}

function Group50() {
  return (
    <div className="absolute contents inset-[86%_-2.19%_6.19%_7.01%]" data-name="Group">
      <div className="absolute inset-[86%_1%_14%_13.03%]" data-name="Vector">
        <div className="absolute inset-[-0.5px_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 428.57 0.998998">
            <path d="M0 0.499499H428.57" id="Vector" stroke="var(--stroke-0, #64748B)" strokeWidth="0.998998" />
          </svg>
        </div>
      </div>
      <Group51 />
    </div>
  );
}

function Group57() {
  return (
    <div className="absolute contents inset-[82.9%_86.97%_11.09%_9.82%]" data-name="Group">
      <div className="absolute inset-[86%_86.97%_14%_11.82%]" data-name="Vector">
        <div className="absolute inset-[-0.5px_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5.99399 0.998998">
            <path d="M0 0.499499H5.99399" id="Vector" stroke="var(--stroke-0, #64748B)" strokeWidth="0.998998" />
          </svg>
        </div>
      </div>
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal inset-[82.9%_88.58%_11.09%_9.82%] leading-[normal] not-italic text-[#64748b] text-[11.988px] text-right whitespace-pre-wrap">0</p>
    </div>
  );
}

function Group58() {
  return (
    <div className="absolute contents inset-[61.9%_86.97%_32.09%_7.82%]" data-name="Group">
      <div className="absolute inset-[65%_86.97%_35%_11.82%]" data-name="Vector">
        <div className="absolute inset-[-0.5px_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5.99399 0.998998">
            <path d="M0 0.499499H5.99399" id="Vector" stroke="var(--stroke-0, #64748B)" strokeWidth="0.998998" />
          </svg>
        </div>
      </div>
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal inset-[61.9%_88.57%_32.09%_7.82%] leading-[normal] not-italic text-[#64748b] text-[11.988px] text-right whitespace-pre-wrap">0.5</p>
    </div>
  );
}

function Group59() {
  return (
    <div className="absolute contents inset-[40.9%_86.97%_53.09%_10.22%]" data-name="Group">
      <div className="absolute inset-[44%_86.97%_56%_11.82%]" data-name="Vector">
        <div className="absolute inset-[-0.5px_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5.99399 0.998998">
            <path d="M0 0.499499H5.99399" id="Vector" stroke="var(--stroke-0, #64748B)" strokeWidth="0.998998" />
          </svg>
        </div>
      </div>
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal inset-[40.9%_88.58%_53.09%_10.22%] leading-[normal] not-italic text-[#64748b] text-[11.988px] text-right whitespace-pre-wrap">1</p>
    </div>
  );
}

function Group60() {
  return (
    <div className="absolute contents inset-[19.9%_86.97%_74.09%_8.22%]" data-name="Group">
      <div className="absolute inset-[23%_86.97%_77%_11.82%]" data-name="Vector">
        <div className="absolute inset-[-0.5px_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5.99399 0.998998">
            <path d="M0 0.499499H5.99399" id="Vector" stroke="var(--stroke-0, #64748B)" strokeWidth="0.998998" />
          </svg>
        </div>
      </div>
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal inset-[19.9%_88.57%_74.09%_8.22%] leading-[normal] not-italic text-[#64748b] text-[11.988px] text-right whitespace-pre-wrap">1.5</p>
    </div>
  );
}

function Group61() {
  return (
    <div className="absolute contents inset-[0.5%_86.97%_93.49%_9.82%]" data-name="Group">
      <div className="absolute inset-[2%_86.97%_98%_11.82%]" data-name="Vector">
        <div className="absolute inset-[-0.5px_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5.99399 0.998998">
            <path d="M0 0.499499H5.99399" id="Vector" stroke="var(--stroke-0, #64748B)" strokeWidth="0.998998" />
          </svg>
        </div>
      </div>
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal inset-[0.5%_88.58%_93.49%_9.82%] leading-[normal] not-italic text-[#64748b] text-[11.988px] text-right whitespace-pre-wrap">2</p>
    </div>
  );
}

function Group56() {
  return (
    <div className="absolute contents inset-[0.5%_86.97%_11.09%_7.82%]" data-name="Group">
      <Group57 />
      <Group58 />
      <Group59 />
      <Group60 />
      <Group61 />
    </div>
  );
}

function Group55() {
  return (
    <div className="absolute contents inset-[0.5%_86.97%_11.09%_7.82%]" data-name="Group">
      <div className="absolute inset-[2%_86.97%_14%_13.03%]" data-name="Vector">
        <div className="absolute inset-[0_-0.5px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 0.998998 210">
            <path d="M0.499499 0V210" id="Vector" stroke="var(--stroke-0, #64748B)" strokeWidth="0.998998" />
          </svg>
        </div>
      </div>
      <Group56 />
    </div>
  );
}

function Group65() {
  return (
    <div className="absolute inset-[5.36%_1%_14%_13.03%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px_-13.4px] mask-size-[428.57px_218px]" data-name="Group" style={{ maskImage: `url('${imgGroup}')` }}>
      <div className="absolute inset-[-0.67%_0_0_-0.15%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 429.378 202.948">
          <g id="Group">
            <path d={svgPaths.pe11dc00} fill="url(#paint0_linear_2_3803)" id="Vector" />
            <path d={svgPaths.p24fdff40} id="Vector_2" stroke="var(--stroke-0, #EF4444)" strokeWidth="2.99699" />
          </g>
          <defs>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_2_3803" x1="0.654031" x2="0.654031" y1="1.34823" y2="202.948">
              <stop offset="0.05" stopColor="#22C55E" stopOpacity="0.3" />
              <stop offset="0.95" stopColor="#22C55E" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </div>
  );
}

function Group64() {
  return (
    <div className="absolute contents inset-[5.36%_1%_14%_13.03%]" data-name="Group">
      <Group65 />
    </div>
  );
}

function ClipPathGroup1() {
  return (
    <div className="absolute contents inset-[0_1%_12.8%_13.03%]" data-name="Clip path group">
      <Group64 />
    </div>
  );
}

function Group63() {
  return (
    <div className="absolute contents inset-[0_1%_12.8%_13.03%]" data-name="Group">
      <ClipPathGroup1 />
    </div>
  );
}

function Group62() {
  return (
    <div className="absolute contents inset-[0_1%_12.8%_13.03%]" data-name="Group">
      <Group63 />
    </div>
  );
}

function Surface2() {
  return (
    <div className="absolute h-[250px] left-0 overflow-clip top-0 w-[498.5px]" data-name="Surface">
      <Group47 />
      <Group50 />
      <Group55 />
      <Group62 />
    </div>
  );
}

function AreaChart1() {
  return (
    <div className="h-[250px] relative shrink-0 w-full" data-name="AreaChart">
      <Surface2 />
    </div>
  );
}

function Container108() {
  return (
    <div className="bg-white col-1 justify-self-stretch relative rounded-[16px] row-1 self-stretch shrink-0" data-name="Container">
      <div aria-hidden="true" className="absolute border-2 border-[rgba(34,197,94,0.19)] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <div className="content-stretch flex flex-col gap-[24px] items-start pb-[2px] pt-[34px] px-[34px] relative size-full">
        <Heading16 />
        <AreaChart1 />
      </div>
    </div>
  );
}

function Heading17() {
  return (
    <div className="h-[28px] relative shrink-0 w-full" data-name="Heading 3">
      <p className="absolute font-['IBM_Plex_Sans_Arabic:Bold',sans-serif] leading-[28px] left-[381.63px] not-italic text-[#0e1320] text-[20px] top-0" dir="auto">
        تطور الحجوزات
      </p>
    </div>
  );
}

function Group67() {
  return (
    <div className="absolute inset-[2%_1%_14%_13.03%]" data-name="Group">
      <div className="absolute inset-[-0.24%_0]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 428.57 210.999">
          <g id="Group">
            <path d="M0 210.499H428.57" id="Vector" stroke="var(--stroke-0, #E2E8F0)" strokeDasharray="3 3" strokeWidth="0.998998" />
            <path d="M0 157.999H428.57" id="Vector_2" stroke="var(--stroke-0, #E2E8F0)" strokeDasharray="3 3" strokeWidth="0.998998" />
            <path d="M0 105.499H428.57" id="Vector_3" stroke="var(--stroke-0, #E2E8F0)" strokeDasharray="3 3" strokeWidth="0.998998" />
            <path d="M0 52.9994H428.57" id="Vector_4" stroke="var(--stroke-0, #E2E8F0)" strokeDasharray="3 3" strokeWidth="0.998998" />
            <path d="M5.7488e-06 0.499499H428.57" id="Vector_5" stroke="var(--stroke-0, #E2E8F0)" strokeDasharray="3 3" strokeWidth="0.998998" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Group68() {
  return (
    <div className="absolute inset-[2%_1%_14%_13.03%]" data-name="Group">
      <div className="absolute inset-[0_-0.12%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 429.569 210">
          <g id="Group">
            <path d="M0.499499 0.000127208V210" id="Vector" stroke="var(--stroke-0, #E2E8F0)" strokeDasharray="3 3" strokeWidth="0.998998" />
            <path d="M143.356 0V210" id="Vector_2" stroke="var(--stroke-0, #E2E8F0)" strokeDasharray="3 3" strokeWidth="0.998998" />
            <path d="M286.213 0V210" id="Vector_3" stroke="var(--stroke-0, #E2E8F0)" strokeDasharray="3 3" strokeWidth="0.998998" />
            <path d="M429.07 0V210" id="Vector_4" stroke="var(--stroke-0, #E2E8F0)" strokeDasharray="3 3" strokeWidth="0.998998" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Group66() {
  return (
    <div className="absolute contents inset-[2%_1%_14%_13.03%]" data-name="Group">
      <Group67 />
      <Group68 />
    </div>
  );
}

function Group71() {
  return (
    <div className="absolute contents inset-[86%_77.64%_6.19%_3.71%]" data-name="Group">
      <div className="absolute inset-[86%_86.97%_11.6%_13.03%]" data-name="Vector">
        <div className="absolute inset-[0_-0.5px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 0.998998 6">
            <path d="M0.499499 6V0" id="Vector" stroke="var(--stroke-0, #64748B)" strokeWidth="0.998998" />
          </svg>
        </div>
      </div>
      <p className="absolute font-['Inter:Regular','Noto_Sans_Arabic:Regular',sans-serif] font-normal inset-[87.81%_77.64%_6.19%_3.71%] leading-[normal] not-italic text-[#64748b] text-[11.988px] text-center whitespace-pre-wrap" dir="auto">
        الأسبوع 1
      </p>
    </div>
  );
}

function Group72() {
  return (
    <div className="absolute contents inset-[86%_48.78%_6.19%_32.16%]" data-name="Group">
      <div className="absolute inset-[86%_58.32%_11.6%_41.68%]" data-name="Vector">
        <div className="absolute inset-[0_-0.5px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 0.998998 6">
            <path d="M0.499499 6V0" id="Vector" stroke="var(--stroke-0, #64748B)" strokeWidth="0.998998" />
          </svg>
        </div>
      </div>
      <p className="absolute font-['Inter:Regular','Noto_Sans_Arabic:Regular',sans-serif] font-normal inset-[87.81%_48.78%_6.19%_32.16%] leading-[normal] not-italic text-[#64748b] text-[11.988px] text-center whitespace-pre-wrap" dir="auto">
        الأسبوع 4
      </p>
    </div>
  );
}

function Group73() {
  return (
    <div className="absolute contents inset-[86%_20.12%_6.19%_60.82%]" data-name="Group">
      <div className="absolute inset-[86%_29.66%_11.6%_70.34%]" data-name="Vector">
        <div className="absolute inset-[0_-0.5px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 0.998998 6">
            <path d="M0.499499 6V0" id="Vector" stroke="var(--stroke-0, #64748B)" strokeWidth="0.998998" />
          </svg>
        </div>
      </div>
      <p className="absolute font-['Inter:Regular','Noto_Sans_Arabic:Regular',sans-serif] font-normal inset-[87.81%_20.12%_6.19%_60.82%] leading-[normal] not-italic text-[#64748b] text-[11.988px] text-center whitespace-pre-wrap" dir="auto">
        الأسبوع 8
      </p>
    </div>
  );
}

function Group74() {
  return (
    <div className="absolute contents inset-[86%_-4.95%_6.19%_84.89%]" data-name="Group">
      <div className="absolute inset-[86%_1%_11.6%_99%]" data-name="Vector">
        <div className="absolute inset-[0_-0.5px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 0.998998 6">
            <path d="M0.499499 6V0" id="Vector" stroke="var(--stroke-0, #64748B)" strokeWidth="0.998998" />
          </svg>
        </div>
      </div>
      <p className="absolute font-['Inter:Regular','Noto_Sans_Arabic:Regular',sans-serif] font-normal inset-[87.81%_-4.95%_6.19%_84.89%] leading-[normal] not-italic text-[#64748b] text-[11.988px] text-center whitespace-pre-wrap" dir="auto">
        الأسبوع 12
      </p>
    </div>
  );
}

function Group70() {
  return (
    <div className="absolute contents inset-[86%_-4.95%_6.19%_3.71%]" data-name="Group">
      <Group71 />
      <Group72 />
      <Group73 />
      <Group74 />
    </div>
  );
}

function Group69() {
  return (
    <div className="absolute contents inset-[86%_-4.95%_6.19%_3.71%]" data-name="Group">
      <div className="absolute inset-[86%_1%_14%_13.03%]" data-name="Vector">
        <div className="absolute inset-[-0.5px_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 428.57 0.998998">
            <path d="M0 0.499499H428.57" id="Vector" stroke="var(--stroke-0, #64748B)" strokeWidth="0.998998" />
          </svg>
        </div>
      </div>
      <Group70 />
    </div>
  );
}

function Group77() {
  return (
    <div className="absolute contents inset-[82.9%_86.97%_11.09%_9.82%]" data-name="Group">
      <div className="absolute inset-[86%_86.97%_14%_11.82%]" data-name="Vector">
        <div className="absolute inset-[-0.5px_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5.99399 0.998998">
            <path d="M0 0.499499H5.99399" id="Vector" stroke="var(--stroke-0, #64748B)" strokeWidth="0.998998" />
          </svg>
        </div>
      </div>
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal inset-[82.9%_88.58%_11.09%_9.82%] leading-[normal] not-italic text-[#64748b] text-[11.988px] text-right whitespace-pre-wrap">0</p>
    </div>
  );
}

function Group78() {
  return (
    <div className="absolute contents inset-[61.9%_86.97%_32.09%_6.81%]" data-name="Group">
      <div className="absolute inset-[65%_86.97%_35%_11.82%]" data-name="Vector">
        <div className="absolute inset-[-0.5px_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5.99399 0.998998">
            <path d="M0 0.499499H5.99399" id="Vector" stroke="var(--stroke-0, #64748B)" strokeWidth="0.998998" />
          </svg>
        </div>
      </div>
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal inset-[61.9%_88.57%_32.09%_6.81%] leading-[normal] not-italic text-[#64748b] text-[11.988px] text-right whitespace-pre-wrap">200</p>
    </div>
  );
}

function Group79() {
  return (
    <div className="absolute contents inset-[40.9%_86.97%_53.09%_6.81%]" data-name="Group">
      <div className="absolute inset-[44%_86.97%_56%_11.82%]" data-name="Vector">
        <div className="absolute inset-[-0.5px_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5.99399 0.998998">
            <path d="M0 0.499499H5.99399" id="Vector" stroke="var(--stroke-0, #64748B)" strokeWidth="0.998998" />
          </svg>
        </div>
      </div>
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal inset-[40.9%_88.57%_53.09%_6.81%] leading-[normal] not-italic text-[#64748b] text-[11.988px] text-right whitespace-pre-wrap">400</p>
    </div>
  );
}

function Group80() {
  return (
    <div className="absolute contents inset-[19.9%_86.97%_74.09%_6.81%]" data-name="Group">
      <div className="absolute inset-[23%_86.97%_77%_11.82%]" data-name="Vector">
        <div className="absolute inset-[-0.5px_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5.99399 0.998998">
            <path d="M0 0.499499H5.99399" id="Vector" stroke="var(--stroke-0, #64748B)" strokeWidth="0.998998" />
          </svg>
        </div>
      </div>
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal inset-[19.9%_88.57%_74.09%_6.81%] leading-[normal] not-italic text-[#64748b] text-[11.988px] text-right whitespace-pre-wrap">600</p>
    </div>
  );
}

function Group81() {
  return (
    <div className="absolute contents inset-[0.5%_86.97%_93.49%_6.81%]" data-name="Group">
      <div className="absolute inset-[2%_86.97%_98%_11.82%]" data-name="Vector">
        <div className="absolute inset-[-0.5px_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5.99399 0.998998">
            <path d="M0 0.499499H5.99399" id="Vector" stroke="var(--stroke-0, #64748B)" strokeWidth="0.998998" />
          </svg>
        </div>
      </div>
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal inset-[0.5%_88.57%_93.49%_6.81%] leading-[normal] not-italic text-[#64748b] text-[11.988px] text-right whitespace-pre-wrap">800</p>
    </div>
  );
}

function Group76() {
  return (
    <div className="absolute contents inset-[0.5%_86.97%_11.09%_6.81%]" data-name="Group">
      <Group77 />
      <Group78 />
      <Group79 />
      <Group80 />
      <Group81 />
    </div>
  );
}

function Group75() {
  return (
    <div className="absolute contents inset-[0.5%_86.97%_11.09%_6.81%]" data-name="Group">
      <div className="absolute inset-[2%_86.97%_14%_13.03%]" data-name="Vector">
        <div className="absolute inset-[0_-0.5px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 0.998998 210">
            <path d="M0.499499 0V210" id="Vector" stroke="var(--stroke-0, #64748B)" strokeWidth="0.998998" />
          </svg>
        </div>
      </div>
      <Group76 />
    </div>
  );
}

function Group82() {
  return (
    <div className="absolute inset-[8.4%_0_30.9%_12.02%]" data-name="Group">
      <div className="absolute inset-[-0.99%_-0.34%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 441.557 154.747">
          <g id="Group">
            <path d={svgPaths.p2d4e5200} id="Vector" stroke="var(--stroke-0, #22C55E)" strokeWidth="2.99699" />
            <g id="Group_2">
              <path d={svgPaths.p5c48600} fill="var(--fill-0, #22C55E)" id="Vector_2" stroke="var(--stroke-0, #22C55E)" strokeWidth="2.99699" />
              <path d={svgPaths.p20d95080} fill="var(--fill-0, #22C55E)" id="Vector_3" stroke="var(--stroke-0, #22C55E)" strokeWidth="2.99699" />
              <path d={svgPaths.pd77f080} fill="var(--fill-0, #22C55E)" id="Vector_4" stroke="var(--stroke-0, #22C55E)" strokeWidth="2.99699" />
              <path d={svgPaths.p37dcc900} fill="var(--fill-0, #22C55E)" id="Vector_5" stroke="var(--stroke-0, #22C55E)" strokeWidth="2.99699" />
            </g>
          </g>
        </svg>
      </div>
    </div>
  );
}

function Surface3() {
  return (
    <div className="absolute h-[250px] left-0 overflow-clip top-0 w-[498.5px]" data-name="Surface">
      <Group66 />
      <Group69 />
      <Group75 />
      <Group82 />
    </div>
  );
}

function LineChart() {
  return (
    <div className="h-[250px] relative shrink-0 w-full" data-name="LineChart">
      <Surface3 />
    </div>
  );
}

function Container109() {
  return (
    <div className="bg-white col-2 justify-self-stretch relative rounded-[16px] row-1 self-stretch shrink-0" data-name="Container">
      <div aria-hidden="true" className="absolute border-2 border-[rgba(34,197,94,0.19)] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <div className="content-stretch flex flex-col gap-[24px] items-start pb-[2px] pt-[34px] px-[34px] relative size-full">
        <Heading17 />
        <LineChart />
      </div>
    </div>
  );
}

function Container107() {
  return (
    <div className="gap-x-[32px] gap-y-[32px] grid grid-cols-[repeat(2,minmax(0,1fr))] grid-rows-[repeat(1,minmax(0,1fr))] h-[370px] relative shrink-0 w-full" data-name="Container">
      <Container108 />
      <Container109 />
    </div>
  );
}

function QuarterSection() {
  return (
    <div className="absolute bg-[#f8fafc] content-stretch flex flex-col gap-[48px] h-[1990px] items-start left-0 pt-[80px] px-[80px] top-0 w-[1325px]" data-name="QuarterSection">
      <Container59 />
      <Container66 />
      <Container81 />
      <Container104 />
      <Container107 />
    </div>
  );
}

function Frame4() {
  return (
    <div className="h-[1990px] relative shrink-0 w-full">
      <QuarterSection />
    </div>
  );
}

function Heading18() {
  return (
    <div className="h-[48px] relative shrink-0 w-full" data-name="Heading 2">
      <p className="absolute font-['IBM_Plex_Sans_Arabic:Bold',sans-serif] leading-[48px] left-0 not-italic text-[#0e1320] text-[48px] top-0" dir="auto">
        رفع التحويل والإيرادات
      </p>
    </div>
  );
}

function Paragraph35() {
  return (
    <div className="h-[28px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['IBM_Plex_Sans_Arabic:Regular','Noto_Sans:Regular',sans-serif] leading-[28px] left-[285.38px] text-[#64748b] text-[20px] top-0 w-[134px] whitespace-pre-wrap" dir="auto" style={{ fontVariationSettings: "\'CTGR\' 0, \'wdth\' 100, \'wght\' 400" }}>
        الشهور 4 – 5 – 6
      </p>
    </div>
  );
}

function Container112() {
  return (
    <div className="h-[84px] relative shrink-0 w-[418.563px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[8px] items-start relative size-full">
        <Heading18 />
        <Paragraph35 />
      </div>
    </div>
  );
}

function Container113() {
  return (
    <div className="relative rounded-[16px] shadow-[0px_8px_32px_0px_rgba(0,194,255,0.25)] shrink-0 size-[80px]" data-name="Container" style={{ backgroundImage: "linear-gradient(135deg, rgb(0, 194, 255) 0%, rgba(0, 194, 255, 0.8) 100%)" }}>
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <p className="font-['IBM_Plex_Sans_Arabic:Bold','Noto_Sans:Bold',sans-serif] leading-[36px] relative shrink-0 text-[30px] text-white" style={{ fontVariationSettings: "\'CTGR\' 0, \'wdth\' 100, \'wght\' 700" }}>
          Q2
        </p>
      </div>
    </div>
  );
}

function Container111() {
  return (
    <div className="h-[84px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[16px] items-center pl-[650.438px] relative size-full">
          <Container112 />
          <Container113 />
        </div>
      </div>
    </div>
  );
}

function Icon21() {
  return (
    <div className="absolute left-[1073px] size-[24px] top-[4px]" data-name="Icon">
      <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon">
          <path d={svgPaths.p13253c0} id="Vector" stroke="var(--stroke-0, #00C2FF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d="M16 7H22V13" id="Vector_2" stroke="var(--stroke-0, #00C2FF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Paragraph36() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['IBM_Plex_Sans_Arabic:SemiBold',sans-serif] leading-[20px] left-[299.05px] not-italic text-[#64748b] text-[14px] top-[-0.5px]" dir="auto">
        الهدف
      </p>
    </div>
  );
}

function Paragraph37() {
  return (
    <div className="h-[36px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['IBM_Plex_Sans_Arabic:Regular','Noto_Sans:Regular',sans-serif] leading-[36px] left-0 text-[#0e1320] text-[20px] top-0" dir="auto" style={{ fontVariationSettings: "\'CTGR\' 0, \'wdth\' 100, \'wght\' 400" }}>
        تحويل الزوار إلى عملاء وزيادة المبيعات الرقمية.
      </p>
    </div>
  );
}

function Container116() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[8px] h-[64px] items-start left-[726.48px] top-0 w-[334.523px]" data-name="Container">
      <Paragraph36 />
      <Paragraph37 />
    </div>
  );
}

function Container115() {
  return (
    <div className="h-[64px] relative shrink-0 w-full" data-name="Container">
      <Icon21 />
      <Container116 />
    </div>
  );
}

function Container114() {
  return (
    <div className="bg-gradient-to-r from-white h-[132px] relative rounded-[16px] shrink-0 to-[#f9fafb] w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-2 border-[rgba(0,194,255,0.25)] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <div className="content-stretch flex flex-col items-start pb-[2px] pt-[34px] px-[34px] relative size-full">
        <Container115 />
      </div>
    </div>
  );
}

function Container110() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] h-[232px] items-start relative shrink-0 w-full" data-name="Container">
      <Container111 />
      <Container114 />
    </div>
  );
}

function Heading19() {
  return (
    <div className="h-[32px] relative shrink-0 w-full" data-name="Heading 3">
      <p className="absolute font-['IBM_Plex_Sans_Arabic:Bold',sans-serif] leading-[32px] left-[435.88px] not-italic text-[#0e1320] text-[24px] top-0" dir="auto">
        التنفيذ
      </p>
    </div>
  );
}

function Icon22() {
  return (
    <div className="absolute left-[478.5px] size-[20px] top-[2px]" data-name="Icon">
      <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g clipPath="url(#clip0_2_3787)" id="Icon">
          <path d={svgPaths.p14d24500} id="Vector" stroke="var(--stroke-0, #00C2FF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p3e012060} id="Vector_2" stroke="var(--stroke-0, #00C2FF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
        <defs>
          <clipPath id="clip0_2_3787">
            <rect fill="white" height="20" width="20" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Paragraph38() {
  return (
    <div className="absolute h-[25.594px] left-[289.59px] top-0 w-[176.914px]" data-name="Paragraph">
      <p className="absolute font-['IBM_Plex_Sans_Arabic:Regular',sans-serif] leading-[25.6px] left-0 not-italic text-[#475569] text-[16px] top-[-0.5px]" dir="auto">
        حملات إعلانية موجهة للتحويل
      </p>
    </div>
  );
}

function Container120() {
  return (
    <div className="h-[25.594px] relative shrink-0 w-full" data-name="Container">
      <Icon22 />
      <Paragraph38 />
    </div>
  );
}

function Icon23() {
  return (
    <div className="absolute left-[478.5px] size-[20px] top-[2px]" data-name="Icon">
      <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g clipPath="url(#clip0_2_3787)" id="Icon">
          <path d={svgPaths.p14d24500} id="Vector" stroke="var(--stroke-0, #00C2FF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p3e012060} id="Vector_2" stroke="var(--stroke-0, #00C2FF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
        <defs>
          <clipPath id="clip0_2_3787">
            <rect fill="white" height="20" width="20" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Paragraph39() {
  return (
    <div className="absolute h-[25.594px] left-[290.26px] top-0 w-[176.242px]" data-name="Paragraph">
      <p className="absolute font-['IBM_Plex_Sans_Arabic:Regular',sans-serif] leading-[25.6px] left-0 not-italic text-[#475569] text-[16px] top-[-0.5px]" dir="auto">
        إعادة استهداف الزوار السابقين
      </p>
    </div>
  );
}

function Container121() {
  return (
    <div className="h-[25.594px] relative shrink-0 w-full" data-name="Container">
      <Icon23 />
      <Paragraph39 />
    </div>
  );
}

function Icon24() {
  return (
    <div className="absolute left-[478.5px] size-[20px] top-[2px]" data-name="Icon">
      <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g clipPath="url(#clip0_2_3787)" id="Icon">
          <path d={svgPaths.p14d24500} id="Vector" stroke="var(--stroke-0, #00C2FF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p3e012060} id="Vector_2" stroke="var(--stroke-0, #00C2FF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
        <defs>
          <clipPath id="clip0_2_3787">
            <rect fill="white" height="20" width="20" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Paragraph40() {
  return (
    <div className="absolute h-[25.594px] left-[332.23px] top-0 w-[134.273px]" data-name="Paragraph">
      <p className="absolute font-['IBM_Plex_Sans_Arabic:Regular',sans-serif] leading-[25.6px] left-0 not-italic text-[#475569] text-[16px] top-[-0.5px]" dir="auto">
        تحسين صفحات الحجز
      </p>
    </div>
  );
}

function Container122() {
  return (
    <div className="h-[25.594px] relative shrink-0 w-full" data-name="Container">
      <Icon24 />
      <Paragraph40 />
    </div>
  );
}

function Icon25() {
  return (
    <div className="absolute left-[478.5px] size-[20px] top-[2px]" data-name="Icon">
      <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g clipPath="url(#clip0_2_3787)" id="Icon">
          <path d={svgPaths.p14d24500} id="Vector" stroke="var(--stroke-0, #00C2FF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p3e012060} id="Vector_2" stroke="var(--stroke-0, #00C2FF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
        <defs>
          <clipPath id="clip0_2_3787">
            <rect fill="white" height="20" width="20" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Paragraph41() {
  return (
    <div className="absolute h-[25.594px] left-[273.86px] top-0 w-[192.641px]" data-name="Paragraph">
      <p className="absolute font-['IBM_Plex_Sans_Arabic:Regular',sans-serif] leading-[25.6px] left-0 not-italic text-[#475569] text-[16px] top-[-0.5px]" dir="auto">
        الإطلاق الرسمي للموقع والتطبيق
      </p>
    </div>
  );
}

function Container123() {
  return (
    <div className="h-[25.594px] relative shrink-0 w-full" data-name="Container">
      <Icon25 />
      <Paragraph41 />
    </div>
  );
}

function Container119() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] h-[138.375px] items-start relative shrink-0 w-full" data-name="Container">
      <Container120 />
      <Container121 />
      <Container122 />
      <Container123 />
    </div>
  );
}

function Container118() {
  return (
    <div className="bg-white col-1 justify-self-stretch relative rounded-[16px] row-1 self-stretch shrink-0" data-name="Container">
      <div aria-hidden="true" className="absolute border-2 border-[rgba(0,194,255,0.19)] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <div className="content-stretch flex flex-col gap-[24px] items-start pb-[2px] pt-[34px] px-[34px] relative size-full">
        <Heading19 />
        <Container119 />
      </div>
    </div>
  );
}

function Heading20() {
  return (
    <div className="h-[32px] relative shrink-0 w-[75.625px]" data-name="Heading 3">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['IBM_Plex_Sans_Arabic:Bold',sans-serif] leading-[32px] left-0 not-italic text-[#0e1320] text-[24px] top-0" dir="auto">
          الميزانية
        </p>
      </div>
    </div>
  );
}

function Icon26() {
  return (
    <div className="relative shrink-0 size-[32px]" data-name="Icon">
      <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="Icon">
          <path d="M16 2.66667V29.3333" id="Vector" stroke="var(--stroke-0, #00C2FF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
          <path d={svgPaths.p30e9cc00} id="Vector_2" stroke="var(--stroke-0, #00C2FF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
        </g>
      </svg>
    </div>
  );
}

function Container125() {
  return (
    <div className="h-[32px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[12px] items-center pl-[378.875px] relative size-full">
          <Heading20 />
          <Icon26 />
        </div>
      </div>
    </div>
  );
}

function Text14() {
  return (
    <div className="h-[28px] relative shrink-0 w-[115.344px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['IBM_Plex_Sans_Arabic:SemiBold',sans-serif] leading-[28px] left-0 not-italic text-[#0e1320] text-[20px] top-0 w-[116px] whitespace-pre-wrap" dir="auto">
          100,000 ريال
        </p>
      </div>
    </div>
  );
}

function Text15() {
  return (
    <div className="h-[24px] relative shrink-0 w-[47.094px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['IBM_Plex_Sans_Arabic:Regular','Noto_Sans:Regular',sans-serif] leading-[24px] left-0 text-[#64748b] text-[16px] top-0 w-[48px] whitespace-pre-wrap" dir="auto" style={{ fontVariationSettings: "\'CTGR\' 0, \'wdth\' 100, \'wght\' 400" }}>
          الشهر 4
        </p>
      </div>
    </div>
  );
}

function Container127() {
  return (
    <div className="content-stretch flex h-[28px] items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Text14 />
      <Text15 />
    </div>
  );
}

function Text16() {
  return (
    <div className="h-[28px] relative shrink-0 w-[115.344px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['IBM_Plex_Sans_Arabic:SemiBold',sans-serif] leading-[28px] left-0 not-italic text-[#0e1320] text-[20px] top-0 w-[116px] whitespace-pre-wrap" dir="auto">
          100,000 ريال
        </p>
      </div>
    </div>
  );
}

function Text17() {
  return (
    <div className="h-[24px] relative shrink-0 w-[47.094px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['IBM_Plex_Sans_Arabic:Regular','Noto_Sans:Regular',sans-serif] leading-[24px] left-0 text-[#64748b] text-[16px] top-0 w-[48px] whitespace-pre-wrap" dir="auto" style={{ fontVariationSettings: "\'CTGR\' 0, \'wdth\' 100, \'wght\' 400" }}>
          الشهر 5
        </p>
      </div>
    </div>
  );
}

function Container128() {
  return (
    <div className="content-stretch flex h-[28px] items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Text16 />
      <Text17 />
    </div>
  );
}

function Text18() {
  return (
    <div className="h-[28px] relative shrink-0 w-[115.344px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['IBM_Plex_Sans_Arabic:SemiBold',sans-serif] leading-[28px] left-0 not-italic text-[#0e1320] text-[20px] top-0 w-[116px] whitespace-pre-wrap" dir="auto">
          100,000 ريال
        </p>
      </div>
    </div>
  );
}

function Text19() {
  return (
    <div className="h-[24px] relative shrink-0 w-[47.094px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['IBM_Plex_Sans_Arabic:Regular','Noto_Sans:Regular',sans-serif] leading-[24px] left-0 text-[#64748b] text-[16px] top-0 w-[48px] whitespace-pre-wrap" dir="auto" style={{ fontVariationSettings: "\'CTGR\' 0, \'wdth\' 100, \'wght\' 400" }}>
          الشهر 6
        </p>
      </div>
    </div>
  );
}

function Container129() {
  return (
    <div className="content-stretch flex h-[28px] items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Text18 />
      <Text19 />
    </div>
  );
}

function Text20() {
  return (
    <div className="h-[36px] relative shrink-0 w-[174.609px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['IBM_Plex_Sans_Arabic:Bold','Noto_Sans:Bold',sans-serif] leading-[36px] left-0 text-[#00c2ff] text-[30px] top-[0.5px] w-[175px] whitespace-pre-wrap" dir="auto" style={{ fontVariationSettings: "\'CTGR\' 0, \'wdth\' 100, \'wght\' 700" }}>
          300,000 ريال
        </p>
      </div>
    </div>
  );
}

function Text21() {
  return (
    <div className="h-[28px] relative shrink-0 w-[81.742px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['IBM_Plex_Sans_Arabic:SemiBold',sans-serif] leading-[28px] left-0 not-italic text-[#0e1320] text-[18px] top-[0.5px]" dir="auto">
          إجمالي الربع
        </p>
      </div>
    </div>
  );
}

function Container131() {
  return (
    <div className="content-stretch flex h-[36px] items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Text20 />
      <Text21 />
    </div>
  );
}

function Container130() {
  return (
    <div className="content-stretch flex flex-col h-[54px] items-start pt-[18px] relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[rgba(0,194,255,0.13)] border-solid border-t-2 inset-0 pointer-events-none" />
      <Container131 />
    </div>
  );
}

function Container126() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] h-[186px] items-start relative shrink-0 w-full" data-name="Container">
      <Container127 />
      <Container128 />
      <Container129 />
      <Container130 />
    </div>
  );
}

function Container124() {
  return (
    <div className="bg-white col-2 justify-self-stretch relative rounded-[16px] row-1 self-stretch shrink-0" data-name="Container">
      <div aria-hidden="true" className="absolute border-2 border-[rgba(0,194,255,0.19)] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <div className="content-stretch flex flex-col gap-[24px] items-start pb-[2px] pt-[34px] px-[34px] relative size-full">
        <Container125 />
        <Container126 />
      </div>
    </div>
  );
}

function Container117() {
  return (
    <div className="gap-x-[32px] gap-y-[32px] grid grid-cols-[repeat(2,minmax(0,1fr))] grid-rows-[repeat(1,minmax(0,1fr))] h-[310px] relative shrink-0 w-full" data-name="Container">
      <Container118 />
      <Container124 />
    </div>
  );
}

function Heading21() {
  return (
    <div className="h-[32px] relative shrink-0 w-[94.539px]" data-name="Heading 3">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['IBM_Plex_Sans_Arabic:Bold',sans-serif] leading-[32px] left-[-39.96px] not-italic text-[#0e1320] text-[24px] top-0" dir="auto">
          الجدول الزمني
        </p>
      </div>
    </div>
  );
}

function Icon27() {
  return (
    <div className="relative shrink-0 size-[32px]" data-name="Icon">
      <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="Icon">
          <path d="M10.6667 2.66667V8" id="Vector" stroke="var(--stroke-0, #00C2FF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
          <path d="M21.3333 2.66667V8" id="Vector_2" stroke="var(--stroke-0, #00C2FF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
          <path d={svgPaths.p8d31b00} id="Vector_3" stroke="var(--stroke-0, #00C2FF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
          <path d="M4 13.3333H28" id="Vector_4" stroke="var(--stroke-0, #00C2FF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
        </g>
      </svg>
    </div>
  );
}

function Container134() {
  return (
    <div className="h-[32px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[12px] items-center pl-[359.961px] relative size-full">
          <Heading21 />
          <Icon27 />
        </div>
      </div>
    </div>
  );
}

function Paragraph42() {
  return (
    <div className="h-[28px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['IBM_Plex_Sans_Arabic:SemiBold',sans-serif] leading-[28px] left-[395.02px] not-italic text-[#0e1320] text-[18px] top-[0.5px]" dir="auto">
        الشهر الرابع
      </p>
    </div>
  );
}

function Paragraph43() {
  return (
    <div className="content-stretch flex h-[24px] items-start relative shrink-0 w-full" data-name="Paragraph">
      <p className="flex-[1_0_0] font-['IBM_Plex_Sans_Arabic:Regular',sans-serif] leading-[24px] min-h-px min-w-px not-italic relative text-[#64748b] text-[16px] text-right whitespace-pre-wrap" dir="auto">
        تحسين التحويل
      </p>
    </div>
  );
}

function Container137() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[4px] h-[56px] items-start left-0 top-[-5px] w-[474.5px]" data-name="Container">
      <Paragraph42 />
      <Paragraph43 />
    </div>
  );
}

function Container138() {
  return <div className="absolute bg-[#00c2ff] left-[483.5px] rounded-[16777200px] size-[16px] top-0" data-name="Container" />;
}

function Container139() {
  return <div className="absolute bg-[rgba(0,194,255,0.19)] h-[56px] left-[490.5px] top-[16px] w-[2px]" data-name="Container" />;
}

function Container136() {
  return (
    <div className="h-[56px] relative shrink-0 w-full" data-name="Container">
      <Container137 />
      <Container138 />
      <Container139 />
    </div>
  );
}

function Paragraph44() {
  return (
    <div className="h-[28px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['IBM_Plex_Sans_Arabic:SemiBold',sans-serif] leading-[28px] left-[372.98px] not-italic text-[#0e1320] text-[18px] top-[0.5px]" dir="auto">
        الشهر الخامس
      </p>
    </div>
  );
}

function Paragraph45() {
  return (
    <div className="content-stretch flex h-[24px] items-start relative shrink-0 w-full" data-name="Paragraph">
      <p className="flex-[1_0_0] font-['IBM_Plex_Sans_Arabic:Regular',sans-serif] leading-[24px] min-h-px min-w-px not-italic relative text-[#64748b] text-[16px] text-right whitespace-pre-wrap" dir="auto">
        إعادة الاستهداف
      </p>
    </div>
  );
}

function Container141() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[4px] h-[56px] items-start left-0 top-[-5px] w-[474.5px]" data-name="Container">
      <Paragraph44 />
      <Paragraph45 />
    </div>
  );
}

function Container142() {
  return <div className="absolute bg-[#00c2ff] left-[483.5px] rounded-[16777200px] size-[16px] top-0" data-name="Container" />;
}

function Container143() {
  return <div className="absolute bg-[rgba(0,194,255,0.19)] h-[56px] left-[490.5px] top-[16px] w-[2px]" data-name="Container" />;
}

function Container140() {
  return (
    <div className="h-[56px] relative shrink-0 w-full" data-name="Container">
      <Container141 />
      <Container142 />
      <Container143 />
    </div>
  );
}

function Paragraph46() {
  return (
    <div className="h-[28px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['IBM_Plex_Sans_Arabic:SemiBold',sans-serif] leading-[28px] left-[371.63px] not-italic text-[#0e1320] text-[18px] top-[0.5px]" dir="auto">
        الشهر السادس
      </p>
    </div>
  );
}

function Paragraph47() {
  return (
    <div className="content-stretch flex h-[24px] items-start relative shrink-0 w-full" data-name="Paragraph">
      <p className="flex-[1_0_0] font-['IBM_Plex_Sans_Arabic:Regular',sans-serif] leading-[24px] min-h-px min-w-px not-italic relative text-[#64748b] text-[16px] text-right whitespace-pre-wrap" dir="auto">
        تعظيم المبيعات
      </p>
    </div>
  );
}

function Container145() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[4px] h-[56px] items-start left-0 top-[-5px] w-[474.5px]" data-name="Container">
      <Paragraph46 />
      <Paragraph47 />
    </div>
  );
}

function Container146() {
  return <div className="absolute bg-[#00c2ff] left-[483.5px] rounded-[16777200px] size-[16px] top-0" data-name="Container" />;
}

function Container144() {
  return (
    <div className="h-[56px] relative shrink-0 w-full" data-name="Container">
      <Container145 />
      <Container146 />
    </div>
  );
}

function Container135() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] h-[200px] items-start relative shrink-0 w-full" data-name="Container">
      <Container136 />
      <Container140 />
      <Container144 />
    </div>
  );
}

function Container133() {
  return (
    <div className="bg-white col-1 justify-self-stretch relative rounded-[16px] row-1 self-stretch shrink-0" data-name="Container">
      <div aria-hidden="true" className="absolute border-2 border-[rgba(0,194,255,0.19)] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <div className="content-stretch flex flex-col gap-[24px] items-start pb-[2px] pt-[34px] px-[34px] relative size-full">
        <Container134 />
        <Container135 />
      </div>
    </div>
  );
}

function Heading22() {
  return (
    <div className="h-[32px] relative shrink-0 w-full" data-name="Heading 3">
      <p className="absolute font-['IBM_Plex_Sans_Arabic:Bold',sans-serif] leading-[32px] left-[369.84px] not-italic text-[#0e1320] text-[24px] top-0" dir="auto">
        مؤشرات الأداء
      </p>
    </div>
  );
}

function Paragraph48() {
  return (
    <div className="h-[24px] relative shrink-0 w-[205.422px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['IBM_Plex_Sans_Arabic:Medium',sans-serif] leading-[24px] left-0 not-italic text-[#0e1320] text-[16px] top-0 w-[206px] whitespace-pre-wrap" dir="auto">
          زيادة المبيعات الرقمية بنسبة 30%
        </p>
      </div>
    </div>
  );
}

function Icon28() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d={svgPaths.p3c797180} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p3ac0b600} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Container150() {
  return (
    <div className="bg-[#00c2ff] relative rounded-[10px] shrink-0 size-[40px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Icon28 />
      </div>
    </div>
  );
}

function Container149() {
  return (
    <div className="bg-[rgba(0,194,255,0.06)] h-[72px] relative rounded-[14px] shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[12px] items-center pl-[225.078px] relative size-full">
          <Paragraph48 />
          <Container150 />
        </div>
      </div>
    </div>
  );
}

function Paragraph49() {
  return (
    <div className="h-[24px] relative shrink-0 w-[203.727px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['IBM_Plex_Sans_Arabic:Medium',sans-serif] leading-[24px] not-italic right-0 text-[#0e1320] text-[16px] text-right top-0" dir="auto">
          تحسن معدل التحويل بنسبة 15%
        </p>
      </div>
    </div>
  );
}

function Icon29() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d={svgPaths.p3c797180} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p3ac0b600} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Container152() {
  return (
    <div className="bg-[#00c2ff] relative rounded-[10px] shrink-0 size-[40px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Icon29 />
      </div>
    </div>
  );
}

function Container151() {
  return (
    <div className="bg-[rgba(0,194,255,0.06)] h-[72px] relative rounded-[14px] shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[12px] items-center pl-[226.773px] relative size-full">
          <Paragraph49 />
          <Container152 />
        </div>
      </div>
    </div>
  );
}

function Paragraph50() {
  return (
    <div className="h-[24px] relative shrink-0 w-[122.359px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['IBM_Plex_Sans_Arabic:Medium',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#0e1320] text-[16px]" dir="auto">
          انخفاض تكلفة الحجز
        </p>
      </div>
    </div>
  );
}

function Icon30() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d={svgPaths.p3c797180} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p3ac0b600} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Container154() {
  return (
    <div className="bg-[#00c2ff] relative rounded-[10px] shrink-0 size-[40px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Icon30 />
      </div>
    </div>
  );
}

function Container153() {
  return (
    <div className="bg-[rgba(0,194,255,0.06)] h-[72px] relative rounded-[14px] shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[12px] items-center pl-[308.141px] relative size-full">
          <Paragraph50 />
          <Container154 />
        </div>
      </div>
    </div>
  );
}

function Container148() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] h-[248px] items-start relative shrink-0 w-full" data-name="Container">
      <Container149 />
      <Container151 />
      <Container153 />
    </div>
  );
}

function Container147() {
  return (
    <div className="bg-white col-2 justify-self-stretch relative rounded-[16px] row-1 self-stretch shrink-0" data-name="Container">
      <div aria-hidden="true" className="absolute border-2 border-[rgba(0,194,255,0.19)] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <div className="content-stretch flex flex-col gap-[24px] items-start pb-[2px] pt-[34px] px-[34px] relative size-full">
        <Heading22 />
        <Container148 />
      </div>
    </div>
  );
}

function Container132() {
  return (
    <div className="gap-x-[32px] gap-y-[32px] grid grid-cols-[repeat(2,minmax(0,1fr))] grid-rows-[repeat(1,minmax(0,1fr))] h-[372px] relative shrink-0 w-full" data-name="Container">
      <Container133 />
      <Container147 />
    </div>
  );
}

function Heading23() {
  return (
    <div className="h-[28px] relative shrink-0 w-full" data-name="Heading 3">
      <p className="absolute font-['IBM_Plex_Sans_Arabic:Bold',sans-serif] leading-[28px] left-[314.5px] not-italic text-[#0e1320] text-[20px] top-0" dir="auto">
        الميزانية مقابل الإيرادات
      </p>
    </div>
  );
}

function Group84() {
  return (
    <div className="absolute inset-[2%_1%_14%_13.03%]" data-name="Group">
      <div className="absolute inset-[-0.24%_0]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 428.57 210.999">
          <g id="Group">
            <path d="M0 210.499H428.57" id="Vector" stroke="var(--stroke-0, #E2E8F0)" strokeDasharray="3 3" strokeWidth="0.998998" />
            <path d="M0 157.999H428.57" id="Vector_2" stroke="var(--stroke-0, #E2E8F0)" strokeDasharray="3 3" strokeWidth="0.998998" />
            <path d="M0 105.499H428.57" id="Vector_3" stroke="var(--stroke-0, #E2E8F0)" strokeDasharray="3 3" strokeWidth="0.998998" />
            <path d="M0 52.9994H428.57" id="Vector_4" stroke="var(--stroke-0, #E2E8F0)" strokeDasharray="3 3" strokeWidth="0.998998" />
            <path d="M5.7488e-06 0.499499H428.57" id="Vector_5" stroke="var(--stroke-0, #E2E8F0)" strokeDasharray="3 3" strokeWidth="0.998998" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Group85() {
  return (
    <div className="absolute inset-[2%_1%_14%_13.03%]" data-name="Group">
      <div className="absolute inset-[0_-0.12%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 429.569 210">
          <g id="Group">
            <path d="M71.9279 0V210" id="Vector" stroke="var(--stroke-0, #E2E8F0)" strokeDasharray="3 3" strokeWidth="0.998998" />
            <path d="M214.785 0V210" id="Vector_2" stroke="var(--stroke-0, #E2E8F0)" strokeDasharray="3 3" strokeWidth="0.998998" />
            <path d="M357.641 0V210" id="Vector_3" stroke="var(--stroke-0, #E2E8F0)" strokeDasharray="3 3" strokeWidth="0.998998" />
            <path d="M0.499499 0.000127208V210" id="Vector_4" stroke="var(--stroke-0, #E2E8F0)" strokeDasharray="3 3" strokeWidth="0.998998" />
            <path d="M429.07 0V210" id="Vector_5" stroke="var(--stroke-0, #E2E8F0)" strokeDasharray="3 3" strokeWidth="0.998998" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Group83() {
  return (
    <div className="absolute contents inset-[2%_1%_14%_13.03%]" data-name="Group">
      <Group84 />
      <Group85 />
    </div>
  );
}

function Group88() {
  return (
    <div className="absolute contents inset-[86%_66.62%_6.19%_21.34%]" data-name="Group">
      <div className="absolute inset-[86%_72.65%_11.6%_27.35%]" data-name="Vector">
        <div className="absolute inset-[0_-0.5px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 0.998998 6">
            <path d="M0.499499 6V0" id="Vector" stroke="var(--stroke-0, #64748B)" strokeWidth="0.998998" />
          </svg>
        </div>
      </div>
      <p className="absolute font-['Inter:Regular','Noto_Sans_Arabic:Regular',sans-serif] font-normal inset-[87.81%_66.62%_6.19%_21.34%] leading-[normal] not-italic text-[#64748b] text-[11.988px] text-center whitespace-pre-wrap" dir="auto">
        مايو
      </p>
    </div>
  );
}

function Group89() {
  return (
    <div className="absolute contents inset-[86%_39.17%_6.19%_51.2%]" data-name="Group">
      <div className="absolute inset-[86%_43.99%_11.6%_56.01%]" data-name="Vector">
        <div className="absolute inset-[0_-0.5px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 0.998998 6">
            <path d="M0.499499 6V0" id="Vector" stroke="var(--stroke-0, #64748B)" strokeWidth="0.998998" />
          </svg>
        </div>
      </div>
      <p className="absolute font-['Inter:Regular','Noto_Sans_Arabic:Regular',sans-serif] font-normal inset-[87.81%_39.17%_6.19%_51.2%] leading-[normal] not-italic text-[#64748b] text-[11.988px] text-center whitespace-pre-wrap" dir="auto">
        يونيو
      </p>
    </div>
  );
}

function Group90() {
  return (
    <div className="absolute contents inset-[86%_9.31%_6.19%_78.66%]" data-name="Group">
      <div className="absolute inset-[86%_15.33%_11.6%_84.67%]" data-name="Vector">
        <div className="absolute inset-[0_-0.5px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 0.998998 6">
            <path d="M0.499499 6V0" id="Vector" stroke="var(--stroke-0, #64748B)" strokeWidth="0.998998" />
          </svg>
        </div>
      </div>
      <p className="absolute font-['Inter:Regular','Noto_Sans_Arabic:Regular',sans-serif] font-normal inset-[87.81%_9.31%_6.19%_78.66%] leading-[normal] not-italic text-[#64748b] text-[11.988px] text-center whitespace-pre-wrap" dir="auto">
        يوليو
      </p>
    </div>
  );
}

function Group87() {
  return (
    <div className="absolute contents inset-[86%_9.31%_6.19%_21.34%]" data-name="Group">
      <Group88 />
      <Group89 />
      <Group90 />
    </div>
  );
}

function Group86() {
  return (
    <div className="absolute contents inset-[86%_1%_6.19%_13.03%]" data-name="Group">
      <div className="absolute inset-[86%_1%_14%_13.03%]" data-name="Vector">
        <div className="absolute inset-[-0.5px_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 428.57 0.998998">
            <path d="M0 0.499499H428.57" id="Vector" stroke="var(--stroke-0, #64748B)" strokeWidth="0.998998" />
          </svg>
        </div>
      </div>
      <Group87 />
    </div>
  );
}

function Group93() {
  return (
    <div className="absolute contents inset-[82.9%_86.97%_11.09%_9.82%]" data-name="Group">
      <div className="absolute inset-[86%_86.97%_14%_11.82%]" data-name="Vector">
        <div className="absolute inset-[-0.5px_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5.99399 0.998998">
            <path d="M0 0.499499H5.99399" id="Vector" stroke="var(--stroke-0, #64748B)" strokeWidth="0.998998" />
          </svg>
        </div>
      </div>
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal inset-[82.9%_88.58%_11.09%_9.82%] leading-[normal] not-italic text-[#64748b] text-[11.988px] text-right whitespace-pre-wrap">0</p>
    </div>
  );
}

function Group94() {
  return (
    <div className="absolute contents inset-[61.9%_86.97%_32.09%_4.01%]" data-name="Group">
      <div className="absolute inset-[65%_86.97%_35%_11.82%]" data-name="Vector">
        <div className="absolute inset-[-0.5px_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5.99399 0.998998">
            <path d="M0 0.499499H5.99399" id="Vector" stroke="var(--stroke-0, #64748B)" strokeWidth="0.998998" />
          </svg>
        </div>
      </div>
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal inset-[61.9%_88.57%_32.09%_4.01%] leading-[normal] not-italic text-[#64748b] text-[11.988px] text-right whitespace-pre-wrap">75000</p>
    </div>
  );
}

function Group95() {
  return (
    <div className="absolute contents inset-[40.9%_86.97%_53.09%_2.81%]" data-name="Group">
      <div className="absolute inset-[44%_86.97%_56%_11.82%]" data-name="Vector">
        <div className="absolute inset-[-0.5px_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5.99399 0.998998">
            <path d="M0 0.499499H5.99399" id="Vector" stroke="var(--stroke-0, #64748B)" strokeWidth="0.998998" />
          </svg>
        </div>
      </div>
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal inset-[40.9%_88.57%_53.09%_2.81%] leading-[normal] not-italic text-[#64748b] text-[11.988px] text-right whitespace-pre-wrap">150000</p>
    </div>
  );
}

function Group96() {
  return (
    <div className="absolute contents inset-[19.9%_86.97%_74.09%_2.4%]" data-name="Group">
      <div className="absolute inset-[23%_86.97%_77%_11.82%]" data-name="Vector">
        <div className="absolute inset-[-0.5px_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5.99399 0.998998">
            <path d="M0 0.499499H5.99399" id="Vector" stroke="var(--stroke-0, #64748B)" strokeWidth="0.998998" />
          </svg>
        </div>
      </div>
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal inset-[19.9%_88.57%_74.09%_2.4%] leading-[normal] not-italic text-[#64748b] text-[11.988px] text-right whitespace-pre-wrap">225000</p>
    </div>
  );
}

function Group97() {
  return (
    <div className="absolute contents inset-[0.5%_86.97%_93.49%_2.2%]" data-name="Group">
      <div className="absolute inset-[2%_86.97%_98%_11.82%]" data-name="Vector">
        <div className="absolute inset-[-0.5px_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5.99399 0.998998">
            <path d="M0 0.499499H5.99399" id="Vector" stroke="var(--stroke-0, #64748B)" strokeWidth="0.998998" />
          </svg>
        </div>
      </div>
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal inset-[0.5%_88.57%_93.49%_2.2%] leading-[normal] not-italic text-[#64748b] text-[11.988px] text-right whitespace-pre-wrap">300000</p>
    </div>
  );
}

function Group92() {
  return (
    <div className="absolute contents inset-[0.5%_86.97%_11.09%_2.2%]" data-name="Group">
      <Group93 />
      <Group94 />
      <Group95 />
      <Group96 />
      <Group97 />
    </div>
  );
}

function Group91() {
  return (
    <div className="absolute contents inset-[0.5%_86.97%_11.09%_2.2%]" data-name="Group">
      <div className="absolute inset-[2%_86.97%_14%_13.03%]" data-name="Vector">
        <div className="absolute inset-[0_-0.5px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 0.998998 210">
            <path d="M0.499499 0V210" id="Vector" stroke="var(--stroke-0, #64748B)" strokeWidth="0.998998" />
          </svg>
        </div>
      </div>
      <Group92 />
    </div>
  );
}

function Group101() {
  return (
    <div className="absolute inset-[58%_73.09%_14%_15.89%]" data-name="Group">
      <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 54.9449 70">
        <g id="Group">
          <path d={svgPaths.p39c69000} fill="var(--fill-0, #94A3B8)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group102() {
  return (
    <div className="absolute inset-[58%_44.43%_14%_44.55%]" data-name="Group">
      <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 54.9449 70">
        <g id="Group">
          <path d={svgPaths.p39c69000} fill="var(--fill-0, #94A3B8)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group103() {
  return (
    <div className="absolute inset-[58%_15.77%_14%_73.21%]" data-name="Group">
      <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 54.9449 70">
        <g id="Group">
          <path d={svgPaths.p2a5bad00} fill="var(--fill-0, #94A3B8)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group100() {
  return (
    <div className="absolute contents inset-[58%_15.77%_14%_15.89%]" data-name="Group">
      <Group101 />
      <Group102 />
      <Group103 />
    </div>
  );
}

function Group99() {
  return (
    <div className="absolute contents inset-[58%_15.77%_14%_15.89%]" data-name="Group">
      <Group100 />
    </div>
  );
}

function Group98() {
  return (
    <div className="absolute contents inset-[58%_15.77%_14%_15.89%]" data-name="Group">
      <Group99 />
    </div>
  );
}

function Group107() {
  return (
    <div className="absolute inset-[44.84%_61.26%_14%_27.72%]" data-name="Group">
      <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 54.9449 102.9">
        <g id="Group">
          <path d={svgPaths.p15495c00} fill="var(--fill-0, #00C2FF)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group108() {
  return (
    <div className="absolute inset-[25.1%_32.61%_14%_56.37%]" data-name="Group">
      <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 54.9449 152.25">
        <g id="Group">
          <path d={svgPaths.p37458e00} fill="var(--fill-0, #00C2FF)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group109() {
  return (
    <div className="absolute inset-[5.36%_3.95%_14%_85.03%]" data-name="Group">
      <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 54.9449 201.6">
        <g id="Group">
          <path d={svgPaths.p37956800} fill="var(--fill-0, #00C2FF)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group106() {
  return (
    <div className="absolute contents inset-[5.36%_3.95%_14%_27.72%]" data-name="Group">
      <Group107 />
      <Group108 />
      <Group109 />
    </div>
  );
}

function Group105() {
  return (
    <div className="absolute contents inset-[5.36%_3.95%_14%_27.72%]" data-name="Group">
      <Group106 />
    </div>
  );
}

function Group104() {
  return (
    <div className="absolute contents inset-[5.36%_3.95%_14%_27.72%]" data-name="Group">
      <Group105 />
    </div>
  );
}

function Surface4() {
  return (
    <div className="absolute h-[250px] left-0 overflow-clip top-0 w-[498.5px]" data-name="Surface">
      <Group83 />
      <Group86 />
      <Group91 />
      <Group98 />
      <Group104 />
    </div>
  );
}

function BarChart1() {
  return (
    <div className="h-[250px] relative shrink-0 w-full" data-name="BarChart">
      <Surface4 />
    </div>
  );
}

function Container156() {
  return (
    <div className="bg-white col-1 justify-self-stretch relative rounded-[16px] row-1 self-stretch shrink-0" data-name="Container">
      <div aria-hidden="true" className="absolute border-2 border-[rgba(0,194,255,0.19)] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <div className="content-stretch flex flex-col gap-[24px] items-start pb-[2px] pt-[34px] px-[34px] relative size-full">
        <Heading23 />
        <BarChart1 />
      </div>
    </div>
  );
}

function Heading24() {
  return (
    <div className="h-[28px] relative shrink-0 w-full" data-name="Heading 3">
      <p className="absolute font-['IBM_Plex_Sans_Arabic:Bold',sans-serif] leading-[28px] left-[400.4px] not-italic text-[#0e1320] text-[20px] top-0" dir="auto">
        نمو الإيرادات
      </p>
    </div>
  );
}

function Group111() {
  return (
    <div className="absolute inset-[2%_1%_14%_13.03%]" data-name="Group">
      <div className="absolute inset-[-0.24%_0]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 428.57 210.999">
          <g id="Group">
            <path d="M0 210.499H428.57" id="Vector" stroke="var(--stroke-0, #E2E8F0)" strokeDasharray="3 3" strokeWidth="0.998998" />
            <path d="M0 157.999H428.57" id="Vector_2" stroke="var(--stroke-0, #E2E8F0)" strokeDasharray="3 3" strokeWidth="0.998998" />
            <path d="M0 105.499H428.57" id="Vector_3" stroke="var(--stroke-0, #E2E8F0)" strokeDasharray="3 3" strokeWidth="0.998998" />
            <path d="M0 52.9994H428.57" id="Vector_4" stroke="var(--stroke-0, #E2E8F0)" strokeDasharray="3 3" strokeWidth="0.998998" />
            <path d="M5.7488e-06 0.499499H428.57" id="Vector_5" stroke="var(--stroke-0, #E2E8F0)" strokeDasharray="3 3" strokeWidth="0.998998" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Group112() {
  return (
    <div className="absolute inset-[2%_1%_14%_13.03%]" data-name="Group">
      <div className="absolute inset-[0_-0.12%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 429.569 210">
          <g id="Group">
            <path d="M0.499499 0.000127208V210" id="Vector" stroke="var(--stroke-0, #E2E8F0)" strokeDasharray="3 3" strokeWidth="0.998998" />
            <path d="M143.356 0V210" id="Vector_2" stroke="var(--stroke-0, #E2E8F0)" strokeDasharray="3 3" strokeWidth="0.998998" />
            <path d="M286.213 0V210" id="Vector_3" stroke="var(--stroke-0, #E2E8F0)" strokeDasharray="3 3" strokeWidth="0.998998" />
            <path d="M429.07 0V210" id="Vector_4" stroke="var(--stroke-0, #E2E8F0)" strokeDasharray="3 3" strokeWidth="0.998998" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Group110() {
  return (
    <div className="absolute contents inset-[2%_1%_14%_13.03%]" data-name="Group">
      <Group111 />
      <Group112 />
    </div>
  );
}

function Group115() {
  return (
    <div className="absolute contents inset-[86%_77.64%_6.19%_3.71%]" data-name="Group">
      <div className="absolute inset-[86%_86.97%_11.6%_13.03%]" data-name="Vector">
        <div className="absolute inset-[0_-0.5px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 0.998998 6">
            <path d="M0.499499 6V0" id="Vector" stroke="var(--stroke-0, #64748B)" strokeWidth="0.998998" />
          </svg>
        </div>
      </div>
      <p className="absolute font-['Inter:Regular','Noto_Sans_Arabic:Regular',sans-serif] font-normal inset-[87.81%_77.64%_6.19%_3.71%] leading-[normal] not-italic text-[#64748b] text-[11.988px] text-center whitespace-pre-wrap" dir="auto">
        الأسبوع 1
      </p>
    </div>
  );
}

function Group116() {
  return (
    <div className="absolute contents inset-[86%_48.78%_6.19%_32.16%]" data-name="Group">
      <div className="absolute inset-[86%_58.32%_11.6%_41.68%]" data-name="Vector">
        <div className="absolute inset-[0_-0.5px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 0.998998 6">
            <path d="M0.499499 6V0" id="Vector" stroke="var(--stroke-0, #64748B)" strokeWidth="0.998998" />
          </svg>
        </div>
      </div>
      <p className="absolute font-['Inter:Regular','Noto_Sans_Arabic:Regular',sans-serif] font-normal inset-[87.81%_48.78%_6.19%_32.16%] leading-[normal] not-italic text-[#64748b] text-[11.988px] text-center whitespace-pre-wrap" dir="auto">
        الأسبوع 8
      </p>
    </div>
  );
}

function Group117() {
  return (
    <div className="absolute contents inset-[86%_19.62%_6.19%_60.32%]" data-name="Group">
      <div className="absolute inset-[86%_29.66%_11.6%_70.34%]" data-name="Vector">
        <div className="absolute inset-[0_-0.5px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 0.998998 6">
            <path d="M0.499499 6V0" id="Vector" stroke="var(--stroke-0, #64748B)" strokeWidth="0.998998" />
          </svg>
        </div>
      </div>
      <p className="absolute font-['Inter:Regular','Noto_Sans_Arabic:Regular',sans-serif] font-normal inset-[87.81%_19.62%_6.19%_60.32%] leading-[normal] not-italic text-[#64748b] text-[11.988px] text-center whitespace-pre-wrap" dir="auto">
        الأسبوع 16
      </p>
    </div>
  );
}

function Group118() {
  return (
    <div className="absolute contents inset-[86%_-4.96%_6.19%_84.49%]" data-name="Group">
      <div className="absolute inset-[86%_1%_11.6%_99%]" data-name="Vector">
        <div className="absolute inset-[0_-0.5px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 0.998998 6">
            <path d="M0.499499 6V0" id="Vector" stroke="var(--stroke-0, #64748B)" strokeWidth="0.998998" />
          </svg>
        </div>
      </div>
      <p className="absolute font-['Inter:Regular','Noto_Sans_Arabic:Regular',sans-serif] font-normal inset-[87.81%_-4.96%_6.19%_84.49%] leading-[normal] not-italic text-[#64748b] text-[11.988px] text-center whitespace-pre-wrap" dir="auto">
        الأسبوع 24
      </p>
    </div>
  );
}

function Group114() {
  return (
    <div className="absolute contents inset-[86%_-4.96%_6.19%_3.71%]" data-name="Group">
      <Group115 />
      <Group116 />
      <Group117 />
      <Group118 />
    </div>
  );
}

function Group113() {
  return (
    <div className="absolute contents inset-[86%_-4.96%_6.19%_3.71%]" data-name="Group">
      <div className="absolute inset-[86%_1%_14%_13.03%]" data-name="Vector">
        <div className="absolute inset-[-0.5px_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 428.57 0.998998">
            <path d="M0 0.499499H428.57" id="Vector" stroke="var(--stroke-0, #64748B)" strokeWidth="0.998998" />
          </svg>
        </div>
      </div>
      <Group114 />
    </div>
  );
}

function Group121() {
  return (
    <div className="absolute contents inset-[82.9%_86.97%_11.09%_9.82%]" data-name="Group">
      <div className="absolute inset-[86%_86.97%_14%_11.82%]" data-name="Vector">
        <div className="absolute inset-[-0.5px_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5.99399 0.998998">
            <path d="M0 0.499499H5.99399" id="Vector" stroke="var(--stroke-0, #64748B)" strokeWidth="0.998998" />
          </svg>
        </div>
      </div>
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal inset-[82.9%_88.58%_11.09%_9.82%] leading-[normal] not-italic text-[#64748b] text-[11.988px] text-right whitespace-pre-wrap">0</p>
    </div>
  );
}

function Group122() {
  return (
    <div className="absolute contents inset-[61.9%_86.97%_32.09%_3.81%]" data-name="Group">
      <div className="absolute inset-[65%_86.97%_35%_11.82%]" data-name="Vector">
        <div className="absolute inset-[-0.5px_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5.99399 0.998998">
            <path d="M0 0.499499H5.99399" id="Vector" stroke="var(--stroke-0, #64748B)" strokeWidth="0.998998" />
          </svg>
        </div>
      </div>
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal inset-[61.9%_88.57%_32.09%_3.81%] leading-[normal] not-italic text-[#64748b] text-[11.988px] text-right whitespace-pre-wrap">55000</p>
    </div>
  );
}

function Group123() {
  return (
    <div className="absolute contents inset-[40.9%_86.97%_53.09%_3.01%]" data-name="Group">
      <div className="absolute inset-[44%_86.97%_56%_11.82%]" data-name="Vector">
        <div className="absolute inset-[-0.5px_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5.99399 0.998998">
            <path d="M0 0.499499H5.99399" id="Vector" stroke="var(--stroke-0, #64748B)" strokeWidth="0.998998" />
          </svg>
        </div>
      </div>
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal inset-[40.9%_88.57%_53.09%_3.01%] leading-[normal] not-italic text-[#64748b] text-[11.988px] text-right whitespace-pre-wrap">110000</p>
    </div>
  );
}

function Group124() {
  return (
    <div className="absolute contents inset-[19.9%_86.97%_74.09%_2.81%]" data-name="Group">
      <div className="absolute inset-[23%_86.97%_77%_11.82%]" data-name="Vector">
        <div className="absolute inset-[-0.5px_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5.99399 0.998998">
            <path d="M0 0.499499H5.99399" id="Vector" stroke="var(--stroke-0, #64748B)" strokeWidth="0.998998" />
          </svg>
        </div>
      </div>
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal inset-[19.9%_88.57%_74.09%_2.81%] leading-[normal] not-italic text-[#64748b] text-[11.988px] text-right whitespace-pre-wrap">165000</p>
    </div>
  );
}

function Group125() {
  return (
    <div className="absolute contents inset-[0.5%_86.97%_93.49%_2.4%]" data-name="Group">
      <div className="absolute inset-[2%_86.97%_98%_11.82%]" data-name="Vector">
        <div className="absolute inset-[-0.5px_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5.99399 0.998998">
            <path d="M0 0.499499H5.99399" id="Vector" stroke="var(--stroke-0, #64748B)" strokeWidth="0.998998" />
          </svg>
        </div>
      </div>
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal inset-[0.5%_88.57%_93.49%_2.4%] leading-[normal] not-italic text-[#64748b] text-[11.988px] text-right whitespace-pre-wrap">220000</p>
    </div>
  );
}

function Group120() {
  return (
    <div className="absolute contents inset-[0.5%_86.97%_11.09%_2.4%]" data-name="Group">
      <Group121 />
      <Group122 />
      <Group123 />
      <Group124 />
      <Group125 />
    </div>
  );
}

function Group119() {
  return (
    <div className="absolute contents inset-[0.5%_86.97%_11.09%_2.4%]" data-name="Group">
      <div className="absolute inset-[2%_86.97%_14%_13.03%]" data-name="Vector">
        <div className="absolute inset-[0_-0.5px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 0.998998 210">
            <path d="M0.499499 0V210" id="Vector" stroke="var(--stroke-0, #64748B)" strokeWidth="0.998998" />
          </svg>
        </div>
      </div>
      <Group120 />
    </div>
  );
}

function Group129() {
  return (
    <div className="absolute inset-[2.95%_1%_14%_13.03%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px_-7.386px] mask-size-[428.57px_218px]" data-name="Group" style={{ maskImage: `url('${imgGroup}')` }}>
      <div className="absolute inset-[-0.65%_-0.16%_0_0]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 429.654 208.954">
          <g id="Group">
            <path d={svgPaths.p20762700} fill="url(#paint0_linear_2_3734)" id="Vector" />
            <path d={svgPaths.p2c374fb0} id="Vector_2" stroke="var(--stroke-0, #00C2FF)" strokeWidth="2.99699" />
          </g>
          <defs>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_2_3734" x1="0.413808" x2="0.413808" y1="1.34013" y2="208.954">
              <stop offset="0.05" stopColor="#00C2FF" stopOpacity="0.3" />
              <stop offset="0.95" stopColor="#00C2FF" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </div>
  );
}

function Group128() {
  return (
    <div className="absolute contents inset-[2.95%_1%_14%_13.03%]" data-name="Group">
      <Group129 />
    </div>
  );
}

function ClipPathGroup2() {
  return (
    <div className="absolute contents inset-[0_1%_12.8%_13.03%]" data-name="Clip path group">
      <Group128 />
    </div>
  );
}

function Group127() {
  return (
    <div className="absolute contents inset-[0_1%_12.8%_13.03%]" data-name="Group">
      <ClipPathGroup2 />
    </div>
  );
}

function Group126() {
  return (
    <div className="absolute contents inset-[0_1%_12.8%_13.03%]" data-name="Group">
      <Group127 />
    </div>
  );
}

function Surface5() {
  return (
    <div className="absolute h-[250px] left-0 overflow-clip top-0 w-[498.5px]" data-name="Surface">
      <Group110 />
      <Group113 />
      <Group119 />
      <Group126 />
    </div>
  );
}

function AreaChart2() {
  return (
    <div className="h-[250px] relative shrink-0 w-full" data-name="AreaChart">
      <Surface5 />
    </div>
  );
}

function Container157() {
  return (
    <div className="bg-white col-2 justify-self-stretch relative rounded-[16px] row-1 self-stretch shrink-0" data-name="Container">
      <div aria-hidden="true" className="absolute border-2 border-[rgba(0,194,255,0.19)] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <div className="content-stretch flex flex-col gap-[24px] items-start pb-[2px] pt-[34px] px-[34px] relative size-full">
        <Heading24 />
        <AreaChart2 />
      </div>
    </div>
  );
}

function Container155() {
  return (
    <div className="gap-x-[32px] gap-y-[32px] grid grid-cols-[repeat(2,minmax(0,1fr))] grid-rows-[repeat(1,minmax(0,1fr))] h-[370px] relative shrink-0 w-full" data-name="Container">
      <Container156 />
      <Container157 />
    </div>
  );
}

function Heading25() {
  return (
    <div className="h-[28px] relative shrink-0 w-full" data-name="Heading 3">
      <p className="absolute font-['IBM_Plex_Sans_Arabic:Bold','Noto_Sans:Bold',sans-serif] leading-[28px] left-[290.07px] text-[#0e1320] text-[20px] top-0 w-[209px] whitespace-pre-wrap" dir="auto" style={{ fontVariationSettings: "\'CTGR\' 0, \'wdth\' 100, \'wght\' 700" }}>
        العائد على الاستثمار (ROI)
      </p>
    </div>
  );
}

function Group131() {
  return (
    <div className="absolute inset-[2%_1%_14%_13.03%]" data-name="Group">
      <div className="absolute inset-[-0.24%_0]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 428.57 210.999">
          <g id="Group">
            <path d="M0 210.499H428.57" id="Vector" stroke="var(--stroke-0, #E2E8F0)" strokeDasharray="3 3" strokeWidth="0.998998" />
            <path d="M0 157.999H428.57" id="Vector_2" stroke="var(--stroke-0, #E2E8F0)" strokeDasharray="3 3" strokeWidth="0.998998" />
            <path d="M0 105.499H428.57" id="Vector_3" stroke="var(--stroke-0, #E2E8F0)" strokeDasharray="3 3" strokeWidth="0.998998" />
            <path d="M0 52.9994H428.57" id="Vector_4" stroke="var(--stroke-0, #E2E8F0)" strokeDasharray="3 3" strokeWidth="0.998998" />
            <path d="M5.7488e-06 0.499499H428.57" id="Vector_5" stroke="var(--stroke-0, #E2E8F0)" strokeDasharray="3 3" strokeWidth="0.998998" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Group132() {
  return (
    <div className="absolute inset-[2%_1%_14%_13.03%]" data-name="Group">
      <div className="absolute inset-[0_-0.12%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 429.569 210">
          <g id="Group">
            <path d="M0.499499 0.000127208V210" id="Vector" stroke="var(--stroke-0, #E2E8F0)" strokeDasharray="3 3" strokeWidth="0.998998" />
            <path d="M214.785 0V210" id="Vector_2" stroke="var(--stroke-0, #E2E8F0)" strokeDasharray="3 3" strokeWidth="0.998998" />
            <path d="M429.07 0V210" id="Vector_3" stroke="var(--stroke-0, #E2E8F0)" strokeDasharray="3 3" strokeWidth="0.998998" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Group130() {
  return (
    <div className="absolute contents inset-[2%_1%_14%_13.03%]" data-name="Group">
      <Group131 />
      <Group132 />
    </div>
  );
}

function Group135() {
  return (
    <div className="absolute contents inset-[86%_80.95%_6.19%_7.01%]" data-name="Group">
      <div className="absolute inset-[86%_86.97%_11.6%_13.03%]" data-name="Vector">
        <div className="absolute inset-[0_-0.5px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 0.998998 6">
            <path d="M0.499499 6V0" id="Vector" stroke="var(--stroke-0, #64748B)" strokeWidth="0.998998" />
          </svg>
        </div>
      </div>
      <p className="absolute font-['Inter:Regular','Noto_Sans_Arabic:Regular',sans-serif] font-normal inset-[87.81%_80.95%_6.19%_7.01%] leading-[normal] not-italic text-[#64748b] text-[11.988px] text-center whitespace-pre-wrap" dir="auto">
        أبريل
      </p>
    </div>
  );
}

function Group136() {
  return (
    <div className="absolute contents inset-[86%_39.17%_6.19%_51.2%]" data-name="Group">
      <div className="absolute inset-[86%_43.99%_11.6%_56.01%]" data-name="Vector">
        <div className="absolute inset-[0_-0.5px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 0.998998 6">
            <path d="M0.499499 6V0" id="Vector" stroke="var(--stroke-0, #64748B)" strokeWidth="0.998998" />
          </svg>
        </div>
      </div>
      <p className="absolute font-['Inter:Regular','Noto_Sans_Arabic:Regular',sans-serif] font-normal inset-[87.81%_39.17%_6.19%_51.2%] leading-[normal] not-italic text-[#64748b] text-[11.988px] text-center whitespace-pre-wrap" dir="auto">
        مايو
      </p>
    </div>
  );
}

function Group137() {
  return (
    <div className="absolute contents inset-[86%_-3.85%_6.19%_91.82%]" data-name="Group">
      <div className="absolute inset-[86%_1%_11.6%_99%]" data-name="Vector">
        <div className="absolute inset-[0_-0.5px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 0.998998 6">
            <path d="M0.499499 6V0" id="Vector" stroke="var(--stroke-0, #64748B)" strokeWidth="0.998998" />
          </svg>
        </div>
      </div>
      <p className="absolute font-['Inter:Regular','Noto_Sans_Arabic:Regular',sans-serif] font-normal inset-[87.81%_-3.85%_6.19%_91.82%] leading-[normal] not-italic text-[#64748b] text-[11.988px] text-center whitespace-pre-wrap" dir="auto">
        يونيو
      </p>
    </div>
  );
}

function Group134() {
  return (
    <div className="absolute contents inset-[86%_-3.85%_6.19%_7.01%]" data-name="Group">
      <Group135 />
      <Group136 />
      <Group137 />
    </div>
  );
}

function Group133() {
  return (
    <div className="absolute contents inset-[86%_-3.85%_6.19%_7.01%]" data-name="Group">
      <div className="absolute inset-[86%_1%_14%_13.03%]" data-name="Vector">
        <div className="absolute inset-[-0.5px_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 428.57 0.998998">
            <path d="M0 0.499499H428.57" id="Vector" stroke="var(--stroke-0, #64748B)" strokeWidth="0.998998" />
          </svg>
        </div>
      </div>
      <Group134 />
    </div>
  );
}

function Group140() {
  return (
    <div className="absolute contents inset-[82.9%_86.97%_11.09%_9.82%]" data-name="Group">
      <div className="absolute inset-[86%_86.97%_14%_11.82%]" data-name="Vector">
        <div className="absolute inset-[-0.5px_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5.99399 0.998998">
            <path d="M0 0.499499H5.99399" id="Vector" stroke="var(--stroke-0, #64748B)" strokeWidth="0.998998" />
          </svg>
        </div>
      </div>
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal inset-[82.9%_88.58%_11.09%_9.82%] leading-[normal] not-italic text-[#64748b] text-[11.988px] text-right whitespace-pre-wrap">0</p>
    </div>
  );
}

function Group141() {
  return (
    <div className="absolute contents inset-[61.9%_86.97%_32.09%_8.42%]" data-name="Group">
      <div className="absolute inset-[65%_86.97%_35%_11.82%]" data-name="Vector">
        <div className="absolute inset-[-0.5px_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5.99399 0.998998">
            <path d="M0 0.499499H5.99399" id="Vector" stroke="var(--stroke-0, #64748B)" strokeWidth="0.998998" />
          </svg>
        </div>
      </div>
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal inset-[61.9%_88.57%_32.09%_8.42%] leading-[normal] not-italic text-[#64748b] text-[11.988px] text-right whitespace-pre-wrap">75</p>
    </div>
  );
}

function Group142() {
  return (
    <div className="absolute contents inset-[40.9%_86.97%_53.09%_7.21%]" data-name="Group">
      <div className="absolute inset-[44%_86.97%_56%_11.82%]" data-name="Vector">
        <div className="absolute inset-[-0.5px_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5.99399 0.998998">
            <path d="M0 0.499499H5.99399" id="Vector" stroke="var(--stroke-0, #64748B)" strokeWidth="0.998998" />
          </svg>
        </div>
      </div>
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal inset-[40.9%_88.57%_53.09%_7.21%] leading-[normal] not-italic text-[#64748b] text-[11.988px] text-right whitespace-pre-wrap">150</p>
    </div>
  );
}

function Group143() {
  return (
    <div className="absolute contents inset-[19.9%_86.97%_74.09%_7.01%]" data-name="Group">
      <div className="absolute inset-[23%_86.97%_77%_11.82%]" data-name="Vector">
        <div className="absolute inset-[-0.5px_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5.99399 0.998998">
            <path d="M0 0.499499H5.99399" id="Vector" stroke="var(--stroke-0, #64748B)" strokeWidth="0.998998" />
          </svg>
        </div>
      </div>
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal inset-[19.9%_88.57%_74.09%_7.01%] leading-[normal] not-italic text-[#64748b] text-[11.988px] text-right whitespace-pre-wrap">225</p>
    </div>
  );
}

function Group144() {
  return (
    <div className="absolute contents inset-[0.5%_86.97%_93.49%_6.81%]" data-name="Group">
      <div className="absolute inset-[2%_86.97%_98%_11.82%]" data-name="Vector">
        <div className="absolute inset-[-0.5px_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5.99399 0.998998">
            <path d="M0 0.499499H5.99399" id="Vector" stroke="var(--stroke-0, #64748B)" strokeWidth="0.998998" />
          </svg>
        </div>
      </div>
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal inset-[0.5%_88.57%_93.49%_6.81%] leading-[normal] not-italic text-[#64748b] text-[11.988px] text-right whitespace-pre-wrap">300</p>
    </div>
  );
}

function Group139() {
  return (
    <div className="absolute contents inset-[0.5%_86.97%_11.09%_6.81%]" data-name="Group">
      <Group140 />
      <Group141 />
      <Group142 />
      <Group143 />
      <Group144 />
    </div>
  );
}

function Group138() {
  return (
    <div className="absolute contents inset-[0.5%_86.97%_11.09%_6.81%]" data-name="Group">
      <div className="absolute inset-[2%_86.97%_14%_13.03%]" data-name="Vector">
        <div className="absolute inset-[0_-0.5px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 0.998998 210">
            <path d="M0.499499 0V210" id="Vector" stroke="var(--stroke-0, #64748B)" strokeWidth="0.998998" />
          </svg>
        </div>
      </div>
      <Group139 />
    </div>
  );
}

function Group148() {
  return (
    <div className="absolute inset-[5.36%_1%_14%_13.03%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px_-13.4px] mask-size-[428.57px_218px]" data-name="Group" style={{ maskImage: `url('${imgGroup}')` }}>
      <div className="absolute inset-[-0.72%_0_0_0]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 429.243 203.061">
          <g id="Group">
            <path d={svgPaths.p2aecd100} fill="url(#paint0_linear_2_3730)" id="Vector" />
            <path d={svgPaths.p18392d60} id="Vector_2" stroke="var(--stroke-0, #22C55E)" strokeWidth="2.99699" />
          </g>
          <defs>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_2_3730" x1="0.339696" x2="0.339696" y1="1.46105" y2="203.061">
              <stop offset="0.05" stopColor="#22C55E" stopOpacity="0.3" />
              <stop offset="0.95" stopColor="#22C55E" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </div>
  );
}

function Group147() {
  return (
    <div className="absolute contents inset-[5.36%_1%_14%_13.03%]" data-name="Group">
      <Group148 />
    </div>
  );
}

function ClipPathGroup3() {
  return (
    <div className="absolute contents inset-[0_1%_12.8%_13.03%]" data-name="Clip path group">
      <Group147 />
    </div>
  );
}

function Group146() {
  return (
    <div className="absolute contents inset-[0_1%_12.8%_13.03%]" data-name="Group">
      <ClipPathGroup3 />
    </div>
  );
}

function Group145() {
  return (
    <div className="absolute contents inset-[0_1%_12.8%_13.03%]" data-name="Group">
      <Group146 />
    </div>
  );
}

function Surface6() {
  return (
    <div className="absolute h-[250px] left-0 overflow-clip top-0 w-[498.5px]" data-name="Surface">
      <Group130 />
      <Group133 />
      <Group138 />
      <Group145 />
    </div>
  );
}

function AreaChart3() {
  return (
    <div className="h-[250px] relative shrink-0 w-full" data-name="AreaChart">
      <Surface6 />
    </div>
  );
}

function Container159() {
  return (
    <div className="bg-white col-1 justify-self-stretch relative rounded-[16px] row-1 self-stretch shrink-0" data-name="Container">
      <div aria-hidden="true" className="absolute border-2 border-[rgba(0,194,255,0.19)] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <div className="content-stretch flex flex-col gap-[24px] items-start pb-[2px] pt-[34px] px-[34px] relative size-full">
        <Heading25 />
        <AreaChart3 />
      </div>
    </div>
  );
}

function Heading26() {
  return (
    <div className="h-[28px] relative shrink-0 w-full" data-name="Heading 3">
      <p className="absolute font-['IBM_Plex_Sans_Arabic:Bold',sans-serif] leading-[28px] left-[385.94px] not-italic text-[#0e1320] text-[20px] top-0" dir="auto">
        معدل التحويل
      </p>
    </div>
  );
}

function Group150() {
  return (
    <div className="absolute inset-[2%_1%_14%_13.03%]" data-name="Group">
      <div className="absolute inset-[-0.24%_0]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 428.57 210.999">
          <g id="Group">
            <path d="M0 210.499H428.57" id="Vector" stroke="var(--stroke-0, #E2E8F0)" strokeDasharray="3 3" strokeWidth="0.998998" />
            <path d="M0 157.999H428.57" id="Vector_2" stroke="var(--stroke-0, #E2E8F0)" strokeDasharray="3 3" strokeWidth="0.998998" />
            <path d="M0 105.499H428.57" id="Vector_3" stroke="var(--stroke-0, #E2E8F0)" strokeDasharray="3 3" strokeWidth="0.998998" />
            <path d="M0 52.9994H428.57" id="Vector_4" stroke="var(--stroke-0, #E2E8F0)" strokeDasharray="3 3" strokeWidth="0.998998" />
            <path d="M5.7488e-06 0.499499H428.57" id="Vector_5" stroke="var(--stroke-0, #E2E8F0)" strokeDasharray="3 3" strokeWidth="0.998998" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Group151() {
  return (
    <div className="absolute inset-[2%_1%_14%_13.03%]" data-name="Group">
      <div className="absolute inset-[0_-0.12%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 429.569 210">
          <g id="Group">
            <path d="M0.499499 0.000127208V210" id="Vector" stroke="var(--stroke-0, #E2E8F0)" strokeDasharray="3 3" strokeWidth="0.998998" />
            <path d="M143.356 0V210" id="Vector_2" stroke="var(--stroke-0, #E2E8F0)" strokeDasharray="3 3" strokeWidth="0.998998" />
            <path d="M286.213 0V210" id="Vector_3" stroke="var(--stroke-0, #E2E8F0)" strokeDasharray="3 3" strokeWidth="0.998998" />
            <path d="M429.07 0V210" id="Vector_4" stroke="var(--stroke-0, #E2E8F0)" strokeDasharray="3 3" strokeWidth="0.998998" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Group149() {
  return (
    <div className="absolute contents inset-[2%_1%_14%_13.03%]" data-name="Group">
      <Group150 />
      <Group151 />
    </div>
  );
}

function Group154() {
  return (
    <div className="absolute contents inset-[86%_77.64%_6.19%_3.71%]" data-name="Group">
      <div className="absolute inset-[86%_86.97%_11.6%_13.03%]" data-name="Vector">
        <div className="absolute inset-[0_-0.5px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 0.998998 6">
            <path d="M0.499499 6V0" id="Vector" stroke="var(--stroke-0, #64748B)" strokeWidth="0.998998" />
          </svg>
        </div>
      </div>
      <p className="absolute font-['Inter:Regular','Noto_Sans_Arabic:Regular',sans-serif] font-normal inset-[87.81%_77.64%_6.19%_3.71%] leading-[normal] not-italic text-[#64748b] text-[11.988px] text-center whitespace-pre-wrap" dir="auto">
        الأسبوع 1
      </p>
    </div>
  );
}

function Group155() {
  return (
    <div className="absolute contents inset-[86%_48.78%_6.19%_32.16%]" data-name="Group">
      <div className="absolute inset-[86%_58.32%_11.6%_41.68%]" data-name="Vector">
        <div className="absolute inset-[0_-0.5px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 0.998998 6">
            <path d="M0.499499 6V0" id="Vector" stroke="var(--stroke-0, #64748B)" strokeWidth="0.998998" />
          </svg>
        </div>
      </div>
      <p className="absolute font-['Inter:Regular','Noto_Sans_Arabic:Regular',sans-serif] font-normal inset-[87.81%_48.78%_6.19%_32.16%] leading-[normal] not-italic text-[#64748b] text-[11.988px] text-center whitespace-pre-wrap" dir="auto">
        الأسبوع 8
      </p>
    </div>
  );
}

function Group156() {
  return (
    <div className="absolute contents inset-[86%_19.62%_6.19%_60.32%]" data-name="Group">
      <div className="absolute inset-[86%_29.66%_11.6%_70.34%]" data-name="Vector">
        <div className="absolute inset-[0_-0.5px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 0.998998 6">
            <path d="M0.499499 6V0" id="Vector" stroke="var(--stroke-0, #64748B)" strokeWidth="0.998998" />
          </svg>
        </div>
      </div>
      <p className="absolute font-['Inter:Regular','Noto_Sans_Arabic:Regular',sans-serif] font-normal inset-[87.81%_19.62%_6.19%_60.32%] leading-[normal] not-italic text-[#64748b] text-[11.988px] text-center whitespace-pre-wrap" dir="auto">
        الأسبوع 16
      </p>
    </div>
  );
}

function Group157() {
  return (
    <div className="absolute contents inset-[86%_-4.96%_6.19%_84.49%]" data-name="Group">
      <div className="absolute inset-[86%_1%_11.6%_99%]" data-name="Vector">
        <div className="absolute inset-[0_-0.5px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 0.998998 6">
            <path d="M0.499499 6V0" id="Vector" stroke="var(--stroke-0, #64748B)" strokeWidth="0.998998" />
          </svg>
        </div>
      </div>
      <p className="absolute font-['Inter:Regular','Noto_Sans_Arabic:Regular',sans-serif] font-normal inset-[87.81%_-4.96%_6.19%_84.49%] leading-[normal] not-italic text-[#64748b] text-[11.988px] text-center whitespace-pre-wrap" dir="auto">
        الأسبوع 24
      </p>
    </div>
  );
}

function Group153() {
  return (
    <div className="absolute contents inset-[86%_-4.96%_6.19%_3.71%]" data-name="Group">
      <Group154 />
      <Group155 />
      <Group156 />
      <Group157 />
    </div>
  );
}

function Group152() {
  return (
    <div className="absolute contents inset-[86%_-4.96%_6.19%_3.71%]" data-name="Group">
      <div className="absolute inset-[86%_1%_14%_13.03%]" data-name="Vector">
        <div className="absolute inset-[-0.5px_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 428.57 0.998998">
            <path d="M0 0.499499H428.57" id="Vector" stroke="var(--stroke-0, #64748B)" strokeWidth="0.998998" />
          </svg>
        </div>
      </div>
      <Group153 />
    </div>
  );
}

function Group160() {
  return (
    <div className="absolute contents inset-[82.9%_86.97%_11.09%_9.82%]" data-name="Group">
      <div className="absolute inset-[86%_86.97%_14%_11.82%]" data-name="Vector">
        <div className="absolute inset-[-0.5px_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5.99399 0.998998">
            <path d="M0 0.499499H5.99399" id="Vector" stroke="var(--stroke-0, #64748B)" strokeWidth="0.998998" />
          </svg>
        </div>
      </div>
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal inset-[82.9%_88.58%_11.09%_9.82%] leading-[normal] not-italic text-[#64748b] text-[11.988px] text-right whitespace-pre-wrap">0</p>
    </div>
  );
}

function Group161() {
  return (
    <div className="absolute contents inset-[61.9%_86.97%_32.09%_9.82%]" data-name="Group">
      <div className="absolute inset-[65%_86.97%_35%_11.82%]" data-name="Vector">
        <div className="absolute inset-[-0.5px_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5.99399 0.998998">
            <path d="M0 0.499499H5.99399" id="Vector" stroke="var(--stroke-0, #64748B)" strokeWidth="0.998998" />
          </svg>
        </div>
      </div>
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal inset-[61.9%_88.58%_32.09%_9.82%] leading-[normal] not-italic text-[#64748b] text-[11.988px] text-right whitespace-pre-wrap">3</p>
    </div>
  );
}

function Group162() {
  return (
    <div className="absolute contents inset-[40.9%_86.97%_53.09%_9.82%]" data-name="Group">
      <div className="absolute inset-[44%_86.97%_56%_11.82%]" data-name="Vector">
        <div className="absolute inset-[-0.5px_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5.99399 0.998998">
            <path d="M0 0.499499H5.99399" id="Vector" stroke="var(--stroke-0, #64748B)" strokeWidth="0.998998" />
          </svg>
        </div>
      </div>
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal inset-[40.9%_88.58%_53.09%_9.82%] leading-[normal] not-italic text-[#64748b] text-[11.988px] text-right whitespace-pre-wrap">6</p>
    </div>
  );
}

function Group163() {
  return (
    <div className="absolute contents inset-[19.9%_86.97%_74.09%_9.82%]" data-name="Group">
      <div className="absolute inset-[23%_86.97%_77%_11.82%]" data-name="Vector">
        <div className="absolute inset-[-0.5px_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5.99399 0.998998">
            <path d="M0 0.499499H5.99399" id="Vector" stroke="var(--stroke-0, #64748B)" strokeWidth="0.998998" />
          </svg>
        </div>
      </div>
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal inset-[19.9%_88.58%_74.09%_9.82%] leading-[normal] not-italic text-[#64748b] text-[11.988px] text-right whitespace-pre-wrap">9</p>
    </div>
  );
}

function Group164() {
  return (
    <div className="absolute contents inset-[0.5%_86.97%_93.49%_8.82%]" data-name="Group">
      <div className="absolute inset-[2%_86.97%_98%_11.82%]" data-name="Vector">
        <div className="absolute inset-[-0.5px_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5.99399 0.998998">
            <path d="M0 0.499499H5.99399" id="Vector" stroke="var(--stroke-0, #64748B)" strokeWidth="0.998998" />
          </svg>
        </div>
      </div>
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal inset-[0.5%_88.57%_93.49%_8.82%] leading-[normal] not-italic text-[#64748b] text-[11.988px] text-right whitespace-pre-wrap">12</p>
    </div>
  );
}

function Group159() {
  return (
    <div className="absolute contents inset-[0.5%_86.97%_11.09%_8.82%]" data-name="Group">
      <Group160 />
      <Group161 />
      <Group162 />
      <Group163 />
      <Group164 />
    </div>
  );
}

function Group158() {
  return (
    <div className="absolute contents inset-[0.5%_86.97%_11.09%_8.82%]" data-name="Group">
      <div className="absolute inset-[2%_86.97%_14%_13.03%]" data-name="Vector">
        <div className="absolute inset-[0_-0.5px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 0.998998 210">
            <path d="M0.499499 0V210" id="Vector" stroke="var(--stroke-0, #64748B)" strokeWidth="0.998998" />
          </svg>
        </div>
      </div>
      <Group159 />
    </div>
  );
}

function Group165() {
  return (
    <div className="absolute inset-[24.5%_0_41.4%_12.02%]" data-name="Group">
      <div className="absolute inset-[-1.76%_-0.34%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 441.557 88.247">
          <g id="Group">
            <path d={svgPaths.p2fef7280} id="Vector" stroke="var(--stroke-0, #00C2FF)" strokeWidth="2.99699" />
            <g id="Group_2">
              <path d={svgPaths.p1f997c0} fill="var(--fill-0, #00C2FF)" id="Vector_2" stroke="var(--stroke-0, #00C2FF)" strokeWidth="2.99699" />
              <path d={svgPaths.p3a206f80} fill="var(--fill-0, #00C2FF)" id="Vector_3" stroke="var(--stroke-0, #00C2FF)" strokeWidth="2.99699" />
              <path d={svgPaths.p329f0200} fill="var(--fill-0, #00C2FF)" id="Vector_4" stroke="var(--stroke-0, #00C2FF)" strokeWidth="2.99699" />
              <path d={svgPaths.p37dcc900} fill="var(--fill-0, #00C2FF)" id="Vector_5" stroke="var(--stroke-0, #00C2FF)" strokeWidth="2.99699" />
            </g>
          </g>
        </svg>
      </div>
    </div>
  );
}

function Surface7() {
  return (
    <div className="absolute h-[250px] left-0 overflow-clip top-0 w-[498.5px]" data-name="Surface">
      <Group149 />
      <Group152 />
      <Group158 />
      <Group165 />
    </div>
  );
}

function LineChart1() {
  return (
    <div className="h-[250px] relative shrink-0 w-full" data-name="LineChart">
      <Surface7 />
    </div>
  );
}

function Container160() {
  return (
    <div className="bg-white col-2 justify-self-stretch relative rounded-[16px] row-1 self-stretch shrink-0" data-name="Container">
      <div aria-hidden="true" className="absolute border-2 border-[rgba(0,194,255,0.19)] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <div className="content-stretch flex flex-col gap-[24px] items-start pb-[2px] pt-[34px] px-[34px] relative size-full">
        <Heading26 />
        <LineChart1 />
      </div>
    </div>
  );
}

function Container158() {
  return (
    <div className="gap-x-[32px] gap-y-[32px] grid grid-cols-[repeat(2,minmax(0,1fr))] grid-rows-[repeat(1,minmax(0,1fr))] h-[370px] relative shrink-0 w-full" data-name="Container">
      <Container159 />
      <Container160 />
    </div>
  );
}

function QuarterSection1() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col gap-[48px] h-[1990px] items-start left-0 pt-[80px] px-[80px] top-0 w-[1325px]" data-name="QuarterSection">
      <Container110 />
      <Container117 />
      <Container132 />
      <Container155 />
      <Container158 />
    </div>
  );
}

function Frame5() {
  return (
    <div className="h-[1990px] relative shrink-0 w-full">
      <QuarterSection1 />
    </div>
  );
}

function Heading27() {
  return (
    <div className="h-[48px] relative shrink-0 w-full" data-name="Heading 2">
      <p className="absolute font-['IBM_Plex_Sans_Arabic:Bold',sans-serif] leading-[48px] left-0 not-italic text-[#0e1320] text-[48px] top-0" dir="auto">
        الولاء وتكرار الزيارة
      </p>
    </div>
  );
}

function Paragraph51() {
  return (
    <div className="h-[28px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['IBM_Plex_Sans_Arabic:Regular','Noto_Sans:Regular',sans-serif] leading-[28px] left-[201.62px] text-[#64748b] text-[20px] top-0 w-[134px] whitespace-pre-wrap" dir="auto" style={{ fontVariationSettings: "\'CTGR\' 0, \'wdth\' 100, \'wght\' 400" }}>
        الشهور 7 – 8 – 9
      </p>
    </div>
  );
}

function Container163() {
  return (
    <div className="h-[84px] relative shrink-0 w-[334.805px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[8px] items-start relative size-full">
        <Heading27 />
        <Paragraph51 />
      </div>
    </div>
  );
}

function Container164() {
  return (
    <div className="relative rounded-[16px] shadow-[0px_8px_32px_0px_rgba(245,158,11,0.25)] shrink-0 size-[80px]" data-name="Container" style={{ backgroundImage: "linear-gradient(135deg, rgb(245, 158, 11) 0%, rgba(245, 158, 11, 0.8) 100%)" }}>
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <p className="font-['IBM_Plex_Sans_Arabic:Bold','Noto_Sans:Bold',sans-serif] leading-[36px] relative shrink-0 text-[30px] text-white" style={{ fontVariationSettings: "\'CTGR\' 0, \'wdth\' 100, \'wght\' 700" }}>
          Q3
        </p>
      </div>
    </div>
  );
}

function Container162() {
  return (
    <div className="h-[84px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[16px] items-center pl-[734.195px] relative size-full">
          <Container163 />
          <Container164 />
        </div>
      </div>
    </div>
  );
}

function Icon31() {
  return (
    <div className="absolute left-[1073px] size-[24px] top-[4px]" data-name="Icon">
      <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon">
          <path d={svgPaths.p13253c0} id="Vector" stroke="var(--stroke-0, #F59E0B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d="M16 7H22V13" id="Vector_2" stroke="var(--stroke-0, #F59E0B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Paragraph52() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['IBM_Plex_Sans_Arabic:SemiBold',sans-serif] leading-[20px] left-[244.09px] not-italic text-[#64748b] text-[14px] top-[-0.5px]" dir="auto">
        الهدف
      </p>
    </div>
  );
}

function Paragraph53() {
  return (
    <div className="h-[36px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['IBM_Plex_Sans_Arabic:Regular','Noto_Sans:Regular',sans-serif] leading-[36px] left-0 text-[#0e1320] text-[20px] top-0" dir="auto" style={{ fontVariationSettings: "\'CTGR\' 0, \'wdth\' 100, \'wght\' 400" }}>
        رفع قيمة العميل وتحويله إلى زائر متكرر.
      </p>
    </div>
  );
}

function Container167() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[8px] h-[64px] items-start left-[781.44px] top-0 w-[279.563px]" data-name="Container">
      <Paragraph52 />
      <Paragraph53 />
    </div>
  );
}

function Container166() {
  return (
    <div className="h-[64px] relative shrink-0 w-full" data-name="Container">
      <Icon31 />
      <Container167 />
    </div>
  );
}

function Container165() {
  return (
    <div className="bg-gradient-to-r from-white h-[132px] relative rounded-[16px] shrink-0 to-[#f9fafb] w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-2 border-[rgba(245,158,11,0.25)] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <div className="content-stretch flex flex-col items-start pb-[2px] pt-[34px] px-[34px] relative size-full">
        <Container166 />
      </div>
    </div>
  );
}

function Container161() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] h-[232px] items-start relative shrink-0 w-full" data-name="Container">
      <Container162 />
      <Container165 />
    </div>
  );
}

function Heading28() {
  return (
    <div className="h-[32px] relative shrink-0 w-full" data-name="Heading 3">
      <p className="absolute font-['IBM_Plex_Sans_Arabic:Bold',sans-serif] leading-[32px] left-[435.88px] not-italic text-[#0e1320] text-[24px] top-0" dir="auto">
        التنفيذ
      </p>
    </div>
  );
}

function Icon32() {
  return (
    <div className="absolute left-[478.5px] size-[20px] top-[2px]" data-name="Icon">
      <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g clipPath="url(#clip0_2_3780)" id="Icon">
          <path d={svgPaths.p14d24500} id="Vector" stroke="var(--stroke-0, #F59E0B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p3e012060} id="Vector_2" stroke="var(--stroke-0, #F59E0B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
        <defs>
          <clipPath id="clip0_2_3780">
            <rect fill="white" height="20" width="20" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Paragraph54() {
  return (
    <div className="absolute h-[25.594px] left-[352.75px] top-0 w-[113.75px]" data-name="Paragraph">
      <p className="absolute font-['IBM_Plex_Sans_Arabic:Regular',sans-serif] leading-[25.6px] left-0 not-italic text-[#475569] text-[16px] top-[-0.5px]" dir="auto">
        إطلاق برامج عضوية
      </p>
    </div>
  );
}

function Container171() {
  return (
    <div className="h-[25.594px] relative shrink-0 w-full" data-name="Container">
      <Icon32 />
      <Paragraph54 />
    </div>
  );
}

function Icon33() {
  return (
    <div className="absolute left-[478.5px] size-[20px] top-[2px]" data-name="Icon">
      <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g clipPath="url(#clip0_2_3780)" id="Icon">
          <path d={svgPaths.p14d24500} id="Vector" stroke="var(--stroke-0, #F59E0B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p3e012060} id="Vector_2" stroke="var(--stroke-0, #F59E0B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
        <defs>
          <clipPath id="clip0_2_3780">
            <rect fill="white" height="20" width="20" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Paragraph55() {
  return (
    <div className="absolute h-[25.594px] left-[344.34px] top-0 w-[122.164px]" data-name="Paragraph">
      <p className="absolute font-['IBM_Plex_Sans_Arabic:Regular',sans-serif] leading-[25.6px] left-0 not-italic text-[#475569] text-[16px] top-[-0.5px]" dir="auto">
        عروض خاصة للعودة
      </p>
    </div>
  );
}

function Container172() {
  return (
    <div className="h-[25.594px] relative shrink-0 w-full" data-name="Container">
      <Icon33 />
      <Paragraph55 />
    </div>
  );
}

function Icon34() {
  return (
    <div className="absolute left-[478.5px] size-[20px] top-[2px]" data-name="Icon">
      <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g clipPath="url(#clip0_2_3780)" id="Icon">
          <path d={svgPaths.p14d24500} id="Vector" stroke="var(--stroke-0, #F59E0B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p3e012060} id="Vector_2" stroke="var(--stroke-0, #F59E0B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
        <defs>
          <clipPath id="clip0_2_3780">
            <rect fill="white" height="20" width="20" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Paragraph56() {
  return (
    <div className="absolute h-[25.594px] left-[303.76px] top-0 w-[162.742px]" data-name="Paragraph">
      <p className="absolute font-['IBM_Plex_Sans_Arabic:Regular',sans-serif] leading-[25.6px] left-0 not-italic text-[#475569] text-[16px] top-[-0.5px]" dir="auto">
        رسائل مخصصة عبر التطبيق
      </p>
    </div>
  );
}

function Container173() {
  return (
    <div className="h-[25.594px] relative shrink-0 w-full" data-name="Container">
      <Icon34 />
      <Paragraph56 />
    </div>
  );
}

function Icon35() {
  return (
    <div className="absolute left-[478.5px] size-[20px] top-[2px]" data-name="Icon">
      <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g clipPath="url(#clip0_2_3780)" id="Icon">
          <path d={svgPaths.p14d24500} id="Vector" stroke="var(--stroke-0, #F59E0B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p3e012060} id="Vector_2" stroke="var(--stroke-0, #F59E0B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
        <defs>
          <clipPath id="clip0_2_3780">
            <rect fill="white" height="20" width="20" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Paragraph57() {
  return (
    <div className="absolute h-[25.594px] left-[358.61px] top-0 w-[107.891px]" data-name="Paragraph">
      <p className="absolute font-['IBM_Plex_Sans_Arabic:Regular',sans-serif] leading-[25.6px] left-0 not-italic text-[#475569] text-[16px] top-[-0.5px]" dir="auto">
        إدارة بيانات العملاء
      </p>
    </div>
  );
}

function Container174() {
  return (
    <div className="h-[25.594px] relative shrink-0 w-full" data-name="Container">
      <Icon35 />
      <Paragraph57 />
    </div>
  );
}

function Container170() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] h-[138.375px] items-start relative shrink-0 w-full" data-name="Container">
      <Container171 />
      <Container172 />
      <Container173 />
      <Container174 />
    </div>
  );
}

function Container169() {
  return (
    <div className="bg-white col-1 justify-self-stretch relative rounded-[16px] row-1 self-stretch shrink-0" data-name="Container">
      <div aria-hidden="true" className="absolute border-2 border-[rgba(245,158,11,0.19)] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <div className="content-stretch flex flex-col gap-[24px] items-start pb-[2px] pt-[34px] px-[34px] relative size-full">
        <Heading28 />
        <Container170 />
      </div>
    </div>
  );
}

function Heading29() {
  return (
    <div className="h-[32px] relative shrink-0 w-[75.625px]" data-name="Heading 3">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['IBM_Plex_Sans_Arabic:Bold',sans-serif] leading-[32px] left-0 not-italic text-[#0e1320] text-[24px] top-0" dir="auto">
          الميزانية
        </p>
      </div>
    </div>
  );
}

function Icon36() {
  return (
    <div className="relative shrink-0 size-[32px]" data-name="Icon">
      <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="Icon">
          <path d="M16 2.66667V29.3333" id="Vector" stroke="var(--stroke-0, #F59E0B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
          <path d={svgPaths.p30e9cc00} id="Vector_2" stroke="var(--stroke-0, #F59E0B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
        </g>
      </svg>
    </div>
  );
}

function Container176() {
  return (
    <div className="h-[32px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[12px] items-center pl-[378.875px] relative size-full">
          <Heading29 />
          <Icon36 />
        </div>
      </div>
    </div>
  );
}

function Text22() {
  return (
    <div className="h-[28px] relative shrink-0 w-[115.344px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['IBM_Plex_Sans_Arabic:SemiBold',sans-serif] leading-[28px] left-0 not-italic text-[#0e1320] text-[20px] top-0 w-[116px] whitespace-pre-wrap" dir="auto">
          100,000 ريال
        </p>
      </div>
    </div>
  );
}

function Text23() {
  return (
    <div className="h-[24px] relative shrink-0 w-[47.094px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['IBM_Plex_Sans_Arabic:Regular','Noto_Sans:Regular',sans-serif] leading-[24px] left-0 text-[#64748b] text-[16px] top-0 w-[48px] whitespace-pre-wrap" dir="auto" style={{ fontVariationSettings: "\'CTGR\' 0, \'wdth\' 100, \'wght\' 400" }}>
          الشهر 7
        </p>
      </div>
    </div>
  );
}

function Container178() {
  return (
    <div className="content-stretch flex h-[28px] items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Text22 />
      <Text23 />
    </div>
  );
}

function Text24() {
  return (
    <div className="h-[28px] relative shrink-0 w-[115.344px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['IBM_Plex_Sans_Arabic:SemiBold',sans-serif] leading-[28px] left-0 not-italic text-[#0e1320] text-[20px] top-0 w-[116px] whitespace-pre-wrap" dir="auto">
          100,000 ريال
        </p>
      </div>
    </div>
  );
}

function Text25() {
  return (
    <div className="h-[24px] relative shrink-0 w-[47.094px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['IBM_Plex_Sans_Arabic:Regular','Noto_Sans:Regular',sans-serif] leading-[24px] left-0 text-[#64748b] text-[16px] top-0 w-[48px] whitespace-pre-wrap" dir="auto" style={{ fontVariationSettings: "\'CTGR\' 0, \'wdth\' 100, \'wght\' 400" }}>
          الشهر 8
        </p>
      </div>
    </div>
  );
}

function Container179() {
  return (
    <div className="content-stretch flex h-[28px] items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Text24 />
      <Text25 />
    </div>
  );
}

function Text26() {
  return (
    <div className="h-[28px] relative shrink-0 w-[115.344px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['IBM_Plex_Sans_Arabic:SemiBold',sans-serif] leading-[28px] left-0 not-italic text-[#0e1320] text-[20px] top-0 w-[116px] whitespace-pre-wrap" dir="auto">
          100,000 ريال
        </p>
      </div>
    </div>
  );
}

function Text27() {
  return (
    <div className="h-[24px] relative shrink-0 w-[47.094px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['IBM_Plex_Sans_Arabic:Regular','Noto_Sans:Regular',sans-serif] leading-[24px] left-0 text-[#64748b] text-[16px] top-0 w-[48px] whitespace-pre-wrap" dir="auto" style={{ fontVariationSettings: "\'CTGR\' 0, \'wdth\' 100, \'wght\' 400" }}>
          الشهر 9
        </p>
      </div>
    </div>
  );
}

function Container180() {
  return (
    <div className="content-stretch flex h-[28px] items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Text26 />
      <Text27 />
    </div>
  );
}

function Text28() {
  return (
    <div className="h-[36px] relative shrink-0 w-[174.609px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['IBM_Plex_Sans_Arabic:Bold','Noto_Sans:Bold',sans-serif] leading-[36px] left-0 text-[#f59e0b] text-[30px] top-[0.5px] w-[175px] whitespace-pre-wrap" dir="auto" style={{ fontVariationSettings: "\'CTGR\' 0, \'wdth\' 100, \'wght\' 700" }}>
          300,000 ريال
        </p>
      </div>
    </div>
  );
}

function Text29() {
  return (
    <div className="h-[28px] relative shrink-0 w-[81.742px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['IBM_Plex_Sans_Arabic:SemiBold',sans-serif] leading-[28px] left-0 not-italic text-[#0e1320] text-[18px] top-[0.5px]" dir="auto">
          إجمالي الربع
        </p>
      </div>
    </div>
  );
}

function Container182() {
  return (
    <div className="content-stretch flex h-[36px] items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Text28 />
      <Text29 />
    </div>
  );
}

function Container181() {
  return (
    <div className="content-stretch flex flex-col h-[54px] items-start pt-[18px] relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[rgba(245,158,11,0.13)] border-solid border-t-2 inset-0 pointer-events-none" />
      <Container182 />
    </div>
  );
}

function Container177() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] h-[186px] items-start relative shrink-0 w-full" data-name="Container">
      <Container178 />
      <Container179 />
      <Container180 />
      <Container181 />
    </div>
  );
}

function Container175() {
  return (
    <div className="bg-white col-2 justify-self-stretch relative rounded-[16px] row-1 self-stretch shrink-0" data-name="Container">
      <div aria-hidden="true" className="absolute border-2 border-[rgba(245,158,11,0.19)] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <div className="content-stretch flex flex-col gap-[24px] items-start pb-[2px] pt-[34px] px-[34px] relative size-full">
        <Container176 />
        <Container177 />
      </div>
    </div>
  );
}

function Container168() {
  return (
    <div className="gap-x-[32px] gap-y-[32px] grid grid-cols-[repeat(2,minmax(0,1fr))] grid-rows-[repeat(1,minmax(0,1fr))] h-[310px] relative shrink-0 w-full" data-name="Container">
      <Container169 />
      <Container175 />
    </div>
  );
}

function Heading30() {
  return (
    <div className="h-[32px] relative shrink-0 w-[94.539px]" data-name="Heading 3">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['IBM_Plex_Sans_Arabic:Bold',sans-serif] leading-[32px] left-[-38.96px] not-italic text-[#0e1320] text-[24px] top-0" dir="auto">
          الجدول الزمني
        </p>
      </div>
    </div>
  );
}

function Icon37() {
  return (
    <div className="relative shrink-0 size-[32px]" data-name="Icon">
      <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="Icon">
          <path d="M10.6667 2.66667V8" id="Vector" stroke="var(--stroke-0, #F59E0B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
          <path d="M21.3333 2.66667V8" id="Vector_2" stroke="var(--stroke-0, #F59E0B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
          <path d={svgPaths.p8d31b00} id="Vector_3" stroke="var(--stroke-0, #F59E0B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
          <path d="M4 13.3333H28" id="Vector_4" stroke="var(--stroke-0, #F59E0B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
        </g>
      </svg>
    </div>
  );
}

function Container185() {
  return (
    <div className="h-[32px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[12px] items-center pl-[359.961px] relative size-full">
          <Heading30 />
          <Icon37 />
        </div>
      </div>
    </div>
  );
}

function Paragraph58() {
  return (
    <div className="h-[28px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['IBM_Plex_Sans_Arabic:SemiBold',sans-serif] leading-[28px] left-[385.14px] not-italic text-[#0e1320] text-[18px] top-[0.5px]" dir="auto">
        الشهر السابع
      </p>
    </div>
  );
}

function Paragraph59() {
  return (
    <div className="content-stretch flex h-[24px] items-start relative shrink-0 w-full" data-name="Paragraph">
      <p className="flex-[1_0_0] font-['IBM_Plex_Sans_Arabic:Regular',sans-serif] leading-[24px] min-h-px min-w-px not-italic relative text-[#64748b] text-[16px] text-right whitespace-pre-wrap" dir="auto">
        إطلاق برامج الولاء
      </p>
    </div>
  );
}

function Container188() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[4px] h-[56px] items-start left-0 top-[-6px] w-[474.5px]" data-name="Container">
      <Paragraph58 />
      <Paragraph59 />
    </div>
  );
}

function Container189() {
  return <div className="absolute bg-[#f59e0b] left-[483.5px] rounded-[16777200px] size-[16px] top-0" data-name="Container" />;
}

function Container190() {
  return <div className="absolute bg-[rgba(245,158,11,0.19)] h-[56px] left-[490.5px] top-[16px] w-[2px]" data-name="Container" />;
}

function Container187() {
  return (
    <div className="h-[56px] relative shrink-0 w-full" data-name="Container">
      <Container188 />
      <Container189 />
      <Container190 />
    </div>
  );
}

function Paragraph60() {
  return (
    <div className="h-[28px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['IBM_Plex_Sans_Arabic:SemiBold',sans-serif] leading-[28px] left-[388.13px] not-italic text-[#0e1320] text-[18px] top-[0.5px]" dir="auto">
        الشهر الثامن
      </p>
    </div>
  );
}

function Paragraph61() {
  return (
    <div className="content-stretch flex h-[24px] items-start relative shrink-0 w-full" data-name="Paragraph">
      <p className="flex-[1_0_0] font-['IBM_Plex_Sans_Arabic:Regular',sans-serif] leading-[24px] min-h-px min-w-px not-italic relative text-[#64748b] text-[16px] text-right whitespace-pre-wrap" dir="auto">
        تعزيز التفاعل المتكرر
      </p>
    </div>
  );
}

function Container192() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[4px] h-[56px] items-start left-0 top-[-6px] w-[474.5px]" data-name="Container">
      <Paragraph60 />
      <Paragraph61 />
    </div>
  );
}

function Container193() {
  return <div className="absolute bg-[#f59e0b] left-[483.5px] rounded-[16777200px] size-[16px] top-0" data-name="Container" />;
}

function Container194() {
  return <div className="absolute bg-[rgba(245,158,11,0.19)] h-[56px] left-[490.5px] top-[16px] w-[2px]" data-name="Container" />;
}

function Container191() {
  return (
    <div className="h-[56px] relative shrink-0 w-full" data-name="Container">
      <Container192 />
      <Container193 />
      <Container194 />
    </div>
  );
}

function Paragraph62() {
  return (
    <div className="h-[28px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['IBM_Plex_Sans_Arabic:SemiBold',sans-serif] leading-[28px] left-[385.95px] not-italic text-[#0e1320] text-[18px] top-[0.5px]" dir="auto">
        الشهر التاسع
      </p>
    </div>
  );
}

function Paragraph63() {
  return (
    <div className="content-stretch flex h-[24px] items-start relative shrink-0 w-full" data-name="Paragraph">
      <p className="flex-[1_0_0] font-['IBM_Plex_Sans_Arabic:Regular',sans-serif] leading-[24px] min-h-px min-w-px not-italic relative text-[#64748b] text-[16px] text-right whitespace-pre-wrap" dir="auto">
        تحسين قيمة العميل
      </p>
    </div>
  );
}

function Container196() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[4px] h-[56px] items-start left-0 top-[-6px] w-[474.5px]" data-name="Container">
      <Paragraph62 />
      <Paragraph63 />
    </div>
  );
}

function Container197() {
  return <div className="absolute bg-[#f59e0b] left-[483.5px] rounded-[16777200px] size-[16px] top-0" data-name="Container" />;
}

function Container195() {
  return (
    <div className="h-[56px] relative shrink-0 w-full" data-name="Container">
      <Container196 />
      <Container197 />
    </div>
  );
}

function Container186() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] h-[200px] items-start relative shrink-0 w-full" data-name="Container">
      <Container187 />
      <Container191 />
      <Container195 />
    </div>
  );
}

function Container184() {
  return (
    <div className="bg-white col-1 justify-self-stretch relative rounded-[16px] row-1 self-stretch shrink-0" data-name="Container">
      <div aria-hidden="true" className="absolute border-2 border-[rgba(245,158,11,0.19)] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <div className="content-stretch flex flex-col gap-[24px] items-start pb-[2px] pt-[34px] px-[34px] relative size-full">
        <Container185 />
        <Container186 />
      </div>
    </div>
  );
}

function Heading31() {
  return (
    <div className="h-[32px] relative shrink-0 w-full" data-name="Heading 3">
      <p className="absolute font-['IBM_Plex_Sans_Arabic:Bold',sans-serif] leading-[32px] left-[369.84px] not-italic text-[#0e1320] text-[24px] top-0" dir="auto">
        مؤشرات الأداء
      </p>
    </div>
  );
}

function Paragraph64() {
  return (
    <div className="h-[24px] relative shrink-0 w-[209.211px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['IBM_Plex_Sans_Arabic:Medium',sans-serif] leading-[24px] left-[-5.79px] not-italic text-[#0e1320] text-[16px] top-0 w-[216px] whitespace-pre-wrap" dir="auto">
          زيادة معدل تكرار الزيارة بنسبة 30%
        </p>
      </div>
    </div>
  );
}

function Icon38() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d={svgPaths.p3c797180} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p3ac0b600} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Container201() {
  return (
    <div className="bg-[#f59e0b] relative rounded-[10px] shrink-0 size-[40px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Icon38 />
      </div>
    </div>
  );
}

function Container200() {
  return (
    <div className="bg-[rgba(245,158,11,0.06)] h-[72px] relative rounded-[14px] shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[12px] items-center pl-[221.289px] relative size-full">
          <Paragraph64 />
          <Container201 />
        </div>
      </div>
    </div>
  );
}

function Paragraph65() {
  return (
    <div className="h-[24px] relative shrink-0 w-[217.445px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['IBM_Plex_Sans_Arabic:Medium',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#0e1320] text-[16px]" dir="auto">
          زيادة قيمة العميل على المدى الطويل
        </p>
      </div>
    </div>
  );
}

function Icon39() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d={svgPaths.p3c797180} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p3ac0b600} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Container203() {
  return (
    <div className="bg-[#f59e0b] relative rounded-[10px] shrink-0 size-[40px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Icon39 />
      </div>
    </div>
  );
}

function Container202() {
  return (
    <div className="bg-[rgba(245,158,11,0.06)] h-[72px] relative rounded-[14px] shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[12px] items-center pl-[213.055px] relative size-full">
          <Paragraph65 />
          <Container203 />
        </div>
      </div>
    </div>
  );
}

function Container199() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] h-[160px] items-start relative shrink-0 w-full" data-name="Container">
      <Container200 />
      <Container202 />
    </div>
  );
}

function Container198() {
  return (
    <div className="bg-white col-2 justify-self-stretch relative rounded-[16px] row-1 self-stretch shrink-0" data-name="Container">
      <div aria-hidden="true" className="absolute border-2 border-[rgba(245,158,11,0.19)] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <div className="content-stretch flex flex-col gap-[24px] items-start pb-[2px] pt-[34px] px-[34px] relative size-full">
        <Heading31 />
        <Container199 />
      </div>
    </div>
  );
}

function Container183() {
  return (
    <div className="gap-x-[32px] gap-y-[32px] grid grid-cols-[repeat(2,minmax(0,1fr))] grid-rows-[repeat(1,minmax(0,1fr))] h-[324px] relative shrink-0 w-full" data-name="Container">
      <Container184 />
      <Container198 />
    </div>
  );
}

function Heading32() {
  return (
    <div className="h-[28px] relative shrink-0 w-full" data-name="Heading 3">
      <p className="absolute font-['IBM_Plex_Sans_Arabic:Bold','Noto_Sans:Bold',sans-serif] leading-[28px] left-[116.53px] text-[#0e1320] text-[20px] top-0 w-[382px] whitespace-pre-wrap" dir="auto" style={{ fontVariationSettings: "\'CTGR\' 0, \'wdth\' 100, \'wght\' 700" }}>
        قيمة العميل (LTV) مقابل تكلفة الاكتساب (CAC)
      </p>
    </div>
  );
}

function Group167() {
  return (
    <div className="absolute inset-[2%_1%_14%_13.03%]" data-name="Group">
      <div className="absolute inset-[-0.24%_0]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 428.57 210.999">
          <g id="Group">
            <path d="M0 210.499H428.57" id="Vector" stroke="var(--stroke-0, #E2E8F0)" strokeDasharray="3 3" strokeWidth="0.998998" />
            <path d="M0 157.999H428.57" id="Vector_2" stroke="var(--stroke-0, #E2E8F0)" strokeDasharray="3 3" strokeWidth="0.998998" />
            <path d="M0 105.499H428.57" id="Vector_3" stroke="var(--stroke-0, #E2E8F0)" strokeDasharray="3 3" strokeWidth="0.998998" />
            <path d="M0 52.9994H428.57" id="Vector_4" stroke="var(--stroke-0, #E2E8F0)" strokeDasharray="3 3" strokeWidth="0.998998" />
            <path d="M5.7488e-06 0.499499H428.57" id="Vector_5" stroke="var(--stroke-0, #E2E8F0)" strokeDasharray="3 3" strokeWidth="0.998998" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Group168() {
  return (
    <div className="absolute inset-[2%_1%_14%_13.03%]" data-name="Group">
      <div className="absolute inset-[0_-0.12%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 429.569 210">
          <g id="Group">
            <path d="M71.9279 0V210" id="Vector" stroke="var(--stroke-0, #E2E8F0)" strokeDasharray="3 3" strokeWidth="0.998998" />
            <path d="M214.785 0V210" id="Vector_2" stroke="var(--stroke-0, #E2E8F0)" strokeDasharray="3 3" strokeWidth="0.998998" />
            <path d="M357.641 0V210" id="Vector_3" stroke="var(--stroke-0, #E2E8F0)" strokeDasharray="3 3" strokeWidth="0.998998" />
            <path d="M0.499499 0.000127208V210" id="Vector_4" stroke="var(--stroke-0, #E2E8F0)" strokeDasharray="3 3" strokeWidth="0.998998" />
            <path d="M429.07 0V210" id="Vector_5" stroke="var(--stroke-0, #E2E8F0)" strokeDasharray="3 3" strokeWidth="0.998998" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Group166() {
  return (
    <div className="absolute contents inset-[2%_1%_14%_13.03%]" data-name="Group">
      <Group167 />
      <Group168 />
    </div>
  );
}

function Group171() {
  return (
    <div className="absolute contents inset-[86%_66.62%_6.19%_21.34%]" data-name="Group">
      <div className="absolute inset-[86%_72.65%_11.6%_27.35%]" data-name="Vector">
        <div className="absolute inset-[0_-0.5px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 0.998998 6">
            <path d="M0.499499 6V0" id="Vector" stroke="var(--stroke-0, #64748B)" strokeWidth="0.998998" />
          </svg>
        </div>
      </div>
      <p className="absolute font-['Inter:Regular','Noto_Sans_Arabic:Regular',sans-serif] font-normal inset-[87.81%_66.62%_6.19%_21.34%] leading-[normal] not-italic text-[#64748b] text-[11.988px] text-center whitespace-pre-wrap" dir="auto">
        أغسطس
      </p>
    </div>
  );
}

function Group172() {
  return (
    <div className="absolute bottom-[6.19%] contents left-1/2 right-[37.96%] top-[86%]" data-name="Group">
      <div className="absolute inset-[86%_43.99%_11.6%_56.01%]" data-name="Vector">
        <div className="absolute inset-[0_-0.5px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 0.998998 6">
            <path d="M0.499499 6V0" id="Vector" stroke="var(--stroke-0, #64748B)" strokeWidth="0.998998" />
          </svg>
        </div>
      </div>
      <p className="absolute bottom-[6.19%] font-['Inter:Regular','Noto_Sans_Arabic:Regular',sans-serif] font-normal leading-[normal] left-1/2 not-italic right-[37.96%] text-[#64748b] text-[11.988px] text-center top-[87.81%] whitespace-pre-wrap" dir="auto">
        سبتمبر
      </p>
    </div>
  );
}

function Group173() {
  return (
    <div className="absolute contents inset-[86%_8.1%_6.19%_77.45%]" data-name="Group">
      <div className="absolute inset-[86%_15.33%_11.6%_84.67%]" data-name="Vector">
        <div className="absolute inset-[0_-0.5px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 0.998998 6">
            <path d="M0.499499 6V0" id="Vector" stroke="var(--stroke-0, #64748B)" strokeWidth="0.998998" />
          </svg>
        </div>
      </div>
      <p className="absolute font-['Inter:Regular','Noto_Sans_Arabic:Regular',sans-serif] font-normal inset-[87.81%_8.1%_6.19%_77.45%] leading-[normal] not-italic text-[#64748b] text-[11.988px] text-center whitespace-pre-wrap" dir="auto">
        أكتوبر
      </p>
    </div>
  );
}

function Group170() {
  return (
    <div className="absolute contents inset-[86%_8.1%_6.19%_21.34%]" data-name="Group">
      <Group171 />
      <Group172 />
      <Group173 />
    </div>
  );
}

function Group169() {
  return (
    <div className="absolute contents inset-[86%_1%_6.19%_13.03%]" data-name="Group">
      <div className="absolute inset-[86%_1%_14%_13.03%]" data-name="Vector">
        <div className="absolute inset-[-0.5px_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 428.57 0.998998">
            <path d="M0 0.499499H428.57" id="Vector" stroke="var(--stroke-0, #64748B)" strokeWidth="0.998998" />
          </svg>
        </div>
      </div>
      <Group170 />
    </div>
  );
}

function Group176() {
  return (
    <div className="absolute contents inset-[82.9%_86.97%_11.09%_9.82%]" data-name="Group">
      <div className="absolute inset-[86%_86.97%_14%_11.82%]" data-name="Vector">
        <div className="absolute inset-[-0.5px_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5.99399 0.998998">
            <path d="M0 0.499499H5.99399" id="Vector" stroke="var(--stroke-0, #64748B)" strokeWidth="0.998998" />
          </svg>
        </div>
      </div>
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal inset-[82.9%_88.58%_11.09%_9.82%] leading-[normal] not-italic text-[#64748b] text-[11.988px] text-right whitespace-pre-wrap">0</p>
    </div>
  );
}

function Group177() {
  return (
    <div className="absolute contents inset-[61.9%_86.97%_32.09%_6.81%]" data-name="Group">
      <div className="absolute inset-[65%_86.97%_35%_11.82%]" data-name="Vector">
        <div className="absolute inset-[-0.5px_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5.99399 0.998998">
            <path d="M0 0.499499H5.99399" id="Vector" stroke="var(--stroke-0, #64748B)" strokeWidth="0.998998" />
          </svg>
        </div>
      </div>
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal inset-[61.9%_88.57%_32.09%_6.81%] leading-[normal] not-italic text-[#64748b] text-[11.988px] text-right whitespace-pre-wrap">500</p>
    </div>
  );
}

function Group178() {
  return (
    <div className="absolute contents inset-[40.9%_86.97%_53.09%_5.61%]" data-name="Group">
      <div className="absolute inset-[44%_86.97%_56%_11.82%]" data-name="Vector">
        <div className="absolute inset-[-0.5px_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5.99399 0.998998">
            <path d="M0 0.499499H5.99399" id="Vector" stroke="var(--stroke-0, #64748B)" strokeWidth="0.998998" />
          </svg>
        </div>
      </div>
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal inset-[40.9%_88.57%_53.09%_5.61%] leading-[normal] not-italic text-[#64748b] text-[11.988px] text-right whitespace-pre-wrap">1000</p>
    </div>
  );
}

function Group179() {
  return (
    <div className="absolute contents inset-[19.9%_86.97%_74.09%_5.81%]" data-name="Group">
      <div className="absolute inset-[23%_86.97%_77%_11.82%]" data-name="Vector">
        <div className="absolute inset-[-0.5px_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5.99399 0.998998">
            <path d="M0 0.499499H5.99399" id="Vector" stroke="var(--stroke-0, #64748B)" strokeWidth="0.998998" />
          </svg>
        </div>
      </div>
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal inset-[19.9%_88.57%_74.09%_5.81%] leading-[normal] not-italic text-[#64748b] text-[11.988px] text-right whitespace-pre-wrap">1500</p>
    </div>
  );
}

function Group180() {
  return (
    <div className="absolute contents inset-[0.5%_86.97%_93.49%_5.41%]" data-name="Group">
      <div className="absolute inset-[2%_86.97%_98%_11.82%]" data-name="Vector">
        <div className="absolute inset-[-0.5px_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5.99399 0.998998">
            <path d="M0 0.499499H5.99399" id="Vector" stroke="var(--stroke-0, #64748B)" strokeWidth="0.998998" />
          </svg>
        </div>
      </div>
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal inset-[0.5%_88.57%_93.49%_5.41%] leading-[normal] not-italic text-[#64748b] text-[11.988px] text-right whitespace-pre-wrap">2000</p>
    </div>
  );
}

function Group175() {
  return (
    <div className="absolute contents inset-[0.5%_86.97%_11.09%_5.41%]" data-name="Group">
      <Group176 />
      <Group177 />
      <Group178 />
      <Group179 />
      <Group180 />
    </div>
  );
}

function Group174() {
  return (
    <div className="absolute contents inset-[0.5%_86.97%_11.09%_5.41%]" data-name="Group">
      <div className="absolute inset-[2%_86.97%_14%_13.03%]" data-name="Vector">
        <div className="absolute inset-[0_-0.5px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 0.998998 210">
            <path d="M0.499499 0V210" id="Vector" stroke="var(--stroke-0, #64748B)" strokeWidth="0.998998" />
          </svg>
        </div>
      </div>
      <Group175 />
    </div>
  );
}

function Group184() {
  return (
    <div className="absolute inset-[75.71%_73.09%_14%_15.89%]" data-name="Group">
      <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 54.9449 25.725">
        <g id="Group">
          <path d={svgPaths.p29647e00} fill="var(--fill-0, #EF4444)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group185() {
  return (
    <div className="absolute inset-[77.18%_44.43%_14%_44.55%]" data-name="Group">
      <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 54.9449 22.05">
        <g id="Group">
          <path d={svgPaths.p2a9f9360} fill="var(--fill-0, #EF4444)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group186() {
  return (
    <div className="absolute inset-[78.23%_15.77%_14%_73.21%]" data-name="Group">
      <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 54.9449 19.425">
        <g id="Group">
          <path d={svgPaths.p2b118000} fill="var(--fill-0, #EF4444)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group183() {
  return (
    <div className="absolute contents inset-[75.71%_15.77%_14%_15.89%]" data-name="Group">
      <Group184 />
      <Group185 />
      <Group186 />
    </div>
  );
}

function Group182() {
  return (
    <div className="absolute contents inset-[75.71%_15.77%_14%_15.89%]" data-name="Group">
      <Group183 />
    </div>
  );
}

function Group181() {
  return (
    <div className="absolute contents inset-[75.71%_15.77%_14%_15.89%]" data-name="Group">
      <Group182 />
    </div>
  );
}

function Group190() {
  return (
    <div className="absolute inset-[25.1%_61.26%_14%_27.72%]" data-name="Group">
      <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 54.9449 152.25">
        <g id="Group">
          <path d={svgPaths.p1e3ee700} fill="var(--fill-0, #22C55E)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group191() {
  return (
    <div className="absolute inset-[15.44%_32.61%_14%_56.37%]" data-name="Group">
      <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 54.9449 176.4">
        <g id="Group">
          <path d={svgPaths.p33ec1300} fill="var(--fill-0, #22C55E)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group192() {
  return (
    <div className="absolute inset-[5.36%_3.95%_14%_85.03%]" data-name="Group">
      <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 54.9449 201.6">
        <g id="Group">
          <path d={svgPaths.p37956800} fill="var(--fill-0, #22C55E)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group189() {
  return (
    <div className="absolute contents inset-[5.36%_3.95%_14%_27.72%]" data-name="Group">
      <Group190 />
      <Group191 />
      <Group192 />
    </div>
  );
}

function Group188() {
  return (
    <div className="absolute contents inset-[5.36%_3.95%_14%_27.72%]" data-name="Group">
      <Group189 />
    </div>
  );
}

function Group187() {
  return (
    <div className="absolute contents inset-[5.36%_3.95%_14%_27.72%]" data-name="Group">
      <Group188 />
    </div>
  );
}

function Surface8() {
  return (
    <div className="absolute h-[250px] left-0 overflow-clip top-0 w-[498.5px]" data-name="Surface">
      <Group166 />
      <Group169 />
      <Group174 />
      <Group181 />
      <Group187 />
    </div>
  );
}

function BarChart2() {
  return (
    <div className="h-[250px] relative shrink-0 w-full" data-name="BarChart">
      <Surface8 />
    </div>
  );
}

function Container205() {
  return (
    <div className="bg-white col-1 justify-self-stretch relative rounded-[16px] row-1 self-stretch shrink-0" data-name="Container">
      <div aria-hidden="true" className="absolute border-2 border-[rgba(245,158,11,0.19)] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <div className="content-stretch flex flex-col gap-[24px] items-start pb-[2px] pt-[34px] px-[34px] relative size-full">
        <Heading32 />
        <BarChart2 />
      </div>
    </div>
  );
}

function Heading33() {
  return (
    <div className="h-[28px] relative shrink-0 w-full" data-name="Heading 3">
      <p className="absolute font-['IBM_Plex_Sans_Arabic:Bold','Noto_Sans:Bold',sans-serif] leading-[28px] left-[316.05px] text-[#0e1320] text-[20px] top-0 w-[183px] whitespace-pre-wrap" dir="auto" style={{ fontVariationSettings: "\'CTGR\' 0, \'wdth\' 100, \'wght\' 700" }}>
        نمو قيمة العميل (LTV)
      </p>
    </div>
  );
}

function Group194() {
  return (
    <div className="absolute inset-[2%_1%_14%_13.03%]" data-name="Group">
      <div className="absolute inset-[-0.24%_0]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 428.57 210.999">
          <g id="Group">
            <path d="M0 210.499H428.57" id="Vector" stroke="var(--stroke-0, #E2E8F0)" strokeDasharray="3 3" strokeWidth="0.998998" />
            <path d="M0 157.999H428.57" id="Vector_2" stroke="var(--stroke-0, #E2E8F0)" strokeDasharray="3 3" strokeWidth="0.998998" />
            <path d="M0 105.499H428.57" id="Vector_3" stroke="var(--stroke-0, #E2E8F0)" strokeDasharray="3 3" strokeWidth="0.998998" />
            <path d="M0 52.9994H428.57" id="Vector_4" stroke="var(--stroke-0, #E2E8F0)" strokeDasharray="3 3" strokeWidth="0.998998" />
            <path d="M5.7488e-06 0.499499H428.57" id="Vector_5" stroke="var(--stroke-0, #E2E8F0)" strokeDasharray="3 3" strokeWidth="0.998998" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Group195() {
  return (
    <div className="absolute inset-[2%_1%_14%_13.03%]" data-name="Group">
      <div className="absolute inset-[0_-0.12%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 429.569 210">
          <g id="Group">
            <path d="M0.499499 0.000127208V210" id="Vector" stroke="var(--stroke-0, #E2E8F0)" strokeDasharray="3 3" strokeWidth="0.998998" />
            <path d="M143.356 0V210" id="Vector_2" stroke="var(--stroke-0, #E2E8F0)" strokeDasharray="3 3" strokeWidth="0.998998" />
            <path d="M286.213 0V210" id="Vector_3" stroke="var(--stroke-0, #E2E8F0)" strokeDasharray="3 3" strokeWidth="0.998998" />
            <path d="M429.07 0V210" id="Vector_4" stroke="var(--stroke-0, #E2E8F0)" strokeDasharray="3 3" strokeWidth="0.998998" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Group193() {
  return (
    <div className="absolute contents inset-[2%_1%_14%_13.03%]" data-name="Group">
      <Group194 />
      <Group195 />
    </div>
  );
}

function Group198() {
  return (
    <div className="absolute contents inset-[86%_77.64%_6.19%_3.71%]" data-name="Group">
      <div className="absolute inset-[86%_86.97%_11.6%_13.03%]" data-name="Vector">
        <div className="absolute inset-[0_-0.5px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 0.998998 6">
            <path d="M0.499499 6V0" id="Vector" stroke="var(--stroke-0, #64748B)" strokeWidth="0.998998" />
          </svg>
        </div>
      </div>
      <p className="absolute font-['Inter:Regular','Noto_Sans_Arabic:Regular',sans-serif] font-normal inset-[87.81%_77.64%_6.19%_3.71%] leading-[normal] not-italic text-[#64748b] text-[11.988px] text-center whitespace-pre-wrap" dir="auto">
        الأسبوع 1
      </p>
    </div>
  );
}

function Group199() {
  return (
    <div className="absolute contents inset-[86%_48.78%_6.19%_32.16%]" data-name="Group">
      <div className="absolute inset-[86%_58.32%_11.6%_41.68%]" data-name="Vector">
        <div className="absolute inset-[0_-0.5px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 0.998998 6">
            <path d="M0.499499 6V0" id="Vector" stroke="var(--stroke-0, #64748B)" strokeWidth="0.998998" />
          </svg>
        </div>
      </div>
      <p className="absolute font-['Inter:Regular','Noto_Sans_Arabic:Regular',sans-serif] font-normal inset-[87.81%_48.78%_6.19%_32.16%] leading-[normal] not-italic text-[#64748b] text-[11.988px] text-center whitespace-pre-wrap" dir="auto">
        الأسبوع 8
      </p>
    </div>
  );
}

function Group200() {
  return (
    <div className="absolute contents inset-[86%_19.62%_6.19%_60.32%]" data-name="Group">
      <div className="absolute inset-[86%_29.66%_11.6%_70.34%]" data-name="Vector">
        <div className="absolute inset-[0_-0.5px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 0.998998 6">
            <path d="M0.499499 6V0" id="Vector" stroke="var(--stroke-0, #64748B)" strokeWidth="0.998998" />
          </svg>
        </div>
      </div>
      <p className="absolute font-['Inter:Regular','Noto_Sans_Arabic:Regular',sans-serif] font-normal inset-[87.81%_19.62%_6.19%_60.32%] leading-[normal] not-italic text-[#64748b] text-[11.988px] text-center whitespace-pre-wrap" dir="auto">
        الأسبوع 16
      </p>
    </div>
  );
}

function Group201() {
  return (
    <div className="absolute contents inset-[86%_-4.96%_6.19%_84.49%]" data-name="Group">
      <div className="absolute inset-[86%_1%_11.6%_99%]" data-name="Vector">
        <div className="absolute inset-[0_-0.5px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 0.998998 6">
            <path d="M0.499499 6V0" id="Vector" stroke="var(--stroke-0, #64748B)" strokeWidth="0.998998" />
          </svg>
        </div>
      </div>
      <p className="absolute font-['Inter:Regular','Noto_Sans_Arabic:Regular',sans-serif] font-normal inset-[87.81%_-4.96%_6.19%_84.49%] leading-[normal] not-italic text-[#64748b] text-[11.988px] text-center whitespace-pre-wrap" dir="auto">
        الأسبوع 24
      </p>
    </div>
  );
}

function Group197() {
  return (
    <div className="absolute contents inset-[86%_-4.96%_6.19%_3.71%]" data-name="Group">
      <Group198 />
      <Group199 />
      <Group200 />
      <Group201 />
    </div>
  );
}

function Group196() {
  return (
    <div className="absolute contents inset-[86%_-4.96%_6.19%_3.71%]" data-name="Group">
      <div className="absolute inset-[86%_1%_14%_13.03%]" data-name="Vector">
        <div className="absolute inset-[-0.5px_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 428.57 0.998998">
            <path d="M0 0.499499H428.57" id="Vector" stroke="var(--stroke-0, #64748B)" strokeWidth="0.998998" />
          </svg>
        </div>
      </div>
      <Group197 />
    </div>
  );
}

function Group204() {
  return (
    <div className="absolute contents inset-[82.9%_86.97%_11.09%_9.82%]" data-name="Group">
      <div className="absolute inset-[86%_86.97%_14%_11.82%]" data-name="Vector">
        <div className="absolute inset-[-0.5px_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5.99399 0.998998">
            <path d="M0 0.499499H5.99399" id="Vector" stroke="var(--stroke-0, #64748B)" strokeWidth="0.998998" />
          </svg>
        </div>
      </div>
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal inset-[82.9%_88.58%_11.09%_9.82%] leading-[normal] not-italic text-[#64748b] text-[11.988px] text-right whitespace-pre-wrap">0</p>
    </div>
  );
}

function Group205() {
  return (
    <div className="absolute contents inset-[61.9%_86.97%_32.09%_6.81%]" data-name="Group">
      <div className="absolute inset-[65%_86.97%_35%_11.82%]" data-name="Vector">
        <div className="absolute inset-[-0.5px_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5.99399 0.998998">
            <path d="M0 0.499499H5.99399" id="Vector" stroke="var(--stroke-0, #64748B)" strokeWidth="0.998998" />
          </svg>
        </div>
      </div>
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal inset-[61.9%_88.57%_32.09%_6.81%] leading-[normal] not-italic text-[#64748b] text-[11.988px] text-right whitespace-pre-wrap">500</p>
    </div>
  );
}

function Group206() {
  return (
    <div className="absolute contents inset-[40.9%_86.97%_53.09%_5.61%]" data-name="Group">
      <div className="absolute inset-[44%_86.97%_56%_11.82%]" data-name="Vector">
        <div className="absolute inset-[-0.5px_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5.99399 0.998998">
            <path d="M0 0.499499H5.99399" id="Vector" stroke="var(--stroke-0, #64748B)" strokeWidth="0.998998" />
          </svg>
        </div>
      </div>
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal inset-[40.9%_88.57%_53.09%_5.61%] leading-[normal] not-italic text-[#64748b] text-[11.988px] text-right whitespace-pre-wrap">1000</p>
    </div>
  );
}

function Group207() {
  return (
    <div className="absolute contents inset-[19.9%_86.97%_74.09%_5.81%]" data-name="Group">
      <div className="absolute inset-[23%_86.97%_77%_11.82%]" data-name="Vector">
        <div className="absolute inset-[-0.5px_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5.99399 0.998998">
            <path d="M0 0.499499H5.99399" id="Vector" stroke="var(--stroke-0, #64748B)" strokeWidth="0.998998" />
          </svg>
        </div>
      </div>
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal inset-[19.9%_88.57%_74.09%_5.81%] leading-[normal] not-italic text-[#64748b] text-[11.988px] text-right whitespace-pre-wrap">1500</p>
    </div>
  );
}

function Group208() {
  return (
    <div className="absolute contents inset-[0.5%_86.97%_93.49%_5.41%]" data-name="Group">
      <div className="absolute inset-[2%_86.97%_98%_11.82%]" data-name="Vector">
        <div className="absolute inset-[-0.5px_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5.99399 0.998998">
            <path d="M0 0.499499H5.99399" id="Vector" stroke="var(--stroke-0, #64748B)" strokeWidth="0.998998" />
          </svg>
        </div>
      </div>
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal inset-[0.5%_88.57%_93.49%_5.41%] leading-[normal] not-italic text-[#64748b] text-[11.988px] text-right whitespace-pre-wrap">2000</p>
    </div>
  );
}

function Group203() {
  return (
    <div className="absolute contents inset-[0.5%_86.97%_11.09%_5.41%]" data-name="Group">
      <Group204 />
      <Group205 />
      <Group206 />
      <Group207 />
      <Group208 />
    </div>
  );
}

function Group202() {
  return (
    <div className="absolute contents inset-[0.5%_86.97%_11.09%_5.41%]" data-name="Group">
      <div className="absolute inset-[2%_86.97%_14%_13.03%]" data-name="Vector">
        <div className="absolute inset-[0_-0.5px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 0.998998 210">
            <path d="M0.499499 0V210" id="Vector" stroke="var(--stroke-0, #64748B)" strokeWidth="0.998998" />
          </svg>
        </div>
      </div>
      <Group203 />
    </div>
  );
}

function Group212() {
  return (
    <div className="absolute inset-[5.36%_1%_14%_13.03%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px_-13.4px] mask-size-[428.57px_218px]" data-name="Group" style={{ maskImage: `url('${imgGroup}')` }}>
      <div className="absolute inset-[-0.74%_0_0_0]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 429.017 203.097">
          <g id="Group">
            <path d={svgPaths.p2ffee200} fill="url(#paint0_linear_2_3616)" id="Vector" />
            <path d={svgPaths.p1f6c3020} id="Vector_2" stroke="var(--stroke-0, #F59E0B)" strokeWidth="2.99699" />
          </g>
          <defs>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_2_3616" x1="0.375817" x2="0.375817" y1="1.49679" y2="203.097">
              <stop offset="0.05" stopColor="#F59E0B" stopOpacity="0.3" />
              <stop offset="0.95" stopColor="#F59E0B" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </div>
  );
}

function Group211() {
  return (
    <div className="absolute contents inset-[5.36%_1%_14%_13.03%]" data-name="Group">
      <Group212 />
    </div>
  );
}

function ClipPathGroup4() {
  return (
    <div className="absolute contents inset-[0_1%_12.8%_13.03%]" data-name="Clip path group">
      <Group211 />
    </div>
  );
}

function Group210() {
  return (
    <div className="absolute contents inset-[0_1%_12.8%_13.03%]" data-name="Group">
      <ClipPathGroup4 />
    </div>
  );
}

function Group209() {
  return (
    <div className="absolute contents inset-[0_1%_12.8%_13.03%]" data-name="Group">
      <Group210 />
    </div>
  );
}

function Surface9() {
  return (
    <div className="absolute h-[250px] left-0 overflow-clip top-0 w-[498.5px]" data-name="Surface">
      <Group193 />
      <Group196 />
      <Group202 />
      <Group209 />
    </div>
  );
}

function AreaChart4() {
  return (
    <div className="h-[250px] relative shrink-0 w-full" data-name="AreaChart">
      <Surface9 />
    </div>
  );
}

function Container206() {
  return (
    <div className="bg-white col-2 justify-self-stretch relative rounded-[16px] row-1 self-stretch shrink-0" data-name="Container">
      <div aria-hidden="true" className="absolute border-2 border-[rgba(245,158,11,0.19)] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <div className="content-stretch flex flex-col gap-[24px] items-start pb-[2px] pt-[34px] px-[34px] relative size-full">
        <Heading33 />
        <AreaChart4 />
      </div>
    </div>
  );
}

function Container204() {
  return (
    <div className="gap-x-[32px] gap-y-[32px] grid grid-cols-[repeat(2,minmax(0,1fr))] grid-rows-[repeat(1,minmax(0,1fr))] h-[370px] relative shrink-0 w-full" data-name="Container">
      <Container205 />
      <Container206 />
    </div>
  );
}

function Heading34() {
  return (
    <div className="h-[28px] relative shrink-0 w-full" data-name="Heading 3">
      <p className="absolute font-['IBM_Plex_Sans_Arabic:Bold','Noto_Sans:Bold',sans-serif] leading-[28px] left-[373.57px] text-[#0e1320] text-[20px] top-0 w-[125px] whitespace-pre-wrap" dir="auto" style={{ fontVariationSettings: "\'CTGR\' 0, \'wdth\' 100, \'wght\' 700" }}>
        نسبة LTV/CAC
      </p>
    </div>
  );
}

function Group214() {
  return (
    <div className="absolute inset-[2%_1%_14%_13.03%]" data-name="Group">
      <div className="absolute inset-[-0.24%_0]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 428.57 210.999">
          <g id="Group">
            <path d="M0 210.5H428.57" id="Vector" stroke="var(--stroke-0, #E2E8F0)" strokeDasharray="3 3" strokeWidth="0.998998" />
            <path d="M0 158H428.57" id="Vector_2" stroke="var(--stroke-0, #E2E8F0)" strokeDasharray="3 3" strokeWidth="0.998998" />
            <path d="M0 105.5H428.57" id="Vector_3" stroke="var(--stroke-0, #E2E8F0)" strokeDasharray="3 3" strokeWidth="0.998998" />
            <path d="M0 52.9996H428.57" id="Vector_4" stroke="var(--stroke-0, #E2E8F0)" strokeDasharray="3 3" strokeWidth="0.998998" />
            <path d="M5.7488e-06 0.499499H428.57" id="Vector_5" stroke="var(--stroke-0, #E2E8F0)" strokeDasharray="3 3" strokeWidth="0.998998" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Group215() {
  return (
    <div className="absolute inset-[2%_1%_14%_13.03%]" data-name="Group">
      <div className="absolute inset-[0_-0.12%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 429.569 210">
          <g id="Group">
            <path d="M0.499499 0V210" id="Vector" stroke="var(--stroke-0, #E2E8F0)" strokeDasharray="3 3" strokeWidth="0.998998" />
            <path d="M214.785 0.000116933V210" id="Vector_2" stroke="var(--stroke-0, #E2E8F0)" strokeDasharray="3 3" strokeWidth="0.998998" />
            <path d="M429.07 0.000116933V210" id="Vector_3" stroke="var(--stroke-0, #E2E8F0)" strokeDasharray="3 3" strokeWidth="0.998998" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Group213() {
  return (
    <div className="absolute contents inset-[2%_1%_14%_13.03%]" data-name="Group">
      <Group214 />
      <Group215 />
    </div>
  );
}

function Group218() {
  return (
    <div className="absolute contents inset-[86%_80.95%_6.19%_7.01%]" data-name="Group">
      <div className="absolute inset-[86%_86.97%_11.6%_13.03%]" data-name="Vector">
        <div className="absolute inset-[0_-0.5px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 0.998998 6">
            <path d="M0.499499 6V0" id="Vector" stroke="var(--stroke-0, #64748B)" strokeWidth="0.998998" />
          </svg>
        </div>
      </div>
      <p className="absolute font-['Inter:Regular','Noto_Sans_Arabic:Regular',sans-serif] font-normal inset-[87.81%_80.95%_6.19%_7.01%] leading-[normal] not-italic text-[#64748b] text-[11.988px] text-center whitespace-pre-wrap" dir="auto">
        أغسطس
      </p>
    </div>
  );
}

function Group219() {
  return (
    <div className="absolute bottom-[6.19%] contents left-1/2 right-[37.96%] top-[86%]" data-name="Group">
      <div className="absolute inset-[86%_43.99%_11.6%_56.01%]" data-name="Vector">
        <div className="absolute inset-[0_-0.5px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 0.998998 6">
            <path d="M0.499499 6V0" id="Vector" stroke="var(--stroke-0, #64748B)" strokeWidth="0.998998" />
          </svg>
        </div>
      </div>
      <p className="absolute bottom-[6.19%] font-['Inter:Regular','Noto_Sans_Arabic:Regular',sans-serif] font-normal leading-[normal] left-1/2 not-italic right-[37.96%] text-[#64748b] text-[11.988px] text-center top-[87.81%] whitespace-pre-wrap" dir="auto">
        سبتمبر
      </p>
    </div>
  );
}

function Group220() {
  return (
    <div className="absolute contents inset-[86%_-3.97%_6.19%_89.53%]" data-name="Group">
      <div className="absolute inset-[86%_1%_11.6%_99%]" data-name="Vector">
        <div className="absolute inset-[0_-0.5px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 0.998998 6">
            <path d="M0.499499 6V0" id="Vector" stroke="var(--stroke-0, #64748B)" strokeWidth="0.998998" />
          </svg>
        </div>
      </div>
      <p className="absolute font-['Inter:Regular','Noto_Sans_Arabic:Regular',sans-serif] font-normal inset-[87.81%_-3.97%_6.19%_89.53%] leading-[normal] not-italic text-[#64748b] text-[11.988px] text-center whitespace-pre-wrap" dir="auto">
        أكتوبر
      </p>
    </div>
  );
}

function Group217() {
  return (
    <div className="absolute contents inset-[86%_-3.97%_6.19%_7.01%]" data-name="Group">
      <Group218 />
      <Group219 />
      <Group220 />
    </div>
  );
}

function Group216() {
  return (
    <div className="absolute contents inset-[86%_-3.97%_6.19%_7.01%]" data-name="Group">
      <div className="absolute inset-[86%_1%_14%_13.03%]" data-name="Vector">
        <div className="absolute inset-[-0.5px_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 428.57 0.998998">
            <path d="M0 0.499499H428.57" id="Vector" stroke="var(--stroke-0, #64748B)" strokeWidth="0.998998" />
          </svg>
        </div>
      </div>
      <Group217 />
    </div>
  );
}

function Group223() {
  return (
    <div className="absolute contents inset-[82.9%_86.97%_11.09%_9.82%]" data-name="Group">
      <div className="absolute inset-[86%_86.97%_14%_11.82%]" data-name="Vector">
        <div className="absolute inset-[-0.5px_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5.99399 0.998998">
            <path d="M0 0.499499H5.99399" id="Vector" stroke="var(--stroke-0, #64748B)" strokeWidth="0.998998" />
          </svg>
        </div>
      </div>
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal inset-[82.9%_88.58%_11.09%_9.82%] leading-[normal] not-italic text-[#64748b] text-[11.988px] text-right whitespace-pre-wrap">0</p>
    </div>
  );
}

function Group224() {
  return (
    <div className="absolute contents inset-[61.9%_86.97%_32.09%_9.82%]" data-name="Group">
      <div className="absolute inset-[65%_86.97%_35%_11.82%]" data-name="Vector">
        <div className="absolute inset-[-0.5px_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5.99399 0.998998">
            <path d="M0 0.499499H5.99399" id="Vector" stroke="var(--stroke-0, #64748B)" strokeWidth="0.998998" />
          </svg>
        </div>
      </div>
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal inset-[61.9%_88.58%_32.09%_9.82%] leading-[normal] not-italic text-[#64748b] text-[11.988px] text-right whitespace-pre-wrap">3</p>
    </div>
  );
}

function Group225() {
  return (
    <div className="absolute contents inset-[40.9%_86.97%_53.09%_9.82%]" data-name="Group">
      <div className="absolute inset-[44%_86.97%_56%_11.82%]" data-name="Vector">
        <div className="absolute inset-[-0.5px_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5.99399 0.998998">
            <path d="M0 0.499499H5.99399" id="Vector" stroke="var(--stroke-0, #64748B)" strokeWidth="0.998998" />
          </svg>
        </div>
      </div>
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal inset-[40.9%_88.58%_53.09%_9.82%] leading-[normal] not-italic text-[#64748b] text-[11.988px] text-right whitespace-pre-wrap">6</p>
    </div>
  );
}

function Group226() {
  return (
    <div className="absolute contents inset-[19.9%_86.97%_74.09%_9.82%]" data-name="Group">
      <div className="absolute inset-[23%_86.97%_77%_11.82%]" data-name="Vector">
        <div className="absolute inset-[-0.5px_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5.99399 0.998998">
            <path d="M0 0.499499H5.99399" id="Vector" stroke="var(--stroke-0, #64748B)" strokeWidth="0.998998" />
          </svg>
        </div>
      </div>
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal inset-[19.9%_88.58%_74.09%_9.82%] leading-[normal] not-italic text-[#64748b] text-[11.988px] text-right whitespace-pre-wrap">9</p>
    </div>
  );
}

function Group227() {
  return (
    <div className="absolute contents inset-[0.5%_86.97%_93.49%_8.82%]" data-name="Group">
      <div className="absolute inset-[2%_86.97%_98%_11.82%]" data-name="Vector">
        <div className="absolute inset-[-0.5px_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5.99399 0.998998">
            <path d="M0 0.499499H5.99399" id="Vector" stroke="var(--stroke-0, #64748B)" strokeWidth="0.998998" />
          </svg>
        </div>
      </div>
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal inset-[0.5%_88.57%_93.49%_8.82%] leading-[normal] not-italic text-[#64748b] text-[11.988px] text-right whitespace-pre-wrap">12</p>
    </div>
  );
}

function Group222() {
  return (
    <div className="absolute contents inset-[0.5%_86.97%_11.09%_8.82%]" data-name="Group">
      <Group223 />
      <Group224 />
      <Group225 />
      <Group226 />
      <Group227 />
    </div>
  );
}

function Group221() {
  return (
    <div className="absolute contents inset-[0.5%_86.97%_11.09%_8.82%]" data-name="Group">
      <div className="absolute inset-[2%_86.97%_14%_13.03%]" data-name="Vector">
        <div className="absolute inset-[0_-0.5px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 0.998998 210">
            <path d="M0.499499 0V210" id="Vector" stroke="var(--stroke-0, #64748B)" strokeWidth="0.998998" />
          </svg>
        </div>
      </div>
      <Group222 />
    </div>
  );
}

function Group231() {
  return (
    <div className="absolute inset-[13.2%_1%_14%_13.03%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px_-33px] mask-size-[428.57px_218px]" data-name="Group" style={{ maskImage: `url('${imgGroup}')` }}>
      <div className="absolute inset-[-0.81%_0_0_0]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 429.112 183.469">
          <g id="Group">
            <path d={svgPaths.pf77c2c0} fill="url(#paint0_linear_2_3661)" id="Vector" />
            <path d={svgPaths.p190e7380} id="Vector_2" stroke="var(--stroke-0, #22C55E)" strokeWidth="2.99699" />
          </g>
          <defs>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_2_3661" x1="0.244484" x2="0.244484" y1="1.46879" y2="183.469">
              <stop offset="0.05" stopColor="#22C55E" stopOpacity="0.3" />
              <stop offset="0.95" stopColor="#22C55E" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </div>
  );
}

function Group230() {
  return (
    <div className="absolute contents inset-[13.2%_1%_14%_13.03%]" data-name="Group">
      <Group231 />
    </div>
  );
}

function ClipPathGroup5() {
  return (
    <div className="absolute contents inset-[0_1%_12.8%_13.03%]" data-name="Clip path group">
      <Group230 />
    </div>
  );
}

function Group229() {
  return (
    <div className="absolute contents inset-[0_1%_12.8%_13.03%]" data-name="Group">
      <ClipPathGroup5 />
    </div>
  );
}

function Group228() {
  return (
    <div className="absolute contents inset-[0_1%_12.8%_13.03%]" data-name="Group">
      <Group229 />
    </div>
  );
}

function Surface10() {
  return (
    <div className="absolute h-[250px] left-0 overflow-clip top-0 w-[498.5px]" data-name="Surface">
      <Group213 />
      <Group216 />
      <Group221 />
      <Group228 />
    </div>
  );
}

function AreaChart5() {
  return (
    <div className="h-[250px] relative shrink-0 w-full" data-name="AreaChart">
      <Surface10 />
    </div>
  );
}

function Container208() {
  return (
    <div className="bg-white col-1 justify-self-stretch relative rounded-[16px] row-1 self-stretch shrink-0" data-name="Container">
      <div aria-hidden="true" className="absolute border-2 border-[rgba(245,158,11,0.19)] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <div className="content-stretch flex flex-col gap-[24px] items-start pb-[2px] pt-[34px] px-[34px] relative size-full">
        <Heading34 />
        <AreaChart5 />
      </div>
    </div>
  );
}

function Heading35() {
  return (
    <div className="h-[28px] relative shrink-0 w-full" data-name="Heading 3">
      <p className="absolute font-['IBM_Plex_Sans_Arabic:Bold',sans-serif] leading-[28px] left-[318.22px] not-italic text-[#0e1320] text-[20px] top-0" dir="auto">
        نسبة العملاء المتكررين
      </p>
    </div>
  );
}

function Group233() {
  return (
    <div className="absolute inset-[2%_1%_14%_13.03%]" data-name="Group">
      <div className="absolute inset-[-0.24%_0]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 428.57 210.999">
          <g id="Group">
            <path d="M0 210.5H428.57" id="Vector" stroke="var(--stroke-0, #E2E8F0)" strokeDasharray="3 3" strokeWidth="0.998998" />
            <path d="M0 158H428.57" id="Vector_2" stroke="var(--stroke-0, #E2E8F0)" strokeDasharray="3 3" strokeWidth="0.998998" />
            <path d="M0 105.5H428.57" id="Vector_3" stroke="var(--stroke-0, #E2E8F0)" strokeDasharray="3 3" strokeWidth="0.998998" />
            <path d="M0 52.9996H428.57" id="Vector_4" stroke="var(--stroke-0, #E2E8F0)" strokeDasharray="3 3" strokeWidth="0.998998" />
            <path d="M5.7488e-06 0.499499H428.57" id="Vector_5" stroke="var(--stroke-0, #E2E8F0)" strokeDasharray="3 3" strokeWidth="0.998998" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Group234() {
  return (
    <div className="absolute inset-[2%_1%_14%_13.03%]" data-name="Group">
      <div className="absolute inset-[0_-0.12%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 429.569 210">
          <g id="Group">
            <path d="M0.499499 0V210" id="Vector" stroke="var(--stroke-0, #E2E8F0)" strokeDasharray="3 3" strokeWidth="0.998998" />
            <path d="M143.356 0.000116933V210" id="Vector_2" stroke="var(--stroke-0, #E2E8F0)" strokeDasharray="3 3" strokeWidth="0.998998" />
            <path d="M286.213 0.000116933V210" id="Vector_3" stroke="var(--stroke-0, #E2E8F0)" strokeDasharray="3 3" strokeWidth="0.998998" />
            <path d="M429.07 0.000116933V210" id="Vector_4" stroke="var(--stroke-0, #E2E8F0)" strokeDasharray="3 3" strokeWidth="0.998998" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Group232() {
  return (
    <div className="absolute contents inset-[2%_1%_14%_13.03%]" data-name="Group">
      <Group233 />
      <Group234 />
    </div>
  );
}

function Group237() {
  return (
    <div className="absolute contents inset-[86%_77.64%_6.19%_3.71%]" data-name="Group">
      <div className="absolute inset-[86%_86.97%_11.6%_13.03%]" data-name="Vector">
        <div className="absolute inset-[0_-0.5px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 0.998998 6">
            <path d="M0.499499 6V0" id="Vector" stroke="var(--stroke-0, #64748B)" strokeWidth="0.998998" />
          </svg>
        </div>
      </div>
      <p className="absolute font-['Inter:Regular','Noto_Sans_Arabic:Regular',sans-serif] font-normal inset-[87.81%_77.64%_6.19%_3.71%] leading-[normal] not-italic text-[#64748b] text-[11.988px] text-center whitespace-pre-wrap" dir="auto">
        الأسبوع 1
      </p>
    </div>
  );
}

function Group238() {
  return (
    <div className="absolute contents inset-[86%_48.78%_6.19%_32.16%]" data-name="Group">
      <div className="absolute inset-[86%_58.32%_11.6%_41.68%]" data-name="Vector">
        <div className="absolute inset-[0_-0.5px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 0.998998 6">
            <path d="M0.499499 6V0" id="Vector" stroke="var(--stroke-0, #64748B)" strokeWidth="0.998998" />
          </svg>
        </div>
      </div>
      <p className="absolute font-['Inter:Regular','Noto_Sans_Arabic:Regular',sans-serif] font-normal inset-[87.81%_48.78%_6.19%_32.16%] leading-[normal] not-italic text-[#64748b] text-[11.988px] text-center whitespace-pre-wrap" dir="auto">
        الأسبوع 8
      </p>
    </div>
  );
}

function Group239() {
  return (
    <div className="absolute contents inset-[86%_19.62%_6.19%_60.32%]" data-name="Group">
      <div className="absolute inset-[86%_29.66%_11.6%_70.34%]" data-name="Vector">
        <div className="absolute inset-[0_-0.5px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 0.998998 6">
            <path d="M0.499499 6V0" id="Vector" stroke="var(--stroke-0, #64748B)" strokeWidth="0.998998" />
          </svg>
        </div>
      </div>
      <p className="absolute font-['Inter:Regular','Noto_Sans_Arabic:Regular',sans-serif] font-normal inset-[87.81%_19.62%_6.19%_60.32%] leading-[normal] not-italic text-[#64748b] text-[11.988px] text-center whitespace-pre-wrap" dir="auto">
        الأسبوع 16
      </p>
    </div>
  );
}

function Group240() {
  return (
    <div className="absolute contents inset-[86%_-4.96%_6.19%_84.49%]" data-name="Group">
      <div className="absolute inset-[86%_1%_11.6%_99%]" data-name="Vector">
        <div className="absolute inset-[0_-0.5px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 0.998998 6">
            <path d="M0.499499 6V0" id="Vector" stroke="var(--stroke-0, #64748B)" strokeWidth="0.998998" />
          </svg>
        </div>
      </div>
      <p className="absolute font-['Inter:Regular','Noto_Sans_Arabic:Regular',sans-serif] font-normal inset-[87.81%_-4.96%_6.19%_84.49%] leading-[normal] not-italic text-[#64748b] text-[11.988px] text-center whitespace-pre-wrap" dir="auto">
        الأسبوع 24
      </p>
    </div>
  );
}

function Group236() {
  return (
    <div className="absolute contents inset-[86%_-4.96%_6.19%_3.71%]" data-name="Group">
      <Group237 />
      <Group238 />
      <Group239 />
      <Group240 />
    </div>
  );
}

function Group235() {
  return (
    <div className="absolute contents inset-[86%_-4.96%_6.19%_3.71%]" data-name="Group">
      <div className="absolute inset-[86%_1%_14%_13.03%]" data-name="Vector">
        <div className="absolute inset-[-0.5px_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 428.57 0.998998">
            <path d="M0 0.499499H428.57" id="Vector" stroke="var(--stroke-0, #64748B)" strokeWidth="0.998998" />
          </svg>
        </div>
      </div>
      <Group236 />
    </div>
  );
}

function Group243() {
  return (
    <div className="absolute contents inset-[82.9%_86.97%_11.09%_9.82%]" data-name="Group">
      <div className="absolute inset-[86%_86.97%_14%_11.82%]" data-name="Vector">
        <div className="absolute inset-[-0.5px_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5.99399 0.998998">
            <path d="M0 0.499499H5.99399" id="Vector" stroke="var(--stroke-0, #64748B)" strokeWidth="0.998998" />
          </svg>
        </div>
      </div>
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal inset-[82.9%_88.58%_11.09%_9.82%] leading-[normal] not-italic text-[#64748b] text-[11.988px] text-right whitespace-pre-wrap">0</p>
    </div>
  );
}

function Group244() {
  return (
    <div className="absolute contents inset-[61.9%_86.97%_32.09%_8.82%]" data-name="Group">
      <div className="absolute inset-[65%_86.97%_35%_11.82%]" data-name="Vector">
        <div className="absolute inset-[-0.5px_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5.99399 0.998998">
            <path d="M0 0.499499H5.99399" id="Vector" stroke="var(--stroke-0, #64748B)" strokeWidth="0.998998" />
          </svg>
        </div>
      </div>
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal inset-[61.9%_88.57%_32.09%_8.82%] leading-[normal] not-italic text-[#64748b] text-[11.988px] text-right whitespace-pre-wrap">15</p>
    </div>
  );
}

function Group245() {
  return (
    <div className="absolute contents inset-[40.9%_86.97%_53.09%_8.22%]" data-name="Group">
      <div className="absolute inset-[44%_86.97%_56%_11.82%]" data-name="Vector">
        <div className="absolute inset-[-0.5px_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5.99399 0.998998">
            <path d="M0 0.499499H5.99399" id="Vector" stroke="var(--stroke-0, #64748B)" strokeWidth="0.998998" />
          </svg>
        </div>
      </div>
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal inset-[40.9%_88.57%_53.09%_8.22%] leading-[normal] not-italic text-[#64748b] text-[11.988px] text-right whitespace-pre-wrap">30</p>
    </div>
  );
}

function Group246() {
  return (
    <div className="absolute contents inset-[19.9%_86.97%_74.09%_8.42%]" data-name="Group">
      <div className="absolute inset-[23%_86.97%_77%_11.82%]" data-name="Vector">
        <div className="absolute inset-[-0.5px_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5.99399 0.998998">
            <path d="M0 0.499499H5.99399" id="Vector" stroke="var(--stroke-0, #64748B)" strokeWidth="0.998998" />
          </svg>
        </div>
      </div>
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal inset-[19.9%_88.57%_74.09%_8.42%] leading-[normal] not-italic text-[#64748b] text-[11.988px] text-right whitespace-pre-wrap">45</p>
    </div>
  );
}

function Group247() {
  return (
    <div className="absolute contents inset-[0.5%_86.97%_93.49%_8.42%]" data-name="Group">
      <div className="absolute inset-[2%_86.97%_98%_11.82%]" data-name="Vector">
        <div className="absolute inset-[-0.5px_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5.99399 0.998998">
            <path d="M0 0.499499H5.99399" id="Vector" stroke="var(--stroke-0, #64748B)" strokeWidth="0.998998" />
          </svg>
        </div>
      </div>
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal inset-[0.5%_88.57%_93.49%_8.42%] leading-[normal] not-italic text-[#64748b] text-[11.988px] text-right whitespace-pre-wrap">60</p>
    </div>
  );
}

function Group242() {
  return (
    <div className="absolute contents inset-[0.5%_86.97%_11.09%_8.22%]" data-name="Group">
      <Group243 />
      <Group244 />
      <Group245 />
      <Group246 />
      <Group247 />
    </div>
  );
}

function Group241() {
  return (
    <div className="absolute contents inset-[0.5%_86.97%_11.09%_8.22%]" data-name="Group">
      <div className="absolute inset-[2%_86.97%_14%_13.03%]" data-name="Vector">
        <div className="absolute inset-[0_-0.5px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 0.998998 210">
            <path d="M0.499499 0V210" id="Vector" stroke="var(--stroke-0, #64748B)" strokeWidth="0.998998" />
          </svg>
        </div>
      </div>
      <Group242 />
    </div>
  );
}

function Group248() {
  return (
    <div className="absolute inset-[16.8%_0_51.2%_12.02%]" data-name="Group">
      <div className="absolute inset-[-1.87%_-0.34%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 441.557 82.997">
          <g id="Group">
            <path d={svgPaths.p2c1f6a80} id="Vector" stroke="var(--stroke-0, #F59E0B)" strokeWidth="2.99699" />
            <g id="Group_2">
              <path d={svgPaths.p23f14b00} fill="var(--fill-0, #F59E0B)" id="Vector_2" stroke="var(--stroke-0, #F59E0B)" strokeWidth="2.99699" />
              <path d={svgPaths.p3cf5e400} fill="var(--fill-0, #F59E0B)" id="Vector_3" stroke="var(--stroke-0, #F59E0B)" strokeWidth="2.99699" />
              <path d={svgPaths.p28c10600} fill="var(--fill-0, #F59E0B)" id="Vector_4" stroke="var(--stroke-0, #F59E0B)" strokeWidth="2.99699" />
              <path d={svgPaths.p37dcc900} fill="var(--fill-0, #F59E0B)" id="Vector_5" stroke="var(--stroke-0, #F59E0B)" strokeWidth="2.99699" />
            </g>
          </g>
        </svg>
      </div>
    </div>
  );
}

function Surface11() {
  return (
    <div className="absolute h-[250px] left-0 overflow-clip top-0 w-[498.5px]" data-name="Surface">
      <Group232 />
      <Group235 />
      <Group241 />
      <Group248 />
    </div>
  );
}

function LineChart2() {
  return (
    <div className="h-[250px] relative shrink-0 w-full" data-name="LineChart">
      <Surface11 />
    </div>
  );
}

function Container209() {
  return (
    <div className="bg-white col-2 justify-self-stretch relative rounded-[16px] row-1 self-stretch shrink-0" data-name="Container">
      <div aria-hidden="true" className="absolute border-2 border-[rgba(245,158,11,0.19)] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <div className="content-stretch flex flex-col gap-[24px] items-start pb-[2px] pt-[34px] px-[34px] relative size-full">
        <Heading35 />
        <LineChart2 />
      </div>
    </div>
  );
}

function Container207() {
  return (
    <div className="gap-x-[32px] gap-y-[32px] grid grid-cols-[repeat(2,minmax(0,1fr))] grid-rows-[repeat(1,minmax(0,1fr))] h-[370px] relative shrink-0 w-full" data-name="Container">
      <Container208 />
      <Container209 />
    </div>
  );
}

function QuarterSection2() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col gap-[48px] h-[1942px] items-start left-0 pt-[80px] px-[80px] top-0 w-[1325px]" data-name="QuarterSection">
      <Container161 />
      <Container168 />
      <Container183 />
      <Container204 />
      <Container207 />
    </div>
  );
}

function Frame6() {
  return (
    <div className="h-[1942px] relative shrink-0 w-full">
      <QuarterSection2 />
    </div>
  );
}

function Heading36() {
  return (
    <div className="h-[48px] relative shrink-0 w-full" data-name="Heading 2">
      <p className="absolute font-['IBM_Plex_Sans_Arabic:Bold',sans-serif] leading-[48px] left-0 not-italic text-[#0e1320] text-[48px] top-0" dir="auto">
        التوسع والتثبيت
      </p>
    </div>
  );
}

function Paragraph66() {
  return (
    <div className="h-[28px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['IBM_Plex_Sans_Arabic:Regular','Noto_Sans:Regular',sans-serif] leading-[28px] left-[131.49px] text-[#64748b] text-[20px] top-0 w-[170px] whitespace-pre-wrap" dir="auto" style={{ fontVariationSettings: "\'CTGR\' 0, \'wdth\' 100, \'wght\' 400" }}>
        الشهور 10 – 11 – 12
      </p>
    </div>
  );
}

function Container212() {
  return (
    <div className="h-[84px] relative shrink-0 w-[300.68px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[8px] items-start relative size-full">
        <Heading36 />
        <Paragraph66 />
      </div>
    </div>
  );
}

function Container213() {
  return (
    <div className="relative rounded-[16px] shadow-[0px_8px_32px_0px_rgba(239,68,68,0.25)] shrink-0 size-[80px]" data-name="Container" style={{ backgroundImage: "linear-gradient(135deg, rgb(239, 68, 68) 0%, rgba(239, 68, 68, 0.8) 100%)" }}>
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <p className="font-['IBM_Plex_Sans_Arabic:Bold','Noto_Sans:Bold',sans-serif] leading-[36px] relative shrink-0 text-[30px] text-white" style={{ fontVariationSettings: "\'CTGR\' 0, \'wdth\' 100, \'wght\' 700" }}>
          Q4
        </p>
      </div>
    </div>
  );
}

function Container211() {
  return (
    <div className="h-[84px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[16px] items-center pl-[768.32px] relative size-full">
          <Container212 />
          <Container213 />
        </div>
      </div>
    </div>
  );
}

function Icon40() {
  return (
    <div className="absolute left-[1073px] size-[24px] top-[4px]" data-name="Icon">
      <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon">
          <path d={svgPaths.p13253c0} id="Vector" stroke="var(--stroke-0, #EF4444)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d="M16 7H22V13" id="Vector_2" stroke="var(--stroke-0, #EF4444)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Paragraph67() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['IBM_Plex_Sans_Arabic:SemiBold',sans-serif] leading-[20px] left-[194.13px] not-italic text-[#64748b] text-[14px] top-[-0.5px]" dir="auto">
        الهدف
      </p>
    </div>
  );
}

function Paragraph68() {
  return (
    <div className="h-[36px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['IBM_Plex_Sans_Arabic:Regular','Noto_Sans:Regular',sans-serif] leading-[36px] left-0 text-[#0e1320] text-[20px] top-0" dir="auto" style={{ fontVariationSettings: "\'CTGR\' 0, \'wdth\' 100, \'wght\' 400" }}>
        تثبيت النمو والاستعداد للتوسع.
      </p>
    </div>
  );
}

function Container216() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[8px] h-[64px] items-start left-[831.4px] top-0 w-[229.602px]" data-name="Container">
      <Paragraph67 />
      <Paragraph68 />
    </div>
  );
}

function Container215() {
  return (
    <div className="h-[64px] relative shrink-0 w-full" data-name="Container">
      <Icon40 />
      <Container216 />
    </div>
  );
}

function Container214() {
  return (
    <div className="bg-gradient-to-r from-white h-[132px] relative rounded-[16px] shrink-0 to-[#f9fafb] w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-2 border-[rgba(239,68,68,0.25)] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <div className="content-stretch flex flex-col items-start pb-[2px] pt-[34px] px-[34px] relative size-full">
        <Container215 />
      </div>
    </div>
  );
}

function Container210() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] h-[232px] items-start relative shrink-0 w-full" data-name="Container">
      <Container211 />
      <Container214 />
    </div>
  );
}

function Heading37() {
  return (
    <div className="h-[32px] relative shrink-0 w-full" data-name="Heading 3">
      <p className="absolute font-['IBM_Plex_Sans_Arabic:Bold',sans-serif] leading-[32px] left-[435.88px] not-italic text-[#0e1320] text-[24px] top-0" dir="auto">
        التنفيذ
      </p>
    </div>
  );
}

function Icon41() {
  return (
    <div className="absolute left-[478.5px] size-[20px] top-[2px]" data-name="Icon">
      <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g clipPath="url(#clip0_2_3642)" id="Icon">
          <path d={svgPaths.p14d24500} id="Vector" stroke="var(--stroke-0, #EF4444)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p3e012060} id="Vector_2" stroke="var(--stroke-0, #EF4444)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
        <defs>
          <clipPath id="clip0_2_3642">
            <rect fill="white" height="20" width="20" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Paragraph69() {
  return (
    <div className="absolute h-[25.594px] left-[330.27px] top-0 w-[136.227px]" data-name="Paragraph">
      <p className="absolute font-['IBM_Plex_Sans_Arabic:Regular',sans-serif] leading-[25.6px] left-0 not-italic text-[#475569] text-[16px] top-[-0.5px]" dir="auto">
        حملات تشغيل مستمرة
      </p>
    </div>
  );
}

function Container220() {
  return (
    <div className="h-[25.594px] relative shrink-0 w-full" data-name="Container">
      <Icon41 />
      <Paragraph69 />
    </div>
  );
}

function Icon42() {
  return (
    <div className="absolute left-[478.5px] size-[20px] top-[2px]" data-name="Icon">
      <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g clipPath="url(#clip0_2_3642)" id="Icon">
          <path d={svgPaths.p14d24500} id="Vector" stroke="var(--stroke-0, #EF4444)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p3e012060} id="Vector_2" stroke="var(--stroke-0, #EF4444)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
        <defs>
          <clipPath id="clip0_2_3642">
            <rect fill="white" height="20" width="20" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Paragraph70() {
  return (
    <div className="absolute h-[25.594px] left-[352.2px] top-0 w-[114.305px]" data-name="Paragraph">
      <p className="absolute font-['IBM_Plex_Sans_Arabic:Regular',sans-serif] leading-[25.6px] left-0 not-italic text-[#475569] text-[16px] top-[-0.5px]" dir="auto">
        دخول شرائح جديدة
      </p>
    </div>
  );
}

function Container221() {
  return (
    <div className="h-[25.594px] relative shrink-0 w-full" data-name="Container">
      <Icon42 />
      <Paragraph70 />
    </div>
  );
}

function Icon43() {
  return (
    <div className="absolute left-[478.5px] size-[20px] top-[2px]" data-name="Icon">
      <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g clipPath="url(#clip0_2_3642)" id="Icon">
          <path d={svgPaths.p14d24500} id="Vector" stroke="var(--stroke-0, #EF4444)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p3e012060} id="Vector_2" stroke="var(--stroke-0, #EF4444)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
        <defs>
          <clipPath id="clip0_2_3642">
            <rect fill="white" height="20" width="20" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Paragraph71() {
  return (
    <div className="absolute h-[25.594px] left-[359.07px] top-0 w-[107.43px]" data-name="Paragraph">
      <p className="absolute font-['IBM_Plex_Sans_Arabic:Regular',sans-serif] leading-[25.6px] left-0 not-italic text-[#475569] text-[16px] top-[-0.5px]" dir="auto">
        شراكات استراتيجية
      </p>
    </div>
  );
}

function Container222() {
  return (
    <div className="h-[25.594px] relative shrink-0 w-full" data-name="Container">
      <Icon43 />
      <Paragraph71 />
    </div>
  );
}

function Icon44() {
  return (
    <div className="absolute left-[478.5px] size-[20px] top-[2px]" data-name="Icon">
      <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g clipPath="url(#clip0_2_3642)" id="Icon">
          <path d={svgPaths.p14d24500} id="Vector" stroke="var(--stroke-0, #EF4444)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p3e012060} id="Vector_2" stroke="var(--stroke-0, #EF4444)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
        <defs>
          <clipPath id="clip0_2_3642">
            <rect fill="white" height="20" width="20" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Paragraph72() {
  return (
    <div className="absolute h-[25.594px] left-[300.45px] top-0 w-[166.055px]" data-name="Paragraph">
      <p className="absolute font-['IBM_Plex_Sans_Arabic:Regular',sans-serif] leading-[25.6px] left-0 not-italic text-[#475569] text-[16px] top-[-0.5px]" dir="auto">
        إعداد خطة توسع للعام التالي
      </p>
    </div>
  );
}

function Container223() {
  return (
    <div className="h-[25.594px] relative shrink-0 w-full" data-name="Container">
      <Icon44 />
      <Paragraph72 />
    </div>
  );
}

function Container219() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] h-[138.375px] items-start relative shrink-0 w-full" data-name="Container">
      <Container220 />
      <Container221 />
      <Container222 />
      <Container223 />
    </div>
  );
}

function Container218() {
  return (
    <div className="bg-white col-1 justify-self-stretch relative rounded-[16px] row-1 self-stretch shrink-0" data-name="Container">
      <div aria-hidden="true" className="absolute border-2 border-[rgba(239,68,68,0.19)] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <div className="content-stretch flex flex-col gap-[24px] items-start pb-[2px] pt-[34px] px-[34px] relative size-full">
        <Heading37 />
        <Container219 />
      </div>
    </div>
  );
}

function Heading38() {
  return (
    <div className="h-[32px] relative shrink-0 w-[75.625px]" data-name="Heading 3">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['IBM_Plex_Sans_Arabic:Bold',sans-serif] leading-[32px] left-0 not-italic text-[#0e1320] text-[24px] top-0" dir="auto">
          الميزانية
        </p>
      </div>
    </div>
  );
}

function Icon45() {
  return (
    <div className="relative shrink-0 size-[32px]" data-name="Icon">
      <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="Icon">
          <path d="M16 2.66667V29.3333" id="Vector" stroke="var(--stroke-0, #EF4444)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
          <path d={svgPaths.p30e9cc00} id="Vector_2" stroke="var(--stroke-0, #EF4444)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
        </g>
      </svg>
    </div>
  );
}

function Container225() {
  return (
    <div className="h-[32px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[12px] items-center pl-[378.875px] relative size-full">
          <Heading38 />
          <Icon45 />
        </div>
      </div>
    </div>
  );
}

function Text30() {
  return (
    <div className="h-[28px] relative shrink-0 w-[115.344px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['IBM_Plex_Sans_Arabic:SemiBold',sans-serif] leading-[28px] left-0 not-italic text-[#0e1320] text-[20px] top-0 w-[116px] whitespace-pre-wrap" dir="auto">
          100,000 ريال
        </p>
      </div>
    </div>
  );
}

function Text31() {
  return (
    <div className="h-[24px] relative shrink-0 w-[56.695px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['IBM_Plex_Sans_Arabic:Regular','Noto_Sans:Regular',sans-serif] leading-[24px] left-0 text-[#64748b] text-[16px] top-0 w-[57px] whitespace-pre-wrap" dir="auto" style={{ fontVariationSettings: "\'CTGR\' 0, \'wdth\' 100, \'wght\' 400" }}>
          الشهر 10
        </p>
      </div>
    </div>
  );
}

function Container227() {
  return (
    <div className="content-stretch flex h-[28px] items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Text30 />
      <Text31 />
    </div>
  );
}

function Text32() {
  return (
    <div className="h-[28px] relative shrink-0 w-[115.344px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['IBM_Plex_Sans_Arabic:SemiBold',sans-serif] leading-[28px] left-0 not-italic text-[#0e1320] text-[20px] top-0 w-[116px] whitespace-pre-wrap" dir="auto">
          100,000 ريال
        </p>
      </div>
    </div>
  );
}

function Text33() {
  return (
    <div className="h-[24px] relative shrink-0 w-[56.695px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['IBM_Plex_Sans_Arabic:Regular','Noto_Sans:Regular',sans-serif] leading-[24px] left-0 text-[#64748b] text-[16px] top-0 w-[57px] whitespace-pre-wrap" dir="auto" style={{ fontVariationSettings: "\'CTGR\' 0, \'wdth\' 100, \'wght\' 400" }}>
          الشهر 11
        </p>
      </div>
    </div>
  );
}

function Container228() {
  return (
    <div className="content-stretch flex h-[28px] items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Text32 />
      <Text33 />
    </div>
  );
}

function Text34() {
  return (
    <div className="h-[28px] relative shrink-0 w-[115.344px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['IBM_Plex_Sans_Arabic:SemiBold',sans-serif] leading-[28px] left-0 not-italic text-[#0e1320] text-[20px] top-0 w-[116px] whitespace-pre-wrap" dir="auto">
          100,000 ريال
        </p>
      </div>
    </div>
  );
}

function Text35() {
  return (
    <div className="h-[24px] relative shrink-0 w-[56.695px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['IBM_Plex_Sans_Arabic:Regular','Noto_Sans:Regular',sans-serif] leading-[24px] left-0 text-[#64748b] text-[16px] top-0 w-[57px] whitespace-pre-wrap" dir="auto" style={{ fontVariationSettings: "\'CTGR\' 0, \'wdth\' 100, \'wght\' 400" }}>
          الشهر 12
        </p>
      </div>
    </div>
  );
}

function Container229() {
  return (
    <div className="content-stretch flex h-[28px] items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Text34 />
      <Text35 />
    </div>
  );
}

function Text36() {
  return (
    <div className="h-[36px] relative shrink-0 w-[174.609px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['IBM_Plex_Sans_Arabic:Bold','Noto_Sans:Bold',sans-serif] leading-[36px] left-0 text-[#ef4444] text-[30px] top-[0.5px] w-[175px] whitespace-pre-wrap" dir="auto" style={{ fontVariationSettings: "\'CTGR\' 0, \'wdth\' 100, \'wght\' 700" }}>
          300,000 ريال
        </p>
      </div>
    </div>
  );
}

function Text37() {
  return (
    <div className="h-[28px] relative shrink-0 w-[81.742px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['IBM_Plex_Sans_Arabic:SemiBold',sans-serif] leading-[28px] left-0 not-italic text-[#0e1320] text-[18px] top-[0.5px]" dir="auto">
          إجمالي الربع
        </p>
      </div>
    </div>
  );
}

function Container231() {
  return (
    <div className="content-stretch flex h-[36px] items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Text36 />
      <Text37 />
    </div>
  );
}

function Container230() {
  return (
    <div className="content-stretch flex flex-col h-[54px] items-start pt-[18px] relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[rgba(239,68,68,0.13)] border-solid border-t-2 inset-0 pointer-events-none" />
      <Container231 />
    </div>
  );
}

function Container226() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] h-[186px] items-start relative shrink-0 w-full" data-name="Container">
      <Container227 />
      <Container228 />
      <Container229 />
      <Container230 />
    </div>
  );
}

function Container224() {
  return (
    <div className="bg-white col-2 justify-self-stretch relative rounded-[16px] row-1 self-stretch shrink-0" data-name="Container">
      <div aria-hidden="true" className="absolute border-2 border-[rgba(239,68,68,0.19)] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <div className="content-stretch flex flex-col gap-[24px] items-start pb-[2px] pt-[34px] px-[34px] relative size-full">
        <Container225 />
        <Container226 />
      </div>
    </div>
  );
}

function Container217() {
  return (
    <div className="gap-x-[32px] gap-y-[32px] grid grid-cols-[repeat(2,minmax(0,1fr))] grid-rows-[repeat(1,minmax(0,1fr))] h-[310px] relative shrink-0 w-full" data-name="Container">
      <Container218 />
      <Container224 />
    </div>
  );
}

function Heading39() {
  return (
    <div className="h-[32px] relative shrink-0 w-[94.539px]" data-name="Heading 3">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['IBM_Plex_Sans_Arabic:Bold',sans-serif] leading-[32px] left-[-38.96px] not-italic text-[#0e1320] text-[24px] top-0" dir="auto">
          الجدول الزمني
        </p>
      </div>
    </div>
  );
}

function Icon46() {
  return (
    <div className="relative shrink-0 size-[32px]" data-name="Icon">
      <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="Icon">
          <path d="M10.6667 2.66667V8" id="Vector" stroke="var(--stroke-0, #EF4444)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
          <path d="M21.3333 2.66667V8" id="Vector_2" stroke="var(--stroke-0, #EF4444)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
          <path d={svgPaths.p8d31b00} id="Vector_3" stroke="var(--stroke-0, #EF4444)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
          <path d="M4 13.3333H28" id="Vector_4" stroke="var(--stroke-0, #EF4444)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
        </g>
      </svg>
    </div>
  );
}

function Container234() {
  return (
    <div className="h-[32px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[12px] items-center pl-[359.961px] relative size-full">
          <Heading39 />
          <Icon46 />
        </div>
      </div>
    </div>
  );
}

function Paragraph73() {
  return (
    <div className="h-[28px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['IBM_Plex_Sans_Arabic:SemiBold',sans-serif] leading-[28px] left-[389.32px] not-italic text-[#0e1320] text-[18px] top-[0.5px]" dir="auto">
        الشهر العاشر
      </p>
    </div>
  );
}

function Paragraph74() {
  return (
    <div className="content-stretch flex h-[24px] items-start relative shrink-0 w-full" data-name="Paragraph">
      <p className="flex-[1_0_0] font-['IBM_Plex_Sans_Arabic:Regular',sans-serif] leading-[24px] min-h-px min-w-px not-italic relative text-[#64748b] text-[16px] text-right whitespace-pre-wrap" dir="auto">
        تثبيت النمو
      </p>
    </div>
  );
}

function Container237() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[4px] h-[56px] items-start left-0 top-[-6px] w-[474.5px]" data-name="Container">
      <Paragraph73 />
      <Paragraph74 />
    </div>
  );
}

function Container238() {
  return <div className="absolute bg-[#ef4444] left-[483.5px] rounded-[16777200px] size-[16px] top-0" data-name="Container" />;
}

function Container239() {
  return <div className="absolute bg-[rgba(239,68,68,0.19)] h-[56px] left-[490.5px] top-[16px] w-[2px]" data-name="Container" />;
}

function Container236() {
  return (
    <div className="h-[56px] relative shrink-0 w-full" data-name="Container">
      <Container237 />
      <Container238 />
      <Container239 />
    </div>
  );
}

function Paragraph75() {
  return (
    <div className="h-[28px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['IBM_Plex_Sans_Arabic:SemiBold',sans-serif] leading-[28px] left-[347.87px] not-italic text-[#0e1320] text-[18px] top-[0.5px]" dir="auto">
        الشهر الحادي عشر
      </p>
    </div>
  );
}

function Paragraph76() {
  return (
    <div className="content-stretch flex h-[24px] items-start relative shrink-0 w-full" data-name="Paragraph">
      <p className="flex-[1_0_0] font-['IBM_Plex_Sans_Arabic:Regular',sans-serif] leading-[24px] min-h-px min-w-px not-italic relative text-[#64748b] text-[16px] text-right whitespace-pre-wrap" dir="auto">
        استكشاف فرص التوسع
      </p>
    </div>
  );
}

function Container241() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[4px] h-[56px] items-start left-0 top-[-6px] w-[474.5px]" data-name="Container">
      <Paragraph75 />
      <Paragraph76 />
    </div>
  );
}

function Container242() {
  return <div className="absolute bg-[#ef4444] left-[483.5px] rounded-[16777200px] size-[16px] top-0" data-name="Container" />;
}

function Container243() {
  return <div className="absolute bg-[rgba(239,68,68,0.19)] h-[56px] left-[490.5px] top-[16px] w-[2px]" data-name="Container" />;
}

function Container240() {
  return (
    <div className="h-[56px] relative shrink-0 w-full" data-name="Container">
      <Container241 />
      <Container242 />
      <Container243 />
    </div>
  );
}

function Paragraph77() {
  return (
    <div className="h-[28px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['IBM_Plex_Sans_Arabic:SemiBold',sans-serif] leading-[28px] left-[363.09px] not-italic text-[#0e1320] text-[18px] top-[0.5px]" dir="auto">
        الشهر الثاني عشر
      </p>
    </div>
  );
}

function Paragraph78() {
  return (
    <div className="content-stretch flex h-[24px] items-start relative shrink-0 w-full" data-name="Paragraph">
      <p className="flex-[1_0_0] font-['IBM_Plex_Sans_Arabic:Regular',sans-serif] leading-[24px] min-h-px min-w-px not-italic relative text-[#64748b] text-[16px] text-right whitespace-pre-wrap" dir="auto">
        التخطيط للعام التالي
      </p>
    </div>
  );
}

function Container245() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[4px] h-[56px] items-start left-0 top-[-6px] w-[474.5px]" data-name="Container">
      <Paragraph77 />
      <Paragraph78 />
    </div>
  );
}

function Container246() {
  return <div className="absolute bg-[#ef4444] left-[483.5px] rounded-[16777200px] size-[16px] top-0" data-name="Container" />;
}

function Container244() {
  return (
    <div className="h-[56px] relative shrink-0 w-full" data-name="Container">
      <Container245 />
      <Container246 />
    </div>
  );
}

function Container235() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] h-[200px] items-start relative shrink-0 w-full" data-name="Container">
      <Container236 />
      <Container240 />
      <Container244 />
    </div>
  );
}

function Container233() {
  return (
    <div className="bg-white col-1 justify-self-stretch relative rounded-[16px] row-1 self-stretch shrink-0" data-name="Container">
      <div aria-hidden="true" className="absolute border-2 border-[rgba(239,68,68,0.19)] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <div className="content-stretch flex flex-col gap-[24px] items-start pb-[2px] pt-[34px] px-[34px] relative size-full">
        <Container234 />
        <Container235 />
      </div>
    </div>
  );
}

function Heading40() {
  return (
    <div className="h-[32px] relative shrink-0 w-full" data-name="Heading 3">
      <p className="absolute font-['IBM_Plex_Sans_Arabic:Bold',sans-serif] leading-[32px] left-[369.84px] not-italic text-[#0e1320] text-[24px] top-0" dir="auto">
        مؤشرات الأداء
      </p>
    </div>
  );
}

function Paragraph79() {
  return (
    <div className="h-[24px] relative shrink-0 w-[93.414px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['IBM_Plex_Sans_Arabic:Medium',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#0e1320] text-[16px]" dir="auto">
          استقرار الإيرادات
        </p>
      </div>
    </div>
  );
}

function Icon47() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d={svgPaths.p3c797180} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p3ac0b600} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Container250() {
  return (
    <div className="bg-[#ef4444] relative rounded-[10px] shrink-0 size-[40px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Icon47 />
      </div>
    </div>
  );
}

function Container249() {
  return (
    <div className="bg-[rgba(239,68,68,0.06)] h-[72px] relative rounded-[14px] shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[12px] items-center pl-[337.086px] relative size-full">
          <Paragraph79 />
          <Container250 />
        </div>
      </div>
    </div>
  );
}

function Paragraph80() {
  return (
    <div className="h-[24px] relative shrink-0 w-[87.648px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['IBM_Plex_Sans_Arabic:Medium',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#0e1320] text-[16px]" dir="auto">
          جاهزية التوسع
        </p>
      </div>
    </div>
  );
}

function Icon48() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d={svgPaths.p3c797180} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p3ac0b600} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Container252() {
  return (
    <div className="bg-[#ef4444] relative rounded-[10px] shrink-0 size-[40px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Icon48 />
      </div>
    </div>
  );
}

function Container251() {
  return (
    <div className="bg-[rgba(239,68,68,0.06)] h-[72px] relative rounded-[14px] shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[12px] items-center pl-[342.852px] relative size-full">
          <Paragraph80 />
          <Container252 />
        </div>
      </div>
    </div>
  );
}

function Paragraph81() {
  return (
    <div className="h-[24px] relative shrink-0 w-[146.68px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['IBM_Plex_Sans_Arabic:Medium',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#0e1320] text-[16px]" dir="auto">
          تحقيق أعلى إيراد موسمي
        </p>
      </div>
    </div>
  );
}

function Icon49() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d={svgPaths.p3c797180} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p3ac0b600} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Container254() {
  return (
    <div className="bg-[#ef4444] relative rounded-[10px] shrink-0 size-[40px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Icon49 />
      </div>
    </div>
  );
}

function Container253() {
  return (
    <div className="bg-[rgba(239,68,68,0.06)] h-[72px] relative rounded-[14px] shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[12px] items-center pl-[283.82px] relative size-full">
          <Paragraph81 />
          <Container254 />
        </div>
      </div>
    </div>
  );
}

function Container248() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] h-[248px] items-start relative shrink-0 w-full" data-name="Container">
      <Container249 />
      <Container251 />
      <Container253 />
    </div>
  );
}

function Container247() {
  return (
    <div className="bg-white col-2 justify-self-stretch relative rounded-[16px] row-1 self-stretch shrink-0" data-name="Container">
      <div aria-hidden="true" className="absolute border-2 border-[rgba(239,68,68,0.19)] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <div className="content-stretch flex flex-col gap-[24px] items-start pb-[2px] pt-[34px] px-[34px] relative size-full">
        <Heading40 />
        <Container248 />
      </div>
    </div>
  );
}

function Container232() {
  return (
    <div className="gap-x-[32px] gap-y-[32px] grid grid-cols-[repeat(2,minmax(0,1fr))] grid-rows-[repeat(1,minmax(0,1fr))] h-[372px] relative shrink-0 w-full" data-name="Container">
      <Container233 />
      <Container247 />
    </div>
  );
}

function Heading41() {
  return (
    <div className="h-[28px] relative shrink-0 w-full" data-name="Heading 3">
      <p className="absolute font-['IBM_Plex_Sans_Arabic:Bold',sans-serif] leading-[28px] left-[331.18px] not-italic text-[#0e1320] text-[20px] top-0" dir="auto">
        الإيرادات مقابل الأرباح
      </p>
    </div>
  );
}

function Group250() {
  return (
    <div className="absolute inset-[2%_1%_14%_13.03%]" data-name="Group">
      <div className="absolute inset-[-0.24%_0]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 428.57 210.999">
          <g id="Group">
            <path d="M0 210.5H428.57" id="Vector" stroke="var(--stroke-0, #E2E8F0)" strokeDasharray="3 3" strokeWidth="0.998998" />
            <path d="M0 158H428.57" id="Vector_2" stroke="var(--stroke-0, #E2E8F0)" strokeDasharray="3 3" strokeWidth="0.998998" />
            <path d="M0 105.5H428.57" id="Vector_3" stroke="var(--stroke-0, #E2E8F0)" strokeDasharray="3 3" strokeWidth="0.998998" />
            <path d="M0 52.9996H428.57" id="Vector_4" stroke="var(--stroke-0, #E2E8F0)" strokeDasharray="3 3" strokeWidth="0.998998" />
            <path d="M5.7488e-06 0.499499H428.57" id="Vector_5" stroke="var(--stroke-0, #E2E8F0)" strokeDasharray="3 3" strokeWidth="0.998998" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Group251() {
  return (
    <div className="absolute inset-[2%_1%_14%_13.03%]" data-name="Group">
      <div className="absolute inset-[0_-0.12%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 429.569 210">
          <g id="Group">
            <path d="M71.9279 0.000116933V210" id="Vector" stroke="var(--stroke-0, #E2E8F0)" strokeDasharray="3 3" strokeWidth="0.998998" />
            <path d="M214.785 0.000116933V210" id="Vector_2" stroke="var(--stroke-0, #E2E8F0)" strokeDasharray="3 3" strokeWidth="0.998998" />
            <path d="M357.641 0.000116933V210" id="Vector_3" stroke="var(--stroke-0, #E2E8F0)" strokeDasharray="3 3" strokeWidth="0.998998" />
            <path d="M0.499499 0V210" id="Vector_4" stroke="var(--stroke-0, #E2E8F0)" strokeDasharray="3 3" strokeWidth="0.998998" />
            <path d="M429.07 0.000116933V210" id="Vector_5" stroke="var(--stroke-0, #E2E8F0)" strokeDasharray="3 3" strokeWidth="0.998998" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Group249() {
  return (
    <div className="absolute contents inset-[2%_1%_14%_13.03%]" data-name="Group">
      <Group250 />
      <Group251 />
    </div>
  );
}

function Group254() {
  return (
    <div className="absolute contents inset-[86%_65.42%_6.19%_20.14%]" data-name="Group">
      <div className="absolute inset-[86%_72.65%_11.6%_27.35%]" data-name="Vector">
        <div className="absolute inset-[0_-0.5px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 0.998998 6">
            <path d="M0.499499 6V0" id="Vector" stroke="var(--stroke-0, #64748B)" strokeWidth="0.998998" />
          </svg>
        </div>
      </div>
      <p className="absolute font-['Inter:Regular','Noto_Sans_Arabic:Regular',sans-serif] font-normal inset-[87.81%_65.42%_6.19%_20.14%] leading-[normal] not-italic text-[#64748b] text-[11.988px] text-center whitespace-pre-wrap" dir="auto">
        أكتوبر
      </p>
    </div>
  );
}

function Group255() {
  return (
    <div className="absolute contents inset-[86%_36.76%_6.19%_48.8%]" data-name="Group">
      <div className="absolute inset-[86%_43.99%_11.6%_56.01%]" data-name="Vector">
        <div className="absolute inset-[0_-0.5px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 0.998998 6">
            <path d="M0.499499 6V0" id="Vector" stroke="var(--stroke-0, #64748B)" strokeWidth="0.998998" />
          </svg>
        </div>
      </div>
      <p className="absolute font-['Inter:Regular','Noto_Sans_Arabic:Regular',sans-serif] font-normal inset-[87.81%_36.76%_6.19%_48.8%] leading-[normal] not-italic text-[#64748b] text-[11.988px] text-center whitespace-pre-wrap" dir="auto">
        نوفمبر
      </p>
    </div>
  );
}

function Group256() {
  return (
    <div className="absolute contents inset-[86%_8.1%_6.19%_77.45%]" data-name="Group">
      <div className="absolute inset-[86%_15.33%_11.6%_84.67%]" data-name="Vector">
        <div className="absolute inset-[0_-0.5px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 0.998998 6">
            <path d="M0.499499 6V0" id="Vector" stroke="var(--stroke-0, #64748B)" strokeWidth="0.998998" />
          </svg>
        </div>
      </div>
      <p className="absolute font-['Inter:Regular','Noto_Sans_Arabic:Regular',sans-serif] font-normal inset-[87.81%_8.1%_6.19%_77.45%] leading-[normal] not-italic text-[#64748b] text-[11.988px] text-center whitespace-pre-wrap" dir="auto">
        ديسمبر
      </p>
    </div>
  );
}

function Group253() {
  return (
    <div className="absolute contents inset-[86%_8.1%_6.19%_20.14%]" data-name="Group">
      <Group254 />
      <Group255 />
      <Group256 />
    </div>
  );
}

function Group252() {
  return (
    <div className="absolute contents inset-[86%_1%_6.19%_13.03%]" data-name="Group">
      <div className="absolute inset-[86%_1%_14%_13.03%]" data-name="Vector">
        <div className="absolute inset-[-0.5px_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 428.57 0.998998">
            <path d="M0 0.499499H428.57" id="Vector" stroke="var(--stroke-0, #64748B)" strokeWidth="0.998998" />
          </svg>
        </div>
      </div>
      <Group253 />
    </div>
  );
}

function Group259() {
  return (
    <div className="absolute contents inset-[82.9%_86.97%_11.09%_9.82%]" data-name="Group">
      <div className="absolute inset-[86%_86.97%_14%_11.82%]" data-name="Vector">
        <div className="absolute inset-[-0.5px_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5.99399 0.998998">
            <path d="M0 0.499499H5.99399" id="Vector" stroke="var(--stroke-0, #64748B)" strokeWidth="0.998998" />
          </svg>
        </div>
      </div>
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal inset-[82.9%_88.58%_11.09%_9.82%] leading-[normal] not-italic text-[#64748b] text-[11.988px] text-right whitespace-pre-wrap">0</p>
    </div>
  );
}

function Group260() {
  return (
    <div className="absolute contents inset-[61.9%_86.97%_32.09%_2.81%]" data-name="Group">
      <div className="absolute inset-[65%_86.97%_35%_11.82%]" data-name="Vector">
        <div className="absolute inset-[-0.5px_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5.99399 0.998998">
            <path d="M0 0.499499H5.99399" id="Vector" stroke="var(--stroke-0, #64748B)" strokeWidth="0.998998" />
          </svg>
        </div>
      </div>
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal inset-[61.9%_88.57%_32.09%_2.81%] leading-[normal] not-italic text-[#64748b] text-[11.988px] text-right whitespace-pre-wrap">150000</p>
    </div>
  );
}

function Group261() {
  return (
    <div className="absolute contents inset-[40.9%_86.97%_53.09%_2.2%]" data-name="Group">
      <div className="absolute inset-[44%_86.97%_56%_11.82%]" data-name="Vector">
        <div className="absolute inset-[-0.5px_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5.99399 0.998998">
            <path d="M0 0.499499H5.99399" id="Vector" stroke="var(--stroke-0, #64748B)" strokeWidth="0.998998" />
          </svg>
        </div>
      </div>
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal inset-[40.9%_88.57%_53.09%_2.2%] leading-[normal] not-italic text-[#64748b] text-[11.988px] text-right whitespace-pre-wrap">300000</p>
    </div>
  );
}

function Group262() {
  return (
    <div className="absolute contents inset-[19.9%_86.97%_74.09%_2.4%]" data-name="Group">
      <div className="absolute inset-[23%_86.97%_77%_11.82%]" data-name="Vector">
        <div className="absolute inset-[-0.5px_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5.99399 0.998998">
            <path d="M0 0.499499H5.99399" id="Vector" stroke="var(--stroke-0, #64748B)" strokeWidth="0.998998" />
          </svg>
        </div>
      </div>
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal inset-[19.9%_88.57%_74.09%_2.4%] leading-[normal] not-italic text-[#64748b] text-[11.988px] text-right whitespace-pre-wrap">450000</p>
    </div>
  );
}

function Group263() {
  return (
    <div className="absolute contents inset-[0.5%_86.97%_93.49%_2.4%]" data-name="Group">
      <div className="absolute inset-[2%_86.97%_98%_11.82%]" data-name="Vector">
        <div className="absolute inset-[-0.5px_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5.99399 0.998998">
            <path d="M0 0.499499H5.99399" id="Vector" stroke="var(--stroke-0, #64748B)" strokeWidth="0.998998" />
          </svg>
        </div>
      </div>
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal inset-[0.5%_88.57%_93.49%_2.4%] leading-[normal] not-italic text-[#64748b] text-[11.988px] text-right whitespace-pre-wrap">600000</p>
    </div>
  );
}

function Group258() {
  return (
    <div className="absolute contents inset-[0.5%_86.97%_11.09%_2.2%]" data-name="Group">
      <Group259 />
      <Group260 />
      <Group261 />
      <Group262 />
      <Group263 />
    </div>
  );
}

function Group257() {
  return (
    <div className="absolute contents inset-[0.5%_86.97%_11.09%_2.2%]" data-name="Group">
      <div className="absolute inset-[2%_86.97%_14%_13.03%]" data-name="Vector">
        <div className="absolute inset-[0_-0.5px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 0.998998 210">
            <path d="M0.499499 0V210" id="Vector" stroke="var(--stroke-0, #64748B)" strokeWidth="0.998998" />
          </svg>
        </div>
      </div>
      <Group258 />
    </div>
  );
}

function Group267() {
  return (
    <div className="absolute inset-[39.1%_73.09%_14%_15.89%]" data-name="Group">
      <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 54.9449 117.25">
        <g id="Group">
          <path d={svgPaths.p3255e80} fill="var(--fill-0, #EF4444)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group268() {
  return (
    <div className="absolute inset-[33.71%_44.43%_14%_44.55%]" data-name="Group">
      <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 54.9449 130.725">
        <g id="Group">
          <path d={svgPaths.p3767c500} fill="var(--fill-0, #EF4444)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group269() {
  return (
    <div className="absolute inset-[19.47%_15.77%_14%_73.21%]" data-name="Group">
      <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 54.9449 166.32">
        <g id="Group">
          <path d={svgPaths.p2bf05780} fill="var(--fill-0, #EF4444)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group266() {
  return (
    <div className="absolute contents inset-[19.47%_15.77%_14%_15.89%]" data-name="Group">
      <Group267 />
      <Group268 />
      <Group269 />
    </div>
  );
}

function Group265() {
  return (
    <div className="absolute contents inset-[19.47%_15.77%_14%_15.89%]" data-name="Group">
      <Group266 />
    </div>
  );
}

function Group264() {
  return (
    <div className="absolute contents inset-[19.47%_15.77%_14%_15.89%]" data-name="Group">
      <Group265 />
    </div>
  );
}

function Group273() {
  return (
    <div className="absolute inset-[53.1%_61.26%_14%_27.72%]" data-name="Group">
      <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 54.9449 82.25">
        <g id="Group">
          <path d={svgPaths.p2500ab80} fill="var(--fill-0, #22C55E)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group274() {
  return (
    <div className="absolute inset-[47.71%_32.61%_14%_56.37%]" data-name="Group">
      <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 54.9449 95.725">
        <g id="Group">
          <path d={svgPaths.p343590f0} fill="var(--fill-0, #22C55E)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group275() {
  return (
    <div className="absolute inset-[33.47%_3.95%_14%_85.03%]" data-name="Group">
      <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 54.9449 131.32">
        <g id="Group">
          <path d={svgPaths.p1fe03b00} fill="var(--fill-0, #22C55E)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group272() {
  return (
    <div className="absolute contents inset-[33.47%_3.95%_14%_27.72%]" data-name="Group">
      <Group273 />
      <Group274 />
      <Group275 />
    </div>
  );
}

function Group271() {
  return (
    <div className="absolute contents inset-[33.47%_3.95%_14%_27.72%]" data-name="Group">
      <Group272 />
    </div>
  );
}

function Group270() {
  return (
    <div className="absolute contents inset-[33.47%_3.95%_14%_27.72%]" data-name="Group">
      <Group271 />
    </div>
  );
}

function Surface12() {
  return (
    <div className="absolute h-[250px] left-0 overflow-clip top-0 w-[498.5px]" data-name="Surface">
      <Group249 />
      <Group252 />
      <Group257 />
      <Group264 />
      <Group270 />
    </div>
  );
}

function BarChart3() {
  return (
    <div className="h-[250px] relative shrink-0 w-full" data-name="BarChart">
      <Surface12 />
    </div>
  );
}

function Container256() {
  return (
    <div className="bg-white col-1 justify-self-stretch relative rounded-[16px] row-1 self-stretch shrink-0" data-name="Container">
      <div aria-hidden="true" className="absolute border-2 border-[rgba(239,68,68,0.19)] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <div className="content-stretch flex flex-col gap-[24px] items-start pb-[2px] pt-[34px] px-[34px] relative size-full">
        <Heading41 />
        <BarChart3 />
      </div>
    </div>
  );
}

function Heading42() {
  return (
    <div className="h-[28px] relative shrink-0 w-full" data-name="Heading 3">
      <p className="absolute font-['IBM_Plex_Sans_Arabic:Bold',sans-serif] leading-[28px] left-[318.63px] not-italic text-[#0e1320] text-[20px] top-0" dir="auto">
        نمو الإيرادات الموسمية
      </p>
    </div>
  );
}

function Group277() {
  return (
    <div className="absolute inset-[2%_1%_14%_13.03%]" data-name="Group">
      <div className="absolute inset-[-0.24%_0]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 428.57 210.999">
          <g id="Group">
            <path d="M0 210.5H428.57" id="Vector" stroke="var(--stroke-0, #E2E8F0)" strokeDasharray="3 3" strokeWidth="0.998998" />
            <path d="M0 158H428.57" id="Vector_2" stroke="var(--stroke-0, #E2E8F0)" strokeDasharray="3 3" strokeWidth="0.998998" />
            <path d="M0 105.5H428.57" id="Vector_3" stroke="var(--stroke-0, #E2E8F0)" strokeDasharray="3 3" strokeWidth="0.998998" />
            <path d="M0 52.9996H428.57" id="Vector_4" stroke="var(--stroke-0, #E2E8F0)" strokeDasharray="3 3" strokeWidth="0.998998" />
            <path d="M5.7488e-06 0.499499H428.57" id="Vector_5" stroke="var(--stroke-0, #E2E8F0)" strokeDasharray="3 3" strokeWidth="0.998998" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Group278() {
  return (
    <div className="absolute inset-[2%_1%_14%_13.03%]" data-name="Group">
      <div className="absolute inset-[0_-0.12%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 429.569 210">
          <g id="Group">
            <path d="M0.499499 0V210" id="Vector" stroke="var(--stroke-0, #E2E8F0)" strokeDasharray="3 3" strokeWidth="0.998998" />
            <path d="M143.356 0.000116933V210" id="Vector_2" stroke="var(--stroke-0, #E2E8F0)" strokeDasharray="3 3" strokeWidth="0.998998" />
            <path d="M286.213 0.000116933V210" id="Vector_3" stroke="var(--stroke-0, #E2E8F0)" strokeDasharray="3 3" strokeWidth="0.998998" />
            <path d="M429.07 0.000116933V210" id="Vector_4" stroke="var(--stroke-0, #E2E8F0)" strokeDasharray="3 3" strokeWidth="0.998998" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Group276() {
  return (
    <div className="absolute contents inset-[2%_1%_14%_13.03%]" data-name="Group">
      <Group277 />
      <Group278 />
    </div>
  );
}

function Group281() {
  return (
    <div className="absolute contents inset-[86%_77.64%_6.19%_3.71%]" data-name="Group">
      <div className="absolute inset-[86%_86.97%_11.6%_13.03%]" data-name="Vector">
        <div className="absolute inset-[0_-0.5px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 0.998998 6">
            <path d="M0.499499 6V0" id="Vector" stroke="var(--stroke-0, #64748B)" strokeWidth="0.998998" />
          </svg>
        </div>
      </div>
      <p className="absolute font-['Inter:Regular','Noto_Sans_Arabic:Regular',sans-serif] font-normal inset-[87.81%_77.64%_6.19%_3.71%] leading-[normal] not-italic text-[#64748b] text-[11.988px] text-center whitespace-pre-wrap" dir="auto">
        الأسبوع 1
      </p>
    </div>
  );
}

function Group282() {
  return (
    <div className="absolute contents inset-[86%_48.78%_6.19%_32.16%]" data-name="Group">
      <div className="absolute inset-[86%_58.32%_11.6%_41.68%]" data-name="Vector">
        <div className="absolute inset-[0_-0.5px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 0.998998 6">
            <path d="M0.499499 6V0" id="Vector" stroke="var(--stroke-0, #64748B)" strokeWidth="0.998998" />
          </svg>
        </div>
      </div>
      <p className="absolute font-['Inter:Regular','Noto_Sans_Arabic:Regular',sans-serif] font-normal inset-[87.81%_48.78%_6.19%_32.16%] leading-[normal] not-italic text-[#64748b] text-[11.988px] text-center whitespace-pre-wrap" dir="auto">
        الأسبوع 8
      </p>
    </div>
  );
}

function Group283() {
  return (
    <div className="absolute contents inset-[86%_19.62%_6.19%_60.32%]" data-name="Group">
      <div className="absolute inset-[86%_29.66%_11.6%_70.34%]" data-name="Vector">
        <div className="absolute inset-[0_-0.5px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 0.998998 6">
            <path d="M0.499499 6V0" id="Vector" stroke="var(--stroke-0, #64748B)" strokeWidth="0.998998" />
          </svg>
        </div>
      </div>
      <p className="absolute font-['Inter:Regular','Noto_Sans_Arabic:Regular',sans-serif] font-normal inset-[87.81%_19.62%_6.19%_60.32%] leading-[normal] not-italic text-[#64748b] text-[11.988px] text-center whitespace-pre-wrap" dir="auto">
        الأسبوع 16
      </p>
    </div>
  );
}

function Group284() {
  return (
    <div className="absolute contents inset-[86%_-4.96%_6.19%_84.49%]" data-name="Group">
      <div className="absolute inset-[86%_1%_11.6%_99%]" data-name="Vector">
        <div className="absolute inset-[0_-0.5px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 0.998998 6">
            <path d="M0.499499 6V0" id="Vector" stroke="var(--stroke-0, #64748B)" strokeWidth="0.998998" />
          </svg>
        </div>
      </div>
      <p className="absolute font-['Inter:Regular','Noto_Sans_Arabic:Regular',sans-serif] font-normal inset-[87.81%_-4.96%_6.19%_84.49%] leading-[normal] not-italic text-[#64748b] text-[11.988px] text-center whitespace-pre-wrap" dir="auto">
        الأسبوع 24
      </p>
    </div>
  );
}

function Group280() {
  return (
    <div className="absolute contents inset-[86%_-4.96%_6.19%_3.71%]" data-name="Group">
      <Group281 />
      <Group282 />
      <Group283 />
      <Group284 />
    </div>
  );
}

function Group279() {
  return (
    <div className="absolute contents inset-[86%_-4.96%_6.19%_3.71%]" data-name="Group">
      <div className="absolute inset-[86%_1%_14%_13.03%]" data-name="Vector">
        <div className="absolute inset-[-0.5px_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 428.57 0.998998">
            <path d="M0 0.499499H428.57" id="Vector" stroke="var(--stroke-0, #64748B)" strokeWidth="0.998998" />
          </svg>
        </div>
      </div>
      <Group280 />
    </div>
  );
}

function Group287() {
  return (
    <div className="absolute contents inset-[82.9%_86.97%_11.09%_9.82%]" data-name="Group">
      <div className="absolute inset-[86%_86.97%_14%_11.82%]" data-name="Vector">
        <div className="absolute inset-[-0.5px_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5.99399 0.998998">
            <path d="M0 0.499499H5.99399" id="Vector" stroke="var(--stroke-0, #64748B)" strokeWidth="0.998998" />
          </svg>
        </div>
      </div>
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal inset-[82.9%_88.58%_11.09%_9.82%] leading-[normal] not-italic text-[#64748b] text-[11.988px] text-right whitespace-pre-wrap">0</p>
    </div>
  );
}

function Group288() {
  return (
    <div className="absolute contents inset-[61.9%_86.97%_32.09%_3.81%]" data-name="Group">
      <div className="absolute inset-[65%_86.97%_35%_11.82%]" data-name="Vector">
        <div className="absolute inset-[-0.5px_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5.99399 0.998998">
            <path d="M0 0.499499H5.99399" id="Vector" stroke="var(--stroke-0, #64748B)" strokeWidth="0.998998" />
          </svg>
        </div>
      </div>
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal inset-[61.9%_88.57%_32.09%_3.81%] leading-[normal] not-italic text-[#64748b] text-[11.988px] text-right whitespace-pre-wrap">50000</p>
    </div>
  );
}

function Group289() {
  return (
    <div className="absolute contents inset-[40.9%_86.97%_53.09%_2.61%]" data-name="Group">
      <div className="absolute inset-[44%_86.97%_56%_11.82%]" data-name="Vector">
        <div className="absolute inset-[-0.5px_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5.99399 0.998998">
            <path d="M0 0.499499H5.99399" id="Vector" stroke="var(--stroke-0, #64748B)" strokeWidth="0.998998" />
          </svg>
        </div>
      </div>
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal inset-[40.9%_88.57%_53.09%_2.61%] leading-[normal] not-italic text-[#64748b] text-[11.988px] text-right whitespace-pre-wrap">100000</p>
    </div>
  );
}

function Group290() {
  return (
    <div className="absolute contents inset-[19.9%_86.97%_74.09%_2.81%]" data-name="Group">
      <div className="absolute inset-[23%_86.97%_77%_11.82%]" data-name="Vector">
        <div className="absolute inset-[-0.5px_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5.99399 0.998998">
            <path d="M0 0.499499H5.99399" id="Vector" stroke="var(--stroke-0, #64748B)" strokeWidth="0.998998" />
          </svg>
        </div>
      </div>
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal inset-[19.9%_88.57%_74.09%_2.81%] leading-[normal] not-italic text-[#64748b] text-[11.988px] text-right whitespace-pre-wrap">150000</p>
    </div>
  );
}

function Group291() {
  return (
    <div className="absolute contents inset-[0.5%_86.97%_93.49%_2.4%]" data-name="Group">
      <div className="absolute inset-[2%_86.97%_98%_11.82%]" data-name="Vector">
        <div className="absolute inset-[-0.5px_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5.99399 0.998998">
            <path d="M0 0.499499H5.99399" id="Vector" stroke="var(--stroke-0, #64748B)" strokeWidth="0.998998" />
          </svg>
        </div>
      </div>
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal inset-[0.5%_88.57%_93.49%_2.4%] leading-[normal] not-italic text-[#64748b] text-[11.988px] text-right whitespace-pre-wrap">200000</p>
    </div>
  );
}

function Group286() {
  return (
    <div className="absolute contents inset-[0.5%_86.97%_11.09%_2.4%]" data-name="Group">
      <Group287 />
      <Group288 />
      <Group289 />
      <Group290 />
      <Group291 />
    </div>
  );
}

function Group285() {
  return (
    <div className="absolute contents inset-[0.5%_86.97%_11.09%_2.4%]" data-name="Group">
      <div className="absolute inset-[2%_86.97%_14%_13.03%]" data-name="Vector">
        <div className="absolute inset-[0_-0.5px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 0.998998 210">
            <path d="M0.499499 0V210" id="Vector" stroke="var(--stroke-0, #64748B)" strokeWidth="0.998998" />
          </svg>
        </div>
      </div>
      <Group286 />
    </div>
  );
}

function Group295() {
  return (
    <div className="absolute inset-[2.84%_1%_14%_13.03%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px_-7.1px] mask-size-[428.57px_218px]" data-name="Group" style={{ maskImage: `url('${imgGroup}')` }}>
      <div className="absolute inset-[-0.69%_0_0_0]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 429.366 209.338">
          <g id="Group">
            <path d={svgPaths.pb486680} fill="url(#paint0_linear_2_3588)" id="Vector" />
            <path d={svgPaths.p3cc58800} id="Vector_2" stroke="var(--stroke-0, #EF4444)" strokeWidth="2.99699" />
          </g>
          <defs>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_2_3588" x1="0.373332" x2="0.373332" y1="1.43765" y2="209.338">
              <stop offset="0.05" stopColor="#EF4444" stopOpacity="0.3" />
              <stop offset="0.95" stopColor="#EF4444" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </div>
  );
}

function Group294() {
  return (
    <div className="absolute contents inset-[2.84%_1%_14%_13.03%]" data-name="Group">
      <Group295 />
    </div>
  );
}

function ClipPathGroup6() {
  return (
    <div className="absolute contents inset-[0_1%_12.8%_13.03%]" data-name="Clip path group">
      <Group294 />
    </div>
  );
}

function Group293() {
  return (
    <div className="absolute contents inset-[0_1%_12.8%_13.03%]" data-name="Group">
      <ClipPathGroup6 />
    </div>
  );
}

function Group292() {
  return (
    <div className="absolute contents inset-[0_1%_12.8%_13.03%]" data-name="Group">
      <Group293 />
    </div>
  );
}

function Surface13() {
  return (
    <div className="absolute h-[250px] left-0 overflow-clip top-0 w-[498.5px]" data-name="Surface">
      <Group276 />
      <Group279 />
      <Group285 />
      <Group292 />
    </div>
  );
}

function AreaChart6() {
  return (
    <div className="h-[250px] relative shrink-0 w-full" data-name="AreaChart">
      <Surface13 />
    </div>
  );
}

function Container257() {
  return (
    <div className="bg-white col-2 justify-self-stretch relative rounded-[16px] row-1 self-stretch shrink-0" data-name="Container">
      <div aria-hidden="true" className="absolute border-2 border-[rgba(239,68,68,0.19)] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <div className="content-stretch flex flex-col gap-[24px] items-start pb-[2px] pt-[34px] px-[34px] relative size-full">
        <Heading42 />
        <AreaChart6 />
      </div>
    </div>
  );
}

function Container255() {
  return (
    <div className="gap-x-[32px] gap-y-[32px] grid grid-cols-[repeat(2,minmax(0,1fr))] grid-rows-[repeat(1,minmax(0,1fr))] h-[370px] relative shrink-0 w-full" data-name="Container">
      <Container256 />
      <Container257 />
    </div>
  );
}

function Heading43() {
  return (
    <div className="h-[28px] relative shrink-0 w-full" data-name="Heading 3">
      <p className="absolute font-['IBM_Plex_Sans_Arabic:Bold','Noto_Sans:Bold',sans-serif] leading-[28px] left-[378.09px] text-[#0e1320] text-[20px] top-0" dir="auto" style={{ fontVariationSettings: "\'CTGR\' 0, \'wdth\' 100, \'wght\' 700" }}>
        هامش الربح %
      </p>
    </div>
  );
}

function Group297() {
  return (
    <div className="absolute inset-[2%_1%_14%_13.03%]" data-name="Group">
      <div className="absolute inset-[-0.24%_0]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 428.57 210.999">
          <g id="Group">
            <path d="M0 210.499H428.57" id="Vector" stroke="var(--stroke-0, #E2E8F0)" strokeDasharray="3 3" strokeWidth="0.998998" />
            <path d="M0 157.999H428.57" id="Vector_2" stroke="var(--stroke-0, #E2E8F0)" strokeDasharray="3 3" strokeWidth="0.998998" />
            <path d="M0 105.499H428.57" id="Vector_3" stroke="var(--stroke-0, #E2E8F0)" strokeDasharray="3 3" strokeWidth="0.998998" />
            <path d="M0 52.9995H428.57" id="Vector_4" stroke="var(--stroke-0, #E2E8F0)" strokeDasharray="3 3" strokeWidth="0.998998" />
            <path d="M5.7488e-06 0.499499H428.57" id="Vector_5" stroke="var(--stroke-0, #E2E8F0)" strokeDasharray="3 3" strokeWidth="0.998998" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Group298() {
  return (
    <div className="absolute inset-[2%_1%_14%_13.03%]" data-name="Group">
      <div className="absolute inset-[0_-0.12%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 429.569 210">
          <g id="Group">
            <path d="M0.499499 5.13723e-06V210" id="Vector" stroke="var(--stroke-0, #E2E8F0)" strokeDasharray="3 3" strokeWidth="0.998998" />
            <path d="M214.785 0V210" id="Vector_2" stroke="var(--stroke-0, #E2E8F0)" strokeDasharray="3 3" strokeWidth="0.998998" />
            <path d="M429.07 0V210" id="Vector_3" stroke="var(--stroke-0, #E2E8F0)" strokeDasharray="3 3" strokeWidth="0.998998" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Group296() {
  return (
    <div className="absolute contents inset-[2%_1%_14%_13.03%]" data-name="Group">
      <Group297 />
      <Group298 />
    </div>
  );
}

function Group301() {
  return (
    <div className="absolute contents inset-[86%_79.75%_6.19%_5.81%]" data-name="Group">
      <div className="absolute inset-[86%_86.97%_11.6%_13.03%]" data-name="Vector">
        <div className="absolute inset-[0_-0.5px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 0.998998 6">
            <path d="M0.499499 6V0" id="Vector" stroke="var(--stroke-0, #64748B)" strokeWidth="0.998998" />
          </svg>
        </div>
      </div>
      <p className="absolute font-['Inter:Regular','Noto_Sans_Arabic:Regular',sans-serif] font-normal inset-[87.81%_79.75%_6.19%_5.81%] leading-[normal] not-italic text-[#64748b] text-[11.988px] text-center whitespace-pre-wrap" dir="auto">
        نوفمبر
      </p>
    </div>
  );
}

function Group302() {
  return (
    <div className="absolute contents inset-[86%_36.76%_6.19%_48.8%]" data-name="Group">
      <div className="absolute inset-[86%_43.99%_11.6%_56.01%]" data-name="Vector">
        <div className="absolute inset-[0_-0.5px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 0.998998 6">
            <path d="M0.499499 6V0" id="Vector" stroke="var(--stroke-0, #64748B)" strokeWidth="0.998998" />
          </svg>
        </div>
      </div>
      <p className="absolute font-['Inter:Regular','Noto_Sans_Arabic:Regular',sans-serif] font-normal inset-[87.81%_36.76%_6.19%_48.8%] leading-[normal] not-italic text-[#64748b] text-[11.988px] text-center whitespace-pre-wrap" dir="auto">
        ديسمبر
      </p>
    </div>
  );
}

function Group303() {
  return (
    <div className="absolute contents inset-[86%_-3.77%_6.19%_89.33%]" data-name="Group">
      <div className="absolute inset-[86%_1%_11.6%_99%]" data-name="Vector">
        <div className="absolute inset-[0_-0.5px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 0.998998 6">
            <path d="M0.499499 6V0" id="Vector" stroke="var(--stroke-0, #64748B)" strokeWidth="0.998998" />
          </svg>
        </div>
      </div>
      <p className="absolute font-['Inter:Regular','Noto_Sans_Arabic:Regular',sans-serif] font-normal inset-[87.81%_-3.77%_6.19%_89.33%] leading-[normal] not-italic text-[#64748b] text-[11.988px] text-center whitespace-pre-wrap" dir="auto">
        يناير
      </p>
    </div>
  );
}

function Group300() {
  return (
    <div className="absolute contents inset-[86%_-3.77%_6.19%_5.81%]" data-name="Group">
      <Group301 />
      <Group302 />
      <Group303 />
    </div>
  );
}

function Group299() {
  return (
    <div className="absolute contents inset-[86%_-3.77%_6.19%_5.81%]" data-name="Group">
      <div className="absolute inset-[86%_1%_14%_13.03%]" data-name="Vector">
        <div className="absolute inset-[-0.5px_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 428.57 0.998998">
            <path d="M0 0.499499H428.57" id="Vector" stroke="var(--stroke-0, #64748B)" strokeWidth="0.998998" />
          </svg>
        </div>
      </div>
      <Group300 />
    </div>
  );
}

function Group306() {
  return (
    <div className="absolute contents inset-[82.9%_86.97%_11.09%_9.82%]" data-name="Group">
      <div className="absolute inset-[86%_86.97%_14%_11.82%]" data-name="Vector">
        <div className="absolute inset-[-0.5px_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5.99399 0.998998">
            <path d="M0 0.499499H5.99399" id="Vector" stroke="var(--stroke-0, #64748B)" strokeWidth="0.998998" />
          </svg>
        </div>
      </div>
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal inset-[82.9%_88.58%_11.09%_9.82%] leading-[normal] not-italic text-[#64748b] text-[11.988px] text-right whitespace-pre-wrap">0</p>
    </div>
  );
}

function Group307() {
  return (
    <div className="absolute contents inset-[61.9%_86.97%_32.09%_8.42%]" data-name="Group">
      <div className="absolute inset-[65%_86.97%_35%_11.82%]" data-name="Vector">
        <div className="absolute inset-[-0.5px_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5.99399 0.998998">
            <path d="M0 0.499499H5.99399" id="Vector" stroke="var(--stroke-0, #64748B)" strokeWidth="0.998998" />
          </svg>
        </div>
      </div>
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal inset-[61.9%_88.57%_32.09%_8.42%] leading-[normal] not-italic text-[#64748b] text-[11.988px] text-right whitespace-pre-wrap">20</p>
    </div>
  );
}

function Group308() {
  return (
    <div className="absolute contents inset-[40.9%_86.97%_53.09%_8.22%]" data-name="Group">
      <div className="absolute inset-[44%_86.97%_56%_11.82%]" data-name="Vector">
        <div className="absolute inset-[-0.5px_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5.99399 0.998998">
            <path d="M0 0.499499H5.99399" id="Vector" stroke="var(--stroke-0, #64748B)" strokeWidth="0.998998" />
          </svg>
        </div>
      </div>
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal inset-[40.9%_88.57%_53.09%_8.22%] leading-[normal] not-italic text-[#64748b] text-[11.988px] text-right whitespace-pre-wrap">40</p>
    </div>
  );
}

function Group309() {
  return (
    <div className="absolute contents inset-[19.9%_86.97%_74.09%_8.42%]" data-name="Group">
      <div className="absolute inset-[23%_86.97%_77%_11.82%]" data-name="Vector">
        <div className="absolute inset-[-0.5px_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5.99399 0.998998">
            <path d="M0 0.499499H5.99399" id="Vector" stroke="var(--stroke-0, #64748B)" strokeWidth="0.998998" />
          </svg>
        </div>
      </div>
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal inset-[19.9%_88.57%_74.09%_8.42%] leading-[normal] not-italic text-[#64748b] text-[11.988px] text-right whitespace-pre-wrap">60</p>
    </div>
  );
}

function Group310() {
  return (
    <div className="absolute contents inset-[0.5%_86.97%_93.49%_8.42%]" data-name="Group">
      <div className="absolute inset-[2%_86.97%_98%_11.82%]" data-name="Vector">
        <div className="absolute inset-[-0.5px_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5.99399 0.998998">
            <path d="M0 0.499499H5.99399" id="Vector" stroke="var(--stroke-0, #64748B)" strokeWidth="0.998998" />
          </svg>
        </div>
      </div>
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal inset-[0.5%_88.57%_93.49%_8.42%] leading-[normal] not-italic text-[#64748b] text-[11.988px] text-right whitespace-pre-wrap">80</p>
    </div>
  );
}

function Group305() {
  return (
    <div className="absolute contents inset-[0.5%_86.97%_11.09%_8.22%]" data-name="Group">
      <Group306 />
      <Group307 />
      <Group308 />
      <Group309 />
      <Group310 />
    </div>
  );
}

function Group304() {
  return (
    <div className="absolute contents inset-[0.5%_86.97%_11.09%_8.22%]" data-name="Group">
      <div className="absolute inset-[2%_86.97%_14%_13.03%]" data-name="Vector">
        <div className="absolute inset-[0_-0.5px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 0.998998 210">
            <path d="M0.499499 0V210" id="Vector" stroke="var(--stroke-0, #64748B)" strokeWidth="0.998998" />
          </svg>
        </div>
      </div>
      <Group305 />
    </div>
  );
}

function Group314() {
  return (
    <div className="absolute inset-[3.05%_1%_14%_13.03%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px_-7.625px] mask-size-[428.57px_218px]" data-name="Group" style={{ maskImage: `url('${imgGroup}')` }}>
      <div className="absolute inset-[-0.72%_0_0_0]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 428.735 208.868">
          <g id="Group">
            <path d={svgPaths.p378b3200} fill="url(#paint0_linear_2_3620)" id="Vector" />
            <path d={svgPaths.p1bc31f80} id="Vector_2" stroke="var(--stroke-0, #22C55E)" strokeWidth="2.99699" />
          </g>
          <defs>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_2_3620" x1="0.041292" x2="0.041292" y1="1.4934" y2="208.868">
              <stop offset="0.05" stopColor="#22C55E" stopOpacity="0.3" />
              <stop offset="0.95" stopColor="#22C55E" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </div>
  );
}

function Group313() {
  return (
    <div className="absolute contents inset-[3.05%_1%_14%_13.03%]" data-name="Group">
      <Group314 />
    </div>
  );
}

function ClipPathGroup7() {
  return (
    <div className="absolute contents inset-[0_1%_12.8%_13.03%]" data-name="Clip path group">
      <Group313 />
    </div>
  );
}

function Group312() {
  return (
    <div className="absolute contents inset-[0_1%_12.8%_13.03%]" data-name="Group">
      <ClipPathGroup7 />
    </div>
  );
}

function Group311() {
  return (
    <div className="absolute contents inset-[0_1%_12.8%_13.03%]" data-name="Group">
      <Group312 />
    </div>
  );
}

function Surface14() {
  return (
    <div className="absolute h-[250px] left-0 overflow-clip top-0 w-[498.5px]" data-name="Surface">
      <Group296 />
      <Group299 />
      <Group304 />
      <Group311 />
    </div>
  );
}

function AreaChart7() {
  return (
    <div className="h-[250px] relative shrink-0 w-full" data-name="AreaChart">
      <Surface14 />
    </div>
  );
}

function Container259() {
  return (
    <div className="bg-white col-1 justify-self-stretch relative rounded-[16px] row-1 self-stretch shrink-0" data-name="Container">
      <div aria-hidden="true" className="absolute border-2 border-[rgba(239,68,68,0.19)] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <div className="content-stretch flex flex-col gap-[24px] items-start pb-[2px] pt-[34px] px-[34px] relative size-full">
        <Heading43 />
        <AreaChart7 />
      </div>
    </div>
  );
}

function Heading44() {
  return (
    <div className="h-[28px] relative shrink-0 w-full" data-name="Heading 3">
      <p className="absolute font-['IBM_Plex_Sans_Arabic:Bold',sans-serif] leading-[28px] left-[390.08px] not-italic text-[#0e1320] text-[20px] top-0" dir="auto">
        نمو الحجوزات
      </p>
    </div>
  );
}

function Group316() {
  return (
    <div className="absolute inset-[2%_1%_14%_13.03%]" data-name="Group">
      <div className="absolute inset-[-0.24%_0]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 428.57 210.999">
          <g id="Group">
            <path d="M0 210.499H428.57" id="Vector" stroke="var(--stroke-0, #E2E8F0)" strokeDasharray="3 3" strokeWidth="0.998998" />
            <path d="M0 157.999H428.57" id="Vector_2" stroke="var(--stroke-0, #E2E8F0)" strokeDasharray="3 3" strokeWidth="0.998998" />
            <path d="M0 105.499H428.57" id="Vector_3" stroke="var(--stroke-0, #E2E8F0)" strokeDasharray="3 3" strokeWidth="0.998998" />
            <path d="M0 52.9995H428.57" id="Vector_4" stroke="var(--stroke-0, #E2E8F0)" strokeDasharray="3 3" strokeWidth="0.998998" />
            <path d="M5.7488e-06 0.499499H428.57" id="Vector_5" stroke="var(--stroke-0, #E2E8F0)" strokeDasharray="3 3" strokeWidth="0.998998" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Group317() {
  return (
    <div className="absolute inset-[2%_1%_14%_13.03%]" data-name="Group">
      <div className="absolute inset-[0_-0.12%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 429.569 210">
          <g id="Group">
            <path d="M0.499499 5.13723e-06V210" id="Vector" stroke="var(--stroke-0, #E2E8F0)" strokeDasharray="3 3" strokeWidth="0.998998" />
            <path d="M143.356 0V210" id="Vector_2" stroke="var(--stroke-0, #E2E8F0)" strokeDasharray="3 3" strokeWidth="0.998998" />
            <path d="M286.213 0V210" id="Vector_3" stroke="var(--stroke-0, #E2E8F0)" strokeDasharray="3 3" strokeWidth="0.998998" />
            <path d="M429.07 0V210" id="Vector_4" stroke="var(--stroke-0, #E2E8F0)" strokeDasharray="3 3" strokeWidth="0.998998" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Group315() {
  return (
    <div className="absolute contents inset-[2%_1%_14%_13.03%]" data-name="Group">
      <Group316 />
      <Group317 />
    </div>
  );
}

function Group320() {
  return (
    <div className="absolute contents inset-[86%_77.64%_6.19%_3.71%]" data-name="Group">
      <div className="absolute inset-[86%_86.97%_11.6%_13.03%]" data-name="Vector">
        <div className="absolute inset-[0_-0.5px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 0.998998 6">
            <path d="M0.499499 6V0" id="Vector" stroke="var(--stroke-0, #64748B)" strokeWidth="0.998998" />
          </svg>
        </div>
      </div>
      <p className="absolute font-['Inter:Regular','Noto_Sans_Arabic:Regular',sans-serif] font-normal inset-[87.81%_77.64%_6.19%_3.71%] leading-[normal] not-italic text-[#64748b] text-[11.988px] text-center whitespace-pre-wrap" dir="auto">
        الأسبوع 1
      </p>
    </div>
  );
}

function Group321() {
  return (
    <div className="absolute contents inset-[86%_48.78%_6.19%_32.16%]" data-name="Group">
      <div className="absolute inset-[86%_58.32%_11.6%_41.68%]" data-name="Vector">
        <div className="absolute inset-[0_-0.5px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 0.998998 6">
            <path d="M0.499499 6V0" id="Vector" stroke="var(--stroke-0, #64748B)" strokeWidth="0.998998" />
          </svg>
        </div>
      </div>
      <p className="absolute font-['Inter:Regular','Noto_Sans_Arabic:Regular',sans-serif] font-normal inset-[87.81%_48.78%_6.19%_32.16%] leading-[normal] not-italic text-[#64748b] text-[11.988px] text-center whitespace-pre-wrap" dir="auto">
        الأسبوع 8
      </p>
    </div>
  );
}

function Group322() {
  return (
    <div className="absolute contents inset-[86%_19.62%_6.19%_60.32%]" data-name="Group">
      <div className="absolute inset-[86%_29.66%_11.6%_70.34%]" data-name="Vector">
        <div className="absolute inset-[0_-0.5px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 0.998998 6">
            <path d="M0.499499 6V0" id="Vector" stroke="var(--stroke-0, #64748B)" strokeWidth="0.998998" />
          </svg>
        </div>
      </div>
      <p className="absolute font-['Inter:Regular','Noto_Sans_Arabic:Regular',sans-serif] font-normal inset-[87.81%_19.62%_6.19%_60.32%] leading-[normal] not-italic text-[#64748b] text-[11.988px] text-center whitespace-pre-wrap" dir="auto">
        الأسبوع 16
      </p>
    </div>
  );
}

function Group323() {
  return (
    <div className="absolute contents inset-[86%_-4.96%_6.19%_84.49%]" data-name="Group">
      <div className="absolute inset-[86%_1%_11.6%_99%]" data-name="Vector">
        <div className="absolute inset-[0_-0.5px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 0.998998 6">
            <path d="M0.499499 6V0" id="Vector" stroke="var(--stroke-0, #64748B)" strokeWidth="0.998998" />
          </svg>
        </div>
      </div>
      <p className="absolute font-['Inter:Regular','Noto_Sans_Arabic:Regular',sans-serif] font-normal inset-[87.81%_-4.96%_6.19%_84.49%] leading-[normal] not-italic text-[#64748b] text-[11.988px] text-center whitespace-pre-wrap" dir="auto">
        الأسبوع 24
      </p>
    </div>
  );
}

function Group319() {
  return (
    <div className="absolute contents inset-[86%_-4.96%_6.19%_3.71%]" data-name="Group">
      <Group320 />
      <Group321 />
      <Group322 />
      <Group323 />
    </div>
  );
}

function Group318() {
  return (
    <div className="absolute contents inset-[86%_-4.96%_6.19%_3.71%]" data-name="Group">
      <div className="absolute inset-[86%_1%_14%_13.03%]" data-name="Vector">
        <div className="absolute inset-[-0.5px_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 428.57 0.998998">
            <path d="M0 0.499499H428.57" id="Vector" stroke="var(--stroke-0, #64748B)" strokeWidth="0.998998" />
          </svg>
        </div>
      </div>
      <Group319 />
    </div>
  );
}

function Group326() {
  return (
    <div className="absolute contents inset-[82.9%_86.97%_11.09%_9.82%]" data-name="Group">
      <div className="absolute inset-[86%_86.97%_14%_11.82%]" data-name="Vector">
        <div className="absolute inset-[-0.5px_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5.99399 0.998998">
            <path d="M0 0.499499H5.99399" id="Vector" stroke="var(--stroke-0, #64748B)" strokeWidth="0.998998" />
          </svg>
        </div>
      </div>
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal inset-[82.9%_88.58%_11.09%_9.82%] leading-[normal] not-italic text-[#64748b] text-[11.988px] text-right whitespace-pre-wrap">0</p>
    </div>
  );
}

function Group327() {
  return (
    <div className="absolute contents inset-[61.9%_86.97%_32.09%_6.81%]" data-name="Group">
      <div className="absolute inset-[65%_86.97%_35%_11.82%]" data-name="Vector">
        <div className="absolute inset-[-0.5px_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5.99399 0.998998">
            <path d="M0 0.499499H5.99399" id="Vector" stroke="var(--stroke-0, #64748B)" strokeWidth="0.998998" />
          </svg>
        </div>
      </div>
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal inset-[61.9%_88.57%_32.09%_6.81%] leading-[normal] not-italic text-[#64748b] text-[11.988px] text-right whitespace-pre-wrap">400</p>
    </div>
  );
}

function Group328() {
  return (
    <div className="absolute contents inset-[40.9%_86.97%_53.09%_6.81%]" data-name="Group">
      <div className="absolute inset-[44%_86.97%_56%_11.82%]" data-name="Vector">
        <div className="absolute inset-[-0.5px_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5.99399 0.998998">
            <path d="M0 0.499499H5.99399" id="Vector" stroke="var(--stroke-0, #64748B)" strokeWidth="0.998998" />
          </svg>
        </div>
      </div>
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal inset-[40.9%_88.57%_53.09%_6.81%] leading-[normal] not-italic text-[#64748b] text-[11.988px] text-right whitespace-pre-wrap">800</p>
    </div>
  );
}

function Group329() {
  return (
    <div className="absolute contents inset-[19.9%_86.97%_74.09%_5.81%]" data-name="Group">
      <div className="absolute inset-[23%_86.97%_77%_11.82%]" data-name="Vector">
        <div className="absolute inset-[-0.5px_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5.99399 0.998998">
            <path d="M0 0.499499H5.99399" id="Vector" stroke="var(--stroke-0, #64748B)" strokeWidth="0.998998" />
          </svg>
        </div>
      </div>
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal inset-[19.9%_88.57%_74.09%_5.81%] leading-[normal] not-italic text-[#64748b] text-[11.988px] text-right whitespace-pre-wrap">1200</p>
    </div>
  );
}

function Group330() {
  return (
    <div className="absolute contents inset-[0.5%_86.97%_93.49%_5.61%]" data-name="Group">
      <div className="absolute inset-[2%_86.97%_98%_11.82%]" data-name="Vector">
        <div className="absolute inset-[-0.5px_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5.99399 0.998998">
            <path d="M0 0.499499H5.99399" id="Vector" stroke="var(--stroke-0, #64748B)" strokeWidth="0.998998" />
          </svg>
        </div>
      </div>
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal inset-[0.5%_88.57%_93.49%_5.61%] leading-[normal] not-italic text-[#64748b] text-[11.988px] text-right whitespace-pre-wrap">1600</p>
    </div>
  );
}

function Group325() {
  return (
    <div className="absolute contents inset-[0.5%_86.97%_11.09%_5.61%]" data-name="Group">
      <Group326 />
      <Group327 />
      <Group328 />
      <Group329 />
      <Group330 />
    </div>
  );
}

function Group324() {
  return (
    <div className="absolute contents inset-[0.5%_86.97%_11.09%_5.61%]" data-name="Group">
      <div className="absolute inset-[2%_86.97%_14%_13.03%]" data-name="Vector">
        <div className="absolute inset-[0_-0.5px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 0.998998 210">
            <path d="M0.499499 0V210" id="Vector" stroke="var(--stroke-0, #64748B)" strokeWidth="0.998998" />
          </svg>
        </div>
      </div>
      <Group325 />
    </div>
  );
}

function Group331() {
  return (
    <div className="absolute inset-[0.84%_0_46.44%_12.02%]" data-name="Group">
      <div className="absolute inset-[-1.14%_-0.34%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 441.557 134.797">
          <g id="Group">
            <path d={svgPaths.p1f648100} id="Vector" stroke="var(--stroke-0, #EF4444)" strokeWidth="2.99699" />
            <g id="Group_2">
              <path d={svgPaths.p1b98b900} fill="var(--fill-0, #EF4444)" id="Vector_2" stroke="var(--stroke-0, #EF4444)" strokeWidth="2.99699" />
              <path d={svgPaths.paf06e80} fill="var(--fill-0, #EF4444)" id="Vector_3" stroke="var(--stroke-0, #EF4444)" strokeWidth="2.99699" />
              <path d={svgPaths.p1f3fdb80} fill="var(--fill-0, #EF4444)" id="Vector_4" stroke="var(--stroke-0, #EF4444)" strokeWidth="2.99699" />
              <path d={svgPaths.p37dcc900} fill="var(--fill-0, #EF4444)" id="Vector_5" stroke="var(--stroke-0, #EF4444)" strokeWidth="2.99699" />
            </g>
          </g>
        </svg>
      </div>
    </div>
  );
}

function Surface15() {
  return (
    <div className="absolute h-[250px] left-0 overflow-clip top-0 w-[498.5px]" data-name="Surface">
      <Group315 />
      <Group318 />
      <Group324 />
      <Group331 />
    </div>
  );
}

function LineChart3() {
  return (
    <div className="h-[250px] relative shrink-0 w-full" data-name="LineChart">
      <Surface15 />
    </div>
  );
}

function Container260() {
  return (
    <div className="bg-white col-2 justify-self-stretch relative rounded-[16px] row-1 self-stretch shrink-0" data-name="Container">
      <div aria-hidden="true" className="absolute border-2 border-[rgba(239,68,68,0.19)] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <div className="content-stretch flex flex-col gap-[24px] items-start pb-[2px] pt-[34px] px-[34px] relative size-full">
        <Heading44 />
        <LineChart3 />
      </div>
    </div>
  );
}

function Container258() {
  return (
    <div className="gap-x-[32px] gap-y-[32px] grid grid-cols-[repeat(2,minmax(0,1fr))] grid-rows-[repeat(1,minmax(0,1fr))] h-[370px] relative shrink-0 w-full" data-name="Container">
      <Container259 />
      <Container260 />
    </div>
  );
}

function QuarterSection3() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[48px] h-[1990px] items-start left-0 pt-[80px] px-[80px] top-0 w-[1325px]" data-name="QuarterSection" style={{ backgroundImage: "linear-gradient(179.987deg, rgb(255, 255, 255) 105.76%, rgb(26, 35, 50) 111.98%)" }}>
      <Container210 />
      <Container217 />
      <Container232 />
      <Container255 />
      <Container258 />
    </div>
  );
}

function Frame7() {
  return (
    <div className="h-[1990px] relative shrink-0 w-full">
      <QuarterSection3 />
    </div>
  );
}

function Container261() {
  return <div className="absolute bg-[#00c2ff] blur-[128px] left-[945px] opacity-20 rounded-[16777200px] size-[384px] top-[108px]" data-name="Container" />;
}

function Container263() {
  return <div className="absolute bg-[#22c55e] blur-[128px] left-[814.5px] opacity-20 rounded-[16777200px] size-[384px] top-[1049px]" data-name="Container" />;
}

function Heading45() {
  return (
    <div className="absolute h-[60px] left-0 top-[70px] w-[1152px]" data-name="Heading 2">
      <p className="-translate-x-1/2 absolute font-['IBM_Plex_Sans_Arabic:Bold',sans-serif] leading-[60px] left-[576.09px] not-italic text-[60px] text-center text-white top-0" dir="auto">
        العائد المتوقع
      </p>
    </div>
  );
}

function Paragraph82() {
  return (
    <div className="absolute h-[91.188px] left-[128px] top-[162px] w-[896px]" data-name="Paragraph">
      <p className="-translate-x-1/2 absolute font-['IBM_Plex_Sans_Arabic:Regular','Noto_Sans:Regular',sans-serif] leading-[45.6px] left-[448.16px] text-[24px] text-center text-white top-[-0.5px] w-[884px] whitespace-pre-wrap" dir="auto" style={{ fontVariationSettings: "\'CTGR\' 0, \'wdth\' 100, \'wght\' 400" }}>
        بإجمالي استثمار سنوي قدره 1,200,000 ريال، من المتوقع تحقيق إيرادات تتراوح بين 1,952,500 إلى 2,580,000 ريال خلال 12 شهر، مع صافي ربح يتراوح بين 752,500 إلى 1,380,000 ريال.
      </p>
    </div>
  );
}

function Container264() {
  return (
    <div className="absolute h-[253.188px] left-0 top-0 w-[1152px]" data-name="Container">
      <Heading45 />
      <Paragraph82 />
    </div>
  );
}

function Heading46() {
  return (
    <div className="h-[32px] relative shrink-0 w-[217.063px]" data-name="Heading 3">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['IBM_Plex_Sans_Arabic:Bold',sans-serif] leading-[32px] left-0 not-italic text-[24px] text-white top-0" dir="auto">
          التوزيع الربعي للإيرادات
        </p>
      </div>
    </div>
  );
}

function Icon50() {
  return (
    <div className="relative shrink-0 size-[32px]" data-name="Icon">
      <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="Icon">
          <path d={svgPaths.p1dcdf880} id="Vector" stroke="var(--stroke-0, #00C2FF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
          <path d="M24 22.6667V12" id="Vector_2" stroke="var(--stroke-0, #00C2FF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
          <path d="M17.3333 22.6667V6.66667" id="Vector_3" stroke="var(--stroke-0, #00C2FF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
          <path d="M10.6667 22.6667V18.6667" id="Vector_4" stroke="var(--stroke-0, #00C2FF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
        </g>
      </svg>
    </div>
  );
}

function Container266() {
  return (
    <div className="h-[32px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[12px] items-center pl-[808.938px] relative size-full">
          <Heading46 />
          <Icon50 />
        </div>
      </div>
    </div>
  );
}

function Container270() {
  return <div className="bg-[#ef4444] rounded-[16777200px] shrink-0 size-[12px]" data-name="Container" />;
}

function Text38() {
  return (
    <div className="h-[20px] relative shrink-0 w-[18.313px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['IBM_Plex_Sans_Arabic:Regular','Noto_Sans:Regular',sans-serif] leading-[20px] left-0 text-[#94a3b8] text-[14px] top-[-0.5px]" style={{ fontVariationSettings: "\'CTGR\' 0, \'wdth\' 100, \'wght\' 400" }}>
          Q4
        </p>
      </div>
    </div>
  );
}

function Container269() {
  return (
    <div className="absolute content-stretch flex h-[20px] items-center justify-between left-[25px] top-[25px] w-[199.5px]" data-name="Container">
      <Container270 />
      <Text38 />
    </div>
  );
}

function Paragraph83() {
  return (
    <div className="absolute h-[36px] left-[25px] top-[57px] w-[199.5px]" data-name="Paragraph">
      <p className="absolute font-['IBM_Plex_Sans_Arabic:Bold','Noto_Sans:Bold',sans-serif] leading-[36px] left-[124.62px] text-[30px] text-white top-[0.5px] w-[75px] whitespace-pre-wrap" style={{ fontVariationSettings: "\'CTGR\' 0, \'wdth\' 100, \'wght\' 700" }}>
        614K
      </p>
    </div>
  );
}

function Paragraph84() {
  return (
    <div className="absolute h-[16px] left-[25px] top-[101px] w-[199.5px]" data-name="Paragraph">
      <p className="absolute font-['IBM_Plex_Sans_Arabic:Regular',sans-serif] leading-[16px] left-[143.81px] not-italic text-[#64748b] text-[12px] top-0" dir="auto">
        ريال سعودي
      </p>
    </div>
  );
}

function Paragraph85() {
  return (
    <div className="h-[16px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['IBM_Plex_Sans_Arabic:Regular','Noto_Sans:Regular',sans-serif] leading-[16px] left-[148.72px] text-[#ef4444] text-[12px] top-0 w-[51px] whitespace-pre-wrap" dir="auto" style={{ fontVariationSettings: "\'CTGR\' 0, \'wdth\' 100, \'wght\' 400" }}>
        النمو: -3%
      </p>
    </div>
  );
}

function Container271() {
  return (
    <div className="absolute content-stretch flex flex-col h-[29px] items-start left-[25px] pt-[13px] top-[129px] w-[199.5px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[rgba(255,255,255,0.1)] border-solid border-t inset-0 pointer-events-none" />
      <Paragraph85 />
    </div>
  );
}

function Container268() {
  return (
    <div className="bg-[rgba(255,255,255,0.05)] col-1 justify-self-stretch relative rounded-[16px] row-1 self-stretch shrink-0" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <Container269 />
      <Paragraph83 />
      <Paragraph84 />
      <Container271 />
    </div>
  );
}

function Container274() {
  return <div className="bg-[#f59e0b] rounded-[16777200px] shrink-0 size-[12px]" data-name="Container" />;
}

function Text39() {
  return (
    <div className="h-[20px] relative shrink-0 w-[18.313px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['IBM_Plex_Sans_Arabic:Regular','Noto_Sans:Regular',sans-serif] leading-[20px] left-0 text-[#94a3b8] text-[14px] top-[-0.5px]" style={{ fontVariationSettings: "\'CTGR\' 0, \'wdth\' 100, \'wght\' 400" }}>
          Q3
        </p>
      </div>
    </div>
  );
}

function Container273() {
  return (
    <div className="absolute content-stretch flex h-[20px] items-center justify-between left-[25px] top-[25px] w-[199.5px]" data-name="Container">
      <Container274 />
      <Text39 />
    </div>
  );
}

function Paragraph86() {
  return (
    <div className="absolute h-[36px] left-[25px] top-[57px] w-[199.5px]" data-name="Paragraph">
      <p className="absolute font-['IBM_Plex_Sans_Arabic:Bold','Noto_Sans:Bold',sans-serif] leading-[36px] left-[124.62px] text-[30px] text-white top-[0.5px] w-[75px] whitespace-pre-wrap" style={{ fontVariationSettings: "\'CTGR\' 0, \'wdth\' 100, \'wght\' 700" }}>
        634K
      </p>
    </div>
  );
}

function Paragraph87() {
  return (
    <div className="absolute h-[16px] left-[25px] top-[101px] w-[199.5px]" data-name="Paragraph">
      <p className="absolute font-['IBM_Plex_Sans_Arabic:Regular',sans-serif] leading-[16px] left-[143.81px] not-italic text-[#64748b] text-[12px] top-0" dir="auto">
        ريال سعودي
      </p>
    </div>
  );
}

function Paragraph88() {
  return (
    <div className="h-[16px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['IBM_Plex_Sans_Arabic:Regular','Noto_Sans:Regular',sans-serif] leading-[16px] left-[148.72px] text-[#ef4444] text-[12px] top-0 w-[51px] whitespace-pre-wrap" dir="auto" style={{ fontVariationSettings: "\'CTGR\' 0, \'wdth\' 100, \'wght\' 400" }}>
        النمو: -3%
      </p>
    </div>
  );
}

function Container275() {
  return (
    <div className="absolute content-stretch flex flex-col h-[29px] items-start left-[25px] pt-[13px] top-[129px] w-[199.5px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[rgba(255,255,255,0.1)] border-solid border-t inset-0 pointer-events-none" />
      <Paragraph88 />
    </div>
  );
}

function Container272() {
  return (
    <div className="bg-[rgba(255,255,255,0.05)] col-2 justify-self-stretch relative rounded-[16px] row-1 self-stretch shrink-0" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <Container273 />
      <Paragraph86 />
      <Paragraph87 />
      <Container275 />
    </div>
  );
}

function Container278() {
  return <div className="bg-[#00c2ff] rounded-[16777200px] shrink-0 size-[12px]" data-name="Container" />;
}

function Text40() {
  return (
    <div className="h-[20px] relative shrink-0 w-[18.313px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['IBM_Plex_Sans_Arabic:Regular','Noto_Sans:Regular',sans-serif] leading-[20px] left-0 text-[#94a3b8] text-[14px] top-[-0.5px]" style={{ fontVariationSettings: "\'CTGR\' 0, \'wdth\' 100, \'wght\' 400" }}>
          Q2
        </p>
      </div>
    </div>
  );
}

function Container277() {
  return (
    <div className="absolute content-stretch flex h-[20px] items-center justify-between left-[25px] top-[25px] w-[199.5px]" data-name="Container">
      <Container278 />
      <Text40 />
    </div>
  );
}

function Paragraph89() {
  return (
    <div className="absolute h-[36px] left-[25px] top-[57px] w-[199.5px]" data-name="Paragraph">
      <p className="absolute font-['IBM_Plex_Sans_Arabic:Bold','Noto_Sans:Bold',sans-serif] leading-[36px] left-[124.62px] text-[30px] text-white top-[0.5px] w-[75px] whitespace-pre-wrap" style={{ fontVariationSettings: "\'CTGR\' 0, \'wdth\' 100, \'wght\' 700" }}>
        653K
      </p>
    </div>
  );
}

function Paragraph90() {
  return (
    <div className="absolute h-[16px] left-[25px] top-[101px] w-[199.5px]" data-name="Paragraph">
      <p className="absolute font-['IBM_Plex_Sans_Arabic:Regular',sans-serif] leading-[16px] left-[143.81px] not-italic text-[#64748b] text-[12px] top-0" dir="auto">
        ريال سعودي
      </p>
    </div>
  );
}

function Paragraph91() {
  return (
    <div className="h-[16px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['IBM_Plex_Sans_Arabic:Regular','Noto_Sans:Regular',sans-serif] leading-[16px] left-[153.51px] text-[#22c55e] text-[12px] top-0 w-[46px] whitespace-pre-wrap" dir="auto" style={{ fontVariationSettings: "\'CTGR\' 0, \'wdth\' 100, \'wght\' 400" }}>
        النمو: 0%
      </p>
    </div>
  );
}

function Container279() {
  return (
    <div className="absolute content-stretch flex flex-col h-[29px] items-start left-[25px] pt-[13px] top-[129px] w-[199.5px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[rgba(255,255,255,0.1)] border-solid border-t inset-0 pointer-events-none" />
      <Paragraph91 />
    </div>
  );
}

function Container276() {
  return (
    <div className="bg-[rgba(255,255,255,0.05)] col-3 justify-self-stretch relative rounded-[16px] row-1 self-stretch shrink-0" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <Container277 />
      <Paragraph89 />
      <Paragraph90 />
      <Container279 />
    </div>
  );
}

function Container282() {
  return <div className="bg-[#22c55e] rounded-[16777200px] shrink-0 size-[12px]" data-name="Container" />;
}

function Text41() {
  return (
    <div className="h-[20px] relative shrink-0 w-[18.313px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['IBM_Plex_Sans_Arabic:Regular','Noto_Sans:Regular',sans-serif] leading-[20px] left-0 text-[#94a3b8] text-[14px] top-[-0.5px]" style={{ fontVariationSettings: "\'CTGR\' 0, \'wdth\' 100, \'wght\' 400" }}>
          Q1
        </p>
      </div>
    </div>
  );
}

function Container281() {
  return (
    <div className="content-stretch flex h-[20px] items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Container282 />
      <Text41 />
    </div>
  );
}

function Paragraph92() {
  return (
    <div className="h-[36px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['IBM_Plex_Sans_Arabic:Bold','Noto_Sans:Bold',sans-serif] leading-[36px] left-[124.62px] text-[30px] text-white top-[0.5px] w-[75px] whitespace-pre-wrap" style={{ fontVariationSettings: "\'CTGR\' 0, \'wdth\' 100, \'wght\' 700" }}>
        653K
      </p>
    </div>
  );
}

function Paragraph93() {
  return (
    <div className="h-[16px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['IBM_Plex_Sans_Arabic:Regular',sans-serif] leading-[16px] left-[143.81px] not-italic text-[#64748b] text-[12px] top-0" dir="auto">
        ريال سعودي
      </p>
    </div>
  );
}

function Container280() {
  return (
    <div className="bg-[rgba(255,255,255,0.05)] col-4 justify-self-stretch relative rounded-[16px] row-1 self-stretch shrink-0" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <div className="content-stretch flex flex-col gap-[12px] items-start pb-px pt-[25px] px-[25px] relative size-full">
        <Container281 />
        <Paragraph92 />
        <Paragraph93 />
      </div>
    </div>
  );
}

function Container267() {
  return (
    <div className="gap-x-[24px] gap-y-[24px] grid grid-cols-[repeat(4,minmax(0,1fr))] grid-rows-[repeat(1,minmax(0,1fr))] h-[183px] relative shrink-0 w-full" data-name="Container">
      <Container268 />
      <Container272 />
      <Container276 />
      <Container280 />
    </div>
  );
}

function Container265() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.05)] content-stretch flex flex-col gap-[32px] h-[329px] items-start left-0 pb-px pt-[41px] px-[41px] rounded-[24px] top-[1004.19px] w-[1152px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none rounded-[24px]" />
      <Container266 />
      <Container267 />
    </div>
  );
}

function Icon51() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icon">
      <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon">
          <path d="M12 2V22" id="Vector" stroke="var(--stroke-0, #EF4444)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d={svgPaths.p2ba0dca0} id="Vector_2" stroke="var(--stroke-0, #EF4444)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Container285() {
  return (
    <div className="absolute bg-[rgba(239,68,68,0.13)] content-stretch flex items-center justify-center left-[197px] rounded-[14px] size-[48px] top-[25px]" data-name="Container">
      <Icon51 />
    </div>
  );
}

function Paragraph94() {
  return (
    <div className="absolute h-[32px] left-[25px] top-[89px] w-[220px]" data-name="Paragraph">
      <p className="absolute font-['IBM_Plex_Sans_Arabic:Bold','Noto_Sans:Bold',sans-serif] leading-[32px] left-[109.11px] text-[24px] text-white top-0 w-[111px] whitespace-pre-wrap" dir="auto" style={{ fontVariationSettings: "\'CTGR\' 0, \'wdth\' 100, \'wght\' 700" }}>
        1,920 ريال
      </p>
    </div>
  );
}

function Paragraph95() {
  return (
    <div className="absolute h-[20px] left-[25px] top-[129px] w-[220px]" data-name="Paragraph">
      <p className="absolute font-['IBM_Plex_Sans_Arabic:Regular','Noto_Sans:Regular',sans-serif] leading-[20px] left-[121.61px] text-[#94a3b8] text-[14px] top-[-0.5px] w-[99px] whitespace-pre-wrap" dir="auto" style={{ fontVariationSettings: "\'CTGR\' 0, \'wdth\' 100, \'wght\' 400" }}>
        قيمة العميل (LTV)
      </p>
    </div>
  );
}

function Container284() {
  return (
    <div className="bg-[rgba(255,255,255,0.05)] col-1 justify-self-stretch relative rounded-[16px] row-1 self-stretch shrink-0" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <Container285 />
      <Paragraph94 />
      <Paragraph95 />
    </div>
  );
}

function Icon52() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icon">
      <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon">
          <path d={svgPaths.p13253c0} id="Vector" stroke="var(--stroke-0, #F59E0B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d="M16 7H22V13" id="Vector_2" stroke="var(--stroke-0, #F59E0B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Container287() {
  return (
    <div className="absolute bg-[rgba(245,158,11,0.13)] content-stretch flex items-center justify-center left-[197px] rounded-[14px] size-[48px] top-[25px]" data-name="Container">
      <Icon52 />
    </div>
  );
}

function Paragraph96() {
  return (
    <div className="absolute h-[32px] left-[25px] top-[89px] w-[220px]" data-name="Paragraph">
      <p className="absolute font-['IBM_Plex_Sans_Arabic:Bold','Noto_Sans:Bold',sans-serif] leading-[32px] left-[130.5px] text-[24px] text-white top-[-0.19px]" dir="auto" style={{ fontVariationSettings: "\'CTGR\' 0, \'wdth\' 100, \'wght\' 700" }}>
        125 ريال
      </p>
    </div>
  );
}

function Paragraph97() {
  return (
    <div className="absolute h-[20px] left-[25px] top-[129px] w-[220px]" data-name="Paragraph">
      <p className="absolute font-['IBM_Plex_Sans_Arabic:Regular',sans-serif] leading-[20px] left-[119.9px] not-italic text-[#94a3b8] text-[14px] top-[-0.5px]" dir="auto">
        متوسط قيمة الحجز
      </p>
    </div>
  );
}

function Container286() {
  return (
    <div className="bg-[rgba(255,255,255,0.05)] col-2 justify-self-stretch relative rounded-[16px] row-1 self-stretch shrink-0" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <Container287 />
      <Paragraph96 />
      <Paragraph97 />
    </div>
  );
}

function Icon53() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icon">
      <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon">
          <path d="M19 5L5 19" id="Vector" stroke="var(--stroke-0, #22C55E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d={svgPaths.p2e4e9170} id="Vector_2" stroke="var(--stroke-0, #22C55E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d={svgPaths.p2517da40} id="Vector_3" stroke="var(--stroke-0, #22C55E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Container289() {
  return (
    <div className="absolute bg-[rgba(34,197,94,0.13)] content-stretch flex items-center justify-center left-[197px] rounded-[14px] size-[48px] top-[25px]" data-name="Container">
      <Icon53 />
    </div>
  );
}

function Paragraph98() {
  return (
    <div className="absolute h-[32px] left-[25px] top-[89px] w-[220px]" data-name="Paragraph">
      <p className="absolute font-['IBM_Plex_Sans_Arabic:Bold','Noto_Sans:Bold',sans-serif] leading-[32px] left-[160.38px] text-[24px] text-white top-0" style={{ fontVariationSettings: "\'CTGR\' 0, \'wdth\' 100, \'wght\' 700" }}>
        8.5%
      </p>
    </div>
  );
}

function Paragraph99() {
  return (
    <div className="absolute h-[20px] left-[25px] top-[129px] w-[220px]" data-name="Paragraph">
      <p className="absolute font-['IBM_Plex_Sans_Arabic:Regular',sans-serif] leading-[20px] left-[86.24px] not-italic text-[#94a3b8] text-[14px] top-[-0.5px]" dir="auto">
        معدل التحويل المستهدف
      </p>
    </div>
  );
}

function Container288() {
  return (
    <div className="bg-[rgba(255,255,255,0.05)] col-3 justify-self-stretch relative rounded-[16px] row-1 self-stretch shrink-0" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <Container289 />
      <Paragraph98 />
      <Paragraph99 />
    </div>
  );
}

function Icon54() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icon">
      <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon">
          <path d={svgPaths.p1d820380} id="Vector" stroke="var(--stroke-0, #00C2FF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d={svgPaths.p161d4800} id="Vector_2" stroke="var(--stroke-0, #00C2FF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d={svgPaths.p2981fe00} id="Vector_3" stroke="var(--stroke-0, #00C2FF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d={svgPaths.p13e20900} id="Vector_4" stroke="var(--stroke-0, #00C2FF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Container291() {
  return (
    <div className="absolute bg-[rgba(0,194,255,0.13)] content-stretch flex items-center justify-center left-[197px] rounded-[14px] size-[48px] top-[25px]" data-name="Container">
      <Icon54 />
    </div>
  );
}

function Paragraph100() {
  return (
    <div className="absolute h-[32px] left-[25px] top-[89px] w-[220px]" data-name="Paragraph">
      <p className="absolute font-['IBM_Plex_Sans_Arabic:Bold','Noto_Sans:Bold',sans-serif] leading-[32px] left-[126.15px] text-[24px] text-white top-0 w-[94px] whitespace-pre-wrap" style={{ fontVariationSettings: "\'CTGR\' 0, \'wdth\' 100, \'wght\' 700" }}>
        18,500+
      </p>
    </div>
  );
}

function Paragraph101() {
  return (
    <div className="absolute h-[20px] left-[25px] top-[129px] w-[220px]" data-name="Paragraph">
      <p className="absolute font-['IBM_Plex_Sans_Arabic:Regular',sans-serif] leading-[20px] left-[85.19px] not-italic text-[#94a3b8] text-[14px] top-[-0.5px]" dir="auto">
        إجمالي الحجوزات المتوقعة
      </p>
    </div>
  );
}

function Container290() {
  return (
    <div className="bg-[rgba(255,255,255,0.05)] col-4 justify-self-stretch relative rounded-[16px] row-1 self-stretch shrink-0" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <Container291 />
      <Paragraph100 />
      <Paragraph101 />
    </div>
  );
}

function Container283() {
  return (
    <div className="absolute gap-x-[24px] gap-y-[24px] grid grid-cols-[repeat(4,minmax(0,1fr))] grid-rows-[repeat(1,minmax(0,1fr))] h-[174px] left-0 top-[1381.19px] w-[1152px]" data-name="Container">
      <Container284 />
      <Container286 />
      <Container288 />
      <Container290 />
    </div>
  );
}

function Container293() {
  return <div className="absolute bg-[#00c2ff] blur-[96px] left-[892px] opacity-10 rounded-[16777200px] size-[256px] top-0" data-name="Container" />;
}

function Paragraph102() {
  return (
    <div className="h-[28px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="-translate-x-1/2 absolute font-['IBM_Plex_Sans_Arabic:Regular','Noto_Sans:Regular',sans-serif] leading-[28px] left-[526.09px] text-[#b4c6d8] text-[20px] text-center top-0 w-[238px] whitespace-pre-wrap" dir="auto" style={{ fontVariationSettings: "\'CTGR\' 0, \'wdth\' 100, \'wght\' 400" }}>
        نسبة العائد على الاستثمار (ROI)
      </p>
    </div>
  );
}

function Paragraph103() {
  return (
    <div className="h-[72px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="-translate-x-1/2 absolute font-['IBM_Plex_Sans_Arabic:Bold','Noto_Sans:Bold',sans-serif] leading-[72px] left-[100px] text-[72px] text-center text-white top-0 w-[200px] whitespace-pre-wrap" style={{ fontVariationSettings: "\'CTGR\' 0, \'wdth\' 100, \'wght\' 700" }}>
        115%
      </p>
    </div>
  );
}

function Paragraph104() {
  return (
    <div className="h-[28px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="-translate-x-1/2 absolute font-['IBM_Plex_Sans_Arabic:Regular',sans-serif] leading-[28px] left-[99.38px] not-italic text-[#22c55e] text-[18px] text-center top-[0.5px]" dir="auto">
        السيناريو المتفائل
      </p>
    </div>
  );
}

function Container296() {
  return (
    <div className="h-[108px] relative shrink-0 w-[199.734px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[8px] items-start relative size-full">
        <Paragraph103 />
        <Paragraph104 />
      </div>
    </div>
  );
}

function Container297() {
  return <div className="bg-[rgba(255,255,255,0.2)] h-[96px] shrink-0 w-px" data-name="Container" />;
}

function Paragraph105() {
  return (
    <div className="h-[72px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="-translate-x-1/2 absolute font-['IBM_Plex_Sans_Arabic:Bold','Noto_Sans:Bold',sans-serif] leading-[72px] left-[78.5px] text-[72px] text-center text-white top-0 w-[157px] whitespace-pre-wrap" style={{ fontVariationSettings: "\'CTGR\' 0, \'wdth\' 100, \'wght\' 700" }}>
        63%
      </p>
    </div>
  );
}

function Paragraph106() {
  return (
    <div className="h-[28px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="-translate-x-1/2 absolute font-['IBM_Plex_Sans_Arabic:Regular',sans-serif] leading-[28px] left-[78.54px] not-italic text-[#00c2ff] text-[18px] text-center top-[0.5px]" dir="auto">
        السيناريو المحافظ
      </p>
    </div>
  );
}

function Container298() {
  return (
    <div className="h-[108px] relative shrink-0 w-[156.539px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[8px] items-start relative size-full">
        <Paragraph105 />
        <Paragraph106 />
      </div>
    </div>
  );
}

function Container295() {
  return (
    <div className="h-[108px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex gap-[24px] items-center justify-center pl-[0.008px] relative size-full">
          <Container296 />
          <Container297 />
          <Container298 />
        </div>
      </div>
    </div>
  );
}

function Container294() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[16px] h-[152px] items-start left-[48px] top-[48px] w-[1052px]" data-name="Container">
      <Paragraph102 />
      <Container295 />
    </div>
  );
}

function Container292() {
  return (
    <div className="absolute bg-gradient-to-r border-2 border-[rgba(0,194,255,0.3)] border-solid from-[rgba(0,194,255,0.1)] h-[252px] left-0 overflow-clip rounded-[24px] to-[rgba(34,197,94,0.1)] top-[704.19px] w-[1152px]" data-name="Container">
      <Container293 />
      <Container294 />
    </div>
  );
}

function Icon55() {
  return (
    <div className="relative shrink-0 size-[32px]" data-name="Icon">
      <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="Icon">
          <path d="M16 2.66667V29.3333" id="Vector" stroke="var(--stroke-0, #EF4444)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
          <path d={svgPaths.p30e9cc00} id="Vector_2" stroke="var(--stroke-0, #EF4444)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
        </g>
      </svg>
    </div>
  );
}

function Container302() {
  return (
    <div className="absolute bg-[rgba(239,68,68,0.2)] content-stretch flex items-center justify-center left-[232.66px] rounded-[16px] size-[64px] top-0" data-name="Container">
      <Icon55 />
    </div>
  );
}

function Paragraph107() {
  return (
    <div className="absolute h-[20px] left-0 top-[88px] w-[296.664px]" data-name="Paragraph">
      <p className="absolute font-['IBM_Plex_Sans_Arabic:Regular',sans-serif] leading-[20px] left-[215.69px] not-italic text-[#94a3b8] text-[14px] top-[-0.5px]" dir="auto">
        إجمالي الاستثمار
      </p>
    </div>
  );
}

function Paragraph108() {
  return (
    <div className="absolute h-[48px] left-0 top-[120px] w-[296.664px]" data-name="Paragraph">
      <p className="absolute font-['IBM_Plex_Sans_Arabic:Bold','Noto_Sans:Bold',sans-serif] leading-[48px] left-[156.07px] text-[48px] text-white top-0" style={{ fontVariationSettings: "\'CTGR\' 0, \'wdth\' 100, \'wght\' 700" }}>
        1.20M
      </p>
    </div>
  );
}

function Paragraph109() {
  return (
    <div className="absolute h-[28px] left-0 top-[176px] w-[296.664px]" data-name="Paragraph">
      <p className="absolute font-['IBM_Plex_Sans_Arabic:Regular',sans-serif] leading-[28px] left-[213.14px] not-italic text-[#b4c6d8] text-[18px] top-[0.5px]" dir="auto">
        ريال سعودي
      </p>
    </div>
  );
}

function Paragraph110() {
  return (
    <div className="h-[16px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['IBM_Plex_Sans_Arabic:Regular','Noto_Sans:Regular',sans-serif] leading-[16px] left-[180.43px] text-[#64748b] text-[12px] top-0 w-[117px] whitespace-pre-wrap" dir="auto" style={{ fontVariationSettings: "\'CTGR\' 0, \'wdth\' 100, \'wght\' 400" }}>
        100,000 ريال × 12 شهر
      </p>
    </div>
  );
}

function Container303() {
  return (
    <div className="absolute content-stretch flex flex-col h-[33px] items-start left-0 pt-[17px] top-[220px] w-[296.664px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[rgba(255,255,255,0.1)] border-solid border-t inset-0 pointer-events-none" />
      <Paragraph110 />
    </div>
  );
}

function Container301() {
  return (
    <div className="h-[253px] relative shrink-0 w-full" data-name="Container">
      <Container302 />
      <Paragraph107 />
      <Paragraph108 />
      <Paragraph109 />
      <Container303 />
    </div>
  );
}

function Container300() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.05)] content-stretch flex flex-col h-[339px] items-start left-[789.34px] pb-px pt-[33px] px-[33px] rounded-[24px] top-0 w-[362.664px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none rounded-[24px]" />
      <Container301 />
    </div>
  );
}

function Icon56() {
  return (
    <div className="relative shrink-0 size-[32px]" data-name="Icon">
      <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="Icon">
          <path d={svgPaths.p26f31180} id="Vector" stroke="var(--stroke-0, #22C55E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
          <path d={svgPaths.pdbcea00} id="Vector_2" stroke="var(--stroke-0, #22C55E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
        </g>
      </svg>
    </div>
  );
}

function Container306() {
  return (
    <div className="absolute bg-[rgba(34,197,94,0.2)] content-stretch flex items-center justify-center left-[232.66px] rounded-[16px] size-[64px] top-0" data-name="Container">
      <Icon56 />
    </div>
  );
}

function Paragraph111() {
  return (
    <div className="absolute h-[20px] left-0 top-[88px] w-[296.664px]" data-name="Paragraph">
      <p className="absolute font-['IBM_Plex_Sans_Arabic:Regular','Noto_Sans:Regular',sans-serif] leading-[20px] left-[150.04px] text-[#94a3b8] text-[14px] top-[-0.5px]" dir="auto" style={{ fontVariationSettings: "\'CTGR\' 0, \'wdth\' 100, \'wght\' 400" }}>
        الإيرادات (السيناريو المتفائل)
      </p>
    </div>
  );
}

function Paragraph112() {
  return (
    <div className="absolute h-[48px] left-0 top-[120px] w-[296.664px]" data-name="Paragraph">
      <p className="absolute font-['IBM_Plex_Sans_Arabic:Bold','Noto_Sans:Bold',sans-serif] leading-[48px] left-[156.07px] text-[48px] text-white top-0" style={{ fontVariationSettings: "\'CTGR\' 0, \'wdth\' 100, \'wght\' 700" }}>
        2.58M
      </p>
    </div>
  );
}

function Paragraph113() {
  return (
    <div className="absolute h-[28px] left-0 top-[176px] w-[296.664px]" data-name="Paragraph">
      <p className="absolute font-['IBM_Plex_Sans_Arabic:Regular',sans-serif] leading-[28px] left-[213.14px] not-italic text-[#b4c6d8] text-[18px] top-[0.5px]" dir="auto">
        ريال سعودي
      </p>
    </div>
  );
}

function Paragraph114() {
  return (
    <div className="h-[16px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['IBM_Plex_Sans_Arabic:Regular','Noto_Sans:Regular',sans-serif] leading-[16px] left-[166.15px] text-[#22c55e] text-[12px] top-0 w-[131px] whitespace-pre-wrap" dir="auto" style={{ fontVariationSettings: "\'CTGR\' 0, \'wdth\' 100, \'wght\' 400" }}>
        صافي الربح: 1,380,000 ريال
      </p>
    </div>
  );
}

function Paragraph115() {
  return (
    <div className="h-[16px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['IBM_Plex_Sans_Arabic:Regular','Noto_Sans:Regular',sans-serif] leading-[16px] left-[218.6px] text-[#64748b] text-[12px] top-0 w-[79px] whitespace-pre-wrap" dir="auto" style={{ fontVariationSettings: "\'CTGR\' 0, \'wdth\' 100, \'wght\' 400" }}>
        نسبة الربح: 53%
      </p>
    </div>
  );
}

function Container307() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[4px] h-[53px] items-start left-0 pt-[17px] top-[220px] w-[296.664px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[rgba(255,255,255,0.1)] border-solid border-t inset-0 pointer-events-none" />
      <Paragraph114 />
      <Paragraph115 />
    </div>
  );
}

function Container305() {
  return (
    <div className="h-[273px] relative shrink-0 w-full" data-name="Container">
      <Container306 />
      <Paragraph111 />
      <Paragraph112 />
      <Paragraph113 />
      <Container307 />
    </div>
  );
}

function Container304() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.05)] content-stretch flex flex-col h-[339px] items-start left-[0.01px] pb-px pt-[33px] px-[33px] rounded-[24px] top-0 w-[362.664px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none rounded-[24px]" />
      <Container305 />
    </div>
  );
}

function Icon57() {
  return (
    <div className="relative shrink-0 size-[32px]" data-name="Icon">
      <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="Icon">
          <path d={svgPaths.p26c56780} id="Vector" stroke="var(--stroke-0, #00C2FF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
          <path d={svgPaths.p18cb7e80} id="Vector_2" stroke="var(--stroke-0, #00C2FF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
        </g>
      </svg>
    </div>
  );
}

function Container310() {
  return (
    <div className="absolute bg-[rgba(0,194,255,0.2)] content-stretch flex items-center justify-center left-[232.66px] rounded-[16px] size-[64px] top-0" data-name="Container">
      <Icon57 />
    </div>
  );
}

function Paragraph116() {
  return (
    <div className="absolute h-[20px] left-0 top-[88px] w-[296.664px]" data-name="Paragraph">
      <p className="absolute font-['IBM_Plex_Sans_Arabic:Regular','Noto_Sans:Regular',sans-serif] leading-[20px] left-[147.32px] text-[#94a3b8] text-[14px] top-[-0.5px]" dir="auto" style={{ fontVariationSettings: "\'CTGR\' 0, \'wdth\' 100, \'wght\' 400" }}>
        الإيرادات (السيناريو المحافظ)
      </p>
    </div>
  );
}

function Paragraph117() {
  return (
    <div className="absolute h-[48px] left-0 top-[120px] w-[296.664px]" data-name="Paragraph">
      <p className="absolute font-['IBM_Plex_Sans_Arabic:Bold','Noto_Sans:Bold',sans-serif] leading-[48px] left-[156.07px] text-[48px] text-white top-0" style={{ fontVariationSettings: "\'CTGR\' 0, \'wdth\' 100, \'wght\' 700" }}>
        1.95M
      </p>
    </div>
  );
}

function Paragraph118() {
  return (
    <div className="absolute h-[28px] left-0 top-[176px] w-[296.664px]" data-name="Paragraph">
      <p className="absolute font-['IBM_Plex_Sans_Arabic:Regular',sans-serif] leading-[28px] left-[213.14px] not-italic text-[#b4c6d8] text-[18px] top-[0.5px]" dir="auto">
        ريال سعودي
      </p>
    </div>
  );
}

function Paragraph119() {
  return (
    <div className="h-[16px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['IBM_Plex_Sans_Arabic:Regular','Noto_Sans:Regular',sans-serif] leading-[16px] left-[176.61px] text-[#22c55e] text-[12px] top-0 w-[121px] whitespace-pre-wrap" dir="auto" style={{ fontVariationSettings: "\'CTGR\' 0, \'wdth\' 100, \'wght\' 400" }}>
        صافي الربح: 752,500 ريال
      </p>
    </div>
  );
}

function Paragraph120() {
  return (
    <div className="h-[16px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['IBM_Plex_Sans_Arabic:Regular','Noto_Sans:Regular',sans-serif] leading-[16px] left-[218.6px] text-[#64748b] text-[12px] top-0 w-[79px] whitespace-pre-wrap" dir="auto" style={{ fontVariationSettings: "\'CTGR\' 0, \'wdth\' 100, \'wght\' 400" }}>
        نسبة الربح: 39%
      </p>
    </div>
  );
}

function Container311() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[4px] h-[53px] items-start left-0 pt-[17px] top-[220px] w-[296.664px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[rgba(255,255,255,0.1)] border-solid border-t inset-0 pointer-events-none" />
      <Paragraph119 />
      <Paragraph120 />
    </div>
  );
}

function Container309() {
  return (
    <div className="h-[273px] relative shrink-0 w-full" data-name="Container">
      <Container310 />
      <Paragraph116 />
      <Paragraph117 />
      <Paragraph118 />
      <Container311 />
    </div>
  );
}

function Container308() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.05)] content-stretch flex flex-col h-[339px] items-start left-[394.67px] pb-px pt-[33px] px-[33px] rounded-[24px] top-0 w-[362.664px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none rounded-[24px]" />
      <Container309 />
    </div>
  );
}

function Container299() {
  return (
    <div className="absolute h-[339px] left-0 top-[317.19px] w-[1152px]" data-name="Container">
      <Container300 />
      <Container304 />
      <Container308 />
    </div>
  );
}

function Container262() {
  return (
    <div className="absolute h-[1555.188px] left-[86.5px] top-[96px] w-[1152px]" data-name="Container">
      <Container263 />
      <Container264 />
      <Container265 />
      <Container283 />
      <Container292 />
      <Container299 />
    </div>
  );
}

function Icon58() {
  return (
    <div className="absolute left-[141.48px] size-[20px] top-[12px]" data-name="Icon">
      <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g clipPath="url(#clip0_2_3856)" id="Icon">
          <path d={svgPaths.p14d24500} id="Vector" stroke="var(--stroke-0, #00C2FF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p240d7000} id="Vector_2" stroke="var(--stroke-0, #00C2FF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p25499600} id="Vector_3" stroke="var(--stroke-0, #00C2FF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
        <defs>
          <clipPath id="clip0_2_3856">
            <rect fill="white" height="20" width="20" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Text42() {
  return (
    <div className="absolute h-[20px] left-[24px] top-[12px] w-[105.477px]" data-name="Text">
      <p className="-translate-x-1/2 absolute font-['IBM_Plex_Sans_Arabic:SemiBold',sans-serif] leading-[20px] left-[53px] not-italic text-[14px] text-center text-white top-[-0.5px]" dir="auto">
        العائد على الاستثمار
      </p>
    </div>
  );
}

function Container312() {
  return (
    <div className="absolute bg-[#18202e] border border-[rgba(0,0,0,0.2)] border-solid h-[46px] left-[569px] rounded-[16777200px] top-[29px] w-[187.477px]" data-name="Container">
      <Icon58 />
      <Text42 />
    </div>
  );
}

function RoiSection() {
  return (
    <div className="absolute h-[1747.188px] left-0 overflow-clip top-0 w-[1325px]" data-name="ROISection" style={{ backgroundImage: "linear-gradient(180deg, rgb(255, 255, 255) 5.5232%, rgb(26, 34, 49) 23.896%, rgb(26, 35, 50) 68.763%, rgb(14, 19, 32) 103.21%, rgb(255, 255, 255) 115.87%)" }}>
      <Container261 />
      <Container262 />
      <Container312 />
    </div>
  );
}

function Frame8() {
  return (
    <div className="h-[1747.188px] relative shrink-0 w-full">
      <RoiSection />
    </div>
  );
}

function Icon59() {
  return (
    <div className="absolute left-[130.78px] size-[20px] top-[12px]" data-name="Icon">
      <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d={svgPaths.p29933fc0} id="Vector" stroke="var(--stroke-0, #00C2FF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p3b511580} id="Vector_2" stroke="var(--stroke-0, #00C2FF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.pbb8dfc0} id="Vector_3" stroke="var(--stroke-0, #00C2FF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p30d40500} id="Vector_4" stroke="var(--stroke-0, #00C2FF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Text43() {
  return (
    <div className="absolute h-[20px] left-[24px] top-[12px] w-[94.781px]" data-name="Text">
      <p className="-translate-x-1/2 absolute font-['IBM_Plex_Sans_Arabic:SemiBold',sans-serif] leading-[20px] left-[47.5px] not-italic text-[14px] text-center text-white top-[-0.5px]" dir="auto">
        الخلاصة التنفيذية
      </p>
    </div>
  );
}

function Container315() {
  return (
    <div className="absolute bg-gradient-to-r border-2 border-[rgba(0,194,255,0.3)] border-solid from-[rgba(0,194,255,0.1)] h-[48px] left-[486.61px] rounded-[16777200px] to-[rgba(34,197,94,0.1)] top-[-15px] w-[178.781px]" data-name="Container">
      <Icon59 />
      <Text43 />
    </div>
  );
}

function Heading47() {
  return (
    <div className="absolute h-[60px] left-0 top-[72px] w-[1152px]" data-name="Heading 2">
      <p className="-translate-x-1/2 absolute font-['IBM_Plex_Sans_Arabic:Bold',sans-serif] leading-[60px] left-[576.06px] not-italic text-[60px] text-center text-white top-0" dir="auto">
        التحول الرقمي الشامل
      </p>
    </div>
  );
}

function Container314() {
  return (
    <div className="absolute h-[162px] left-[0.5px] top-[-29.19px] w-[1152px]" data-name="Container">
      <Container315 />
      <Heading47 />
    </div>
  );
}

function Heading48() {
  return (
    <div className="h-[32px] relative shrink-0 w-full" data-name="Heading 3">
      <p className="absolute font-['IBM_Plex_Sans_Arabic:Bold',sans-serif] leading-[32px] left-[208.66px] not-italic text-[24px] text-white top-0" dir="auto">
        من التخمين إلى البيانات
      </p>
    </div>
  );
}

function Paragraph121() {
  return (
    <div className="h-[64.797px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="-translate-x-full absolute font-['IBM_Plex_Sans_Arabic:Regular','Noto_Sans:Regular',sans-serif] leading-[32.4px] left-[427.18px] text-[#64748b] text-[18px] text-right top-[0.5px] w-[422px] whitespace-pre-wrap" dir="auto" style={{ fontVariationSettings: "\'CTGR\' 0, \'wdth\' 100, \'wght\' 400" }}>
        تحليلات دقيقة في الوقت الفعلي لكل مرحلة من رحلة العميل، مما يتيح اتخاذ قرارات مبنية على بيانات حقيقية وليس افتراضات.
      </p>
    </div>
  );
}

function Container319() {
  return (
    <div className="flex-[1_0_0] h-[104.797px] min-h-px min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[8px] items-start relative size-full">
        <Heading48 />
        <Paragraph121 />
      </div>
    </div>
  );
}

function Icon60() {
  return (
    <div className="relative shrink-0 size-[32px]" data-name="Icon">
      <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="Icon">
          <path d={svgPaths.p1dcdf880} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
          <path d="M24 22.6667V12" id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
          <path d="M17.3333 22.6667V6.66667" id="Vector_3" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
          <path d="M10.6667 22.6667V18.6667" id="Vector_4" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
        </g>
      </svg>
    </div>
  );
}

function Container320() {
  return (
    <div className="bg-gradient-to-b from-[#00c2ff] h-[64px] relative rounded-[16px] shrink-0 to-[#09c] w-[33.422px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Icon60 />
      </div>
    </div>
  );
}

function Container318() {
  return (
    <div className="content-stretch flex gap-[16px] h-[104.797px] items-start relative shrink-0 w-full" data-name="Container">
      <Container319 />
      <Container320 />
    </div>
  );
}

function Container317() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col h-[212.797px] items-start left-[592px] pb-[2px] pt-[42px] px-[42px] rounded-[24px] top-0 w-[560px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-2 border-[rgba(0,194,255,0.2)] border-solid inset-0 pointer-events-none rounded-[24px]" />
      <Container318 />
    </div>
  );
}

function Heading49() {
  return (
    <div className="h-[32px] relative shrink-0 w-full" data-name="Heading 3">
      <p className="absolute font-['IBM_Plex_Sans_Arabic:Bold',sans-serif] leading-[32px] left-[175.53px] not-italic text-[24px] text-white top-0" dir="auto">
        من زائر عابر إلى عميل دائم
      </p>
    </div>
  );
}

function Paragraph122() {
  return (
    <div className="h-[64.797px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="-translate-x-full absolute font-['IBM_Plex_Sans_Arabic:Regular','Noto_Sans:Regular',sans-serif] leading-[32.4px] left-[419.05px] text-[#64748b] text-[18px] text-right top-[0.5px] w-[386px] whitespace-pre-wrap" dir="auto" style={{ fontVariationSettings: "\'CTGR\' 0, \'wdth\' 100, \'wght\' 400" }}>
        بناء قاعدة عملاء متكررين من خلال برامج الولاء، التخصيص، والتواصل المستمر عبر القنوات الرقمية.
      </p>
    </div>
  );
}

function Container323() {
  return (
    <div className="flex-[1_0_0] h-[104.797px] min-h-px min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[8px] items-start relative size-full">
        <Heading49 />
        <Paragraph122 />
      </div>
    </div>
  );
}

function Icon61() {
  return (
    <div className="relative shrink-0 size-[32px]" data-name="Icon">
      <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="Icon">
          <path d={svgPaths.p27a3200} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
          <path d={svgPaths.p2ee517c0} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
          <path d={svgPaths.p18f42980} id="Vector_3" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
          <path d={svgPaths.p1eb5fb00} id="Vector_4" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
        </g>
      </svg>
    </div>
  );
}

function Container324() {
  return (
    <div className="bg-gradient-to-b from-[#22c55e] h-[64px] relative rounded-[16px] shrink-0 to-[#16a34a] w-[41.633px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center pl-[0.008px] relative size-full">
        <Icon61 />
      </div>
    </div>
  );
}

function Container322() {
  return (
    <div className="content-stretch flex gap-[16px] h-[104.797px] items-start relative shrink-0 w-full" data-name="Container">
      <Container323 />
      <Container324 />
    </div>
  );
}

function Container321() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col h-[212.797px] items-start left-0 pb-[2px] pt-[42px] px-[42px] rounded-[24px] top-0 w-[560px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-2 border-[rgba(34,197,94,0.2)] border-solid inset-0 pointer-events-none rounded-[24px]" />
      <Container322 />
    </div>
  );
}

function Heading50() {
  return (
    <div className="h-[32px] relative shrink-0 w-full" data-name="Heading 3">
      <p className="absolute font-['IBM_Plex_Sans_Arabic:Bold',sans-serif] leading-[32px] left-[157.02px] not-italic text-[24px] text-white top-0" dir="auto">
        من الجهد اليدوي إلى الأتمتة
      </p>
    </div>
  );
}

function Paragraph123() {
  return (
    <div className="h-[64.797px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="-translate-x-full absolute font-['IBM_Plex_Sans_Arabic:Regular','Noto_Sans:Regular',sans-serif] leading-[32.4px] left-[417px] text-[#64748b] text-[18px] text-right top-[0.5px] w-[375px] whitespace-pre-wrap" dir="auto" style={{ fontVariationSettings: "\'CTGR\' 0, \'wdth\' 100, \'wght\' 400" }}>
        نظام رقمي متكامل يعمل على مدار الساعة لجذب العملاء، معالجة الحجوزات، وإدارة العلاقات.
      </p>
    </div>
  );
}

function Container327() {
  return (
    <div className="flex-[1_0_0] h-[104.797px] min-h-px min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[8px] items-start relative size-full">
        <Heading50 />
        <Paragraph123 />
      </div>
    </div>
  );
}

function Icon62() {
  return (
    <div className="relative shrink-0 size-[32px]" data-name="Icon">
      <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="Icon">
          <path d={svgPaths.p34f07580} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
        </g>
      </svg>
    </div>
  );
}

function Container328() {
  return (
    <div className="bg-gradient-to-b from-[#f59e0b] h-[64px] relative rounded-[16px] shrink-0 to-[#d97706] w-[43.922px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Icon62 />
      </div>
    </div>
  );
}

function Container326() {
  return (
    <div className="content-stretch flex gap-[16px] h-[104.797px] items-start relative shrink-0 w-full" data-name="Container">
      <Container327 />
      <Container328 />
    </div>
  );
}

function Container325() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col h-[212.797px] items-start left-[592px] pb-[2px] pt-[42px] px-[42px] rounded-[24px] top-[244.8px] w-[560px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-2 border-[rgba(245,158,11,0.2)] border-solid inset-0 pointer-events-none rounded-[24px]" />
      <Container326 />
    </div>
  );
}

function Heading51() {
  return (
    <div className="h-[32px] relative shrink-0 w-full" data-name="Heading 3">
      <p className="absolute font-['IBM_Plex_Sans_Arabic:Bold',sans-serif] leading-[32px] left-[143.87px] not-italic text-[24px] text-white top-0" dir="auto">
        من النمو المحدود إلى التوسع
      </p>
    </div>
  );
}

function Paragraph124() {
  return (
    <div className="h-[64.797px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="-translate-x-full absolute font-['IBM_Plex_Sans_Arabic:Regular','Noto_Sans:Regular',sans-serif] leading-[32.4px] left-[415.77px] text-[#64748b] text-[18px] text-right top-[0.5px] w-[373px] whitespace-pre-wrap" dir="auto" style={{ fontVariationSettings: "\'CTGR\' 0, \'wdth\' 100, \'wght\' 400" }}>
        بنية تحتية رقمية قابلة للتوسع تتيح النمو في أسواق جديدة وإطلاق منتجات جديدة دون قيود.
      </p>
    </div>
  );
}

function Container331() {
  return (
    <div className="flex-[1_0_0] h-[104.797px] min-h-px min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[8px] items-start relative size-full">
        <Heading51 />
        <Paragraph124 />
      </div>
    </div>
  );
}

function Icon63() {
  return (
    <div className="relative shrink-0 size-[32px]" data-name="Icon">
      <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="Icon">
          <path d={svgPaths.p2d6d9100} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
          <path d={svgPaths.p31e85700} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
          <path d={svgPaths.p3b4b8cc0} id="Vector_3" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
          <path d={svgPaths.p2f8d9f80} id="Vector_4" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
        </g>
      </svg>
    </div>
  );
}

function Container332() {
  return (
    <div className="bg-gradient-to-b from-[#ef4444] h-[64px] relative rounded-[16px] shrink-0 to-[#dc2626] w-[44.328px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Icon63 />
      </div>
    </div>
  );
}

function Container330() {
  return (
    <div className="content-stretch flex gap-[16px] h-[104.797px] items-start relative shrink-0 w-full" data-name="Container">
      <Container331 />
      <Container332 />
    </div>
  );
}

function Container329() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col h-[212.797px] items-start left-0 pb-[2px] pt-[42px] px-[42px] rounded-[24px] top-[244.8px] w-[560px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-2 border-[rgba(239,68,68,0.2)] border-solid inset-0 pointer-events-none rounded-[24px]" />
      <Container330 />
    </div>
  );
}

function Container316() {
  return (
    <div className="absolute h-[457.594px] left-0 top-[476px] w-[1152px]" data-name="Container">
      <Container317 />
      <Container321 />
      <Container325 />
      <Container329 />
    </div>
  );
}

function Paragraph125() {
  return (
    <div className="h-[12px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="-translate-x-1/2 absolute font-['IBM_Plex_Sans_Arabic:Bold',sans-serif] h-[29px] leading-[36px] left-[141.35px] not-italic text-[30px] text-center text-white top-[0.22px] w-[167px] whitespace-pre-wrap" dir="auto">
        جاهز للانطلاق
      </p>
    </div>
  );
}

function Paragraph126() {
  return (
    <div className="h-[28px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="-translate-x-1/2 absolute font-['IBM_Plex_Sans_Arabic:Regular','Noto_Sans:Regular',sans-serif] leading-[28px] left-[141.5px] text-[#64748b] text-[20px] text-center top-0" dir="auto" style={{ fontVariationSettings: "\'CTGR\' 0, \'wdth\' 100, \'wght\' 400" }}>
        خطة شاملة • قابلة للقياس • مستدامة
      </p>
    </div>
  );
}

function Container334() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col gap-[12px] h-[140px] items-start left-[4px] pt-[32px] px-[48px] rounded-[14px] top-[4px] w-[378.703px]" data-name="Container">
      <Paragraph125 />
      <Paragraph126 />
    </div>
  );
}

function Container333() {
  return (
    <div className="absolute bg-gradient-to-b from-[#00c2ff] h-[148px] left-[382.65px] rounded-[16px] to-[#22c55e] top-[997.59px] w-[386.703px]" data-name="Container">
      <Container334 />
    </div>
  );
}

function Container336() {
  return <div className="absolute bg-[#00c2ff] blur-[128px] left-0 opacity-10 rounded-[16777200px] size-[384px] top-0" data-name="Container" />;
}

function Container337() {
  return <div className="absolute bg-[#22c55e] blur-[128px] left-[764px] opacity-10 rounded-[16777200px] size-[384px] top-[-156px]" data-name="Container" />;
}

function Text44() {
  return (
    <div className="absolute content-stretch flex h-[53px] items-start left-[760.18px] px-[12px] py-[4px] rounded-[10px] top-[6.5px] w-[100.594px]" data-name="Text" style={{ backgroundImage: "linear-gradient(152.217deg, rgba(0, 194, 255, 0.125) 0%, rgba(34, 197, 94, 0.125) 100%)" }}>
      <div className="flex flex-col font-['IBM_Plex_Sans_Arabic:Bold',sans-serif] h-[45px] justify-center leading-[0] not-italic relative shrink-0 text-[#00c2ff] text-[30px] text-center w-[77px]">
        <p className="leading-[66px] whitespace-pre-wrap" dir="auto">
          ملاهي
        </p>
      </div>
    </div>
  );
}

function Text45() {
  return (
    <div className="absolute content-stretch flex h-[53px] items-start left-[70.95px] px-[12px] py-[4px] rounded-[10px] top-[6.5px] w-[259.234px]" data-name="Text" style={{ backgroundImage: "linear-gradient(168.445deg, rgba(34, 197, 94, 0.125) 0%, rgba(245, 158, 11, 0.125) 100%)" }}>
      <div className="flex flex-col font-['IBM_Plex_Sans_Arabic:Bold',sans-serif] h-[45px] justify-center leading-[0] not-italic relative shrink-0 text-[#22c55e] text-[30px] text-center w-[236px]">
        <p className="leading-[66px] whitespace-pre-wrap" dir="auto">
          منصة ترفيهية رقمية
        </p>
      </div>
    </div>
  );
}

function Paragraph127() {
  return (
    <div className="absolute h-[132px] left-[48px] top-[48px] w-[1052px]" data-name="Paragraph">
      <p className="-translate-x-1/2 absolute font-['IBM_Plex_Sans_Arabic:Regular',sans-serif] leading-[66px] left-[955.77px] not-italic text-[30px] text-center text-white top-[0.5px]" dir="auto">
        هذه الخطة تنقل
      </p>
      <Text44 />
      <p className="-translate-x-1/2 absolute font-['IBM_Plex_Sans_Arabic:Regular',sans-serif] leading-[66px] left-[545.19px] not-italic text-[30px] text-center text-white top-[0.5px]" dir="auto">
        من الاعتماد على الزيارات العشوائية إلى
      </p>
      <Text45 />
      <p className="-translate-x-full absolute font-['IBM_Plex_Sans_Arabic:Regular','Noto_Sans:Regular',sans-serif] leading-[66px] left-[1047.5px] text-[30px] text-right text-white top-[65.81px] w-[749px] whitespace-pre-wrap" dir="auto" style={{ fontVariationSettings: "\'CTGR\' 0, \'wdth\' 100, \'wght\' 400" }}>
        تعتمد على البيانات، الإيرادات المستدامة، والنمو القابل للتوسع.
      </p>
    </div>
  );
}

function Container335() {
  return (
    <div className="absolute bg-gradient-to-b border-2 border-[rgba(0,194,255,0.3)] border-solid from-[#0e1320] h-[232px] left-0 overflow-clip rounded-[24px] to-[#1a2332] top-[196px] w-[1152px]" data-name="Container">
      <Container336 />
      <Container337 />
      <Paragraph127 />
    </div>
  );
}

function Container313() {
  return (
    <div className="h-[1145.594px] relative shrink-0 w-full" data-name="Container">
      <Container314 />
      <Container316 />
      <Container333 />
      <Container335 />
    </div>
  );
}

function ExecutiveSummary() {
  return (
    <div className="absolute bg-gradient-to-b content-stretch flex flex-col from-[#0f1421] from-[19.354%] h-[1337.594px] items-start left-0 pt-[96px] px-[86.5px] to-[100.02%] to-white top-0 via-[#f8fafc] via-[43.037%] w-[1325px]" data-name="ExecutiveSummary">
      <Container313 />
    </div>
  );
}

function Frame9() {
  return (
    <div className="h-[1337.594px] relative shrink-0 w-full">
      <ExecutiveSummary />
    </div>
  );
}

function App() {
  return (
    <div className="absolute bg-[#f5f7fa] content-stretch flex flex-col h-[14884px] items-start left-0 top-0 w-[1325px]" data-name="App">
      <Frame />
      <Frame1 />
      <Frame2 />
      <Frame3 />
      <Frame4 />
      <Frame5 />
      <Frame6 />
      <Frame7 />
      <Frame8 />
      <Frame9 />
    </div>
  );
}

function Container338() {
  return <div className="absolute bg-[#22c55e] blur-[128px] h-[324px] left-[18px] opacity-20 rounded-[16777200px] top-[14560px] w-[384px]" data-name="Container" />;
}

function MalahiLogo() {
  return (
    <div className="absolute h-[526px] left-[213px] top-[400px] w-[900px]" data-name="Malahi Logo_ 1">
      <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 900 526">
        <g clipPath="url(#clip0_2_3539)" id="Malahi Logo_ 1">
          <path d={svgPaths.p15b8bf00} fill="var(--fill-0, #2B4693)" id="Vector" />
          <path d={svgPaths.p323fde80} fill="var(--fill-0, #2B4693)" id="Vector_2" />
          <path d={svgPaths.p3dca2a00} fill="var(--fill-0, #2B4693)" id="Vector_3" />
          <path d={svgPaths.p3690c480} fill="var(--fill-0, #2B4693)" id="Vector_4" />
          <path d={svgPaths.p1d9364c0} fill="var(--fill-0, #2B4693)" id="Vector_5" />
          <path d={svgPaths.pd23bc40} fill="var(--fill-0, #2B4693)" id="Vector_6" />
          <path d={svgPaths.p25182180} fill="var(--fill-0, #2B4693)" id="Vector_7" />
          <path d={svgPaths.p52ea030} fill="var(--fill-0, #2B4693)" id="Vector_8" />
          <path d={svgPaths.p4dcaf80} fill="var(--fill-0, #2B4693)" id="Vector_9" />
          <path d={svgPaths.p169afe00} fill="var(--fill-0, #2B4693)" id="Vector_10" />
          <path d={svgPaths.p31200400} fill="var(--fill-0, #2B4693)" id="Vector_11" />
          <path d={svgPaths.p2fc16080} fill="var(--fill-0, #2B4693)" id="Vector_12" />
          <path d={svgPaths.p2e392d00} fill="var(--fill-0, #2B4693)" id="Vector_13" />
          <path d={svgPaths.p2afb8b80} fill="var(--fill-0, #2B4693)" id="Vector_14" />
          <path d={svgPaths.p3366380} fill="var(--fill-0, #2B4693)" id="Vector_15" />
          <path d={svgPaths.p20bff500} fill="var(--fill-0, #2B4693)" id="Vector_16" />
          <g id="Group">
            <path d={svgPaths.p3c094400} fill="var(--fill-0, #2B4693)" id="Vector_17" />
            <path d={svgPaths.p1a2ba580} fill="var(--fill-0, #2B4693)" id="Vector_18" />
          </g>
          <path d={svgPaths.p930de80} fill="var(--fill-0, #30A47F)" id="Vector_19" />
          <g filter="url(#filter0_f_2_3539)" id="Container" opacity="0.2">
            <path d={svgPaths.p28a4e200} fill="var(--fill-0, #22C55E)" />
          </g>
        </g>
        <defs>
          <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="766" id="filter0_f_2_3539" width="761" x="-133" y="-54">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
            <feGaussianBlur result="effect1_foregroundBlur_2_3539" stdDeviation="128" />
          </filter>
          <clipPath id="clip0_2_3539">
            <rect fill="white" height="526" width="900" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

export default function BusinessGrowthPlan() {
  return (
    <div className="relative size-full" data-name="Business Growth Plan">
      <App />
      <Container338 />
      <MalahiLogo />
    </div>
  );
}