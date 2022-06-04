import * as React from "react";
import { SVGProps } from "react";

const SvgPowerOff = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path
      className="power-off_svg__fa-primary"
      d="M147.7 75.54c10.4 13.59 9.4 33.76-4.2 45.06C104.7 152.9 80 201.6 80 256c0 97.2 78.8 176 176 176s176-78.8 176-176c0-54.4-24.7-103.1-63.5-135.4-13.6-11.3-15.5-31.47-4.2-45.06 11.3-13.59 31.5-15.44 45.1-4.14 52.8 44 86.6 110.4 86.6 184.6 0 132.6-107.5 240-240 240S16 388.6 16 256c0-74.2 33.75-140.6 86.6-184.6 13.6-11.3 33.8-9.45 45.1 4.14z"
    />
    <path
      d="M256 0c17.7 0 32 14.33 32 32v224c0 17.7-14.3 32-32 32s-32-14.3-32-32V32c0-17.67 14.3-32 32-32z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgPowerOff;
