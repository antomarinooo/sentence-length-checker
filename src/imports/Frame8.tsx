import svgPaths from "./svg-0phutxcpjq";

function Heading3() {
  return (
    <div className="content-stretch flex flex-col items-start justify-start relative shrink-0 w-full" data-name="Heading 3">
      <div className="flex flex-col font-['Inter:Medium',_sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-neutral-950 w-full">
        <p className="leading-[24px]">About this project</p>
      </div>
    </div>
  );
}

function Container() {
  return (
    <div className="box-border content-stretch flex flex-col items-start justify-start max-w-[672px] pb-[0.75px] pt-0 px-0 relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',_sans-serif] font-normal justify-center leading-[22.75px] not-italic relative shrink-0 text-[#717182] text-[13.016px] w-full">
        <p className="mb-0">A simple, privacy-focused tool to identify overly long sentences in</p>
        <p className="mb-0">your text. All processing happens in your browser - no data is sent</p>
        <p>to servers.</p>
      </div>
    </div>
  );
}

function Container1() {
  return (
    <div className="content-stretch flex flex-col gap-[11px] items-start justify-start relative shrink-0 w-full" data-name="Container">
      <Heading3 />
      <Container />
    </div>
  );
}

function Container2() {
  return (
    <div className="box-border content-stretch flex gap-1.5 items-center justify-start pb-px pt-0 px-0 relative self-stretch shrink-0" data-name="Container">
      <div className="bg-[#00c950] rounded-[3.35544e+07px] shrink-0 size-2" data-name="Background" />
      <div className="flex flex-col font-['Inter:Regular',_sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#717182] text-[14px] text-nowrap">
        <p className="leading-[20px] whitespace-pre">Privacy-focused</p>
      </div>
    </div>
  );
}

function Container3() {
  return (
    <div className="box-border content-stretch flex gap-1.5 items-center justify-start pb-px pt-0 px-0 relative self-stretch shrink-0" data-name="Container">
      <div className="bg-[#00c950] rounded-[3.35544e+07px] shrink-0 size-2" data-name="Background" />
      <div className="flex flex-col font-['Inter:Regular',_sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#717182] text-[14px] text-nowrap">
        <p className="leading-[20px] whitespace-pre">No data collection</p>
      </div>
    </div>
  );
}

function Container4() {
  return (
    <div className="box-border content-stretch flex gap-1.5 items-center justify-start pb-px pt-0 px-0 relative self-stretch shrink-0" data-name="Container">
      <div className="bg-[#00c950] rounded-[3.35544e+07px] shrink-0 size-2" data-name="Background" />
      <div className="flex flex-col font-['Inter:Regular',_sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#717182] text-[14px] text-nowrap">
        <p className="leading-[20px] whitespace-pre">Client-side processing</p>
      </div>
    </div>
  );
}

function Container5() {
  return (
    <div className="content-stretch flex flex-wrap gap-6 items-start justify-start relative shrink-0 w-full" data-name="Container">
      <Container2 />
      <Container3 />
      <Container4 />
    </div>
  );
}

function Container6() {
  return (
    <div className="content-stretch flex flex-col gap-3.5 h-[149.75px] items-start justify-start relative shrink-0 w-[581.33px]" data-name="Container">
      <Container1 />
      <Container5 />
    </div>
  );
}

function Heading4() {
  return (
    <div className="content-stretch flex flex-col items-start justify-start relative shrink-0 w-full" data-name="Heading 3">
      <div className="flex flex-col font-['Inter:Medium',_sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-neutral-950 w-full">
        <p className="leading-[24px]">Contact</p>
      </div>
    </div>
  );
}

function Frame() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-4" data-name="Frame">
      <div className="absolute inset-[8.33%_16.62%]" data-name="Vector">
        <div className="absolute inset-[-5%_-6.24%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13 15">
            <path d={svgPaths.p2391a400} id="Vector" stroke="var(--stroke-0, #0A0A0A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[66.67%_62.5%_22.67%_8.33%]" data-name="Vector">
        <div className="absolute inset-[-39.06%_-14.29%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7 4">
            <path d={svgPaths.pcac3540} id="Vector" stroke="var(--stroke-0, #0A0A0A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Svg() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center overflow-clip relative shrink-0 size-4" data-name="SVG">
      <Frame />
    </div>
  );
}

function SvgMargin() {
  return (
    <div className="box-border content-stretch flex flex-col h-4 items-start justify-start pl-0 pr-2 py-0 relative shrink-0 w-6" data-name="SVG:margin">
      <Svg />
    </div>
  );
}

function Container7() {
  return (
    <div className="content-stretch flex flex-col items-start justify-start overflow-clip relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',_sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[13.125px] text-neutral-950 text-nowrap">
        <p className="leading-[20px] whitespace-pre">View on GitHub</p>
      </div>
    </div>
  );
}

function Button() {
  return (
    <div className="bg-white box-border content-stretch flex gap-1.5 h-9 items-center justify-start px-[11px] py-px relative rounded-[8px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <SvgMargin />
      <Container7 />
    </div>
  );
}

