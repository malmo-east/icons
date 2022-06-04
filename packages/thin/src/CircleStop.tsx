import * as React from "react";
import { SVGProps } from "react";

const SvgCircleStop = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M328 160H184c-13.2 0-24 10.8-24 24v144c0 13.2 10.8 24 24 24h144c13.2 0 24-10.8 24-24V184c0-13.2-10.8-24-24-24zm8 168c0 4.336-3.664 8-8 8H184c-4.336 0-8-3.664-8-8V184c0-4.336 3.664-8 8-8h144c4.336 0 8 3.664 8 8v144zM256 0C114.6 0 0 114.6 0 256s114.6 256 256 256 256-114.6 256-256S397.4 0 256 0zm0 496C123.7 496 16 388.3 16 256S123.7 16 256 16s240 107.7 240 240-107.7 240-240 240z" />
  </svg>
);

export default SvgCircleStop;
