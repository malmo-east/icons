import * as React from "react";
import { SVGProps } from "react";

const SvgGrid2Plus = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M176 32c26.5 0 48 21.49 48 48v96c0 26.5-21.5 48-48 48H80c-26.51 0-48-21.5-48-48V80c0-26.51 21.49-48 48-48h96zm0 32H80c-8.84 0-16 7.16-16 16v96c0 8.8 7.16 16 16 16h96c8.8 0 16-7.2 16-16V80c0-8.84-7.2-16-16-16zm0 224c26.5 0 48 21.5 48 48v96c0 26.5-21.5 48-48 48H80c-26.51 0-48-21.5-48-48v-96c0-26.5 21.49-48 48-48h96zm0 32H80c-8.84 0-16 7.2-16 16v96c0 8.8 7.16 16 16 16h96c8.8 0 16-7.2 16-16v-96c0-8.8-7.2-16-16-16zM288 80c0-26.51 21.5-48 48-48h96c26.5 0 48 21.49 48 48v96c0 26.5-21.5 48-48 48h-96c-26.5 0-48-21.5-48-48V80zm32 0v96c0 8.8 7.2 16 16 16h96c8.8 0 16-7.2 16-16V80c0-8.84-7.2-16-16-16h-96c-8.8 0-16 7.16-16 16zm64 192c8.8 0 16 7.2 16 16v80h80c8.8 0 16 7.2 16 16s-7.2 16-16 16h-80v80c0 8.8-7.2 16-16 16s-16-7.2-16-16v-80h-80c-8.8 0-16-7.2-16-16s7.2-16 16-16h80v-80c0-8.8 7.2-16 16-16z" />
  </svg>
);

export default SvgGrid2Plus;