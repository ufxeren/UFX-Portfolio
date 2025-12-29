import clsx from "clsx";
import imgEllipse1 from "figma:asset/4b981f50bc3c5c60a383d0e1159545f8fc9ca1ff.png";
import imgBriefcase from "figma:asset/751c0d84e3e57def13a1fd2a905ab4af3ced478f.png";
import imgBlackMulberryPaperTexturedBackground2 from "figma:asset/9d99229877268ec72a3ef8919d55efb3cc1ad7f3.png";
import imgHomePage from "figma:asset/74daba549895527bd4d20338cd777651ed4ccc9f.png";
import imgRectangle4 from "figma:asset/eeaeaaff03df38c0718f0cfa06c55d807500d43d.png";
import imgRectangle6 from "figma:asset/79799271cf76ee3d7b82d4a359b472767905a43d.png";
import imgRectangle5 from "figma:asset/7ba42ea7de6ec95151234027d01ec6244b9e3219.png";
import imgRectangle7 from "figma:asset/eb19374a14f3274ad977d628af80a86e892246fc.png";
import imgRectangle11 from "figma:asset/5f13752956aa9eca4882f9548bdd5a1bf601bd40.png";
import imgRectangle8 from "figma:asset/3e9f2564a8c6d950aa2c7bae117fdb3685045f21.png";
import imgRectangle10 from "figma:asset/11e4f916f8302574fff64dd568d4e54a6e5944b7.png";
import imgRectangle9 from "figma:asset/b7deb5ffb7e089e2af85108d514a493be66d0c2e.png";
import imgRectangle12 from "figma:asset/02e99bcf8a957d89c826582b67ca8cc045b46a09.png";
import imgLightningBolt from "figma:asset/dd23829811e18c56a4d705c35f9e740b2c6aeb0f.png";
import imgLink from "figma:asset/a17454e68fa7d26c620869628dbaa28d96045d22.png";
import imgEllipse2 from "figma:asset/8343d75a959bbac55bc9a3ba8ffb5adfb2c4378e.png";
import imgRectangle13 from "figma:asset/98d67336c97c3b50b22081b3a21fa8d6f61c9e30.png";
import imgRectangle18 from "figma:asset/6f50af75e5a1b17a887131a7f7722ba1ad2d9c2e.png";
import imgRectangle19 from "figma:asset/c894c22136699da96d2f3d54a726759a2e0f2c6e.png";
import imgRectangle21 from "figma:asset/1be510c8e6c8f86d83033af35053b89560f3fe63.png";
import imgRectangle22 from "figma:asset/7e75f85a47bcb34cc101fcee8e43e232fec21e15.png";
import imgRectangle23 from "figma:asset/bdd6ebef08337d0ffbcb4a88996f82177b8ace48.png";
import imgRectangle20 from "figma:asset/bc34d6d7c08f17a41905e4870c60c17739fd53e3.png";
import imgRectangle24 from "figma:asset/87416784080ef4c9f313717de3e575e978ad0a87.png";
import imgRectangle25 from "figma:asset/922345a5a65b13c0e3c57c1ed7542f74eb6dcf5e.png";
import imgRectangle26 from "figma:asset/5cc0b2e45462aa8e3859fdc9e972b29bfca3f040.png";
import imgRectangle27 from "figma:asset/1ecb5c37d0dc7992adb67dc027e3f54b64b1c408.png";
import imgBrokenLink from "figma:asset/1cd651578f02b5153f5e916bf9cb127136f3c42d.png";
import imgLetter from "figma:asset/7ed509396293ed2e9a5393be45fa57d855689f34.png";
import imgPhone from "figma:asset/3d7544a749cbd8ffdff0532284039af4f3476fde.png";
type WrapperProps = {
  additionalClassNames?: string;
};

function Wrapper({ children, additionalClassNames = "" }: React.PropsWithChildren<WrapperProps>) {
  return (
    <div className={clsx("absolute h-[72px] rounded-[14px] w-[73px]", additionalClassNames)}>
      <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[14px]">{children}</div>
    </div>
  );
}
type TextProps = {
  text: string;
  additionalClassNames?: string;
};

function Text({ text, additionalClassNames = "" }: TextProps) {
  return (
    <div style={{ fontVariationSettings: "'wdth' 100" }} className={clsx("absolute flex flex-col font-['Roboto:SemiBold',sans-serif] font-semibold justify-center leading-[0] text-[16px] text-black text-center text-nowrap tracking-[1.28px] translate-x-[-50%] translate-y-[-50%]", additionalClassNames)}>
      <p className="leading-[normal]">{text}</p>
    </div>
  );
}
type Desktop4TextProps = {
  text: string;
  additionalClassNames?: string;
};

