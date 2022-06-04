import * as React from "react";
import { SVGProps } from "react";

const SvgPrint = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path
      className="print_svg__fa-primary"
      d="M448 192H64c-35.35 0-64 28.7-64 64v96c0 17.67 14.33 32 32 32h96v-32h256v32h96c17.67 0 32-14.33 32-32v-96c0-35.3-28.7-64-64-64zm-16 104c-13.25 0-24-10.75-24-24 0-13.27 10.75-24 24-24s24 10.73 24 24c0 13.3-10.7 24-24 24z"
    />
    <path
      d="M384 448H128v-64H64v96c0 17.67 14.33 32 32 32h320c17.67 0 32-14.33 32-32v-96h-64v64zm54.6-393.37L393.35 9.38C387.4 3.375 379.2 0 370.8 0H96C78.34 0 64 14.33 64 32v160h64V64h229.5L384 90.51V192h64V77.25c0-8.48-3.4-16.62-9.4-22.62z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgPrint;
