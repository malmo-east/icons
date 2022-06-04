import * as React from "react";
import { SVGProps } from "react";

const SvgWindow = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path
      className="window_svg__fa-primary"
      d="M448 32c35.3 0 64 28.65 64 64v128H0V96c0-35.35 28.65-64 64-64h384zM96 160c17.7 0 32-14.3 32-32s-14.3-32-32-32c-17.67 0-32 14.3-32 32s14.33 32 32 32zm96-64c-17.7 0-32 14.3-32 32s14.3 32 32 32 32-14.3 32-32-14.3-32-32-32zm96 64c17.7 0 32-14.3 32-32s-14.3-32-32-32-32 14.3-32 32 14.3 32 32 32z"
    />
    <path
      d="M224 128c0 17.7-14.3 32-32 32s-32-14.3-32-32 14.3-32 32-32 32 14.3 32 32zm288 288c0 35.3-28.7 64-64 64H64c-35.35 0-64-28.7-64-64V224h512v192zM256 128c0-17.7 14.3-32 32-32s32 14.3 32 32-14.3 32-32 32-32-14.3-32-32z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgWindow;
