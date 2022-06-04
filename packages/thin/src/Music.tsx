import * as React from "react";
import { SVGProps } from "react";

const SvgMusic = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M495.9 7.948c-10.28-7.625-23.15-9.906-35.37-6.219L204.6 78.51c-16.8 5.03-28.5 20.78-28.5 38.29V388c-17.17-21.68-46.59-36.02-80.08-36.02C42.98 352 0 387.8 0 432c0 44.2 42.98 80 95.1 80s95.1-35.77 95.1-79.95l.084-216.6 303.9-91.18v199.6c-17.19-21.62-46.55-35.93-80.01-35.93-53.02 0-95.1 35.82-95.1 79.1 0 44.18 42.98 79.1 95.1 79.1s95.1-35.82 95.1-80L512 40.04c0-12.76-5.9-24.47-16.1-32.092zM95.99 496c-44.11 0-79.1-28.71-79.1-63.1 0-35.29 35.88-63.1 79.1-63.1s79.1 28.71 79.1 63.1c.01 34.4-34.99 63.1-79.1 63.1zm319.11-64c-44.11 0-79.1-28.71-79.1-63.1 0-35.29 35.88-63.1 79.1-63.1s79.1 28.71 79.1 63.1c.9 34.4-34.1 63.1-79.1 63.1zm-223-233.2v-82c0-10.52 7.031-19.97 17.12-22.98l255.9-76.8c7.312-2.203 15.12-.813 21.19 3.734 6.156 4.578 9.687 11.59 9.687 19.27v67.55L192.1 198.8z" />
  </svg>
);

export default SvgMusic;
