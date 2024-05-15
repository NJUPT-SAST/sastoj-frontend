import { ButtonHTMLAttributes, CSSProperties } from "react";
import ojcat from "../../assets/imgs/ojcat.svg";

interface AvatarProps extends ButtonHTMLAttributes<HTMLImageElement> {
  width?: number;
  height?: number;
  className?: string;
  style?: CSSProperties;
}

const Avatar = ({ width, height, className, style, ...rest }: AvatarProps) => {
  return (
    <img
      src={ojcat}
      alt="avatar1"
      width={width}
      height={height}
      className={className}
      style={{ objectFit: "contain", marginRight: "20px", ...style }}
      {...rest}
    />
  );
};

export default Avatar;
