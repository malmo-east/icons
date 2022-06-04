import * as React from "react";
import { SVGProps } from "react";

const SvgBreadLoaf = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" {...props}>
    <path d="M400 32H240C107.5 32 0 103.6 0 192c0 35.38 26.88 64 60 64h4v192c0 17.62 14.38 32 32 32h448c17.62 0 32-14.38 32-32V256h4c33.1 0 60-28.6 60-64 0-88.4-107.5-160-240-160zm20 176h-52v224H112V208H60c-5.75 0-12-6.4-12-16 0-59.62 89.75-112 192-112s192 52.38 192 112c0 9.6-6.2 16-12 16z" />
  </svg>
);

export default SvgBreadLoaf;
