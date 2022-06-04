import * as React from "react";
import { SVGProps } from "react";

const SvgGolfClub = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path
      className="golf-club_svg__fa-primary"
      d="M47.1 440H0v31.1h47.1c8.836 0 15.1-7.164 15.1-15.1.9-8.8-5.37-16-15.1-16zm16-48c0-8.838-7.164-15.1-15.1-15.1H0V408h47.1c9.73 0 16-7.2 16-16z"
    />
    <path
      d="m508.6 46.33-223.1 447.1C279.2 505.2 268.1 512 255.1 512h-224C14.33 512 0 497.7 0 480v-7.999h47.1c8.836 0 15.1-7.164 15.1-15.1 0-8.837-7.164-15.1-15.1-15.1H0v-31.1h47.1c8.836 0 15.1-7.163 15.1-15.1 0-8.837-7.164-15.1-15.1-15.1H0v-23.1c0-17.67 14.35-32 32-32 3.288 0 6.592.505 9.792 1.534l221.1 71.36 187.6-375.2C456.1 6.491 468.3 0 480 0c16.7 0 32 13.37 32 32.04 0 4.81-1.1 9.69-3.4 14.29z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgGolfClub;
