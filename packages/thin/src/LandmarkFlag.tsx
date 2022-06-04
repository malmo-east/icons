import * as React from "react";
import { SVGProps } from "react";

const SvgLandmarkFlag = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M256 144h216c4.4 0 8 3.6 8 8s-3.6 8-8 8H40c-4.42 0-8-3.6-8-8s3.58-8 8-8h200V16c0-8.836 7.2-16 16-16h96c8.8 0 16 7.164 16 16v64c0 8.84-7.2 16-16 16h-96v48zm96-128h-96v64h96V16zM80 368h104V200c0-4.4 3.6-8 8-8s8 3.6 8 8v168h112V200c0-4.4 3.6-8 8-8s8 3.6 8 8v168h104V200c0-4.4 3.6-8 8-8s8 3.6 8 8v176c0 4.4-3.6 8-8 8H72c-4.42 0-8-3.6-8-8V200c0-4.4 3.58-8 8-8s8 3.6 8 8v168zm392 64c4.4 0 8 3.6 8 8s-3.6 8-8 8H40c-4.42 0-8-3.6-8-8s3.58-8 8-8h432zm32 64c4.4 0 8 3.6 8 8s-3.6 8-8 8H8c-4.418 0-8-3.6-8-8s3.582-8 8-8h496z" />
  </svg>
);

export default SvgLandmarkFlag;
