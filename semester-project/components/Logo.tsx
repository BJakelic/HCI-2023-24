import { FC } from "react";

import LogoIcon from "./icons/LogoIcon";

const Logo: FC = () => (
  <div className="flex items-center justify-between max-w-min gap-2">
    <LogoIcon />
  </div>
);

export default Logo;