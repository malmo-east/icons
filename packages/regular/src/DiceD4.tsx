import * as React from "react";
import { SVGProps } from "react";

const SvgDiceD4 = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M512 309.1c0-7.05-2.318-14.15-7.127-20.07l-224-277.1C274.5 3.1 265.2 0 256 0c-9.2 0-18.5 3.1-24.9 11.88l-224 277.1C2.318 294.9 0 302 0 309.1c0 9.625 4.319 19.15 12.62 25.43l224 170.1C242.1 509.7 249 512 256 512c6.875 0 13.62-2.135 19.37-6.51l224-170.1C507.7 328.2 512 318.7 512 309.1zM232 87.12V441.5L54.76 306.4 232 87.12zm47.1 354.38V87.12l177.2 219.3L279.1 441.5z" />
  </svg>
);

export default SvgDiceD4;