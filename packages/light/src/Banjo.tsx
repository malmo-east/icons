import * as React from "react";
import { SVGProps } from "react";

const SvgBanjo = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M147.3 316.7c-6.25-6.25-16.38-6.25-22.62 0s-6.25 16.38 0 22.62l48 48C175.8 390.4 179.9 392 184 392s8.188-1.562 11.31-4.688c6.25-6.25 6.25-16.38 0-22.62L147.3 316.7zm354-279.23-26.71-26.7C467.7 3.871 458.3 0 448.5 0c-9.83 0-19.09 3.844-26.23 11l-41.08 44.2a24.02 24.02 0 0 0-5.955 11.63l-11.82 59.09L298.3 191c-25.1-20.7-56.1-34.1-90.3-37.4V144c0-8.8-7.2-16-16-16s-16 7.2-16 16v9.619C141.8 156.9 110.8 170.3 85.67 191l-6.79-6.8c-6.25-6.25-16.38-6.25-22.62 0-6.25 6.25-6.25 16.38 0 22.62l6.789 6.789C42.27 238.8 28.91 269.8 25.62 304H16c-8.844 0-16 7.2-16 16s7.156 16 16 16h9.617c3.297 34.22 16.66 65.22 37.42 90.35l-6.789 6.789c-6.25 6.25-6.25 16.38 0 22.62 6.246 6.246 16.37 6.254 22.62 0l6.791-6.791C110.8 469.7 141.8 483.1 176 486.4v9.6c0 8.844 7.161 16 16 16s16-7.2 16-16v-9.619c34.21-3.297 65.21-16.65 90.33-37.41l6.791 6.791c6.246 6.246 16.37 6.254 22.62 0 6.25-6.25 6.25-16.38 0-22.62l-6.789-6.789C341.7 401.2 355.1 370.2 358.4 336h9.6c8.844 0 16.01-7.156 16.01-16s-7.21-16-16.01-16h-9.617c-3.297-34.22-16.66-65.22-37.42-90.35l65.16-65.15 59.04-11.8a23.981 23.981 0 0 0 11.63-5.957l44.47-41.33C515.6 75.09 515.6 51.78 501.3 37.47zM328 320c0 74.98-61 136-136 136S56 394.1 56 320s61-136 136-136 136 61 136 136zM479.5 65.97l-42.8 39.83-38.07 7.611 7.613-38.05 38.75-41.72c2.926-2.934 5.998-1.178 6.975-.201l26.7 26.7c1.732 1.73 1.632 4.93.832 5.83z" />
  </svg>
);

export default SvgBanjo;
