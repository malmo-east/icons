import * as React from "react";
import { SVGProps } from "react";

const SvgObjectGroup = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" {...props}>
    <path
      className="object-group_svg__fa-primary"
      d="M288 128c17.7 0 32 14.3 32 32v96c0 17.7-14.3 32-32 32H160c-17.7 0-32-14.3-32-32v-96c0-17.7 14.3-32 32-32h128zm-32 224v-32h32c35.3 0 64-28.7 64-64v-32h64c17.7 0 32 14.3 32 32v96c0 17.7-14.3 32-32 32H288c-17.7 0-32-14.3-32-32z"
    />
    <path
      d="M64 0c23.69 0 44.4 12.87 55.4 32h337.2c11-19.13 31.7-32 55.4-32 35.3 0 64 28.65 64 64 0 23.69-12.9 44.4-32 55.4v273.2c19.1 11 32 31.7 32 55.4 0 35.3-28.7 64-64 64-23.7 0-44.4-12.9-55.4-32H119.4c-11 19.1-31.71 32-55.4 32-35.35 0-64-28.7-64-64 0-23.7 12.87-44.4 32-55.4V119.4C12.87 108.4 0 87.69 0 64 0 28.65 28.65 0 64 0zm416 392.6V119.4c-9.7-5.6-17.8-13.7-23.4-24.3H119.4c-5.6 10.6-13.7 18.7-24.3 24.3v273.2c10.6 5.6 18.7 13.7 24.3 23.4h337.2c5.6-9.7 13.7-17.8 23.4-23.4z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgObjectGroup;