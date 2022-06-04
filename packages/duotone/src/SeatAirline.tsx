import * as React from "react";
import { SVGProps } from "react";

const SvgSeatAirline = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
    <path
      className="seat-airline_svg__fa-primary"
      d="M32 0c17.67 0 32 14.33 32 32v111.6c0 6.5 1.32 12.9 3.88 18.9L121.7 288H416c12.1 0 23.2 6.8 28.6 17.7 5.4 10.8 4.3 23.8-3 33.5l-43.2 57.6c-9.1 12.1-23.3 19.2-38.4 19.2H170.2c-38.4 0-73.11-22.9-88.24-58.2L9.056 187.7C3.081 173.8 0 158.7 0 143.6V32C0 14.33 14.33 0 32 0z"
    />
    <path
      d="M264 416v48h96c13.3 0 24 10.7 24 24s-10.7 24-24 24H120c-13.3 0-24-10.7-24-24s10.7-24 24-24h96v-48h48zM80.53 192H320c17.7 0 32 14.3 32 32s-14.3 32-32 32H107.1l-26.57-64z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgSeatAirline;
