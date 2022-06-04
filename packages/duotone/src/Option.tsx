import * as React from "react";
import { SVGProps } from "react";

const SvgOption = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" {...props}>
    <path
      className="option_svg__fa-primary"
      d="M640 416c0 17.69-14.31 32-32 32H448a32.034 32.034 0 0 1-25-12L176.6 128H32c-17.69 0-32-14.3-32-32s14.31-32 32-32h160c9.719 0 18.91 4.406 25 12l246.4 308H608c17.7 0 32 14.3 32 32z"
    />
    <path
      d="M448 128h160c17.69 0 32-14.31 32-32s-14.31-32-32-32H448c-17.69 0-32 14.31-32 32s14.3 32 32 32z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgOption;
