import * as React from "react";
import { SVGProps } from "react";

const SvgRestroomSimple = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" {...props}>
    <path d="m575.4 363.6-44.9-157.2c-7.9-27.5-33-46.4-61.6-46.4h-41.85c-28.57 0-53.69 18.94-61.54 46.42l-44.91 157.2C317.7 373.8 325.4 384 336 384h48v112c0 8.844 7.156 16 16 16s16-7.156 16-16V384h64v112c0 8.844 7.156 16 16 16s16-7.156 16-16V384h47.99c10.61 0 18.31-10.2 15.41-20.4zM357.2 352l39.08-136.8c3.92-13.7 16.52-23.2 30.82-23.2h41.85c14.29 0 26.84 9.471 30.77 23.21L538.8 352H357.2zM448 128c35.38 0 64-28.62 64-64S483.38 0 448 0s-64 28.62-64 64 28.6 64 64 64zm0-96c17.64 0 32 14.36 32 32s-14.36 32-32 32-32-14.36-32-32 14.4-32 32-32zM128 160H64c-35.35 0-64 28.7-64 64v96c0 17.67 14.33 32 32 32v144c0 8.8 7.16 16 16 16s16-7.2 16-16V352h64v144c0 8.8 7.2 16 16 16s16-7.2 16-16V352c17.67 0 32-14.33 32-32v-96c0-35.3-28.7-64-64-64zm32 160H32v-96c0-17.64 14.36-32 32-32h64c17.64 0 32 14.36 32 32v96zM96 128c35.38 0 64-28.62 64-64S131.4 0 96 0 32 28.62 32 64s28.63 64 64 64zm0-96c17.64 0 32 14.36 32 32s-14.4 32-32 32-32-14.36-32-32 14.36-32 32-32zM256 0c-8.8 0-16 7.156-16 16v480c0 8.8 7.2 16 16 16s16-7.156 16-16V16c0-8.844-7.2-16-16-16z" />
  </svg>
);

export default SvgRestroomSimple;