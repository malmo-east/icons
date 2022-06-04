import * as React from "react";
import { SVGProps } from "react";

const SvgCircleZ = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M360 368H169.5L366 141.2a7.956 7.956 0 0 0 1.25-8.562C365.1 129.8 363.1 128 360 128H152c-4.4 0-8 3.6-8 8s3.6 8 8 8h190.5L146 370.8a7.956 7.956 0 0 0-1.25 8.562C146 382.2 148.9 384 152 384h208c4.406 0 8-3.578 8-8s-3.6-8-8-8zM256 0C114.6 0 0 114.6 0 256s114.6 256 256 256 256-114.6 256-256S397.4 0 256 0zm0 496C123.7 496 16 388.3 16 256S123.7 16 256 16s240 107.7 240 240-107.7 240-240 240z" />
  </svg>
);

export default SvgCircleZ;
