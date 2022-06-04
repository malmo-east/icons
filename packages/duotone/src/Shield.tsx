import * as React from "react";
import { SVGProps } from "react";

const SvgShield = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path
      d="M256-.008c4.7 0 9.2 1.016 13.4 2.921L457.7 82.79c22 9.33 38.5 31.01 38.3 56.31-.5 100.1-41.3 281.6-213.6 364.1-16.7 7.9-36.1 7.9-52.8 0-172.35-82.5-213.11-264-214.5-364.1.77-25.3 17.22-46.98 39.2-56.31L242.7 2.913c4.1-1.905 8.7-2.921 13.3-2.92z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgShield;