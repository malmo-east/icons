import * as React from "react";
import { SVGProps } from "react";

const SvgShekelSign = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
    <path d="M192 32c70.7 0 128 57.31 128 128v160c0 17.7-14.3 32-32 32s-32-14.3-32-32V160c0-35.3-28.7-64-64-64H64v352c0 17.7-14.33 32-32 32S0 465.7 0 448V64c0-17.67 14.33-32 32-32h160zm-32 448c-17.7 0-32-14.3-32-32V192c0-17.7 14.3-32 32-32s32 14.3 32 32v224h128c35.3 0 64-28.7 64-64V64c0-17.67 14.3-32 32-32s32 14.33 32 32v288c0 70.7-57.3 128-128 128H160z" />
  </svg>
);

export default SvgShekelSign;