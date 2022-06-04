import * as React from "react";
import { SVGProps } from "react";

const SvgDropletDegree = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
    <path
      className="droplet-degree_svg__fa-primary"
      d="M319.1 324.1c0 86.08-71.56 155.9-159.1 155.9S.9 410.22.9 324.1c0-97.23 90.94-134.9 133.4-272.8 8.125-26.36 45.94-25.27 53.12 0C229.3 190 319.1 226.4 319.1 324.1z"
    />
    <path
      d="M368 32c-44.06 0-79.1 35.94-79.1 80s35 80 79.1 80 79.1-35.94 79.1-80-35-80-79.1-80zm0 112c-17.75 0-31.1-14.25-31.1-32s14.25-32 31.1-32c17.75 0 31.1 14.25 31.1 32s-13.3 32-31.1 32z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgDropletDegree;
