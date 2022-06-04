import * as React from "react";
import { SVGProps } from "react";

const SvgTurnDownLeft = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path
      className="turn-down-left_svg__fa-primary"
      d="M119.7 409.6c6.984 6.484 17.17 8.219 25.92 4.406s14.41-12.45 14.41-22v-208c0-9.547-5.656-18.19-14.41-22S126.7 159.9 119.7 166.4l-112 104c-10.23 9.498-10.23 25.69 0 35.19l112 104.01z"
    />
    <path
      d="M160 256h272c8.8 0 16-7.2 16-16V64c0-17.67 14.31-32 32-32s32 14.33 32 32v176c0 44.11-35.88 80-80 80H160v-64z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgTurnDownLeft;
