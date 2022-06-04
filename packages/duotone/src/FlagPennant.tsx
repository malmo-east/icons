import * as React from "react";
import { SVGProps } from "react";

const SvgFlagPennant = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path
      className="flag-pennant_svg__fa-primary"
      d="M32 0C14.33 0 0 14.33 0 32v464c0 8.8 7.164 16 16 16h32c8.84 0 16-7.2 16-16V32C64 14.33 49.67 0 32 0z"
    />
    <path
      d="M512 208c0 10.06-6.266 19.03-15.7 22.53L64 389.8V32c0-2.223-.832-4.172-1.264-6.266l433.6 159.7C505.7 188.1 512 197.9 512 208z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgFlagPennant;
