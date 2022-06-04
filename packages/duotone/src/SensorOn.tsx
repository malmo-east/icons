import * as React from "react";
import { SVGProps } from "react";

const SvgSensorOn = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" {...props}>
    <path
      className="sensor-on_svg__fa-primary"
      d="M208 96c-8.9 0-16 7.1-16 16v160c0 8.9 7.1 16 16 16s16-7.1 16-16V112c0-8.9-7.1-16-16-16zm-64 0c-8.9 0-16 7.1-16 16v160c0 8.9 7.1 16 16 16s16-7.1 16-16V112c0-8.9-7.1-16-16-16zm-64 0c-8.87 0-16 7.1-16 16v160c0 8.9 7.13 16 16 16s16-7.1 16-16V112c0-8.9-7.12-16-16-16zm536 136h-64c-13.25 0-24 10.75-24 24s10.75 24 24 24h64c13.3 0 24-10.7 24-24s-10.7-24-24-24zm-18.7 172-48-32c-11-7.375-25.88-4.375-33.25 6.75-7.375 11-4.375 25.87 6.75 33.25l48 32c11 7.375 25.88 4.375 33.25-6.75 7.35-11.05 4.35-25.85-6.75-33.25zM536 144c4.75 0 9.375-1.375 13.25-4l48-32c7.375-4.625 11.75-12.87 11.25-21.62s-5.625-16.5-13.5-20.37c-7.875-3.75-17.25-3-24.38 2.125l-48 32a23.836 23.836 0 0 0-9.5 26.88C516.1 137.1 525.5 144 536 144z"
    />
    <path
      d="M384 32H64C28.62 32 0 60.63 0 96v320c0 35.38 28.62 64 64 64h320c35.38 0 64-28.62 64-64V96c0-35.37-28.6-64-64-64zM96 272c0 8.9-7.12 16-16 16s-16-7.1-16-16V112c0-8.9 7.13-16 16-16s16 7.1 16 16v160zm64 0c0 8.9-7.1 16-16 16s-16-7.1-16-16V112c0-8.9 7.1-16 16-16s16 7.1 16 16v160zm64 0c0 8.9-7.1 16-16 16s-16-7.1-16-16V112c0-8.9 7.1-16 16-16s16 7.1 16 16v160z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgSensorOn;