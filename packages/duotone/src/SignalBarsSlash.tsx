import * as React from "react";
import { SVGProps } from "react";

const SvgSignalBarsSlash = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" {...props}>
    <path
      className="signal-bars-slash_svg__fa-primary"
      d="M634.9 502.8c-8.125 10.41-23.19 12.28-33.69 4.078L9.187 42.89c-10.44-8.172-12.26-23.26-4.068-33.7C9.839 3.158 16.91 0 24.03 0c5.156 0 10.38 1.673 14.78 5.111l591.1 463.1C641.2 477.3 643.1 492.4 634.9 502.8z"
    />
    <path
      d="M351.1 463.1c0 26.4 21.6 48 48 48s48-21.6 48-48v-16.19l-96-75.24v91.43zM80 383.1c-26.4 0-48 21.6-48 48v31.1c0 26.4 21.6 48 48 48s48-21.6 48-48v-31.1c0-25.5-21.6-48-48-48zm319.1-256c-26.4 0-48 21.6-48 48v74.58l96 75.24V175.1c0-25.5-20.7-48-48-48zM559.1 0c-26.4 0-48 21.6-48 48v327.1l96 75.24V48c0-26.4-20.7-48-48-48zM192 304v160c0 26.4 21.6 48 48 48s48-21.6 48-48V322.6l-74.6-58.5c-12.9 8.7-21.4 23.3-21.4 39.9z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgSignalBarsSlash;
