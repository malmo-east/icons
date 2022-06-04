import * as React from "react";
import { SVGProps } from "react";

const SvgBlockQuote = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
    <path
      className="block-quote_svg__fa-primary"
      d="M0 256c0-17.7 14.33-32 32-32s32 14.3 32 32v160c0 17.7-14.33 32-32 32S0 433.7 0 416V256z"
    />
    <path
      d="M0 96c0-17.67 14.33-32 32-32h384c17.7 0 32 14.33 32 32 0 17.7-14.3 32-32 32H32c-17.67 0-32-14.3-32-32zm128 160c0-17.7 14.3-32 32-32h256c17.7 0 32 14.3 32 32s-14.3 32-32 32H160c-17.7 0-32-14.3-32-32zm288 128c17.7 0 32 14.3 32 32s-14.3 32-32 32H160c-17.7 0-32-14.3-32-32s14.3-32 32-32h256z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgBlockQuote;
