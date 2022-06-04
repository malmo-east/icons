import * as React from "react";
import { SVGProps } from "react";

const SvgFontAwesome = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
    <path d="M448 48v336c-63 23-82 32-119 32-63 0-87-32-150-32-20 0-36 4-51 8v-64c15-4 31-8 51-8 63 0 87 32 150 32 20 0 35-3 55-9V135c-20 6-35 9-55 9-63 0-87-32-150-32-51 0-75 21-115 29v307c0 18-14 32-32 32S0 466 0 448V64c0-18 14-32 32-32s32 14 32 32v13c40-8 64-29 115-29 63 0 87 32 150 32 37 0 56-9 119-32Z" />
  </svg>
);

export default SvgFontAwesome;