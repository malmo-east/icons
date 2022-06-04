import * as React from "react";
import { SVGProps } from "react";

const SvgBootHeeled = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path
      className="boot-heeled_svg__fa-primary"
      d="m128 416 1.369.549c9.123.576 18.19 1.887 27.01 4.514L299.5 464H480v-40.45a64 64 0 0 0-35.38-57.24l-121.2-60.62a64 64 0 0 1-35.38-57.24V32c0-17.67-14.33-32-32-32h-96v240c0 8.844-7.156 16-16 16s-16-7.156-16-16V0h-64C44.76 0 29.86 16.87 32.25 35.97L56.69 197.5c4.816 38.53.941 77.66-11.34 114.5A260.071 260.071 0 0 0 32 394.24V416h96z"
    />
    <path
      d="M480 464H299.5l-143.2-42.94c-11.1-3.36-22.7-5.06-34.4-5.06H32v72c0 13.25 10.75 24 24 24h80c13.25 0 24-10.75 24-24v-15.72L289.1 511c2.2.7 4.6 1 6.9 1h184c13.25 0 24-10.75 24-24s-10.7-24-24-24z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgBootHeeled;
