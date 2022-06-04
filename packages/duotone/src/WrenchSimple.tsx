import * as React from "react";
import { SVGProps } from "react";

const SvgWrenchSimple = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" {...props}>
    <path
      className="wrench-simple_svg__fa-primary"
      d="M96 463.1V352h192v111.1c0 27.4-21.5 48.9-48 48.9h-96c-26.5 0-48-21.5-48-48.9z"
    />
    <path
      d="M384 172.4c0 71.02-38.7 132.8-96 166V352H96v-13.55c-57.3-33.22-96-94.99-96-166C0 98.04 42.4 33.65 104.3 1.85 115.1-3.711 128 3.992 128 16.1V160l64 64 64-64V16.1c0-12.11 12.93-19.81 23.7-14.27C341.6 33.67 384 98.04 384 172.4z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgWrenchSimple;
