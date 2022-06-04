import * as React from "react";
import { SVGProps } from "react";

const SvgPlaneEngines = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" {...props}>
    <path
      className="plane-engines_svg__fa-primary"
      d="M482.3 320H112l-43.2 57.6c-3.02 4-7.76 6.4-12.8 6.4H14.03C6.284 384 0 377.7 0 369.1c0-.4.182-1.7.54-3l22.67-79.3C9.809 282.1 0 270.6 0 255.1c0-13.7 9.809-26.1 23.21-29.9L.54 145.9C.182 144.6 0 143.3 0 142c0-7.7 6.284-14.9 14.03-14.9H56c5.04 0 9.78 3.3 12.8 7.3l43.2 56.7h370.3c34.2 0 93.7 29 93.7 64 0 36-59.5 64-93.7 64v.9zm-189-256H320c17.7 0 32 14.33 32 32 0 14.3-9.3 26.3-22.2 30.5L293.3 64zm36.5 321.5c12.9 4.2 22.2 16.2 22.2 30.5 0 17.7-14.3 32-32 32h-26.7l36.5-62.5z"
    />
    <path
      d="m215.1 192-50-171.52C162.1 10.24 170.7 0 181.3 0h56.3c11.4 0 21.9 6.045 27.7 15.88L368 192H215.1zM368 320 265.3 496.1c-5.8 9-16.3 15.9-27.7 15.9h-56.3c-10.6 0-19.2-10.2-16.2-20.5l50-171.5H368z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgPlaneEngines;