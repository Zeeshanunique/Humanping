import svgPaths from "./svg-h8nnyhn1xo";

function Container() {
  return <div className="absolute bg-[rgba(96,165,250,0.2)] blur-[20px] filter left-0 rounded-[9999px] size-[120px] top-0" data-name="Container" />;
}

function Frame() {
  return (
    <div className="absolute left-0 size-[120px] top-0" data-name="Frame">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 120 120">
        <g id="Frame">
          <path d={svgPaths.p7372600} id="Vector" stroke="var(--stroke-0, #111827)" />
          <path d={svgPaths.p2c337f80} id="Vector_2" stroke="var(--stroke-0, #111827)" />
          <path d="M55 60H65" id="Vector_3" stroke="var(--stroke-0, #111827)" strokeLinecap="round" />
        </g>
      </svg>
    </div>
  );
}

function Container1() {
  return (
    <div className="absolute left-[67.99px] size-[120px] top-0" data-name="Container">
      <Container />
      <Frame />
    </div>
  );
}

function Heading() {
  return (
    <div className="absolute bg-gradient-to-r from-[#2563eb] h-[40px] left-[32.09px] to-[#9333ea] top-[152px] w-[191.8px]" data-name="Heading">
      <div className="absolute flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[48px] justify-center leading-[0] left-0 not-italic text-[30.6px] text-black top-[20px] translate-y-[-50%] w-[191.8px]">
        <p className="leading-[40px]">HumanPing</p>
      </div>
    </div>
  );
}

function Paragraph() {
  return (
    <div className="absolute h-[28px] left-0 top-[204px] w-[255.988px]" data-name="Paragraph">
      <div className="absolute flex flex-col font-['Inter:Medium',sans-serif] font-medium h-[24px] justify-center leading-[0] left-0 not-italic text-[#6b7280] text-[15.3px] top-[13.6px] translate-y-[-50%] w-[255.987px]">
        <p className="leading-[28px]">Tiny nudges. Real connection.</p>
      </div>
    </div>
  );
}

function Container2() {
  return (
    <div className="absolute h-[232px] left-[59.6px] top-[229.2px] w-[255.988px]" data-name="Container">
      <Container1 />
      <Heading />
      <Paragraph />
    </div>
  );
}

function Container3() {
  return (
    <div className="absolute h-[690.4px] left-0 top-0 w-[375.2px]" data-name="Container" style={{ backgroundImage: "linear-gradient(118.522deg, rgb(219, 234, 254) 25%, rgb(243, 232, 255) 60.355%, rgb(220, 252, 231) 95.711%)" }}>
      <Container2 />
    </div>
  );
}

function Container4() {
  return (
    <div className="absolute h-[690.4px] left-0 overflow-clip shadow-[0px_25px_50px_-12px_rgba(0,0,0,0.25),0px_0px_0px_0px_rgba(0,0,0,0),0px_0px_0px_0px_rgba(0,0,0,0)] top-0 w-[375.2px]" data-name="Container" style={{ backgroundImage: "linear-gradient(118.522deg, rgb(239, 246, 255) 25%, rgb(250, 245, 255) 60.355%, rgb(240, 253, 244) 95.711%)" }}>
      <Container3 />
    </div>
  );
}

function Container5() {
  return (
    <div className="absolute bg-[#f3f4f6] h-[690.4px] left-0 top-0 w-[375.2px]" data-name="Container">
      <Container4 />
    </div>
  );
}

function Container6() {
  return (
    <div className="absolute h-[690.4px] left-0 top-0 w-[375.2px]" data-name="Container">
      <Container5 />
    </div>
  );
}

function Component1Splash() {
  return (
    <div className="absolute bg-white h-[690.4px] left-0 top-[47px] w-[375.2px]" data-name="1. Splash">
      <Container6 />
    </div>
  );
}

function Button() {
  return (
    <div className="absolute bg-[rgba(22,21,21,0)] h-[20px] left-[284.13px] top-0 w-[27.075px]" data-name="Button">
      <div className="absolute flex flex-col font-['Inter:Medium',sans-serif] font-medium h-[18.4px] justify-center leading-[0] left-[13.54px] not-italic text-[#151515] text-[11.9px] text-center top-[10px] translate-x-[-50%] translate-y-[-50%] w-[27.075px]">
        <p className="leading-[20px]">Skip</p>
      </div>
    </div>
  );
}

function Container7() {
  return (
    <div className="absolute h-[20px] left-[32px] top-[80px] w-[311.2px]" data-name="Container">
      <Button />
    </div>
  );
}

function Container8() {
  return <div className="absolute bg-[rgba(191,219,254,0.3)] blur-[32px] filter left-0 rounded-[9999px] size-[256px] top-0" data-name="Container" />;
}

function Frame2() {
  return (
    <div className="absolute left-[88px] size-[80px] top-[88px]" data-name="Frame">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 80 80">
        <g id="Frame">
          <path d={svgPaths.p1afd9600} id="Vector" stroke="var(--stroke-0, #60A5FA)" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M66.6667 10V23.3333" id="Vector_2" stroke="var(--stroke-0, #60A5FA)" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M73.3333 16.6667H60" id="Vector_3" stroke="var(--stroke-0, #60A5FA)" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M13.3333 56.6667V63.3333" id="Vector_4" stroke="var(--stroke-0, #60A5FA)" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M16.6667 60H10" id="Vector_5" stroke="var(--stroke-0, #60A5FA)" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      </svg>
    </div>
  );
}

function Container9() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.7)] border-0 border-[rgba(255,255,255,0.4)] border-solid left-0 rounded-[16px] shadow-[0px_8px_10px_-6px_rgba(30,58,138,0.05),0px_20px_25px_-5px_rgba(30,58,138,0.05),0px_0px_0px_0px_rgba(0,0,0,0),0px_0px_0px_0px_rgba(0,0,0,0)] size-[256px] top-0" data-name="Container">
      <Frame2 />
    </div>
  );
}

function Container10() {
  return (
    <div className="absolute left-[27.6px] size-[256px] top-[41.95px]" data-name="Container">
      <Container8 />
      <Container9 />
    </div>
  );
}

function Heading1() {
  return (
    <div className="absolute font-['Inter:Bold',sans-serif] font-bold h-[72px] leading-[0] left-0 not-italic text-[#1f2937] text-[25.5px] text-center top-0 w-[311.2px]" data-name="Heading">
      <div className="absolute flex flex-col h-[39.2px] justify-center left-[155.59px] top-[18px] translate-x-[-50%] translate-y-[-50%] w-[234.288px]">
        <p className="leading-[36px]">{`One small human `}</p>
      </div>
      <div className="absolute flex flex-col h-[39.2px] justify-center left-[155.59px] top-[54px] translate-x-[-50%] translate-y-[-50%] w-[161.788px]">
        <p className="leading-[36px]">action a day</p>
      </div>
    </div>
  );
}

function Paragraph1() {
  return (
    <div className="absolute font-['Inter:Light',sans-serif] font-light h-[58.5px] leading-[0] left-0 not-italic text-[#6b7280] text-[15.3px] text-center top-[88px] w-[311.2px]" data-name="Paragraph">
      <div className="absolute flex flex-col h-[24px] justify-center left-[155.59px] top-[14.4px] translate-x-[-50%] translate-y-[-50%] w-[308.237px]">
        <p className="leading-[29px]">{`Get a tiny offline social mission every day `}</p>
      </div>
      <div className="absolute flex flex-col h-[24px] justify-center left-[155.59px] top-[43.65px] translate-x-[-50%] translate-y-[-50%] w-[148.737px]">
        <p className="leading-[29px]">to build confidence.</p>
      </div>
    </div>
  );
}

function Container11() {
  return (
    <div className="absolute h-[146.5px] left-0 top-[329.95px] w-[311.2px]" data-name="Container">
      <Heading1 />
      <Paragraph1 />
    </div>
  );
}

function Container12() {
  return (
    <div className="absolute h-[518.4px] left-[32px] top-[100px] w-[311.2px]" data-name="Container">
      <Container10 />
      <Container11 />
    </div>
  );
}

function Container13() {
  return <div className="absolute bg-[#3b82f6] h-[8px] left-[123.6px] rounded-[9999px] top-0 w-[32px]" data-name="Container" />;
}

function Container14() {
  return <div className="absolute bg-[#d1d5db] left-[163.6px] rounded-[9999px] size-[8px] top-0" data-name="Container" />;
}

function Container15() {
  return <div className="absolute bg-[#d1d5db] left-[179.6px] rounded-[9999px] size-[8px] top-0" data-name="Container" />;
}

function Container16() {
  return (
    <div className="absolute h-[40px] left-[32px] top-[618.4px] w-[311.2px]" data-name="Container">
      <Container13 />
      <Container14 />
      <Container15 />
    </div>
  );
}

function Container17() {
  return (
    <div className="absolute h-[690.4px] left-0 top-0 w-[375.2px]" data-name="Container">
      <Container7 />
      <Container12 />
      <Container16 />
    </div>
  );
}

function Container18() {
  return (
    <div className="absolute h-[690.4px] left-0 overflow-clip shadow-[0px_25px_50px_-12px_rgba(0,0,0,0.25),0px_0px_0px_0px_rgba(0,0,0,0),0px_0px_0px_0px_rgba(0,0,0,0)] top-0 w-[375.2px]" data-name="Container" style={{ backgroundImage: "linear-gradient(118.522deg, rgb(239, 246, 255) 25%, rgb(250, 245, 255) 60.355%, rgb(240, 253, 244) 95.711%)" }}>
      <Container17 />
    </div>
  );
}

function Container19() {
  return (
    <div className="absolute bg-[#f3f4f6] h-[690.4px] left-0 top-0 w-[375.2px]" data-name="Container">
      <Container18 />
    </div>
  );
}

function Container20() {
  return (
    <div className="absolute h-[690.4px] left-0 top-0 w-[375.2px]" data-name="Container">
      <Container19 />
    </div>
  );
}

function Component2Intro() {
  return (
    <div className="absolute bg-white h-[690.4px] left-[635px] top-[47px] w-[375.2px]" data-name="2.intro-1">
      <Container20 />
    </div>
  );
}

function Frame3() {
  return (
    <div className="absolute left-[8px] size-[24px] top-[8px]" data-name="Frame">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Frame">
          <path d="M12 19L5 12L12 5" id="Vector" stroke="var(--stroke-0, #374151)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d="M19 12H5" id="Vector_2" stroke="var(--stroke-0, #374151)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Button1() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0)] left-[-8px] rounded-[9999px] size-[40px] top-0" data-name="Button">
      <Frame3 />
    </div>
  );
}

function Container21() {
  return (
    <div className="absolute h-[40px] left-[24px] top-[16px] w-[32px]" data-name="Container">
      <Button1 />
    </div>
  );
}

function Container22() {
  return <div className="absolute h-[100px] left-[133.06px] top-[36px] w-[109.063px]" data-name="Container" />;
}

function Container23() {
  return <div className="absolute h-[100px] left-[242.13px] top-[36px] w-[109.063px]" data-name="Container" />;
}

function Container24() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.5)] h-[72px] left-0 top-0 w-[375.2px]" data-name="Container">
      <Container21 />
      <Container22 />
      <Container23 />
    </div>
  );
}

function Container25() {
  return <div className="absolute border border-solid border-white left-[12px] rounded-[9999px] size-[24px] top-[12px]" data-name="Container" />;
}

function Container26() {
  return (
    <div className="absolute left-[139.6px] rounded-[12px] shadow-[0px_4px_6px_-4px_rgba(59,130,246,0.2),0px_10px_15px_-3px_rgba(59,130,246,0.2),0px_0px_0px_0px_rgba(0,0,0,0),0px_0px_0px_0px_rgba(0,0,0,0)] size-[48px] top-0" data-name="Container" style={{ backgroundImage: "linear-gradient(135deg, rgb(96, 165, 250) 25%, rgb(168, 85, 247) 95.711%)" }}>
      <Container25 />
    </div>
  );
}

function Heading2() {
  return (
    <div className="absolute h-[32px] left-0 top-[58px] w-[327px]" data-name="Heading">
      <div className="absolute flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[32px] justify-center leading-[0] left-[163.6px] not-italic text-[#111827] text-[20.4px] text-center top-[16px] translate-x-[-50%] translate-y-[-50%] w-[163.75px]">
        <p className="leading-[32px]">Create Account</p>
      </div>
    </div>
  );
}

function Paragraph2() {
  return (
    <div className="absolute h-[29px] left-0 top-[90px] w-[327px]" data-name="Paragraph">
      <div className="absolute flex flex-col font-['Inter:Light',sans-serif] font-light h-[21.6px] justify-center leading-[0] left-[163.59px] not-italic text-[#6b7280] text-[13.6px] text-center top-[11.6px] translate-x-[-50%] translate-y-[-50%] w-[260.862px]">
        <p className="leading-[24px]">Start your journey to better connection</p>
      </div>
    </div>
  );
}

function Container27() {
  return (
    <div className="absolute h-[119px] left-0 top-[-50.8px] w-[327px]" data-name="Container">
      <Container26 />
      <Heading2 />
      <Paragraph2 />
    </div>
  );
}

function Label() {
  return (
    <div className="absolute h-[20px] left-[4px] top-0 w-[273.6px]" data-name="Label">
      <div className="absolute flex flex-col font-['Inter:Medium',sans-serif] font-medium h-[18.4px] justify-center leading-[0] left-0 not-italic text-[#374151] text-[11.9px] top-[10px] translate-y-[-50%] w-[34.275px]">
        <p className="leading-[20px]">Email</p>
      </div>
    </div>
  );
}

function Input() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.5)] content-stretch flex h-[49.6px] items-center left-0 px-[16px] py-[12px] rounded-[12px] top-[28px] w-[277.6px]" data-name="Input">
      <div aria-hidden="true" className="absolute border-0 border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <p className="font-['Inter:Light',sans-serif] font-light leading-[24px] not-italic relative shrink-0 text-[#ccc] text-[16px] text-nowrap">alex@example.com</p>
    </div>
  );
}

function Container28() {
  return (
    <div className="absolute h-[77.6px] left-[24px] top-[90px] w-[277.6px]" data-name="Container">
      <Label />
      <Input />
    </div>
  );
}

function Label1() {
  return (
    <div className="absolute h-[20px] left-[4.2px] top-[-0.4px] w-[273px]" data-name="Label">
      <div className="absolute flex flex-col font-['Inter:Medium',sans-serif] font-medium h-[19px] justify-center leading-[0] left-[0.2px] not-italic text-[#374151] text-[11.9px] top-[10.1px] translate-y-[-50%] w-[123px]">
        <p className="leading-[20px]">Create Password</p>
      </div>
    </div>
  );
}

function Input1() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.5)] content-stretch flex h-[49.6px] items-center left-0 px-[16px] py-[12px] rounded-[12px] top-[28px] w-[277.6px]" data-name="Input">
      <div aria-hidden="true" className="absolute border-0 border-[#0f1011] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <p className="font-['Inter:Light',sans-serif] font-light leading-[24px] not-italic relative shrink-0 text-[#ccc] text-[16px] text-nowrap">••••••••</p>
    </div>
  );
}

function Container29() {
  return (
    <div className="absolute h-[77.6px] left-[29px] top-[175px] w-[277.6px]" data-name="Container">
      <Label1 />
      <Input1 />
    </div>
  );
}

function Label2() {
  return (
    <div className="absolute h-[20px] left-[29px] top-[260px] w-[273px]" data-name="Label">
      <div className="absolute flex flex-col font-['Inter:Medium',sans-serif] font-medium h-[19px] justify-center leading-[0] left-[0.2px] not-italic text-[#374151] text-[11.9px] top-[10.1px] translate-y-[-50%] w-[123px]">
        <p className="leading-[20px]">Confirm Password</p>
      </div>
    </div>
  );
}

function Input2() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.5)] content-stretch flex h-[53px] items-center left-[25px] px-[16px] py-[12px] rounded-[12px] top-[280px] w-[277px]" data-name="Input">
      <div aria-hidden="true" className="absolute border-0 border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <p className="font-['Inter:Light',sans-serif] font-light leading-[24px] not-italic relative shrink-0 text-[#ccc] text-[16px] text-nowrap">••••••••</p>
    </div>
  );
}

function StateLayer() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-center px-[16px] py-[10px] relative shrink-0" data-name="State-layer">
      <div className="flex flex-col font-['Roboto:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[14px] text-nowrap text-white tracking-[0.1px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[20px]">Sign-up</p>
      </div>
    </div>
  );
}

function Content() {
  return (
    <div className="bg-[#6750a4] content-stretch flex flex-col items-center justify-center overflow-clip relative rounded-[100px] shrink-0" data-name="Content">
      <StateLayer />
    </div>
  );
}

function Button2() {
  return (
    <div className="absolute content-stretch flex h-[60px] items-center justify-center left-[41px] top-[333px] w-[249px]" data-name="Button">
      <Content />
    </div>
  );
}

function Label3() {
  return (
    <div className="absolute h-[19px] left-[25px] top-[16px] w-[274px]" data-name="Label">
      <div className="absolute flex flex-col font-['Inter:Medium',sans-serif] font-medium h-[18.4px] justify-center leading-[0] left-0 not-italic text-[#374151] text-[11.9px] top-[10px] translate-y-[-50%] w-[34.275px]">
        <p className="leading-[20px]">Name</p>
      </div>
    </div>
  );
}

function Input3() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.5)] content-stretch flex h-[37px] items-center left-[25px] px-[16px] py-[12px] rounded-[12px] top-[41px] w-[253px]" data-name="Input">
      <div aria-hidden="true" className="absolute border-0 border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <p className="font-['Inter:Light',sans-serif] font-light leading-[24px] not-italic relative shrink-0 text-[#ccc] text-[16px] text-nowrap">Alex</p>
    </div>
  );
}

function Container30() {
  return (
    <div className="absolute bg-white border-0 border-[rgba(255,255,255,0.5)] border-solid h-[400px] left-0 rounded-[16px] shadow-[0px_4px_6px_-4px_rgba(30,58,138,0.05),0px_10px_15px_-3px_rgba(30,58,138,0.05),0px_0px_0px_0px_rgba(0,0,0,0),0px_0px_0px_0px_rgba(0,0,0,0)] top-[77.2px] w-[327px]" data-name="Container">
      <Container28 />
      <Container29 />
      <Label2 />
      <Input2 />
      <Button2 />
      <Label3 />
      <Input3 />
    </div>
  );
}

function Container31() {
  return (
    <div className="absolute h-[18.4px] left-[220.73px] top-[0.8px] w-[39.325px]" data-name="Container">
      <div className="absolute flex flex-col font-['Inter:Medium',sans-serif] font-medium h-[18.4px] justify-center leading-[0] left-[19.66px] not-italic text-[#2563eb] text-[11.9px] text-center top-[9.2px] translate-x-[-50%] translate-y-[-50%] w-[39.325px]">
        <p className="leading-[20px]">Log in</p>
      </div>
    </div>
  );
}

function Paragraph3() {
  return (
    <div className="absolute h-[20px] left-0 top-0 w-[327.2px]" data-name="Paragraph">
      <div className="absolute flex flex-col font-['Inter:Light',sans-serif] font-light h-[18.4px] justify-center leading-[0] left-[142.01px] not-italic text-[#4b5563] text-[11.9px] text-center top-[10px] translate-x-[-50%] translate-y-[-50%] w-[149.75px]">
        <p className="leading-[20px]">Already have an account?</p>
      </div>
      <div className="absolute flex flex-col font-['Inter:Light',sans-serif] font-light h-[18.4px] justify-center leading-[0] left-[218.81px] not-italic text-[#4b5563] text-[11.9px] text-center top-[10px] translate-x-[-50%] translate-y-[-50%] w-[3.838px]">
        <p className="leading-[20px]"> </p>
      </div>
      <Container31 />
    </div>
  );
}

function Paragraph4() {
  return (
    <div className="absolute h-[16px] left-[3.6px] top-[36px] w-[320px]" data-name="Paragraph">
      <div className="absolute flex flex-col font-['Inter:Light',sans-serif] font-light h-[16px] justify-center leading-[0] left-[159.99px] not-italic text-[#9ca3af] text-[10.2px] text-center top-[8px] translate-x-[-50%] translate-y-[-50%] w-[276.438px]">
        <p className="leading-[16px]">{`We don't post anything publicly. Your journey is private.`}</p>
      </div>
    </div>
  );
}

function Container32() {
  return (
    <div className="absolute h-[52px] left-0 top-[484.8px] w-[327.2px]" data-name="Container">
      <Paragraph3 />
      <Paragraph4 />
    </div>
  );
}

function Container33() {
  return (
    <div className="absolute h-[536.8px] left-[24px] top-[40.8px] w-[327.2px]" data-name="Container">
      <Container27 />
      <Container30 />
      <Container32 />
    </div>
  );
}

function Container34() {
  return (
    <div className="absolute h-[618.4px] left-0 top-[72px] w-[375.2px]" data-name="Container">
      <Container33 />
    </div>
  );
}

function Container35() {
  return (
    <div className="absolute h-[690.4px] left-0 overflow-clip shadow-[0px_25px_50px_-12px_rgba(0,0,0,0.25),0px_0px_0px_0px_rgba(0,0,0,0),0px_0px_0px_0px_rgba(0,0,0,0)] top-0 w-[375.2px]" data-name="Container" style={{ backgroundImage: "linear-gradient(118.522deg, rgb(239, 246, 255) 25%, rgb(250, 245, 255) 60.355%, rgb(240, 253, 244) 95.711%)" }}>
      <Container24 />
      <Container34 />
    </div>
  );
}

function Container36() {
  return (
    <div className="absolute bg-[#f3f4f6] h-[690.4px] left-0 top-0 w-[375.2px]" data-name="Container">
      <Container35 />
    </div>
  );
}

function Container37() {
  return (
    <div className="absolute h-[690.4px] left-0 top-0 w-[375.2px]" data-name="Container">
      <Container36 />
    </div>
  );
}

function Component5SignUp() {
  return (
    <div className="absolute bg-white h-[690.4px] left-[2532px] top-[47px] w-[375.2px]" data-name="5. Sign-up">
      <Container37 />
    </div>
  );
}

function Frame4() {
  return (
    <div className="absolute left-[8px] size-[24px] top-[8px]" data-name="Frame">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Frame">
          <path d="M12 19L5 12L12 5" id="Vector" stroke="var(--stroke-0, #374151)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d="M19 12H5" id="Vector_2" stroke="var(--stroke-0, #374151)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Button3() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0)] left-[-8px] rounded-[9999px] size-[40px] top-0" data-name="Button">
      <Frame4 />
    </div>
  );
}

function Container38() {
  return (
    <div className="absolute h-[40px] left-[24px] top-[16px] w-[32px]" data-name="Container">
      <Button3 />
    </div>
  );
}

function Container39() {
  return <div className="absolute h-[100px] left-[133.06px] top-[36px] w-[109.063px]" data-name="Container" />;
}

function Container40() {
  return <div className="absolute h-[100px] left-[242.13px] top-[36px] w-[109.063px]" data-name="Container" />;
}

function Container41() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.5)] h-[72px] left-0 top-0 w-[375.2px]" data-name="Container">
      <Container38 />
      <Container39 />
      <Container40 />
    </div>
  );
}

function Heading3() {
  return (
    <div className="absolute h-[32px] left-0 top-0 w-[327.2px]" data-name="Heading">
      <div className="absolute flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[32px] justify-center leading-[0] left-[163.6px] not-italic text-[#111827] text-[20.4px] text-center top-[16px] translate-x-[-50%] translate-y-[-50%] w-[157.1px]">
        <p className="leading-[32px]">Welcome Back</p>
      </div>
    </div>
  );
}

function Paragraph5() {
  return (
    <div className="absolute h-[24px] left-0 top-[40px] w-[327.2px]" data-name="Paragraph">
      <div className="absolute flex flex-col font-['Inter:Light',sans-serif] font-light h-[21.6px] justify-center leading-[0] left-[163.6px] not-italic text-[#6b7280] text-[13.6px] text-center top-[11.6px] translate-x-[-50%] translate-y-[-50%] w-[187.075px]">
        <p className="leading-[24px]">Continue your daily practice</p>
      </div>
    </div>
  );
}

function Container42() {
  return (
    <div className="absolute h-[64px] left-0 top-0 w-[327.2px]" data-name="Container">
      <Heading3 />
      <Paragraph5 />
    </div>
  );
}

function Label4() {
  return (
    <div className="absolute h-[20px] left-[4px] top-0 w-[273.6px]" data-name="Label">
      <div className="absolute flex flex-col font-['Inter:Medium',sans-serif] font-medium h-[18.4px] justify-center leading-[0] left-0 not-italic text-[#374151] text-[11.9px] top-[10px] translate-y-[-50%] w-[34.275px]">
        <p className="leading-[20px]">Email</p>
      </div>
    </div>
  );
}

function Input4() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.5)] content-stretch flex h-[49.6px] items-center left-0 px-[16px] py-[12px] rounded-[12px] top-[28px] w-[277.6px]" data-name="Input">
      <div aria-hidden="true" className="absolute border-0 border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <p className="font-['Inter:Light',sans-serif] font-light leading-[24px] not-italic relative shrink-0 text-[#ccc] text-[16px] text-nowrap">hello@example.com</p>
    </div>
  );
}

function Container43() {
  return (
    <div className="absolute h-[77.6px] left-[24.8px] top-[24.8px] w-[277.6px]" data-name="Container">
      <Label4 />
      <Input4 />
    </div>
  );
}

function Label5() {
  return (
    <div className="absolute h-[20px] left-[4px] top-0 w-[273.6px]" data-name="Label">
      <div className="absolute flex flex-col font-['Inter:Medium',sans-serif] font-medium h-[18.4px] justify-center leading-[0] left-0 not-italic text-[#374151] text-[11.9px] top-[10px] translate-y-[-50%] w-[59.55px]">
        <p className="leading-[20px]">Password</p>
      </div>
    </div>
  );
}

function Input5() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.5)] content-stretch flex h-[49.6px] items-center left-0 px-[16px] py-[12px] rounded-[12px] top-[28px] w-[277.6px]" data-name="Input">
      <div aria-hidden="true" className="absolute border-0 border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <p className="font-['Inter:Light',sans-serif] font-light leading-[24px] not-italic relative shrink-0 text-[#ccc] text-[16px] text-nowrap">••••••••</p>
    </div>
  );
}

function Container44() {
  return (
    <div className="absolute h-[77.6px] left-0 top-0 w-[277.6px]" data-name="Container">
      <Label5 />
      <Input5 />
    </div>
  );
}

function Container45() {
  return (
    <div className="absolute h-[101.6px] left-[24.8px] top-[118.4px] w-[277.6px]" data-name="Container">
      <Container44 />
    </div>
  );
}

function Container46() {
  return (
    <div className="absolute h-[16px] left-[181.24px] top-[4px] w-[96.363px]" data-name="Container">
      <div className="absolute flex flex-col font-['Inter:Medium',sans-serif] font-medium h-[16px] justify-center leading-[0] left-0 not-italic text-[#2563eb] text-[10.2px] top-[8px] translate-y-[-50%] w-[96.362px]">
        <p className="leading-[16px]">Forgot password?</p>
      </div>
    </div>
  );
}

function Container47() {
  return (
    <div className="absolute h-[28px] left-[25px] top-[208.2px] w-[277px]" data-name="Container">
      <Container46 />
    </div>
  );
}

function StateLayer1() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-center px-[16px] py-[10px] relative shrink-0" data-name="State-layer">
      <div className="flex flex-col font-['Roboto:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[14px] text-nowrap text-white tracking-[0.1px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[20px]">Log in</p>
      </div>
    </div>
  );
}

function Content1() {
  return (
    <div className="bg-[#6750a4] content-stretch flex flex-col items-center justify-center overflow-clip relative rounded-[100px] shrink-0" data-name="Content">
      <StateLayer1 />
    </div>
  );
}

function Button4() {
  return (
    <div className="absolute content-stretch flex h-[48px] items-center justify-center left-[95.2px] top-[4.2px]" data-name="Button">
      <Content1 />
    </div>
  );
}

function Container48() {
  return (
    <div className="absolute h-[56px] left-[24.8px] top-[236px] w-[277.6px]" data-name="Container">
      <Button4 />
    </div>
  );
}

function Container49() {
  return (
    <div className="absolute bg-white border-0 border-[rgba(255,255,255,0.5)] border-solid h-[316.8px] left-0 rounded-[16px] shadow-[0px_4px_6px_-4px_rgba(30,58,138,0.05),0px_10px_15px_-3px_rgba(30,58,138,0.05),0px_0px_0px_0px_rgba(0,0,0,0),0px_0px_0px_0px_rgba(0,0,0,0)] top-[96px] w-[327.2px]" data-name="Container">
      <Container43 />
      <Container45 />
      <Container47 />
      <Container48 />
    </div>
  );
}

function Container50() {
  return (
    <div className="absolute h-[18.4px] left-[209.55px] top-[0.8px] w-[48.338px]" data-name="Container">
      <div className="absolute flex flex-col font-['Inter:Medium',sans-serif] font-medium h-[18.4px] justify-center leading-[0] left-[24.17px] not-italic text-[#2563eb] text-[11.9px] text-center top-[9.2px] translate-x-[-50%] translate-y-[-50%] w-[48.338px]">
        <p className="leading-[20px]">Sign up</p>
      </div>
    </div>
  );
}

function Paragraph6() {
  return (
    <div className="absolute h-[20px] left-0 top-0 w-[327.2px]" data-name="Paragraph">
      <div className="absolute flex flex-col font-['Inter:Light',sans-serif] font-light h-[18.4px] justify-center leading-[0] left-[137.51px] not-italic text-[#4b5563] text-[11.9px] text-center top-[10px] translate-x-[-50%] translate-y-[-50%] w-[136.413px]">
        <p className="leading-[20px]">{`Don't have an account?`}</p>
      </div>
      <div className="absolute flex flex-col font-['Inter:Light',sans-serif] font-light h-[18.4px] justify-center leading-[0] left-[207.63px] not-italic text-[#4b5563] text-[11.9px] text-center top-[10px] translate-x-[-50%] translate-y-[-50%] w-[3.837px]">
        <p className="leading-[20px]"> </p>
      </div>
      <Container50 />
    </div>
  );
}

function Container51() {
  return (
    <div className="absolute h-[20px] left-0 top-[444.8px] w-[327.2px]" data-name="Container">
      <Paragraph6 />
    </div>
  );
}

function Container52() {
  return (
    <div className="absolute h-[464.8px] left-[24px] top-[76.8px] w-[327.2px]" data-name="Container">
      <Container42 />
      <Container49 />
      <Container51 />
    </div>
  );
}

function Container53() {
  return (
    <div className="absolute h-[618.4px] left-0 top-[72px] w-[375.2px]" data-name="Container">
      <Container52 />
    </div>
  );
}

function Container54() {
  return (
    <div className="absolute h-[690.4px] left-0 overflow-clip shadow-[0px_25px_50px_-12px_rgba(0,0,0,0.25),0px_0px_0px_0px_rgba(0,0,0,0),0px_0px_0px_0px_rgba(0,0,0,0)] top-0 w-[375.2px]" data-name="Container" style={{ backgroundImage: "linear-gradient(118.522deg, rgb(239, 246, 255) 25%, rgb(250, 245, 255) 60.355%, rgb(240, 253, 244) 95.711%)" }}>
      <Container41 />
      <Container53 />
    </div>
  );
}

function Container55() {
  return (
    <div className="absolute bg-[#f3f4f6] h-[690.4px] left-0 top-0 w-[375.2px]" data-name="Container">
      <Container54 />
    </div>
  );
}

function Container56() {
  return (
    <div className="absolute h-[690.4px] left-0 top-0 w-[375.2px]" data-name="Container">
      <Container55 />
    </div>
  );
}

function Component6LoginPage() {
  return (
    <div className="absolute bg-white h-[690.4px] left-[3166px] top-[47px] w-[375.2px]" data-name="6. login page">
      <Container56 />
    </div>
  );
}

function Frame5() {
  return (
    <div className="absolute left-[8px] size-[24px] top-[8px]" data-name="Frame">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Frame">
          <path d="M12 19L5 12L12 5" id="Vector" stroke="var(--stroke-0, #374151)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d="M19 12H5" id="Vector_2" stroke="var(--stroke-0, #374151)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Button5() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0)] left-[-8px] rounded-[9999px] size-[40px] top-0" data-name="Button">
      <Frame5 />
    </div>
  );
}

function Container57() {
  return (
    <div className="absolute h-[40px] left-[24px] top-[16px] w-[109.063px]" data-name="Container">
      <Button5 />
    </div>
  );
}

function Container58() {
  return <div className="absolute h-[100px] left-[133.06px] top-[36px] w-[109.063px]" data-name="Container" />;
}

function Container59() {
  return <div className="absolute h-[100px] left-[242.13px] top-[36px] w-[109.063px]" data-name="Container" />;
}

function Container60() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.5)] h-[72px] left-0 top-0 w-[375.2px]" data-name="Container">
      <Container57 />
      <Container58 />
      <Container59 />
    </div>
  );
}

function Frame6() {
  return (
    <div className="absolute left-[16px] size-[32px] top-[16px]" data-name="Frame">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="Frame">
          <path d={svgPaths.pd243c80} id="Vector" stroke="var(--stroke-0, #3B82F6)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d={svgPaths.p3cc2c7f0} id="Vector_2" stroke="var(--stroke-0, #3B82F6)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Container61() {
  return (
    <div className="absolute bg-[#eff6ff] left-[131.6px] rounded-[9999px] size-[64px] top-0" data-name="Container">
      <Frame6 />
    </div>
  );
}

function Heading4() {
  return (
    <div className="absolute h-[32px] left-0 top-0 w-[327.2px]" data-name="Heading">
      <div className="absolute flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[32px] justify-center leading-[0] left-[163.6px] not-italic text-[#111827] text-[20.4px] text-center top-[16px] translate-x-[-50%] translate-y-[-50%] w-[165.35px]">
        <p className="leading-[32px]">Reset Password</p>
      </div>
    </div>
  );
}

function Paragraph7() {
  return (
    <div className="absolute font-['Inter:Light',sans-serif] font-light h-[48px] leading-[0] left-0 not-italic text-[#6b7280] text-[13.6px] text-center top-[40px] w-[327.2px]" data-name="Paragraph">
      <div className="absolute flex flex-col h-[21.6px] justify-center left-[163.59px] top-[11.6px] translate-x-[-50%] translate-y-[-50%] w-[304.388px]">
        <p className="leading-[24px]">{`Enter your email address and we'll send you a `}</p>
      </div>
      <div className="absolute flex flex-col h-[21.6px] justify-center left-[163.59px] top-[35.6px] translate-x-[-50%] translate-y-[-50%] w-[182.213px]">
        <p className="leading-[24px]">link to reset your password.</p>
      </div>
    </div>
  );
}

function Container62() {
  return (
    <div className="absolute h-[88px] left-0 top-[80px] w-[327.2px]" data-name="Container">
      <Heading4 />
      <Paragraph7 />
    </div>
  );
}

function Container63() {
  return (
    <div className="absolute h-[168px] left-0 top-0 w-[327.2px]" data-name="Container">
      <Container61 />
      <Container62 />
    </div>
  );
}

function Label6() {
  return (
    <div className="absolute h-[20px] left-[4px] top-0 w-[273.6px]" data-name="Label">
      <div className="absolute flex flex-col font-['Inter:Medium',sans-serif] font-medium h-[18.4px] justify-center leading-[0] left-0 not-italic text-[#374151] text-[11.9px] top-[10px] translate-y-[-50%] w-[88.962px]">
        <p className="leading-[20px]">Email Address</p>
      </div>
    </div>
  );
}

function Input6() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.5)] content-stretch flex h-[49.6px] items-center left-0 px-[16px] py-[12px] rounded-[12px] top-[28px] w-[277.6px]" data-name="Input">
      <div aria-hidden="true" className="absolute border-0 border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <p className="font-['Inter:Light',sans-serif] font-light leading-[24px] not-italic relative shrink-0 text-[#ccc] text-[16px] text-nowrap">hello@example.com</p>
    </div>
  );
}

function Container64() {
  return (
    <div className="absolute h-[77.6px] left-[24.8px] top-[24.8px] w-[277.6px]" data-name="Container">
      <Label6 />
      <Input6 />
    </div>
  );
}

function StateLayer2() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-center px-[16px] py-[10px] relative shrink-0" data-name="State-layer">
      <div className="flex flex-col font-['Roboto:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[14px] text-nowrap text-white tracking-[0.1px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[20px]">Send Reset Link</p>
      </div>
    </div>
  );
}

function Content2() {
  return (
    <div className="bg-[#6750a4] content-stretch flex flex-col items-center justify-center overflow-clip relative rounded-[100px] shrink-0" data-name="Content">
      <StateLayer2 />
    </div>
  );
}

function Button6() {
  return (
    <div className="absolute content-stretch flex h-[48px] items-center justify-center left-[82.2px] top-0" data-name="Button">
      <Content2 />
    </div>
  );
}

function Button7() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0)] h-[48px] left-[24.8px] rounded-[9999px] shadow-[0px_2px_4px_-2px_rgba(0,0,0,0.1),0px_4px_6px_-1px_rgba(0,0,0,0.1),0px_0px_0px_0px_rgba(0,0,0,0),0px_0px_0px_0px_rgba(0,0,0,0)] top-[126.4px] w-[277.6px]" data-name="Button">
      <Button6 />
    </div>
  );
}

function Container65() {
  return (
    <div className="absolute bg-white border-0 border-[rgba(255,255,255,0.5)] border-solid h-[199.2px] left-0 rounded-[16px] shadow-[0px_4px_6px_-4px_rgba(30,58,138,0.05),0px_10px_15px_-3px_rgba(30,58,138,0.05),0px_0px_0px_0px_rgba(0,0,0,0),0px_0px_0px_0px_rgba(0,0,0,0)] top-[200px] w-[327.2px]" data-name="Container">
      <Container64 />
      <Button7 />
    </div>
  );
}

function Container66() {
  return (
    <div className="absolute h-[18.4px] left-[120.5px] top-[3.2px] w-[86.2px]" data-name="Container">
      <div className="absolute flex flex-col font-['Inter:Medium',sans-serif] font-medium h-[18.4px] justify-center leading-[0] left-[43.1px] not-italic text-[#6b7280] text-[11.9px] text-center top-[9.2px] translate-x-[-50%] translate-y-[-50%] w-[86.2px]">
        <p className="leading-[20px]">Back to Login</p>
      </div>
    </div>
  );
}

function Container67() {
  return (
    <div className="absolute h-[24px] left-0 top-[431.2px] w-[327.2px]" data-name="Container">
      <Container66 />
    </div>
  );
}

function Container68() {
  return (
    <div className="absolute h-[455.2px] left-[24px] top-[81.6px] w-[327.2px]" data-name="Container">
      <Container63 />
      <Container65 />
      <Container67 />
    </div>
  );
}

function Container69() {
  return (
    <div className="absolute h-[618.4px] left-0 top-[72px] w-[375.2px]" data-name="Container">
      <Container68 />
    </div>
  );
}

function Container70() {
  return (
    <div className="absolute h-[690.4px] left-0 overflow-clip shadow-[0px_25px_50px_-12px_rgba(0,0,0,0.25),0px_0px_0px_0px_rgba(0,0,0,0),0px_0px_0px_0px_rgba(0,0,0,0)] top-0 w-[375.2px]" data-name="Container" style={{ backgroundImage: "linear-gradient(118.522deg, rgb(239, 246, 255) 25%, rgb(250, 245, 255) 60.355%, rgb(240, 253, 244) 95.711%)" }}>
      <Container60 />
      <Container69 />
    </div>
  );
}

function Container71() {
  return (
    <div className="absolute bg-[#f3f4f6] h-[690.4px] left-0 top-0 w-[375.2px]" data-name="Container">
      <Container70 />
    </div>
  );
}

function Container72() {
  return (
    <div className="absolute h-[690.4px] left-0 top-0 w-[375.2px]" data-name="Container">
      <Container71 />
    </div>
  );
}

function Component7ForgotPassword() {
  return (
    <div className="absolute bg-white h-[690.4px] left-[3800px] top-[47px] w-[375.2px]" data-name="7. forgot_password">
      <Container72 />
    </div>
  );
}

function Container73() {
  return <div className="absolute h-[100px] left-[24px] top-[36px] w-[107.188px]" data-name="Container" />;
}

function Container74() {
  return <div className="absolute h-[100px] left-[131.2px] top-[36px] w-[107.188px]" data-name="Container" />;
}

function Frame7() {
  return (
    <div className="absolute left-[8px] size-[24px] top-[8px]" data-name="Frame">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Frame">
          <path d="M4 12H20" id="Vector" stroke="var(--stroke-0, #374151)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d="M4 18H20" id="Vector_2" stroke="var(--stroke-0, #374151)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d="M4 6H20" id="Vector_3" stroke="var(--stroke-0, #374151)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Button8() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0)] left-[75.19px] rounded-[9999px] size-[40px] top-0" data-name="Button">
      <Frame7 />
    </div>
  );
}

function Container75() {
  return (
    <div className="absolute h-[40px] left-[227px] top-[16px] w-[119px]" data-name="Container">
      <Button8 />
    </div>
  );
}

function Container76() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.5)] h-[72px] left-0 top-0 w-[369.6px]" data-name="Container">
      <Container73 />
      <Container74 />
      <Container75 />
    </div>
  );
}

function Paragraph8() {
  return (
    <div className="absolute h-[20px] left-0 top-0 w-[171.512px]" data-name="Paragraph">
      <div className="absolute flex flex-col font-['Inter:Medium',sans-serif] font-medium h-[18.4px] justify-center leading-[0] left-0 not-italic text-[#6b7280] text-[11.9px] top-[10px] translate-y-[-50%] w-[171.512px]">
        <p className="leading-[20px]">Thursday, December 18</p>
      </div>
    </div>
  );
}

function Heading5() {
  return (
    <div className="absolute h-[32px] left-0 top-[24px] w-[171.512px]" data-name="Heading">
      <div className="absolute flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[32px] justify-center leading-[0] left-0 not-italic text-[#111827] text-[20.4px] top-[16px] translate-y-[-50%] w-[116.15px]">
        <p className="leading-[32px]">Hello, Alex</p>
      </div>
    </div>
  );
}

function Container77() {
  return (
    <div className="absolute h-[56px] left-0 top-0 w-[171.512px]" data-name="Container">
      <Paragraph8 />
      <Heading5 />
    </div>
  );
}

function Frame8() {
  return (
    <div className="absolute left-[12.8px] size-[16px] top-[8.8px]" data-name="Frame">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Frame">
          <path d={svgPaths.p12187900} id="Vector" stroke="var(--stroke-0, #F97316)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Span() {
  return (
    <div className="absolute h-[20px] left-[36.8px] top-[6.8px] w-[16.113px]" data-name="Span">
      <div className="absolute flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[18.4px] justify-center leading-[0] left-[8.06px] not-italic text-[#374151] text-[11.9px] text-center top-[10px] translate-x-[-50%] translate-y-[-50%] w-[16.113px]">
        <p className="leading-[20px]">12</p>
      </div>
    </div>
  );
}

function Button9() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.6)] border-0 border-[rgba(255,255,255,0.5)] border-solid h-[33.6px] left-[255.89px] rounded-[9999px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05),0px_0px_0px_0px_rgba(0,0,0,0),0px_0px_0px_0px_rgba(0,0,0,0)] top-[22.4px] w-[65.713px]" data-name="Button">
      <Frame8 />
      <Span />
    </div>
  );
}

function Container78() {
  return (
    <div className="absolute h-[56px] left-[24px] top-[24px] w-[321.6px]" data-name="Container">
      <Container77 />
      <Button9 />
    </div>
  );
}

function Container79() {
  return <div className="absolute blur-md filter h-[252px] left-0 rounded-[24px] top-[16px] w-[321.6px]" data-name="Container" style={{ backgroundImage: "linear-gradient(141.918deg, rgba(96, 165, 250, 0.2) 25%, rgba(168, 85, 247, 0.2) 95.711%)" }} />;
}

function Container80() {
  return <div className="absolute bg-[rgba(239,246,255,0.5)] left-[257.6px] rounded-[9999px] size-[128px] top-[-64px]" data-name="Container" />;
}

function Span1() {
  return (
    <div className="absolute bg-[#dbeafe] h-[20px] left-0 rounded-[9999px] top-0 w-[92.425px]" data-name="Span">
      <div className="absolute flex flex-col font-['Inter:Medium',sans-serif] font-medium h-[16px] justify-center leading-[0] left-[10px] not-italic text-[#1e40af] text-[10.2px] top-[10px] translate-y-[-50%] w-[72.425px]">
        <p className="leading-[16px]">Daily Mission</p>
      </div>
    </div>
  );
}

function Span2() {
  return (
    <div className="absolute h-[16px] left-[100.43px] top-[2px] w-[69.988px]" data-name="Span">
      <div className="absolute flex flex-col font-['Inter:Light',sans-serif] font-light h-[16px] justify-center leading-[0] left-0 not-italic text-[#6b7280] text-[10.2px] top-[8px] translate-y-[-50%] w-[69.988px]">
        <p className="leading-[16px]">Ready for you</p>
      </div>
    </div>
  );
}

function Container81() {
  return (
    <div className="absolute h-[20px] left-0 top-0 w-[273.6px]" data-name="Container">
      <Span1 />
      <Span2 />
    </div>
  );
}

function Heading6() {
  return (
    <div className="absolute h-[32px] left-0 top-0 w-[273.6px]" data-name="Heading">
      <div className="absolute flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[32px] justify-center leading-[0] left-0 not-italic text-[#111827] text-[20.4px] top-[16px] translate-y-[-50%] w-[256.05px]">
        <p className="leading-[32px]">{`Today's mission is ready`}</p>
      </div>
    </div>
  );
}

function Paragraph9() {
  return (
    <div className="absolute font-['Inter:Light',sans-serif] font-light h-[48px] leading-[0] left-0 not-italic text-[#4b5563] text-[13.6px] top-[40px] w-[273.6px]" data-name="Paragraph">
      <div className="absolute flex flex-col h-[21.6px] justify-center left-0 top-[11.6px] translate-y-[-50%] w-[256.925px]">
        <p className="leading-[24px]">{`A small action to build connection and `}</p>
      </div>
      <div className="absolute flex flex-col h-[21.6px] justify-center left-0 top-[35.6px] translate-y-[-50%] w-[76.675px]">
        <p className="leading-[24px]">confidence.</p>
      </div>
    </div>
  );
}

function Container82() {
  return (
    <div className="absolute h-[88px] left-0 top-[44px] w-[273.6px]" data-name="Container">
      <Heading6 />
      <Paragraph9 />
    </div>
  );
}

function StateLayer3() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-center px-[16px] py-[10px] relative shrink-0" data-name="State-layer">
      <div className="flex flex-col font-['Roboto:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[14px] text-nowrap text-white tracking-[0.1px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[20px]">View Today’s Mission</p>
      </div>
    </div>
  );
}

function Content3() {
  return (
    <div className="bg-[#6750a4] content-stretch flex flex-col items-center justify-center overflow-clip relative rounded-[100px] shrink-0" data-name="Content">
      <StateLayer3 />
    </div>
  );
}

function Button10() {
  return (
    <div className="absolute content-stretch flex h-[48px] items-center justify-center left-[46px] top-[156px]" data-name="Button">
      <Content3 />
    </div>
  );
}

function Container83() {
  return (
    <div className="absolute h-[204px] left-[24px] top-[24px] w-[273.6px]" data-name="Container">
      <Container81 />
      <Container82 />
      <Button10 />
    </div>
  );
}

function Container84() {
  return (
    <div className="absolute bg-white h-[252px] left-0 overflow-clip rounded-[16px] shadow-[0px_4px_6px_-4px_rgba(30,58,138,0.05),0px_10px_15px_-3px_rgba(30,58,138,0.05),0px_0px_0px_1px_rgba(0,0,0,0.05),0px_0px_0px_0px_white] top-0 w-[321.6px]" data-name="Container">
      <Container80 />
      <Container83 />
    </div>
  );
}

function Container85() {
  return (
    <div className="absolute h-[252px] left-[24px] top-[112px] w-[321.6px]" data-name="Container">
      <Container79 />
      <Container84 />
    </div>
  );
}

function Paragraph10() {
  return (
    <div className="absolute h-[20px] left-0 top-[16px] w-[321.6px]" data-name="Paragraph">
      <div className="absolute flex flex-col font-['Inter:Medium',sans-serif] font-medium h-[18.4px] justify-center leading-[0] left-[160.79px] not-italic text-[#6b7280] text-[11.9px] text-center top-[10px] translate-x-[-50%] translate-y-[-50%] w-[225.888px]">
        <p className="leading-[20px]">{`You're building a habit. Keep going.`}</p>
      </div>
    </div>
  );
}

function Container86() {
  return (
    <div className="absolute h-[52px] left-[24px] top-[396px] w-[321.6px]" data-name="Container">
      <Paragraph10 />
    </div>
  );
}

function Frame9() {
  return (
    <div className="absolute left-[8px] size-[20px] top-[8px]" data-name="Frame">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Frame">
          <path d="M6.66667 1.66667V5" id="Vector" stroke="var(--stroke-0, #16A34A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d="M13.3333 1.66667V5" id="Vector_2" stroke="var(--stroke-0, #16A34A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d={svgPaths.p1da67b80} id="Vector_3" stroke="var(--stroke-0, #16A34A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d="M2.5 8.33333H17.5" id="Vector_4" stroke="var(--stroke-0, #16A34A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Container87() {
  return (
    <div className="absolute bg-[#dcfce7] left-0 rounded-[8px] size-[36px] top-0" data-name="Container">
      <Frame9 />
    </div>
  );
}

function Paragraph11() {
  return (
    <div className="absolute h-[32px] left-0 top-0 w-[119.2px]" data-name="Paragraph">
      <div className="absolute flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[32px] justify-center leading-[0] left-0 not-italic text-[#111827] text-[20.4px] top-[16px] translate-y-[-50%] w-[27.612px]">
        <p className="leading-[32px]">48</p>
      </div>
    </div>
  );
}

function Paragraph12() {
  return (
    <div className="absolute h-[16px] left-0 top-[32px] w-[119.2px]" data-name="Paragraph">
      <div className="absolute flex flex-col font-['Inter:Light',sans-serif] font-light h-[16px] justify-center leading-[0] left-0 not-italic text-[#6b7280] text-[10.2px] top-[8px] translate-y-[-50%] w-[98.837px]">
        <p className="leading-[16px]">Missions completed</p>
      </div>
    </div>
  );
}

function Container88() {
  return (
    <div className="absolute h-[48px] left-0 top-[48px] w-[119.2px]" data-name="Container">
      <Paragraph11 />
      <Paragraph12 />
    </div>
  );
}

function Container89() {
  return (
    <div className="absolute h-[96px] left-[16.8px] top-[16.8px] w-[119.2px]" data-name="Container">
      <Container87 />
      <Container88 />
    </div>
  );
}

function Container90() {
  return (
    <div className="absolute bg-[#f9fafb] border-0 border-[#f3f4f6] border-solid h-[129.6px] left-0 rounded-[16px] top-0 w-[152.8px]" data-name="Container">
      <Container89 />
    </div>
  );
}

function Button11() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0)] h-[129.6px] left-0 top-0 w-[152.8px]" data-name="Button">
      <Container90 />
    </div>
  );
}

function Frame10() {
  return (
    <div className="absolute left-[8px] size-[20px] top-[8px]" data-name="Frame">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Frame">
          <path d={svgPaths.p2110f1c0} id="Vector" stroke="var(--stroke-0, #9333EA)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d="M2.5 2.5V6.66667H6.66667" id="Vector_2" stroke="var(--stroke-0, #9333EA)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d={svgPaths.pc8ce200} id="Vector_3" stroke="var(--stroke-0, #9333EA)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Container91() {
  return (
    <div className="absolute bg-[#f3e8ff] left-0 rounded-[8px] size-[36px] top-0" data-name="Container">
      <Frame10 />
    </div>
  );
}

function Paragraph13() {
  return (
    <div className="absolute h-[32px] left-0 top-0 w-[119.2px]" data-name="Paragraph">
      <div className="absolute flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[32px] justify-center leading-[0] left-0 not-italic text-[#111827] text-[20.4px] top-[16px] translate-y-[-50%] w-[45.087px]">
        <p className="leading-[32px]">Last</p>
      </div>
    </div>
  );
}

function Paragraph14() {
  return (
    <div className="absolute h-[16px] left-0 top-[32px] w-[119.2px]" data-name="Paragraph">
      <div className="absolute flex flex-col font-['Inter:Light',sans-serif] font-light h-[16px] justify-center leading-[0] left-0 not-italic text-[#6b7280] text-[10.2px] top-[8px] translate-y-[-50%] w-[61.15px]">
        <p className="leading-[16px]">View history</p>
      </div>
    </div>
  );
}

function Container92() {
  return (
    <div className="absolute h-[48px] left-0 top-[48px] w-[119.2px]" data-name="Container">
      <Paragraph13 />
      <Paragraph14 />
    </div>
  );
}

function Container93() {
  return (
    <div className="absolute h-[96px] left-[16.8px] top-[16.8px] w-[119.2px]" data-name="Container">
      <Container91 />
      <Container92 />
    </div>
  );
}

function Container94() {
  return (
    <div className="absolute bg-[#f9fafb] border-0 border-[#f3f4f6] border-solid h-[129.6px] left-0 rounded-[16px] top-0 w-[152.8px]" data-name="Container">
      <Container93 />
    </div>
  );
}

function Button12() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0)] h-[129.6px] left-[168.8px] top-0 w-[152.8px]" data-name="Button">
      <Container94 />
    </div>
  );
}

function Container95() {
  return (
    <div className="absolute h-[129.6px] left-[24px] top-[480px] w-[321.6px]" data-name="Container">
      <Button11 />
      <Button12 />
    </div>
  );
}

function Container96() {
  return (
    <div className="absolute h-[633.6px] left-0 top-0 w-[369.6px]" data-name="Container">
      <Container78 />
      <Container85 />
      <Container86 />
      <Container95 />
    </div>
  );
}

function Frame11() {
  return (
    <div className="absolute left-[10px] size-[20px] top-[10px]" data-name="Frame">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Frame">
          <path d="M6.66667 1.66667V5" id="Vector" stroke="var(--stroke-0, #2563EB)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d="M13.3333 1.66667V5" id="Vector_2" stroke="var(--stroke-0, #2563EB)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d={svgPaths.p1da67b80} id="Vector_3" stroke="var(--stroke-0, #2563EB)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d="M2.5 8.33333H17.5" id="Vector_4" stroke="var(--stroke-0, #2563EB)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Container97() {
  return (
    <div className="absolute bg-[#eff6ff] left-0 rounded-[9999px] size-[40px] top-0" data-name="Container">
      <Frame11 />
    </div>
  );
}

function Button13() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0)] left-[64.26px] size-[40px] top-[16.8px]" data-name="Button">
      <Container97 />
    </div>
  );
}

function Frame12() {
  return (
    <div className="absolute left-0 size-[20px] top-0" data-name="Frame">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Frame">
          <path d={svgPaths.p2110f1c0} id="Vector" stroke="var(--stroke-0, #9CA3AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d="M2.5 2.5V6.66667H6.66667" id="Vector_2" stroke="var(--stroke-0, #9CA3AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d={svgPaths.pc8ce200} id="Vector_3" stroke="var(--stroke-0, #9CA3AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Button14() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0)] left-[184.79px] size-[20px] top-[26.8px]" data-name="Button">
      <Frame12 />
    </div>
  );
}

function Frame13() {
  return (
    <div className="absolute left-0 size-[20px] top-0" data-name="Frame">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Frame">
          <path d={svgPaths.p2026e800} id="Vector" stroke="var(--stroke-0, #9CA3AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d={svgPaths.p32ab0300} id="Vector_2" stroke="var(--stroke-0, #9CA3AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Button15() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0)] left-[285.31px] size-[20px] top-[26.8px]" data-name="Button">
      <Frame13 />
    </div>
  );
}

function Container98() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.8)] border-0 border-[#e5e7eb] border-solid h-[74px] left-0 top-[640px] w-[370px]" data-name="Container">
      <Button13 />
      <Button14 />
      <Button15 />
    </div>
  );
}

function Container99() {
  return (
    <div className="absolute h-[713.6px] left-0 top-[72px] w-[369.6px]" data-name="Container">
      <Container96 />
      <Container98 />
    </div>
  );
}

function Container100() {
  return (
    <div className="absolute h-[785.6px] left-0 overflow-clip shadow-[0px_25px_50px_-12px_rgba(0,0,0,0.25),0px_0px_0px_0px_rgba(0,0,0,0),0px_0px_0px_0px_rgba(0,0,0,0)] top-0 w-[369.6px]" data-name="Container" style={{ backgroundImage: "linear-gradient(115.196deg, rgb(239, 246, 255) 25%, rgb(250, 245, 255) 60.355%, rgb(240, 253, 244) 95.711%)" }}>
      <Container76 />
      <Container99 />
    </div>
  );
}

function Container101() {
  return (
    <div className="absolute bg-[#f3f4f6] h-[785.6px] left-0 top-0 w-[369.6px]" data-name="Container">
      <Container100 />
    </div>
  );
}

function Container102() {
  return (
    <div className="absolute h-[785.6px] left-0 top-0 w-[369.6px]" data-name="Container">
      <Container101 />
    </div>
  );
}

function Component8HomeDashboard() {
  return (
    <div className="absolute bg-white h-[785.6px] left-[4434px] top-0 w-[369.6px]" data-name="8.Home_dashboard">
      <Container102 />
    </div>
  );
}

function Container103() {
  return <div className="absolute h-[100px] left-[24px] top-[36px] w-[107.188px]" data-name="Container" />;
}

function Container104() {
  return <div className="absolute h-[100px] left-[131.2px] top-[36px] w-[107.188px]" data-name="Container" />;
}

function Frame14() {
  return (
    <div className="absolute left-[8px] size-[24px] top-[8px]" data-name="Frame">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Frame">
          <path d="M4 12H20" id="Vector" stroke="var(--stroke-0, #374151)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d="M4 18H20" id="Vector_2" stroke="var(--stroke-0, #374151)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d="M4 6H20" id="Vector_3" stroke="var(--stroke-0, #374151)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Button16() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0)] left-[75.19px] rounded-[9999px] size-[40px] top-0" data-name="Button">
      <Frame14 />
    </div>
  );
}

function Container105() {
  return (
    <div className="absolute h-[40px] left-[238.4px] top-[16px] w-[107.188px]" data-name="Container">
      <Button16 />
    </div>
  );
}

function Container106() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.5)] h-[72px] left-0 top-0 w-[369.6px]" data-name="Container">
      <Container103 />
      <Container104 />
      <Container105 />
    </div>
  );
}

function Paragraph15() {
  return (
    <div className="absolute h-[20px] left-0 top-0 w-[171.512px]" data-name="Paragraph">
      <div className="absolute flex flex-col font-['Inter:Medium',sans-serif] font-medium h-[18.4px] justify-center leading-[0] left-0 not-italic text-[#6b7280] text-[11.9px] top-[10px] translate-y-[-50%] w-[171.512px]">
        <p className="leading-[20px]">Thursday, December 18</p>
      </div>
    </div>
  );
}

function Heading7() {
  return (
    <div className="absolute h-[32px] left-0 top-[24px] w-[171.512px]" data-name="Heading">
      <div className="absolute flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[32px] justify-center leading-[0] left-0 not-italic text-[#111827] text-[20.4px] top-[16px] translate-y-[-50%] w-[116.15px]">
        <p className="leading-[32px]">Hello, Alex</p>
      </div>
    </div>
  );
}

function Container107() {
  return (
    <div className="absolute h-[56px] left-0 top-0 w-[171.512px]" data-name="Container">
      <Paragraph15 />
      <Heading7 />
    </div>
  );
}

function Frame15() {
  return (
    <div className="absolute left-[12.8px] size-[16px] top-[8.8px]" data-name="Frame">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Frame">
          <path d={svgPaths.p12187900} id="Vector" stroke="var(--stroke-0, #F97316)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Span3() {
  return (
    <div className="absolute h-[20px] left-[36.8px] top-[6.8px] w-[16.113px]" data-name="Span">
      <div className="absolute flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[18.4px] justify-center leading-[0] left-[8.06px] not-italic text-[#374151] text-[11.9px] text-center top-[10px] translate-x-[-50%] translate-y-[-50%] w-[16.113px]">
        <p className="leading-[20px]">12</p>
      </div>
    </div>
  );
}

function Button17() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.6)] border-0 border-[rgba(255,255,255,0.5)] border-solid h-[33.6px] left-[255.89px] rounded-[9999px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05),0px_0px_0px_0px_rgba(0,0,0,0),0px_0px_0px_0px_rgba(0,0,0,0)] top-[22.4px] w-[65.713px]" data-name="Button">
      <Frame15 />
      <Span3 />
    </div>
  );
}

function Container108() {
  return (
    <div className="absolute h-[56px] left-[24px] top-[24px] w-[321.6px]" data-name="Container">
      <Container107 />
      <Button17 />
    </div>
  );
}

function Container109() {
  return <div className="absolute blur-md filter h-[252px] left-0 rounded-[24px] top-[16px] w-[321.6px]" data-name="Container" style={{ backgroundImage: "linear-gradient(141.918deg, rgba(96, 165, 250, 0.2) 25%, rgba(168, 85, 247, 0.2) 95.711%)" }} />;
}

function Container110() {
  return <div className="absolute bg-[rgba(239,246,255,0.5)] left-[257.6px] rounded-[9999px] size-[128px] top-[-64px]" data-name="Container" />;
}

function Span4() {
  return (
    <div className="absolute bg-[#dbeafe] h-[20px] left-0 rounded-[9999px] top-0 w-[92.425px]" data-name="Span">
      <div className="absolute flex flex-col font-['Inter:Medium',sans-serif] font-medium h-[16px] justify-center leading-[0] left-[10px] not-italic text-[#1e40af] text-[10.2px] top-[10px] translate-y-[-50%] w-[72.425px]">
        <p className="leading-[16px]">Daily Mission</p>
      </div>
    </div>
  );
}

function Span5() {
  return (
    <div className="absolute h-[16px] left-[100.43px] top-[2px] w-[69.988px]" data-name="Span">
      <div className="absolute flex flex-col font-['Inter:Light',sans-serif] font-light h-[16px] justify-center leading-[0] left-0 not-italic text-[#6b7280] text-[10.2px] top-[8px] translate-y-[-50%] w-[69.988px]">
        <p className="leading-[16px]">Ready for you</p>
      </div>
    </div>
  );
}

function Container111() {
  return (
    <div className="absolute h-[20px] left-0 top-0 w-[273.6px]" data-name="Container">
      <Span4 />
      <Span5 />
    </div>
  );
}

function Heading8() {
  return (
    <div className="absolute h-[32px] left-0 top-0 w-[273.6px]" data-name="Heading">
      <div className="absolute flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[32px] justify-center leading-[0] left-0 not-italic text-[#111827] text-[20.4px] top-[16px] translate-y-[-50%] w-[256.05px]">
        <p className="leading-[32px]">{`Today's mission is ready`}</p>
      </div>
    </div>
  );
}

function Paragraph16() {
  return (
    <div className="absolute font-['Inter:Light',sans-serif] font-light h-[48px] leading-[0] left-0 not-italic text-[#4b5563] text-[13.6px] top-[40px] w-[273.6px]" data-name="Paragraph">
      <div className="absolute flex flex-col h-[21.6px] justify-center left-0 top-[11.6px] translate-y-[-50%] w-[256.925px]">
        <p className="leading-[24px]">{`A small action to build connection and `}</p>
      </div>
      <div className="absolute flex flex-col h-[21.6px] justify-center left-0 top-[35.6px] translate-y-[-50%] w-[76.675px]">
        <p className="leading-[24px]">confidence.</p>
      </div>
    </div>
  );
}

function Container112() {
  return (
    <div className="absolute h-[88px] left-0 top-[44px] w-[273.6px]" data-name="Container">
      <Heading8 />
      <Paragraph16 />
    </div>
  );
}

function Span6() {
  return (
    <div className="absolute h-[24px] left-[48.15px] top-[12px] w-[153.3px]" data-name="Span">
      <div className="absolute flex flex-col font-['Inter:Medium',sans-serif] font-medium h-[21.6px] justify-center leading-[0] left-[76.65px] not-italic text-[13.6px] text-center text-white top-[11.6px] translate-x-[-50%] translate-y-[-50%] w-[153.3px]">
        <p className="leading-[24px]">{`View Today's Mission`}</p>
      </div>
    </div>
  );
}

function Frame16() {
  return (
    <div className="absolute left-[209.45px] size-[16px] top-[16px]" data-name="Frame">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Frame">
          <path d="M3.33333 8H12.6667" id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d={svgPaths.p1d405500} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Button18() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0)] h-[48px] left-0 rounded-[9999px] shadow-[0px_2px_4px_-2px_rgba(59,130,246,0.2),0px_4px_6px_-1px_rgba(59,130,246,0.2),0px_0px_0px_0px_rgba(0,0,0,0),0px_0px_0px_0px_rgba(0,0,0,0)] top-[156px] w-[273.6px]" data-name="Button">
      <Span6 />
      <Frame16 />
    </div>
  );
}

function Container113() {
  return (
    <div className="absolute h-[204px] left-[24px] top-[24px] w-[273.6px]" data-name="Container">
      <Container111 />
      <Container112 />
      <Button18 />
    </div>
  );
}

function Container114() {
  return (
    <div className="absolute bg-white h-[252px] left-0 overflow-clip rounded-[16px] shadow-[0px_4px_6px_-4px_rgba(30,58,138,0.05),0px_10px_15px_-3px_rgba(30,58,138,0.05),0px_0px_0px_1px_rgba(0,0,0,0.05),0px_0px_0px_0px_white] top-0 w-[321.6px]" data-name="Container">
      <Container110 />
      <Container113 />
    </div>
  );
}

function Container115() {
  return (
    <div className="absolute h-[252px] left-[24px] top-[112px] w-[321.6px]" data-name="Container">
      <Container109 />
      <Container114 />
    </div>
  );
}

function Paragraph17() {
  return (
    <div className="absolute h-[20px] left-0 top-[16px] w-[321.6px]" data-name="Paragraph">
      <div className="absolute flex flex-col font-['Inter:Medium',sans-serif] font-medium h-[18.4px] justify-center leading-[0] left-[160.79px] not-italic text-[#6b7280] text-[11.9px] text-center top-[10px] translate-x-[-50%] translate-y-[-50%] w-[225.888px]">
        <p className="leading-[20px]">{`You're building a habit. Keep going.`}</p>
      </div>
    </div>
  );
}

function Container116() {
  return (
    <div className="absolute h-[52px] left-[24px] top-[396px] w-[321.6px]" data-name="Container">
      <Paragraph17 />
    </div>
  );
}

function Frame17() {
  return (
    <div className="absolute left-[8px] size-[20px] top-[8px]" data-name="Frame">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Frame">
          <path d="M6.66667 1.66667V5" id="Vector" stroke="var(--stroke-0, #16A34A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d="M13.3333 1.66667V5" id="Vector_2" stroke="var(--stroke-0, #16A34A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d={svgPaths.p1da67b80} id="Vector_3" stroke="var(--stroke-0, #16A34A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d="M2.5 8.33333H17.5" id="Vector_4" stroke="var(--stroke-0, #16A34A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Container117() {
  return (
    <div className="absolute bg-[#dcfce7] left-0 rounded-[8px] size-[36px] top-0" data-name="Container">
      <Frame17 />
    </div>
  );
}

function Paragraph18() {
  return (
    <div className="absolute h-[32px] left-0 top-0 w-[119.2px]" data-name="Paragraph">
      <div className="absolute flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[32px] justify-center leading-[0] left-0 not-italic text-[#111827] text-[20.4px] top-[16px] translate-y-[-50%] w-[27.612px]">
        <p className="leading-[32px]">48</p>
      </div>
    </div>
  );
}

function Paragraph19() {
  return (
    <div className="absolute h-[16px] left-0 top-[32px] w-[119.2px]" data-name="Paragraph">
      <div className="absolute flex flex-col font-['Inter:Light',sans-serif] font-light h-[16px] justify-center leading-[0] left-0 not-italic text-[#6b7280] text-[10.2px] top-[8px] translate-y-[-50%] w-[98.837px]">
        <p className="leading-[16px]">Missions completed</p>
      </div>
    </div>
  );
}

function Container118() {
  return (
    <div className="absolute h-[48px] left-0 top-[48px] w-[119.2px]" data-name="Container">
      <Paragraph18 />
      <Paragraph19 />
    </div>
  );
}

function Container119() {
  return (
    <div className="absolute h-[96px] left-[16.8px] top-[16.8px] w-[119.2px]" data-name="Container">
      <Container117 />
      <Container118 />
    </div>
  );
}

function Container120() {
  return (
    <div className="absolute bg-[#f9fafb] border-0 border-[#f3f4f6] border-solid h-[129.6px] left-0 rounded-[16px] top-0 w-[152.8px]" data-name="Container">
      <Container119 />
    </div>
  );
}

function Button19() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0)] h-[129.6px] left-0 top-0 w-[152.8px]" data-name="Button">
      <Container120 />
    </div>
  );
}

function Frame18() {
  return (
    <div className="absolute left-[8px] size-[20px] top-[8px]" data-name="Frame">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Frame">
          <path d={svgPaths.p2110f1c0} id="Vector" stroke="var(--stroke-0, #9333EA)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d="M2.5 2.5V6.66667H6.66667" id="Vector_2" stroke="var(--stroke-0, #9333EA)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d={svgPaths.pc8ce200} id="Vector_3" stroke="var(--stroke-0, #9333EA)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Container121() {
  return (
    <div className="absolute bg-[#f3e8ff] left-0 rounded-[8px] size-[36px] top-0" data-name="Container">
      <Frame18 />
    </div>
  );
}

function Paragraph20() {
  return (
    <div className="absolute h-[32px] left-0 top-0 w-[119.2px]" data-name="Paragraph">
      <div className="absolute flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[32px] justify-center leading-[0] left-0 not-italic text-[#111827] text-[20.4px] top-[16px] translate-y-[-50%] w-[45.087px]">
        <p className="leading-[32px]">Last</p>
      </div>
    </div>
  );
}

function Paragraph21() {
  return (
    <div className="absolute h-[16px] left-0 top-[32px] w-[119.2px]" data-name="Paragraph">
      <div className="absolute flex flex-col font-['Inter:Light',sans-serif] font-light h-[16px] justify-center leading-[0] left-0 not-italic text-[#6b7280] text-[10.2px] top-[8px] translate-y-[-50%] w-[61.15px]">
        <p className="leading-[16px]">View history</p>
      </div>
    </div>
  );
}

function Container122() {
  return (
    <div className="absolute h-[48px] left-0 top-[48px] w-[119.2px]" data-name="Container">
      <Paragraph20 />
      <Paragraph21 />
    </div>
  );
}

function Container123() {
  return (
    <div className="absolute h-[96px] left-[16.8px] top-[16.8px] w-[119.2px]" data-name="Container">
      <Container121 />
      <Container122 />
    </div>
  );
}

function Container124() {
  return (
    <div className="absolute bg-[#f9fafb] border-0 border-[#f3f4f6] border-solid h-[129.6px] left-0 rounded-[16px] top-0 w-[152.8px]" data-name="Container">
      <Container123 />
    </div>
  );
}

function Button20() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0)] h-[129.6px] left-[168.8px] top-0 w-[152.8px]" data-name="Button">
      <Container124 />
    </div>
  );
}

function Container125() {
  return (
    <div className="absolute h-[129.6px] left-[24px] top-[480px] w-[321.6px]" data-name="Container">
      <Button19 />
      <Button20 />
    </div>
  );
}

function Container126() {
  return (
    <div className="absolute h-[633.6px] left-0 top-0 w-[369.6px]" data-name="Container">
      <Container108 />
      <Container115 />
      <Container116 />
      <Container125 />
    </div>
  );
}

function Frame19() {
  return (
    <div className="absolute left-[10px] size-[20px] top-[10px]" data-name="Frame">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Frame">
          <path d="M6.66667 1.66667V5" id="Vector" stroke="var(--stroke-0, #2563EB)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d="M13.3333 1.66667V5" id="Vector_2" stroke="var(--stroke-0, #2563EB)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d={svgPaths.p1da67b80} id="Vector_3" stroke="var(--stroke-0, #2563EB)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d="M2.5 8.33333H17.5" id="Vector_4" stroke="var(--stroke-0, #2563EB)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Container127() {
  return (
    <div className="absolute bg-[#eff6ff] left-0 rounded-[9999px] size-[40px] top-0" data-name="Container">
      <Frame19 />
    </div>
  );
}

function Button21() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0)] left-[64.26px] size-[40px] top-[16.8px]" data-name="Button">
      <Container127 />
    </div>
  );
}

function Frame20() {
  return (
    <div className="absolute left-0 size-[20px] top-0" data-name="Frame">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Frame">
          <path d={svgPaths.p2110f1c0} id="Vector" stroke="var(--stroke-0, #9CA3AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d="M2.5 2.5V6.66667H6.66667" id="Vector_2" stroke="var(--stroke-0, #9CA3AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d={svgPaths.pc8ce200} id="Vector_3" stroke="var(--stroke-0, #9CA3AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Button22() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0)] left-[184.79px] size-[20px] top-[26.8px]" data-name="Button">
      <Frame20 />
    </div>
  );
}

function Frame21() {
  return (
    <div className="absolute left-0 size-[20px] top-0" data-name="Frame">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Frame">
          <path d={svgPaths.p2026e800} id="Vector" stroke="var(--stroke-0, #9CA3AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d={svgPaths.p32ab0300} id="Vector_2" stroke="var(--stroke-0, #9CA3AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Button23() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0)] left-[285.31px] size-[20px] top-[26.8px]" data-name="Button">
      <Frame21 />
    </div>
  );
}

function Container128() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.8)] border-0 border-[#e5e7eb] border-solid h-[72.8px] left-0 top-[545.6px] w-[369.6px]" data-name="Container">
      <Button21 />
      <Button22 />
      <Button23 />
    </div>
  );
}

function Container129() {
  return (
    <div className="absolute h-[713.6px] left-0 top-[72px] w-[369.6px]" data-name="Container">
      <Container126 />
      <Container128 />
    </div>
  );
}

function Container130() {
  return <div className="absolute bg-[rgba(0,0,0,0.2)] h-[690.4px] left-0 top-0 w-[369.6px]" data-name="Container" />;
}

function Span7() {
  return (
    <div className="absolute bg-gradient-to-r from-[#2563eb] h-[28px] left-[24px] to-[#9333ea] top-[30px] w-[111.063px]" data-name="Span">
      <div className="absolute flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[26.4px] justify-center leading-[0] left-0 not-italic text-[17px] text-black top-[14px] translate-y-[-50%] w-[111.063px]">
        <p className="leading-[28px]">HumanPing</p>
      </div>
    </div>
  );
}

function Frame22() {
  return (
    <div className="absolute left-[8px] size-[24px] top-[8px]" data-name="Frame">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Frame">
          <path d="M18 6L6 18" id="Vector" stroke="var(--stroke-0, #6B7280)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d="M6 6L18 18" id="Vector_2" stroke="var(--stroke-0, #6B7280)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Button24() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0)] left-[213.2px] rounded-[9999px] size-[40px] top-[24px]" data-name="Button">
      <Frame22 />
    </div>
  );
}

function Container131() {
  return (
    <div className="absolute border-0 border-[#f3f4f6] border-solid h-[77px] left-[121px] top-0 w-[249px]" data-name="Container">
      <Span7 />
      <Button24 />
    </div>
  );
}

function Frame23() {
  return (
    <div className="absolute left-[16px] size-[20px] top-[14px]" data-name="Frame">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Frame">
          <path d={svgPaths.p275d2400} id="Vector" stroke="var(--stroke-0, #2563EB)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d={svgPaths.p21a7e80} id="Vector_2" stroke="var(--stroke-0, #2563EB)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Span8() {
  return (
    <div className="absolute h-[24px] left-[52px] top-[12px] w-[78.825px]" data-name="Span">
      <div className="absolute flex flex-col font-['Inter:Medium',sans-serif] font-medium h-[21.6px] justify-center leading-[0] left-0 not-italic text-[#2563eb] text-[13.6px] top-[11.6px] translate-y-[-50%] w-[78.825px]">
        <p className="leading-[24px]">Dashboard</p>
      </div>
    </div>
  );
}

function Container132() {
  return (
    <div className="absolute bg-[#eff6ff] h-[48px] left-[16px] rounded-[12px] top-[24px] w-[245.2px]" data-name="Container">
      <Frame23 />
      <Span8 />
    </div>
  );
}

function Frame24() {
  return (
    <div className="absolute left-[16px] size-[20px] top-[14px]" data-name="Frame">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Frame">
          <path d={svgPaths.p2026e800} id="Vector" stroke="var(--stroke-0, #4B5563)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d={svgPaths.p32ab0300} id="Vector_2" stroke="var(--stroke-0, #4B5563)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Span9() {
  return (
    <div className="absolute h-[24px] left-[52px] top-[12px] w-[41.275px]" data-name="Span">
      <div className="absolute flex flex-col font-['Inter:Light',sans-serif] font-light h-[21.6px] justify-center leading-[0] left-0 not-italic text-[#4b5563] text-[13.6px] top-[11.6px] translate-y-[-50%] w-[41.275px]">
        <p className="leading-[24px]">Profile</p>
      </div>
    </div>
  );
}

function Container133() {
  return (
    <div className="absolute h-[48px] left-[16px] rounded-[12px] top-[80px] w-[245.2px]" data-name="Container">
      <Frame24 />
      <Span9 />
    </div>
  );
}

function Frame25() {
  return (
    <div className="absolute left-[16px] size-[20px] top-[14px]" data-name="Frame">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Frame">
          <path d={svgPaths.p2110f1c0} id="Vector" stroke="var(--stroke-0, #4B5563)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d="M2.5 2.5V6.66667H6.66667" id="Vector_2" stroke="var(--stroke-0, #4B5563)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d={svgPaths.pc8ce200} id="Vector_3" stroke="var(--stroke-0, #4B5563)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Span10() {
  return (
    <div className="absolute h-[24px] left-[52px] top-[12px] w-[47.563px]" data-name="Span">
      <div className="absolute flex flex-col font-['Inter:Light',sans-serif] font-light h-[21.6px] justify-center leading-[0] left-0 not-italic text-[#4b5563] text-[13.6px] top-[11.6px] translate-y-[-50%] w-[47.563px]">
        <p className="leading-[24px]">History</p>
      </div>
    </div>
  );
}

function Container134() {
  return (
    <div className="absolute h-[48px] left-[16px] rounded-[12px] top-[136px] w-[245.2px]" data-name="Container">
      <Frame25 />
      <Span10 />
    </div>
  );
}

function Frame26() {
  return (
    <div className="absolute left-[16px] size-[20px] top-[14px]" data-name="Frame">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Frame">
          <path d={svgPaths.ped54800} id="Vector" stroke="var(--stroke-0, #4B5563)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d={svgPaths.p3b27f100} id="Vector_2" stroke="var(--stroke-0, #4B5563)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Span11() {
  return (
    <div className="absolute h-[24px] left-[52px] top-[12px] w-[52.55px]" data-name="Span">
      <div className="absolute flex flex-col font-['Inter:Light',sans-serif] font-light h-[21.6px] justify-center leading-[0] left-0 not-italic text-[#4b5563] text-[13.6px] top-[11.6px] translate-y-[-50%] w-[52.55px]">
        <p className="leading-[24px]">Settings</p>
      </div>
    </div>
  );
}

function Container135() {
  return (
    <div className="absolute h-[48px] left-[16px] rounded-[12px] top-[192px] w-[245.2px]" data-name="Container">
      <Frame26 />
      <Span11 />
    </div>
  );
}

function Frame27() {
  return (
    <div className="absolute left-[16px] size-[20px] top-[14px]" data-name="Frame">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Frame">
          <path d={svgPaths.p383b2000} id="Vector" stroke="var(--stroke-0, #4B5563)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Span12() {
  return (
    <div className="absolute h-[24px] left-[52px] top-[12px] w-[63.625px]" data-name="Span">
      <div className="absolute flex flex-col font-['Inter:Light',sans-serif] font-light h-[21.6px] justify-center leading-[0] left-0 not-italic text-[#4b5563] text-[13.6px] top-[11.6px] translate-y-[-50%] w-[63.625px]">
        <p className="leading-[24px]">Feedback</p>
      </div>
    </div>
  );
}

function Container136() {
  return (
    <div className="absolute h-[48px] left-[16px] rounded-[12px] top-[248px] w-[245.2px]" data-name="Container">
      <Frame27 />
      <Span12 />
    </div>
  );
}

function Container137() {
  return (
    <div className="absolute h-[504.8px] left-0 top-[88.8px] w-[277.2px]" data-name="Container">
      <Container132 />
      <Container133 />
      <Container134 />
      <Container135 />
      <Container136 />
    </div>
  );
}

function Frame28() {
  return (
    <div className="absolute left-[16px] size-[20px] top-[14px]" data-name="Frame">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Frame">
          <path d={svgPaths.p14ca9100} id="Vector" stroke="var(--stroke-0, #DC2626)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d="M17.5 10H7.5" id="Vector_2" stroke="var(--stroke-0, #DC2626)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d={svgPaths.p38966ca0} id="Vector_3" stroke="var(--stroke-0, #DC2626)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Span13() {
  return (
    <div className="absolute h-[24px] left-[52px] top-[12px] w-[58.625px]" data-name="Span">
      <div className="absolute flex flex-col font-['Inter:Medium',sans-serif] font-medium h-[21.6px] justify-center leading-[0] left-[29.31px] not-italic text-[#dc2626] text-[13.6px] text-center top-[11.6px] translate-x-[-50%] translate-y-[-50%] w-[58.625px]">
        <p className="leading-[24px]">Log Out</p>
      </div>
    </div>
  );
}

function Button25() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0)] h-[48px] left-[24px] rounded-[12px] top-[24.8px] w-[229.2px]" data-name="Button">
      <Frame28 />
      <Span13 />
    </div>
  );
}

function Container138() {
  return (
    <div className="absolute border-0 border-[#f3f4f6] border-solid h-[96.8px] left-0 top-[593.6px] w-[277.2px]" data-name="Container">
      <Button25 />
    </div>
  );
}

function Container139() {
  return (
    <div className="absolute bg-white h-[690px] left-0 shadow-[0px_25px_50px_-12px_rgba(0,0,0,0.25),0px_0px_0px_0px_rgba(0,0,0,0),0px_0px_0px_0px_rgba(0,0,0,0)] top-0 w-[370px]" data-name="Container">
      <Container131 />
      <Container137 />
      <Container138 />
    </div>
  );
}

function Container140() {
  return (
    <div className="absolute h-[690.4px] left-0 top-0 w-[369.6px]" data-name="Container">
      <Container130 />
      <Container139 />
    </div>
  );
}

function Container141() {
  return (
    <div className="absolute h-[690px] left-0 overflow-clip shadow-[0px_25px_50px_-12px_rgba(0,0,0,0.25),0px_0px_0px_0px_rgba(0,0,0,0),0px_0px_0px_0px_rgba(0,0,0,0)] top-0 w-[370px]" data-name="Container" style={{ backgroundImage: "linear-gradient(118.202deg, rgb(239, 246, 255) 25%, rgb(250, 245, 255) 60.355%, rgb(240, 253, 244) 95.711%)" }}>
      <Container106 />
      <Container129 />
      <Container140 />
    </div>
  );
}

function Container142() {
  return (
    <div className="absolute bg-[#f3f4f6] h-[682px] left-[0.2px] top-0 w-[369px]" data-name="Container">
      <Container141 />
    </div>
  );
}

function Container143() {
  return (
    <div className="absolute h-[785.6px] left-0 top-0 w-[369.6px]" data-name="Container">
      <Container142 />
    </div>
  );
}

function Component9HamMenu() {
  return (
    <div className="absolute bg-white h-[690px] left-[5063px] top-[48px] w-[370px]" data-name="9. ham_menu">
      <Container143 />
    </div>
  );
}

function Frame29() {
  return (
    <div className="absolute left-[8px] size-[24px] top-[8px]" data-name="Frame">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Frame">
          <path d="M12 19L5 12L12 5" id="Vector" stroke="var(--stroke-0, #374151)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d="M19 12H5" id="Vector_2" stroke="var(--stroke-0, #374151)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Button26() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0)] left-[-8px] rounded-[9999px] size-[40px] top-0" data-name="Button">
      <Frame29 />
    </div>
  );
}

function Container144() {
  return (
    <div className="absolute h-[34px] left-[24px] top-[16px] w-[32px]" data-name="Container">
      <Button26 />
    </div>
  );
}

function Heading9() {
  return (
    <div className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold h-[28px] leading-[0] left-0 not-italic overflow-clip text-[#111827] text-[15.3px] top-0 w-[138px]" data-name="Heading">
      <div className="absolute flex flex-col h-[24px] justify-center left-0 top-[13.6px] translate-y-[-50%] w-[34.913px]">
        <p className="leading-[28px] text-[15.3px]">&nbsp;</p>
      </div>
      <div className="absolute flex flex-col h-[24px] justify-center left-0 top-[13.6px] translate-y-[-50%] w-[39.413px]">
        <p className="leading-[28px]">Your</p>
      </div>
      <div className="absolute flex flex-col h-[24px] justify-center left-[34.9px] top-[13.6px] translate-y-[-50%] w-[113.225px]">
        <p className="leading-[28px]"> </p>
      </div>
      <div className="absolute flex flex-col h-[24px] justify-center left-[34.8px] top-[14px] translate-y-[-50%] w-[120px]">
        <p className="leading-[28px]">
          Achievem<span className="text-[#202022]">ent</span>
        </p>
      </div>
    </div>
  );
}

function Container145() {
  return (
    <div className="absolute h-[28px] left-[131px] top-[22px] w-[148px]" data-name="Container">
      <Heading9 />
    </div>
  );
}

function Container146() {
  return <div className="absolute h-[100px] left-[238.4px] top-[36px] w-[107.188px]" data-name="Container" />;
}

function Container147() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.5)] h-[72px] left-0 top-0 w-[369.6px]" data-name="Container">
      <Container144 />
      <Container145 />
      <Container146 />
    </div>
  );
}

function Frame30() {
  return (
    <div className="absolute left-[12px] size-[24px] top-[12px]" data-name="Frame">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Frame">
          <path d={svgPaths.pace200} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d="M9 12L11 14L15 10" id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Container148() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.2)] left-0 rounded-[12px] size-[48px] top-0" data-name="Container">
      <Frame30 />
    </div>
  );
}

function Span14() {
  return (
    <div className="absolute h-[24px] left-[154.24px] top-[12px] w-[119.363px]" data-name="Span">
      <div className="absolute flex flex-col font-['Inter:Medium',sans-serif] font-medium h-[21.6px] justify-center leading-[0] left-0 not-italic text-[#dcfce7] text-[13.6px] top-[11.6px] translate-y-[-50%] w-[119.363px]">
        <p className="leading-[24px]">Total Completed</p>
      </div>
    </div>
  );
}

function Container149() {
  return (
    <div className="absolute h-[48px] left-[24px] top-[24px] w-[273.6px]" data-name="Container">
      <Container148 />
      <Span14 />
    </div>
  );
}

function Heading10() {
  return (
    <div className="absolute h-[48px] left-0 top-0 w-[273.6px]" data-name="Heading">
      <div className="absolute flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[56px] justify-center leading-[0] left-0 not-italic text-[#111827] text-[40.8px] top-[20px] translate-y-[-50%] w-[78px]">
        <p className="leading-[48px]">48</p>
      </div>
    </div>
  );
}

function Paragraph22() {
  return (
    <div className="absolute h-[24px] left-0 top-[56px] w-[273.6px]" data-name="Paragraph">
      <div className="absolute flex flex-col font-['Inter:Light',sans-serif] font-light h-[21.6px] justify-center leading-[0] left-0 not-italic text-[#fffffd] text-[13.6px] top-[11.6px] translate-y-[-50%] w-[127.525px]">
        <p className="leading-[24px]">Small actions taken</p>
      </div>
    </div>
  );
}

function Container150() {
  return (
    <div className="absolute h-[80px] left-[24px] top-[104px] w-[273.6px]" data-name="Container">
      <Heading10 />
      <Paragraph22 />
    </div>
  );
}

function Container151() {
  return (
    <div className="absolute bg-[#22b018] h-[208px] left-0 rounded-[16px] shadow-[0px_4px_6px_-4px_rgba(30,58,138,0.05),0px_10px_15px_-3px_rgba(30,58,138,0.05),0px_0px_0px_0px_rgba(0,0,0,0),0px_0px_0px_0px_rgba(0,0,0,0)] top-0 w-[321.6px]" data-name="Container">
      <Container149 />
      <Container150 />
    </div>
  );
}

function Frame31() {
  return (
    <div className="absolute left-[8px] size-[20px] top-[8px]" data-name="Frame">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Frame">
          <path d={svgPaths.p3ac0b600} id="Vector" stroke="var(--stroke-0, #2563EB)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d={svgPaths.p3c797180} id="Vector_2" stroke="var(--stroke-0, #2563EB)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Container152() {
  return (
    <div className="absolute bg-[#eff6ff] left-[24.8px] rounded-[8px] size-[36px] top-[24.8px]" data-name="Container">
      <Frame31 />
    </div>
  );
}

function Paragraph23() {
  return (
    <div className="absolute h-[32px] left-0 top-0 w-[103.2px]" data-name="Paragraph">
      <div className="absolute flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[32px] justify-center leading-[0] left-0 not-italic text-[#111827] text-[20.4px] top-[16px] translate-y-[-50%] w-[27.612px]">
        <p className="leading-[32px]">12</p>
      </div>
    </div>
  );
}

function Paragraph24() {
  return (
    <div className="absolute h-[16px] left-0 top-[32px] w-[103.2px]" data-name="Paragraph">
      <div className="absolute flex flex-col font-['Inter:Light',sans-serif] font-light h-[16px] justify-center leading-[0] left-0 not-italic text-[#6b7280] text-[10.2px] top-[8px] translate-y-[-50%] w-[56.1px]">
        <p className="leading-[16px]">This Month</p>
      </div>
    </div>
  );
}

function Container153() {
  return (
    <div className="absolute h-[48px] left-[24.8px] top-[76.8px] w-[103.2px]" data-name="Container">
      <Paragraph23 />
      <Paragraph24 />
    </div>
  );
}

function Container154() {
  return (
    <div className="absolute bg-[#f9fafb] border-0 border-[#f3f4f6] border-solid h-[149.6px] left-0 rounded-[16px] top-0 w-[152.8px]" data-name="Container">
      <Container152 />
      <Container153 />
    </div>
  );
}

function Frame32() {
  return (
    <div className="absolute left-[8px] size-[20px] top-[8px]" data-name="Frame">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Frame">
          <path d="M6.66667 1.66667V5" id="Vector" stroke="var(--stroke-0, #9333EA)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d="M13.3333 1.66667V5" id="Vector_2" stroke="var(--stroke-0, #9333EA)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d={svgPaths.p1da67b80} id="Vector_3" stroke="var(--stroke-0, #9333EA)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d="M2.5 8.33333H17.5" id="Vector_4" stroke="var(--stroke-0, #9333EA)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Container155() {
  return (
    <div className="absolute bg-[#faf5ff] left-[24.8px] rounded-[8px] size-[36px] top-[24.8px]" data-name="Container">
      <Frame32 />
    </div>
  );
}

function Paragraph25() {
  return (
    <div className="absolute h-[32px] left-0 top-0 w-[103.2px]" data-name="Paragraph">
      <div className="absolute flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[32px] justify-center leading-[0] left-0 not-italic text-[#111827] text-[20.4px] top-[16px] translate-y-[-50%] w-[13.813px]">
        <p className="leading-[32px]">4</p>
      </div>
    </div>
  );
}

function Paragraph26() {
  return (
    <div className="absolute h-[16px] left-0 top-[32px] w-[103.2px]" data-name="Paragraph">
      <div className="absolute flex flex-col font-['Inter:Light',sans-serif] font-light h-[16px] justify-center leading-[0] left-0 not-italic text-[#6b7280] text-[10.2px] top-[8px] translate-y-[-50%] w-[50.725px]">
        <p className="leading-[16px]">This Week</p>
      </div>
    </div>
  );
}

function Container156() {
  return (
    <div className="absolute h-[48px] left-[24.8px] top-[76.8px] w-[103.2px]" data-name="Container">
      <Paragraph25 />
      <Paragraph26 />
    </div>
  );
}

function Container157() {
  return (
    <div className="absolute bg-[#f9fafb] border-0 border-[#f3f4f6] border-solid h-[149.6px] left-[168.8px] rounded-[16px] top-0 w-[152.8px]" data-name="Container">
      <Container155 />
      <Container156 />
    </div>
  );
}

function Container158() {
  return (
    <div className="absolute h-[149.6px] left-0 top-[232px] w-[321.6px]" data-name="Container">
      <Container154 />
      <Container157 />
    </div>
  );
}

function Heading11() {
  return (
    <div className="absolute h-[24px] left-0 top-[16px] w-[321.6px]" data-name="Heading">
      <div className="absolute flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[21.6px] justify-center leading-[0] left-0 not-italic text-[#111827] text-[13.6px] top-[11.6px] translate-y-[-50%] w-[77.425px]">
        <p className="leading-[24px]">Milestones</p>
      </div>
    </div>
  );
}

function Frame33() {
  return (
    <div className="absolute left-[10px] size-[20px] top-[10px]" data-name="Frame">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g clipPath="url(#clip0_1_2310)" id="Frame">
          <path d={svgPaths.p3ace1680} id="Vector" stroke="var(--stroke-0, #16A34A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d={svgPaths.p105cfc80} id="Vector_2" stroke="var(--stroke-0, #16A34A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d={svgPaths.p312978e0} id="Vector_3" stroke="var(--stroke-0, #16A34A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d="M3.33333 18.3333H16.6667" id="Vector_4" stroke="var(--stroke-0, #16A34A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d={svgPaths.p1356a280} id="Vector_5" stroke="var(--stroke-0, #16A34A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d={svgPaths.p18544000} id="Vector_6" stroke="var(--stroke-0, #16A34A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
        <defs>
          <clipPath id="clip0_1_2310">
            <rect fill="white" height="20" width="20" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Container159() {
  return (
    <div className="absolute bg-[#dcfce7] left-[16.8px] rounded-[9999px] size-[40px] top-[16.8px]" data-name="Container">
      <Frame33 />
    </div>
  );
}

function Heading12() {
  return (
    <div className="absolute h-[24px] left-0 top-0 w-[212px]" data-name="Heading">
      <div className="absolute flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[21.6px] justify-center leading-[0] left-0 not-italic text-[#111827] text-[13.6px] top-[11.6px] translate-y-[-50%] w-[72.4px]">
        <p className="leading-[24px]">First Hello</p>
      </div>
    </div>
  );
}

function Paragraph27() {
  return (
    <div className="absolute h-[16px] left-0 top-[24px] w-[212px]" data-name="Paragraph">
      <div className="absolute flex flex-col font-['Inter:Light',sans-serif] font-light h-[16px] justify-center leading-[0] left-0 not-italic text-[#6b7280] text-[10.2px] top-[8px] translate-y-[-50%] w-[117.538px]">
        <p className="leading-[16px]">Completed first mission</p>
      </div>
    </div>
  );
}

function Container160() {
  return (
    <div className="absolute h-[40px] left-[72.8px] top-[16.8px] w-[212px]" data-name="Container">
      <Heading12 />
      <Paragraph27 />
    </div>
  );
}

function Frame34() {
  return (
    <div className="absolute left-[284.8px] size-[20px] top-[26.8px]" data-name="Frame">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g clipPath="url(#clip0_1_2193)" id="Frame">
          <path d={svgPaths.p14d24500} id="Vector" stroke="var(--stroke-0, #22C55E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d={svgPaths.p3e012060} id="Vector_2" stroke="var(--stroke-0, #22C55E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
        <defs>
          <clipPath id="clip0_1_2193">
            <rect fill="white" height="20" width="20" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Container161() {
  return (
    <div className="absolute bg-white border-0 border-[#dcfce7] border-solid h-[73.6px] left-0 rounded-[12px] top-0 w-[321.6px]" data-name="Container">
      <Container159 />
      <Container160 />
      <Frame34 />
    </div>
  );
}

function Frame35() {
  return (
    <div className="absolute left-[10px] size-[20px] top-[10px]" data-name="Frame">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g clipPath="url(#clip0_1_2310)" id="Frame">
          <path d={svgPaths.p3ace1680} id="Vector" stroke="var(--stroke-0, #16A34A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d={svgPaths.p105cfc80} id="Vector_2" stroke="var(--stroke-0, #16A34A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d={svgPaths.p312978e0} id="Vector_3" stroke="var(--stroke-0, #16A34A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d="M3.33333 18.3333H16.6667" id="Vector_4" stroke="var(--stroke-0, #16A34A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d={svgPaths.p1356a280} id="Vector_5" stroke="var(--stroke-0, #16A34A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d={svgPaths.p18544000} id="Vector_6" stroke="var(--stroke-0, #16A34A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
        <defs>
          <clipPath id="clip0_1_2310">
            <rect fill="white" height="20" width="20" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Container162() {
  return (
    <div className="absolute bg-[#dcfce7] left-[16.8px] rounded-[9999px] size-[40px] top-[16.8px]" data-name="Container">
      <Frame35 />
    </div>
  );
}

function Heading13() {
  return (
    <div className="absolute h-[24px] left-0 top-0 w-[212px]" data-name="Heading">
      <div className="absolute flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[21.6px] justify-center leading-[0] left-0 not-italic text-[#111827] text-[13.6px] top-[11.6px] translate-y-[-50%] w-[99.063px]">
        <p className="leading-[24px]">Week Warrior</p>
      </div>
    </div>
  );
}

function Paragraph28() {
  return (
    <div className="absolute h-[16px] left-0 top-[24px] w-[212px]" data-name="Paragraph">
      <div className="absolute flex flex-col font-['Inter:Light',sans-serif] font-light h-[16px] justify-center leading-[0] left-0 not-italic text-[#6b7280] text-[10.2px] top-[8px] translate-y-[-50%] w-[59.913px]">
        <p className="leading-[16px]">7 day streak</p>
      </div>
    </div>
  );
}

function Container163() {
  return (
    <div className="absolute h-[40px] left-[72.8px] top-[16.8px] w-[212px]" data-name="Container">
      <Heading13 />
      <Paragraph28 />
    </div>
  );
}

function Frame36() {
  return (
    <div className="absolute left-[284.8px] size-[20px] top-[26.8px]" data-name="Frame">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g clipPath="url(#clip0_1_2193)" id="Frame">
          <path d={svgPaths.p14d24500} id="Vector" stroke="var(--stroke-0, #22C55E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d={svgPaths.p3e012060} id="Vector_2" stroke="var(--stroke-0, #22C55E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
        <defs>
          <clipPath id="clip0_1_2193">
            <rect fill="white" height="20" width="20" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Container164() {
  return (
    <div className="absolute bg-white border-0 border-[#dcfce7] border-solid h-[73.6px] left-0 rounded-[12px] top-[89.6px] w-[321.6px]" data-name="Container">
      <Container162 />
      <Container163 />
      <Frame36 />
    </div>
  );
}

function Frame37() {
  return (
    <div className="absolute left-[10px] size-[20px] top-[10px]" data-name="Frame">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g clipPath="url(#clip0_1_2170)" id="Frame">
          <path d={svgPaths.p3ace1680} id="Vector" stroke="var(--stroke-0, #9CA3AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d={svgPaths.p105cfc80} id="Vector_2" stroke="var(--stroke-0, #9CA3AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d={svgPaths.p312978e0} id="Vector_3" stroke="var(--stroke-0, #9CA3AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d="M3.33333 18.3333H16.6667" id="Vector_4" stroke="var(--stroke-0, #9CA3AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d={svgPaths.p1356a280} id="Vector_5" stroke="var(--stroke-0, #9CA3AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d={svgPaths.p18544000} id="Vector_6" stroke="var(--stroke-0, #9CA3AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
        <defs>
          <clipPath id="clip0_1_2170">
            <rect fill="white" height="20" width="20" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Container165() {
  return (
    <div className="absolute bg-[#e5e7eb] left-[16.8px] rounded-[9999px] size-[40px] top-[16.8px]" data-name="Container">
      <Frame37 />
    </div>
  );
}

function Heading14() {
  return (
    <div className="absolute h-[24px] left-0 top-0 w-[232px]" data-name="Heading">
      <div className="absolute flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[21.6px] justify-center leading-[0] left-0 not-italic text-[#111827] text-[13.6px] top-[11.6px] translate-y-[-50%] w-[109.275px]">
        <p className="leading-[24px]">Social Butterfly</p>
      </div>
    </div>
  );
}

function Paragraph29() {
  return (
    <div className="absolute h-[16px] left-0 top-[24px] w-[232px]" data-name="Paragraph">
      <div className="absolute flex flex-col font-['Inter:Light',sans-serif] font-light h-[16px] justify-center leading-[0] left-0 not-italic text-[#6b7280] text-[10.2px] top-[8px] translate-y-[-50%] w-[114.363px]">
        <p className="leading-[16px]">50 missions completed</p>
      </div>
    </div>
  );
}

function Container166() {
  return (
    <div className="absolute h-[40px] left-[72.8px] top-[16.8px] w-[232px]" data-name="Container">
      <Heading14 />
      <Paragraph29 />
    </div>
  );
}

function Container167() {
  return (
    <div className="absolute bg-[rgba(249,250,251,0.6)] border-0 border-[#f3f4f6] border-solid h-[73.6px] left-0 rounded-[12px] top-[179.2px] w-[321.6px]" data-name="Container">
      <Container165 />
      <Container166 />
    </div>
  );
}

function Container168() {
  return (
    <div className="absolute h-[252.8px] left-0 top-[56px] w-[321.6px]" data-name="Container">
      <Container161 />
      <Container164 />
      <Container167 />
    </div>
  );
}

function Container169() {
  return (
    <div className="absolute h-[308.8px] left-0 top-[405.6px] w-[321.6px]" data-name="Container">
      <Heading11 />
      <Container168 />
    </div>
  );
}

function Container170() {
  return (
    <div className="absolute h-[714.4px] left-[24px] top-[24px] w-[321.6px]" data-name="Container">
      <Container151 />
      <Container158 />
      <Container169 />
    </div>
  );
}

function Container171() {
  return (
    <div className="absolute h-[762.4px] left-0 top-[72px] w-[369.6px]" data-name="Container">
      <Container170 />
    </div>
  );
}

function Container172() {
  return (
    <div className="absolute h-[834.4px] left-0 overflow-clip shadow-[0px_25px_50px_-12px_rgba(0,0,0,0.25),0px_0px_0px_0px_rgba(0,0,0,0),0px_0px_0px_0px_rgba(0,0,0,0)] top-0 w-[369.6px]" data-name="Container" style={{ backgroundImage: "linear-gradient(113.891deg, rgb(239, 246, 255) 25%, rgb(250, 245, 255) 60.355%, rgb(240, 253, 244) 95.711%)" }}>
      <Container147 />
      <Container171 />
    </div>
  );
}

function Container173() {
  return (
    <div className="absolute bg-[#f3f4f6] h-[834.4px] left-0 top-0 w-[369.6px]" data-name="Container">
      <Container172 />
    </div>
  );
}

function Container174() {
  return (
    <div className="absolute h-[834.4px] left-0 top-0 w-[369.6px]" data-name="Container">
      <Container173 />
    </div>
  );
}

function Component10MissionsCompleted() {
  return (
    <div className="absolute bg-white h-[834.4px] left-0 top-[1162px] w-[369.6px]" data-name="10. Mission\'s_Completed">
      <Container174 />
    </div>
  );
}

function Container175() {
  return <div className="absolute h-[100px] left-[24px] top-[36px] w-[107.188px]" data-name="Container" />;
}

function Heading15() {
  return (
    <div className="absolute h-[28px] left-[28.84px] overflow-clip top-0 w-[49.5px]" data-name="Heading">
      <div className="absolute flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold h-[24px] justify-center leading-[0] left-0 not-italic text-[#111827] text-[15.3px] top-[13.6px] translate-y-[-50%] w-[49.5px]">
        <p className="leading-[28px]">Profile</p>
      </div>
    </div>
  );
}

function Container176() {
  return (
    <div className="absolute h-[28px] left-[131.2px] top-[22px] w-[107.188px]" data-name="Container">
      <Heading15 />
    </div>
  );
}

function Container177() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.5)] h-[72px] left-0 top-0 w-[369.6px]" data-name="Container">
      <Container175 />
      <Container176 />
    </div>
  );
}

function Frame38() {
  return (
    <div className="absolute left-[24px] size-[40px] top-[24px]" data-name="Frame">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40 40">
        <g id="Frame">
          <path d={svgPaths.p1913f400} id="Vector" stroke="var(--stroke-0, #D1D5DB)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d={svgPaths.p17fe7470} id="Vector_2" stroke="var(--stroke-0, #D1D5DB)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Container178() {
  return (
    <div className="absolute bg-white left-[4px] overflow-clip rounded-[9999px] size-[88px] top-[4px]" data-name="Container">
      <Frame38 />
    </div>
  );
}

function Container179() {
  return (
    <div className="absolute left-[112.8px] rounded-[9999px] shadow-[0px_8px_10px_-6px_rgba(0,0,0,0.1),0px_20px_25px_-5px_rgba(0,0,0,0.1),0px_0px_0px_0px_rgba(0,0,0,0),0px_0px_0px_0px_rgba(0,0,0,0)] size-[96px] top-0" data-name="Container" style={{ backgroundImage: "linear-gradient(135deg, rgb(96, 165, 250) 25%, rgb(168, 85, 247) 95.711%)" }}>
      <Container178 />
    </div>
  );
}

function Heading16() {
  return (
    <div className="absolute h-[32px] left-0 top-0 w-[143.438px]" data-name="Heading">
      <div className="absolute flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[32px] justify-center leading-[0] left-[71.72px] not-italic text-[#111827] text-[20.4px] text-center top-[16px] translate-x-[-50%] translate-y-[-50%] w-[143.438px]">
        <p className="leading-[32px]">Alex Johnson</p>
      </div>
    </div>
  );
}

function Paragraph30() {
  return (
    <div className="absolute h-[24px] left-0 top-[32px] w-[143.438px]" data-name="Paragraph">
      <div className="absolute flex flex-col font-['Inter:Light',sans-serif] font-light h-[21.6px] justify-center leading-[0] left-[71.72px] not-italic text-[#6b7280] text-[13.6px] text-center top-[11.6px] translate-x-[-50%] translate-y-[-50%] w-[140.113px]">
        <p className="leading-[24px]">Joined October 2023</p>
      </div>
    </div>
  );
}

function Container180() {
  return (
    <div className="absolute h-[56px] left-[89.08px] top-[112px] w-[143.438px]" data-name="Container">
      <Heading16 />
      <Paragraph30 />
    </div>
  );
}

function Container181() {
  return (
    <div className="absolute h-[168px] left-[24px] top-[24px] w-[321.6px]" data-name="Container">
      <Container179 />
      <Container180 />
    </div>
  );
}

function Paragraph31() {
  return (
    <div className="absolute h-[36px] left-[24.8px] top-[24.8px] w-[103.2px]" data-name="Paragraph">
      <div className="absolute flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[39.2px] justify-center leading-[0] left-[51.59px] not-italic text-[#111827] text-[25.5px] text-center top-[18px] translate-x-[-50%] translate-y-[-50%] w-[34.512px]">
        <p className="leading-[36px]">48</p>
      </div>
    </div>
  );
}

function Paragraph32() {
  return (
    <div className="absolute h-[16px] left-[24.8px] top-[64.8px] w-[103.2px]" data-name="Paragraph">
      <div className="absolute flex flex-col font-['Inter:Light',sans-serif] font-light h-[16px] justify-center leading-[0] left-[51.59px] not-italic text-[#6b7280] text-[10.2px] text-center top-[8px] translate-x-[-50%] translate-y-[-50%] w-[53.412px]">
        <p className="leading-[16px]">Missions</p>
      </div>
    </div>
  );
}

function Container182() {
  return (
    <div className="absolute bg-white border-0 border-[rgba(255,255,255,0.5)] border-solid h-[105.6px] left-0 rounded-[16px] shadow-[0px_4px_6px_-4px_rgba(30,58,138,0.05),0px_10px_15px_-3px_rgba(30,58,138,0.05),0px_0px_0px_0px_rgba(0,0,0,0),0px_0px_0px_0px_rgba(0,0,0,0)] top-0 w-[152.8px]" data-name="Container">
      <Paragraph31 />
      <Paragraph32 />
    </div>
  );
}

function Paragraph33() {
  return (
    <div className="absolute h-[36px] left-[24.8px] top-[24.8px] w-[103.2px]" data-name="Paragraph">
      <div className="absolute flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[39.2px] justify-center leading-[0] left-[51.59px] not-italic text-[#111827] text-[25.5px] text-center top-[18px] translate-x-[-50%] translate-y-[-50%] w-[34.513px]">
        <p className="leading-[36px]">13</p>
      </div>
    </div>
  );
}

function Paragraph34() {
  return (
    <div className="absolute h-[16px] left-[24.8px] top-[64.8px] w-[103.2px]" data-name="Paragraph">
      <div className="absolute flex flex-col font-['Inter:Light',sans-serif] font-light h-[16px] justify-center leading-[0] left-[51.6px] not-italic text-[#6b7280] text-[10.2px] text-center top-[8px] translate-x-[-50%] translate-y-[-50%] w-[65.35px]">
        <p className="leading-[16px]">Day Streak</p>
      </div>
    </div>
  );
}

function Container183() {
  return (
    <div className="absolute bg-white border-0 border-[rgba(255,255,255,0.5)] border-solid h-[105.6px] left-[168.8px] rounded-[16px] shadow-[0px_4px_6px_-4px_rgba(30,58,138,0.05),0px_10px_15px_-3px_rgba(30,58,138,0.05),0px_0px_0px_0px_rgba(0,0,0,0),0px_0px_0px_0px_rgba(0,0,0,0)] top-0 w-[152.8px]" data-name="Container">
      <Paragraph33 />
      <Paragraph34 />
    </div>
  );
}

function Container184() {
  return (
    <div className="absolute h-[105.6px] left-[24px] top-[224px] w-[321.6px]" data-name="Container">
      <Container182 />
      <Container183 />
    </div>
  );
}

function Heading17() {
  return (
    <div className="absolute h-[20px] left-[4px] top-0 w-[317.6px]" data-name="Heading">
      <div className="absolute flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[18.4px] justify-center leading-[0] left-0 not-italic text-[#6b7280] text-[11.9px] top-[10px] translate-y-[-50%] w-[68.975px]">
        <p className="leading-[20px]">Account</p>
      </div>
    </div>
  );
}

function Frame39() {
  return (
    <div className="absolute left-[8px] size-[20px] top-[8px]" data-name="Frame">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Frame">
          <path d={svgPaths.ped54800} id="Vector" stroke="var(--stroke-0, #4B5563)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d={svgPaths.p3b27f100} id="Vector_2" stroke="var(--stroke-0, #4B5563)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Container185() {
  return (
    <div className="absolute bg-[#f3f4f6] left-0 rounded-[8px] size-[36px] top-0" data-name="Container">
      <Frame39 />
    </div>
  );
}

function Span15() {
  return (
    <div className="absolute h-[24px] left-[48px] top-[6px] w-[58.838px]" data-name="Span">
      <div className="absolute flex flex-col font-['Inter:Medium',sans-serif] font-medium h-[21.6px] justify-center leading-[0] left-[29.42px] not-italic text-[#111827] text-[13.6px] text-center top-[11.6px] translate-x-[-50%] translate-y-[-50%] w-[58.837px]">
        <p className="leading-[24px]">Settings</p>
      </div>
    </div>
  );
}

function Container186() {
  return (
    <div className="absolute h-[36px] left-[24.8px] top-[24.8px] w-[106.838px]" data-name="Container">
      <Container185 />
      <Span15 />
    </div>
  );
}

function Frame40() {
  return (
    <div className="absolute left-[276.8px] size-[20px] top-[32.8px]" data-name="Frame">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Frame">
          <path d="M7.5 15L12.5 10L7.5 5" id="Vector" stroke="var(--stroke-0, #9CA3AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Container187() {
  return (
    <div className="absolute bg-[#f9fafb] border-0 border-[#f3f4f6] border-solid h-[85.6px] left-0 rounded-[16px] top-0 w-[321.6px]" data-name="Container">
      <Container186 />
      <Frame40 />
    </div>
  );
}

function Button27() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0)] h-[85.6px] left-0 top-[32px] w-[321.6px]" data-name="Button">
      <Container187 />
    </div>
  );
}

function Frame41() {
  return (
    <div className="absolute left-[8px] size-[20px] top-[8px]" data-name="Frame">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Frame">
          <path d="M6.66667 1.66667V5" id="Vector" stroke="var(--stroke-0, #4B5563)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d="M13.3333 1.66667V5" id="Vector_2" stroke="var(--stroke-0, #4B5563)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d={svgPaths.p1da67b80} id="Vector_3" stroke="var(--stroke-0, #4B5563)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d="M2.5 8.33333H17.5" id="Vector_4" stroke="var(--stroke-0, #4B5563)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Container188() {
  return (
    <div className="absolute bg-[#f3f4f6] left-0 rounded-[8px] size-[36px] top-0" data-name="Container">
      <Frame41 />
    </div>
  );
}

function Span16() {
  return (
    <div className="absolute h-[24px] left-[48px] top-[6px] w-[174.8px]" data-name="Span">
      <div className="absolute flex flex-col font-['Inter:Medium',sans-serif] font-medium h-[21.6px] justify-center leading-[0] left-[87.4px] not-italic text-[#111827] text-[13.6px] text-center top-[11.6px] translate-x-[-50%] translate-y-[-50%] w-[174.8px]">
        <p className="leading-[24px]">Notification Preferences</p>
      </div>
    </div>
  );
}

function Container189() {
  return (
    <div className="absolute h-[36px] left-[24.8px] top-[24.8px] w-[222.8px]" data-name="Container">
      <Container188 />
      <Span16 />
    </div>
  );
}

function Frame42() {
  return (
    <div className="absolute left-[276.8px] size-[20px] top-[32.8px]" data-name="Frame">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Frame">
          <path d="M7.5 15L12.5 10L7.5 5" id="Vector" stroke="var(--stroke-0, #9CA3AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Container190() {
  return (
    <div className="absolute bg-[#f9fafb] border-0 border-[#f3f4f6] border-solid h-[85.6px] left-0 rounded-[16px] top-0 w-[321.6px]" data-name="Container">
      <Container189 />
      <Frame42 />
    </div>
  );
}

function Button28() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0)] h-[85.6px] left-0 top-[129.6px] w-[321.6px]" data-name="Button">
      <Container190 />
    </div>
  );
}

function Container191() {
  return (
    <div className="absolute h-[215.2px] left-[24px] top-[361.6px] w-[321.6px]" data-name="Container">
      <Heading17 />
      <Button27 />
      <Button28 />
    </div>
  );
}

function Container192() {
  return (
    <div className="absolute h-[600.8px] left-0 top-0 w-[369.6px]" data-name="Container">
      <Container181 />
      <Container184 />
      <Container191 />
    </div>
  );
}

function Frame43() {
  return (
    <div className="absolute left-0 size-[20px] top-0" data-name="Frame">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Frame">
          <path d="M6.66667 1.66667V5" id="Vector" stroke="var(--stroke-0, #9CA3AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d="M13.3333 1.66667V5" id="Vector_2" stroke="var(--stroke-0, #9CA3AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d={svgPaths.p1da67b80} id="Vector_3" stroke="var(--stroke-0, #9CA3AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d="M2.5 8.33333H17.5" id="Vector_4" stroke="var(--stroke-0, #9CA3AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Button29() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0)] left-[64.26px] size-[20px] top-[26.8px]" data-name="Button">
      <Frame43 />
    </div>
  );
}

function Frame44() {
  return (
    <div className="absolute left-0 size-[20px] top-0" data-name="Frame">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Frame">
          <path d={svgPaths.p2110f1c0} id="Vector" stroke="var(--stroke-0, #9CA3AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d="M2.5 2.5V6.66667H6.66667" id="Vector_2" stroke="var(--stroke-0, #9CA3AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d={svgPaths.pc8ce200} id="Vector_3" stroke="var(--stroke-0, #9CA3AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Button30() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0)] left-[164.79px] size-[20px] top-[26.8px]" data-name="Button">
      <Frame44 />
    </div>
  );
}

function Frame45() {
  return (
    <div className="absolute left-[10px] size-[20px] top-[10px]" data-name="Frame">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Frame">
          <path d={svgPaths.p2026e800} id="Vector" stroke="var(--stroke-0, #2563EB)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d={svgPaths.p32ab0300} id="Vector_2" stroke="var(--stroke-0, #2563EB)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Container193() {
  return (
    <div className="absolute bg-[#eff6ff] left-0 rounded-[9999px] size-[40px] top-0" data-name="Container">
      <Frame45 />
    </div>
  );
}

function Button31() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0)] left-[265.31px] size-[40px] top-[16.8px]" data-name="Button">
      <Container193 />
    </div>
  );
}

function Container194() {
  return (
    <div className="bg-[rgba(255,255,255,0.8)] border-0 border-[#e5e7eb] border-solid h-[74px] pointer-events-auto sticky top-0 w-[370px]" data-name="Container">
      <Button29 />
      <Button30 />
      <Button31 />
    </div>
  );
}

function Container195() {
  return (
    <div className="absolute h-[680.8px] left-0 top-[72px] w-[369.6px]" data-name="Container">
      <Container192 />
      <div className="absolute bottom-0 h-[73.79998779296875px] left-0 pointer-events-none top-[607px]">
        <Container194 />
      </div>
    </div>
  );
}

function Container196() {
  return (
    <div className="absolute h-[752.8px] left-0 overflow-clip shadow-[0px_25px_50px_-12px_rgba(0,0,0,0.25),0px_0px_0px_0px_rgba(0,0,0,0),0px_0px_0px_0px_rgba(0,0,0,0)] top-0 w-[369.6px]" data-name="Container" style={{ backgroundImage: "linear-gradient(116.15deg, rgb(239, 246, 255) 25%, rgb(250, 245, 255) 60.355%, rgb(240, 253, 244) 95.711%)" }}>
      <Container177 />
      <Container195 />
    </div>
  );
}

function Container197() {
  return (
    <div className="absolute bg-[#f3f4f6] h-[752.8px] left-0 top-0 w-[369.6px]" data-name="Container">
      <Container196 />
    </div>
  );
}

function Container198() {
  return (
    <div className="absolute h-[752.8px] left-0 top-0 w-[369.6px]" data-name="Container">
      <Container197 />
    </div>
  );
}

function Component11Profile() {
  return (
    <div className="absolute bg-white h-[752.8px] left-[629px] top-[1203px] w-[369.6px]" data-name="11. Profile">
      <Container198 />
    </div>
  );
}

function Frame46() {
  return (
    <div className="absolute left-[8px] size-[24px] top-[8px]" data-name="Frame">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Frame">
          <path d="M12 19L5 12L12 5" id="Vector" stroke="var(--stroke-0, #374151)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d="M19 12H5" id="Vector_2" stroke="var(--stroke-0, #374151)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Button32() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0)] left-[-8px] rounded-[9999px] size-[40px] top-0" data-name="Button">
      <Frame46 />
    </div>
  );
}

function Container199() {
  return (
    <div className="absolute left-[24px] size-[32px] top-[16px]" data-name="Container">
      <Button32 />
    </div>
  );
}

function Heading18() {
  return (
    <div className="absolute h-[28px] left-[22.3px] overflow-clip top-0 w-[62.588px]" data-name="Heading">
      <div className="absolute flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold h-[24px] justify-center leading-[0] left-0 not-italic text-[#111827] text-[15.3px] top-[13.6px] translate-y-[-50%] w-[62.588px]">
        <p className="leading-[28px]">Settings</p>
      </div>
    </div>
  );
}

function Container200() {
  return (
    <div className="absolute h-[28px] left-[131.2px] top-[22px] w-[107.188px]" data-name="Container">
      <Heading18 />
    </div>
  );
}

function Container201() {
  return <div className="absolute h-[100px] left-[238.4px] top-[36px] w-[107.188px]" data-name="Container" />;
}

function Container202() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.5)] h-[72px] left-0 top-0 w-[369.6px]" data-name="Container">
      <Container199 />
      <Container200 />
      <Container201 />
    </div>
  );
}

function Heading19() {
  return (
    <div className="absolute h-[20px] left-[4px] top-0 w-[317.6px]" data-name="Heading">
      <div className="absolute flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[18.4px] justify-center leading-[0] left-0 not-italic text-[#6b7280] text-[11.9px] top-[10px] translate-y-[-50%] w-[165.963px]">
        <p className="leading-[20px]">Context Preferences</p>
      </div>
    </div>
  );
}

function Paragraph35() {
  return (
    <div className="absolute h-[16px] left-[4px] top-[36px] w-[317.6px]" data-name="Paragraph">
      <div className="absolute flex flex-col font-['Inter:Light',sans-serif] font-light h-[16px] justify-center leading-[0] left-0 not-italic text-[#6b7280] text-[10.2px] top-[8px] translate-y-[-50%] w-[221.063px]">
        <p className="leading-[16px]">Where are you comfortable doing missions?</p>
      </div>
    </div>
  );
}

function Frame47() {
  return (
    <div className="absolute left-0 size-[20px] top-[2px]" data-name="Frame">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Frame">
          <path d={svgPaths.pe6b10c0} id="Vector" stroke="var(--stroke-0, #6B7280)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d={svgPaths.p4c21d00} id="Vector_2" stroke="var(--stroke-0, #6B7280)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Span17() {
  return (
    <div className="absolute h-[24px] left-[32px] top-0 w-[59.588px]" data-name="Span">
      <div className="absolute flex flex-col font-['Inter:Medium',sans-serif] font-medium h-[21.6px] justify-center leading-[0] left-0 not-italic text-[#111827] text-[13.6px] top-[11.6px] translate-y-[-50%] w-[59.587px]">
        <p className="leading-[24px]">At Work</p>
      </div>
    </div>
  );
}

function Container203() {
  return (
    <div className="absolute h-[24px] left-[24.8px] top-[24.8px] w-[91.588px]" data-name="Container">
      <Frame47 />
      <Span17 />
    </div>
  );
}

function Container204() {
  return <div className="absolute bg-white left-[28px] rounded-[9999px] size-[16px] top-[4px]" data-name="Container" />;
}

function Button33() {
  return (
    <div className="absolute bg-[#22c55e] h-[24px] left-[248.8px] rounded-[9999px] top-[24.8px] w-[48px]" data-name="Button">
      <Container204 />
    </div>
  );
}

function Container205() {
  return (
    <div className="absolute bg-[#f9fafb] border-0 border-[#f3f4f6] border-solid h-[73.6px] left-0 rounded-[16px] top-[68px] w-[321.6px]" data-name="Container">
      <Container203 />
      <Button33 />
    </div>
  );
}

function Frame48() {
  return (
    <div className="absolute left-0 size-[20px] top-[2px]" data-name="Frame">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Frame">
          <path d={svgPaths.p275d2400} id="Vector" stroke="var(--stroke-0, #6B7280)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d={svgPaths.p21a7e80} id="Vector_2" stroke="var(--stroke-0, #6B7280)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Span18() {
  return (
    <div className="absolute h-[24px] left-[32px] top-0 w-[64.662px]" data-name="Span">
      <div className="absolute flex flex-col font-['Inter:Medium',sans-serif] font-medium h-[21.6px] justify-center leading-[0] left-0 not-italic text-[#111827] text-[13.6px] top-[11.6px] translate-y-[-50%] w-[64.663px]">
        <p className="leading-[24px]">At Home</p>
      </div>
    </div>
  );
}

function Container206() {
  return (
    <div className="absolute h-[24px] left-[24.8px] top-[24.8px] w-[96.662px]" data-name="Container">
      <Frame48 />
      <Span18 />
    </div>
  );
}

function Container207() {
  return <div className="absolute bg-white left-[28px] rounded-[9999px] size-[16px] top-[4px]" data-name="Container" />;
}

function Button34() {
  return (
    <div className="absolute bg-[#22c55e] h-[24px] left-[248.8px] rounded-[9999px] top-[24.8px] w-[48px]" data-name="Button">
      <Container207 />
    </div>
  );
}

function Container208() {
  return (
    <div className="absolute bg-[#f9fafb] border-0 border-[#f3f4f6] border-solid h-[73.6px] left-0 rounded-[16px] top-[157.6px] w-[321.6px]" data-name="Container">
      <Container206 />
      <Button34 />
    </div>
  );
}

function Frame49() {
  return (
    <div className="absolute left-0 size-[20px] top-[2px]" data-name="Frame">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Frame">
          <path d={svgPaths.p25397b80} id="Vector" stroke="var(--stroke-0, #6B7280)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d={svgPaths.p166b7100} id="Vector_2" stroke="var(--stroke-0, #6B7280)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d={svgPaths.p2241fff0} id="Vector_3" stroke="var(--stroke-0, #6B7280)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d={svgPaths.p2c4f400} id="Vector_4" stroke="var(--stroke-0, #6B7280)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Span19() {
  return (
    <div className="absolute h-[24px] left-[32px] top-0 w-[62.612px]" data-name="Span">
      <div className="absolute flex flex-col font-['Inter:Medium',sans-serif] font-medium h-[21.6px] justify-center leading-[0] left-0 not-italic text-[#111827] text-[13.6px] top-[11.6px] translate-y-[-50%] w-[62.613px]">
        <p className="leading-[24px]">In Public</p>
      </div>
    </div>
  );
}

function Container209() {
  return (
    <div className="absolute h-[24px] left-[24.8px] top-[24.8px] w-[94.613px]" data-name="Container">
      <Frame49 />
      <Span19 />
    </div>
  );
}

function Container210() {
  return <div className="absolute bg-white left-[4px] rounded-[9999px] size-[16px] top-[4px]" data-name="Container" />;
}

function Button35() {
  return (
    <div className="absolute bg-[#e5e7eb] h-[24px] left-[248.8px] rounded-[9999px] top-[24.8px] w-[48px]" data-name="Button">
      <Container210 />
    </div>
  );
}

function Container211() {
  return (
    <div className="absolute bg-[#f9fafb] border-0 border-[#f3f4f6] border-solid h-[73.6px] left-0 rounded-[16px] top-[247.2px] w-[321.6px]" data-name="Container">
      <Container209 />
      <Button35 />
    </div>
  );
}

function Container212() {
  return (
    <div className="absolute h-[320.8px] left-0 top-0 w-[321.6px]" data-name="Container">
      <Heading19 />
      <Paragraph35 />
      <Container205 />
      <Container208 />
      <Container211 />
    </div>
  );
}

function Heading20() {
  return (
    <div className="absolute h-[20px] left-[4px] top-0 w-[317.6px]" data-name="Heading">
      <div className="absolute flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[18.4px] justify-center leading-[0] left-0 not-italic text-[#6b7280] text-[11.9px] top-[10px] translate-y-[-50%] w-[118.225px]">
        <p className="leading-[20px]">{`Privacy & Data`}</p>
      </div>
    </div>
  );
}

function Frame50() {
  return (
    <div className="absolute left-0 size-[18px] top-[3px]" data-name="Frame">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="Frame">
          <path d={svgPaths.p3840bd70} id="Vector" stroke="var(--stroke-0, #111827)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Span20() {
  return (
    <div className="absolute h-[24px] left-[26px] top-0 w-[139.163px]" data-name="Span">
      <div className="absolute flex flex-col font-['Inter:Medium',sans-serif] font-medium h-[21.6px] justify-center leading-[0] left-0 not-italic text-[#111827] text-[13.6px] top-[11.6px] translate-y-[-50%] w-[139.163px]">
        <p className="leading-[24px]">Your data is private</p>
      </div>
    </div>
  );
}

function Container213() {
  return (
    <div className="absolute h-[24px] left-[24.8px] top-[24.8px] w-[272px]" data-name="Container">
      <Frame50 />
      <Span20 />
    </div>
  );
}

function Paragraph36() {
  return (
    <div className="absolute font-['Inter:Light',sans-serif] font-light h-[39px] leading-[0] left-[24.8px] not-italic text-[#6b7280] text-[10.2px] top-[56.8px] w-[272px]" data-name="Paragraph">
      <div className="absolute flex flex-col h-[16px] justify-center left-0 top-[9.6px] translate-y-[-50%] w-[231.175px]">
        <p className="leading-[19px]">{`We don't sell your data or share your personal `}</p>
      </div>
      <div className="absolute flex flex-col h-[16px] justify-center left-0 top-[29.1px] translate-y-[-50%] w-[194.775px]">
        <p className="leading-[19px]">reflections. Your journey is yours alone.</p>
      </div>
    </div>
  );
}

function Container214() {
  return (
    <div className="absolute bg-[#f9fafb] border-0 border-[#f3f4f6] border-solid h-[120.6px] left-0 rounded-[16px] top-[36px] w-[321.6px]" data-name="Container">
      <Container213 />
      <Paragraph36 />
    </div>
  );
}

function Container215() {
  return (
    <div className="absolute h-[156.6px] left-0 top-[352.8px] w-[321.6px]" data-name="Container">
      <Heading20 />
      <Container214 />
    </div>
  );
}

function Frame51() {
  return (
    <div className="absolute left-[118.49px] size-[18px] top-[15px]" data-name="Frame">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="Frame">
          <path d="M12 12.75L15.75 9L12 5.25" id="Vector" stroke="var(--stroke-0, #DC2626)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d="M15.75 9H6.75" id="Vector_2" stroke="var(--stroke-0, #DC2626)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d={svgPaths.p3d8d0000} id="Vector_3" stroke="var(--stroke-0, #DC2626)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Span21() {
  return (
    <div className="absolute h-[24px] left-[144.49px] top-[12px] w-[58.625px]" data-name="Span">
      <div className="absolute flex flex-col font-['Inter:Medium',sans-serif] font-medium h-[21.6px] justify-center leading-[0] left-[29.31px] not-italic text-[#dc2626] text-[13.6px] text-center top-[11.6px] translate-x-[-50%] translate-y-[-50%] w-[58.625px]">
        <p className="leading-[24px]">Log Out</p>
      </div>
    </div>
  );
}

function Button36() {
  return (
    <div className="absolute bg-[#fef2f2] h-[48px] left-0 rounded-[9999px] top-[16px] w-[321.6px]" data-name="Button">
      <Frame51 />
      <Span21 />
    </div>
  );
}

function Container216() {
  return (
    <div className="absolute h-[64px] left-0 top-[541.4px] w-[321.6px]" data-name="Container">
      <Button36 />
    </div>
  );
}

function Container217() {
  return (
    <div className="absolute h-[48px] left-0 top-[637.4px] w-[321.6px]" data-name="Container">
      <div className="absolute flex flex-col font-['Inter:Light',sans-serif] font-light h-[16px] justify-center leading-[0] left-[160.79px] not-italic text-[#9ca3af] text-[10.2px] text-center top-[8px] translate-x-[-50%] translate-y-[-50%] w-[131.988px]">
        <p className="leading-[16px]">Version 1.0.0 • HumanPing</p>
      </div>
    </div>
  );
}

function Container218() {
  return (
    <div className="absolute h-[685.4px] left-[24px] top-[24px] w-[321.6px]" data-name="Container">
      <Container212 />
      <Container215 />
      <Container216 />
      <Container217 />
    </div>
  );
}

function Container219() {
  return (
    <div className="absolute h-[733.4px] left-0 top-[72px] w-[369.6px]" data-name="Container">
      <Container218 />
    </div>
  );
}

function Container220() {
  return (
    <div className="absolute h-[805.4px] left-0 overflow-clip shadow-[0px_25px_50px_-12px_rgba(0,0,0,0.25),0px_0px_0px_0px_rgba(0,0,0,0),0px_0px_0px_0px_rgba(0,0,0,0)] top-0 w-[369.6px]" data-name="Container" style={{ backgroundImage: "linear-gradient(114.651deg, rgb(239, 246, 255) 25%, rgb(250, 245, 255) 60.355%, rgb(240, 253, 244) 95.711%)" }}>
      <Container202 />
      <Container219 />
    </div>
  );
}

function Container221() {
  return (
    <div className="absolute bg-[#f3f4f6] h-[805.4px] left-0 top-0 w-[369.6px]" data-name="Container">
      <Container220 />
    </div>
  );
}

function Container222() {
  return (
    <div className="absolute h-[805.4px] left-0 top-0 w-[369.6px]" data-name="Container">
      <Container221 />
    </div>
  );
}

function Component12Settings() {
  return (
    <div className="absolute bg-white h-[805.4px] left-[1258px] top-[1177px] w-[369.6px]" data-name="12. Settings">
      <Container222 />
    </div>
  );
}

function Frame52() {
  return (
    <div className="absolute left-[8px] size-[24px] top-[8px]" data-name="Frame">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Frame">
          <path d="M12 19L5 12L12 5" id="Vector" stroke="var(--stroke-0, #374151)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d="M19 12H5" id="Vector_2" stroke="var(--stroke-0, #374151)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Button37() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0)] left-[-8px] rounded-[9999px] size-[40px] top-0" data-name="Button">
      <Frame52 />
    </div>
  );
}

function Container223() {
  return (
    <div className="absolute h-[40px] left-[24px] top-[16px] w-[32px]" data-name="Container">
      <Button37 />
    </div>
  );
}

function Heading21() {
  return (
    <div className="absolute h-[28px] left-[16.91px] overflow-clip top-0 w-[73.363px]" data-name="Heading">
      <div className="absolute flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold h-[24px] justify-center leading-[0] left-0 not-italic text-[#111827] text-[15.3px] top-[13.6px] translate-y-[-50%] w-[73.363px]">
        <p className="leading-[28px]">Feedback</p>
      </div>
    </div>
  );
}

function Container224() {
  return (
    <div className="absolute h-[28px] left-[131.2px] top-[22px] w-[107.188px]" data-name="Container">
      <Heading21 />
    </div>
  );
}

function Container225() {
  return <div className="absolute h-[100px] left-[238.4px] top-[36px] w-[107.188px]" data-name="Container" />;
}

function Container226() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.5)] h-[72px] left-0 top-0 w-[369.6px]" data-name="Container">
      <Container223 />
      <Container224 />
      <Container225 />
    </div>
  );
}

function Heading22() {
  return (
    <div className="absolute h-[28px] left-0 top-0 w-[321.6px]" data-name="Heading">
      <div className="absolute flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[26.4px] justify-center leading-[0] left-[160.8px] not-italic text-[#111827] text-[17px] text-center top-[14px] translate-x-[-50%] translate-y-[-50%] w-[291.375px]">
        <p className="leading-[28px]">How is HumanPing helping you?</p>
      </div>
    </div>
  );
}

function Paragraph37() {
  return (
    <div className="absolute h-[24px] left-0 top-[36px] w-[321.6px]" data-name="Paragraph">
      <div className="absolute flex flex-col font-['Inter:Light',sans-serif] font-light h-[21.6px] justify-center leading-[0] left-[160.8px] not-italic text-[#6b7280] text-[13.6px] text-center top-[11.6px] translate-x-[-50%] translate-y-[-50%] w-[223.175px]">
        <p className="leading-[24px]">We read every piece of feedback.</p>
      </div>
    </div>
  );
}

function Container227() {
  return (
    <div className="absolute h-[60px] left-0 top-0 w-[321.6px]" data-name="Container">
      <Heading22 />
      <Paragraph37 />
    </div>
  );
}

function Frame53() {
  return (
    <div className="absolute left-[16.6px] size-[24px] top-[16.6px]" data-name="Frame">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Frame">
          <path d={svgPaths.p1dff4600} id="Vector" stroke="var(--stroke-0, #EF4444)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Span22() {
  return (
    <div className="absolute h-[24px] left-[56.6px] top-[16.6px] w-[48.237px]" data-name="Span">
      <div className="absolute flex flex-col font-['Inter:Medium',sans-serif] font-medium h-[21.6px] justify-center leading-[0] left-[24.12px] not-italic text-[#374151] text-[13.6px] text-center top-[11.6px] translate-x-[-50%] translate-y-[-50%] w-[48.238px]">
        <p className="leading-[24px]">Love it</p>
      </div>
    </div>
  );
}

function Button38() {
  return (
    <div className="absolute bg-white border border-[#f3f4f6] border-solid h-[59.2px] left-0 rounded-[12px] top-0 w-[321.6px]" data-name="Button">
      <Frame53 />
      <Span22 />
    </div>
  );
}

function Frame54() {
  return (
    <div className="absolute left-[16.6px] size-[24px] top-[16.6px]" data-name="Frame">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Frame">
          <path d="M7 10V22" id="Vector" stroke="var(--stroke-0, #3B82F6)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d={svgPaths.p13c25e00} id="Vector_2" stroke="var(--stroke-0, #3B82F6)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Span23() {
  return (
    <div className="absolute h-[24px] left-[56.6px] top-[16.6px] w-[59.675px]" data-name="Span">
      <div className="absolute flex flex-col font-['Inter:Medium',sans-serif] font-medium h-[21.6px] justify-center leading-[0] left-[29.84px] not-italic text-[#374151] text-[13.6px] text-center top-[11.6px] translate-x-[-50%] translate-y-[-50%] w-[59.675px]">
        <p className="leading-[24px]">{`It's okay`}</p>
      </div>
    </div>
  );
}

function Button39() {
  return (
    <div className="absolute bg-white border border-[#f3f4f6] border-solid h-[59.2px] left-0 rounded-[12px] top-[71.2px] w-[321.6px]" data-name="Button">
      <Frame54 />
      <Span23 />
    </div>
  );
}

function Frame55() {
  return (
    <div className="absolute left-[16.6px] size-[24px] top-[16.6px]" data-name="Frame">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Frame">
          <path d={svgPaths.p3c61fe80} id="Vector" stroke="var(--stroke-0, #6B7280)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Span24() {
  return (
    <div className="absolute h-[24px] left-[56.6px] top-[16.6px] w-[147.825px]" data-name="Span">
      <div className="absolute flex flex-col font-['Inter:Medium',sans-serif] font-medium h-[21.6px] justify-center leading-[0] left-[73.91px] not-italic text-[#374151] text-[13.6px] text-center top-[11.6px] translate-x-[-50%] translate-y-[-50%] w-[147.825px]">
        <p className="leading-[24px]">Needs improvement</p>
      </div>
    </div>
  );
}

function Button40() {
  return (
    <div className="absolute bg-white border border-[#f3f4f6] border-solid h-[59.2px] left-0 rounded-[12px] top-[142.4px] w-[321.6px]" data-name="Button">
      <Frame55 />
      <Span24 />
    </div>
  );
}

function Container228() {
  return (
    <div className="absolute h-[201.6px] left-0 top-[92px] w-[321.6px]" data-name="Container">
      <Button38 />
      <Button39 />
      <Button40 />
    </div>
  );
}

function Label7() {
  return (
    <div className="absolute h-[18.4px] left-[4px] top-[3.2px] w-[161.2px]" data-name="Label">
      <div className="absolute flex flex-col font-['Inter:Medium',sans-serif] font-medium h-[18.4px] justify-center leading-[0] left-0 not-italic text-[#374151] text-[11.9px] top-[9.2px] translate-y-[-50%] w-[161.2px]">
        <p className="leading-[20px]">Anything else? (Optional)</p>
      </div>
    </div>
  );
}

function Container229() {
  return (
    <div className="absolute content-stretch flex h-[120px] items-start left-0 p-[16px] rounded-[12px] top-[32px] w-[321.6px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-0 border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <p className="font-['Inter:Light',sans-serif] font-light leading-[24px] not-italic relative shrink-0 text-[#ccc] text-[16px] text-nowrap">Tell us what you think...</p>
    </div>
  );
}

function Container230() {
  return (
    <div className="absolute h-[157.6px] left-0 top-[325.6px] w-[321.6px]" data-name="Container">
      <Label7 />
      <Container229 />
    </div>
  );
}

function StateLayer4() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-center px-[16px] py-[10px] relative shrink-0" data-name="State-layer">
      <div className="flex flex-col font-['Roboto:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[14px] text-nowrap text-white tracking-[0.1px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[20px]">Submit Feedback</p>
      </div>
    </div>
  );
}

function Content4() {
  return (
    <div className="bg-[#6750a4] content-stretch flex flex-col items-center justify-center overflow-clip relative rounded-[100px] shrink-0" data-name="Content">
      <StateLayer4 />
    </div>
  );
}

function Button41() {
  return (
    <div className="absolute content-stretch flex h-[48px] items-center justify-center left-[90px] top-[5.8px]" data-name="Button">
      <Content4 />
    </div>
  );
}

function Button42() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0)] h-[60px] left-0 rounded-[9999px] shadow-[0px_2px_4px_-2px_rgba(0,0,0,0.1),0px_4px_6px_-1px_rgba(0,0,0,0.1),0px_0px_0px_0px_rgba(0,0,0,0),0px_0px_0px_0px_rgba(0,0,0,0)] top-[515.2px] w-[321.6px]" data-name="Button">
      <Button41 />
    </div>
  );
}

function Container231() {
  return (
    <div className="absolute h-[575.2px] left-[24px] top-[24px] w-[321.6px]" data-name="Container">
      <Container227 />
      <Container228 />
      <Container230 />
      <Button42 />
    </div>
  );
}

function Container232() {
  return (
    <div className="absolute h-[623.2px] left-0 top-[72px] w-[369.6px]" data-name="Container">
      <Container231 />
    </div>
  );
}

function Container233() {
  return (
    <div className="absolute h-[695.2px] left-0 overflow-clip shadow-[0px_25px_50px_-12px_rgba(0,0,0,0.25),0px_0px_0px_0px_rgba(0,0,0,0),0px_0px_0px_0px_rgba(0,0,0,0)] top-0 w-[369.6px]" data-name="Container" style={{ backgroundImage: "linear-gradient(117.997deg, rgb(239, 246, 255) 25%, rgb(250, 245, 255) 60.355%, rgb(240, 253, 244) 95.711%)" }}>
      <Container226 />
      <Container232 />
    </div>
  );
}

function Container234() {
  return (
    <div className="absolute bg-[#f3f4f6] h-[695.2px] left-0 top-0 w-[369.6px]" data-name="Container">
      <Container233 />
    </div>
  );
}

function Container235() {
  return (
    <div className="absolute h-[695.2px] left-0 top-0 w-[369.6px]" data-name="Container">
      <Container234 />
    </div>
  );
}

function Component13Feedback() {
  return (
    <div className="absolute bg-white h-[695.2px] left-[1887px] top-[1232px] w-[369.6px]" data-name="13. Feedback">
      <Container235 />
    </div>
  );
}

function Frame56() {
  return (
    <div className="absolute left-[8px] size-[24px] top-[8px]" data-name="Frame">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Frame">
          <path d="M12 19L5 12L12 5" id="Vector" stroke="var(--stroke-0, #374151)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d="M19 12H5" id="Vector_2" stroke="var(--stroke-0, #374151)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Button43() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0)] left-[-8px] rounded-[9999px] size-[40px] top-0" data-name="Button">
      <Frame56 />
    </div>
  );
}

function Container236() {
  return (
    <div className="absolute h-[40px] left-[24px] top-[16px] w-[32px]" data-name="Container">
      <Button43 />
    </div>
  );
}

function Heading23() {
  return (
    <div className="absolute h-[28px] left-[5.07px] overflow-clip top-0 w-[98.9px]" data-name="Heading">
      <div className="absolute flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold h-[24px] justify-center leading-[0] left-0 not-italic text-[#111827] text-[15.3px] top-[13.6px] translate-y-[-50%] w-[98.9px]">
        <p className="leading-[28px]">Notifications</p>
      </div>
    </div>
  );
}

function Container237() {
  return (
    <div className="absolute h-[28px] left-[133.06px] top-[22px] w-[109.063px]" data-name="Container">
      <Heading23 />
    </div>
  );
}

function Container238() {
  return <div className="absolute h-[100px] left-[242.13px] top-[36px] w-[109.063px]" data-name="Container" />;
}

function Container239() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.5)] h-[72px] left-0 top-0 w-[375.2px]" data-name="Container">
      <Container236 />
      <Container237 />
      <Container238 />
    </div>
  );
}

function Frame57() {
  return (
    <div className="absolute left-[8px] size-[20px] top-[8px]" data-name="Frame">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Frame">
          <path d={svgPaths.p1c3efea0} id="Vector" stroke="var(--stroke-0, #2563EB)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d={svgPaths.p25877f40} id="Vector_2" stroke="var(--stroke-0, #2563EB)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Container240() {
  return (
    <div className="absolute bg-[#eff6ff] left-0 rounded-[8px] size-[36px] top-[2px]" data-name="Container">
      <Frame57 />
    </div>
  );
}

function Paragraph38() {
  return (
    <div className="absolute h-[24px] left-0 top-0 w-[156.7px]" data-name="Paragraph">
      <div className="absolute flex flex-col font-['Inter:Medium',sans-serif] font-medium h-[21.6px] justify-center leading-[0] left-0 not-italic text-[#111827] text-[13.6px] top-[11.6px] translate-y-[-50%] w-[117.512px]">
        <p className="leading-[24px]">Daily Reminders</p>
      </div>
    </div>
  );
}

function Paragraph39() {
  return (
    <div className="absolute h-[16px] left-0 top-[24px] w-[156.7px]" data-name="Paragraph">
      <div className="absolute flex flex-col font-['Inter:Light',sans-serif] font-light h-[16px] justify-center leading-[0] left-0 not-italic text-[#6b7280] text-[10.2px] top-[8px] translate-y-[-50%] w-[156.7px]">
        <p className="leading-[16px]">Get nudged to do your mission</p>
      </div>
    </div>
  );
}

function Container241() {
  return (
    <div className="absolute h-[40px] left-[48px] top-0 w-[156.7px]" data-name="Container">
      <Paragraph38 />
      <Paragraph39 />
    </div>
  );
}

function Container242() {
  return (
    <div className="absolute h-[40px] left-[24.8px] top-[24.8px] w-[204.7px]" data-name="Container">
      <Container240 />
      <Container241 />
    </div>
  );
}

function Container243() {
  return <div className="absolute bg-white left-[28px] rounded-[9999px] size-[16px] top-[4px]" data-name="Container" />;
}

function Button44() {
  return (
    <div className="absolute bg-[#3b82f6] h-[24px] left-[254.4px] rounded-[9999px] top-[32.8px] w-[48px]" data-name="Button">
      <Container243 />
    </div>
  );
}

function Container244() {
  return (
    <div className="absolute bg-white border-0 border-[rgba(255,255,255,0.5)] border-solid h-[89.6px] left-0 rounded-[16px] shadow-[0px_4px_6px_-4px_rgba(30,58,138,0.05),0px_10px_15px_-3px_rgba(30,58,138,0.05),0px_0px_0px_0px_rgba(0,0,0,0),0px_0px_0px_0px_rgba(0,0,0,0)] top-0 w-[327.2px]" data-name="Container">
      <Container242 />
      <Button44 />
    </div>
  );
}

function Heading24() {
  return (
    <div className="absolute h-[20px] left-[4px] top-0 w-[323.2px]" data-name="Heading">
      <div className="absolute flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[18.4px] justify-center leading-[0] left-0 not-italic text-[#6b7280] text-[11.9px] top-[10px] translate-y-[-50%] w-[95.463px]">
        <p className="leading-[20px]">Preferences</p>
      </div>
    </div>
  );
}

function Frame58() {
  return (
    <div className="absolute left-0 size-[20px] top-[2px]" data-name="Frame">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g clipPath="url(#clip0_1_2136)" id="Frame">
          <path d={svgPaths.p14d24500} id="Vector" stroke="var(--stroke-0, #9CA3AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d="M10 5V10L13.3333 11.6667" id="Vector_2" stroke="var(--stroke-0, #9CA3AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
        <defs>
          <clipPath id="clip0_1_2136">
            <rect fill="white" height="20" width="20" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Span25() {
  return (
    <div className="absolute h-[24px] left-[32px] top-0 w-[32.688px]" data-name="Span">
      <div className="absolute flex flex-col font-['Inter:Light',sans-serif] font-light h-[21.6px] justify-center leading-[0] left-0 not-italic text-[#111827] text-[13.6px] top-[11.6px] translate-y-[-50%] w-[32.688px]">
        <p className="leading-[24px]">Time</p>
      </div>
    </div>
  );
}

function Container245() {
  return (
    <div className="absolute h-[24px] left-[24.8px] top-[27.8px] w-[64.688px]" data-name="Container">
      <Frame58 />
      <Span25 />
    </div>
  );
}

function Input7() {
  return (
    <div className="absolute bg-[#f3f4f6] content-stretch flex h-[30px] items-center left-[210.5px] px-[12px] py-[4px] rounded-[8px] top-[24.8px] w-[91.9px]" data-name="Input">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#111827] text-[14px] text-nowrap">09:00</p>
    </div>
  );
}

function Container246() {
  return (
    <div className="absolute bg-[#f9fafb] border-0 border-[#f3f4f6] border-solid h-[79.6px] left-0 rounded-[16px] top-[36px] w-[327.2px]" data-name="Container">
      <Container245 />
      <Input7 />
    </div>
  );
}

function Frame59() {
  return (
    <div className="absolute left-0 size-[20px] top-[2px]" data-name="Frame">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Frame">
          <path d={svgPaths.pccb100} id="Vector" stroke="var(--stroke-0, #9CA3AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Span26() {
  return (
    <div className="absolute h-[24px] left-[32px] top-0 w-[112.463px]" data-name="Span">
      <div className="absolute flex flex-col font-['Inter:Light',sans-serif] font-light h-[21.6px] justify-center leading-[0] left-0 not-italic text-[#111827] text-[13.6px] top-[11.6px] translate-y-[-50%] w-[112.462px]">
        <p className="leading-[24px]">Snooze Duration</p>
      </div>
    </div>
  );
}

function Container247() {
  return (
    <div className="absolute h-[24px] left-[24.8px] top-[26.8px] w-[144.463px]" data-name="Container">
      <Frame59 />
      <Span26 />
    </div>
  );
}

function Frame60() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="Frame">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="Frame">
          <g id="Vector">
            <mask fill="white" id="path-1-inside-1_1_2116">
              <path clipRule="evenodd" d={svgPaths.p22aac840} fillRule="evenodd" />
            </mask>
            <path clipRule="evenodd" d={svgPaths.p22aac840} fill="var(--fill-0, black)" fillRule="evenodd" />
            <path d={svgPaths.p24a32800} fill="var(--stroke-0, #111827)" mask="url(#path-1-inside-1_1_2116)" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Select() {
  return (
    <div className="absolute bg-[#f3f4f6] content-stretch flex h-[28px] items-center justify-between left-[210.4px] px-[12px] py-[4px] rounded-[8px] top-[24.8px] w-[92px]" data-name="Select">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[1.2px] not-italic relative shrink-0 text-[#111827] text-[14px] text-nowrap">1 hour</p>
      <Frame60 />
    </div>
  );
}

function Container248() {
  return (
    <div className="absolute bg-[#f9fafb] border-0 border-[#f3f4f6] border-solid h-[77.6px] left-0 rounded-[16px] top-[131.6px] w-[327.2px]" data-name="Container">
      <Container247 />
      <Select />
    </div>
  );
}

function Container249() {
  return (
    <div className="absolute h-[209.2px] left-0 top-[113.6px] w-[327.2px]" data-name="Container">
      <Heading24 />
      <Container246 />
      <Container248 />
    </div>
  );
}

function Container250() {
  return (
    <div className="absolute h-[322.8px] left-[24px] top-[24px] w-[327.2px]" data-name="Container">
      <Container244 />
      <Container249 />
    </div>
  );
}

function Container251() {
  return (
    <div className="absolute h-[618.4px] left-0 top-[72px] w-[375.2px]" data-name="Container">
      <Container250 />
    </div>
  );
}

function Container252() {
  return (
    <div className="absolute h-[690.4px] left-0 overflow-clip shadow-[0px_25px_50px_-12px_rgba(0,0,0,0.25),0px_0px_0px_0px_rgba(0,0,0,0),0px_0px_0px_0px_rgba(0,0,0,0)] top-0 w-[375.2px]" data-name="Container" style={{ backgroundImage: "linear-gradient(118.522deg, rgb(239, 246, 255) 25%, rgb(250, 245, 255) 60.355%, rgb(240, 253, 244) 95.711%)" }}>
      <Container239 />
      <Container251 />
    </div>
  );
}

function Container253() {
  return (
    <div className="absolute bg-[#f3f4f6] h-[690.4px] left-0 top-0 w-[375.2px]" data-name="Container">
      <Container252 />
    </div>
  );
}

function Container254() {
  return (
    <div className="absolute h-[690.4px] left-0 top-0 w-[375.2px]" data-name="Container">
      <Container253 />
    </div>
  );
}

function Component14Notifications() {
  return (
    <div className="absolute bg-white h-[690.4px] left-[2516px] top-[1234px] w-[375.2px]" data-name="14. Notifications">
      <Container254 />
    </div>
  );
}

function Container255() {
  return <div className="absolute h-[100px] left-[24px] top-[36px] w-[107.188px]" data-name="Container" />;
}

function Heading25() {
  return (
    <div className="absolute h-[28px] left-[25.48px] overflow-clip top-0 w-[56.237px]" data-name="Heading">
      <div className="absolute flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold h-[24px] justify-center leading-[0] left-0 not-italic text-[#111827] text-[15.3px] top-[13.6px] translate-y-[-50%] w-[56.238px]">
        <p className="leading-[28px]">History</p>
      </div>
    </div>
  );
}

function Container256() {
  return (
    <div className="absolute h-[28px] left-[131.2px] top-[22px] w-[107.188px]" data-name="Container">
      <Heading25 />
    </div>
  );
}

function Container257() {
  return <div className="absolute h-[40px] left-[238.4px] top-[16px] w-[107.188px]" data-name="Container" />;
}

function Container258() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.5)] h-[72px] left-0 top-0 w-[369.6px]" data-name="Container">
      <Container255 />
      <Container256 />
      <Container257 />
    </div>
  );
}

function Button45() {
  return (
    <div className="absolute bg-[#111827] h-[36px] left-0 rounded-[9999px] top-0 w-[83.787px]" data-name="Button">
      <div className="absolute flex flex-col font-['Inter:Medium',sans-serif] font-medium h-[18.4px] justify-center leading-[0] left-[41.89px] not-italic text-[11.9px] text-center text-white top-[18px] translate-x-[-50%] translate-y-[-50%] w-[51.787px]">
        <p className="leading-[20px]">All Time</p>
      </div>
    </div>
  );
}

function Button46() {
  return (
    <div className="absolute bg-white h-[36px] left-[91.79px] rounded-[9999px] top-0 w-[96.488px]" data-name="Button">
      <div className="absolute flex flex-col font-['Inter:Medium',sans-serif] font-medium h-[18.4px] justify-center leading-[0] left-[48.24px] not-italic text-[#4b5563] text-[11.9px] text-center top-[18px] translate-x-[-50%] translate-y-[-50%] w-[64.488px]">
        <p className="leading-[20px]">Last week</p>
      </div>
    </div>
  );
}

function Button47() {
  return (
    <div className="absolute bg-white h-[36px] left-[196.28px] rounded-[9999px] top-0 w-[103.775px]" data-name="Button">
      <div className="absolute flex flex-col font-['Inter:Medium',sans-serif] font-medium h-[18.4px] justify-center leading-[0] left-[51.89px] not-italic text-[#4b5563] text-[11.9px] text-center top-[18px] translate-x-[-50%] translate-y-[-50%] w-[71.775px]">
        <p className="leading-[20px]">Last month</p>
      </div>
    </div>
  );
}

function Container259() {
  return (
    <div className="absolute h-[44px] left-[24px] top-[24px] w-[321.6px]" data-name="Container">
      <Button45 />
      <Button46 />
      <Button47 />
    </div>
  );
}

function Span27() {
  return (
    <div className="absolute h-[16px] left-0 top-0 w-[40.675px]" data-name="Span">
      <div className="absolute flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[16px] justify-center leading-[0] left-0 not-italic text-[#9ca3af] text-[10.2px] top-[8px] translate-y-[-50%] w-[40.675px]">
        <p className="leading-[16px]">Today</p>
      </div>
    </div>
  );
}

function Span28() {
  return (
    <div className="absolute h-[28px] left-[244.54px] top-0 w-[27.462px]" data-name="Span">
      <div className="absolute flex flex-col font-['Inter:Light',sans-serif] font-light h-[26.4px] justify-center leading-[0] left-0 not-italic text-[#111827] text-[17px] top-[14px] translate-y-[-50%] w-[27.463px]">
        <p className="leading-[28px]">😊</p>
      </div>
    </div>
  );
}

function Container260() {
  return (
    <div className="absolute h-[28px] left-[24.8px] top-[24.8px] w-[272px]" data-name="Container">
      <Span27 />
      <Span28 />
    </div>
  );
}

function Heading26() {
  return (
    <div className="absolute h-[24px] left-[24.8px] top-[60.8px] w-[272px]" data-name="Heading">
      <div className="absolute flex flex-col font-['Inter:Medium',sans-serif] font-medium h-[21.6px] justify-center leading-[0] left-0 not-italic text-[#111827] text-[13.6px] top-[11.6px] translate-y-[-50%] w-[263.6px]">
        <p className="leading-[24px]">Ask one person how their day is going</p>
      </div>
    </div>
  );
}

function Paragraph40() {
  return (
    <div className="absolute font-['Inter:Light',sans-serif] font-light h-[20px] leading-[0] left-[24.8px] not-italic text-[#6b7280] text-[11.9px] top-[88.8px] w-[272px]" data-name="Paragraph">
      <div className="absolute flex flex-col h-[18.4px] justify-center left-0 top-[10px] translate-y-[-50%] w-[4.538px]">
        <p className="leading-[20px]">{`"`}</p>
      </div>
      <div className="absolute flex flex-col h-[18.4px] justify-center left-[4.54px] top-[10px] translate-y-[-50%] w-[138.862px]">
        <p className="leading-[20px]">The barista smiled back!</p>
      </div>
      <div className="absolute flex flex-col h-[18.4px] justify-center left-[143.4px] top-[10px] translate-y-[-50%] w-[4.538px]">
        <p className="leading-[20px]">{`"`}</p>
      </div>
    </div>
  );
}

function Container261() {
  return (
    <div className="absolute bg-white border-0 border-[rgba(255,255,255,0.5)] border-solid h-[133.6px] left-0 rounded-[16px] shadow-[0px_4px_6px_-4px_rgba(30,58,138,0.05),0px_10px_15px_-3px_rgba(30,58,138,0.05),0px_0px_0px_0px_rgba(0,0,0,0),0px_0px_0px_0px_rgba(0,0,0,0)] top-0 w-[321.6px]" data-name="Container">
      <Container260 />
      <Heading26 />
      <Paragraph40 />
    </div>
  );
}

function Span29() {
  return (
    <div className="absolute h-[16px] left-0 top-0 w-[67.838px]" data-name="Span">
      <div className="absolute flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[16px] justify-center leading-[0] left-0 not-italic text-[#9ca3af] text-[10.2px] top-[8px] translate-y-[-50%] w-[67.838px]">
        <p className="leading-[16px]">Yesterday</p>
      </div>
    </div>
  );
}

function Span30() {
  return (
    <div className="absolute h-[28px] left-[244.54px] top-0 w-[27.462px]" data-name="Span">
      <div className="absolute flex flex-col font-['Inter:Light',sans-serif] font-light h-[26.4px] justify-center leading-[0] left-0 not-italic text-[#111827] text-[17px] top-[14px] translate-y-[-50%] w-[27.463px]">
        <p className="leading-[28px]">😐</p>
      </div>
    </div>
  );
}

function Container262() {
  return (
    <div className="absolute h-[28px] left-[24.8px] top-[24.8px] w-[272px]" data-name="Container">
      <Span29 />
      <Span30 />
    </div>
  );
}

function Heading27() {
  return (
    <div className="absolute h-[24px] left-[24.8px] top-[60.8px] w-[272px]" data-name="Heading">
      <div className="absolute flex flex-col font-['Inter:Medium',sans-serif] font-medium h-[21.6px] justify-center leading-[0] left-0 not-italic text-[#111827] text-[13.6px] top-[11.6px] translate-y-[-50%] w-[128.175px]">
        <p className="leading-[24px]">Smile at a stranger</p>
      </div>
    </div>
  );
}

function Paragraph41() {
  return (
    <div className="absolute font-['Inter:Light',sans-serif] font-light h-[20px] leading-[0] left-[24.8px] not-italic text-[#6b7280] text-[11.9px] top-[88.8px] w-[272px]" data-name="Paragraph">
      <div className="absolute flex flex-col h-[18.4px] justify-center left-0 top-[10px] translate-y-[-50%] w-[4.538px]">
        <p className="leading-[20px]">{`"`}</p>
      </div>
      <div className="absolute flex flex-col h-[18.4px] justify-center left-[4.54px] top-[10px] translate-y-[-50%] w-[163.3px]">
        <p className="leading-[20px]">Felt a bit awkward but did it.</p>
      </div>
      <div className="absolute flex flex-col h-[18.4px] justify-center left-[167.84px] top-[10px] translate-y-[-50%] w-[4.538px]">
        <p className="leading-[20px]">{`"`}</p>
      </div>
    </div>
  );
}

function Container263() {
  return (
    <div className="absolute bg-white border-0 border-[rgba(255,255,255,0.5)] border-solid h-[133.6px] left-0 rounded-[16px] shadow-[0px_4px_6px_-4px_rgba(30,58,138,0.05),0px_10px_15px_-3px_rgba(30,58,138,0.05),0px_0px_0px_0px_rgba(0,0,0,0),0px_0px_0px_0px_rgba(0,0,0,0)] top-[149.6px] w-[321.6px]" data-name="Container">
      <Container262 />
      <Heading27 />
      <Paragraph41 />
    </div>
  );
}

function Span31() {
  return (
    <div className="absolute h-[16px] left-0 top-0 w-[42.538px]" data-name="Span">
      <div className="absolute flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[16px] justify-center leading-[0] left-0 not-italic text-[#9ca3af] text-[10.2px] top-[8px] translate-y-[-50%] w-[42.538px]">
        <p className="leading-[16px]">Oct 24</p>
      </div>
    </div>
  );
}

function Span32() {
  return (
    <div className="absolute h-[28px] left-[244.54px] top-0 w-[27.462px]" data-name="Span">
      <div className="absolute flex flex-col font-['Inter:Light',sans-serif] font-light h-[26.4px] justify-center leading-[0] left-0 not-italic text-[#111827] text-[17px] top-[14px] translate-y-[-50%] w-[27.463px]">
        <p className="leading-[28px]">😊</p>
      </div>
    </div>
  );
}

function Container264() {
  return (
    <div className="absolute h-[28px] left-[24.8px] top-[24.8px] w-[272px]" data-name="Container">
      <Span31 />
      <Span32 />
    </div>
  );
}

function Heading28() {
  return (
    <div className="absolute h-[24px] left-[24.8px] top-[60.8px] w-[272px]" data-name="Heading">
      <div className="absolute flex flex-col font-['Inter:Medium',sans-serif] font-medium h-[21.6px] justify-center leading-[0] left-0 not-italic text-[#111827] text-[13.6px] top-[11.6px] translate-y-[-50%] w-[204.975px]">
        <p className="leading-[24px]">{`Compliment someone's shoes`}</p>
      </div>
    </div>
  );
}

function Paragraph42() {
  return (
    <div className="absolute font-['Inter:Light',sans-serif] font-light h-[20px] leading-[0] left-[24.8px] not-italic text-[#6b7280] text-[11.9px] top-[88.8px] w-[272px]" data-name="Paragraph">
      <div className="absolute flex flex-col h-[18.4px] justify-center left-0 top-[10px] translate-y-[-50%] w-[4.538px]">
        <p className="leading-[20px]">{`"`}</p>
      </div>
      <div className="absolute flex flex-col h-[18.4px] justify-center left-[4.54px] top-[10px] translate-y-[-50%] w-[135.25px]">
        <p className="leading-[20px]">They were really happy.</p>
      </div>
      <div className="absolute flex flex-col h-[18.4px] justify-center left-[139.79px] top-[10px] translate-y-[-50%] w-[4.537px]">
        <p className="leading-[20px]">{`"`}</p>
      </div>
    </div>
  );
}

function Container265() {
  return (
    <div className="absolute bg-white border-0 border-[rgba(255,255,255,0.5)] border-solid h-[133.6px] left-0 rounded-[16px] shadow-[0px_4px_6px_-4px_rgba(30,58,138,0.05),0px_10px_15px_-3px_rgba(30,58,138,0.05),0px_0px_0px_0px_rgba(0,0,0,0),0px_0px_0px_0px_rgba(0,0,0,0)] top-[299.2px] w-[321.6px]" data-name="Container">
      <Container264 />
      <Heading28 />
      <Paragraph42 />
    </div>
  );
}

function Span33() {
  return (
    <div className="absolute h-[16px] left-0 top-0 w-[42.538px]" data-name="Span">
      <div className="absolute flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[16px] justify-center leading-[0] left-0 not-italic text-[#9ca3af] text-[10.2px] top-[8px] translate-y-[-50%] w-[42.538px]">
        <p className="leading-[16px]">Oct 23</p>
      </div>
    </div>
  );
}

function Span34() {
  return (
    <div className="absolute h-[28px] left-[244.54px] top-0 w-[27.462px]" data-name="Span">
      <div className="absolute flex flex-col font-['Inter:Light',sans-serif] font-light h-[26.4px] justify-center leading-[0] left-0 not-italic text-[#111827] text-[17px] top-[14px] translate-y-[-50%] w-[27.463px]">
        <p className="leading-[28px]">😬</p>
      </div>
    </div>
  );
}

function Container266() {
  return (
    <div className="absolute h-[28px] left-[24.8px] top-[24.8px] w-[272px]" data-name="Container">
      <Span33 />
      <Span34 />
    </div>
  );
}

function Heading29() {
  return (
    <div className="absolute h-[24px] left-[24.8px] top-[60.8px] w-[272px]" data-name="Heading">
      <div className="absolute flex flex-col font-['Inter:Medium',sans-serif] font-medium h-[21.6px] justify-center leading-[0] left-0 not-italic text-[#111827] text-[13.6px] top-[11.6px] translate-y-[-50%] w-[225.4px]">
        <p className="leading-[24px]">Say good morning to a neighbor</p>
      </div>
    </div>
  );
}

function Paragraph43() {
  return (
    <div className="absolute font-['Inter:Light',sans-serif] font-light h-[20px] leading-[0] left-[24.8px] not-italic text-[#6b7280] text-[11.9px] top-[88.8px] w-[272px]" data-name="Paragraph">
      <div className="absolute flex flex-col h-[18.4px] justify-center left-0 top-[10px] translate-y-[-50%] w-[4.538px]">
        <p className="leading-[20px]">{`"`}</p>
      </div>
      <div className="absolute flex flex-col h-[18.4px] justify-center left-[4.54px] top-[10px] translate-y-[-50%] w-[118.125px]">
        <p className="leading-[20px]">{`They didn't hear me.`}</p>
      </div>
      <div className="absolute flex flex-col h-[18.4px] justify-center left-[122.66px] top-[10px] translate-y-[-50%] w-[4.537px]">
        <p className="leading-[20px]">{`"`}</p>
      </div>
    </div>
  );
}

function Container267() {
  return (
    <div className="absolute bg-white border-0 border-[rgba(255,255,255,0.5)] border-solid h-[133.6px] left-0 rounded-[16px] shadow-[0px_4px_6px_-4px_rgba(30,58,138,0.05),0px_10px_15px_-3px_rgba(30,58,138,0.05),0px_0px_0px_0px_rgba(0,0,0,0),0px_0px_0px_0px_rgba(0,0,0,0)] top-[448.8px] w-[321.6px]" data-name="Container">
      <Container266 />
      <Heading29 />
      <Paragraph43 />
    </div>
  );
}

function Span35() {
  return (
    <div className="absolute h-[16px] left-0 top-0 w-[42.538px]" data-name="Span">
      <div className="absolute flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[16px] justify-center leading-[0] left-0 not-italic text-[#9ca3af] text-[10.2px] top-[8px] translate-y-[-50%] w-[42.538px]">
        <p className="leading-[16px]">Oct 22</p>
      </div>
    </div>
  );
}

function Span36() {
  return (
    <div className="absolute h-[28px] left-[244.54px] top-0 w-[27.462px]" data-name="Span">
      <div className="absolute flex flex-col font-['Inter:Light',sans-serif] font-light h-[26.4px] justify-center leading-[0] left-0 not-italic text-[#111827] text-[17px] top-[14px] translate-y-[-50%] w-[27.463px]">
        <p className="leading-[28px]">😊</p>
      </div>
    </div>
  );
}

function Container268() {
  return (
    <div className="absolute h-[28px] left-[24.8px] top-[24.8px] w-[272px]" data-name="Container">
      <Span35 />
      <Span36 />
    </div>
  );
}

function Heading30() {
  return (
    <div className="absolute h-[24px] left-[24.8px] top-[60.8px] w-[272px]" data-name="Heading">
      <div className="absolute flex flex-col font-['Inter:Medium',sans-serif] font-medium h-[21.6px] justify-center leading-[0] left-0 not-italic text-[#111827] text-[13.6px] top-[11.6px] translate-y-[-50%] w-[188.512px]">
        <p className="leading-[24px]">Hold the door for someone</p>
      </div>
    </div>
  );
}

function Container269() {
  return (
    <div className="absolute bg-white border-0 border-[rgba(255,255,255,0.5)] border-solid h-[113.6px] left-0 rounded-[16px] shadow-[0px_4px_6px_-4px_rgba(30,58,138,0.05),0px_10px_15px_-3px_rgba(30,58,138,0.05),0px_0px_0px_0px_rgba(0,0,0,0),0px_0px_0px_0px_rgba(0,0,0,0)] top-[598.4px] w-[321.6px]" data-name="Container">
      <Container268 />
      <Heading30 />
    </div>
  );
}

function Container270() {
  return (
    <div className="absolute h-[712px] left-[24px] top-[92px] w-[321.6px]" data-name="Container">
      <Container261 />
      <Container263 />
      <Container265 />
      <Container267 />
      <Container269 />
    </div>
  );
}

function Container271() {
  return (
    <div className="absolute h-[828px] left-0 top-0 w-[369.6px]" data-name="Container">
      <Container259 />
      <Container270 />
    </div>
  );
}

function Frame61() {
  return (
    <div className="absolute left-0 size-[20px] top-0" data-name="Frame">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Frame">
          <path d="M6.66667 1.66667V5" id="Vector" stroke="var(--stroke-0, #9CA3AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d="M13.3333 1.66667V5" id="Vector_2" stroke="var(--stroke-0, #9CA3AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d={svgPaths.p1da67b80} id="Vector_3" stroke="var(--stroke-0, #9CA3AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d="M2.5 8.33333H17.5" id="Vector_4" stroke="var(--stroke-0, #9CA3AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Button48() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0)] left-[64.26px] size-[20px] top-[26.8px]" data-name="Button">
      <Frame61 />
    </div>
  );
}

function Frame62() {
  return (
    <div className="absolute left-[10px] size-[20px] top-[10px]" data-name="Frame">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Frame">
          <path d={svgPaths.p2110f1c0} id="Vector" stroke="var(--stroke-0, #2563EB)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d="M2.5 2.5V6.66667H6.66667" id="Vector_2" stroke="var(--stroke-0, #2563EB)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d={svgPaths.pc8ce200} id="Vector_3" stroke="var(--stroke-0, #2563EB)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Container272() {
  return (
    <div className="absolute bg-[#eff6ff] left-0 rounded-[9999px] size-[40px] top-0" data-name="Container">
      <Frame62 />
    </div>
  );
}

function Button49() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0)] left-[164.79px] size-[40px] top-[16.8px]" data-name="Button">
      <Container272 />
    </div>
  );
}

function Frame63() {
  return (
    <div className="absolute left-0 size-[20px] top-0" data-name="Frame">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Frame">
          <path d={svgPaths.p2026e800} id="Vector" stroke="var(--stroke-0, #9CA3AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d={svgPaths.p32ab0300} id="Vector_2" stroke="var(--stroke-0, #9CA3AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Button50() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0)] left-[285.31px] size-[20px] top-[26.8px]" data-name="Button">
      <Frame63 />
    </div>
  );
}

function Container273() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.8)] border-0 border-[#e5e7eb] border-solid h-[74px] left-0 top-[834px] w-[370px]" data-name="Container">
      <Button48 />
      <Button49 />
      <Button50 />
    </div>
  );
}

function Container274() {
  return (
    <div className="absolute h-[908px] left-0 top-[72px] w-[369.6px]" data-name="Container">
      <Container271 />
      <Container273 />
    </div>
  );
}

function Container275() {
  return (
    <div className="absolute h-[980px] left-0 overflow-clip shadow-[0px_25px_50px_-12px_rgba(0,0,0,0.25),0px_0px_0px_0px_rgba(0,0,0,0),0px_0px_0px_0px_rgba(0,0,0,0)] top-0 w-[369.6px]" data-name="Container" style={{ backgroundImage: "linear-gradient(110.664deg, rgb(239, 246, 255) 25%, rgb(250, 245, 255) 60.355%, rgb(240, 253, 244) 95.711%)" }}>
      <Container258 />
      <Container274 />
    </div>
  );
}

function Container276() {
  return (
    <div className="absolute bg-[#f3f4f6] h-[980px] left-0 top-0 w-[369.6px]" data-name="Container">
      <Container275 />
    </div>
  );
}

function Container277() {
  return (
    <div className="absolute h-[980px] left-0 top-0 w-[369.6px]" data-name="Container">
      <Container276 />
    </div>
  );
}

function Component15AllTimeHistory() {
  return (
    <div className="absolute bg-white h-[980px] left-[3150px] top-[1090px] w-[369.6px]" data-name="15. All_time_history">
      <Container277 />
    </div>
  );
}

function Container278() {
  return <div className="absolute h-[100px] left-[24px] top-[36px] w-[107.188px]" data-name="Container" />;
}

function Heading31() {
  return (
    <div className="absolute h-[28px] left-[25.48px] overflow-clip top-0 w-[56.237px]" data-name="Heading">
      <div className="absolute flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold h-[24px] justify-center leading-[0] left-0 not-italic text-[#111827] text-[15.3px] top-[13.6px] translate-y-[-50%] w-[56.238px]">
        <p className="leading-[28px]">History</p>
      </div>
    </div>
  );
}

function Container279() {
  return (
    <div className="absolute h-[28px] left-[131.2px] top-[22px] w-[107.188px]" data-name="Container">
      <Heading31 />
    </div>
  );
}

function Container280() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.5)] h-[72px] left-0 top-0 w-[369.6px]" data-name="Container">
      <Container278 />
      <Container279 />
    </div>
  );
}

function Button51() {
  return (
    <div className="absolute bg-white h-[36px] left-0 rounded-[9999px] top-0 w-[83.787px]" data-name="Button">
      <div className="absolute flex flex-col font-['Inter:Medium',sans-serif] font-medium h-[18.4px] justify-center leading-[0] left-[41.89px] not-italic text-[#4b5563] text-[11.9px] text-center top-[18px] translate-x-[-50%] translate-y-[-50%] w-[51.787px]">
        <p className="leading-[20px]">All Time</p>
      </div>
    </div>
  );
}

function Button52() {
  return (
    <div className="absolute bg-[#111827] h-[36px] left-[91.79px] rounded-[9999px] top-0 w-[96.488px]" data-name="Button">
      <div className="absolute flex flex-col font-['Inter:Medium',sans-serif] font-medium h-[18.4px] justify-center leading-[0] left-[48.24px] not-italic text-[11.9px] text-center text-white top-[18px] translate-x-[-50%] translate-y-[-50%] w-[64.488px]">
        <p className="leading-[20px]">Last week</p>
      </div>
    </div>
  );
}

function Button53() {
  return (
    <div className="absolute bg-white h-[36px] left-[196.28px] rounded-[9999px] top-0 w-[103.775px]" data-name="Button">
      <div className="absolute flex flex-col font-['Inter:Medium',sans-serif] font-medium h-[18.4px] justify-center leading-[0] left-[51.89px] not-italic text-[#4b5563] text-[11.9px] text-center top-[18px] translate-x-[-50%] translate-y-[-50%] w-[71.775px]">
        <p className="leading-[20px]">Last month</p>
      </div>
    </div>
  );
}

function Container281() {
  return (
    <div className="absolute h-[44px] left-[24px] top-[24px] w-[321.6px]" data-name="Container">
      <Button51 />
      <Button52 />
      <Button53 />
    </div>
  );
}

function Span37() {
  return (
    <div className="absolute h-[16px] left-0 top-0 w-[40.675px]" data-name="Span">
      <div className="absolute flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[16px] justify-center leading-[0] left-0 not-italic text-[#9ca3af] text-[10.2px] top-[8px] translate-y-[-50%] w-[40.675px]">
        <p className="leading-[16px]">Today</p>
      </div>
    </div>
  );
}

function Span38() {
  return (
    <div className="absolute h-[28px] left-[244.54px] top-0 w-[27.462px]" data-name="Span">
      <div className="absolute flex flex-col font-['Inter:Light',sans-serif] font-light h-[26.4px] justify-center leading-[0] left-0 not-italic text-[#111827] text-[17px] top-[14px] translate-y-[-50%] w-[27.463px]">
        <p className="leading-[28px]">😊</p>
      </div>
    </div>
  );
}

function Container282() {
  return (
    <div className="absolute h-[28px] left-[24.8px] top-[24.8px] w-[272px]" data-name="Container">
      <Span37 />
      <Span38 />
    </div>
  );
}

function Heading32() {
  return (
    <div className="absolute h-[24px] left-[24.8px] top-[60.8px] w-[272px]" data-name="Heading">
      <div className="absolute flex flex-col font-['Inter:Medium',sans-serif] font-medium h-[21.6px] justify-center leading-[0] left-0 not-italic text-[#111827] text-[13.6px] top-[11.6px] translate-y-[-50%] w-[263.6px]">
        <p className="leading-[24px]">Ask one person how their day is going</p>
      </div>
    </div>
  );
}

function Paragraph44() {
  return (
    <div className="absolute font-['Inter:Light',sans-serif] font-light h-[20px] leading-[0] left-[24.8px] not-italic text-[#6b7280] text-[11.9px] top-[88.8px] w-[272px]" data-name="Paragraph">
      <div className="absolute flex flex-col h-[18.4px] justify-center left-0 top-[10px] translate-y-[-50%] w-[4.538px]">
        <p className="leading-[20px]">{`"`}</p>
      </div>
      <div className="absolute flex flex-col h-[18.4px] justify-center left-[4.54px] top-[10px] translate-y-[-50%] w-[138.862px]">
        <p className="leading-[20px]">The barista smiled back!</p>
      </div>
      <div className="absolute flex flex-col h-[18.4px] justify-center left-[143.4px] top-[10px] translate-y-[-50%] w-[4.538px]">
        <p className="leading-[20px]">{`"`}</p>
      </div>
    </div>
  );
}

function Container283() {
  return (
    <div className="absolute bg-white border-0 border-[rgba(255,255,255,0.5)] border-solid h-[133.6px] left-0 rounded-[16px] shadow-[0px_4px_6px_-4px_rgba(30,58,138,0.05),0px_10px_15px_-3px_rgba(30,58,138,0.05),0px_0px_0px_0px_rgba(0,0,0,0),0px_0px_0px_0px_rgba(0,0,0,0)] top-0 w-[321.6px]" data-name="Container">
      <Container282 />
      <Heading32 />
      <Paragraph44 />
    </div>
  );
}

function Span39() {
  return (
    <div className="absolute h-[16px] left-0 top-0 w-[67.838px]" data-name="Span">
      <div className="absolute flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[16px] justify-center leading-[0] left-0 not-italic text-[#9ca3af] text-[10.2px] top-[8px] translate-y-[-50%] w-[67.838px]">
        <p className="leading-[16px]">Yesterday</p>
      </div>
    </div>
  );
}

function Span40() {
  return (
    <div className="absolute h-[28px] left-[244.54px] top-0 w-[27.462px]" data-name="Span">
      <div className="absolute flex flex-col font-['Inter:Light',sans-serif] font-light h-[26.4px] justify-center leading-[0] left-0 not-italic text-[#111827] text-[17px] top-[14px] translate-y-[-50%] w-[27.463px]">
        <p className="leading-[28px]">😐</p>
      </div>
    </div>
  );
}

function Container284() {
  return (
    <div className="absolute h-[28px] left-[24.8px] top-[24.8px] w-[272px]" data-name="Container">
      <Span39 />
      <Span40 />
    </div>
  );
}

function Heading33() {
  return (
    <div className="absolute h-[24px] left-[24.8px] top-[60.8px] w-[272px]" data-name="Heading">
      <div className="absolute flex flex-col font-['Inter:Medium',sans-serif] font-medium h-[21.6px] justify-center leading-[0] left-0 not-italic text-[#111827] text-[13.6px] top-[11.6px] translate-y-[-50%] w-[128.175px]">
        <p className="leading-[24px]">Smile at a stranger</p>
      </div>
    </div>
  );
}

function Paragraph45() {
  return (
    <div className="absolute font-['Inter:Light',sans-serif] font-light h-[20px] leading-[0] left-[24.8px] not-italic text-[#6b7280] text-[11.9px] top-[88.8px] w-[272px]" data-name="Paragraph">
      <div className="absolute flex flex-col h-[18.4px] justify-center left-0 top-[10px] translate-y-[-50%] w-[4.538px]">
        <p className="leading-[20px]">{`"`}</p>
      </div>
      <div className="absolute flex flex-col h-[18.4px] justify-center left-[4.54px] top-[10px] translate-y-[-50%] w-[163.3px]">
        <p className="leading-[20px]">Felt a bit awkward but did it.</p>
      </div>
      <div className="absolute flex flex-col h-[18.4px] justify-center left-[167.84px] top-[10px] translate-y-[-50%] w-[4.538px]">
        <p className="leading-[20px]">{`"`}</p>
      </div>
    </div>
  );
}

function Container285() {
  return (
    <div className="absolute bg-white border-0 border-[rgba(255,255,255,0.5)] border-solid h-[133.6px] left-0 rounded-[16px] shadow-[0px_4px_6px_-4px_rgba(30,58,138,0.05),0px_10px_15px_-3px_rgba(30,58,138,0.05),0px_0px_0px_0px_rgba(0,0,0,0),0px_0px_0px_0px_rgba(0,0,0,0)] top-[149.6px] w-[321.6px]" data-name="Container">
      <Container284 />
      <Heading33 />
      <Paragraph45 />
    </div>
  );
}

function Span41() {
  return (
    <div className="absolute h-[16px] left-0 top-0 w-[42.538px]" data-name="Span">
      <div className="absolute flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[16px] justify-center leading-[0] left-0 not-italic text-[#9ca3af] text-[10.2px] top-[8px] translate-y-[-50%] w-[42.538px]">
        <p className="leading-[16px]">Oct 24</p>
      </div>
    </div>
  );
}

function Span42() {
  return (
    <div className="absolute h-[28px] left-[244.54px] top-0 w-[27.462px]" data-name="Span">
      <div className="absolute flex flex-col font-['Inter:Light',sans-serif] font-light h-[26.4px] justify-center leading-[0] left-0 not-italic text-[#111827] text-[17px] top-[14px] translate-y-[-50%] w-[27.463px]">
        <p className="leading-[28px]">😊</p>
      </div>
    </div>
  );
}

function Container286() {
  return (
    <div className="absolute h-[28px] left-[24.8px] top-[24.8px] w-[272px]" data-name="Container">
      <Span41 />
      <Span42 />
    </div>
  );
}

function Heading34() {
  return (
    <div className="absolute h-[24px] left-[24.8px] top-[60.8px] w-[272px]" data-name="Heading">
      <div className="absolute flex flex-col font-['Inter:Medium',sans-serif] font-medium h-[21.6px] justify-center leading-[0] left-0 not-italic text-[#111827] text-[13.6px] top-[11.6px] translate-y-[-50%] w-[204.975px]">
        <p className="leading-[24px]">{`Compliment someone's shoes`}</p>
      </div>
    </div>
  );
}

function Paragraph46() {
  return (
    <div className="absolute font-['Inter:Light',sans-serif] font-light h-[20px] leading-[0] left-[24.8px] not-italic text-[#6b7280] text-[11.9px] top-[88.8px] w-[272px]" data-name="Paragraph">
      <div className="absolute flex flex-col h-[18.4px] justify-center left-0 top-[10px] translate-y-[-50%] w-[4.538px]">
        <p className="leading-[20px]">{`"`}</p>
      </div>
      <div className="absolute flex flex-col h-[18.4px] justify-center left-[4.54px] top-[10px] translate-y-[-50%] w-[135.25px]">
        <p className="leading-[20px]">They were really happy.</p>
      </div>
      <div className="absolute flex flex-col h-[18.4px] justify-center left-[139.79px] top-[10px] translate-y-[-50%] w-[4.537px]">
        <p className="leading-[20px]">{`"`}</p>
      </div>
    </div>
  );
}

function Container287() {
  return (
    <div className="absolute bg-white border-0 border-[rgba(255,255,255,0.5)] border-solid h-[133.6px] left-0 rounded-[16px] shadow-[0px_4px_6px_-4px_rgba(30,58,138,0.05),0px_10px_15px_-3px_rgba(30,58,138,0.05),0px_0px_0px_0px_rgba(0,0,0,0),0px_0px_0px_0px_rgba(0,0,0,0)] top-[299.2px] w-[321.6px]" data-name="Container">
      <Container286 />
      <Heading34 />
      <Paragraph46 />
    </div>
  );
}

function Span43() {
  return (
    <div className="absolute h-[16px] left-0 top-0 w-[42.538px]" data-name="Span">
      <div className="absolute flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[16px] justify-center leading-[0] left-0 not-italic text-[#9ca3af] text-[10.2px] top-[8px] translate-y-[-50%] w-[42.538px]">
        <p className="leading-[16px]">Oct 23</p>
      </div>
    </div>
  );
}

function Span44() {
  return (
    <div className="absolute h-[28px] left-[244.54px] top-0 w-[27.462px]" data-name="Span">
      <div className="absolute flex flex-col font-['Inter:Light',sans-serif] font-light h-[26.4px] justify-center leading-[0] left-0 not-italic text-[#111827] text-[17px] top-[14px] translate-y-[-50%] w-[27.463px]">
        <p className="leading-[28px]">😬</p>
      </div>
    </div>
  );
}

function Container288() {
  return (
    <div className="absolute h-[28px] left-[24.8px] top-[24.8px] w-[272px]" data-name="Container">
      <Span43 />
      <Span44 />
    </div>
  );
}

function Heading35() {
  return (
    <div className="absolute h-[24px] left-[24.8px] top-[60.8px] w-[272px]" data-name="Heading">
      <div className="absolute flex flex-col font-['Inter:Medium',sans-serif] font-medium h-[21.6px] justify-center leading-[0] left-0 not-italic text-[#111827] text-[13.6px] top-[11.6px] translate-y-[-50%] w-[225.4px]">
        <p className="leading-[24px]">Say good morning to a neighbor</p>
      </div>
    </div>
  );
}

function Paragraph47() {
  return (
    <div className="absolute font-['Inter:Light',sans-serif] font-light h-[20px] leading-[0] left-[24.8px] not-italic text-[#6b7280] text-[11.9px] top-[88.8px] w-[272px]" data-name="Paragraph">
      <div className="absolute flex flex-col h-[18.4px] justify-center left-0 top-[10px] translate-y-[-50%] w-[4.538px]">
        <p className="leading-[20px]">{`"`}</p>
      </div>
      <div className="absolute flex flex-col h-[18.4px] justify-center left-[4.54px] top-[10px] translate-y-[-50%] w-[118.125px]">
        <p className="leading-[20px]">{`They didn't hear me.`}</p>
      </div>
      <div className="absolute flex flex-col h-[18.4px] justify-center left-[122.66px] top-[10px] translate-y-[-50%] w-[4.537px]">
        <p className="leading-[20px]">{`"`}</p>
      </div>
    </div>
  );
}

function Container289() {
  return (
    <div className="absolute bg-white border-0 border-[rgba(255,255,255,0.5)] border-solid h-[133.6px] left-0 rounded-[16px] shadow-[0px_4px_6px_-4px_rgba(30,58,138,0.05),0px_10px_15px_-3px_rgba(30,58,138,0.05),0px_0px_0px_0px_rgba(0,0,0,0),0px_0px_0px_0px_rgba(0,0,0,0)] top-[448.8px] w-[321.6px]" data-name="Container">
      <Container288 />
      <Heading35 />
      <Paragraph47 />
    </div>
  );
}

function Span45() {
  return (
    <div className="absolute h-[16px] left-0 top-0 w-[42.538px]" data-name="Span">
      <div className="absolute flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[16px] justify-center leading-[0] left-0 not-italic text-[#9ca3af] text-[10.2px] top-[8px] translate-y-[-50%] w-[42.538px]">
        <p className="leading-[16px]">Oct 22</p>
      </div>
    </div>
  );
}

function Span46() {
  return (
    <div className="absolute h-[28px] left-[244.54px] top-0 w-[27.462px]" data-name="Span">
      <div className="absolute flex flex-col font-['Inter:Light',sans-serif] font-light h-[26.4px] justify-center leading-[0] left-0 not-italic text-[#111827] text-[17px] top-[14px] translate-y-[-50%] w-[27.463px]">
        <p className="leading-[28px]">😊</p>
      </div>
    </div>
  );
}

function Container290() {
  return (
    <div className="absolute h-[28px] left-[24.8px] top-[24.8px] w-[272px]" data-name="Container">
      <Span45 />
      <Span46 />
    </div>
  );
}

function Heading36() {
  return (
    <div className="absolute h-[24px] left-[24.8px] top-[60.8px] w-[272px]" data-name="Heading">
      <div className="absolute flex flex-col font-['Inter:Medium',sans-serif] font-medium h-[21.6px] justify-center leading-[0] left-0 not-italic text-[#111827] text-[13.6px] top-[11.6px] translate-y-[-50%] w-[188.512px]">
        <p className="leading-[24px]">Hold the door for someone</p>
      </div>
    </div>
  );
}

function Container291() {
  return (
    <div className="absolute bg-white border-0 border-[rgba(255,255,255,0.5)] border-solid h-[113.6px] left-0 rounded-[16px] shadow-[0px_4px_6px_-4px_rgba(30,58,138,0.05),0px_10px_15px_-3px_rgba(30,58,138,0.05),0px_0px_0px_0px_rgba(0,0,0,0),0px_0px_0px_0px_rgba(0,0,0,0)] top-[598.4px] w-[321.6px]" data-name="Container">
      <Container290 />
      <Heading36 />
    </div>
  );
}

function Container292() {
  return (
    <div className="absolute h-[712px] left-[24px] top-[92px] w-[321.6px]" data-name="Container">
      <Container283 />
      <Container285 />
      <Container287 />
      <Container289 />
      <Container291 />
    </div>
  );
}

function Container293() {
  return (
    <div className="absolute h-[828px] left-0 top-0 w-[369.6px]" data-name="Container">
      <Container281 />
      <Container292 />
    </div>
  );
}

function Frame64() {
  return (
    <div className="absolute left-0 size-[20px] top-0" data-name="Frame">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Frame">
          <path d="M6.66667 1.66667V5" id="Vector" stroke="var(--stroke-0, #9CA3AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d="M13.3333 1.66667V5" id="Vector_2" stroke="var(--stroke-0, #9CA3AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d={svgPaths.p1da67b80} id="Vector_3" stroke="var(--stroke-0, #9CA3AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d="M2.5 8.33333H17.5" id="Vector_4" stroke="var(--stroke-0, #9CA3AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Button54() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0)] left-[64.26px] size-[20px] top-[26.8px]" data-name="Button">
      <Frame64 />
    </div>
  );
}

function Frame65() {
  return (
    <div className="absolute left-[10px] size-[20px] top-[10px]" data-name="Frame">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Frame">
          <path d={svgPaths.p2110f1c0} id="Vector" stroke="var(--stroke-0, #2563EB)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d="M2.5 2.5V6.66667H6.66667" id="Vector_2" stroke="var(--stroke-0, #2563EB)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d={svgPaths.pc8ce200} id="Vector_3" stroke="var(--stroke-0, #2563EB)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Container294() {
  return (
    <div className="absolute bg-[#eff6ff] left-0 rounded-[9999px] size-[40px] top-0" data-name="Container">
      <Frame65 />
    </div>
  );
}

function Button55() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0)] left-[164.79px] size-[40px] top-[16.8px]" data-name="Button">
      <Container294 />
    </div>
  );
}

function Frame66() {
  return (
    <div className="absolute left-0 size-[20px] top-0" data-name="Frame">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Frame">
          <path d={svgPaths.p2026e800} id="Vector" stroke="var(--stroke-0, #9CA3AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d={svgPaths.p32ab0300} id="Vector_2" stroke="var(--stroke-0, #9CA3AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Button56() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0)] left-[285.31px] size-[20px] top-[26.8px]" data-name="Button">
      <Frame66 />
    </div>
  );
}

function Container295() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.8)] border-0 border-[#e5e7eb] border-solid h-[63px] left-0 top-[845px] w-[370px]" data-name="Container">
      <Button54 />
      <Button55 />
      <Button56 />
    </div>
  );
}

function Container296() {
  return (
    <div className="absolute h-[908px] left-0 top-[72px] w-[369.6px]" data-name="Container">
      <Container293 />
      <Container295 />
    </div>
  );
}

function Container297() {
  return (
    <div className="absolute h-[980px] left-0 overflow-clip shadow-[0px_25px_50px_-12px_rgba(0,0,0,0.25),0px_0px_0px_0px_rgba(0,0,0,0),0px_0px_0px_0px_rgba(0,0,0,0)] top-0 w-[369.6px]" data-name="Container" style={{ backgroundImage: "linear-gradient(110.664deg, rgb(239, 246, 255) 25%, rgb(250, 245, 255) 60.355%, rgb(240, 253, 244) 95.711%)" }}>
      <Container280 />
      <Container296 />
    </div>
  );
}

function Container298() {
  return (
    <div className="absolute bg-[#f3f4f6] h-[980px] left-0 top-0 w-[369.6px]" data-name="Container">
      <Container297 />
    </div>
  );
}

function Container299() {
  return (
    <div className="absolute h-[980px] left-0 top-0 w-[369.6px]" data-name="Container">
      <Container298 />
    </div>
  );
}

function Component16LastWeekHistory() {
  return (
    <div className="absolute bg-white h-[980px] left-[3779px] top-[1090px] w-[369.6px]" data-name="16. Last_week_history">
      <Container299 />
    </div>
  );
}

function Container300() {
  return <div className="absolute h-[100px] left-[24px] top-[36px] w-[107.188px]" data-name="Container" />;
}

function Heading37() {
  return (
    <div className="absolute h-[28px] left-[25.48px] overflow-clip top-0 w-[56.237px]" data-name="Heading">
      <div className="absolute flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold h-[24px] justify-center leading-[0] left-0 not-italic text-[#111827] text-[15.3px] top-[13.6px] translate-y-[-50%] w-[56.238px]">
        <p className="leading-[28px]">History</p>
      </div>
    </div>
  );
}

function Container301() {
  return (
    <div className="absolute h-[28px] left-[131.2px] top-[22px] w-[107.188px]" data-name="Container">
      <Heading37 />
    </div>
  );
}

function Container302() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.5)] h-[72px] left-0 top-0 w-[369.6px]" data-name="Container">
      <Container300 />
      <Container301 />
    </div>
  );
}

function Button57() {
  return (
    <div className="absolute bg-white h-[36px] left-0 rounded-[9999px] top-0 w-[83.787px]" data-name="Button">
      <div className="absolute flex flex-col font-['Inter:Medium',sans-serif] font-medium h-[18.4px] justify-center leading-[0] left-[41.89px] not-italic text-[#4b5563] text-[11.9px] text-center top-[18px] translate-x-[-50%] translate-y-[-50%] w-[51.787px]">
        <p className="leading-[20px]">All Time</p>
      </div>
    </div>
  );
}

function Button58() {
  return (
    <div className="absolute bg-white h-[36px] left-[91.79px] rounded-[9999px] top-0 w-[96.488px]" data-name="Button">
      <div className="absolute flex flex-col font-['Inter:Medium',sans-serif] font-medium h-[18.4px] justify-center leading-[0] left-[48.24px] not-italic text-[#4b5563] text-[11.9px] text-center top-[18px] translate-x-[-50%] translate-y-[-50%] w-[64.488px]">
        <p className="leading-[20px]">Last week</p>
      </div>
    </div>
  );
}

function Button59() {
  return (
    <div className="absolute bg-[#111827] h-[36px] left-[196.28px] rounded-[9999px] top-0 w-[103.775px]" data-name="Button">
      <div className="absolute flex flex-col font-['Inter:Medium',sans-serif] font-medium h-[18.4px] justify-center leading-[0] left-[51.89px] not-italic text-[11.9px] text-center text-white top-[18px] translate-x-[-50%] translate-y-[-50%] w-[71.775px]">
        <p className="leading-[20px]">Last month</p>
      </div>
    </div>
  );
}

function Container303() {
  return (
    <div className="absolute h-[44px] left-[24px] top-[24px] w-[321.6px]" data-name="Container">
      <Button57 />
      <Button58 />
      <Button59 />
    </div>
  );
}

function Span47() {
  return (
    <div className="absolute h-[16px] left-0 top-0 w-[40.675px]" data-name="Span">
      <div className="absolute flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[16px] justify-center leading-[0] left-0 not-italic text-[#9ca3af] text-[10.2px] top-[8px] translate-y-[-50%] w-[40.675px]">
        <p className="leading-[16px]">Today</p>
      </div>
    </div>
  );
}

function Span48() {
  return (
    <div className="absolute h-[28px] left-[244.54px] top-0 w-[27.462px]" data-name="Span">
      <div className="absolute flex flex-col font-['Inter:Light',sans-serif] font-light h-[26.4px] justify-center leading-[0] left-0 not-italic text-[#111827] text-[17px] top-[14px] translate-y-[-50%] w-[27.463px]">
        <p className="leading-[28px]">😊</p>
      </div>
    </div>
  );
}

function Container304() {
  return (
    <div className="absolute h-[28px] left-[24.8px] top-[24.8px] w-[272px]" data-name="Container">
      <Span47 />
      <Span48 />
    </div>
  );
}

function Heading38() {
  return (
    <div className="absolute h-[24px] left-[24.8px] top-[60.8px] w-[272px]" data-name="Heading">
      <div className="absolute flex flex-col font-['Inter:Medium',sans-serif] font-medium h-[21.6px] justify-center leading-[0] left-0 not-italic text-[#111827] text-[13.6px] top-[11.6px] translate-y-[-50%] w-[263.6px]">
        <p className="leading-[24px]">Ask one person how their day is going</p>
      </div>
    </div>
  );
}

function Paragraph48() {
  return (
    <div className="absolute font-['Inter:Light',sans-serif] font-light h-[20px] leading-[0] left-[24.8px] not-italic text-[#6b7280] text-[11.9px] top-[88.8px] w-[272px]" data-name="Paragraph">
      <div className="absolute flex flex-col h-[18.4px] justify-center left-0 top-[10px] translate-y-[-50%] w-[4.538px]">
        <p className="leading-[20px]">{`"`}</p>
      </div>
      <div className="absolute flex flex-col h-[18.4px] justify-center left-[4.54px] top-[10px] translate-y-[-50%] w-[138.862px]">
        <p className="leading-[20px]">The barista smiled back!</p>
      </div>
      <div className="absolute flex flex-col h-[18.4px] justify-center left-[143.4px] top-[10px] translate-y-[-50%] w-[4.538px]">
        <p className="leading-[20px]">{`"`}</p>
      </div>
    </div>
  );
}

function Container305() {
  return (
    <div className="absolute bg-white border-0 border-[rgba(255,255,255,0.5)] border-solid h-[133.6px] left-0 rounded-[16px] shadow-[0px_4px_6px_-4px_rgba(30,58,138,0.05),0px_10px_15px_-3px_rgba(30,58,138,0.05),0px_0px_0px_0px_rgba(0,0,0,0),0px_0px_0px_0px_rgba(0,0,0,0)] top-0 w-[321.6px]" data-name="Container">
      <Container304 />
      <Heading38 />
      <Paragraph48 />
    </div>
  );
}

function Span49() {
  return (
    <div className="absolute h-[16px] left-0 top-0 w-[67.838px]" data-name="Span">
      <div className="absolute flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[16px] justify-center leading-[0] left-0 not-italic text-[#9ca3af] text-[10.2px] top-[8px] translate-y-[-50%] w-[67.838px]">
        <p className="leading-[16px]">Yesterday</p>
      </div>
    </div>
  );
}

function Span50() {
  return (
    <div className="absolute h-[28px] left-[244.54px] top-0 w-[27.462px]" data-name="Span">
      <div className="absolute flex flex-col font-['Inter:Light',sans-serif] font-light h-[26.4px] justify-center leading-[0] left-0 not-italic text-[#111827] text-[17px] top-[14px] translate-y-[-50%] w-[27.463px]">
        <p className="leading-[28px]">😐</p>
      </div>
    </div>
  );
}

function Container306() {
  return (
    <div className="absolute h-[28px] left-[24.8px] top-[24.8px] w-[272px]" data-name="Container">
      <Span49 />
      <Span50 />
    </div>
  );
}

function Heading39() {
  return (
    <div className="absolute h-[24px] left-[24.8px] top-[60.8px] w-[272px]" data-name="Heading">
      <div className="absolute flex flex-col font-['Inter:Medium',sans-serif] font-medium h-[21.6px] justify-center leading-[0] left-0 not-italic text-[#111827] text-[13.6px] top-[11.6px] translate-y-[-50%] w-[128.175px]">
        <p className="leading-[24px]">Smile at a stranger</p>
      </div>
    </div>
  );
}

function Paragraph49() {
  return (
    <div className="absolute font-['Inter:Light',sans-serif] font-light h-[20px] leading-[0] left-[24.8px] not-italic text-[#6b7280] text-[11.9px] top-[88.8px] w-[272px]" data-name="Paragraph">
      <div className="absolute flex flex-col h-[18.4px] justify-center left-0 top-[10px] translate-y-[-50%] w-[4.538px]">
        <p className="leading-[20px]">{`"`}</p>
      </div>
      <div className="absolute flex flex-col h-[18.4px] justify-center left-[4.54px] top-[10px] translate-y-[-50%] w-[163.3px]">
        <p className="leading-[20px]">Felt a bit awkward but did it.</p>
      </div>
      <div className="absolute flex flex-col h-[18.4px] justify-center left-[167.84px] top-[10px] translate-y-[-50%] w-[4.538px]">
        <p className="leading-[20px]">{`"`}</p>
      </div>
    </div>
  );
}

function Container307() {
  return (
    <div className="absolute bg-white border-0 border-[rgba(255,255,255,0.5)] border-solid h-[133.6px] left-0 rounded-[16px] shadow-[0px_4px_6px_-4px_rgba(30,58,138,0.05),0px_10px_15px_-3px_rgba(30,58,138,0.05),0px_0px_0px_0px_rgba(0,0,0,0),0px_0px_0px_0px_rgba(0,0,0,0)] top-[149.6px] w-[321.6px]" data-name="Container">
      <Container306 />
      <Heading39 />
      <Paragraph49 />
    </div>
  );
}

function Span51() {
  return (
    <div className="absolute h-[16px] left-0 top-0 w-[42.538px]" data-name="Span">
      <div className="absolute flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[16px] justify-center leading-[0] left-0 not-italic text-[#9ca3af] text-[10.2px] top-[8px] translate-y-[-50%] w-[42.538px]">
        <p className="leading-[16px]">Oct 24</p>
      </div>
    </div>
  );
}

function Span52() {
  return (
    <div className="absolute h-[28px] left-[244.54px] top-0 w-[27.462px]" data-name="Span">
      <div className="absolute flex flex-col font-['Inter:Light',sans-serif] font-light h-[26.4px] justify-center leading-[0] left-0 not-italic text-[#111827] text-[17px] top-[14px] translate-y-[-50%] w-[27.463px]">
        <p className="leading-[28px]">😊</p>
      </div>
    </div>
  );
}

function Container308() {
  return (
    <div className="absolute h-[28px] left-[24.8px] top-[24.8px] w-[272px]" data-name="Container">
      <Span51 />
      <Span52 />
    </div>
  );
}

function Heading40() {
  return (
    <div className="absolute h-[24px] left-[24.8px] top-[60.8px] w-[272px]" data-name="Heading">
      <div className="absolute flex flex-col font-['Inter:Medium',sans-serif] font-medium h-[21.6px] justify-center leading-[0] left-0 not-italic text-[#111827] text-[13.6px] top-[11.6px] translate-y-[-50%] w-[204.975px]">
        <p className="leading-[24px]">{`Compliment someone's shoes`}</p>
      </div>
    </div>
  );
}

function Paragraph50() {
  return (
    <div className="absolute font-['Inter:Light',sans-serif] font-light h-[20px] leading-[0] left-[24.8px] not-italic text-[#6b7280] text-[11.9px] top-[88.8px] w-[272px]" data-name="Paragraph">
      <div className="absolute flex flex-col h-[18.4px] justify-center left-0 top-[10px] translate-y-[-50%] w-[4.538px]">
        <p className="leading-[20px]">{`"`}</p>
      </div>
      <div className="absolute flex flex-col h-[18.4px] justify-center left-[4.54px] top-[10px] translate-y-[-50%] w-[135.25px]">
        <p className="leading-[20px]">They were really happy.</p>
      </div>
      <div className="absolute flex flex-col h-[18.4px] justify-center left-[139.79px] top-[10px] translate-y-[-50%] w-[4.537px]">
        <p className="leading-[20px]">{`"`}</p>
      </div>
    </div>
  );
}

function Container309() {
  return (
    <div className="absolute bg-white border-0 border-[rgba(255,255,255,0.5)] border-solid h-[133.6px] left-0 rounded-[16px] shadow-[0px_4px_6px_-4px_rgba(30,58,138,0.05),0px_10px_15px_-3px_rgba(30,58,138,0.05),0px_0px_0px_0px_rgba(0,0,0,0),0px_0px_0px_0px_rgba(0,0,0,0)] top-[299.2px] w-[321.6px]" data-name="Container">
      <Container308 />
      <Heading40 />
      <Paragraph50 />
    </div>
  );
}

function Span53() {
  return (
    <div className="absolute h-[16px] left-0 top-0 w-[42.538px]" data-name="Span">
      <div className="absolute flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[16px] justify-center leading-[0] left-0 not-italic text-[#9ca3af] text-[10.2px] top-[8px] translate-y-[-50%] w-[42.538px]">
        <p className="leading-[16px]">Oct 23</p>
      </div>
    </div>
  );
}

function Span54() {
  return (
    <div className="absolute h-[28px] left-[244.54px] top-0 w-[27.462px]" data-name="Span">
      <div className="absolute flex flex-col font-['Inter:Light',sans-serif] font-light h-[26.4px] justify-center leading-[0] left-0 not-italic text-[#111827] text-[17px] top-[14px] translate-y-[-50%] w-[27.463px]">
        <p className="leading-[28px]">😬</p>
      </div>
    </div>
  );
}

function Container310() {
  return (
    <div className="absolute h-[28px] left-[24.8px] top-[24.8px] w-[272px]" data-name="Container">
      <Span53 />
      <Span54 />
    </div>
  );
}

function Heading41() {
  return (
    <div className="absolute h-[24px] left-[24.8px] top-[60.8px] w-[272px]" data-name="Heading">
      <div className="absolute flex flex-col font-['Inter:Medium',sans-serif] font-medium h-[21.6px] justify-center leading-[0] left-0 not-italic text-[#111827] text-[13.6px] top-[11.6px] translate-y-[-50%] w-[225.4px]">
        <p className="leading-[24px]">Say good morning to a neighbor</p>
      </div>
    </div>
  );
}

function Paragraph51() {
  return (
    <div className="absolute font-['Inter:Light',sans-serif] font-light h-[20px] leading-[0] left-[24.8px] not-italic text-[#6b7280] text-[11.9px] top-[88.8px] w-[272px]" data-name="Paragraph">
      <div className="absolute flex flex-col h-[18.4px] justify-center left-0 top-[10px] translate-y-[-50%] w-[4.538px]">
        <p className="leading-[20px]">{`"`}</p>
      </div>
      <div className="absolute flex flex-col h-[18.4px] justify-center left-[4.54px] top-[10px] translate-y-[-50%] w-[118.125px]">
        <p className="leading-[20px]">{`They didn't hear me.`}</p>
      </div>
      <div className="absolute flex flex-col h-[18.4px] justify-center left-[122.66px] top-[10px] translate-y-[-50%] w-[4.537px]">
        <p className="leading-[20px]">{`"`}</p>
      </div>
    </div>
  );
}

function Container311() {
  return (
    <div className="absolute bg-white border-0 border-[rgba(255,255,255,0.5)] border-solid h-[133.6px] left-0 rounded-[16px] shadow-[0px_4px_6px_-4px_rgba(30,58,138,0.05),0px_10px_15px_-3px_rgba(30,58,138,0.05),0px_0px_0px_0px_rgba(0,0,0,0),0px_0px_0px_0px_rgba(0,0,0,0)] top-[448.8px] w-[321.6px]" data-name="Container">
      <Container310 />
      <Heading41 />
      <Paragraph51 />
    </div>
  );
}

function Span55() {
  return (
    <div className="absolute h-[16px] left-0 top-0 w-[42.538px]" data-name="Span">
      <div className="absolute flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[16px] justify-center leading-[0] left-0 not-italic text-[#9ca3af] text-[10.2px] top-[8px] translate-y-[-50%] w-[42.538px]">
        <p className="leading-[16px]">Oct 22</p>
      </div>
    </div>
  );
}

function Span56() {
  return (
    <div className="absolute h-[28px] left-[244.54px] top-0 w-[27.462px]" data-name="Span">
      <div className="absolute flex flex-col font-['Inter:Light',sans-serif] font-light h-[26.4px] justify-center leading-[0] left-0 not-italic text-[#111827] text-[17px] top-[14px] translate-y-[-50%] w-[27.463px]">
        <p className="leading-[28px]">😊</p>
      </div>
    </div>
  );
}

function Container312() {
  return (
    <div className="absolute h-[28px] left-[24.8px] top-[24.8px] w-[272px]" data-name="Container">
      <Span55 />
      <Span56 />
    </div>
  );
}

function Heading42() {
  return (
    <div className="absolute h-[24px] left-[24.8px] top-[60.8px] w-[272px]" data-name="Heading">
      <div className="absolute flex flex-col font-['Inter:Medium',sans-serif] font-medium h-[21.6px] justify-center leading-[0] left-0 not-italic text-[#111827] text-[13.6px] top-[11.6px] translate-y-[-50%] w-[188.512px]">
        <p className="leading-[24px]">Hold the door for someone</p>
      </div>
    </div>
  );
}

function Container313() {
  return (
    <div className="absolute bg-white border-0 border-[rgba(255,255,255,0.5)] border-solid h-[113.6px] left-0 rounded-[16px] shadow-[0px_4px_6px_-4px_rgba(30,58,138,0.05),0px_10px_15px_-3px_rgba(30,58,138,0.05),0px_0px_0px_0px_rgba(0,0,0,0),0px_0px_0px_0px_rgba(0,0,0,0)] top-[598.4px] w-[321.6px]" data-name="Container">
      <Container312 />
      <Heading42 />
    </div>
  );
}

function Container314() {
  return (
    <div className="absolute h-[712px] left-[24px] top-[92px] w-[321.6px]" data-name="Container">
      <Container305 />
      <Container307 />
      <Container309 />
      <Container311 />
      <Container313 />
    </div>
  );
}

function Container315() {
  return (
    <div className="absolute h-[828px] left-0 top-0 w-[369.6px]" data-name="Container">
      <Container303 />
      <Container314 />
    </div>
  );
}

function Frame67() {
  return (
    <div className="absolute left-0 overflow-clip size-[20px] top-0" data-name="Frame">
      <div className="absolute bottom-3/4 left-[33.33%] right-[66.67%] top-[8.33%]" data-name="Vector">
        <div className="absolute inset-[-30%_-1px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2 5.33333">
            <path d="M1 1V4.33333" id="Vector" stroke="var(--stroke-0, #9CA3AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          </svg>
        </div>
      </div>
      <div className="absolute bottom-3/4 left-[66.67%] right-[33.33%] top-[8.33%]" data-name="Vector">
        <div className="absolute inset-[-30%_-1px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2 5.33333">
            <path d="M1 1V4.33333" id="Vector" stroke="var(--stroke-0, #9CA3AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[16.67%_12.5%_8.33%_12.5%]" data-name="Vector">
        <div className="absolute inset-[-6.67%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17 17">
            <path d={svgPaths.p326c3800} id="Vector" stroke="var(--stroke-0, #9CA3AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[41.67%_12.5%_58.33%_12.5%]" data-name="Vector">
        <div className="absolute inset-[-1px_-6.67%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17 2">
            <path d="M1 1H16" id="Vector" stroke="var(--stroke-0, #9CA3AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Button60() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0)] left-[64.26px] size-[20px] top-[26.8px]" data-name="Button">
      <Frame67 />
    </div>
  );
}

function Frame68() {
  return (
    <div className="absolute left-[10px] size-[20px] top-[10px]" data-name="Frame">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Frame">
          <path d={svgPaths.p2110f1c0} id="Vector" stroke="var(--stroke-0, #2563EB)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d="M2.5 2.5V6.66667H6.66667" id="Vector_2" stroke="var(--stroke-0, #2563EB)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d={svgPaths.pc8ce200} id="Vector_3" stroke="var(--stroke-0, #2563EB)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Container316() {
  return (
    <div className="absolute bg-[#eff6ff] left-0 rounded-[9999px] size-[40px] top-0" data-name="Container">
      <Frame68 />
    </div>
  );
}

function Button61() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0)] left-[164.79px] size-[40px] top-[16.8px]" data-name="Button">
      <Container316 />
    </div>
  );
}

function Frame69() {
  return (
    <div className="absolute left-0 size-[20px] top-0" data-name="Frame">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Frame">
          <path d={svgPaths.p2026e800} id="Vector" stroke="var(--stroke-0, #9CA3AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d={svgPaths.p32ab0300} id="Vector_2" stroke="var(--stroke-0, #9CA3AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Button62() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0)] left-[285.31px] size-[20px] top-[26.8px]" data-name="Button">
      <Frame69 />
    </div>
  );
}

function Container317() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.8)] border-0 border-[#e5e7eb] border-solid h-[67px] left-0 top-[841px] w-[370px]" data-name="Container">
      <Button60 />
      <Button61 />
      <Button62 />
    </div>
  );
}

function Container318() {
  return (
    <div className="absolute h-[908px] left-0 top-[72px] w-[369.6px]" data-name="Container">
      <Container315 />
      <Container317 />
    </div>
  );
}

function Container319() {
  return (
    <div className="absolute h-[980px] left-0 overflow-clip shadow-[0px_25px_50px_-12px_rgba(0,0,0,0.25),0px_0px_0px_0px_rgba(0,0,0,0),0px_0px_0px_0px_rgba(0,0,0,0)] top-0 w-[369.6px]" data-name="Container" style={{ backgroundImage: "linear-gradient(110.664deg, rgb(239, 246, 255) 25%, rgb(250, 245, 255) 60.355%, rgb(240, 253, 244) 95.711%)" }}>
      <Container302 />
      <Container318 />
    </div>
  );
}

function Container320() {
  return (
    <div className="absolute bg-[#f3f4f6] h-[980px] left-0 top-0 w-[369.6px]" data-name="Container">
      <Container319 />
    </div>
  );
}

function Container321() {
  return (
    <div className="absolute h-[980px] left-0 top-0 w-[369.6px]" data-name="Container">
      <Container320 />
    </div>
  );
}

function Component17LastMonthHistory() {
  return (
    <div className="absolute bg-white h-[980px] left-[4408px] top-[1090px] w-[369.6px]" data-name="17. Last_month_history">
      <Container321 />
    </div>
  );
}

function Frame70() {
  return (
    <div className="absolute left-[8px] size-[24px] top-[8px]" data-name="Frame">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Frame">
          <path d="M12 19L5 12L12 5" id="Vector" stroke="var(--stroke-0, #374151)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d="M19 12H5" id="Vector_2" stroke="var(--stroke-0, #374151)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Button63() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0)] left-[-8px] rounded-[9999px] size-[40px] top-0" data-name="Button">
      <Frame70 />
    </div>
  );
}

function Container322() {
  return (
    <div className="absolute h-[40px] left-[24px] top-[16px] w-[32px]" data-name="Container">
      <Button63 />
    </div>
  );
}

function Heading43() {
  return (
    <div className="absolute h-[28px] left-[10.82px] overflow-clip top-0 w-[87.4px]" data-name="Heading">
      <div className="absolute flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold h-[24px] justify-center leading-[0] left-0 not-italic text-[#111827] text-[15.3px] top-[13.6px] translate-y-[-50%] w-[87.4px]">
        <p className="leading-[28px]">Your Streak</p>
      </div>
    </div>
  );
}

function Container323() {
  return (
    <div className="absolute h-[28px] left-[133.06px] top-[22px] w-[109.063px]" data-name="Container">
      <Heading43 />
    </div>
  );
}

function Container324() {
  return <div className="absolute h-[100px] left-[242.13px] top-[36px] w-[109.063px]" data-name="Container" />;
}

function Container325() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.5)] h-[72px] left-0 top-0 w-[375.2px]" data-name="Container">
      <Container322 />
      <Container323 />
      <Container324 />
    </div>
  );
}

function Container326() {
  return <div className="absolute bg-[rgba(251,146,60,0.2)] blur-md filter left-0 rounded-[9999px] size-[96px] top-0" data-name="Container" />;
}

function Frame71() {
  return (
    <div className="absolute left-[24px] size-[48px] top-[24px]" data-name="Frame">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 48 48">
        <g id="Frame">
          <path d={svgPaths.p38a8d4f0} id="Vector" stroke="var(--stroke-0, #F97316)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Container327() {
  return (
    <div className="absolute bg-[#ffedd5] left-[115.6px] rounded-[9999px] size-[96px] top-0" data-name="Container">
      <Container326 />
      <Frame71 />
    </div>
  );
}

function Heading44() {
  return (
    <div className="absolute h-[48px] left-0 top-[120px] w-[327.2px]" data-name="Heading">
      <div className="absolute flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[64px] justify-center leading-[0] left-[163.6px] not-italic text-[#111827] text-[40.8px] text-center top-[24px] translate-x-[-50%] translate-y-[-50%] w-[52.825px]">
        <p className="leading-[48px]">13</p>
      </div>
    </div>
  );
}

function Paragraph52() {
  return (
    <div className="absolute h-[24px] left-0 top-[176px] w-[327.2px]" data-name="Paragraph">
      <div className="absolute flex flex-col font-['Inter:Medium',sans-serif] font-medium h-[21.6px] justify-center leading-[0] left-[163.59px] not-italic text-[#6b7280] text-[13.6px] text-center top-[11.6px] translate-x-[-50%] translate-y-[-50%] w-[94.837px]">
        <p className="leading-[24px]">Day Streak</p>
      </div>
    </div>
  );
}

function Container328() {
  return (
    <div className="absolute h-[200px] left-0 top-[32px] w-[327.2px]" data-name="Container">
      <Container327 />
      <Heading44 />
      <Paragraph52 />
    </div>
  );
}

function Heading45() {
  return (
    <div className="absolute h-[24px] left-0 top-0 w-[73.325px]" data-name="Heading">
      <div className="absolute flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[21.6px] justify-center leading-[0] left-0 not-italic text-[#111827] text-[13.6px] top-[11.6px] translate-y-[-50%] w-[73.325px]">
        <p className="leading-[24px]">This Week</p>
      </div>
    </div>
  );
}

function Span57() {
  return (
    <div className="absolute h-[20px] left-[189.31px] top-[2px] w-[88.287px]" data-name="Span">
      <div className="absolute flex flex-col font-['Inter:Light',sans-serif] font-light h-[18.4px] justify-center leading-[0] left-0 not-italic text-[#6b7280] text-[11.9px] top-[10px] translate-y-[-50%] w-[88.287px]">
        <p className="leading-[20px]">4/7 Completed</p>
      </div>
    </div>
  );
}

function Container329() {
  return (
    <div className="absolute h-[24px] left-[24.8px] top-[24.8px] w-[277.6px]" data-name="Container">
      <Heading45 />
      <Span57 />
    </div>
  );
}

function Frame72() {
  return (
    <div className="absolute left-[10px] size-[12px] top-[10px]" data-name="Frame">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="Frame">
          <path d={svgPaths.p5a7a980} fill="var(--fill-0, black)" id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Container330() {
  return (
    <div className="absolute bg-[#f97316] left-0 rounded-[9999px] shadow-[0px_2px_4px_-2px_#fed7aa,0px_4px_6px_-1px_#fed7aa,0px_0px_0px_0px_rgba(0,0,0,0),0px_0px_0px_0px_rgba(0,0,0,0)] size-[32px] top-0" data-name="Container">
      <Frame72 />
    </div>
  );
}

function Span58() {
  return (
    <div className="absolute h-[16px] left-[10.45px] top-[40px] w-[11.1px]" data-name="Span">
      <div className="absolute flex flex-col font-['Inter:Medium',sans-serif] font-medium h-[16px] justify-center leading-[0] left-0 not-italic text-[#9ca3af] text-[10.2px] top-[8px] translate-y-[-50%] w-[11.1px]">
        <p className="leading-[16px]">M</p>
      </div>
    </div>
  );
}

function Container331() {
  return (
    <div className="absolute h-[56px] left-0 top-0 w-[32px]" data-name="Container">
      <Container330 />
      <Span58 />
    </div>
  );
}

function Frame73() {
  return (
    <div className="absolute left-[10px] size-[12px] top-[10px]" data-name="Frame">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="Frame">
          <path d={svgPaths.p5a7a980} fill="var(--fill-0, black)" id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Container332() {
  return (
    <div className="absolute bg-[#f97316] left-0 rounded-[9999px] shadow-[0px_2px_4px_-2px_#fed7aa,0px_4px_6px_-1px_#fed7aa,0px_0px_0px_0px_rgba(0,0,0,0),0px_0px_0px_0px_rgba(0,0,0,0)] size-[32px] top-0" data-name="Container">
      <Frame73 />
    </div>
  );
}

function Span59() {
  return (
    <div className="absolute h-[16px] left-[12.69px] top-[40px] w-[6.625px]" data-name="Span">
      <div className="absolute flex flex-col font-['Inter:Medium',sans-serif] font-medium h-[16px] justify-center leading-[0] left-0 not-italic text-[#9ca3af] text-[10.2px] top-[8px] translate-y-[-50%] w-[6.625px]">
        <p className="leading-[16px]">T</p>
      </div>
    </div>
  );
}

function Container333() {
  return (
    <div className="absolute h-[56px] left-[40.92px] top-0 w-[32px]" data-name="Container">
      <Container332 />
      <Span59 />
    </div>
  );
}

function Frame74() {
  return (
    <div className="absolute left-[10px] size-[12px] top-[10px]" data-name="Frame">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="Frame">
          <path d={svgPaths.p5a7a980} fill="var(--fill-0, black)" id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Container334() {
  return (
    <div className="absolute bg-[#f97316] left-0 rounded-[9999px] shadow-[0px_2px_4px_-2px_#fed7aa,0px_4px_6px_-1px_#fed7aa,0px_0px_0px_0px_rgba(0,0,0,0),0px_0px_0px_0px_rgba(0,0,0,0)] size-[32px] top-0" data-name="Container">
      <Frame74 />
    </div>
  );
}

function Span60() {
  return (
    <div className="absolute h-[16px] left-[10.2px] top-[40px] w-[11.6px]" data-name="Span">
      <div className="absolute flex flex-col font-['Inter:Medium',sans-serif] font-medium h-[16px] justify-center leading-[0] left-0 not-italic text-[#9ca3af] text-[10.2px] top-[8px] translate-y-[-50%] w-[11.6px]">
        <p className="leading-[16px]">W</p>
      </div>
    </div>
  );
}

function Container335() {
  return (
    <div className="absolute h-[56px] left-[81.85px] top-0 w-[32px]" data-name="Container">
      <Container334 />
      <Span60 />
    </div>
  );
}

function Frame75() {
  return (
    <div className="absolute left-[10px] size-[12px] top-[10px]" data-name="Frame">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="Frame">
          <path d={svgPaths.p5a7a980} fill="var(--fill-0, black)" id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Container336() {
  return (
    <div className="absolute bg-[#f97316] left-0 rounded-[9999px] shadow-[0px_2px_4px_-2px_#fed7aa,0px_4px_6px_-1px_#fed7aa,0px_0px_0px_0px_rgba(0,0,0,0),0px_0px_0px_0px_rgba(0,0,0,0)] size-[32px] top-0" data-name="Container">
      <Frame75 />
    </div>
  );
}

function Span61() {
  return (
    <div className="absolute h-[16px] left-[12.69px] top-[40px] w-[6.625px]" data-name="Span">
      <div className="absolute flex flex-col font-['Inter:Medium',sans-serif] font-medium h-[16px] justify-center leading-[0] left-0 not-italic text-[#9ca3af] text-[10.2px] top-[8px] translate-y-[-50%] w-[6.625px]">
        <p className="leading-[16px]">T</p>
      </div>
    </div>
  );
}

function Container337() {
  return (
    <div className="absolute h-[56px] left-[122.77px] top-0 w-[32px]" data-name="Container">
      <Container336 />
      <Span61 />
    </div>
  );
}

function Container338() {
  return <div className="absolute bg-[#f3f4f6] left-0 rounded-[9999px] size-[32px] top-0" data-name="Container" />;
}

function Span62() {
  return (
    <div className="absolute h-[16px] left-[12.98px] top-[40px] w-[6.037px]" data-name="Span">
      <div className="absolute flex flex-col font-['Inter:Medium',sans-serif] font-medium h-[16px] justify-center leading-[0] left-0 not-italic text-[#9ca3af] text-[10.2px] top-[8px] translate-y-[-50%] w-[6.037px]">
        <p className="leading-[16px]">F</p>
      </div>
    </div>
  );
}

function Container339() {
  return (
    <div className="absolute h-[56px] left-[163.7px] top-0 w-[32px]" data-name="Container">
      <Container338 />
      <Span62 />
    </div>
  );
}

function Container340() {
  return <div className="absolute bg-[#f3f4f6] left-0 rounded-[9999px] size-[32px] top-0" data-name="Container" />;
}

function Span63() {
  return (
    <div className="absolute h-[16px] left-[12.72px] top-[40px] w-[6.537px]" data-name="Span">
      <div className="absolute flex flex-col font-['Inter:Medium',sans-serif] font-medium h-[16px] justify-center leading-[0] left-0 not-italic text-[#9ca3af] text-[10.2px] top-[8px] translate-y-[-50%] w-[6.538px]">
        <p className="leading-[16px]">S</p>
      </div>
    </div>
  );
}

function Container341() {
  return (
    <div className="absolute h-[56px] left-[204.63px] top-0 w-[32px]" data-name="Container">
      <Container340 />
      <Span63 />
    </div>
  );
}

function Container342() {
  return <div className="absolute bg-[#f3f4f6] left-0 rounded-[9999px] size-[32px] top-0" data-name="Container" />;
}

function Span64() {
  return (
    <div className="absolute h-[16px] left-[12.73px] top-[40px] w-[6.537px]" data-name="Span">
      <div className="absolute flex flex-col font-['Inter:Medium',sans-serif] font-medium h-[16px] justify-center leading-[0] left-0 not-italic text-[#9ca3af] text-[10.2px] top-[8px] translate-y-[-50%] w-[6.538px]">
        <p className="leading-[16px]">S</p>
      </div>
    </div>
  );
}

function Container343() {
  return (
    <div className="absolute h-[56px] left-[245.55px] top-0 w-[32px]" data-name="Container">
      <Container342 />
      <Span64 />
    </div>
  );
}

function Container344() {
  return (
    <div className="absolute h-[56px] left-[24.8px] top-[72.8px] w-[277.6px]" data-name="Container">
      <Container331 />
      <Container333 />
      <Container335 />
      <Container337 />
      <Container339 />
      <Container341 />
      <Container343 />
    </div>
  );
}

function Container345() {
  return (
    <div className="absolute bg-white border-0 border-[rgba(255,255,255,0.5)] border-solid h-[153.6px] left-0 rounded-[16px] shadow-[0px_4px_6px_-4px_rgba(30,58,138,0.05),0px_10px_15px_-3px_rgba(30,58,138,0.05),0px_0px_0px_0px_rgba(0,0,0,0),0px_0px_0px_0px_rgba(0,0,0,0)] top-[264px] w-[327.2px]" data-name="Container">
      <Container329 />
      <Container344 />
    </div>
  );
}

function Frame76() {
  return (
    <div className="absolute left-[8px] size-[20px] top-[8px]" data-name="Frame">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g clipPath="url(#clip0_1_2088)" id="Frame">
          <path d={svgPaths.p3ace1680} id="Vector" stroke="var(--stroke-0, #2563EB)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d={svgPaths.p105cfc80} id="Vector_2" stroke="var(--stroke-0, #2563EB)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d={svgPaths.p312978e0} id="Vector_3" stroke="var(--stroke-0, #2563EB)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d="M3.33333 18.3333H16.6667" id="Vector_4" stroke="var(--stroke-0, #2563EB)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d={svgPaths.p1356a280} id="Vector_5" stroke="var(--stroke-0, #2563EB)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d={svgPaths.p18544000} id="Vector_6" stroke="var(--stroke-0, #2563EB)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
        <defs>
          <clipPath id="clip0_1_2088">
            <rect fill="white" height="20" width="20" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Container346() {
  return (
    <div className="absolute bg-[#dbeafe] left-[24.8px] rounded-[8px] size-[36px] top-[24.8px]" data-name="Container">
      <Frame76 />
    </div>
  );
}

function Heading46() {
  return (
    <div className="absolute h-[24px] left-0 top-0 w-[225.6px]" data-name="Heading">
      <div className="absolute flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[21.6px] justify-center leading-[0] left-0 not-italic text-[#1e3a8a] text-[13.6px] top-[11.6px] translate-y-[-50%] w-[214.137px]">
        <p className="leading-[24px]">Consistency builds confidence</p>
      </div>
    </div>
  );
}

function Paragraph53() {
  return (
    <div className="absolute font-['Inter:Light',sans-serif] font-light h-[40px] leading-[0] left-0 not-italic text-[#1d4ed8] text-[11.9px] top-[28px] w-[225.6px]" data-name="Paragraph">
      <div className="absolute flex flex-col h-[18.4px] justify-center left-0 top-[10px] translate-y-[-50%] w-[221.5px]">
        <p className="leading-[20px]">{`You're rewiring your brain to feel safer `}</p>
      </div>
      <div className="absolute flex flex-col h-[18.4px] justify-center left-0 top-[30px] translate-y-[-50%] w-[174.912px]">
        <p className="leading-[20px]">in social situations. Keep it up!</p>
      </div>
    </div>
  );
}

function Container347() {
  return (
    <div className="absolute h-[68px] left-[76.8px] top-[24.8px] w-[225.6px]" data-name="Container">
      <Heading46 />
      <Paragraph53 />
    </div>
  );
}

function Container348() {
  return (
    <div className="absolute bg-[#f9fafb] border-0 border-[#f3f4f6] border-solid h-[117.6px] left-0 rounded-[16px] top-[449.6px] w-[327.2px]" data-name="Container">
      <Container346 />
      <Container347 />
    </div>
  );
}

function Container349() {
  return (
    <div className="absolute h-[567.2px] left-[24px] top-[24px] w-[327.2px]" data-name="Container">
      <Container328 />
      <Container345 />
      <Container348 />
    </div>
  );
}

function Container350() {
  return (
    <div className="absolute h-[618.4px] left-0 top-[72px] w-[375.2px]" data-name="Container">
      <Container349 />
    </div>
  );
}

function Container351() {
  return (
    <div className="absolute h-[690.4px] left-0 overflow-clip shadow-[0px_25px_50px_-12px_rgba(0,0,0,0.25),0px_0px_0px_0px_rgba(0,0,0,0),0px_0px_0px_0px_rgba(0,0,0,0)] top-0 w-[375.2px]" data-name="Container" style={{ backgroundImage: "linear-gradient(118.522deg, rgb(239, 246, 255) 25%, rgb(250, 245, 255) 60.355%, rgb(240, 253, 244) 95.711%)" }}>
      <Container325 />
      <Container350 />
    </div>
  );
}

function Container352() {
  return (
    <div className="absolute bg-[#f3f4f6] h-[690.4px] left-0 top-0 w-[375.2px]" data-name="Container">
      <Container351 />
    </div>
  );
}

function Container353() {
  return (
    <div className="absolute h-[690.4px] left-0 top-0 w-[375.2px]" data-name="Container">
      <Container352 />
    </div>
  );
}

function Component18Streaks() {
  return (
    <div className="absolute bg-white h-[690.4px] left-[5037px] top-[1234px] w-[375.2px]" data-name="18. Streaks">
      <Container353 />
    </div>
  );
}

function Frame77() {
  return (
    <div className="absolute left-[8px] size-[24px] top-[8px]" data-name="Frame">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Frame">
          <path d="M12 19L5 12L12 5" id="Vector" stroke="var(--stroke-0, #374151)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d="M19 12H5" id="Vector_2" stroke="var(--stroke-0, #374151)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Button64() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0)] left-[-8px] rounded-[9999px] size-[40px] top-0" data-name="Button">
      <Frame77 />
    </div>
  );
}

function Container354() {
  return (
    <div className="absolute left-[24px] size-[32px] top-[16px]" data-name="Container">
      <Button64 />
    </div>
  );
}

function Heading47() {
  return (
    <div className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold h-[34px] leading-[0] left-[-0.06px] not-italic overflow-clip text-[#111827] text-[15.3px] top-0 w-[146px]" data-name="Heading">
      <div className="absolute flex flex-col h-[24px] justify-center left-0 top-[13.6px] translate-y-[-50%] w-[57.163px]">
        <p className="leading-[28px] text-[15.3px]">&nbsp;</p>
      </div>
      <div className="absolute flex flex-col h-[32px] justify-center left-0 top-[18px] translate-y-[-50%] w-[62px]">
        <p className="leading-[28px]">{`Today's`}</p>
      </div>
      <div className="absolute flex flex-col h-[24px] justify-center left-[57.15px] top-[13.6px] translate-y-[-50%] w-[64.175px]">
        <p className="leading-[28px]"> </p>
      </div>
      <div className="absolute flex flex-col h-[32px] justify-center left-[57px] top-[18px] translate-y-[-50%] w-[75px]">
        <p className="leading-[28px]">{` Mission`}</p>
      </div>
    </div>
  );
}

function Container355() {
  return (
    <div className="absolute h-[28px] left-[133px] top-[22px] w-[121px]" data-name="Container">
      <Heading47 />
    </div>
  );
}

function Container356() {
  return <div className="absolute h-[100px] left-[242.13px] top-[36px] w-[109.063px]" data-name="Container" />;
}

function Container357() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.5)] h-[72px] left-0 top-0 w-[375.2px]" data-name="Container">
      <Container354 />
      <Container355 />
      <Container356 />
    </div>
  );
}

function Span65() {
  return (
    <div className="absolute bg-[#dbeafe] h-[24px] left-[98.68px] rounded-[9999px] top-[1.6px] w-[129.838px]" data-name="Span">
      <div className="absolute flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold h-[16px] justify-center leading-[0] left-[64.92px] not-italic text-[#1d4ed8] text-[10.2px] text-center top-[12px] translate-x-[-50%] translate-y-[-50%] w-[105.837px]">
        <p className="leading-[16px]">Daily Challenge</p>
      </div>
    </div>
  );
}

function Heading48() {
  return (
    <div className="absolute h-[36px] left-0 top-[33.6px] w-[327.2px]" data-name="Heading">
      <div className="absolute flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[39.2px] justify-center leading-[0] left-[163.59px] not-italic text-[#111827] text-[25.5px] text-center top-[18px] translate-x-[-50%] translate-y-[-50%] w-[267.288px]">
        <p className="leading-[36px]">{`Today's HumanPing`}</p>
      </div>
    </div>
  );
}

function Container358() {
  return (
    <div className="absolute h-[69.6px] left-0 top-[29px] w-[327.2px]" data-name="Container">
      <Span65 />
      <Heading48 />
    </div>
  );
}

function Container359() {
  return <div className="absolute bg-gradient-to-r from-[#60a5fa] h-[4px] left-[0.8px] to-[#a855f7] top-[0.8px] w-[325.6px]" data-name="Container" />;
}

function Paragraph54() {
  return (
    <div className="absolute font-['Inter:Medium',sans-serif] font-medium h-[78px] leading-[0] left-0 not-italic text-[#1f2937] text-[20.4px] text-center top-[16px] w-[277.6px]" data-name="Paragraph">
      <div className="absolute flex flex-col h-[32px] justify-center left-[138.8px] top-[19.2px] translate-x-[-50%] translate-y-[-50%] w-[231.825px]">
        <p className="leading-[39px]">{`"Ask one person how `}</p>
      </div>
      <div className="absolute flex flex-col h-[32px] justify-center left-[138.79px] top-[58.2px] translate-x-[-50%] translate-y-[-50%] w-[205.963px]">
        <p className="leading-[39px]">{`their day is going."`}</p>
      </div>
    </div>
  );
}

function Frame78() {
  return (
    <div className="absolute left-[10.8px] size-[12px] top-[6.8px]" data-name="Frame">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g clipPath="url(#clip0_1_2085)" id="Frame">
          <path d={svgPaths.p2bec7a00} id="Vector" stroke="var(--stroke-0, #15803D)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
        <defs>
          <clipPath id="clip0_1_2085">
            <rect fill="white" height="12" width="12" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Span66() {
  return (
    <div className="absolute bg-[#f0fdf4] border-0 border-[#dcfce7] border-solid h-[25.6px] left-[56.39px] rounded-[8px] top-0 w-[60.913px]" data-name="Span">
      <Frame78 />
      <div className="absolute flex flex-col font-['Inter:Medium',sans-serif] font-medium h-[16px] justify-center leading-[0] left-[38.46px] not-italic text-[#15803d] text-[10.2px] text-center top-[12.8px] translate-x-[-50%] translate-y-[-50%] w-[23.313px]">
        <p className="leading-[16px]">Safe</p>
      </div>
    </div>
  );
}

function Frame79() {
  return (
    <div className="absolute left-[10.8px] size-[12px] top-[6.8px]" data-name="Frame">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="Frame">
          <path d={svgPaths.p2023d200} id="Vector" stroke="var(--stroke-0, #4B5563)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d={svgPaths.p2d617c80} id="Vector_2" stroke="var(--stroke-0, #4B5563)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Span67() {
  return (
    <div className="absolute bg-[#f9fafb] border-0 border-[#f3f4f6] border-solid h-[25.6px] left-[129.3px] rounded-[8px] top-0 w-[91.912px]" data-name="Span">
      <Frame79 />
      <div className="absolute flex flex-col font-['Inter:Medium',sans-serif] font-medium h-[16px] justify-center leading-[0] left-[53.96px] not-italic text-[#4b5563] text-[10.2px] text-center top-[12.8px] translate-x-[-50%] translate-y-[-50%] w-[54.312px]">
        <p className="leading-[16px]">Anywhere</p>
      </div>
    </div>
  );
}

function Container360() {
  return (
    <div className="absolute h-[25.6px] left-0 top-[118px] w-[277.6px]" data-name="Container">
      <Span66 />
      <Span67 />
    </div>
  );
}

function Container361() {
  return (
    <div className="absolute h-[159.6px] left-[24.8px] top-[24.8px] w-[277.6px]" data-name="Container">
      <Paragraph54 />
      <Container360 />
    </div>
  );
}

function Container362() {
  return (
    <div className="absolute bg-white border-0 border-[rgba(255,255,255,0.5)] border-solid h-[209.2px] left-0 overflow-clip rounded-[16px] shadow-[0px_4px_6px_-4px_rgba(30,58,138,0.05),0px_10px_15px_-3px_rgba(30,58,138,0.05),0px_0px_0px_0px_rgba(0,0,0,0),0px_0px_0px_0px_rgba(0,0,0,0)] top-[130.6px] w-[327.2px]" data-name="Container">
      <Container359 />
      <Container361 />
    </div>
  );
}

function Heading49() {
  return (
    <div className="absolute h-[20px] left-[16.8px] top-[16.8px] w-[293.6px]" data-name="Heading">
      <div className="absolute flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold h-[18.4px] justify-center leading-[0] left-0 not-italic text-[#1e3a8a] text-[11.9px] top-[10px] translate-y-[-50%] w-[88.2px]">
        <p className="leading-[20px]">Why this helps</p>
      </div>
    </div>
  );
}

function Paragraph55() {
  return (
    <div className="absolute font-['Inter:Light',sans-serif] font-light h-[40px] leading-[0] left-[16.8px] not-italic text-[11.9px] text-[rgba(29,78,216,0.8)] top-[40.8px] w-[293.6px]" data-name="Paragraph">
      <div className="absolute flex flex-col h-[18.4px] justify-center left-0 top-[10px] translate-y-[-50%] w-[270.613px]">
        <p className="leading-[20px]">{`Small, low-stakes interactions help retrain your `}</p>
      </div>
      <div className="absolute flex flex-col h-[18.4px] justify-center left-0 top-[30px] translate-y-[-50%] w-[291.325px]">
        <p className="leading-[20px]">brain that social connection is safe and rewarding.</p>
      </div>
    </div>
  );
}

function Container363() {
  return (
    <div className="absolute bg-[rgba(239,246,255,0.5)] border-0 border-[#dbeafe] border-solid h-[97.6px] left-0 rounded-[12px] top-0 w-[327.2px]" data-name="Container">
      <Heading49 />
      <Paragraph55 />
    </div>
  );
}

function Container364() {
  return (
    <div className="absolute h-[97.6px] left-0 top-[371.8px] w-[327.2px]" data-name="Container">
      <Container363 />
    </div>
  );
}

function Container365() {
  return (
    <div className="absolute h-[498.4px] left-[24px] top-[24px] w-[327.2px]" data-name="Container">
      <Container358 />
      <Container362 />
      <Container364 />
    </div>
  );
}

function StateLayer5() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-center px-[24px] py-[16px] relative shrink-0" data-name="State-layer">
      <div className="flex flex-col font-['Roboto:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[16px] text-nowrap text-white tracking-[0.15px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[24px]">Start Task</p>
      </div>
    </div>
  );
}

function Content5() {
  return (
    <div className="bg-[#6750a4] content-stretch flex items-center justify-center overflow-clip relative rounded-[100px] shrink-0" data-name="Content">
      <StateLayer5 />
    </div>
  );
}

function Button65() {
  return (
    <div className="absolute content-stretch flex items-center justify-center left-[128px] top-[522px]" data-name="Button">
      <Content5 />
    </div>
  );
}

function Container366() {
  return (
    <div className="absolute h-[618.4px] left-0 top-[72px] w-[375.2px]" data-name="Container">
      <Container365 />
      <Button65 />
    </div>
  );
}

function Container367() {
  return (
    <div className="absolute h-[690.4px] left-0 overflow-clip shadow-[0px_25px_50px_-12px_rgba(0,0,0,0.25),0px_0px_0px_0px_rgba(0,0,0,0),0px_0px_0px_0px_rgba(0,0,0,0)] top-0 w-[375.2px]" data-name="Container" style={{ backgroundImage: "linear-gradient(118.522deg, rgb(239, 246, 255) 25%, rgb(250, 245, 255) 60.355%, rgb(240, 253, 244) 95.711%)" }}>
      <Container357 />
      <Container366 />
    </div>
  );
}

function Container368() {
  return (
    <div className="absolute bg-[#f3f4f6] h-[690.4px] left-0 top-0 w-[375.2px]" data-name="Container">
      <Container367 />
    </div>
  );
}

function Container369() {
  return (
    <div className="absolute h-[690.4px] left-0 top-0 w-[375.2px]" data-name="Container">
      <Container368 />
    </div>
  );
}

function Component19TodaysMission() {
  return (
    <div className="absolute bg-white h-[690.4px] left-0 top-[2376px] w-[375.2px]" data-name="19. Today\'s_Mission">
      <Container369 />
    </div>
  );
}

function Frame80() {
  return (
    <div className="absolute left-[8px] size-[24px] top-[8px]" data-name="Frame">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Frame">
          <path d="M12 19L5 12L12 5" id="Vector" stroke="var(--stroke-0, #374151)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d="M19 12H5" id="Vector_2" stroke="var(--stroke-0, #374151)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Button66() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0)] left-[-8px] rounded-[9999px] size-[40px] top-0" data-name="Button">
      <Frame80 />
    </div>
  );
}

function Container370() {
  return (
    <div className="absolute h-[40px] left-[24px] top-[16px] w-[32px]" data-name="Container">
      <Button66 />
    </div>
  );
}

function Container371() {
  return <div className="absolute h-[100px] left-[133.06px] top-[36px] w-[109.063px]" data-name="Container" />;
}

function Container372() {
  return <div className="absolute h-[100px] left-[242.13px] top-[36px] w-[109.063px]" data-name="Container" />;
}

function Container373() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.5)] h-[72px] left-0 top-0 w-[375.2px]" data-name="Container">
      <Container370 />
      <Container371 />
      <Container372 />
    </div>
  );
}

function Frame81() {
  return (
    <div className="absolute left-[16px] size-[32px] top-[16px]" data-name="Frame">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="Frame">
          <path d={svgPaths.pc093400} id="Vector" stroke="var(--stroke-0, #3B82F6)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d={svgPaths.p141fd2c0} id="Vector_2" stroke="var(--stroke-0, #3B82F6)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d={svgPaths.p8dd6d00} id="Vector_3" stroke="var(--stroke-0, #3B82F6)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d={svgPaths.p65fba00} id="Vector_4" stroke="var(--stroke-0, #3B82F6)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d={svgPaths.p18f98ec0} id="Vector_5" stroke="var(--stroke-0, #3B82F6)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d="M16 17.3333H21.3333" id="Vector_6" stroke="var(--stroke-0, #3B82F6)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d={svgPaths.p1d3c6020} id="Vector_7" stroke="var(--stroke-0, #3B82F6)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d="M16 10.6667H26.6667" id="Vector_8" stroke="var(--stroke-0, #3B82F6)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d={svgPaths.p2c4da200} id="Vector_9" stroke="var(--stroke-0, #3B82F6)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d={svgPaths.p2c37db00} id="Vector_10" stroke="var(--stroke-0, #3B82F6)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d={svgPaths.p5741a00} id="Vector_11" stroke="var(--stroke-0, #3B82F6)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d={svgPaths.p327cc100} id="Vector_12" stroke="var(--stroke-0, #3B82F6)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d={svgPaths.p4253700} id="Vector_13" stroke="var(--stroke-0, #3B82F6)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Container374() {
  return (
    <div className="absolute bg-[#eff6ff] left-[131.6px] rounded-[9999px] size-[64px] top-0" data-name="Container">
      <Frame81 />
    </div>
  );
}

function Container375() {
  return (
    <div className="absolute h-[64px] left-0 top-0 w-[327.2px]" data-name="Container">
      <Container374 />
    </div>
  );
}

function Heading50() {
  return (
    <div className="absolute font-['Inter:Bold',sans-serif] font-bold h-[64px] leading-[0] left-0 not-italic text-[#111827] text-[20.4px] text-center top-0 w-[327.2px]" data-name="Heading">
      <div className="absolute flex flex-col h-[32px] justify-center left-[163.6px] top-[16px] translate-x-[-50%] translate-y-[-50%] w-[322.4px]">
        <p className="leading-[32px]">{`Are you ready to try this small `}</p>
      </div>
      <div className="absolute flex flex-col h-[32px] justify-center left-[163.6px] top-[48px] translate-x-[-50%] translate-y-[-50%] w-[143.75px]">
        <p className="leading-[32px]">action today?</p>
      </div>
    </div>
  );
}

function Paragraph56() {
  return (
    <div className="absolute font-['Inter:Light',sans-serif] font-light h-[48px] leading-[0] left-0 not-italic text-[#6b7280] text-[13.6px] text-center top-[80px] w-[327.2px]" data-name="Paragraph">
      <div className="absolute flex flex-col h-[21.6px] justify-center left-[163.59px] top-[11.6px] translate-x-[-50%] translate-y-[-50%] w-[257.213px]">
        <p className="leading-[24px]">{`It's okay if you're not. We can try again `}</p>
      </div>
      <div className="absolute flex flex-col h-[21.6px] justify-center left-[163.59px] top-[35.6px] translate-x-[-50%] translate-y-[-50%] w-[68.238px]">
        <p className="leading-[24px]">tomorrow.</p>
      </div>
    </div>
  );
}

function Container376() {
  return (
    <div className="absolute h-[128px] left-0 top-[96px] w-[327.2px]" data-name="Container">
      <Heading50 />
      <Paragraph56 />
    </div>
  );
}

function StateLayer6() {
  return (
    <div className="bg-[rgba(255,255,255,0.1)] content-stretch flex gap-[8px] items-center justify-center px-[16px] py-[10px] relative shrink-0" data-name="State-layer">
      <div className="flex flex-col font-['Roboto:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[14px] text-nowrap text-white tracking-[0.1px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[20px]">Yes, I’ll try</p>
      </div>
    </div>
  );
}

function Content6() {
  return (
    <div className="bg-[#6750a4] content-stretch flex items-center justify-center overflow-clip relative rounded-[100px] shrink-0" data-name="Content">
      <StateLayer6 />
    </div>
  );
}

function Button67() {
  return (
    <div className="absolute content-stretch flex h-[56px] items-center justify-center left-[77px] top-[16.8px] w-[167px]" data-name="Button">
      <Content6 />
    </div>
  );
}

function StateLayer7() {
  return (
    <div className="bg-[rgba(255,255,255,0.1)] content-stretch flex gap-[8px] items-center justify-center px-[16px] py-[10px] relative shrink-0" data-name="State-layer">
      <div className="flex flex-col font-['Roboto:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[14px] text-nowrap text-white tracking-[0.1px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[20px]">Maybe later</p>
      </div>
    </div>
  );
}

function Content7() {
  return (
    <div className="bg-[#6750a4] content-stretch flex items-center justify-center overflow-clip relative rounded-[100px] shrink-0" data-name="Content">
      <StateLayer7 />
    </div>
  );
}

function Button68() {
  return (
    <div className="absolute content-stretch flex h-[48px] items-center justify-center left-[95px] top-[87.8px] w-[131px]" data-name="Button">
      <Content7 />
    </div>
  );
}

function Container377() {
  return (
    <div className="absolute h-[136px] left-0 top-[256px] w-[327.2px]" data-name="Container">
      <Button67 />
      <Button68 />
    </div>
  );
}

function Container378() {
  return (
    <div className="absolute h-[392px] left-[24px] top-[77.2px] w-[327.2px]" data-name="Container">
      <Container375 />
      <Container376 />
      <Container377 />
    </div>
  );
}

function Container379() {
  return <div className="absolute bg-[#3b82f6] h-[4px] left-0 top-0 w-[93.8px]" data-name="Container" />;
}

function Container380() {
  return (
    <div className="absolute bg-[#f3f4f6] h-[4px] left-0 top-[-72px] w-[375.2px]" data-name="Container">
      <Container379 />
    </div>
  );
}

function Container381() {
  return (
    <div className="absolute h-[618.4px] left-0 top-[72px] w-[375.2px]" data-name="Container">
      <Container378 />
      <Container380 />
    </div>
  );
}

function Container382() {
  return (
    <div className="absolute h-[690.4px] left-0 overflow-clip shadow-[0px_25px_50px_-12px_rgba(0,0,0,0.25),0px_0px_0px_0px_rgba(0,0,0,0),0px_0px_0px_0px_rgba(0,0,0,0)] top-0 w-[375.2px]" data-name="Container" style={{ backgroundImage: "linear-gradient(118.522deg, rgb(239, 246, 255) 25%, rgb(250, 245, 255) 60.355%, rgb(240, 253, 244) 95.711%)" }}>
      <Container373 />
      <Container381 />
    </div>
  );
}

function Container383() {
  return (
    <div className="absolute bg-[#f3f4f6] h-[690.4px] left-0 top-0 w-[375.2px]" data-name="Container">
      <Container382 />
    </div>
  );
}

function Container384() {
  return (
    <div className="absolute h-[690.4px] left-0 shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] top-0 w-[375.2px]" data-name="Container">
      <Container383 />
    </div>
  );
}

function Component20TaskInstruction() {
  return (
    <div className="absolute bg-white h-[690.4px] left-[634px] top-[2376px] w-[375.2px]" data-name="20. Task_Instruction">
      <Container384 />
    </div>
  );
}

function Frame82() {
  return (
    <div className="absolute left-[8px] size-[24px] top-[8px]" data-name="Frame">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Frame">
          <path d="M12 19L5 12L12 5" id="Vector" stroke="var(--stroke-0, #374151)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d="M19 12H5" id="Vector_2" stroke="var(--stroke-0, #374151)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Button69() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0)] left-[-8px] rounded-[9999px] size-[40px] top-0" data-name="Button">
      <Frame82 />
    </div>
  );
}

function Container385() {
  return (
    <div className="absolute h-[32px] left-[24px] top-[24px] w-[56px]" data-name="Container">
      <Button69 />
    </div>
  );
}

function Container386() {
  return <div className="absolute h-[100px] left-[131.2px] top-[36px] w-[107.188px]" data-name="Container" />;
}

function Container387() {
  return <div className="absolute h-[100px] left-[238.4px] top-[36px] w-[107.188px]" data-name="Container" />;
}

function Container388() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.5)] h-[72px] left-0 top-0 w-[369.6px]" data-name="Container">
      <Container385 />
      <Container386 />
      <Container387 />
    </div>
  );
}

function Frame83() {
  return (
    <div className="absolute left-[16px] size-[32px] top-[16px]" data-name="Frame">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="Frame">
          <path d={svgPaths.p1dee4500} id="Vector" stroke="var(--stroke-0, #A855F7)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d={svgPaths.p599bf00} id="Vector_2" stroke="var(--stroke-0, #A855F7)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d="M12 12H12.0133" id="Vector_3" stroke="var(--stroke-0, #A855F7)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d="M20 12H20.0133" id="Vector_4" stroke="var(--stroke-0, #A855F7)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Container389() {
  return (
    <div className="absolute bg-[#faf5ff] left-[128.8px] rounded-[9999px] size-[64px] top-0" data-name="Container">
      <Frame83 />
    </div>
  );
}

function Container390() {
  return (
    <div className="absolute h-[64px] left-0 top-0 w-[321.6px]" data-name="Container">
      <Container389 />
    </div>
  );
}

function Heading51() {
  return (
    <div className="absolute font-['Inter:Bold',sans-serif] font-bold h-[64px] leading-[0] left-0 not-italic text-[#111827] text-[20.4px] text-center top-0 w-[321.6px]" data-name="Heading">
      <div className="absolute flex flex-col h-[32px] justify-center left-[160.79px] top-[16px] translate-x-[-50%] translate-y-[-50%] w-[285.513px]">
        <p className="leading-[32px]">{`How confident do you feel `}</p>
      </div>
      <div className="absolute flex flex-col h-[32px] justify-center left-[160.8px] top-[48px] translate-x-[-50%] translate-y-[-50%] w-[114.575px]">
        <p className="leading-[32px]">right now?</p>
      </div>
    </div>
  );
}

function Container391() {
  return (
    <div className="absolute h-[64px] left-0 top-[96px] w-[321.6px]" data-name="Container">
      <Heading51 />
    </div>
  );
}

function Button70() {
  return (
    <div className="absolute bg-[#faf5ff] border border-[#a855f7] border-solid h-[59.2px] left-0 rounded-[12px] top-[16px] w-[321.6px]" data-name="Button">
      <div className="absolute flex flex-col font-['Inter:Medium',sans-serif] font-medium h-[21.6px] justify-center leading-[0] left-[16.6px] not-italic text-[#581c87] text-[13.6px] top-[28.2px] translate-y-[-50%] w-[101.375px]">
        <p className="leading-[24px]">Not confident</p>
      </div>
    </div>
  );
}

function Button71() {
  return (
    <div className="absolute bg-white border border-[#f3f4f6] border-solid h-[59.2px] left-0 rounded-[12px] top-[87.2px] w-[321.6px]" data-name="Button">
      <div className="absolute flex flex-col font-['Inter:Light',sans-serif] font-light h-[21.6px] justify-center leading-[0] left-[16.6px] not-italic text-[#4b5563] text-[13.6px] top-[28.2px] translate-y-[-50%] w-[108.938px]">
        <p className="leading-[24px]">A little confident</p>
      </div>
    </div>
  );
}

function Button72() {
  return (
    <div className="absolute bg-white border border-[#f3f4f6] border-solid h-[59.2px] left-0 rounded-[12px] top-[158.4px] w-[321.6px]" data-name="Button">
      <div className="absolute flex flex-col font-['Inter:Light',sans-serif] font-light h-[21.6px] justify-center leading-[0] left-[16.6px] not-italic text-[#4b5563] text-[13.6px] top-[28.2px] translate-y-[-50%] w-[65.525px]">
        <p className="leading-[24px]">Confident</p>
      </div>
    </div>
  );
}

function Container392() {
  return (
    <div className="absolute h-[217.6px] left-0 top-[192px] w-[321.6px]" data-name="Container">
      <Button70 />
      <Button71 />
      <Button72 />
    </div>
  );
}

function StateLayer8() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-center px-[24px] py-[16px] relative shrink-0" data-name="State-layer">
      <div className="flex flex-col font-['Roboto:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[16px] text-nowrap text-white tracking-[0.15px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[24px]">Continue</p>
      </div>
    </div>
  );
}

function Content8() {
  return (
    <div className="bg-[#6750a4] content-stretch flex items-center justify-center overflow-clip relative rounded-[100px] shrink-0" data-name="Content">
      <StateLayer8 />
    </div>
  );
}

function Button73() {
  return (
    <div className="absolute content-stretch flex h-[61px] items-center justify-center left-[70px] top-[452px] w-[189px]" data-name="Button">
      <Content8 />
    </div>
  );
}

function Container393() {
  return (
    <div className="absolute h-[501.6px] left-[24px] top-[24px] w-[321.6px]" data-name="Container">
      <Container390 />
      <Container391 />
      <Container392 />
      <Button73 />
    </div>
  );
}

function Container394() {
  return <div className="absolute bg-[#3b82f6] h-[4px] left-0 top-0 w-[184.8px]" data-name="Container" />;
}

function Container395() {
  return (
    <div className="absolute bg-[#f3f4f6] h-[4px] left-0 top-[-72px] w-[369.6px]" data-name="Container">
      <Container394 />
    </div>
  );
}

function Container396() {
  return (
    <div className="absolute h-[621.6px] left-0 top-[72px] w-[369.6px]" data-name="Container">
      <Container393 />
      <Container395 />
    </div>
  );
}

function Container397() {
  return (
    <div className="absolute h-[693.6px] left-0 overflow-clip shadow-[0px_25px_50px_-12px_rgba(0,0,0,0.25),0px_0px_0px_0px_rgba(0,0,0,0),0px_0px_0px_0px_rgba(0,0,0,0)] top-0 w-[369.6px]" data-name="Container" style={{ backgroundImage: "linear-gradient(118.052deg, rgb(239, 246, 255) 25%, rgb(250, 245, 255) 60.355%, rgb(240, 253, 244) 95.711%)" }}>
      <Container388 />
      <Container396 />
    </div>
  );
}

function Container398() {
  return (
    <div className="absolute bg-[#f3f4f6] h-[693.6px] left-0 top-0 w-[369.6px]" data-name="Container">
      <Container397 />
    </div>
  );
}

function Container399() {
  return (
    <div className="absolute h-[693.6px] left-0 top-0 w-[369.6px]" data-name="Container">
      <Container398 />
    </div>
  );
}

function Component21UserFeeling() {
  return (
    <div className="absolute bg-white h-[693.6px] left-[1268px] top-[2374px] w-[369.6px]" data-name="21. user_feeling">
      <Container399 />
    </div>
  );
}

function Frame84() {
  return (
    <div className="absolute left-[8px] size-[24px] top-[8px]" data-name="Frame">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Frame">
          <path d="M12 19L5 12L12 5" id="Vector" stroke="var(--stroke-0, #374151)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d="M19 12H5" id="Vector_2" stroke="var(--stroke-0, #374151)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Button74() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0)] left-[-8px] rounded-[9999px] size-[40px] top-0" data-name="Button">
      <Frame84 />
    </div>
  );
}

function Container400() {
  return (
    <div className="absolute h-[40px] left-[24px] top-[16px] w-[32px]" data-name="Container">
      <Button74 />
    </div>
  );
}

function Container401() {
  return <div className="absolute h-[100px] left-[133.06px] top-[36px] w-[109.063px]" data-name="Container" />;
}

function Container402() {
  return <div className="absolute h-[100px] left-[242.13px] top-[36px] w-[109.063px]" data-name="Container" />;
}

function Container403() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.5)] h-[72px] left-0 top-0 w-[375.2px]" data-name="Container">
      <Container400 />
      <Container401 />
      <Container402 />
    </div>
  );
}

function Frame85() {
  return (
    <div className="absolute left-[16px] size-[32px] top-[16px]" data-name="Frame">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="Frame">
          <path d={svgPaths.p3ae94df2} id="Vector" stroke="var(--stroke-0, #22C55E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d={svgPaths.p363c980} id="Vector_2" stroke="var(--stroke-0, #22C55E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Container404() {
  return (
    <div className="absolute bg-[#f0fdf4] left-[131.6px] rounded-[9999px] size-[64px] top-0" data-name="Container">
      <Frame85 />
    </div>
  );
}

function Container405() {
  return (
    <div className="absolute h-[64px] left-0 top-0 w-[327.2px]" data-name="Container">
      <Container404 />
    </div>
  );
}

function Heading52() {
  return (
    <div className="absolute font-['Inter:Bold',sans-serif] font-bold h-[64px] leading-[0] left-0 not-italic text-[#111827] text-[20.4px] text-center top-0 w-[327.2px]" data-name="Heading">
      <div className="absolute flex flex-col h-[32px] justify-center left-[163.59px] top-[16px] translate-x-[-50%] translate-y-[-50%] w-[311.362px]">
        <p className="leading-[32px]">{`Where do you think you'll do `}</p>
      </div>
      <div className="absolute flex flex-col h-[32px] justify-center left-[163.59px] top-[48px] translate-x-[-50%] translate-y-[-50%] w-[98.538px]">
        <p className="leading-[32px]">this task?</p>
      </div>
    </div>
  );
}

function Container406() {
  return (
    <div className="absolute h-[64px] left-0 top-[96px] w-[327.2px]" data-name="Container">
      <Heading52 />
    </div>
  );
}

function Button75() {
  return (
    <div className="absolute bg-white border border-[#f3f4f6] border-solid h-[59.2px] left-0 rounded-[12px] top-[16px] w-[157.6px]" data-name="Button">
      <div className="absolute flex flex-col font-['Inter:Light',sans-serif] font-light h-[21.6px] justify-center leading-[0] left-[77.79px] not-italic text-[#4b5563] text-[13.6px] text-center top-[28.2px] translate-x-[-50%] translate-y-[-50%] w-[51.062px]">
        <p className="leading-[24px]">At work</p>
      </div>
    </div>
  );
}

function Button76() {
  return (
    <div className="absolute bg-white border border-[#f3f4f6] border-solid h-[59.2px] left-[169.6px] rounded-[12px] top-[16px] w-[157.6px]" data-name="Button">
      <div className="absolute flex flex-col font-['Inter:Light',sans-serif] font-light h-[21.6px] justify-center leading-[0] left-[77.8px] not-italic text-[#4b5563] text-[13.6px] text-center top-[28.2px] translate-x-[-50%] translate-y-[-50%] w-[57.65px]">
        <p className="leading-[24px]">At home</p>
      </div>
    </div>
  );
}

function Button77() {
  return (
    <div className="absolute bg-white border border-[#f3f4f6] border-solid h-[59.2px] left-0 rounded-[12px] top-[87.2px] w-[157.6px]" data-name="Button">
      <div className="absolute flex flex-col font-['Inter:Light',sans-serif] font-light h-[21.6px] justify-center leading-[0] left-[77.8px] not-italic text-[#4b5563] text-[13.6px] text-center top-[28.2px] translate-x-[-50%] translate-y-[-50%] w-[56.75px]">
        <p className="leading-[24px]">In public</p>
      </div>
    </div>
  );
}

function Button78() {
  return (
    <div className="absolute bg-[#f0fdf4] border border-[#22c55e] border-solid h-[59.2px] left-[169.6px] rounded-[12px] top-[87.2px] w-[157.6px]" data-name="Button">
      <div className="absolute flex flex-col font-['Inter:Medium',sans-serif] font-medium h-[21.6px] justify-center leading-[0] left-[77.8px] not-italic text-[#14532d] text-[13.6px] text-center top-[28.2px] translate-x-[-50%] translate-y-[-50%] w-[89.225px]">
        <p className="leading-[24px]">Not sure yet</p>
      </div>
    </div>
  );
}

function Container407() {
  return (
    <div className="absolute h-[146.4px] left-0 top-[192px] w-[327.2px]" data-name="Container">
      <Button75 />
      <Button76 />
      <Button77 />
      <Button78 />
    </div>
  );
}

function StateLayer9() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-center px-[24px] py-[16px] relative shrink-0" data-name="State-layer">
      <div className="flex flex-col font-['Roboto:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[16px] text-nowrap text-white tracking-[0.15px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[24px]">Continue</p>
      </div>
    </div>
  );
}

function Content9() {
  return (
    <div className="bg-[#6750a4] content-stretch flex items-center justify-center overflow-clip relative rounded-[100px] shrink-0" data-name="Content">
      <StateLayer9 />
    </div>
  );
}

function Button79() {
  return (
    <div className="absolute content-stretch flex items-center justify-center left-[80px] top-[390px] w-[188px]" data-name="Button">
      <Content9 />
    </div>
  );
}

function Container408() {
  return (
    <div className="absolute h-[458px] left-[24px] top-[58px] w-[327px]" data-name="Container">
      <Container405 />
      <Container406 />
      <Container407 />
      <Button79 />
    </div>
  );
}

function Container409() {
  return <div className="absolute bg-[#3b82f6] h-[4px] left-0 top-0 w-[281.4px]" data-name="Container" />;
}

function Container410() {
  return (
    <div className="absolute bg-[#f3f4f6] h-[4px] left-0 top-[-72px] w-[375.2px]" data-name="Container">
      <Container409 />
    </div>
  );
}

function Container411() {
  return (
    <div className="absolute h-[618.4px] left-0 top-[72px] w-[375.2px]" data-name="Container">
      <Container408 />
      <Container410 />
    </div>
  );
}

function Container412() {
  return (
    <div className="absolute h-[690.4px] left-0 overflow-clip shadow-[0px_25px_50px_-12px_rgba(0,0,0,0.25),0px_0px_0px_0px_rgba(0,0,0,0),0px_0px_0px_0px_rgba(0,0,0,0)] top-0 w-[375.2px]" data-name="Container" style={{ backgroundImage: "linear-gradient(118.522deg, rgb(239, 246, 255) 25%, rgb(250, 245, 255) 60.355%, rgb(240, 253, 244) 95.711%)" }}>
      <Container403 />
      <Container411 />
    </div>
  );
}

function Container413() {
  return (
    <div className="absolute bg-[#f3f4f6] h-[690.4px] left-0 top-0 w-[375.2px]" data-name="Container">
      <Container412 />
    </div>
  );
}

function Container414() {
  return (
    <div className="absolute h-[690.4px] left-0 top-0 w-[375.2px]" data-name="Container">
      <Container413 />
    </div>
  );
}

function Component22TaskSelectionPlace() {
  return (
    <div className="absolute bg-white h-[690.4px] left-[1897px] top-[2376px] w-[375.2px]" data-name="22. task_selection_place">
      <Container414 />
    </div>
  );
}

function Frame86() {
  return (
    <div className="absolute left-[8px] size-[24px] top-[8px]" data-name="Frame">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Frame">
          <path d="M12 19L5 12L12 5" id="Vector" stroke="var(--stroke-0, #374151)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d="M19 12H5" id="Vector_2" stroke="var(--stroke-0, #374151)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Button80() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0)] left-[-8px] rounded-[9999px] size-[40px] top-0" data-name="Button">
      <Frame86 />
    </div>
  );
}

function Container415() {
  return (
    <div className="absolute h-[40px] left-[24px] top-[16px] w-[44px]" data-name="Container">
      <Button80 />
    </div>
  );
}

function Container416() {
  return <div className="absolute h-[100px] left-[133.06px] top-[36px] w-[109.063px]" data-name="Container" />;
}

function Container417() {
  return <div className="absolute h-[100px] left-[242.13px] top-[36px] w-[109.063px]" data-name="Container" />;
}

function Container418() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.5)] h-[72px] left-0 top-0 w-[375.2px]" data-name="Container">
      <Container415 />
      <Container416 />
      <Container417 />
    </div>
  );
}

function Container419() {
  return <div className="absolute bg-[rgba(254,240,138,0.3)] blur-[32px] filter h-[305.6px] left-0 rounded-[9999px] top-0 w-[327.2px]" data-name="Container" />;
}

function Frame87() {
  return (
    <div className="absolute left-[20px] size-[40px] top-[20px]" data-name="Frame">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40 40">
        <g id="Frame">
          <path d={svgPaths.pa510d40} id="Vector" stroke="var(--stroke-0, #EAB308)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d="M20 3.33333V6.66667" id="Vector_2" stroke="var(--stroke-0, #EAB308)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d="M20 33.3333V36.6667" id="Vector_3" stroke="var(--stroke-0, #EAB308)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d={svgPaths.p82db00} id="Vector_4" stroke="var(--stroke-0, #EAB308)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d={svgPaths.p2556d300} id="Vector_5" stroke="var(--stroke-0, #EAB308)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d="M3.33333 20H6.66667" id="Vector_6" stroke="var(--stroke-0, #EAB308)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d="M33.3333 20H36.6667" id="Vector_7" stroke="var(--stroke-0, #EAB308)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d={svgPaths.paab03f0} id="Vector_8" stroke="var(--stroke-0, #EAB308)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d={svgPaths.p1b515c00} id="Vector_9" stroke="var(--stroke-0, #EAB308)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Container420() {
  return (
    <div className="absolute bg-[#fefce8] left-[123.6px] rounded-[9999px] size-[80px] top-[24.8px]" data-name="Container">
      <Frame87 />
    </div>
  );
}

function Heading53() {
  return (
    <div className="absolute font-['Inter:Bold',sans-serif] font-bold h-[64px] leading-[0] left-[24.8px] not-italic text-[#111827] text-[20.4px] text-center top-[136.8px] w-[277.6px]" data-name="Heading">
      <div className="absolute flex flex-col h-[32px] justify-center left-[138.79px] top-[16px] translate-x-[-50%] translate-y-[-50%] w-[246.013px]">
        <p className="leading-[32px]">{`This doesn't have to be `}</p>
      </div>
      <div className="absolute flex flex-col h-[32px] justify-center left-[138.79px] top-[48px] translate-x-[-50%] translate-y-[-50%] w-[82.762px]">
        <p className="leading-[32px]">perfect.</p>
      </div>
    </div>
  );
}

function Paragraph57() {
  return (
    <div className="absolute font-['Inter:Light',sans-serif] font-light h-[56px] leading-[0] left-[24.8px] not-italic text-[#4b5563] text-[15.3px] text-center top-[224.8px] w-[277.6px]" data-name="Paragraph">
      <div className="absolute flex flex-col h-[24px] justify-center left-[138.79px] top-[13.6px] translate-x-[-50%] translate-y-[-50%] w-[252.413px]">
        <p className="leading-[28px]">{`Just showing up is enough. You're `}</p>
      </div>
      <div className="absolute flex flex-col h-[24px] justify-center left-[138.79px] top-[41.6px] translate-x-[-50%] translate-y-[-50%] w-[91.512px]">
        <p className="leading-[28px]">doing great.</p>
      </div>
    </div>
  );
}

function Container421() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.7)] border-0 border-[rgba(255,255,255,0.4)] border-solid h-[305.6px] left-0 rounded-[16px] shadow-[0px_8px_10px_-6px_rgba(30,58,138,0.05),0px_20px_25px_-5px_rgba(30,58,138,0.05),0px_0px_0px_0px_rgba(0,0,0,0),0px_0px_0px_0px_rgba(0,0,0,0)] top-0 w-[327.2px]" data-name="Container">
      <Container420 />
      <Heading53 />
      <Paragraph57 />
    </div>
  );
}

function Container422() {
  return (
    <div className="absolute h-[305.6px] left-0 top-0 w-[327.2px]" data-name="Container">
      <Container419 />
      <Container421 />
    </div>
  );
}

function StateLayer10() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-center px-[16px] py-[10px] relative shrink-0" data-name="State-layer">
      <div className="flex flex-col font-['Roboto:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[14px] text-nowrap text-white tracking-[0.1px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[20px]">{`I’ll do it    `}</p>
      </div>
    </div>
  );
}

function Content10() {
  return (
    <div className="bg-[#6750a4] content-stretch flex flex-col items-center justify-center overflow-clip relative rounded-[100px] shrink-0" data-name="Content">
      <StateLayer10 />
    </div>
  );
}

function Button81() {
  return (
    <div className="absolute content-stretch flex h-[48px] items-center justify-center left-[69px] top-[12px] w-[205px]" data-name="Button">
      <Content10 />
    </div>
  );
}

function Button82() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0)] h-[63px] left-0 rounded-[9999px] shadow-[0px_2px_4px_-2px_rgba(0,0,0,0.1),0px_4px_6px_-1px_rgba(0,0,0,0.1),0px_0px_0px_0px_rgba(0,0,0,0),0px_0px_0px_0px_rgba(0,0,0,0)] top-[334.6px] w-[327px]" data-name="Button">
      <Button81 />
    </div>
  );
}

function Container423() {
  return (
    <div className="absolute h-[397.6px] left-[24px] top-[74.4px] w-[327.2px]" data-name="Container">
      <Container422 />
      <Button82 />
    </div>
  );
}

function Container424() {
  return <div className="absolute bg-[#3b82f6] h-[4px] left-0 top-0 w-[375.2px]" data-name="Container" />;
}

function Container425() {
  return (
    <div className="absolute bg-[#f3f4f6] h-[4px] left-0 top-[-72px] w-[375.2px]" data-name="Container">
      <Container424 />
    </div>
  );
}

function Container426() {
  return (
    <div className="absolute h-[618.4px] left-0 top-[72px] w-[375.2px]" data-name="Container">
      <Container423 />
      <Container425 />
    </div>
  );
}

function Container427() {
  return (
    <div className="absolute h-[690.4px] left-0 overflow-clip shadow-[0px_25px_50px_-12px_rgba(0,0,0,0.25),0px_0px_0px_0px_rgba(0,0,0,0),0px_0px_0px_0px_rgba(0,0,0,0)] top-0 w-[375.2px]" data-name="Container" style={{ backgroundImage: "linear-gradient(118.522deg, rgb(239, 246, 255) 25%, rgb(250, 245, 255) 60.355%, rgb(240, 253, 244) 95.711%)" }}>
      <Container418 />
      <Container426 />
    </div>
  );
}

function Container428() {
  return (
    <div className="absolute bg-[#f3f4f6] h-[690.4px] left-0 top-0 w-[375.2px]" data-name="Container">
      <Container427 />
    </div>
  );
}

function Container429() {
  return (
    <div className="absolute h-[690.4px] left-0 top-0 w-[375.2px]" data-name="Container">
      <Container428 />
    </div>
  );
}

function Component23Suggestion() {
  return (
    <div className="absolute bg-white h-[690.4px] left-[2531px] top-[2376px] w-[375.2px]" data-name="23. suggestion">
      <Container429 />
    </div>
  );
}

function Frame88() {
  return (
    <div className="absolute left-0 size-[20px] top-[2px]" data-name="Frame">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Frame">
          <path d={svgPaths.p33f6b680} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.8" strokeWidth="2" />
          <path d="M15.8333 10H4.16667" id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.8" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Span68() {
  return (
    <div className="absolute h-[24px] left-[28px] top-0 w-[94.338px]" data-name="Span">
      <div className="absolute flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[21.6px] justify-center leading-[0] left-[47.17px] not-italic text-[13.6px] text-center text-white top-[11.6px] translate-x-[-50%] translate-y-[-50%] w-[94.338px]">
        <p className="leading-[24px]">Back to Home</p>
      </div>
    </div>
  );
}

function Button83() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0)] h-[24px] left-0 top-0 w-[122.338px]" data-name="Button">
      <Frame88 />
      <Span68 />
    </div>
  );
}

function Container430() {
  return (
    <div className="absolute h-[24px] left-[24px] top-[40px] w-[327.2px]" data-name="Container">
      <Button83 />
    </div>
  );
}

function Span69() {
  return (
    <div className="absolute h-[40px] left-[23.27px] top-[28px] w-[49.438px]" data-name="Span">
      <div className="absolute flex flex-col font-['Inter:Light',sans-serif] font-light h-[48px] justify-center leading-[0] left-[24.72px] not-italic text-[#111827] text-[30.6px] text-center top-[20px] translate-x-[-50%] translate-y-[-50%] w-[49.438px]">
        <p className="leading-[40px]">👋</p>
      </div>
    </div>
  );
}

function Container431() {
  return (
    <div className="absolute bg-white left-[16px] rounded-[9999px] size-[96px] top-[16px]" data-name="Container">
      <Span69 />
    </div>
  );
}

function Container432() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.1)] border-0 border-[rgba(255,255,255,0.2)] border-solid left-[99.6px] rounded-[9999px] shadow-[0px_25px_50px_-12px_rgba(0,0,0,0.25),0px_0px_0px_0px_rgba(0,0,0,0),0px_0px_0px_0px_rgba(0,0,0,0)] size-[128px] top-[33.15px]" data-name="Container">
      <Container431 />
    </div>
  );
}

function Heading54() {
  return (
    <div className="absolute font-['Inter:Bold',sans-serif] font-bold h-[80px] leading-[0] left-0 not-italic text-[30.6px] text-center text-white top-0 w-[320px]" data-name="Heading">
      <div className="absolute flex flex-col h-[48px] justify-center left-[160px] top-[20px] translate-x-[-50%] translate-y-[-50%] w-[179.9px]">
        <p className="leading-[40px]">{`Go do your `}</p>
      </div>
      <div className="absolute flex flex-col h-[48px] justify-center left-[160px] top-[60px] translate-x-[-50%] translate-y-[-50%] w-[191.8px]">
        <p className="leading-[40px]">HumanPing</p>
      </div>
    </div>
  );
}

function Paragraph58() {
  return (
    <div className="absolute font-['Inter:Light',sans-serif] font-light h-[58.5px] leading-[0] left-0 not-italic text-[#dbeafe] text-[15.3px] text-center top-[96px] w-[320px]" data-name="Paragraph">
      <div className="absolute flex flex-col h-[24px] justify-center left-[159.99px] top-[14.4px] translate-x-[-50%] translate-y-[-50%] w-[280.163px]">
        <p className="leading-[29px]">{`Take your time. Put your phone away. `}</p>
      </div>
      <div className="absolute flex flex-col h-[24px] justify-center left-[159.99px] top-[43.65px] translate-x-[-50%] translate-y-[-50%] w-[228.112px]">
        <p className="leading-[29px]">{`Come back when you're done.`}</p>
      </div>
    </div>
  );
}

function Container433() {
  return (
    <div className="absolute h-[154.5px] left-[3.6px] top-[193.15px] w-[320px]" data-name="Container">
      <Heading54 />
      <Paragraph58 />
    </div>
  );
}

function Paragraph59() {
  return (
    <div className="absolute font-['Inter:Medium',sans-serif] font-medium h-[48px] leading-[0] left-[24.8px] not-italic text-[13.6px] text-center text-white top-[24.8px] w-[270.4px]" data-name="Paragraph">
      <div className="absolute flex flex-col h-[21.6px] justify-center left-[135.2px] top-[11.6px] translate-x-[-50%] translate-y-[-50%] w-[238.65px]">
        <p className="leading-[24px]">{`"Ask one person how their day is `}</p>
      </div>
      <div className="absolute flex flex-col h-[21.6px] justify-center left-[135.19px] top-[35.6px] translate-x-[-50%] translate-y-[-50%] w-[53.212px]">
        <p className="leading-[24px]">{`going."`}</p>
      </div>
    </div>
  );
}

function Container434() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.7)] border-0 border-[rgba(255,255,255,0.4)] border-solid h-[97.6px] left-[3.6px] rounded-[16px] shadow-[0px_8px_10px_-6px_rgba(30,58,138,0.05),0px_20px_25px_-5px_rgba(30,58,138,0.05),0px_0px_0px_0px_rgba(0,0,0,0),0px_0px_0px_0px_rgba(0,0,0,0)] top-[379.65px] w-[320px]" data-name="Container">
      <Paragraph59 />
    </div>
  );
}

function Container435() {
  return (
    <div className="absolute h-[510.4px] left-[24px] top-[64px] w-[327.2px]" data-name="Container">
      <Container432 />
      <Container433 />
      <Container434 />
    </div>
  );
}

function Button84() {
  return (
    <div className="absolute bg-[#fefcff] h-[60px] left-0 rounded-[9999px] shadow-[0px_2px_4px_-2px_rgba(0,0,0,0.1),0px_4px_6px_-1px_rgba(0,0,0,0.1),0px_0px_0px_0px_rgba(0,0,0,0),0px_0px_0px_0px_rgba(0,0,0,0)] top-0 w-[327.2px]" data-name="Button">
      <div className="absolute flex flex-col font-['Inter:Medium',sans-serif] font-medium h-[24px] justify-center leading-[0] left-[163.6px] not-italic text-[#252121] text-[15.3px] text-center top-[29.6px] translate-x-[-50%] translate-y-[-50%] w-[91.225px]">
        <p className="leading-[28px]">{`I've done it`}</p>
      </div>
    </div>
  );
}

function Container436() {
  return (
    <div className="absolute h-[60px] left-[24px] top-[574px] w-[327px]" data-name="Container">
      <Button84 />
    </div>
  );
}

function Container437() {
  return (
    <div className="absolute h-[690.4px] left-0 top-0 w-[375.2px]" data-name="Container" style={{ backgroundImage: "linear-gradient(118.522deg, rgb(37, 99, 235) 25%, rgb(126, 34, 206) 95.711%)" }}>
      <Container430 />
      <Container435 />
      <Container436 />
    </div>
  );
}

function Container438() {
  return (
    <div className="absolute h-[690.4px] left-0 overflow-clip shadow-[0px_25px_50px_-12px_rgba(0,0,0,0.25),0px_0px_0px_0px_rgba(0,0,0,0),0px_0px_0px_0px_rgba(0,0,0,0)] top-0 w-[375.2px]" data-name="Container" style={{ backgroundImage: "linear-gradient(118.522deg, rgb(239, 246, 255) 25%, rgb(250, 245, 255) 60.355%, rgb(240, 253, 244) 95.711%)" }}>
      <Container437 />
    </div>
  );
}

function Container439() {
  return (
    <div className="absolute bg-[#f3f4f6] h-[690.4px] left-0 top-0 w-[375.2px]" data-name="Container">
      <Container438 />
    </div>
  );
}

function Container440() {
  return (
    <div className="absolute h-[690.4px] left-0 top-0 w-[375.2px]" data-name="Container">
      <Container439 />
    </div>
  );
}

function Component24TaskStatus() {
  return (
    <div className="absolute bg-white h-[690.4px] left-[3165px] top-[2376px] w-[375.2px]" data-name="24. task_status">
      <Container440 />
    </div>
  );
}

function Heading55() {
  return (
    <div className="absolute h-[28px] left-0 top-[6px] w-[139.725px]" data-name="Heading">
      <div className="absolute flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[26.4px] justify-center leading-[0] left-0 not-italic text-[#111827] text-[17px] top-[14px] translate-y-[-50%] w-[139.725px]">
        <p className="leading-[28px]">How did it feel?</p>
      </div>
    </div>
  );
}

function Frame89() {
  return (
    <div className="absolute left-[8px] size-[24px] top-[8px]" data-name="Frame">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Frame">
          <path d="M18 6L6 18" id="Vector" stroke="var(--stroke-0, #9CA3AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d="M6 6L18 18" id="Vector_2" stroke="var(--stroke-0, #9CA3AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Button85() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0)] left-[287.2px] size-[40px] top-0" data-name="Button">
      <Frame89 />
    </div>
  );
}

function Container441() {
  return (
    <div className="absolute h-[40px] left-[24px] top-[24px] w-[327.2px]" data-name="Container">
      <Heading55 />
      <Button85 />
    </div>
  );
}

function Span70() {
  return (
    <div className="absolute h-[36px] left-[27.6px] top-[16.6px] w-[41.2px]" data-name="Span">
      <div className="absolute flex flex-col font-['Inter:Light',sans-serif] font-light h-[39.2px] justify-center leading-[0] left-[20.6px] not-italic text-[#111827] text-[25.5px] text-center top-[18px] translate-x-[-50%] translate-y-[-50%] w-[41.2px]">
        <p className="leading-[36px]">😊</p>
      </div>
    </div>
  );
}

function Span71() {
  return (
    <div className="absolute h-[20px] left-[30.74px] top-[60.6px] w-[34.925px]" data-name="Span">
      <div className="absolute flex flex-col font-['Inter:Medium',sans-serif] font-medium h-[18.4px] justify-center leading-[0] left-[17.46px] not-italic text-[#4b5563] text-[11.9px] text-center top-[10px] translate-x-[-50%] translate-y-[-50%] w-[34.925px]">
        <p className="leading-[20px]">Good</p>
      </div>
    </div>
  );
}

function Button86() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0)] border border-[#f3f4f6] border-solid h-[99.2px] left-0 rounded-[12px] top-0 w-[98.4px]" data-name="Button">
      <Span70 />
      <Span71 />
    </div>
  );
}

function Span72() {
  return (
    <div className="absolute h-[36px] left-[27.6px] top-[16.6px] w-[41.2px]" data-name="Span">
      <div className="absolute flex flex-col font-['Inter:Light',sans-serif] font-light h-[39.2px] justify-center leading-[0] left-[20.6px] not-italic text-[#111827] text-[25.5px] text-center top-[18px] translate-x-[-50%] translate-y-[-50%] w-[41.2px]">
        <p className="leading-[36px]">😐</p>
      </div>
    </div>
  );
}

function Span73() {
  return (
    <div className="absolute h-[20px] left-[24.41px] top-[60.6px] w-[47.563px]" data-name="Span">
      <div className="absolute flex flex-col font-['Inter:Medium',sans-serif] font-medium h-[18.4px] justify-center leading-[0] left-[23.78px] not-italic text-[#4b5563] text-[11.9px] text-center top-[10px] translate-x-[-50%] translate-y-[-50%] w-[47.563px]">
        <p className="leading-[20px]">Neutral</p>
      </div>
    </div>
  );
}

function Button87() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0)] border border-[#f3f4f6] border-solid h-[99.2px] left-[114.4px] rounded-[12px] top-0 w-[98.4px]" data-name="Button">
      <Span72 />
      <Span73 />
    </div>
  );
}

function Span74() {
  return (
    <div className="absolute h-[36px] left-[27.6px] top-[16.6px] w-[41.2px]" data-name="Span">
      <div className="absolute flex flex-col font-['Inter:Light',sans-serif] font-light h-[39.2px] justify-center leading-[0] left-[20.6px] not-italic text-[#111827] text-[25.5px] text-center top-[18px] translate-x-[-50%] translate-y-[-50%] w-[41.2px]">
        <p className="leading-[36px]">😬</p>
      </div>
    </div>
  );
}

function Span75() {
  return (
    <div className="absolute h-[20px] left-[18.93px] top-[60.6px] w-[58.538px]" data-name="Span">
      <div className="absolute flex flex-col font-['Inter:Medium',sans-serif] font-medium h-[18.4px] justify-center leading-[0] left-[29.27px] not-italic text-[#1d4ed8] text-[11.9px] text-center top-[10px] translate-x-[-50%] translate-y-[-50%] w-[58.538px]">
        <p className="leading-[20px]">Awkward</p>
      </div>
    </div>
  );
}

function Button88() {
  return (
    <div className="absolute bg-[#eff6ff] border border-[#3b82f6] border-solid h-[99.2px] left-[228.8px] rounded-[12px] top-0 w-[98.4px]" data-name="Button">
      <Span74 />
      <Span75 />
    </div>
  );
}

function Container442() {
  return (
    <div className="absolute h-[99.2px] left-[24px] top-[88px] w-[327.2px]" data-name="Container">
      <Button86 />
      <Button87 />
      <Button88 />
    </div>
  );
}

function Label8() {
  return (
    <div className="absolute h-[18.4px] left-[4px] top-[3.2px] w-[173.413px]" data-name="Label">
      <div className="absolute flex flex-col font-['Inter:Medium',sans-serif] font-medium h-[18.4px] justify-center leading-[0] left-0 not-italic text-[#374151] text-[11.9px] top-[9.2px] translate-y-[-50%] w-[173.413px]">
        <p className="leading-[20px]">Add a short note (optional)</p>
      </div>
    </div>
  );
}

function Container443() {
  return (
    <div className="absolute content-stretch flex h-[100px] items-start left-0 p-[16px] rounded-[12px] top-[32px] w-[327.2px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-0 border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <p className="font-['Inter:Light',sans-serif] font-light leading-[24px] not-italic relative shrink-0 text-[#ccc] text-[16px] text-nowrap">What happened? How did they react?</p>
    </div>
  );
}

function Container444() {
  return (
    <div className="absolute h-[137.6px] left-[24px] top-[211.2px] w-[327.2px]" data-name="Container">
      <Label8 />
      <Container443 />
    </div>
  );
}

function StateLayer11() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-center px-[24px] py-[16px] relative shrink-0" data-name="State-layer">
      <div className="flex flex-col font-['Roboto:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[16px] text-nowrap text-white tracking-[0.15px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[24px]">Submit Reflection</p>
      </div>
    </div>
  );
}

function Content11() {
  return (
    <div className="bg-[#6750a4] content-stretch flex items-center justify-center overflow-clip relative rounded-[100px] shrink-0" data-name="Content">
      <StateLayer11 />
    </div>
  );
}

function Button89() {
  return (
    <div className="absolute content-stretch flex items-center justify-center left-[133px] top-[372.4px] w-[120px]" data-name="Button">
      <Content11 />
    </div>
  );
}

function Container445() {
  return (
    <div className="absolute bg-white h-[480.8px] left-0 rounded-tl-[24px] rounded-tr-[24px] top-[209.6px] w-[375.2px]" data-name="Container">
      <Container441 />
      <Container442 />
      <Container444 />
      <Button89 />
    </div>
  );
}

function Container446() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0.5)] h-[690.4px] left-0 top-0 w-[375.2px]" data-name="Container">
      <Container445 />
    </div>
  );
}

function Container447() {
  return (
    <div className="absolute h-[690.4px] left-0 overflow-clip shadow-[0px_25px_50px_-12px_rgba(0,0,0,0.25),0px_0px_0px_0px_rgba(0,0,0,0),0px_0px_0px_0px_rgba(0,0,0,0)] top-0 w-[375.2px]" data-name="Container" style={{ backgroundImage: "linear-gradient(118.522deg, rgb(239, 246, 255) 25%, rgb(250, 245, 255) 60.355%, rgb(240, 253, 244) 95.711%)" }}>
      <Container446 />
    </div>
  );
}

function Container448() {
  return (
    <div className="absolute bg-[#f3f4f6] h-[690.4px] left-0 top-0 w-[375.2px]" data-name="Container">
      <Container447 />
    </div>
  );
}

function Container449() {
  return (
    <div className="absolute h-[690.4px] left-0 top-0 w-[375.2px]" data-name="Container">
      <Container448 />
    </div>
  );
}

function Component25HowUserFeltAfterTask() {
  return (
    <div className="absolute bg-white h-[690.4px] left-[3799px] top-[2376px] w-[375.2px]" data-name="25. how_user_felt_after_task">
      <Container449 />
    </div>
  );
}

function Button90() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0)] h-[20px] left-0 top-0 w-[29.7px]" data-name="Button">
      <div className="absolute flex flex-col font-['Inter:Medium',sans-serif] font-medium h-[18.4px] justify-center leading-[0] left-[14.85px] not-italic text-[#171818] text-[11.9px] text-center top-[10px] translate-x-[-50%] translate-y-[-50%] w-[29.7px]">
        <p className="leading-[20px]">Back</p>
      </div>
    </div>
  );
}

function Button91() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0)] h-[20px] left-[284.13px] top-0 w-[27.075px]" data-name="Button">
      <div className="absolute flex flex-col font-['Inter:Medium',sans-serif] font-medium h-[18.4px] justify-center leading-[0] left-[13.54px] not-italic text-[#151616] text-[11.9px] text-center top-[10px] translate-x-[-50%] translate-y-[-50%] w-[27.075px]">
        <p className="leading-[20px]">Skip</p>
      </div>
    </div>
  );
}

function Container450() {
  return (
    <div className="absolute h-[20px] left-[32px] top-[80px] w-[311.2px]" data-name="Container">
      <Button90 />
      <Button91 />
    </div>
  );
}

function Container451() {
  return <div className="absolute bg-[rgba(187,247,208,0.3)] blur-[32px] filter left-0 rounded-[9999px] size-[256px] top-0" data-name="Container" />;
}

function Frame90() {
  return (
    <div className="absolute left-[88px] size-[80px] top-[88px]" data-name="Frame">
      <div className="absolute inset-[0_0_-2.29%_0]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 80 81.8333">
          <g filter="url(#filter0_d_1_2096)" id="Frame">
            <path d={svgPaths.p1961df80} id="Vector" stroke="var(--stroke-0, #0BF345)" strokeLinecap="round" strokeLinejoin="round" />
            <path d={svgPaths.p28ea6f80} id="Vector_2" stroke="var(--stroke-0, #0BF345)" strokeLinecap="round" strokeLinejoin="round" />
          </g>
          <defs>
            <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="88" id="filter0_d_1_2096" width="88" x="-4" y="0">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
              <feOffset dy="4" />
              <feGaussianBlur stdDeviation="2" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
              <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_1_2096" />
              <feBlend in="SourceGraphic" in2="effect1_dropShadow_1_2096" mode="normal" result="shape" />
            </filter>
          </defs>
        </svg>
      </div>
    </div>
  );
}

function Container452() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.7)] border-0 border-[rgba(255,255,255,0.4)] border-solid left-0 rounded-[16px] shadow-[0px_8px_10px_-6px_rgba(30,58,138,0.05),0px_20px_25px_-5px_rgba(30,58,138,0.05),0px_0px_0px_0px_rgba(0,0,0,0),0px_0px_0px_0px_rgba(0,0,0,0)] size-[256px] top-0" data-name="Container">
      <Frame90 />
    </div>
  );
}

function Container453() {
  return (
    <div className="absolute left-[27.6px] size-[256px] top-[41.95px]" data-name="Container">
      <Container451 />
      <Container452 />
    </div>
  );
}

function Heading56() {
  return (
    <div className="absolute font-['Inter:Bold',sans-serif] font-bold h-[72px] leading-[0] left-0 not-italic text-[#1f2937] text-[25.5px] text-center top-0 w-[311.2px]" data-name="Heading">
      <div className="absolute flex flex-col h-[39.2px] justify-center left-[155.6px] top-[18px] translate-x-[-50%] translate-y-[-50%] w-[299.825px]">
        <p className="leading-[36px]">{`Do it offline. Reflect in `}</p>
      </div>
      <div className="absolute flex flex-col h-[39.2px] justify-center left-[155.6px] top-[54px] translate-x-[-50%] translate-y-[-50%] w-[114.225px]">
        <p className="leading-[36px]">seconds.</p>
      </div>
    </div>
  );
}

function Paragraph60() {
  return (
    <div className="absolute font-['Inter:Light',sans-serif] font-light h-[58.5px] leading-[0] left-0 not-italic text-[#6b7280] text-[15.3px] text-center top-[88px] w-[311.2px]" data-name="Paragraph">
      <div className="absolute flex flex-col h-[24px] justify-center left-[155.6px] top-[14.4px] translate-x-[-50%] translate-y-[-50%] w-[283.85px]">
        <p className="leading-[29px]">{`Complete it in real life, then tap done. `}</p>
      </div>
      <div className="absolute flex flex-col h-[24px] justify-center left-[155.6px] top-[43.65px] translate-x-[-50%] translate-y-[-50%] w-[168.625px]">
        <p className="leading-[29px]">No feeds, no pressure.</p>
      </div>
    </div>
  );
}

function Container454() {
  return (
    <div className="absolute h-[146.5px] left-0 top-[329.95px] w-[311.2px]" data-name="Container">
      <Heading56 />
      <Paragraph60 />
    </div>
  );
}

function Container455() {
  return (
    <div className="absolute h-[518.4px] left-[32px] top-[100px] w-[311.2px]" data-name="Container">
      <Container453 />
      <Container454 />
    </div>
  );
}

function Container456() {
  return <div className="absolute bg-[#d1d5db] left-[123.6px] rounded-[9999px] size-[8px] top-0" data-name="Container" />;
}

function Container457() {
  return <div className="absolute bg-[#22c55e] h-[8px] left-[139.6px] rounded-[9999px] top-0 w-[32px]" data-name="Container" />;
}

function Container458() {
  return <div className="absolute bg-[#d1d5db] left-[179.6px] rounded-[9999px] size-[8px] top-0" data-name="Container" />;
}

function Container459() {
  return (
    <div className="absolute h-[40px] left-[32px] top-[618.4px] w-[311.2px]" data-name="Container">
      <Container456 />
      <Container457 />
      <Container458 />
    </div>
  );
}

function Container460() {
  return (
    <div className="absolute h-[690.4px] left-0 top-0 w-[375.2px]" data-name="Container">
      <Container450 />
      <Container455 />
      <Container459 />
    </div>
  );
}

function Container461() {
  return (
    <div className="absolute h-[690.4px] left-0 overflow-clip shadow-[0px_25px_50px_-12px_rgba(0,0,0,0.25),0px_0px_0px_0px_rgba(0,0,0,0),0px_0px_0px_0px_rgba(0,0,0,0)] top-0 w-[375.2px]" data-name="Container" style={{ backgroundImage: "linear-gradient(118.522deg, rgb(239, 246, 255) 25%, rgb(250, 245, 255) 60.355%, rgb(240, 253, 244) 95.711%)" }}>
      <Container460 />
    </div>
  );
}

function Container462() {
  return (
    <div className="absolute bg-[#f3f4f6] h-[690.4px] left-0 top-0 w-[375.2px]" data-name="Container">
      <Container461 />
    </div>
  );
}

function Container463() {
  return (
    <div className="absolute h-[690.4px] left-0 top-0 w-[375.2px]" data-name="Container">
      <Container462 />
    </div>
  );
}

function Component3Intro() {
  return (
    <div className="absolute bg-white h-[690.4px] left-[1269px] top-[47px] w-[375.2px]" data-name="3.intro-2">
      <Container463 />
    </div>
  );
}

function Button92() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0)] h-[20px] left-0 top-0 w-[29.7px]" data-name="Button">
      <div className="absolute flex flex-col font-['Inter:Medium',sans-serif] font-medium h-[18.4px] justify-center leading-[0] left-[14.85px] not-italic text-[#151515] text-[11.9px] text-center top-[10px] translate-x-[-50%] translate-y-[-50%] w-[29.7px]">
        <p className="leading-[20px]">Back</p>
      </div>
    </div>
  );
}

function Container464() {
  return (
    <div className="absolute h-[30px] left-[32px] top-[53px] w-[306px]" data-name="Container">
      <Button92 />
    </div>
  );
}

function Container465() {
  return <div className="absolute bg-[rgba(233,213,255,0.3)] blur-[32px] filter left-0 rounded-[9999px] size-[256px] top-0" data-name="Container" />;
}

function Frame91() {
  return (
    <div className="absolute left-[88px] size-[80px] top-[88px]" data-name="Frame">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 80 80">
        <g id="Frame">
          <path d={svgPaths.pa7cca40} id="Vector" stroke="var(--stroke-0, #C084FC)" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      </svg>
    </div>
  );
}

function Container466() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.7)] border-0 border-[rgba(255,255,255,0.4)] border-solid left-0 rounded-[16px] shadow-[0px_8px_10px_-6px_rgba(30,58,138,0.05),0px_20px_25px_-5px_rgba(30,58,138,0.05),0px_0px_0px_0px_rgba(0,0,0,0),0px_0px_0px_0px_rgba(0,0,0,0)] size-[256px] top-0" data-name="Container">
      <Frame91 />
    </div>
  );
}

function Container467() {
  return (
    <div className="absolute left-[24.8px] size-[256px] top-0" data-name="Container">
      <Container465 />
      <Container466 />
    </div>
  );
}

function Heading57() {
  return (
    <div className="absolute font-['Inter:Bold',sans-serif] font-bold h-[72px] leading-[0] left-0 not-italic text-[#1f2937] text-[25.5px] text-center top-0 w-[305.6px]" data-name="Heading">
      <div className="absolute flex flex-col h-[39.2px] justify-center left-[152.79px] top-[18px] translate-x-[-50%] translate-y-[-50%] w-[252.613px]">
        <p className="leading-[36px]">{`Small actions build `}</p>
      </div>
      <div className="absolute flex flex-col h-[39.2px] justify-center left-[152.8px] top-[54px] translate-x-[-50%] translate-y-[-50%] w-[147px]">
        <p className="leading-[36px]">confidence</p>
      </div>
    </div>
  );
}

function Paragraph61() {
  return (
    <div className="absolute font-['Inter:Light',sans-serif] font-light h-[58.5px] leading-[0] left-0 not-italic text-[#6b7280] text-[15.3px] text-center top-[88px] w-[305.6px]" data-name="Paragraph">
      <div className="absolute flex flex-col h-[24px] justify-center left-[152.8px] top-[14.4px] translate-x-[-50%] translate-y-[-50%] w-[254.9px]">
        <p className="leading-[29px]">{`Feel more connected to the world `}</p>
      </div>
      <div className="absolute flex flex-col h-[24px] justify-center left-[152.79px] top-[43.65px] translate-x-[-50%] translate-y-[-50%] w-[211.212px]">
        <p className="leading-[29px]">around you, without anxiety.</p>
      </div>
    </div>
  );
}

function Container468() {
  return (
    <div className="absolute h-[146.5px] left-0 top-[288px] w-[305.6px]" data-name="Container">
      <Heading57 />
      <Paragraph61 />
    </div>
  );
}

function Container469() {
  return (
    <div className="absolute h-[434.5px] left-[32px] top-[100px] w-[305.6px]" data-name="Container">
      <Container467 />
      <Container468 />
    </div>
  );
}

function Container470() {
  return <div className="absolute bg-[#d1d5db] left-[120.8px] rounded-[9999px] size-[8px] top-0" data-name="Container" />;
}

function Container471() {
  return <div className="absolute bg-[#d1d5db] left-[136.8px] rounded-[9999px] size-[8px] top-0" data-name="Container" />;
}

function Container472() {
  return <div className="absolute bg-[#a855f7] h-[8px] left-[152.8px] rounded-[9999px] top-0 w-[32px]" data-name="Container" />;
}

function Container473() {
  return (
    <div className="absolute h-[8px] left-0 top-0 w-[305.6px]" data-name="Container">
      <Container470 />
      <Container471 />
      <Container472 />
    </div>
  );
}

function StateLayer12() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-center px-[24px] py-[16px] relative shrink-0" data-name="State-layer">
      <div className="flex flex-col font-['Roboto:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[16px] text-nowrap text-white tracking-[0.15px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[24px]">Get Started</p>
      </div>
    </div>
  );
}

function Content12() {
  return (
    <div className="bg-[#6750a4] content-stretch flex items-center justify-center overflow-clip relative rounded-[100px] shrink-0" data-name="Content">
      <StateLayer12 />
    </div>
  );
}

function Button93() {
  return (
    <div className="absolute content-stretch flex items-center justify-center left-[52px] top-[47.5px] w-[201px]" data-name="Button">
      <Content12 />
    </div>
  );
}

function Container474() {
  return (
    <div className="absolute h-[132px] left-[32px] top-[534.5px] w-[305.6px]" data-name="Container">
      <Container473 />
      <Button93 />
    </div>
  );
}

function Container475() {
  return (
    <div className="absolute h-[698.5px] left-0 top-0 w-[369.6px]" data-name="Container">
      <Container464 />
      <Container469 />
      <Container474 />
    </div>
  );
}

function Container476() {
  return (
    <div className="absolute h-[698.5px] left-0 overflow-clip shadow-[0px_25px_50px_-12px_rgba(0,0,0,0.25),0px_0px_0px_0px_rgba(0,0,0,0),0px_0px_0px_0px_rgba(0,0,0,0)] top-0 w-[369.6px]" data-name="Container" style={{ backgroundImage: "linear-gradient(117.885deg, rgb(239, 246, 255) 25%, rgb(250, 245, 255) 60.355%, rgb(240, 253, 244) 95.711%)" }}>
      <Container475 />
    </div>
  );
}

function Container477() {
  return (
    <div className="absolute bg-[#f3f4f6] h-[698.5px] left-0 top-0 w-[369.6px]" data-name="Container">
      <Container476 />
    </div>
  );
}

function Container478() {
  return (
    <div className="absolute h-[698.5px] left-0 top-0 w-[369.6px]" data-name="Container">
      <Container477 />
    </div>
  );
}

function Component4Intro() {
  return (
    <div className="absolute bg-white h-[698.5px] left-[1903px] top-[43px] w-[369.6px]" data-name="4.intro-4">
      <Container478 />
    </div>
  );
}

function Frame92() {
  return (
    <div className="absolute left-[20px] size-[40px] top-[20px]" data-name="Frame">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40 40">
        <g id="Frame">
          <path d={svgPaths.p340bb300} id="Vector" stroke="var(--stroke-0, #16A34A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d={svgPaths.p36e70700} id="Vector_2" stroke="var(--stroke-0, #16A34A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Container479() {
  return (
    <div className="absolute bg-[#dcfce7] left-[123.6px] rounded-[9999px] size-[80px] top-[32px]" data-name="Container">
      <Frame92 />
    </div>
  );
}

function Heading58() {
  return (
    <div className="absolute h-[36px] left-[32px] top-[136px] w-[263.2px]" data-name="Heading">
      <div className="absolute flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[39.2px] justify-center leading-[0] left-[131.6px] not-italic text-[#111827] text-[25.5px] text-center top-[18px] translate-x-[-50%] translate-y-[-50%] w-[138.1px]">
        <p className="leading-[36px]">Great Job!</p>
      </div>
    </div>
  );
}

function Paragraph62() {
  return (
    <div className="absolute font-['Inter:Light',sans-serif] font-light h-[72px] leading-[0] left-[32px] not-italic text-[#4b5563] text-[13.6px] text-center top-[180px] w-[263.2px]" data-name="Paragraph">
      <div className="absolute flex flex-col h-[21.6px] justify-center left-[131.6px] top-[11.6px] translate-x-[-50%] translate-y-[-50%] w-[233.8px]">
        <p className="leading-[24px]">{`You've successfully completed your `}</p>
      </div>
      <div className="absolute flex flex-col h-[21.6px] justify-center left-[131.6px] top-[35.6px] translate-x-[-50%] translate-y-[-50%] w-[207.125px]">
        <p className="leading-[24px]">{`check-in for today. Keep up the `}</p>
      </div>
      <div className="absolute flex flex-col h-[21.6px] justify-center left-[131.6px] top-[59.6px] translate-x-[-50%] translate-y-[-50%] w-[82.925px]">
        <p className="leading-[24px]">momentum!</p>
      </div>
    </div>
  );
}

function StateLayer13() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-center px-[16px] py-[10px] relative shrink-0" data-name="State-layer">
      <div className="flex flex-col font-['Roboto:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[14px] text-nowrap text-white tracking-[0.1px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[20px]">Return to Dashboard</p>
      </div>
    </div>
  );
}

function Content13() {
  return (
    <div className="bg-[#6750a4] content-stretch flex flex-col items-center justify-center overflow-clip relative rounded-[100px] shrink-0" data-name="Content">
      <StateLayer13 />
    </div>
  );
}

function Button94() {
  return (
    <div className="absolute content-stretch flex h-[48px] items-center justify-center left-[50px] top-[-0.4px]" data-name="Button">
      <Content13 />
    </div>
  );
}

function Button95() {
  return (
    <div className="absolute bg-[rgba(163,40,179,0)] h-[48px] left-0 rounded-[9999px] shadow-[0px_2px_4px_-2px_rgba(0,0,0,0.1),0px_4px_6px_-1px_rgba(0,0,0,0.1),0px_0px_0px_0px_rgba(0,0,0,0),0px_0px_0px_0px_rgba(0,0,0,0)] top-0 w-[263.2px]" data-name="Button">
      <Button94 />
    </div>
  );
}

function Frame93() {
  return <div className="absolute left-[36.58px] size-[16px] top-[16.8px]" data-name="Frame" />;
}

function StateLayer14() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-center px-[16px] py-[10px] relative shrink-0" data-name="State-layer">
      <div className="flex flex-col font-['Roboto:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[14px] text-nowrap text-white tracking-[0.1px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[20px]">View Weekly Summary</p>
      </div>
    </div>
  );
}

function Content14() {
  return (
    <div className="bg-[#6750a4] content-stretch flex flex-col items-center justify-center overflow-clip relative rounded-[100px] shrink-0" data-name="Content">
      <StateLayer14 />
    </div>
  );
}

function Button96() {
  return (
    <div className="absolute content-stretch flex h-[48px] items-center justify-center left-[45px] top-[-0.4px]" data-name="Button">
      <Content14 />
    </div>
  );
}

function Button97() {
  return (
    <div className="absolute bg-white border-0 border-[#e5e7eb] border-solid h-[49.6px] left-0 rounded-[9999px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05),0px_0px_0px_0px_rgba(0,0,0,0),0px_0px_0px_0px_rgba(0,0,0,0)] top-[64px] w-[263.2px]" data-name="Button">
      <Frame93 />
      <Button96 />
    </div>
  );
}

function Container480() {
  return (
    <div className="absolute h-[113.6px] left-[32px] top-[284px] w-[263.2px]" data-name="Container">
      <Button95 />
      <Button97 />
    </div>
  );
}

function Container481() {
  return (
    <div className="absolute bg-white h-[429.6px] left-[24px] rounded-[16px] shadow-[0px_4px_6px_-4px_rgba(0,0,0,0.1),0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_0px_0px_0px_rgba(0,0,0,0),0px_0px_0px_0px_rgba(0,0,0,0)] top-[130.4px] w-[327.2px]" data-name="Container">
      <Container479 />
      <Heading58 />
      <Paragraph62 />
      <Container480 />
    </div>
  );
}

function Container482() {
  return (
    <div className="absolute bg-[#f0fdf4] h-[690.4px] left-0 top-0 w-[375.2px]" data-name="Container">
      <Container481 />
    </div>
  );
}

function Container483() {
  return (
    <div className="absolute h-[690.4px] left-0 top-0 w-[375.2px]" data-name="Container">
      <Container482 />
    </div>
  );
}

function Component26TaskCompletion() {
  return (
    <div className="absolute bg-white h-[690.4px] left-[4433px] top-[2376px] w-[375.2px]" data-name="26. Task_completion">
      <Container483 />
    </div>
  );
}

function Frame94() {
  return (
    <div className="absolute left-[8px] size-[24px] top-[8px]" data-name="Frame">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Frame">
          <path d="M12 19L5 12L12 5" id="Vector" stroke="var(--stroke-0, #374151)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d="M19 12H5" id="Vector_2" stroke="var(--stroke-0, #374151)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Button98() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0)] left-[-8px] rounded-[9999px] size-[40px] top-0" data-name="Button">
      <Frame94 />
    </div>
  );
}

function Container484() {
  return (
    <div className="absolute h-[40px] left-[24px] top-[16px] w-[32px]" data-name="Container">
      <Button98 />
    </div>
  );
}

function Heading59() {
  return (
    <div className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold h-[28px] leading-[0] left-0 not-italic overflow-clip text-[#111827] text-[15.3px] top-0 w-[109.063px]" data-name="Heading">
      <div className="absolute flex flex-col h-[24px] justify-center left-0 top-[13.6px] translate-y-[-50%] w-[56.663px]">
        <p className="leading-[28px] text-[15.3px]">&nbsp;</p>
      </div>
      <div className="absolute flex flex-col h-[24px] justify-center left-0 top-[13.6px] translate-y-[-50%] w-[61.163px]">
        <p className="leading-[28px]">Weekly</p>
      </div>
      <div className="absolute flex flex-col h-[24px] justify-center left-[56.65px] top-[13.6px] translate-y-[-50%] w-[59.112px]">
        <p className="leading-[28px]"> </p>
      </div>
      <div className="absolute flex flex-col h-[24px] justify-center left-[57px] top-[14px] translate-y-[-50%] w-[93px]">
        <p className="leading-[28px]">Review</p>
      </div>
    </div>
  );
}

function Container485() {
  return (
    <div className="absolute h-[28px] left-[133px] top-[22px] w-[153px]" data-name="Container">
      <Heading59 />
    </div>
  );
}

function Container486() {
  return <div className="absolute h-[100px] left-[242.13px] top-[36px] w-[109.063px]" data-name="Container" />;
}

function Container487() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.5)] h-[72px] left-0 top-0 w-[375.2px]" data-name="Container">
      <Container484 />
      <Container485 />
      <Container486 />
    </div>
  );
}

function Heading60() {
  return (
    <div className="absolute h-[32px] left-0 top-[16px] w-[327.2px]" data-name="Heading">
      <div className="absolute flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[32px] justify-center leading-[0] left-[163.59px] not-italic text-[#111827] text-[20.4px] text-center top-[16px] translate-x-[-50%] translate-y-[-50%] w-[213.763px]">
        <p className="leading-[32px]">Your week in review</p>
      </div>
    </div>
  );
}

function Paragraph63() {
  return (
    <div className="absolute h-[24px] left-0 top-[48px] w-[327.2px]" data-name="Paragraph">
      <div className="absolute flex flex-col font-['Inter:Light',sans-serif] font-light h-[21.6px] justify-center leading-[0] left-[163.6px] not-italic text-[#6b7280] text-[13.6px] text-center top-[11.6px] translate-x-[-50%] translate-y-[-50%] w-[142.425px]">
        <p className="leading-[24px]">Small actions add up.</p>
      </div>
    </div>
  );
}

function Container488() {
  return (
    <div className="absolute h-[88px] left-0 top-0 w-[327.2px]" data-name="Container">
      <Heading60 />
      <Paragraph63 />
    </div>
  );
}

function Paragraph64() {
  return (
    <div className="absolute h-[20px] left-0 top-0 w-[128.588px]" data-name="Paragraph">
      <div className="absolute flex flex-col font-['Inter:Medium',sans-serif] font-medium h-[18.4px] justify-center leading-[0] left-0 not-italic text-[#f3e8ff] text-[11.9px] top-[10px] translate-y-[-50%] w-[128.588px]">
        <p className="leading-[20px]">Missions Completed</p>
      </div>
    </div>
  );
}

function Heading61() {
  return (
    <div className="absolute h-[40px] left-0 top-[24px] w-[128.588px]" data-name="Heading">
      <div className="absolute flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[48px] justify-center leading-[0] left-0 not-italic text-[#111827] text-[30.6px] top-[20px] translate-y-[-50%] w-[54.675px]">
        <p className="leading-[40px]">6/7</p>
      </div>
    </div>
  );
}

function Container489() {
  return (
    <div className="absolute h-[64px] left-0 top-0 w-[128.588px]" data-name="Container">
      <Paragraph64 />
      <Heading61 />
    </div>
  );
}

function Frame95() {
  return (
    <div className="absolute left-[16px] size-[32px] top-[16px]" data-name="Frame">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="Frame">
          <path d={svgPaths.p18cb7e80} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d={svgPaths.p26c56780} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Container490() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.2)] left-[215.2px] rounded-[9999px] size-[64px] top-0" data-name="Container">
      <Frame95 />
    </div>
  );
}

function Container491() {
  return (
    <div className="absolute h-[64px] left-[24px] top-[24px] w-[279.2px]" data-name="Container">
      <Container489 />
      <Container490 />
    </div>
  );
}

function Span76() {
  return (
    <div className="absolute h-[16px] left-0 top-0 w-[42.8px]" data-name="Span">
      <div className="absolute flex flex-col font-['Inter:Light',sans-serif] font-light h-[16px] justify-center leading-[0] left-0 not-italic text-[#f3e8ff] text-[10.2px] top-[8px] translate-y-[-50%] w-[42.8px]">
        <p className="leading-[16px]">Progress</p>
      </div>
    </div>
  );
}

function Span77() {
  return (
    <div className="absolute h-[16px] left-[257.43px] top-0 w-[21.775px]" data-name="Span">
      <div className="absolute flex flex-col font-['Inter:Light',sans-serif] font-light h-[16px] justify-center leading-[0] left-0 not-italic text-[#f3e8ff] text-[10.2px] top-[8px] translate-y-[-50%] w-[21.775px]">
        <p className="leading-[16px]">85%</p>
      </div>
    </div>
  );
}

function Container492() {
  return (
    <div className="absolute h-[16px] left-0 top-0 w-[279.2px]" data-name="Container">
      <Span76 />
      <Span77 />
    </div>
  );
}

function Container493() {
  return <div className="absolute bg-white h-[8px] left-0 rounded-[9999px] top-0 w-[237.313px]" data-name="Container" />;
}

function Container494() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0.2)] h-[8px] left-0 rounded-[9999px] top-[24px] w-[279.2px]" data-name="Container">
      <Container493 />
    </div>
  );
}

function Container495() {
  return (
    <div className="absolute h-[32px] left-[24px] top-[112px] w-[279.2px]" data-name="Container">
      <Container492 />
      <Container494 />
    </div>
  );
}

function Container496() {
  return (
    <div className="absolute bg-[#b037b0] h-[168px] left-0 rounded-[16px] shadow-[0px_4px_6px_-4px_rgba(30,58,138,0.05),0px_10px_15px_-3px_rgba(30,58,138,0.05),0px_0px_0px_0px_rgba(0,0,0,0),0px_0px_0px_0px_rgba(0,0,0,0)] top-[112px] w-[327.2px]" data-name="Container">
      <Container491 />
      <Container495 />
    </div>
  );
}

function Heading62() {
  return (
    <div className="absolute h-[24px] left-[24.8px] top-[24.8px] w-[277.6px]" data-name="Heading">
      <div className="absolute flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[21.6px] justify-center leading-[0] left-0 not-italic text-[#111827] text-[13.6px] top-[11.6px] translate-y-[-50%] w-[162.45px]">
        <p className="leading-[24px]">Most Common Feeling</p>
      </div>
    </div>
  );
}

function Container497() {
  return (
    <div className="absolute bg-[#fefce8] border-0 border-[#fef9c3] border-solid left-0 rounded-[9999px] size-[64px] top-0" data-name="Container">
      <div className="absolute flex flex-col font-['Inter:Light',sans-serif] font-light h-[48px] justify-center leading-[0] left-[7.28px] not-italic text-[#111827] text-[30.6px] top-[32px] translate-y-[-50%] w-[49.438px]">
        <p className="leading-[40px]">😊</p>
      </div>
    </div>
  );
}

function Paragraph65() {
  return (
    <div className="absolute h-[24px] left-0 top-0 w-[186.475px]" data-name="Paragraph">
      <div className="absolute flex flex-col font-['Inter:Medium',sans-serif] font-medium h-[21.6px] justify-center leading-[0] left-0 not-italic text-[#111827] text-[13.6px] top-[11.6px] translate-y-[-50%] w-[111.225px]">
        <p className="leading-[24px]">Good / Positive</p>
      </div>
    </div>
  );
}

function Paragraph66() {
  return (
    <div className="absolute h-[20px] left-0 top-[24px] w-[186.475px]" data-name="Paragraph">
      <div className="absolute flex flex-col font-['Inter:Light',sans-serif] font-light h-[18.4px] justify-center leading-[0] left-0 not-italic text-[#6b7280] text-[11.9px] top-[10px] translate-y-[-50%] w-[186.475px]">
        <p className="leading-[20px]">You felt good 4 times this week!</p>
      </div>
    </div>
  );
}

function Container498() {
  return (
    <div className="absolute h-[44px] left-[80px] top-[10px] w-[186.475px]" data-name="Container">
      <Paragraph65 />
      <Paragraph66 />
    </div>
  );
}

function Container499() {
  return (
    <div className="absolute h-[64px] left-[24.8px] top-[64.8px] w-[277.6px]" data-name="Container">
      <Container497 />
      <Container498 />
    </div>
  );
}

function Container500() {
  return (
    <div className="absolute bg-white border-0 border-[rgba(255,255,255,0.5)] border-solid h-[153.6px] left-0 rounded-[16px] shadow-[0px_4px_6px_-4px_rgba(30,58,138,0.05),0px_10px_15px_-3px_rgba(30,58,138,0.05),0px_0px_0px_0px_rgba(0,0,0,0),0px_0px_0px_0px_rgba(0,0,0,0)] top-[304px] w-[327.2px]" data-name="Container">
      <Heading62 />
      <Container499 />
    </div>
  );
}

function Button99() {
  return (
    <div className="absolute bg-white border-0 border-[#e5e7eb] border-solid h-[49.6px] left-0 rounded-[9999px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05),0px_0px_0px_0px_rgba(0,0,0,0),0px_0px_0px_0px_rgba(0,0,0,0)] top-[481.6px] w-[327.2px]" data-name="Button">
      <div className="absolute flex flex-col font-['Inter:Medium',sans-serif] font-medium h-[21.6px] justify-center leading-[0] left-[163.6px] not-italic text-[#111827] text-[13.6px] text-center top-[24.4px] translate-x-[-50%] translate-y-[-50%] w-[136.8px]">
        <p className="leading-[24px]">Back to Dashboard</p>
      </div>
    </div>
  );
}

function Container501() {
  return (
    <div className="absolute h-[531.2px] left-[24px] top-[24px] w-[327.2px]" data-name="Container">
      <Container488 />
      <Container496 />
      <Container500 />
      <Button99 />
    </div>
  );
}

function Container502() {
  return (
    <div className="absolute h-[618.4px] left-0 top-[72px] w-[375.2px]" data-name="Container">
      <Container501 />
    </div>
  );
}

function Container503() {
  return (
    <div className="absolute h-[690.4px] left-0 overflow-clip shadow-[0px_25px_50px_-12px_rgba(0,0,0,0.25),0px_0px_0px_0px_rgba(0,0,0,0),0px_0px_0px_0px_rgba(0,0,0,0)] top-0 w-[375.2px]" data-name="Container" style={{ backgroundImage: "linear-gradient(118.522deg, rgb(239, 246, 255) 25%, rgb(250, 245, 255) 60.355%, rgb(240, 253, 244) 95.711%)" }}>
      <Container487 />
      <Container502 />
    </div>
  );
}

function Container504() {
  return (
    <div className="absolute bg-[#f3f4f6] h-[690.4px] left-0 top-0 w-[375.2px]" data-name="Container">
      <Container503 />
    </div>
  );
}

function Container505() {
  return (
    <div className="absolute h-[690.4px] left-0 top-0 w-[375.2px]" data-name="Container">
      <Container504 />
    </div>
  );
}

function Component27ThisWeekMissionCompletedReview() {
  return (
    <div className="absolute bg-white h-[690.4px] left-[5067px] top-[2376px] w-[375.2px]" data-name="27. This_Week_mission_completed_review">
      <Container505 />
    </div>
  );
}

export default function Frame1() {
  return (
    <div className="relative size-full">
      <Component1Splash />
      <Component2Intro />
      <Component5SignUp />
      <Component6LoginPage />
      <Component7ForgotPassword />
      <Component8HomeDashboard />
      <Component9HamMenu />
      <Component10MissionsCompleted />
      <Component11Profile />
      <Component12Settings />
      <Component13Feedback />
      <Component14Notifications />
      <Component15AllTimeHistory />
      <Component16LastWeekHistory />
      <Component17LastMonthHistory />
      <Component18Streaks />
      <Component19TodaysMission />
      <Component20TaskInstruction />
      <Component21UserFeeling />
      <Component22TaskSelectionPlace />
      <Component23Suggestion />
      <Component24TaskStatus />
      <Component25HowUserFeltAfterTask />
      <Component3Intro />
      <Component4Intro />
      <Component26TaskCompletion />
      <Component27ThisWeekMissionCompletedReview />
    </div>
  );
}