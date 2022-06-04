import * as React from "react";
import { SVGProps } from "react";

const SvgDiagramProject = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" {...props}>
    <path d="M0 80c0-26.51 21.49-48 48-48h96c26.5 0 48 21.49 48 48v16h192V80c0-26.51 21.5-48 48-48h96c26.5 0 48 21.49 48 48v96c0 26.5-21.5 48-48 48h-96c-26.5 0-48-21.5-48-48v-16H192v16c0 1.7-.1 3.4-.3 4.1L272 288h96c26.5 0 48 21.5 48 48v96c0 26.5-21.5 48-48 48h-96c-26.5 0-48-21.5-48-48v-96c0-1.7.1-3.4.3-5L144 224H48c-26.51 0-48-21.5-48-48V80z" />
  </svg>
);

export default SvgDiagramProject;
