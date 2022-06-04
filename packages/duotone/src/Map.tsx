import * as React from "react";
import { SVGProps } from "react";

const SvgMap = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" {...props}>
    <path
      className="map_svg__fa-primary"
      d="m10.06 99.61 181.84-67.6L192 416 22 478.8c-10.51 4.3-22-3.5-22-14.8V114.5c0-6.6 3.984-12.5 10.06-14.89zM576 48.02V397.6c0 6.5-4 11.5-10.1 14.8L384 480V96.01l170-62.85c10.6-4.2 22 3.54 22 14.86z"
    />
    <path
      d="m192 32 192 64v384l-191.9-64-.1-384z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgMap;
