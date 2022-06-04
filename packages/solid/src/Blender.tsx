import * as React from "react";
import { SVGProps } from "react";

const SvgBlender = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M336 64h158.5L512 0H48C21.49 0 0 21.49 0 48v160c0 26.5 21.49 48 48 48h103.3l8.7 96h256l17.49-64H336c-8.8 0-16-7.2-16-16s7.2-16 16-16h106.1l17.49-64H336c-8.8 0-16-7.2-16-16s7.2-16 16-16h132.4l17.49-64H336c-8.8 0-16-7.2-16-16s7.2-16 16-16zM64 192V64h69.88l11.62 128H64zm352 192H160c-35.38 0-64 28.62-64 64v32c0 17.62 14.38 32 32 32h320c17.62 0 32-14.38 32-32v-32c0-35.4-28.6-64-64-64zm-128 96c-17.62 0-32-14.38-32-32s14.38-32 32-32 32 14.38 32 32-14.4 32-32 32z" />
  </svg>
);

export default SvgBlender;
