import * as React from "react";
import { SVGProps } from "react";

const SvgDroplet = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" {...props}>
    <path
      className="droplet_svg__fa-primary"
      d="M96 304c8.8 0 16 7.2 16 16 0 44.2 35.8 80 80 80 8.8 0 16 7.2 16 16s-7.2 16-16 16c-61.9 0-112-50.1-112-112 0-8.8 7.16-16 16-16z"
    />
    <path
      d="M16 319.1c0-73.2 102.3-229.67 150.9-299.8 12.3-17.715 37.9-17.715 50.2 0C265.7 89.43 368 245.9 368 319.1c0 98.1-78.8 176.9-176 176.9S16 417.2 16 319.1zm96 0c0-7.9-7.2-16-16-16-8.84 0-16 8.1-16 16C80 381.9 130.1 432 192 432c8.8 0 16-7.2 16-16s-7.2-16-16-16c-44.2 0-80-35.8-80-80.9z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgDroplet;
