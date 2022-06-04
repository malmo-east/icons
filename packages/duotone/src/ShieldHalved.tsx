import * as React from "react";
import { SVGProps } from "react";

const SvgShieldHalved = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path
      className="shield-halved_svg__fa-primary"
      d="M256-.008V509.1c-9.9 0-18.1-2-26.4-5.9-172.35-82.5-213.11-264-214.5-364.1.77-25.3 17.22-46.98 39.2-56.31L242.7 2.913c4.1-1.905 8.7-2.921 13.3-2.92.3 0 .5.002.7.007l-.7-.008z"
    />
    <path
      d="M256 0c.2-.005.5-.008.7-.008 4.7 0 9.2 1.016 13.4 2.921L458.4 82.79c22 9.33 38.5 31.01 38.3 56.31-.5 100.1-41.2 281.6-213.6 364.1-8.3 3.9-17.3 5.9-26.4 5.9V-.008L256 0z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgShieldHalved;
