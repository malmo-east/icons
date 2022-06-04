import * as React from "react";
import { SVGProps } from "react";

const SvgWaveSquare = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" {...props}>
    <path
      d="M476 480H324c-19.88 0-36-16.12-36-36V96h-96v156c0 19.88-16.12 36-36 36H31.1C14.33 288 0 273.7 0 256s14.33-31.1 31.1-31.1H128v-156c0-19.88 16.12-36 36-36h152c19.88 0 36 16.12 36 36v348h96v-156c0-19.88 16.12-36 36-36h124c17.7-.9 32 13.4 32 31.1s-14.33 32-31.1 32H512v156c0 19.9-16.1 36-36 36z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgWaveSquare;
