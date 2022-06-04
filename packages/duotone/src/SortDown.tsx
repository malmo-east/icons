import * as React from "react";
import { SVGProps } from "react";

const SvgSortDown = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" {...props}>
    <path
      className="sort-down_svg__fa-primary"
      d="M292.3 288H27.66c-24.6 0-36.89 29.77-19.54 47.12l132.4 136.8C145.9 477.3 152.1 480 160 480c7.055 0 14.15-2.702 19.5-8.109l132.4-136.8C329.2 317.8 316.9 288 292.3 288z"
    />
    <path
      d="M27.66 223.1h264.7c24.6 0 36.89-29.77 19.54-47.12L179.4 39.18c-5.352-5.406-12.39-8.109-19.45-8.109a27.555 27.555 0 0 0-19.53 8.109L8.119 176.9c-17.348 17.3-5.064 46.2 19.541 46.2zm132.24-112 46.5 48.01h-92.9l46.4-48.01z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgSortDown;
