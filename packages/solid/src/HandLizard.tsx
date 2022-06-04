import * as React from "react";
import { SVGProps } from "react";

const SvgHandLizard = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M512 329.1V432c0 8.836-7.164 16-16 16H368c-8.836 0-16-7.164-16-16v-16l-85.33-64H95.1c-16.47 0-31.44-13.44-31.96-29.9-.27-36.3 28.82-66.1 63.96-66.1H232c13.77 0 26-8.811 30.36-21.88l10.67-32C280.9 181.4 265.4 160 243.6 160H63.1C27.95 160-1.129 130.2.035 93.9.562 77.44 15.53 64 31.1 64h271.2c26.26 0 50.84 12.88 65.79 34.47l128.8 185.1C507 297.8 512 313.7 512 329.1z" />
  </svg>
);

export default SvgHandLizard;