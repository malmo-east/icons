import * as React from "react";
import { SVGProps } from "react";

const SvgTableTree = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M224 280c0-4.4 3.6-8 8-8h176c4.4 0 8 3.6 8 8s-3.6 8-8 8H232c-4.4 0-8-3.6-8-8zm184 88c4.4 0 8 3.6 8 8s-3.6 8-8 8H296c-4.4 0-8-3.6-8-8s3.6-8 8-8h112zM0 96c0-35.35 28.65-64 64-64h384c35.3 0 64 28.65 64 64v320c0 35.3-28.7 64-64 64H64c-35.35 0-64-28.7-64-64V96zm16 0v64h480V96c0-26.51-21.5-48-48-48H64c-26.51 0-48 21.49-48 48zm0 80v240c0 26.5 21.49 48 48 48h384c26.5 0 48-21.5 48-48V176H112v72c0 13.3 10.7 24 24 24h48c4.4 0 8 3.6 8 8s-3.6 8-8 8h-48c-9.9 0-17.3-3-24-8v64c0 13.3 10.7 24 24 24h112c4.4 0 8 3.6 8 8s-3.6 8-8 8H136c-22.1 0-40-17.9-40-40V176H16z" />
  </svg>
);

export default SvgTableTree;
