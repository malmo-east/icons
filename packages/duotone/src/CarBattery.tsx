import * as React from "react";
import { SVGProps } from "react";

const SvgCarBattery = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path
      className="car-battery_svg__fa-primary"
      d="M80 96c0-17.67 14.33-32 32-32h64c17.7 0 32 14.33 32 32H80zm224 0c0-17.67 14.3-32 32-32h64c17.7 0 32 14.33 32 32H304z"
    />
    <path
      d="M0 160c0-35.3 28.65-64 64-64h384c35.3 0 64 28.7 64 64v224c0 35.3-28.7 64-64 64H64c-35.35 0-64-28.7-64-64V160zm352 32v32h-32c-8.8 0-16 7.2-16 16s7.2 16 16 16h32v32c0 8.8 7.2 16 16 16s16-7.2 16-16v-32h32c8.8 0 16-7.2 16-16s-7.2-16-16-16h-32v-32c0-8.8-7.2-16-16-16s-16 7.2-16 16zM96 224c-8.84 0-16 7.2-16 16s7.16 16 16 16h96c8.8 0 16-7.2 16-16s-7.2-16-16-16H96z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgCarBattery;
