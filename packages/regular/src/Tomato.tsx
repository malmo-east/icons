import * as React from "react";
import { SVGProps } from "react";

const SvgTomato = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M465.7 167.1c-8.938-9.75-24.09-10.44-33.91-1.469-9.782 8.953-10.44 24.12-1.469 33.91C452.3 223.5 464 257.3 464 297c0 121.7-116.6 167-190.1 167h-35.8C164.6 464 48 418.7 48 297c0-39.8 11.66-73.55 33.69-97.59 8.97-9.81 7.41-24.91-1.47-33.91-9.78-9-24.97-8.3-33.91.6C16 200 0 245 0 297c0 156.7 146.1 215 238.1 215h35.75C365.9 512 512 453.7 512 297c0-51.9-16-96.9-46.3-129.9zM108.3 147c1.924 0-.414.305 41.58-7.441L128.9 176.6c-4 9.2 6.2 18.5 16.4 13.5L256 141.31l110.6 48.79c10.28 4.148 20.46-5.221 16.45-14.37l-20.96-36.98c42.08 7.836 39.77 7.535 41.71 7.535 10.95 0 16.45-12.07 8.709-19.11-1.986-1.803-46.59-40.5-133.4-46.78-2.006-30.06-16.59-58.32-40.8-76.48-10.62-8-25.69-5.797-33.63 4.812C196.8 20.21 199 35.26 209.6 43.21c12.23 9.164 19.79 23.13 21.62 38.16-85.72 6.61-129.62 44.73-131.6 46.53-7.76 6.2-2.21 19.1 8.68 19.1z" />
  </svg>
);

export default SvgTomato;
