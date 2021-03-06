import React from "react";
import Svg from "../../../components/Svg/Svg";
import { SvgProps } from "../../../components/Svg/types";

interface LogoProps extends SvgProps {
  isDark: boolean;
}

const Logo: React.FC<LogoProps> = ({ isDark, ...props }) => {
  const textColor = isDark ? "#FFFFFF" : "#000000";
  return (
    <Svg viewBox="0 0 210 26" {...props}>
      <image width="210" height="26" href={isDark ? 'images/gft/LogoTextNewDark.png' : 'images/gft/LogoTextNewWhite.png'}/>
    </Svg>
  )
};

export default Logo;
