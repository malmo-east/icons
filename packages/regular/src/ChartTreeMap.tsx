import * as React from "react";
import { SVGProps } from "react";

const SvgChartTreeMap = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M176 32c26.5 0 48 21.49 48 48v112c0 26.5-21.5 48-48 48H48c-26.51 0-48-21.5-48-48V80c0-26.51 21.49-48 48-48h128zm0 48H48v112h128V80zm0 192c26.5 0 48 21.5 48 48v112c0 26.5-21.5 48-48 48H48c-26.51 0-48-21.5-48-48V320c0-26.5 21.49-48 48-48h128zm0 48H48v112h128V320zm80-240c0-26.51 21.5-48 48-48h160c26.5 0 48 21.49 48 48v32c0 26.5-21.5 48-48 48H304c-26.5 0-48-21.5-48-48V80zm48 32h160V80H304v32zm160 80c26.5 0 48 21.5 48 48v32c0 26.5-21.5 48-48 48H304c-26.5 0-48-21.5-48-48v-32c0-26.5 21.5-48 48-48h160zm0 48H304v32h160v-32zM256 400c0-26.5 21.5-48 48-48h160c26.5 0 48 21.5 48 48v32c0 26.5-21.5 48-48 48H304c-26.5 0-48-21.5-48-48v-32zm48 32h160v-32H304v32z" />
  </svg>
);

export default SvgChartTreeMap;
