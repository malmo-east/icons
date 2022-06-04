import * as React from "react";
import { SVGProps } from "react";

const SvgFolderOpen = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" {...props}>
    <path
      className="folder-open_svg__fa-primary"
      d="m572.6 270.3-96 192c-5.4 10.9-16.5 17.7-29.5 17.7H0l119.2-238.3c5.4-10.9 16.5-17.7 28.6-17.7H544c23.7 0 39.2 25 28.6 46.3z"
    />
    <path
      d="M480 144v80H147.8c-12.1 0-23.2 6.8-28.6 17.7L0 480V80c0-26.51 21.49-48 48-48h160l64 64h160c26.5 0 48 21.5 48 48z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgFolderOpen;
