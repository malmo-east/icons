import * as React from "react";
import { SVGProps } from "react";

const SvgMerge = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path
      className="merge_svg__fa-primary"
      d="M144.6 64c19.5 0 37.8 8.84 50 24.02L303.4 224H384v-48c0-9.7 5.8-18.5 14.8-22.2 9-3.7 19.3-1.6 25.3 5.2l80 80c10.2 9.4 10.2 24.6 0 33.1l-80 80c-6 7.7-16.3 9.8-25.3 6.1-9-3.7-14.8-12.5-14.8-22.2v-48h-80.6c-19.5 0-37.9-8.8-50-24.9L144.6 128H32c-17.67 0-32-14.3-32-32 0-17.67 14.33-32 32-32h112.6z"
    />
    <path
      d="M253.4 263.1c12.1 16.1 30.5 24.9 50 24.9L194.6 423.1c-12.1 16.1-30.5 24.9-50 24.9H32c-17.67 0-32-14.3-32-32s14.33-32 32-32h112.6L247 256l6.4 7.1z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgMerge;
