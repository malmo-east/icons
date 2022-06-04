import * as React from "react";
import { SVGProps } from "react";

const SvgFileLock = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" {...props}>
    <path
      className="file-lock_svg__fa-primary"
      d="m543.1 320 .9-48c0-44.1-35.9-80-80-80s-80 35.9-80 80v48c-17.68 0-32 14.33-32 32.01v127.1c0 18.59 14.3 32.89 32 32.89h159.1c18.6 0 32.9-14.3 32.9-32.9V352c0-17.7-14.3-32-32.9-32zm-47.1 0h-64v-48c0-17.64 14.34-32 32-32s32 14.36 32 32v48zM256 0v128h128L256 0z"
    />
    <path
      d="M256 128V0H48C21.49 0 0 21.49 0 48v416c0 26.5 21.49 48 48 48h280.9c-5.5-9.5-8.9-20.3-8.9-32.9V352c0-23.64 12.88-44.34 32-55.42V272c0-30.4 12.27-57.94 32-78.14V128H256z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgFileLock;
