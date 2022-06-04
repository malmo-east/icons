import * as React from "react";
import { SVGProps } from "react";

const SvgWindowFrameOpen = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M504 496h-24V328c0-4.406-3.594-8-8-8s-8 3.594-8 8v168H48V328c0-4.4-3.59-8-8-8s-8 3.6-8 8v168H8c-4.406 0-8 3.6-8 8s3.594 8 8 8h496c4.406 0 8-3.594 8-8s-3.6-8-8-8zM40 288h432c4.4 0 8-3.6 8-8V40c0-22.06-17.9-40-40-40H72C49.94 0 32 17.94 32 40v240c0 4.4 3.59 8 8 8zM264 16h176c13.22 0 24 10.78 24 24v232H264V16zM48 40c0-13.22 10.78-24 24-24h176v256H48V40z" />
  </svg>
);

export default SvgWindowFrameOpen;
