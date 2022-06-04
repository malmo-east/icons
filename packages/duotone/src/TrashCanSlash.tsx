import * as React from "react";
import { SVGProps } from "react";

const SvgTrashCanSlash = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" {...props}>
    <path
      className="trash-can-slash_svg__fa-primary"
      d="M5.112 9.196C13.29-1.236 28.37-3.065 38.81 5.112L630.8 469.1c10.4 8.2 12.3 23.3 4.1 33.7-8.2 10.4-23.3 12.3-33.7 4.1L9.196 42.89C-1.236 34.71-3.065 19.63 5.112 9.196z"
    />
    <path
      d="M432 313.3V208c0-8.8-7.2-16-16-16s-16 7.2-16 16v80.2L336 238v-30.9c0-7.9-7.2-16-16-16s-16 8.1-16 16v5l-108.4-85H512v248l-80-61.8zM98.4 51.82C103.2 40.19 114.6 32 128 32h96l7.2-14.31C236.6 6.848 247.7 0 259.8 0h120.4c12.1 0 23.2 6.848 28.6 17.69L416 32h96c17.7 0 32 14.33 32 32s-14.3 32-32 32H154.8L98.4 51.82zM128 448V196.9l80 63V432c0 8.8 7.2 16 16 16s16-7.2 16-16V285.1l64 50.4V432c0 8.8 7.2 16 16 16s16-7.2 16-16v-71.3l64 50.5V432c0 8.8 7.2 16 16 16 7.5 0 13.7-5.1 15.5-12.9l66.3 53.1C486.1 502.7 468.1 512 448 512H192c-35.3 0-64-28.7-64-64z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgTrashCanSlash;