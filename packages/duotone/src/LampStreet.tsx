import * as React from "react";
import { SVGProps } from "react";

const SvgLampStreet = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path
      className="lamp-street_svg__fa-primary"
      d="M511.8 388.8c2 14.4-9.7 27.2-24.2 27.2H152.4c-14.53 0-26.16-12.81-24.19-27.16C140 306.2 205.3 241.2 288 227.5l64-.014C434.8 241.2 499.1 306.1 511.8 388.8z"
    />
    <path
      d="M288 128v99.45l64-.014V128C352 57.42 294.6 0 224.9 0H128C57.41 0 0 57.42 0 128v384h64V128c0-35.3 28.72-64 64-64h96c35.3 0 64 28.7 64 64zm-32 320c0 35.38 28.62 64 63.99 64S384 483.38 384 448H256z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgLampStreet;
