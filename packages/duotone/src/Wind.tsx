import * as React from "react";
import { SVGProps } from "react";

const SvgWind = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path
      className="wind_svg__fa-primary"
      d="M160 320H32c-17.69 0-32 14.31-32 32s14.31 32 32 32h128c17.66 0 32 14.34 32 32s-14.34 32-32 32h-32c-17.69 0-32 14.31-32 32s14.31 32 32 32h32c52.94 0 96-43.06 96-96s-43.1-96-96-96zM352 0h-32c-17.69 0-32 14.31-32 32s14.31 32 32 32h32c17.66 0 32 14.34 32 32s-14.34 32-32 32H32c-17.69 0-32 14.3-32 32s14.31 32 32 32h320c52.94 0 96-43.06 96-96S404.9 0 352 0z"
    />
    <path
      d="M416 224H32c-17.69 0-32 14.3-32 32s14.31 32 32 32h384c17.66 0 32 14.34 32 32s-14.34 32-32 32h-32c-17.69 0-32 14.31-32 32s14.31 32 32 32h32c52.94 0 96-43.06 96-96s-43.1-96-96-96z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgWind;
