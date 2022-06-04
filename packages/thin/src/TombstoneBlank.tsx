import * as React from "react";
import { SVGProps } from "react";

const SvgTombstoneBlank = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
    <path d="M40 464c4.406 0 8-3.578 8-8V192c0-97.05 78.97-176 176-176s176 78.95 176 176v264c0 4.422 3.594 8 8 8s8-3.6 8-8l-.001-264c0-105.9-86.13-191.1-192-191.1S31.1 86.13 31.1 192l.9 264c0 4.4 3.59 8 8 8zm400 32H8c-4.406 0-8 3.6-8 8s3.594 8 8 8h432c4.406 0 8-3.578 8-8s-3.6-8-8-8z" />
  </svg>
);

export default SvgTombstoneBlank;
