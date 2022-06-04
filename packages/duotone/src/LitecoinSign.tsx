import * as React from "react";
import { SVGProps } from "react";

const SvgLitecoinSign = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" {...props}>
    <path
      className="litecoin-sign_svg__fa-primary"
      d="M96 32c17.7 0 32 14.33 32 32v352h224c17.7 0 32 14.3 32 32s-14.3 32-32 32H96c-17.67 0-32-14.3-32-32V64c0-17.67 14.33-32 32-32z"
    />
    <path
      d="m64 280.1-23.21 6.7c-16.99 4.8-34.703-5-39.558-22-4.855-17 4.984-34.7 21.978-39.6L64 213.6v66.5zm64-84.8 119.2-34.1c17-4.8 34.7 5 39.6 22 4.8 17-5 34.7-22 39.6L128 261.9v-66.6z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgLitecoinSign;
