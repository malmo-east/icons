import * as React from "react";
import { SVGProps } from "react";

const SvgKipSign = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" {...props}>
    <path
      className="kip-sign_svg__fa-primary"
      d="m145.2 256 195.6 167.7c13.4 11.5 15 31.7 3.5 45.1-11.5 13.4-31.7 15-45.1 3.5L128 325.6V448c0 17.7-14.3 32-32 32-17.67 0-32-14.3-32-32V64c0-17.67 14.33-32 32-32 17.7 0 32 14.33 32 32v122.4L299.2 39.7c13.4-11.5 33.6-9.94 45.1 3.48 11.5 13.41 9.9 33.62-3.5 45.12L145.2 256z"
    />
    <path
      d="M64 288H32c-17.67 0-32-14.3-32-32s14.33-32 32-32h32v64zm118.5 0-37.3-32 37.3-32H352c17.7 0 32 14.3 32 32s-14.3 32-32 32H182.5z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgKipSign;
