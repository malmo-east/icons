import * as React from "react";
import { SVGProps } from "react";

const SvgGrid2Plus = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M176 32c26.5 0 48 21.49 48 48v96c0 26.5-21.5 48-48 48H80c-26.51 0-48-21.5-48-48V80c0-26.51 21.49-48 48-48h96zm0 48H80v96h96V80zm0 208c26.5 0 48 21.5 48 48v96c0 26.5-21.5 48-48 48H80c-26.51 0-48-21.5-48-48v-96c0-26.5 21.49-48 48-48h96zm0 48H80v96h96v-96zM288 80c0-26.51 21.5-48 48-48h96c26.5 0 48 21.49 48 48v96c0 26.5-21.5 48-48 48h-96c-26.5 0-48-21.5-48-48V80zm48 96h96V80h-96v96zm48 96c13.3 0 24 10.7 24 24v64h64c13.3 0 24 10.7 24 24s-10.7 24-24 24h-64v64c0 13.3-10.7 24-24 24s-24-10.7-24-24v-64h-64c-13.3 0-24-10.7-24-24s10.7-24 24-24h64v-64c0-13.3 10.7-24 24-24z" />
  </svg>
);

export default SvgGrid2Plus;