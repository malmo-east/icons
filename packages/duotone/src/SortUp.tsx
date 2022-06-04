import * as React from "react";
import { SVGProps } from "react";

const SvgSortUp = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" {...props}>
    <path
      className="sort-up_svg__fa-primary"
      d="M27.66 224h264.7c24.6 0 36.89-29.78 19.54-47.12L179.6 40.08a27.534 27.534 0 0 0-19.53-8.107c-7.055 0-14.09 2.701-19.45 8.107L8.119 176.9C-9.229 194.2 3.055 224 27.66 224z"
    />
    <path
      d="M292.3 288H27.66c-24.6 0-36.89 29.77-19.54 47.12l132.5 136.8C145.9 477.3 152.1 480 160 480c7.053 0 14.12-2.703 19.53-8.109l132.3-136.8C329.2 317.8 316.9 288 292.3 288zM160.1 400l-46.5-48h92.95l-46.45 48z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgSortUp;
