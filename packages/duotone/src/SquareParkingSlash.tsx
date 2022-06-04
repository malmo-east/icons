import * as React from "react";
import { SVGProps } from "react";

const SvgSquareParkingSlash = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" {...props}>
    <path
      className="square-parking-slash_svg__fa-primary"
      d="M5.112 9.196C13.29-1.236 28.37-3.065 38.81 5.112L630.8 469.1c10.4 8.2 12.3 23.3 4.1 33.7-8.2 10.4-23.3 12.3-33.7 4.1L9.196 42.89C-1.236 34.71-3.065 19.63 5.112 9.196z"
    />
    <path
      d="M404.2 291.5c17.2-17.3 27.8-41.2 27.8-67.5 0-53.9-43-96-96-96h-72c-16.7 0-30.9 10.2-36.9 24.7L107.7 59.11C119.3 42.71 138.4 32 160 32h320c35.3 0 64 28.65 64 64v305.1L404.2 291.5zM288 200.4V192h48c17.7 0 32 14.3 32 32 0 11.5-6.1 21.6-15.2 27.2L288 200.4zM224 352c0 17.7 14.3 32 32 32s32-14.3 32-32v-29.1l198.9 156.7c-2.3.3-4.6.4-6.9.4H160c-35.3 0-64-28.7-64-64V171.6l128 100.9V352z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgSquareParkingSlash;
