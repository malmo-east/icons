import * as React from "react";
import { SVGProps } from "react";

const SvgTengeSign = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" {...props}>
    <path d="M0 64c0-17.67 14.33-32 32-32h320c17.7 0 32 14.33 32 32s-14.3 32-32 32H32C14.33 96 0 81.67 0 64zm0 128c0-17.7 14.33-32 32-32h320c17.7 0 32 14.3 32 32s-14.3 32-32 32H224v224c0 17.7-14.3 32-32 32s-32-14.3-32-32V224H32c-17.67 0-32-14.3-32-32z" />
  </svg>
);

export default SvgTengeSign;