import * as React from "react";
import { SVGProps } from "react";

const SvgBrowsers = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" {...props}>
    <path d="M512 0c35.3 0 64 28.65 64 64v288c0 35.3-28.7 64-64 64H160c-35.3 0-64-28.7-64-64V64c0-35.35 28.7-64 64-64h352zm0 16H200v80h360V64c0-26.51-21.5-48-48-48zM112 64v32h72V16h-24c-26.5 0-48 21.49-48 48zm48 336h352c26.5 0 48-21.5 48-48V112H112v240c0 26.5 21.5 48 48 48zm-144-8c0 57.4 46.56 104 104 104h352c4.4 0 8 3.6 8 8s-3.6 8-8 8H120C53.73 512 0 458.3 0 392V104a8 8 0 0 1 8-8c4.42 0 8 3.58 8 8v288z" />
  </svg>
);

export default SvgBrowsers;
