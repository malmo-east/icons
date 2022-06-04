import * as React from "react";
import { SVGProps } from "react";

const SvgTombstone = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
    <path d="M40 464c4.406 0 8-3.578 8-8V192c0-97.05 78.97-176 176-176s176 78.95 176 176v264c0 4.422 3.594 8 8 8s8-3.6 8-8l-.001-264C415.1 86.12 329.9 0 223.1 0s-192 86.13-192 192l.9 264c0 4.4 3.59 8 8 8zm184-104c4.406 0 8-3.578 8-8V200h88c4.406 0 8-3.578 8-8s-3.607-8.005-8.014-8.005L232 184V96c0-4.422-3.594-8-8-8s-8 3.58-8 8v88h-88.9c-3.5 0-7.1 3.6-7.1 8s3.6 8 8 8h88v152c0 4.4 3.6 8 8 8zm216 136H8c-4.406 0-8 3.6-8 8s3.594 8 8 8h432c4.406 0 8-3.578 8-8s-3.6-8-8-8z" />
  </svg>
);

export default SvgTombstone;
