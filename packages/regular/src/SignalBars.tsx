import * as React from "react";
import { SVGProps } from "react";

const SvgSignalBars = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" {...props}>
    <path d="M128 384H64c-17.67 0-32 14.33-32 32v64c0 17.67 14.33 32 32 32h64c17.67 0 32-14.33 32-32v-64c0-17.7-14.3-32-32-32zm-16 80H80v-32h32v32zm168-208h-64c-17.67 0-32 14.33-32 32v192c0 17.67 14.33 32 32 32h64c17.67 0 32-14.33 32-32V288c0-17.7-14.3-32-32-32zm-16 208h-32V304h32v160zM584 0h-64c-17.67 0-32 14.33-32 32v448c0 17.67 14.33 32 32 32h64c17.67 0 32-14.33 32-32V32c0-17.67-14.3-32-32-32zm-16 464h-32V48h32v416zM432 128h-64c-17.67 0-32 14.33-32 32v320c0 17.67 14.33 32 32 32h64c17.67 0 32-14.33 32-32V160c0-17.7-14.3-32-32-32zm-16 336h-32V176h32v288z" />
  </svg>
);

export default SvgSignalBars;
