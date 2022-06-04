import * as React from "react";
import { SVGProps } from "react";

const SvgFireHydrant = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" {...props}>
    <path
      className="fire-hydrant_svg__fa-primary"
      d="M336 464h-16V176H64v288H48c-8.84 0-16 7.2-16 16v16c0 8.8 7.16 16 16 16h288c8.836 0 16-7.164 16-16v-16c0-8.8-7.2-16-16-16zm-144-80c-35.35 0-64-28.65-64-64s28.65-64 64-64 64 28.65 64 64c0 35.3-28.7 64-64 64z"
    />
    <path
      d="M56 176h272c13.3 0 24-10.7 24-24s-10.7-24-24-24h-12.53C303.9 83.17 268.8 48.13 224 36.53V32c0-17.69-14.31-32-32-32s-32 14.31-32 32v4.525C115.2 48.13 80.13 83.17 68.53 128H56c-13.25 0-24 10.7-24 24s10.75 24 24 24zm-24 96v96c0 8.8 7.16 16 16 16h16V256H48c-8.84 0-16 7.2-16 16zm304-16h-16v128h16c8.836 0 16-7.164 16-16v-96c0-8.8-7.2-16-16-16z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgFireHydrant;
