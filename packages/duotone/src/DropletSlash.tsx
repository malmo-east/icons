import * as React from "react";
import { SVGProps } from "react";

const SvgDropletSlash = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" {...props}>
    <path
      className="droplet-slash_svg__fa-primary"
      d="M5.112 9.196C13.29-1.236 28.37-3.065 38.81 5.112L630.8 469.1c10.4 8.2 12.3 23.3 4.1 33.7-8.2 10.4-23.3 12.3-33.7 4.1L9.196 42.89C-1.236 34.71-3.065 19.63 5.112 9.196z"
    />
    <path
      d="M215.3 143.4c28.2-48.33 58.9-94.11 79.6-124.1 12.3-17.715 37.9-17.715 50.2 0C393.7 89.43 496 245.9 496 319.1c0 14.6-1.6 28-4.5 40.8L215.3 143.4zM144 319.1c0-22.6 10.3-54.5 25.1-89.2l274.4 215.5C411.7 476.7 368.1 496 320 496c-97.2 0-176-78.8-176-176.9zm96 0c0-7.9-7.2-16-16-16s-16 8.1-16 16c0 62.8 50.1 112.9 112 112.9 8.8 0 16-7.2 16-16s-7.2-16-16-16c-44.2 0-80-35.8-80-80.9z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgDropletSlash;
