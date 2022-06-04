import * as React from "react";
import { SVGProps } from "react";

const SvgMound = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" {...props}>
    <path d="M431.9 179.2 540.4 368c12.3 21.4-3.1 48-27.7 48H63.31c-24.61 0-40-26.6-27.74-48L144.1 179.2C173.8 127.7 228.6 96 288 96c59.4 0 114.2 31.7 143.9 83.2zM526.6 376 417.1 187.2C391.2 140.7 341.7 112 288 112c-53.7 0-103.2 28.7-130 75.2L49.44 376c-6.13 10.7 1.57 24 13.87 24H512.7c11.4 0 20-13.3 13.9-24z" />
  </svg>
);

export default SvgMound;
