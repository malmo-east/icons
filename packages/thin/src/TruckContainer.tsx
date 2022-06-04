import * as React from "react";
import { SVGProps } from "react";

const SvgTruckContainer = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" {...props}>
    <path d="M0 88c0-30.93 25.07-56 56-56h304c30.9 0 56 25.07 56 56v224c0 4.4-3.6 8-8 8s-8-3.6-8-8V88c0-22.09-17.9-40-40-40H56c-22.09 0-40 17.91-40 40v224c0 4.4-3.58 8-8 8-4.418 0-8-3.6-8-8V88zm448 72c0-13.3 10.7-24 24-24h72c12.6 0 24.4 5.9 32 16l56 74.7c5.2 6.9 8 15.3 8 24V376c0 17.7-14.3 32-32 32h-.4c-4 40.4-38.1 72-79.6 72-44.2 0-80-35.8-80-80H304c0 44.2-35.8 80-80 80-31.7 0-59.9-18.4-72-45.1-13 26.7-40.3 45.1-72 45.1-44.18 0-80-35.8-80-80s35.82-80 80-80c31.7 0 59 18.4 72 45.1 12.1-26.7 40.3-45.1 72-45.1 38.7 0 70.1 27.5 78.4 64H448V160zm176 216V256H464v95.1c14.6-18.5 37.8-31.1 64-31.1 41.5 0 75.6 31.6 79.6 72h.4c8.8 0 16-7.2 16-16zm-2.5-136c-.6-1.3-1.4-2.6-2.3-3.7l-56-74.7c-4.5-6-11.6-9.6-19.2-9.6h-72c-4.4 0-8 3.6-8 8v80h157.5zM528 464c35.3 0 64-28.7 64-64s-28.7-64-64-64-64 28.7-64 64 28.7 64 64 64zM224 336c-35.3 0-64 28.7-64 64s28.7 64 64 64 64-28.7 64-64-28.7-64-64-64zM80 464c35.3 0 64-28.7 64-64s-28.7-64-64-64c-35.35 0-64 28.7-64 64s28.65 64 64 64zm40-200c0 4.4-3.6 8-8 8s-8-3.6-8-8V104c0-4.42 3.6-8 8-8s8 3.58 8 8v160zm96 0c0 4.4-3.6 8-8 8s-8-3.6-8-8V104c0-4.42 3.6-8 8-8s8 3.58 8 8v160zm96 0c0 4.4-3.6 8-8 8s-8-3.6-8-8V104c0-4.42 3.6-8 8-8s8 3.58 8 8v160z" />
  </svg>
);

export default SvgTruckContainer;
