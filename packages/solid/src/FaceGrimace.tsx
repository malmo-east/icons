import * as React from "react";
import { SVGProps } from "react";

const SvgFaceGrimace = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M0 256C0 114.6 114.6 0 256 0s256 114.6 256 256-114.6 256-256 256S0 397.4 0 256zm399.3 104H344v40h8c23.8 0 43.5-17.3 47.3-40zM352 304h-8v40h55.3c-3.8-22.7-23.5-40-47.3-40zm-24 40v-40h-64v40h64zm0 56v-40h-64v40h64zm-144-96v40h64v-40h-64zm0 56v40h64v-40h-64zm-16-16v-40h-8c-23.8 0-43.5 17.3-47.3 40H168zm0 56v-40h-55.3c3.8 22.7 23.5 40 47.3 40h8zm8.4-224c-17.7 0-32 14.3-32 32s14.3 32 32 32c17.6 0 32-14.3 32-32s-14.4-32-32-32zm160 64c17.6 0 32-14.3 32-32s-14.4-32-32-32c-17.7 0-32 14.3-32 32s14.3 32 32 32z" />
  </svg>
);

export default SvgFaceGrimace;
