import * as React from "react";
import { SVGProps } from "react";

const SvgPersonThroughWindow = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" {...props}>
    <path
      className="person-through-window_svg__fa-primary"
      d="M64 64v320h64c0 17.7 14.3 31.1 32 31.1s31.1-13.4 32-31.1h73.5l42.7 64H48c-26.51 0-48-21.5-48-48V48C0 21.49 21.49 0 48 0h544c26.5 0 48 21.49 48 48v352c0 26.5-21.5 48-48 48H421.9l-42.7-64H576V64H64z"
    />
    <path
      d="m279.5 207.4.9 1.5 41 62.2h71.1c14.3 0 27.8 7.2 36.9 18.2l78.9 94.7H425l-40-48h-74.5l84.1 126.2c9.8 13.9 5.9 34.6-8.8 44.4-14.8 9.8-34.6 5.9-44.4-8.8L196.7 280.7c-3.1 9.3-4.7 18.4-4.7 29.5v72.9c0 18.6-14.3 32-32 32s-32-13.4-32-32v-72.9c0-65.2 39.6-123.7 100.1-147.9 36.2-14.5 59.9-49.5 59.9-88.46V64h64v9.84c0 54.66-27.9 104.66-72.5 133.56zM192 128c0 26.5-21.5 48-48 48s-48-21.5-48-48 21.5-48 48-48 48 21.5 48 48z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgPersonThroughWindow;
