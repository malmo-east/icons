import * as React from "react";
import { SVGProps } from "react";

const SvgMelon = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M256 0C114.6 0 0 114.6 0 256c0 70.71 28.66 134.7 74.1 181 .002.002-.002-.002 0 0s-.002-.002 0 0c47.2 46.3 111.2 75 181.9 75 141.4 0 256-114.6 256-256S397.4 0 256 0zm162.2 176.7c-14.59 48.66-48.1 100.9-94.35 147.2-70.34 70.31-146.4 101.8-190.6 101.8-10.72 0-25.18-1.934-34.58-10.46-.44-.44-.89-.84-1.33-1.34-12.96-13.44-14.36-42.71-3.58-78.62 14.59-48.66 48.1-100.9 94.36-147.2 70.33-70.32 146.4-101.8 190.6-101.8 10.36 0 24.19 1.832 32.84 8.861.998.967 2.07 1.85 3.051 2.834C427.6 111.4 429 140.7 418.2 176.7zM256 32c36.19 0 70.28 8.822 100.6 24.12-57.22 8.416-129.3 47.61-191.1 109.4C115.6 215.4 79.2 272.5 63.11 326.1c-3.279 10.93-5.273 21.17-6.686 31.05C40.93 326.8 32 292.4 32 256 32 132.5 132.5 32 256 32zm0 448c-36.19 0-70.28-8.822-100.6-24.12 57.22-8.42 129.3-47.61 191.1-109.3 49.93-49.94 86.29-106.1 102.4-160.6 3.281-10.93 5.277-21.18 6.688-31.07C471.1 185.3 480 219.6 480 256c0 123.5-100.5 224-224 224z" />
  </svg>
);

export default SvgMelon;