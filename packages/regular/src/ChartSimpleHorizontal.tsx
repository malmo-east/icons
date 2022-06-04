import * as React from "react";
import { SVGProps } from "react";

const SvgChartSimpleHorizontal = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
    <path d="M448 272c0 26.5-21.5 48-48 48H48c-26.51 0-48-21.5-48-48v-32c0-26.5 21.49-48 48-48h352c26.5 0 48 21.5 48 48v32zM48 240v32h352v-32H48zm208 192c0 26.5-21.5 48-48 48H48c-26.51 0-48-21.5-48-48v-32c0-26.5 21.49-48 48-48h160c26.5 0 48 21.5 48 48v32zM48 400v32h160v-32H48zm0-240c-26.51 0-48-21.5-48-48V80c0-26.51 21.49-48 48-48h288c26.5 0 48 21.49 48 48v32c0 26.5-21.5 48-48 48H48zm288-48V80H48v32h288z" />
  </svg>
);

export default SvgChartSimpleHorizontal;