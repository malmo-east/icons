import * as React from "react";
import { SVGProps } from "react";

const SvgEyeDropperFull = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path
      className="eye-dropper-full_svg__fa-primary"
      d="M482.8 29.23c38.9 38.98 38.9 102.17 0 141.17L381.2 271.9l9.4 9.5c12.5 12.5 12.5 32.7 0 45.2s-32.7 12.5-45.2 0l-160-160c-12.5-12.5-12.5-32.7 0-45.2s32.7-12.5 45.2 0l9.5 9.4L341.6 29.23c39-38.974 102.2-38.974 141.2 0zM132.1 416H96v-36.1c0-4.3 1.69-8.3 4.7-11.3l117.9-118 42.8 42.8-118 117.9c-3 3-7 4.7-11.3 4.7z"
    />
    <path
      d="M244 225.3 100.7 368.6c-3.01 3-4.7 7-4.7 11.3V416h36.1c4.3 0 8.3-1.7 11.3-4.7L286.7 268l45.3 45.3-143.3 143.3c-15 15-35.4 23.4-56.6 23.4H89.69l-39.94 26.6c-12.69 8.5-29.59 6.8-40.378-4-10.786-10.8-12.459-27.7-3.998-40.4L32 422.3v-42.4c0-21.2 8.43-41.6 23.43-56.6L198.7 180l45.3 45.3z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgEyeDropperFull;
