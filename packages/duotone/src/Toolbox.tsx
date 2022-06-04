import * as React from "react";
import { SVGProps } from "react";

const SvgToolbox = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path
      className="toolbox_svg__fa-primary"
      d="M512 205.3V320H384v-48c0-8.9-7.1-16-16-16h-32c-8.9 0-16 7.1-16 16v48H192v-48c0-8.9-7.1-16-16-16h-32c-8.9 0-16 7.1-16 16v48H0V205.3c0-8.5 3.375-16.62 9.375-22.62l45.25-45.25C60.63 131.4 68.75 128 77.25 128h357.5c8.5 0 16.62 3.375 22.62 9.375l45.25 45.25C508.6 188.6 512 196.8 512 205.3z"
    />
    <path
      d="M384 320v48c0 8.875-7.125 16-16 16h-32c-8.875 0-16-7.125-16-16v-48H192v48c0 8.9-7.1 16-16 16h-32c-8.9 0-16-7.1-16-16v-48H0v128c0 17.62 14.38 32 32 32h448c17.62 0 32-14.38 32-32V320H384zM176 80h160v48h48V80c0-26.5-21.5-48-48-48H176c-26.5 0-48 21.5-48 48v48h48V80z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgToolbox;
