import * as React from "react";
import { SVGProps } from "react";

const SvgHourglassStart = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" {...props}>
    <path
      className="hourglass-start_svg__fa-primary"
      d="M32 448h320c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.67 0-32-14.3-32-32s14.33-32 32-32zM32 0h320c17.7 0 32 14.33 32 32s-14.3 32-32 32h-64v10.98c0 25.42-10.1 49.92-28.1 67.92L192 210.7l-67.9-67.8c-18-18-28.1-42.5-28.1-67.92V64H32C14.33 64 0 49.67 0 32S14.33 0 32 0z"
    />
    <path
      d="M78.86 323.9 146.7 256l-67.84-67.9C48.86 158.1 32 117.4 32 74.98V64h64v10.98c0 25.42 10.1 49.92 28.1 67.92l67.9 67.8 67.9-67.8c18-18 28.1-42.5 28.1-67.92V64h64v10.98c0 42.42-16.9 83.12-46.9 113.12L237.3 256l67.8 67.9c30 30 46.9 70.7 46.9 113.1v11h-64v-11c0-25.4-10.1-49.9-28.1-67.9L192 301.3l-67.9 67.8c-18 18-28.1 42.5-28.1 67.9v11H32v-11c0-42.4 16.86-83.1 46.86-113.1zm22.64 22.6-22.64-22.6z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgHourglassStart;
