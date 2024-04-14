import { ButtonHTMLAttributes, CSSProperties } from "react";
import logo from "../../assets/logo.svg";

interface LogoProps extends ButtonHTMLAttributes<HTMLImageElement> {
  width?: number;
  height?: number;
  className?: string;
  style?: CSSProperties;
}

const Logo = ({ width, height, className, style, ...rest }: LogoProps) => {
  return (
    <img
      src={logo}
      alt="logo"
      width={width}
      height={height}
      className={className}
      style={{ objectFit: "contain", ...style }}
      {...rest}
    />
  );
};

export default Logo;
