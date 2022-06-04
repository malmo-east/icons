import * as React from "react";
import { SVGProps } from "react";

const SvgArrowUpLeftFromCircle = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path
      className="arrow-up-left-from-circle_svg__fa-primary"
      d="M333.3 336c12.5-12.5 12.5-32.77 0-45.26l-224-226.75H192c17.67 0 31.99-14.33 31.99-31.1C223.1 14.32 209.7 0 192 0H32C23.16 0 15.16 3.578 9.371 9.367 3.578 15.16 0 23.16 0 31.1V192c0 17.67 14.32 31.1 31.99 31.1s32-13.4 32-31.1v-82.8L288 336c12.5 12.5 32.8 12.5 45.3 0z"
    />
    <path
      d="M288 512c-109.8 0-202.8-78.53-220.9-186.7-2.94-17.4 8.84-33.9 26.24-36.9 17.72-3.156 33.94 8.844 36.88 26.25C143.2 391.9 209.5 448 288 448c88.22 0 160-71.78 160-160 0-78.47-56.06-144.8-133.3-157.8-17.44-2.938-29.19-19.41-26.28-36.84C291.4 75.91 307.8 64 325.3 67.09 433.5 85.22 512 178.1 512 288c0 123.5-100.5 224-224 224z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgArrowUpLeftFromCircle;
