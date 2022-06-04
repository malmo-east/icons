import * as React from "react";
import { SVGProps } from "react";

const SvgBurger = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M50.39 220.8c-4.46-2.2-8.36-5.3-11.42-9.2-3.06-3.9-5.18-8.4-6.22-13.2-1.04-4.9-.95-9.9.24-14.7C54.98 97.02 146.5 32 256 32c109.5 0 201 65.02 223 151.7 1.2 4.8 1.3 9.8.2 14.7-1 4.8-3.1 9.3-6.2 13.2-3.9 3.9-6.9 7-11.4 9.2-4.4 2.1-9.3 3.2-14.3 3.2H64.67c-4.94 0-9.83-1.1-14.28-3.2zM86.4 176h339.2a151.03 151.03 0 0 0-57.6-64c0 4.2-1.7 8.3-4.7 11.3s-7.1 4.7-11.3 4.7c-4.2 0-8.3-1.7-11.3-4.7s-4.7-7.1-4.7-11.3c0-2.7.7-5.3 2.1-7.6 1.3-2.4 3.2-4.3 5.5-5.68a212.572 212.572 0 0 0-73.4-17.82c1.1 2.19.9 4.62 1.8 7.1 0 4.24-1.7 8.31-4.7 11.31-3 2.99-7.1 4.69-11.3 4.69-4.2 0-8.3-1.7-11.3-4.69-3-3-4.7-7.07-4.7-11.31 0-2.48.7-4.91 1.8-7.1-25.3 1.51-50.2 7.54-73.4 17.82 2.3 1.38 4.2 3.28 5.5 5.68 1.4 2.3 1.2 4.9 2.1 7.6 0 4.2-1.7 8.3-4.7 11.3s-7.1 4.7-11.3 4.7c-4.2 0-8.3-1.7-11.3-4.7s-4.7-7.1-4.7-11.3c-25.9 15.3-45.05 37.5-57.6 64zm400.2 89.4c6 6 9.4 14.1 9.4 22.6 0 8.5-3.4 16.6-9.4 22.6S472.5 320 464 320H48c-8.49 0-16.63-3.4-22.63-9.4S16 296.5 16 288c0-8.5 3.37-16.6 9.37-22.6 6-6 14.14-9.4 22.63-9.4h416c8.5 0 16.6 3.4 22.6 9.4zm-11.3 91.3c3 3 4.7 7.1 4.7 11.3v16c0 25.5-10.1 49.9-28.1 67.9-18 18-42.4 28.1-67.9 28.1H128c-25.5 0-49.88-10.1-67.88-28.1A95.942 95.942 0 0 1 32 384v-16c0-4.2 1.69-8.3 4.69-11.3 3-3 7.07-4.7 11.31-4.7h416c4.2 0 8.3 1.7 11.3 4.7zm-63.6 66.5c8.1-5.7 14.2-13.8 17.5-23.2H82.75c3.31 9.4 9.44 17.5 17.55 23.2 8.1 5.7 17.8 8.8 27.7 8.8h256c9.9 0 19.6-3.1 27.7-8.8z" />
  </svg>
);

export default SvgBurger;