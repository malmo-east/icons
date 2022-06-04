import * as React from "react";
import { SVGProps } from "react";

const SvgHourglassClock = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" {...props}>
    <path
      className="hourglass-clock_svg__fa-primary"
      d="M288 368c0-79.5 64.5-144 144-144s144 64.5 144 144-64.5 144-144 144-144-64.5-144-144zm159.1-64c0-8.8-6.3-16-16-16-7.9 0-16 7.2-16 16v64c0 8.8 8.1 16 16 16H480c8.8 0 16-7.2 16-16s-7.2-16-16-16h-32.9v-48z"
    />
    <path
      d="M0 32C0 14.33 14.33 0 32 0h320c17.7 0 32 14.33 32 32s-14.3 32-32 32v10.98c0 42.42-16.9 83.12-46.9 113.12L237.3 256l35.9 35.1c-11 23-17.2 49.7-17.2 76.9 0 59.5 29.6 112.1 74.8 144H32c-17.67 0-32-14.3-32-32s14.33-32 32-32v-11c0-42.4 16.86-83.1 46.86-113.1L146.7 256l-67.84-67.9C48.86 158.1 32 117.4 32 74.98V64C14.33 64 0 49.67 0 32zm96 32v10.98c0 19 5.6 37.42 15.1 53.02H272c10.4-15.6 16-34.02 16-53.02V64H96z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgHourglassClock;
