import * as React from "react";
import { SVGProps } from "react";

const SvgUpFromLine = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" {...props}>
    <path d="M360 432H24c-13.25 0-24 10.8-24 24s10.75 24 24 24h336c13.25 0 24-10.75 24-24s-10.7-24-24-24zM69.09 272H112v64c0 26.51 21.49 47.95 48 47.95h64c26.51 0 48-21.44 48-47.95v-64h43.29c41.63 0 63.52-49.37 35.58-80.23l-136.2-150.4C208.4 35.13 200.2 32 192 32s-16.4 3.13-22.6 9.38L33.47 191.8C5.582 222.7 27.49 272 69.09 272zM192 86.63 313.4 224H224v112h-64V224H70.63L192 86.63z" />
  </svg>
);

export default SvgUpFromLine;