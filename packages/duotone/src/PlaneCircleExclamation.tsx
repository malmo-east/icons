import * as React from "react";
import { SVGProps } from "react";

const SvgPlaneCircleExclamation = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" {...props}>
    <path
      className="plane-circle-exclamation_svg__fa-primary"
      d="M640 368c0 79.5-64.5 144-144 144s-144-64.5-144-144 64.5-144 144-144 144 64.5 144 144zm-144 48c-13.3 0-24 10.7-24 24s10.7 24 24 24 24-10.7 24-24-10.7-24-24-24zm15.1-128c0-8.8-6.3-16-16-16-7.9 0-16 7.2-16 16v80c0 8.8 8.1 16 16 16 9.7 0 16-7.2 16-16v-80z"
    />
    <path
      d="M192 93.68C192 59.53 221 0 256 0c36 0 64 59.53 64 93.68v84.62l77.1 44.1C350.6 254 320 307.4 320 368c0 54.2 24.5 102.7 63.1 134.1-2.1 6.2-7.2 9.9-14 9.9-.4 0-1.7-.2-3-.5L256 480l-110.1 31.5c-1.3.3-2.6.5-3.9.5-7.7 0-14-6.3-14-14.9V456c0-5.9 2.4-9.8 6.4-12.8L192 400v-70.9L20.4 378.2C10.17 381.1 0 373.4 0 362.8v-65.5c0-5.8 3.076-11.1 8.062-13.9L192 178.3V93.68z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgPlaneCircleExclamation;