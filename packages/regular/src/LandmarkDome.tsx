import * as React from "react";
import { SVGProps } from "react";

const SvgLandmarkDome = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M256 0c13.3 0 24 10.75 24 24v9.49C369.5 44.65 439.9 117.4 447.3 208h8.7c13.3 0 24 10.7 24 24s-10.7 24-24 24H56c-13.25 0-24-10.7-24-24s10.75-24 24-24h8.66C72.13 117.4 142.5 44.65 232 33.49V24c0-13.25 10.7-24 24-24zM112.9 208h286.2c-7.9-72-69-128-144-128-73.2 0-134.3 56-142.2 128zm-.9 176h64v-96h48v96h64v-96h48v96h64v-96h48v96h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H64c-13.25 0-24-10.7-24-24s10.75-24 24-24v-96h48v96zM8 488c0-13.3 10.75-24 24-24h456c13.3 0 24 10.7 24 24s-10.7 24-24 24H32c-13.25 0-24-10.7-24-24z" />
  </svg>
);

export default SvgLandmarkDome;