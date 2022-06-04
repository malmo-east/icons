import * as React from "react";
import { SVGProps } from "react";

const SvgEuroSign = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" {...props}>
    <path
      className="euro-sign_svg__fa-primary"
      d="M80 248c0-119.3 96.7-216 216-216h24c17.7 0 32 14.33 32 32s-14.3 32-32 32h-24c-83.9 0-152 68.1-152 152v16c0 83.9 68.1 152 152 152h24c17.7 0 32 14.3 32 32s-14.3 32-32 32h-24c-119.3 0-216-96.7-216-216v-16z"
    />
    <path
      d="M92.29 336H64c-17.67 0-32-14.3-32-32s14.33-32 32-32h16.15c.81 22.4 5.03 43.9 12.14 64zm51.91-64H288c17.7 0 32 14.3 32 32s-14.3 32-32 32H162.1c-10.4-19.2-16.7-40.9-17.9-64zm17.9-96H288c17.7 0 32 14.3 32 32s-14.3 32-32 32H144.2c1.2-23.1 7.5-44.8 17.9-64zm-81.95 64H64c-17.67 0-32-14.3-32-32s14.33-32 32-32h28.29c-7.11 20.1-11.33 41.6-12.14 64z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgEuroSign;
