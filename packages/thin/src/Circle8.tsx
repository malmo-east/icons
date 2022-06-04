import * as React from "react";
import { SVGProps } from "react";

const SvgCircle8 = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M307.1 245.4c17.4-11.5 28.9-31.1 28.9-53.4 0-35.28-28.72-64-64-64h-32c-35.28 0-64 28.72-64 64 0 22.31 11.52 41.94 28.88 53.4C178.6 256.1 160 281.9 160 312c0 39.7 32.3 72 72 72h48c39.7 0 72-32.3 72-72 0-30.1-18.6-55.9-44.9-66.6zM192 192c0-26.47 21.53-48 48-48h32c26.5 0 48 21.5 48 48s-21.53 48-48 48h-32c-26.5 0-48-21.5-48-48zm88 176h-48c-30.88 0-56-25.12-56-56s25.1-56 56-56h48c30.88 0 56 25.12 56 56s-25.1 56-56 56zM256 0C114.6 0 0 114.6 0 256s114.6 256 256 256 256-114.6 256-256S397.4 0 256 0zm0 496C123.7 496 16 388.3 16 256S123.7 16 256 16s240 107.7 240 240-107.7 240-240 240z" />
  </svg>
);

export default SvgCircle8;