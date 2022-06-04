import * as React from "react";
import { SVGProps } from "react";

const SvgChartTreeMap = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path
      className="chart-tree-map_svg__fa-primary"
      d="M0 80c0-26.51 21.49-48 48-48h128c26.5 0 48 21.49 48 48v112c0 26.5-21.5 48-48 48H48c-26.51 0-48-21.5-48-48V80zm256 0c0-26.51 21.5-48 48-48h160c26.5 0 48 21.49 48 48v32c0 26.5-21.5 48-48 48H304c-26.5 0-48-21.5-48-48V80zm208 272c26.5 0 48 21.5 48 48v32c0 26.5-21.5 48-48 48H304c-26.5 0-48-21.5-48-48v-32c0-26.5 21.5-48 48-48h160z"
    />
    <path
      d="M464 192c26.5 0 48 21.5 48 48v32c0 26.5-21.5 48-48 48H304c-26.5 0-48-21.5-48-48v-32c0-26.5 21.5-48 48-48h160zm-288 80c26.5 0 48 21.5 48 48v112c0 26.5-21.5 48-48 48H48c-26.51 0-48-21.5-48-48V320c0-26.5 21.49-48 48-48h128z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgChartTreeMap;
