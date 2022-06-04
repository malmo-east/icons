import * as React from "react";
import { SVGProps } from "react";

const SvgHose = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
    <path
      className="hose_svg__fa-primary"
      d="M448 40v48c0 8.832-7.168 16-16 16-8.064 0-14.75-5.984-15.84-13.73L336 101.7v2.3c0 13.2-10.8 24-24 24s-24-10.8-24-24V24c0-13.25 10.8-24 24-24s24 10.75 24 24v2.271l80.16 11.46C417.2 29.98 423.9 24 432 24c8.8 0 16 7.17 16 16z"
    />
    <path
      d="M144 320h272c17.66 0 32-14.34 32-32s-14.34-32-32-32H144c-44.19 0-80-35.8-80-80s35.81-80 80-80h112V32H144C64.48 32 0 96.48 0 176s64.48 144 144 144zm272 128H32c-17.66 0-32 14.34-32 32s14.34 32 32 32h384c17.66 0 32-14.34 32-32s-14.3-32-32-32zm0-96H32c-17.66 0-32 14.34-32 32s14.34 32 32 32h384c17.66 0 32-14.34 32-32s-14.3-32-32-32z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgHose;
