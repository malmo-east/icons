import * as React from "react";
import { SVGProps } from "react";

const SvgEngine = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" {...props}>
    <path
      className="engine_svg__fa-primary"
      d="M96 176c0-17.7 14.3-32 32-32h281.5c14.6 0 28.7 4.9 40 14l37.6 30.8c16.1 12.1 24.9 30.5 24.9 50V384c0 35.3-28.7 64-64 64H254.8c-19.5 0-37.9-8.8-50-24.9l-32-39.1H128c-17.7 0-32-14.3-32-32V176zm192 112c17.7 0 32-14.3 32-32s-14.3-32-32-32-32 14.3-32 32 14.3 32 32 32zm-96-64c-17.7 0-32 14.3-32 32s14.3 32 32 32 32-14.3 32-32-14.3-32-32-32zm192 64c17.7 0 32-14.3 32-32s-14.3-32-32-32-32 14.3-32 32 14.3 32 32 32z"
    />
    <path
      d="M424 88c0 13.3-10.7 24-24 24h-72v32h-48v-32h-72c-13.3 0-24-10.7-24-24 0-13.25 10.7-24 24-24h192c13.3 0 24 10.75 24 24zM24 136c13.25 0 24 10.7 24 24v72h48v48H48v72c0 13.3-10.75 24-24 24S0 365.3 0 352V160c0-13.3 10.75-24 24-24zm584 56c17.7 0 32 14.3 32 32v192c0 17.7-14.3 32-32 32h-32c-17.7 0-32-14.3-32-32V224c0-17.7 14.3-32 32-32h32z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgEngine;
