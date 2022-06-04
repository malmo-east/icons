import * as React from "react";
import { SVGProps } from "react";

const SvgSyringe = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path
      className="syringe_svg__fa-primary"
      d="m504.1 71.03-64-64C436.3 2.344 430.1 0 424 0a23.93 23.93 0 0 0-16.97 7.031c-9.375 9.375-9.375 24.56 0 33.94L422.1 56 384 94.06l-55.03-55.03c-9.375-9.375-24.56-9.375-33.94 0a22.995 22.995 0 0 0-6.757 15.08c-.306 5.483 1.297 11.08 4.71 15.78l149.1 149.1C446.3 222.1 451.1 224 456 224a23.93 23.93 0 0 0 16.97-7.031c9.375-9.375 9.375-24.56 0-33.94L417.9 128 456 89.94l15.03 15.03C475.7 109.7 481.9 112 488 112s12.28-2.344 16.97-7.031C509.7 100.3 511.1 94.14 512 88c0-6.14-2.3-12.28-7.9-16.97zM144.8 218.1l-22.7 22.7 58.56 58.56C183.8 302.4 187.9 304 192 304s8.188-1.562 11.31-4.688c6.25-6.25 6.25-16.38 0-22.62L144.8 218.1zm64-64-22.7 22.7 58.56 58.56C247.8 238.4 251.9 240 256 240s8.188-1.562 11.31-4.688c6.25-6.25 6.25-16.38 0-22.62L208.8 154.1z"
    />
    <path
      d="m208.8 154.1 58.56 58.56c6.25 6.25 6.25 16.38 0 22.62C264.2 238.4 260.1 240 256 240s-8.2-1.6-11.3-4.7l-58.6-58.5-41.3 41.3 58.56 58.56c6.25 6.25 6.25 16.38 0 22.62C200.2 302.4 196.1 304 192 304s-8.2-1.6-11.3-4.7l-58.6-58.5-39.35 39.3C70.74 292.1 64 308.4 64 325.4v88.68L7.03 471.05C2.344 475.7 0 481.9 0 487.1a23.93 23.93 0 0 0 7.031 16.97C11.72 509.7 17.86 512 24 512s12.28-2.344 16.97-7.031L97.94 448h88.69c16.97 0 33.25-6.744 45.26-18.75l210.2-210.2L292.1 69.89l-83.3 84.21z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgSyringe;
