import * as React from "react";
import { SVGProps } from "react";

const SvgRestroomSimple = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" {...props}>
    <path
      className="restroom-simple_svg__fa-primary"
      d="m575.4 363.6-48.3-168.8c-5.8-20.6-24.7-34.8-47-34.8h-65.99c-21.43 0-40.27 14.21-46.15 34.81l-48.23 168.8C317.7 373.8 325.4 384 336 384h48v96c0 17.67 14.33 32 32 32h64c17.67 0 32-14.33 32-32v-96h47.99c10.61 0 18.31-10.2 15.41-20.4zM128 160H64c-35.35 0-64 28.7-64 64v96c0 17.67 14.33 32 32 32v128c0 17.67 14.33 32 32 32h64c17.67 0 32-14.33 32-32V352c17.67 0 32-14.33 32-32v-96c0-35.3-28.7-64-64-64z"
    />
    <path
      d="M256 0c-13.2 0-24 10.8-24 24v464c0 13.2 10.8 24 24 24s24-10.8 24-24V24c0-13.2-10.8-24-24-24zm192 0c-35.38 0-64 28.62-64 64s28.62 64 64 64 64-28.62 64-64-28.6-64-64-64zM96 0C60.63 0 32 28.62 32 64s28.62 64 64 64 64-28.62 64-64S131.4 0 96 0z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgRestroomSimple;
