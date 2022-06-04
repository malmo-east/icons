import * as React from "react";
import { SVGProps } from "react";

const SvgDiagramNested = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
    <path d="M144 32c26.5 0 48 21.49 48 48v96c0 26.5-21.5 48-48 48h-24v96c0 22.1 17.9 40 40 40h96v-24c0-26.5 21.5-48 48-48h96c26.5 0 48 21.5 48 48v96c0 26.5-21.5 48-48 48h-96c-26.5 0-48-21.5-48-48v-24h-96c-48.6 0-88-39.4-88-88v-96H48c-26.51 0-48-21.5-48-48V80c0-26.51 21.49-48 48-48h96zm0 48H48v96h96V80zm256 256h-96v96h96v-96z" />
  </svg>
);

export default SvgDiagramNested;