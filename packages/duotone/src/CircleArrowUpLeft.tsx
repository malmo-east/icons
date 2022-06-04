import * as React from "react";
import { SVGProps } from "react";

const SvgCircleArrowUpLeft = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path
      className="circle-arrow-up-left_svg__fa-primary"
      d="M366.6 366.6c-6.2 6.3-14.4 9.4-22.6 9.4s-16.38-3.125-22.62-9.375L200 245.3V312c0 17.69-14.33 32-32 32s-32-14.31-32-32V168c0-17.69 14.33-32 32-32h144c17.67 0 32 14.31 32 32s-14.33 32-32 32h-66.7l121.4 121.4c12.4 12.5 12.4 32.7-.1 45.2z"
    />
    <path
      d="M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256 256-114.6 256-256S397.4 0 256 0zm110.6 366.6c-6.2 6.3-14.4 9.4-22.6 9.4s-16.38-3.125-22.62-9.375L200 245.3V312c0 17.69-14.33 32-32 32s-32-14.31-32-32V168c0-17.69 14.33-32 32-32h144c17.67 0 32 14.31 32 32s-14.33 32-32 32h-66.7l121.4 121.4c12.4 12.5 12.4 32.7-.1 45.2z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgCircleArrowUpLeft;
