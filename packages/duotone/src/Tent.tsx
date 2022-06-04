import * as React from "react";
import { SVGProps } from "react";

const SvgTent = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" {...props}>
    <path className="tent_svg__fa-primary" d="M448 512H288V256l160 256z" />
    <path
      d="M269.4 5.961c11.1-7.948 26.1-7.948 37.2 0l224 159.139c7.4 6.1 12.2 14.3 13.2 23.4l32 288c1 9-1.9 18.1-8 24.8-6 6.8-14.7 10.7-23.8 10.7h-96L288 256v256H32c-9.1 0-17.77-3.9-23.844-10.7-6.07-6.7-8.965-15.8-7.96-24.8l32.004-288c1-9.1 5.8-17.3 13.2-23.4l224-159.139z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgTent;