function Desktop4Text({ text, additionalClassNames = "" }: Desktop4TextProps) {
  return (
    <div style={{ fontVariationSettings: "'wdth' 100" }} className={clsx("absolute flex flex-col font-['Roboto:Light',sans-serif] font-light justify-center leading-[0] text-[24px] text-black text-center text-nowrap text-shadow-[0px_17px_19px_rgba(0,0,0,0.81)] tracking-[1.92px] translate-x-[-50%] translate-y-[-50%]", additionalClassNames)}>
      <p className="leading-[normal]">{text}</p>
    </div>
  );
}
type Desktop3HelperProps = {
  text: string;
  text1: string;
  text2: string;
};

function Desktop3Helper({ text, text1, text2 }: Desktop3HelperProps) {
  return (
    <ul className="list-disc list-inside mb-[30px]">
      <li className="mb-0 ms-[36px]">
        <span className="leading-[normal]">{text}</span>
      </li>
      <li className="mb-0 ms-[36px]">
        <span className="leading-[normal]">{text1}</span>
      </li>
      <li className="ms-[36px]">
        <span className="leading-[normal]">{text2}</span>
      </li>
    </ul>
  );
}
type Desktop2ImageProps = {
  additionalClassNames?: string;
};

function Desktop2Image({ additionalClassNames = "" }: Desktop2ImageProps) {
  return (
    <div className={clsx("absolute h-[356px] pointer-events-none top-[1844px] w-[285px]", additionalClassNames)}>
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover size-full" src={imgRectangle13} />
      <div aria-hidden="true" className="absolute border border-[#ededed] border-solid inset-0 shadow-[0px_4px_28.3px_13px_rgba(0,0,0,0.25)]" />
    </div>
  );
}
type LinkImageProps = {
  additionalClassNames?: string;
};

function LinkImage({ additionalClassNames = "" }: LinkImageProps) {
  return (
    <div className={clsx("absolute size-[32px]", additionalClassNames)}>
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-contain pointer-events-none size-full" src={imgLink} />
    </div>
  );
}
type LightningBoltImageProps = {
  additionalClassNames?: string;
};

function LightningBoltImage({ additionalClassNames = "" }: LightningBoltImageProps) {
  return (
    <div className={clsx("absolute size-[32px]", additionalClassNames)}>
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-contain pointer-events-none size-full" src={imgLightningBolt} />
    </div>
  );
}
type HomePageImageProps = {
  additionalClassNames?: string;
};

function HomePageImage({ additionalClassNames = "" }: HomePageImageProps) {
  return (
    <div className={clsx("absolute size-[32px]", additionalClassNames)}>
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-contain pointer-events-none size-full" src={imgHomePage} />
    </div>
  );
}
type BlackMulberryPaperTexturedBackgroundImageProps = {
  additionalClassNames?: string;
};

function BlackMulberryPaperTexturedBackgroundImage({ additionalClassNames = "" }: BlackMulberryPaperTexturedBackgroundImageProps) {
  return (
    <div className={clsx("absolute h-[2731px] w-[4096px]", additionalClassNames)}>
      <img alt="" className="absolute inset-0 max-w-none mix-blend-difference object-50%-50% object-cover opacity-25 pointer-events-none size-full" src={imgBlackMulberryPaperTexturedBackground2} />
    </div>
  );
}
type BriefcaseImageProps = {
  additionalClassNames?: string;
};

function BriefcaseImage({ additionalClassNames = "" }: BriefcaseImageProps) {
  return (
    <div className={clsx("absolute size-[32px]", additionalClassNames)}>
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-contain pointer-events-none size-full" src={imgBriefcase} />
    </div>
  );
}

