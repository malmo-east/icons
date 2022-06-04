import * as React from "react";
import { SVGProps } from "react";

const SvgBasketballHoop = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" {...props}>
    <path d="M448 208H192v-48h256v48zm192 .1v118c0 25.43-15.05 48.44-38.35 58.63l-93.09 40.73L524.6 288h-32.2l-24.48 209.8c-.52 4.8-5.02 14.2-15.92 14.2-4.312 0-8.531-1.75-11.59-4.984L386 449.746l-54.41 57.27C328.6 510.2 324.4 512 320 512s-8.594-1.797-11.59-4.984L254 449.746l-54.41 57.27a15.977 15.977 0 0 1-11.6 4.98c-11.04 0-15.35-9.44-15.9-14.16L147.6 288h-32.2l16.04 137.5-93.09-40.72C15.05 374.6 0 351.6 0 326.1v-118C0 167.8 105 0 320 0c217.9 0 320 169.8 320 208.1zM226.1 288h-46.2l4.2 36 42-36zm5.8 138.5-40.96-43.11 8.955 76.79L231.9 426.5zm21.2-23.2 43.94-46.25-45.44-48.75-48.44 41.52 49.94 53.48zm66.9-69.5 43.5-45.8h-87l43.5 45.8zm43.9 92.7L320 380.3l-43.94 46.25L320 472.8l43.9-46.3zm21.2-23.2 50.84-53.52-48.44-41.52-46.35 48.78 43.95 46.26zm63.9-19.9-40.96 43.11 32 33.68L449 383.4zm11.1-95.4h-46.24l42.04 36.03 4.2-36.03zm83.9-72a8 8 0 0 0-8-8h-56v-48c0-17.64-14.34-32-32-32H192c-17.7 0-32 14.4-32 32v48h-56c-4.42 0-8 3.6-8 8v16c0 4.4 3.58 8 8 8h432c4.4 0 8-3.6 8-8v-16z" />
  </svg>
);

export default SvgBasketballHoop;
