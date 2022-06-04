import * as React from "react";
import { SVGProps } from "react";

const SvgDisplayArrowDown = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" {...props}>
    <path d="M528 0H360c-4.4 0-8 3.582-8 8s3.582 8 8 8h168c17.67 0 32 14.33 32 32v320c0 17.67-14.33 32-32 32H48c-17.67 0-32-14.33-32-32V48c0-17.67 14.33-32 32-32h168c4.4 0 8-3.58 8-8s-3.6-8-8-8H48C21.49 0 0 21.49 0 48v320c0 26.5 21.49 48 48 48h180.9l-26.67 80H136c-4.4 0-8 3.6-8 8s3.6 8 8 8h304c4.406 0 8-3.578 8-8s-3.594-8-8-8h-66.21l-26.67-80H528c26.51 0 48-21.49 48-48V48c0-26.51-21.5-48-48-48zM356.9 496H219.1l26.67-80h84.46l26.67 80zM216 80c4.4 0 8-3.58 8-8s-3.6-8-8-8H64v288h448V64H360c-4.4 0-8 3.58-8 8s3.582 8 8 8h136v256H80V80h136zm-29.7 82.3a7.994 7.994 0 0 0 0 11.31l95.1 95.1c2.4 2.39 4.4 3.29 6.6 3.29s4.213-.898 5.66-2.348l95.1-95.1c3.125-3.125 3.125-8.188 0-11.31s-8.188-3.125-11.31 0L296 244.7V8c0-4.422-3.6-8-8-8s-8 3.578-8 8v236.7l-82.3-82.4a8.15 8.15 0 0 0-11.4 0z" />
  </svg>
);

export default SvgDisplayArrowDown;
