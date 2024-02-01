import Image from "next/image";
import Link from "next/link";

export const Logo = () => (
  <div className="p-1 flex align-middle justify-center bg-brand-blue-200">
    <Link href="/" passHref legacyBehavior>
      <a><Image src="/hero/specschecks-logo.png" alt="SpecsChecksLogo" width="400" height="300"/></a>
    </Link>
  </div>
);

export const LogoIcon = () => (
  <div className="p-1">
    <Image src="/hero/specschecks-icon.png" alt="SpecsChecksLogoIcon" width="300" height="300"/>
  </div>
);