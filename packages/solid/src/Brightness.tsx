import * as React from "react";
import { SVGProps } from "react";

const SvgBrightness = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M224 32c0-17.67 14.3-32 32-32s32 14.33 32 32v48c0 17.67-14.3 32-32 32s-32-14.33-32-32V32zm128 224c0 53-43 96-96 96-53.9 0-96-43-96-96 0-53.9 42.1-96 96-96 53 0 96 42.1 96 96zM0 256c0-17.7 14.33-32 32-32h48c17.67 0 32 14.3 32 32s-14.33 32-32 32H32c-17.67 0-32-14.3-32-32zm480-32c17.7 0 32 14.3 32 32s-14.3 32-32 32h-48c-17.7 0-32-14.3-32-32s14.3-32 32-32h48zM256 512c-17.7 0-32-14.3-32-32v-48c0-17.7 14.3-32 32-32s32 14.3 32 32v48c0 17.7-14.3 32-32 32zM73.37 438.6c-12.49-12.5-12.49-32.7 0-45.2l32.03-32c12.5-12.5 32.7-12.5 45.2 0s12.5 32.7 0 45.2l-32 32c-12.5 12.5-32.73 12.5-45.23 0zM393.4 73.37c12.5-12.49 32.7-12.49 45.2 0 12.5 12.5 12.5 32.73 0 45.23l-32 32c-12.5 12.5-32.7 12.5-45.2 0s-12.5-32.7 0-45.2l32-32.03zm45.2 365.23c-12.5 12.5-32.7 12.5-45.2 0l-32-32c-12.5-12.5-12.5-32.7 0-45.2s32.7-12.5 45.2 0l32 32c12.5 12.5 12.5 32.7 0 45.2zm-365.23-320c-12.49-12.5-12.49-32.73 0-45.23 12.5-12.49 32.73-12.49 45.23 0l32 32.03c12.5 12.5 12.5 32.7 0 45.2s-32.7 12.5-45.2 0l-32.03-32z" />
  </svg>
);

export default SvgBrightness;