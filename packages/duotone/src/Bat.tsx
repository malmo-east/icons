import * as React from "react";
import { SVGProps } from "react";

const SvgBat = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" {...props}>
    <path
      className="bat_svg__fa-primary"
      d="m640 320-49.63-16.5c-27.38-9.125-57.5 1.125-73.5 25.12L480 384l-11.88-11.88c-27.5-27.5-73-24.25-96.38 6.875L319.1 448l-51.75-69c-23.38-31.12-68.87-34.38-96.37-6.875L160 384l-36.88-55.38c-16-24-46.13-34.25-73.5-25.12L0 320l81.5-190.2c7.75-17.88 29.25-24.88 45.88-14.88L320 224l192.5-109.1c16.75-10 38.25-2.1 46 14.88L640 320z"
    />
    <path
      d="M411.1 172.3 320 224l-91.2-51.6L255.1 64l42.63 32h42.75l42.62-32 28 108.3z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgBat;