import * as React from "react";
import { SVGProps } from "react";

const SvgEgg = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" {...props}>
    <path d="M192 16C86 16 0 216.6 0 316s85.1 180 192 180c105.1 0 192-80.63 192-180S297.1 16 192 16zm0 464c-97.05 0-176-73.57-176-164 0-48.94 21.8-121.1 54.24-179.5C107.1 70.09 151.5 32 192 32s84.88 38.09 121.8 104.5C346.2 194.9 368 267.1 368 316c0 90.4-79 164-176 164zm-44.3-360.9c-.281 0-.563.016-.844.047-2.156 1.153-4.056 2.153-5.456 2.953C107.8 164.7 72 242.3 72 304c0 4.406 3.594 8 8 8s8-3.6 8-8c0-55.97 33.5-130.9 65.91-170.1 2.781-3.422 2.219-8.469-1.219-11.25-1.391-2.05-3.191-3.55-4.991-3.55z" />
  </svg>
);

export default SvgEgg;
