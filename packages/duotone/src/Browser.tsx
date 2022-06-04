import * as React from "react";
import { SVGProps } from "react";

const SvgBrowser = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path
      className="browser_svg__fa-primary"
      d="M0 96c0-35.35 28.65-64 64-64h384c35.3 0 64 28.65 64 64v128H0V96zm96 64c17.7 0 32-14.3 32-32s-14.3-32-32-32c-17.67 0-32 14.3-32 32s14.33 32 32 32zm88-56c-13.3 0-24 10.7-24 24s10.7 24 24 24h240c13.3 0 24-10.7 24-24s-10.7-24-24-24H184z"
    />
    <path
      d="M128 128c0 17.7-14.3 32-32 32-17.67 0-32-14.3-32-32s14.33-32 32-32c17.7 0 32 14.3 32 32zM64 480c-35.35 0-64-28.7-64-64V224h512v192c0 35.3-28.7 64-64 64H64z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgBrowser;
