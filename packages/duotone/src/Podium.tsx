import * as React from "react";
import { SVGProps } from "react";

const SvgPodium = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
    <path
      className="podium_svg__fa-primary"
      d="M448 167.1c0 13.25-10.75 24-24 24H24c-13.25 0-24-9.8-24-24 0-13.25 10.75-24 23.1-24h56.28c6.75-53.75 46.5-97.13 98.5-108.8C183.5 14.1 201.1 0 224 0h62.2c23.21 0 44.5 15.69 48.89 38.48C340.1 69.15 317.6 95.1 288 95.1h-64c-13.25 0-25.25-5.375-33.88-13.1-32 6.749-56.38 31.12-62.75 61.1H424c13.3 0 24 11.6 24 24z"
    />
    <path
      d="m400 191.1-29.12 291.2c-1.636 16.36-15.24 28.82-31.68 28.82H108.8c-16.44 0-30.05-12.46-31.68-28.82L48 191.1h352z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgPodium;