function ButtonMargin() {
  return (
    <div className="box-border content-stretch flex flex-col h-12 items-start justify-start mb-[-5px] pb-3 pt-0 px-0 relative shrink-0" data-name="Button:margin">
      <Button />
    </div>
  );
}

function Frame1() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-4" data-name="Frame">
      <div className="absolute inset-[29.17%_8.33%_45.84%_8.33%]" data-name="Vector">
        <div className="absolute inset-[-16.68%_-5%_-16.67%_-5%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 6">
            <path d={svgPaths.p290adc40} id="Vector" stroke="var(--stroke-0, #0A0A0A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[16.67%_8.33%]" data-name="Vector">
        <div className="absolute inset-[-6.25%_-5%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 13">
            <path d={svgPaths.p2de20980} id="Vector" stroke="var(--stroke-0, #0A0A0A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Svg1() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center overflow-clip relative shrink-0 size-4" data-name="SVG">
      <Frame1 />
    </div>
  );
}

function SvgMargin1() {
  return (
    <div className="box-border content-stretch flex flex-col h-4 items-start justify-start pl-0 pr-2 py-0 relative shrink-0 w-6" data-name="SVG:margin">
      <Svg1 />
    </div>
  );
}

function Container8() {
  return (
    <div className="content-stretch flex flex-col items-start justify-start overflow-clip relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',_sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[13.344px] text-neutral-950 text-nowrap">
        <p className="leading-[20px] whitespace-pre">your.email@example.com</p>
      </div>
    </div>
  );
}

function Button1() {
  return (
    <div className="bg-white box-border content-stretch flex gap-1.5 h-9 items-center justify-start mb-[-5px] px-[11px] py-px relative rounded-[8px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <SvgMargin1 />
      <Container8 />
    </div>
  );
}

function Container9() {
  return (
    <div className="box-border content-stretch flex flex-col items-start justify-center pb-[5px] pt-0 px-0 relative shrink-0 w-full" data-name="Container">
      <ButtonMargin />
      <Button1 />
    </div>
  );
}

function Container10() {
  return (
    <div className="content-stretch flex flex-col gap-4 h-[140.3px] items-start justify-start relative shrink-0" data-name="Container">
      <Heading4 />
      <Container9 />
    </div>
  );
}

function Frame7() {
  return (
    <div className="box-border content-stretch flex gap-[114px] items-start justify-start pb-[37px] pt-0 px-0 relative shrink-0 w-full">
      <div aria-hidden="true" className="absolute border-[#c1c1c1] border-[0px_0px_0.4px] border-solid bottom-[-0.4px] left-0 pointer-events-none right-0 top-0" />
      <Container6 />
      <Container10 />
    </div>
  );
}

function Container11() {
  return (
    <div className="content-stretch flex flex-col items-start justify-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',_sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#717182] text-[13.02px] text-nowrap">
        <p className="leading-[24px] whitespace-pre">© 2025 Sentence Length Analyzer. Open source project.</p>
      </div>
    </div>
  );
}

function Container12() {
  return (
    <div className="content-stretch flex flex-col items-start justify-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',_sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#717182] text-[12px] text-nowrap">
        <p className="leading-[16px] whitespace-pre">Made with</p>
      </div>
    </div>
  );
}

function Svg2() {
  return (
    <div className="relative shrink-0 size-4" data-name="SVG">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="SVG">
          <path d={svgPaths.p15d03032} fill="var(--fill-0, #717182)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Container13() {
  return (
    <div className="content-stretch flex flex-col items-start justify-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',_sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#717182] text-[12px] text-nowrap">
        <p className="leading-[16px] whitespace-pre">React</p>
      </div>
    </div>
  );
}

function Container14() {
  return (
    <div className="content-stretch flex gap-1.5 items-center justify-start relative shrink-0" data-name="Container">
      <Svg2 />
      <Container13 />
    </div>
  );
}

function Svg3() {
  return (
    <div className="relative shrink-0 size-4" data-name="SVG">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="SVG">
          <path d={svgPaths.pea50e80} fill="var(--fill-0, #717182)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Container15() {
  return (
    <div className="content-stretch flex flex-col items-start justify-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',_sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#717182] text-[12px] text-nowrap">
        <p className="leading-[16px] whitespace-pre">Tailwind CSS</p>
      </div>
    </div>
  );
}

function Container16() {
  return (
    <div className="content-stretch flex gap-1.5 items-center justify-start relative shrink-0" data-name="Container">
      <Svg3 />
      <Container15 />
    </div>
  );
}

function Container17() {
  return (
    <div className="content-stretch flex gap-[11.99px] items-center justify-start relative shrink-0" data-name="Container">
      <Container14 />
      <Container16 />
    </div>
  );
}

function Container18() {
  return (
    <div className="content-stretch flex gap-4 items-center justify-start relative shrink-0 w-full" data-name="Container">
      <Container12 />
      <Container17 />
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex flex-col gap-2 items-start justify-start relative shrink-0 w-full">
      <Container11 />
      <Container18 />
    </div>
  );
}

export default function Frame8() {
  return (
    <div className="content-stretch flex flex-col gap-[37px] items-start justify-start relative size-full">
      <Frame7 />
      <Frame4 />
    </div>
  );
}