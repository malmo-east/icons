import * as React from "react";
import { SVGProps } from "react";

const SvgSlashBack = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" {...props}>
    <path
      d="M288 512c-11.12 0-21.91-5.781-27.81-16.12l-256-448C-4.591 32.54.752 12.99 16.1 4.22 31.47-4.594 51 .766 59.78 16.12l256 448c8.781 15.34 3.438 34.89-11.91 43.66C298.9 510.6 293.4 512 288 512z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgSlashBack;