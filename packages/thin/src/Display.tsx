import * as React from "react";
import { SVGProps } from "react";

const SvgDisplay = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" {...props}>
    <path d="M64 352h448V64H64v288zM80 80h416v256H80V80zM528 0H48C21.5 0 0 21.5 0 48v320c0 26.5 21.5 48 48 48h180.9l-26.67 80H136c-4.4 0-8 3.6-8 8s3.6 8 8 8h304c4.406 0 8-3.578 8-8s-3.594-8-8-8h-66.21l-26.67-80H528c26.5 0 48-21.5 48-48V48c0-26.5-21.5-48-48-48zM356.9 496H219.1l26.67-80h84.46l26.67 80zM560 368c0 17.64-14.36 32-32 32H48c-17.64 0-32-14.36-32-32V48c0-17.64 14.36-32 32-32h480c17.64 0 32 14.36 32 32v320z" />
  </svg>
);

export default SvgDisplay;
