import * as React from "react";
import { SVGProps } from "react";

const SvgShuttlecock = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path
      className="shuttlecock_svg__fa-primary"
      d="M483.1 191.1h-20c0 .887.093 2.73.093 5.277 0 14.68-3.087 52.76-44.85 65.97l-91.14 28.75-26.45 45.34-77.97 36.42-25.75-25.87 70.76-70.75 140.9-44.5c13.25-4.25 22.38-16.62 22.38-30.5V107.1c0-15.5-12.5-27.1-28.01-27.1h-94.14c-14 0-26.25 9.124-30.51 22.37L234.8 243.2 164 313.1l-25.75-25.75 36.35-77.05 45.44-26.42 28.76-91.12c13.76-43.63 54.39-44.75 68.1-44.75l2.142.003V27.1c0-15.37-12.63-27.1-28.01-27.1H237.3c-10.75 0-20.75 6.25-25.38 16.25l-116.5 250.2-39.23 39.35 150 149.1 39.26-39.26 250.3-116.5C505.6 295.4 512 285.5 512 274.6v-55.5c0-14.5-12.6-28-28.9-28z"
    />
    <path
      d="M31.03 330.1C10.34 350.79-.01 377.94-.01 404.2c0 56.66 45.53 106 106 106 27.16 0 54.32-10.35 75.01-31.04l25.16-25.21L56.19 305.8l-25.16 24.3z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgShuttlecock;