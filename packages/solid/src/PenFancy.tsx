import * as React from "react";
import { SVGProps } from "react";

const SvgPenFancy = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M373.5 27.11C388.5 9.885 410.2 0 433 0c43.6 0 79 35.36 79 78.98 0 22.82-9.9 44.52-27.1 59.52L277.7 319l-85.6-84.7L373.5 27.11zM255.1 341.7l-19.2 83.4c-4 17.1-17 30.7-33.9 35.4L24.35 510.3l95.35-95.4c2.7.7 5.4 1.1 8.3 1.1 17.7 0 32-14.3 32-32s-14.3-32-32-32-32 14.3-32 32c0 2.9.38 5.6 1.08 8.3L1.724 487.6 51.47 309.1c4.74-16 18.33-29 35.43-33l83.4-19.2 84.8 84.8z" />
  </svg>
);

export default SvgPenFancy;
