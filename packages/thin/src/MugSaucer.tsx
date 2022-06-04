import * as React from "react";
import { SVGProps } from "react";

const SvgMugSaucer = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" {...props}>
    <path d="M544 32H120c-13.25 0-24 10.75-24 24l.01 232c0 53 43 96 96 96h192c52.89 0 95.79-42.8 95.99-95.6V224h64c53.02 0 96-42.98 96-96s-43-96-96-96zm-80 256.4c-.2 43.9-36.1 79.6-80 79.6H192c-44.11 0-80-35.89-80-80V56c0-4.412 3.59-8 8-8h344v240.4zm80-80.4h-64V48h64c44.11 0 80 35.89 80 80s-35.9 80-80 80zm24 208c-4.406 0-8 3.578-8 8 0 22.06-17.94 40-40 40H56c-22.06 0-40-17.94-40-40 0-4.4-3.59-8-8-8s-8 3.6-8 8c0 30.9 25.12 56 56 56h464c30.88 0 56-25.12 56-56 0-4.4-3.6-8-8-8z" />
  </svg>
);

export default SvgMugSaucer;
