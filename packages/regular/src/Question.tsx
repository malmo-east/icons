import * as React from "react";
import { SVGProps } from "react";

const SvgQuestion = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" {...props}>
    <path d="M144 416c-17.67 0-32 14.33-32 32s14.33 32.01 32 32.01 32-14.34 32-32.01-14.3-32-32-32zm67.2-384H104C46.66 32 0 78.66 0 136v16c0 13.3 10.75 24 24 24s24-10.7 24-24v-16c0-30.88 25.12-56 56-56h107.2c33.5 0 60.8 27.3 60.8 60.8 0 22.66-12.44 43.27-32.5 53.81L167 232.8c-29.9 15.2-47 45.1-47 77.8V328c0 13.25 10.75 24.01 24 24.01s24-10.71 24-24.01v-17.4c0-14.89 8.188-28.47 21.38-35.41l72.47-38.14C297.7 218.2 320 181.3 320 140.8 320 80.81 271.2 32 211.2 32z" />
  </svg>
);

export default SvgQuestion;