export default function Group() {
  return (
    <div className="relative size-full">
      <div className="absolute bg-[#d7d7d7] h-[1024px] left-0 overflow-clip top-0 w-[1440px]" data-name="Desktop - 1">
        <div className="absolute h-[377px] left-[521px] top-[296px] w-[399px]">
          <div className="absolute inset-[-12.76%_-13.06%_-14.88%_-13.06%]">
            <img alt="" className="block max-w-none size-full" height="481.2" src={imgEllipse1} width="503.2" />
          </div>
        </div>
        <p className="absolute font-['ZCOOL_XiaoWei:Regular',sans-serif] leading-[normal] left-[554px] not-italic text-[#0a0a0a] text-[64px] text-nowrap top-[21px]">PORTFOLIO</p>
        <p className="absolute font-['Super_Sliced:Regular',sans-serif] leading-[normal] left-[850px] not-italic opacity-[0.17] text-[280px] text-black text-nowrap top-[202px]">UFX</p>
        <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[normal] left-[810px] not-italic opacity-[0.17] text-[200px] text-black text-nowrap top-[467px]">AMAN</p>
        <div className="absolute contents leading-[normal] left-[151px] not-italic text-black text-nowrap top-[285px]">
          <p className="absolute font-['Super_Sliced:Regular',sans-serif] left-[151px] text-[64px] top-[285px]">UFX</p>
          <p className="absolute font-['Inter:Bold',sans-serif] font-bold left-[151px] text-[40px] top-[350px]">AMAN</p>
        </div>
        <div className="absolute bg-black h-[5px] left-[67px] top-[409px] w-[303px]" />
        <div className="absolute flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-end leading-[0] left-[67px] not-italic text-[20px] text-black top-[501px] translate-y-[-100%] w-[331px]">
          <p className="leading-[normal]">{`Hi, I’m a Creative UI/UX Designer, Video Editor, and Thumbnail & Poster Designer — `}</p>
        </div>
        <div className="absolute flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[141px] justify-end leading-[0] left-[67px] not-italic text-[16px] text-black top-[673px] translate-y-[-100%] w-[331px]">
          <p className="leading-[normal]">With a strong eye for aesthetics and functionality, I specialize in designing user-friendly interfaces, eye-catching thumbnails, and impactful posters that tell a story. My work blends creativity with strategy — ensuring every design not only looks great but also connects with your audience.</p>
        </div>
        <div className="absolute backdrop-blur-[37.6px] backdrop-filter bg-black h-[58px] left-[383px] opacity-[0.37] rounded-[29px] top-[917px] w-[675px]" />
        <div className="absolute backdrop-blur-[37.6px] backdrop-filter bg-black h-[58px] left-[383px] opacity-[0.31] rounded-[29px] top-[917px] w-[126px]" />
        <div className="absolute flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-end leading-[0] left-[433px] not-italic text-[16px] text-nowrap text-white top-[957px] translate-y-[-100%]">
          <p className="leading-[normal]">HOME</p>
        </div>
        <div className="absolute flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-end leading-[0] left-[623px] not-italic text-[16px] text-nowrap text-white top-[957px] translate-y-[-100%]">
          <p className="leading-[normal]">WORK</p>
        </div>
        <div className="absolute flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-end leading-[0] left-[796px] not-italic text-[16px] text-nowrap text-white top-[957px] translate-y-[-100%]">
          <p className="leading-[normal]">SKILLS</p>
        </div>
        <div className="absolute flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-end leading-[0] left-[984px] not-italic text-[16px] text-nowrap text-white top-[957px] translate-y-[-100%]">
          <p className="leading-[normal]">LINKS</p>
        </div>
        <BriefcaseImage additionalClassNames="left-[587px] top-[930px]" />
        <div className="absolute h-[1048px] left-[-65px] top-[-14px] w-[1572px]" data-name="black-mulberry-paper-textured-background 2">
          <img alt="" className="absolute inset-0 max-w-none mix-blend-difference object-50%-50% object-cover opacity-25 pointer-events-none size-full" src={imgBlackMulberryPaperTexturedBackground2} />
        </div>
      </div>
      <div className="absolute bg-[#d7d7d7] h-[4510px] left-0 overflow-clip top-[1233px] w-[1440px]" data-name="Desktop - 2">
        <div className="absolute contents leading-[normal] left-[810px] not-italic text-black text-nowrap top-[202px]">
          <p className="absolute font-['Super_Sliced:Regular',sans-serif] left-[850px] opacity-[0.17] text-[280px] top-[202px]">UFX</p>
          <p className="absolute font-['Inter:Bold',sans-serif] font-bold left-[810px] opacity-[0.17] text-[200px] top-[467px]">AMAN</p>
        </div>
        <div className="absolute contents leading-[normal] left-[805px] not-italic text-black text-nowrap top-[1052px]">
          <p className="absolute font-['Super_Sliced:Regular',sans-serif] left-[845px] opacity-[0.17] text-[280px] top-[1052px]">UFX</p>
          <p className="absolute font-['Inter:Bold',sans-serif] font-bold left-[805px] opacity-[0.17] text-[200px] top-[1317px]">AMAN</p>
        </div>
        <div className="absolute contents leading-[normal] left-[773px] not-italic text-black text-nowrap top-[2813px]">
          <p className="absolute font-['Super_Sliced:Regular',sans-serif] left-[813px] opacity-[0.17] text-[280px] top-[2813px]">UFX</p>
          <p className="absolute font-['Inter:Bold',sans-serif] font-bold left-[773px] opacity-[0.17] text-[200px] top-[3078px]">AMAN</p>
        </div>
        <div className="absolute contents leading-[normal] left-[794px] not-italic text-black text-nowrap top-[3777px]">
          <p className="absolute font-['Super_Sliced:Regular',sans-serif] left-[834px] opacity-[0.17] text-[280px] top-[3777px]">UFX</p>
          <p className="absolute font-['Inter:Bold',sans-serif] font-bold left-[794px] opacity-[0.17] text-[200px] top-[4042px]">AMAN</p>
        </div>
        <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] left-[67px] not-italic text-[36px] text-black text-nowrap top-[140px]">POSTERS</p>
        <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] left-[609px] not-italic text-[40px] text-black text-nowrap top-[880px]">THUMBNAILS</p>
        <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] left-[661px] not-italic text-[40px] text-black text-nowrap top-[2648px]">UI/UX</p>
        <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] left-[647px] not-italic text-[40px] text-black text-nowrap top-[3521px]">VIDEOS</p>
        <div className="absolute h-[356px] left-[120px] pointer-events-none top-[228px] w-[285px]">
          <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover size-full" src={imgRectangle4} />
          <div aria-hidden="true" className="absolute border border-[#b2b2b2] border-solid inset-0 shadow-[0px_4px_28.3px_13px_rgba(0,0,0,0.25)]" />
        </div>
        <div className="absolute h-[356px] left-[1080px] pointer-events-none top-[228px] w-[285px]">
          <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover size-full" src={imgRectangle6} />
          <div aria-hidden="true" className="absolute border border-[#b1b1b1] border-solid inset-0 shadow-[0px_4px_28.3px_13px_rgba(0,0,0,0.25)]" />
        </div>
        <div className="absolute h-[456px] left-[560px] pointer-events-none top-[192px] w-[365px]">
          <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover size-full" src={imgRectangle5} />
          <div aria-hidden="true" className="absolute border border-[#b2b2b2] border-solid inset-0 shadow-[0px_4px_48.9px_25px_rgba(0,0,0,0.25)]" />
        </div>
        <div className="absolute h-[300px] left-[450px] shadow-[0px_4px_61.9px_32px_rgba(0,0,0,0.25)] top-[1006px] w-[534px]">
          <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgRectangle7} />
        </div>
        <div className="absolute h-[300px] left-[425px] shadow-[0px_4px_61.9px_32px_rgba(0,0,0,0.25)] top-[2745px] w-[534px]">
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <img alt="" className="absolute h-[158.39%] left-[0.24%] max-w-none top-[2.6%] w-full" src={imgRectangle11} />
          </div>
        </div>
        <div className="absolute h-[212px] left-[50px] shadow-[0px_4px_61.9px_32px_rgba(0,0,0,0.25)] top-[1058px] w-[376px]">
          <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgRectangle8} />
        </div>
        <div className="absolute h-[212px] left-[25px] shadow-[0px_4px_61.9px_32px_rgba(0,0,0,0.25)] top-[2789px] w-[376px]">
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <img alt="" className="absolute h-[477.93%] left-[0.34%] max-w-none top-[-1.1%] w-full" src={imgRectangle10} />
          </div>
        </div>
        <div className="absolute h-[212px] left-[1008px] shadow-[0px_4px_61.9px_32px_rgba(0,0,0,0.25)] top-[1058px] w-[376px]">
          <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgRectangle9} />
        </div>
        <div className="absolute h-[212px] left-[983px] shadow-[0px_4px_61.9px_32px_rgba(0,0,0,0.25)] top-[2789px] w-[376px]">
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <img alt="" className="absolute h-[122.43%] left-[1.37%] max-w-none top-[6.41%] w-full" src={imgRectangle12} />
          </div>
        </div>
        <div className="absolute bg-black h-[430px] left-[286px] top-[3650px] w-[873px]" />
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[normal] left-[670px] not-italic text-[36px] text-nowrap text-white top-[3843px]">SOON</p>
        <div className="absolute backdrop-blur-[37.6px] backdrop-filter bg-black h-[58px] left-[385px] opacity-[0.37] rounded-[29px] top-[4365px] w-[675px]" />
        <div className="absolute backdrop-blur-[37.6px] backdrop-filter bg-black h-[58px] left-[572px] opacity-[0.31] rounded-[29px] top-[4365px] w-[126px]" />
        <div className="absolute flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-end leading-[0] left-[435px] not-italic text-[16px] text-nowrap text-white top-[4405px] translate-y-[-100%]">
          <p className="leading-[normal]">HOME</p>
        </div>
        <div className="absolute flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-end leading-[0] left-[625px] not-italic text-[16px] text-nowrap text-white top-[4405px] translate-y-[-100%]">
          <p className="leading-[normal]">WORK</p>
        </div>
        <div className="absolute flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-end leading-[0] left-[798px] not-italic text-[16px] text-nowrap text-white top-[4405px] translate-y-[-100%]">
          <p className="leading-[normal]">SKILLS</p>
        </div>
        <div className="absolute flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-end leading-[0] left-[986px] not-italic text-[16px] text-nowrap text-white top-[4405px] translate-y-[-100%]">
          <p className="leading-[normal]">LINKS</p>
        </div>
        <BriefcaseImage additionalClassNames="left-[589px] top-[4378px]" />
        <HomePageImage additionalClassNames="left-[401px] top-[4377px]" />
        <LightningBoltImage additionalClassNames="left-[769px] top-[4377px]" />
        <LinkImage additionalClassNames="left-[953px] top-[4377px]" />
        <div className="absolute contents left-[67px] top-[40px]">
          <div className="absolute bg-black h-[58px] left-[67px] opacity-[0.82] rounded-[29px] top-[40px] w-[126px]" />
          <HomePageImage additionalClassNames="left-[84px] top-[53px]" />
          <div className="absolute flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-end leading-[0] left-[118px] not-italic text-[16px] text-nowrap text-white top-[81px] translate-y-[-100%]">
            <p className="leading-[normal]">HOME</p>
          </div>
        </div>
        <div className="absolute h-[126px] left-[1248px] top-[30px] w-[133px]">
          <img alt="" className="block max-w-none size-full" height="126" src={imgEllipse2} width="133" />
        </div>
        <div className="absolute contents leading-[normal] left-[781px] not-italic text-black text-nowrap top-[1887px]">
          <p className="absolute font-['Super_Sliced:Regular',sans-serif] left-[821px] opacity-[0.17] text-[280px] top-[1887px]">UFX</p>
          <p className="absolute font-['Inter:Bold',sans-serif] font-bold left-[781px] opacity-[0.17] text-[200px] top-[2152px]">AMAN</p>
        </div>
        <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] left-[631px] not-italic text-[40px] text-black text-nowrap top-[1695px]">SHORTS</p>
        <Desktop2Image additionalClassNames="left-[124px]" />
        <Desktop2Image additionalClassNames="left-[1020px]" />
        <div className="absolute h-[456px] left-[532px] pointer-events-none top-[1794px] w-[365px]">
          <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover size-full" src={imgRectangle13} />
          <div aria-hidden="true" className="absolute border border-[#b2b2b2] border-solid inset-0 shadow-[0px_4px_48.9px_25px_rgba(0,0,0,0.25)]" />
        </div>
        <p className="absolute font-['ZCOOL_XiaoWei:Regular',sans-serif] leading-[normal] left-[620px] not-italic text-[#0a0a0a] text-[64px] text-nowrap top-[29px]">WORK</p>
        <div className="absolute h-[4582px] left-[-5432px] top-[-72px] w-[6872px]" data-name="black-mulberry-paper-textured-background 2">
          <img alt="" className="absolute inset-0 max-w-none mix-blend-difference object-50%-50% object-cover opacity-25 pointer-events-none size-full" src={imgBlackMulberryPaperTexturedBackground2} />
        </div>
      </div>
      <div className="absolute bg-[#d7d7d7] h-[1024px] left-[1609px] overflow-clip top-0 w-[1440px]" data-name="Desktop - 3">
        <p className="absolute font-['Super_Sliced:Regular',sans-serif] leading-[normal] left-[850px] not-italic opacity-10 text-[280px] text-black text-nowrap top-[202px]">UFX</p>
        <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[normal] left-[810px] not-italic opacity-10 text-[200px] text-black text-nowrap top-[467px]">AMAN</p>
        <div className="absolute contents left-[94px] top-[353px]">
          <p className="absolute font-['Super_Sliced:Regular',sans-serif] h-[65px] leading-[normal] left-[94px] not-italic text-[40px] text-black top-[353px] w-[250px]">SOFTWARES</p>
        </div>
        <div className="absolute bg-black h-[5px] left-[67px] top-[409px] w-[303px]" />
        <div className="absolute flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold h-[426px] justify-center leading-[0] left-[901.5px] not-italic text-[24px] text-black text-center text-shadow-[6px_9px_12.7px_white] top-[523px] tracking-[1.92px] translate-x-[-50%] translate-y-[-50%] w-[1029px]">
          <p className="leading-[normal] mb-[30px]">🎨 UI/UX Design</p>
          <ul className="list-disc list-inside mb-[30px]">
            <li className="mb-0 ms-[36px]">
              <span className="leading-[normal]">Skilled in creating clean, modern, and user-friendly interfaces.</span>
            </li>
            <li className="mb-0 ms-[36px]">
              <span className="leading-[normal]">Strong understanding of color theory, typography, and design hierarchy.</span>
            </li>
            <li className="mb-0 ms-[36px]">
              <span className="leading-[normal]">Experienced with tools like Figma and Photoshop.</span>
            </li>
            <li className="ms-[36px]">
              <span className="leading-[normal]">Focused on user-centered design, usability, and smooth digital experiences.</span>
            </li>
          </ul>
          <p className="leading-[normal] mb-[30px]">🎬 Video Editing</p>
          <Desktop3Helper text="Proficient in Adobe Premiere Pro, and CapCut Pro." text1="Skilled at storytelling through visuals, transitions, and sound." text2="Creating YouTube videos, reels, and promotional edits with professional flow." />
          <p className="leading-[normal] mb-[30px]">{`🖼️ Thumbnail & Poster Design`}</p>
          <Desktop3Helper text="Expert in designing scroll-stopping thumbnails that boost engagement." text1="Crafting aesthetic posters for digital and print use." text2="Deep knowledge of visual balance, composition, and branding." />
          <p className="leading-[normal]">&nbsp;</p>
        </div>
        <div className="absolute backdrop-blur-[37.6px] backdrop-filter bg-black h-[58px] left-[383px] opacity-[0.37] rounded-[29px] top-[917px] w-[675px]" />
        <div className="absolute backdrop-blur-[37.6px] backdrop-filter bg-black h-[58px] left-[747px] opacity-[0.31] rounded-[29px] top-[917px] w-[126px]" />
        <div className="absolute flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-end leading-[0] left-[433px] not-italic text-[16px] text-nowrap text-white top-[957px] translate-y-[-100%]">
          <p className="leading-[normal]">HOME</p>
        </div>
        <div className="absolute flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-end leading-[0] left-[623px] not-italic text-[16px] text-nowrap text-white top-[957px] translate-y-[-100%]">
          <p className="leading-[normal]">WORK</p>
        </div>
        <div className="absolute flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-end leading-[0] left-[796px] not-italic text-[16px] text-nowrap text-white top-[957px] translate-y-[-100%]">
          <p className="leading-[normal]">SKILLS</p>
        </div>
        <div className="absolute flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-end leading-[0] left-[984px] not-italic text-[16px] text-nowrap text-white top-[957px] translate-y-[-100%]">
          <p className="leading-[normal]">LINKS</p>
        </div>
        <BriefcaseImage additionalClassNames="left-[587px] top-[930px]" />
        <HomePageImage additionalClassNames="left-[397px] top-[930px]" />
        <LightningBoltImage additionalClassNames="left-[764px] top-[930px]" />
        <LinkImage additionalClassNames="left-[952px] top-[930px]" />
        <div className="absolute h-[72px] left-[67px] shadow-[0px_4px_18.8px_1px_rgba(0,0,0,0.71)] top-[426px] w-[73px]">
          <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgRectangle18} />
        </div>
        <Wrapper additionalClassNames="left-[182px] shadow-[0px_4px_18.8px_1px_rgba(0,0,0,0.71)] top-[426px]">
          <img alt="" className="absolute h-[115.7%] left-[-7.57%] max-w-none top-[-5.47%] w-[116.68%]" src={imgRectangle19} />
        </Wrapper>
        <Wrapper additionalClassNames="left-[297px] shadow-[0px_4px_18.8px_1px_rgba(0,0,0,0.71)] top-[423px]">
          <img alt="" className="absolute h-[115.7%] left-[-12.19%] max-w-none top-[-7.03%] w-[116.68%]" src={imgRectangle21} />
        </Wrapper>
        <Wrapper additionalClassNames="left-[182px] shadow-[0px_4px_18.8px_1px_rgba(0,0,0,0.71)] top-[510px]">
          <img alt="" className="absolute h-[185.53%] left-[-45.09%] max-w-none top-[-42.12%] w-[187.11%]" src={imgRectangle22} />
        </Wrapper>
        <Wrapper additionalClassNames="left-[67px] shadow-[0px_4px_18.8px_-1px_rgba(0,0,0,0.71)] top-[510px]">
          <img alt="" className="absolute h-[127.49%] left-[-16.63%] max-w-none top-[-17.52%] w-[128.58%]" src={imgRectangle23} />
        </Wrapper>
        <Wrapper additionalClassNames="left-[297px] shadow-[0px_4px_18.8px_1px_rgba(0,0,0,0.71)] top-[510px]">
          <img alt="" className="absolute h-[137.66%] left-[-17.58%] max-w-none top-[-17.62%] w-[135.77%]" src={imgRectangle20} />
        </Wrapper>
        <p className="absolute font-['ZCOOL_XiaoWei:Regular',sans-serif] leading-[normal] left-[647px] not-italic text-[#0a0a0a] text-[64px] text-nowrap top-[17px]">SKILLS</p>
        <BlackMulberryPaperTexturedBackgroundImage additionalClassNames="left-[-789px] top-[-366px]" />
      </div>
      <div className="absolute bg-[#d7d7d7] h-[1024px] left-[1609px] overflow-clip top-[1233px] w-[1440px]" data-name="Desktop - 4">
        <BlackMulberryPaperTexturedBackgroundImage additionalClassNames="left-[-1123px] top-[-867px]" />
        <div className="absolute contents left-[100px] top-[355px]">
          <p className="absolute font-['Super_Sliced:Regular',sans-serif] h-[65px] leading-[normal] left-[100px] not-italic text-[40px] text-black top-[355px] w-[250px]">LINKS</p>
        </div>
        <div className="absolute bg-black h-[5px] left-[67px] top-[409px] w-[186px]" />
        <div className="absolute backdrop-blur-[37.6px] backdrop-filter bg-black h-[58px] left-[383px] opacity-[0.37] rounded-[29px] top-[917px] w-[675px]" />
        <div className="absolute backdrop-blur-[37.6px] backdrop-filter bg-black h-[58px] left-[931px] opacity-[0.31] rounded-[29px] top-[917px] w-[126px]" />
        <div className="absolute flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-end leading-[0] left-[433px] not-italic text-[16px] text-nowrap text-white top-[957px] translate-y-[-100%]">
          <p className="leading-[normal]">HOME</p>
        </div>
        <div className="absolute flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-end leading-[0] left-[623px] not-italic text-[16px] text-nowrap text-white top-[957px] translate-y-[-100%]">
          <p className="leading-[normal]">WORK</p>
        </div>
        <div className="absolute flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-end leading-[0] left-[796px] not-italic text-[16px] text-nowrap text-white top-[957px] translate-y-[-100%]">
          <p className="leading-[normal]">SKILLS</p>
        </div>
        <div className="absolute flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-end leading-[0] left-[984px] not-italic text-[16px] text-nowrap text-white top-[957px] translate-y-[-100%]">
          <p className="leading-[normal]">LINKS</p>
        </div>
        <BriefcaseImage additionalClassNames="left-[587px] top-[930px]" />
        <HomePageImage additionalClassNames="left-[397px] top-[930px]" />
        <LightningBoltImage additionalClassNames="left-[764px] top-[930px]" />
        <LinkImage additionalClassNames="left-[952px] top-[930px]" />
        <div className="absolute h-[72px] left-[67px] rounded-[17px] shadow-[0px_4px_18.8px_1px_rgba(0,0,0,0.71)] top-[420px] w-[73px]">
          <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[17px] size-full" src={imgRectangle24} />
        </div>
        <Wrapper additionalClassNames="left-[176px] shadow-[0px_4px_18.8px_1px_rgba(0,0,0,0.71)] top-[420px]">
          <img alt="" className="absolute h-[115.7%] left-[-7.57%] max-w-none top-[-5.47%] w-[116.68%]" src={imgRectangle25} />
        </Wrapper>
        <Wrapper additionalClassNames="left-[176px] shadow-[0px_4px_18.8px_1px_rgba(0,0,0,0.71)] top-[510px]">
          <img alt="" className="absolute h-[115.7%] left-[-7.86%] max-w-none top-[-7.03%] w-[116.68%]" src={imgRectangle26} />
        </Wrapper>
        <Wrapper additionalClassNames="left-[67px] shadow-[0px_4px_18.8px_-1px_rgba(0,0,0,0.71)] top-[510px]">
          <img alt="" className="absolute h-[127.49%] left-[-67.73%] max-w-none top-[-15.48%] w-[231.77%]" src={imgRectangle27} />
        </Wrapper>
        <p className="absolute font-['ZCOOL_XiaoWei:Regular',sans-serif] leading-[normal] left-[647px] not-italic text-[#0a0a0a] text-[64px] text-nowrap top-[17px]">LINKS</p>
        <div className="absolute bg-[#0a0a0a] h-[5px] left-[397px] shadow-[0px_17px_19px_0px_rgba(0,0,0,0.81)] top-[253px] w-[868px]" />
        <div className="absolute contents leading-[normal] left-[810px] not-italic text-black text-nowrap top-[187px]">
          <p className="absolute font-['Super_Sliced:Regular',sans-serif] left-[850px] opacity-[0.054] text-[280px] top-[187px]">UFX</p>
          <p className="absolute font-['Inter:Bold',sans-serif] font-bold left-[810px] opacity-[0.054] text-[200px] top-[452px]">AMAN</p>
        </div>
        <div className="absolute bg-[#0a0a0a] h-[5px] left-[397px] shadow-[0px_17px_19px_0px_rgba(0,0,0,0.81)] top-[336px] w-[868px]" />
        <div className="absolute bg-[rgba(10,10,10,0)] border border-black border-solid h-[287px] left-[397px] shadow-[0px_17px_19px_0px_rgba(0,0,0,0.81)] top-[369px] w-[868px]" />
        <Desktop4Text text="EMAIL" additionalClassNames="left-[441.5px] top-[227px]" />
        <Desktop4Text text="FULL NAME" additionalClassNames="left-[474.5px] top-[316px]" />
        <Desktop4Text text="DESCRIPTION" additionalClassNames="left-[489.5px] top-[394px]" />
        <div className="absolute bg-[rgba(217,217,217,0)] border border-black border-solid h-[99px] left-[397px] shadow-[0px_7px_36px_10px_rgba(0,0,0,0.15)] top-[684px] w-[182px]" />
        <div className="absolute flex flex-col font-['Roboto:SemiBold',sans-serif] font-semibold h-[24px] justify-center leading-[0] left-[482.5px] text-[20px] text-black text-center top-[757px] tracking-[1.6px] translate-x-[-50%] translate-y-[-50%] w-[147px]" style={{ fontVariationSettings: "'wdth' 100" }}>
          <p className="leading-[normal]">ATTACH FILE</p>
        </div>
        <div className="absolute backdrop-blur-[7.1px] backdrop-filter bg-[rgba(0,0,0,0.15)] h-[30px] left-[641px] rounded-[20px] top-[689px] w-[228px]" />
        <div className="absolute backdrop-blur-[7.1px] backdrop-filter bg-[rgba(0,0,0,0.15)] h-[30px] left-[641px] rounded-[20px] top-[742px] w-[228px]" />
        <Text text="ufxeren@gmail.com" additionalClassNames="left-[770.5px] top-[703.5px]" />
        <Text text="+92 00000000000" additionalClassNames="left-[770px] top-[756.5px]" />
      </div>
      <HomePageImage additionalClassNames="left-[399px] top-[929px]" />
      <LightningBoltImage additionalClassNames="left-[767px] top-[929px]" />
      <LinkImage additionalClassNames="left-[951px] top-[929px]" />
      <div className="absolute left-[2081px] size-[38px] top-[1933px]" data-name="Broken Link">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-contain pointer-events-none size-full" src={imgBrokenLink} />
      </div>
      <div className="absolute left-[2264px] size-[25px] top-[1924px]" data-name="Letter">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-contain pointer-events-none size-full" src={imgLetter} />
      </div>
      <div className="absolute left-[2264px] size-[25px] top-[1978px]" data-name="Phone">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-contain pointer-events-none size-full" src={imgPhone} />
      </div>
    </div>
  );
}