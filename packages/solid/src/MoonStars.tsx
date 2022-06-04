import * as React from "react";
import { SVGProps } from "react";

const SvgMoonStars = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M332.3 426.4c-93.13 17.75-178.5-53.63-178.5-147.6 0-54.25 29-104 76-130.9 7.375-4.125 5.45-15.12-2.8-16.62C108.7 109.4 0 200 0 320c0 106 85.76 192 191.8 192 59.25 0 113.2-26.79 148.9-71.04 5.4-6.46-.4-16.16-8.4-14.56zM288 63.1l12.42 29.78c.61 1.225 2.211 2.219 3.578 2.219s2.967-.994 3.576-2.219l12.42-29.78 29.79-12.42C351 50.97 352 49.36 352 47.1c0-1.365-.992-2.967-2.211-3.576l-29.79-12.42-12.42-29.79c-.61-1.227-2.209-2.217-3.576-2.217s-2.969.99-3.578 2.217l-12.42 29.79L258.2 44.42c-1.217.61-2.209 2.211-2.209 3.576 0 1.359.992 2.971 2.209 3.58L288 63.1zm219.6 153.8L448 192l-24.88-59.63c-1.32-2.57-4.12-5.27-7.12-5.27s-5.75 1.75-7.125 4.375L384 192l-59.63 24.88C321.8 218.3 320 221 320 224s1.75 5.75 4.375 7.125L384 256l24.88 59.63C410.3 318.3 413 320 416 320s5.75-1.75 7.125-4.375L448 256l59.63-24.88C510.3 229.8 512 227 512 224s-1.7-5.7-4.4-7.1z" />
  </svg>
);

export default SvgMoonStars;