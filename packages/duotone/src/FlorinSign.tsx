import * as React from "react";
import { SVGProps } from "react";

const SvgFlorinSign = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" {...props}>
    <path
      className="florin-sign_svg__fa-primary"
      d="M226.1 91.08C240.1 55.3 275.9 32 314.7 32H352c17.7 0 32 14.33 32 32s-14.3 32-32 32h-37.3c-13 0-24.6 7.8-29.6 19.7L157.9 420.9C143 456.7 108.1 480 69.33 480H32c-17.67 0-32-14.3-32-32s14.33-32 32-32h37.33c12.92 0 24.57-7.8 29.54-19.7L226.1 91.08z"
    />
    <path
      d="M144 288H64c-17.67 0-32-14.3-32-32s14.33-32 32-32h106.7L144 288zm96-64h80c17.7 0 32 14.3 32 32s-14.3 32-32 32H213.3l26.7-64z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgFlorinSign;
