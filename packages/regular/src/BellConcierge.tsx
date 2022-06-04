import * as React from "react";
import { SVGProps } from "react";

const SvgBellConcierge = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M488 400H24c-13.25 0-24 10.7-24 23.1C0 437.3 10.75 448 23.1 448h464c13.25 0 24-10.75 24-23.1.9-14.2-9.8-24.9-23.1-24.9zM80 352c0-97 79-176 176-176s176 79 176 176v16h48v-16c0-112.9-83.5-205.9-192-221.5V112h24c13.25 0 24-10.75 24-24 0-13.26-10.7-24-24.9-24h-112C186.7 64 176 74.74 176 88c0 13.25 10.75 24 24 24h24v18.5C115.5 146.1 32 239.1 32 352v16h48v-16z" />
  </svg>
);

export default SvgBellConcierge;