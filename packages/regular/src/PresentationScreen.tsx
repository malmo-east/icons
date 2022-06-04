import * as React from "react";
import { SVGProps } from "react";

const SvgPresentationScreen = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" {...props}>
    <path d="M496 304H80V80H32v240c0 17.6 14.4 32 32 32h200v47.02l-72 72c-9.354 9.352-9.354 24.52 0 33.88 9.348 9.348 24.51 9.359 33.87.02L288 442.9l62.09 62.09c9.391 9.391 24.63 9.348 33.97-.094 9.301-9.406 9.258-24.55-.094-33.91L312 399v-47h200c17.6 0 32-14.4 32-32V80h-48v224zM552 0H23.96C10.72 0 0 10.73 0 23.95S10.72 48 23.96 48h528.1C565.3 48 576 37.27 576 24.05S565.3 0 552 0z" />
  </svg>
);

export default SvgPresentationScreen;
