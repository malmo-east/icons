import * as React from "react";
import { SVGProps } from "react";

const SvgTv = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" {...props}>
    <path d="M592 0H48C21.5 0 0 21.5 0 48v352c0 26.5 21.5 48 48 48h544c26.5 0 48-21.5 48-48V48c0-26.5-21.5-48-48-48zm32 400c0 17.64-14.36 32-32 32H48c-17.64 0-32-14.36-32-32V48c0-17.64 14.36-32 32-32h544c17.64 0 32 14.36 32 32v352zM64 384h512V64H64v320zM80 80h480v288H80V80zm456 416H104c-4.41 0-8 3.6-8 8s3.59 8 8 8h432c4.406 0 8-3.578 8-8s-3.6-8-8-8z" />
  </svg>
);

export default SvgTv;
