import * as React from "react";
import { SVGProps } from "react";

const SvgExclamation = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 512" {...props}>
    <path d="M64 368c13.27 0 24-10.75 24-24V56c0-13.25-10.73-23.99-24-23.99S40 42.75 40 56v288c0 13.3 10.73 24 24 24zm0 48c-17.67 0-32 14.33-32 32s14.33 32.01 32 32.01S96 465.7 96 448s-14.33-32-32-32z" />
  </svg>
);

export default SvgExclamation;