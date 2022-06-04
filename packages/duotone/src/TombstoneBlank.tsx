import * as React from "react";
import { SVGProps } from "react";

const SvgTombstoneBlank = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
    <path
      className="tombstone-blank_svg__fa-primary"
      d="M432 448H16c-8.875 0-16 7.125-16 16v31.1c0 8.875 7.125 16 16 16h416c8.875 0 16-7.125 16-16V464c0-8.9-7.1-16-16-16z"
    />
    <path
      d="M415.1 191.1c0-106-86-191.1-192-191.1S32 86 32 192v256h384l-.9-256.9z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgTombstoneBlank;
