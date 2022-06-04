import * as React from "react";
import { SVGProps } from "react";

const SvgQuestion = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" {...props}>
    <path d="M144 432c-8.8 0-16 7.2-16 16s7.164 16 16 16 16-7.2 16-16-7.2-16-16-16zm67.2-400H108.7C48.78 32 0 81.58 0 142.5v9.5c0 4.4 3.594 8 8 8s8-3.6 8-8v-9.5C16 90.41 57.59 48 108.7 48h102.6c51.1 0 92.7 42.41 92.7 94.5 0 34.33-18.31 66-48.09 82.88l-95.28 60.64C145.4 294.6 136 310.9 136 328.6V376c0 4.4 3.6 8 8 8s8-3.578 8-8v-47.41c0-11.89 6.312-22.86 16.84-28.83l95.28-60.64C298.6 219.6 320 182.6 320 142.5 320 81.58 271.2 32 211.2 32z" />
  </svg>
);

export default SvgQuestion;
