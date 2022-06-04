import * as React from "react";
import { SVGProps } from "react";

const SvgMugTea = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" {...props}>
    <path
      className="mug-tea_svg__fa-primary"
      d="M416 64v288c0 53-43 96-96 96H127.1c-53 0-96-43-96-96V88c0-15.02 12.42-24 24-24h88v64l-37.7 38.6c-6 6-9.375 14.13-9.375 22.63L95.1 256c0 17.62 14.38 32 32 32h64c17.62 0 32-14.38 32-32v-66.75c0-8.5-3.374-16.63-9.374-22.63L175.1 128V64H416z"
    />
    <path
      d="M447.1 64H416l-.002 64h32c35.38 0 64 28.62 64 64s-28.62 64-64 64H415.1l.9 64h31.1c71.6 0 128.9-57.2 128.9-128S518.7 64 447.1 64zm-272 64V64h-32v64l-37.7 38.6c-6 6-9.375 14.13-9.375 22.63L95.1 256c0 17.62 14.38 32 32 32h64c17.62 0 32-14.38 32-32v-66.75c0-8.5-3.374-16.63-9.374-22.63L175.1 128z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgMugTea;
