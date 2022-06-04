import * as React from "react";
import { SVGProps } from "react";

const SvgMonument = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" {...props}>
    <path
      className="monument_svg__fa-primary"
      d="M283.3 84.69c2.5 2.51 4.1 5.79 4.6 9.33L332.1 448H51.88L96.12 94.02a15.95 15.95 0 0 1 4.58-9.33l80-80.004c6.2-6.248 16.4-6.248 22.6 0l80 80.004zM151.1 320H232c13.3 0 24-10.7 24-24s-10.7-24-24-24h-80.9c-12.4 0-24 10.7-24 24s11.6 24 24 24z"
    />
    <path
      d="M0 480c0-17.7 14.33-32 32-32h320c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.67 0-32-14.3-32-32z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgMonument;
