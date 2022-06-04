import * as React from "react";
import { SVGProps } from "react";

const SvgM = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
    <path d="M440 480c-4.406 0-8-3.594-8-7.1V65.64l-201.4 290.9c-2.938 4.312-10.19 4.312-13.12 0L16 65.64v406.4c0 4.406-3.594 7.1-8 7.1S0 476.4 0 472V40.01c0-3.5 2.281-6.59 5.625-7.62a7.934 7.934 0 0 1 8.938 3.062L224 337.9 433.4 35.4c2-2.82 5.6-4.11 9-3.01 3.3 1.03 5.6 4.12 5.6 7.62v431.1c0 5.29-3.6 8.89-8 8.89z" />
  </svg>
);

export default SvgM;
