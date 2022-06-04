import * as React from "react";
import { SVGProps } from "react";

const SvgTransporterEmpty = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" {...props}>
    <path d="M288 448H32c-17.62 0-32 14.38-32 32v32h320v-32c0-17.6-14.4-32-32-32z" />
  </svg>
);

export default SvgTransporterEmpty;
