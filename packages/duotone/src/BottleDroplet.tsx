import * as React from "react";
import { SVGProps } from "react";

const SvgBottleDroplet = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" {...props}>
    <path
      className="bottle-droplet_svg__fa-primary"
      d="M224 0c13.3 0 24 10.74 24 23.1 0 14.15-10.7 24-24 24.9H96c-13.25 0-24-10.74-24-24C71.1 10.75 82.74.004 95.1.004L224 0zM112 336c0-32 48-80 48-80s48 48 48 80-21.5 48-48 48-48-21.5-48-48z"
    />
    <path
      d="M104 48h112v92.9c42.6 20.7 72 64.5 72 115.1v192c0 35.3-28.7 64-64 64H96c-35.35 0-64-28.7-64-64V256c0-50.6 29.37-94.4 72-115.1V48zm56 336c26.5 0 48-16 48-48s-48-80-48-80-48 48-48 80c0 26.5 21.5 48 48 48z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgBottleDroplet;
