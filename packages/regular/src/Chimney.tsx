import * as React from "react";
import { SVGProps } from "react";

const SvgChimney = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
    <path d="M416 32H32C14.33 32 0 46.33 0 64v128c0 17.75 14.25 32 32 32v232c0 13.3 10.75 24 23.1 24S80 469.3 80 456v-72h176v72c0 13.3 10.7 24 23.1 24s24.9-10.7 24.9-24v-72h64v72c0 13.3 10.7 24 23.1 24s24.9-10.7 24.9-24V224c17.75 0 32-14.25 32-32V64c0-17.67-14.3-32-32-32zM160 336H80V224h80v112zm208 0H208V224h160v112zm32-160H48V80h352v96z" />
  </svg>
);

export default SvgChimney;