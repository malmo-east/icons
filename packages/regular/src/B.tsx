import * as React from "react";
import { SVGProps } from "react";

const SvgB = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" {...props}>
    <path d="M250.1 244.9c23.3-22.5 37.9-54 37.9-88.9 0-68.37-55.6-124-124-124H24C10.75 32 0 42.75 0 56v400c0 13.3 10.75 24 24 24h172c68.4 0 124-55.6 124-124 0-48.9-28.7-90.9-69.9-111.1zM48 80h116c41.91 0 76 34.09 76 76s-34.1 76-76 76H48V80zm148 352H48V280h148c41.91 0 76 34.09 76 76s-34.1 76-76 76z" />
  </svg>
);

export default SvgB;
