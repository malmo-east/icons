import * as React from "react";
import { SVGProps } from "react";

const SvgCircleHeart = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="m256 191 17.7-18c1.6-1.6 2.4-3.1 5-4.6 29.5-25.1 73.6-23.6 101.4 4.6 29.4 29.8 29.4 78.2 0 107.1l-90.4 92.7c-9.4 9.5-21.6 14.2-33.8 13.3-12.2.8-24.3-3.9-33.6-13.3l-90.4-92.7c-29.4-28.9-29.4-77.3 0-107.1 27.8-28.2 71.9-29.7 101.4-4.6 1.7 1.5 3.4 3 5 4.6l17.7 18zm10.9 159.3 90.4-91.8c17.1-17.3 17.1-45.7 0-63-16.8-17.1-43.9-17.1-60.8 0L256 236.6l-40.5-41.1c-16.9-17.1-44-17.1-60.8 0-17.1 17.3-17.1 45.7 0 63l90.4 91.8c3.1 3.2 7 3.8 10 3.8 4.8 0 8.7-.6 11.8-3.8zM512 256c0 141.4-114.6 256-256 256S0 397.4 0 256 114.6 0 256 0s256 114.6 256 256zM256 32C132.3 32 32 132.3 32 256s100.3 224 224 224 224-100.3 224-224S379.7 32 256 32z" />
  </svg>
);

export default SvgCircleHeart;