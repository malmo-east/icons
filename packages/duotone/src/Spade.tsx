import * as React from "react";
import { SVGProps } from "react";

const SvgSpade = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path
      className="spade_svg__fa-primary"
      d="M256 224c17.7 0 32 14.3 32 32v192h32c17.7 0 32 14.3 32 32s-14.3 32-32 32H192c-17.7 0-32-14.3-32-32s14.3-32 32-32h32V256c0-17.7 14.3-32 32-32z"
    />
    <path
      d="M472 196.3c51.4 48.6 53.5 128.8 4.9 181-48.6 51.3-129.6 53.5-181.8 4.9l-7.1-7.6V255.1c0-16.8-14.3-32-32-32s-32 15.2-32 32v119.5l-8 7.6c-51.3 48.6-132.31 46.4-180.93-4.9-48.61-52.2-46.42-132.4 4.9-181L233.1 12.53C246.3.843 265.7.843 278 12.53L472 196.3z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgSpade;
