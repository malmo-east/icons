import * as React from "react";
import { SVGProps } from "react";

const SvgHurricane = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
    <path d="M224 96c-13.2 0-24 10.8-24 24s10.8 24 24 24c88.22 0 160 71.79 160 160s-71.8 160-160 160c-13.25 0-24 10.75-24 24s10.8 24 24 24c114.7 0 208-93.31 208-208S338.7 96 224 96zm40 296c0-13.25-10.75-24-24-24-88.22 0-160-71.78-160-160S151.78 48 240 48c13.25 0 24-10.75 24-24S253.3 0 240 0C125.3 0 32 93.31 32 208s93.31 208 208 208c13.3 0 24-10.7 24-24zm-8-136.9c0-17.67-14.33-32-32-32s-32 15.2-32 32c0 17.67 14.33 32 32 32s32-13.4 32-32z" />
  </svg>
);

export default SvgHurricane;