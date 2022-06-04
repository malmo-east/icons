import * as React from "react";
import { SVGProps } from "react";

const SvgMobileScreen = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" {...props}>
    <path d="M144 456h96c4.406 0 8-3.578 8-8s-3.594-8-8-8h-96c-4.406 0-8 3.578-8 8s3.6 8 8 8zM304 0H80C53.5 0 32 21.5 32 48v416c0 26.5 21.5 48 48 48h224c26.5 0 48-21.5 48-48V48c0-26.5-21.5-48-48-48zm32 464c0 17.64-14.36 32-32 32H80c-17.64 0-32-14.36-32-32v-64h288v64zm0-80H48V48c0-17.64 14.36-32 32-32h224c17.64 0 32 14.36 32 32v336z" />
  </svg>
);

export default SvgMobileScreen;
