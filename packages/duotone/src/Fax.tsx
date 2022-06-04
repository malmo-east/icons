import * as React from "react";
import { SVGProps } from "react";

const SvgFax = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path
      className="fax_svg__fa-primary"
      d="M64 128H32c-17.62 0-32 14.4-32 32v320c0 17.62 14.38 32 32 32h32c17.62 0 32-14.38 32-32V160c0-17.6-14.37-32-32-32zm416 64H128v288c0 17.6 14.4 32 32 32h320c17.6 0 32-14.4 32-32V224c0-17.7-14.3-32-32-32zM288 432c0 8.875-7.125 16-16 16h-32c-8.9 0-16-7.1-16-16v-32c0-8.9 7.1-16 16-16h32c8.875 0 16 7.125 16 16v32zm0-128c0 8.875-7.125 16-16 16h-32c-8.9 0-16-7.1-16-16v-32c0-8.9 7.1-16 16-16h32c8.9 0 16 7.1 16 16v32zm128 128c0 8.875-7.125 16-16 16h-32c-8.875 0-16-7.125-16-16v-32c0-8.875 7.125-16 16-16h32c8.875 0 16 7.125 16 16v32zm0-128c0 8.875-7.125 16-16 16h-32c-8.9 0-16-7.1-16-16v-32c0-8.9 7.1-16 16-16h32c8.9 0 16 7.1 16 16v32z"
    />
    <path
      d="M272 256h-32c-8.9 0-16 7.1-16 16v32c0 8.9 7.1 16 16 16h32c8.875 0 16-7.125 16-16v-32c0-8.9-7.1-16-16-16zm0 128h-32c-8.9 0-16 7.1-16 16v32c0 8.9 7.1 16 16 16h32c8.875 0 16-7.125 16-16v-32c0-8.9-7.1-16-16-16zm128 0h-32c-8.875 0-16 7.125-16 16v32c0 8.875 7.125 16 16 16h32c8.875 0 16-7.125 16-16v-32c0-8.9-7.1-16-16-16zm0-128h-32c-8.9 0-16 7.1-16 16v32c0 8.875 7.125 16 16 16h32c8.875 0 16-7.125 16-16v-32c0-8.9-7.1-16-16-16zm70.6-201.37L425.35 9.38C419.4 3.375 411.2 0 402.8 0H160c-17.7 0-32 14.33-32 32v160h64V64h197.5L416 90.51V192h64V77.25c0-8.48-3.4-16.62-9.4-22.62z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgFax;