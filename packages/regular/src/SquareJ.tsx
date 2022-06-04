import * as React from "react";
import { SVGProps } from "react";

const SvgSquareJ = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
    <path d="M384 32H64C28.65 32 0 60.65 0 96v320c0 35.35 28.65 64 64 64h320c35.35 0 64-28.65 64-64V96c0-35.35-28.7-64-64-64zm16 384c0 8.822-7.178 16-16 16H64c-8.822 0-16-7.178-16-16V96c0-8.822 7.178-16 16-16h320c8.822 0 16 7.178 16 16v320zM280 128c-13.2 0-24 10.8-24 24v138.7c0 25-21.5 45.3-48 45.3s-48-20.3-48-45.3V280c0-13.2-10.7-24-24-24s-24 10.8-24 24v10.67c0 51.43 43.1 93.33 96 93.33s96-41.86 96-93.33V152c0-13.2-10.7-24-24-24z" />
  </svg>
);

export default SvgSquareJ;