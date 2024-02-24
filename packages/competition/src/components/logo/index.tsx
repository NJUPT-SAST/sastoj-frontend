import { CSSProperties } from "react";
import logo from "../../assets/logo.svg";

interface LogoProps {
  width?: number;
  height?: number;
  className?: string;
  style?: CSSProperties;
}

const Logo = ({ width, height, className, style }: LogoProps) => {
  return (
    <>
      <img
        src={logo}
        alt="logo"
        width={width}
        height={height}
        className={className}
        style={{ objectFit: "contain", ...style }}
      ></img>
    </>
  );
};

export default Logo;
