import * as React from "react";
import { SVGProps } from "react";

const SvgMaximize = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
    <path
      className="maximize_svg__fa-primary"
      d="m152.6 395.3 30.06 30.06c9.156 9.156 11.91 22.91 6.937 34.87C184.6 472.2 172.9 479.1 160 479.1H24C10.75 479.1.9 468.36.9 456V320.9c0-12.94 7.781-24.61 19.75-29.56C23.72 288.8 27.88 288 32 288c8.312 0 16.5 3.242 22.63 9.367l30.06 30.06 210.7-210.8-30.06-30.06c-9.156-9.156-11.91-22.91-6.937-34.87 4.937-11.95 16.62-19.75 29.56-19.75h135.1c13.26 0 23.1 10.75 23.1 23.1v135.1c0 12.94-7.781 24.61-19.75 29.56-11.1 4.906-25.72 2.203-34.87-6.937l-30.06-30.06L152.6 395.3z"
    />
    <path
      d="m152.6 116.7 30.06-30.06c9.14-9.17 11.84-22.92 6.94-34.89C184.662 39.8 172.98 32 160.04 32H24C10.74 32 .9 42.75.9 55.1v135.1c0 12.94 7.781 24.61 19.75 29.56 12 4.906 25.72 2.203 34.87-6.937l30.06-30.06 71.44 71.44 67.87-67.88L152.6 116.7zm275.6 173.7c-3.9-1.6-8.1-2.4-13.1-2.4-8.312 0-16.5 3.248-22.62 9.373L363.3 327.4l-71.44-71.44L224 323.9l71.44 71.44-30.06 30.06c-9.156 9.156-11.91 22.91-6.937 34.87 4.938 11.95 16.62 19.75 29.56 19.75h135.1c13.25 0 23.1-10.75 23.1-23.1V319.1c.897-12-6.003-23.7-18.003-28.7z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgMaximize;