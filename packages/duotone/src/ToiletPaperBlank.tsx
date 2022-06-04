import * as React from "react";
import { SVGProps } from "react";

const SvgToiletPaperBlank = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" {...props}>
    <path
      className="toilet-paper-blank_svg__fa-primary"
      d="M479.1 0c-53 0-96 86.06-96 192.1 0 .103 0-.103 0 0 0 0-.208 185.6-.584 191.9h96.59C532.1 383.1 576 297.1 576 192 576 86 532.1 0 479.1 0zm0 256c-17.63 0-32-28.62-32-64s14.37-64 32-64c17.62 0 32 28.62 32 64s-13.5 64-32 64z"
    />
    <path
      d="M479.1 0h-352C74.98 0 31.98 86 31.98 192v172.1c0 41.13-9.75 62.75-31.13 126.9-3.5 10.3 4.249 21 15.13 21h312.9c13.88 0 26-8.75 30.38-21.88C372.1 451.6 384 417.8 384 364.1l-.006-172.1C383.1 86.06 426.1 0 479.1 0z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgToiletPaperBlank;
