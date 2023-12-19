import Image, { StaticImageData } from "next/image";

export const Logo = () => (
  <div className="p-1 flex align-middle justify-center">
    <Image src="/hero/specschecks-logo.png" alt="SpecsChecksLogo" width="300" height="150"/>
  </div>
);

export const LogoIcon = () => (
  <div className="p-1">
    <Image src="/hero/specschecks-icon.png" alt="SpecsChecksLogoIcon" width="300" height="300"/>
  </div>
);