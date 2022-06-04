import * as React from "react";
import { SVGProps } from "react";

const SvgDoorClosed = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" {...props}>
    <path d="M568 496h-88V56c0-30.88-25.1-56-56-56H152c-30.9 0-56 25.12-56 56v440H8c-4.406 0-8 3.6-8 8s3.594 8 8 8h560c4.406 0 8-3.594 8-8s-3.6-8-8-8zm-104 0H112V56c0-22.06 17.94-40 40-40h272c22.06 0 40 17.94 40 40v440zm-80-280c-22.06 0-40 17.94-40 40s17.9 40 40 40 40-17.9 40-40-17.9-40-40-40zm0 64c-13.22 0-24-10.78-24-24s10.8-24 24-24 24 10.8 24 24-10.8 24-24 24z" />
  </svg>
);

export default SvgDoorClosed;
