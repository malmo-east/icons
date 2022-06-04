import * as React from "react";
import { SVGProps } from "react";

const SvgHeat = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
    <path d="M48 156.1V120c0-13.3-10.75-24-24-24-13.26 0-24 10.7-24 24v36.13C-.125 205.8 19.5 253.5 54.63 288.6 81 314.9 95.88 350.6 96 387.9V456c0 13.3 10.7 24 24 24 13.25 0 24-10.75 24-24v-68.13c.125-49.63-19.5-97.38-54.63-132.5C63 229.1 48.13 193.4 48 156.1zm345.4 99.3c-26.4-26.3-41.3-62-41.4-99.3V120c0-13.3-10.7-24-24-24-13.26 0-24 10.74-24 24v36.13c-.125 49.63 19.5 97.38 54.63 132.5 26.38 26.25 41.25 62 41.38 99.25V456c0 13.25 10.74 24 24 24 13.25 0 24-10.75 24-24v-68.13c.09-49.57-19.51-97.37-54.61-132.47zM200 156.1V56c0-13.26-10.7-24-24-24s-24 10.74-24 24v100.1c-.1 49.7 19.5 97.4 54.6 132.5 26.38 26.25 41.25 62 41.38 99.25V456c0 13.25 10.74 24 24 24 13.25 0 24-10.75 24-24v-68.13c.125-49.63-19.5-97.38-54.63-132.5A140.722 140.722 0 0 1 200 156.1z" />
  </svg>
);

export default SvgHeat;
