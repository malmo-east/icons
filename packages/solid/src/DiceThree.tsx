import * as React from "react";
import { SVGProps } from "react";

const SvgDiceThree = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
    <path d="M384 32H64C28.62 32 0 60.62 0 96v320c0 35.38 28.62 64 64 64h320c35.38 0 64-28.62 64-64V96c0-35.38-28.6-64-64-64zM128 192c-17.6 0-32-14.4-32-32s14.38-32 32-32 32 14.38 32 32-14.4 32-32 32zm96 96c-17.6 0-32-14.4-32-32s14.38-32 32-32 32 14.38 32 32-14.4 32-32 32zm96 96c-17.62 0-32-14.38-32-32s14.38-32 32-32 32 14.38 32 32-14.4 32-32 32z" />
  </svg>
);

export default SvgDiceThree;