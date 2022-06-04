import * as React from "react";
import { SVGProps } from "react";

const SvgDiagramNested = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
    <path d="M144 32c26.5 0 48 21.49 48 48v96c0 26.5-21.5 48-48 48h-40v96c0 30.9 25.1 56 56 56h96v-40c0-26.5 21.5-48 48-48h96c26.5 0 48 21.5 48 48v96c0 26.5-21.5 48-48 48h-96c-26.5 0-48-21.5-48-48v-40h-96c-39.8 0-72-32.2-72-72v-96H48c-26.51 0-48-21.5-48-48V80c0-26.51 21.49-48 48-48h96zm0 16H48c-17.67 0-32 14.33-32 32v96c0 17.7 14.33 32 32 32h96c17.7 0 32-14.3 32-32V80c0-17.67-14.3-32-32-32zm256 256h-96c-17.7 0-32 14.3-32 32v96c0 17.7 14.3 32 32 32h96c17.7 0 32-14.3 32-32v-96c0-17.7-14.3-32-32-32z" />
  </svg>
);

export default SvgDiagramNested;
