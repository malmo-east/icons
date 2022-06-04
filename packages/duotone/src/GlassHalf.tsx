import * as React from "react";
import { SVGProps } from "react";

const SvgGlassHalf = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" {...props}>
    <path
      className="glass-half_svg__fa-primary"
      d="m303.9 256-13.71 192H93.78L80.06 256H303.9z"
    />
    <path
      d="m317.6 64-27.4 384H93.78L66.35 64H317.6zm34.3-64H32.07C23.2 0 14.8 3.625 8.674 10.12 2.676 16.495-.447 24.22.053 34L32.04 482c1.13 16.9 15.12 30 32 30h255.9c16.87 0 30.87-13.12 31.99-30l31.99-448c.5-8.876-2.621-17.5-8.619-23.87C369.2 3.625 360.8 0 351.9 0z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgGlassHalf;
