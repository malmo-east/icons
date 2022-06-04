import * as React from "react";
import { SVGProps } from "react";

const SvgRightFromLine = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
    <path
      className="right-from-line_svg__fa-primary"
      d="m440.8 273.5-144.1 136a24.064 24.064 0 0 1-26 4.594C261.9 410.3 256.2 401.6 256.2 392v-72H128.1c-17.69 0-32.04-14.33-32.04-32v-64c0-17.67 14.35-32 32.04-32h128.1v-72c0-9.578 5.708-18.25 14.51-22.05 8.805-3.781 19.03-1.984 26 4.594l144.1 136c9.59 9.056 9.59 25.856-.01 34.956z"
    />
    <path
      d="M32 64C14.33 64 0 78.33 0 95.1V416c0 17.7 14.33 32 31.1 32S64 433.7 64 416V95.1C64 78.33 49.67 64 32 64z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgRightFromLine;
