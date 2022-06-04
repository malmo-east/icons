import * as React from "react";
import { SVGProps } from "react";

const SvgToriiGate = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M448 160h-16v80h72c4.4 0 8 3.6 8 8s-3.6 8-8 8h-72v248c0 4.4-3.6 8-8 8s-8-3.6-8-8V256H96v248c0 4.4-3.58 8-8 8s-8-3.6-8-8V256H8c-4.418 0-8-3.6-8-8s3.582-8 8-8h72v-80H64c-35.35 0-64-28.7-64-64V0l71.37 23.79C87.68 29.23 104.8 32 121.1 32H390c17.2 0 34.3-2.77 50.6-8.21L512 0v96c0 35.3-28.7 64-64 64zM64 144h384c26.5 0 48-21.5 48-48V22.2l-50.3 16.77C427.7 44.95 408.1 48 390 48H121.1c-18.1 0-36.85-3.05-54.79-9.03L16 22.2V96c0 26.5 21.49 48 48 48zm32 96h152v-80H96v80zm168-80v80h152v-80H264z" />
  </svg>
);

export default SvgToriiGate;
