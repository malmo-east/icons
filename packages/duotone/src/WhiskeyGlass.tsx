import * as React from "react";
import { SVGProps } from "react";

const SvgWhiskeyGlass = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path
      className="whiskey-glass_svg__fa-primary"
      d="m422.7 224-29.95 192-273.2-.816L89.49 224H422.7z"
    />
    <path
      d="M479.1 32H32.04C12.55 32-2.324 49.25.3 68.51L56.29 425.1c4.5 31.5 31.49 54.9 63.51 54.9h272.9c31.74 0 58.86-23.38 63.36-54.89l55.61-356.6C514.3 49.25 499.5 32 479.1 32zm-86.4 384-273.2-.816L69.39 96h373.2L392.7 416z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgWhiskeyGlass;
