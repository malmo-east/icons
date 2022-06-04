import * as React from "react";
import { SVGProps } from "react";

const SvgCandyBar = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" {...props}>
    <path d="M0 352h128v96H32c-8.49 0-16.63-3.4-22.628-9.4C3.371 432.6 0 424.5 0 416v-64zM621.3 82.75c12 12 18.7 28.25 18.7 45.25v256c0 16.1-6.7 33.3-18.7 45.3S592.1 448 576 448H160v-96h128v-32H160v-96h128v-32H160V64h416c16.1 0 33.3 6.74 45.3 18.75zM592 128c0-4.2-1.7-8.3-4.7-11.3s-7.1-4.7-11.3-4.7H336v288h240c4.2 0 8.3-1.7 11.3-4.7s4.7-7.1 4.7-11.3V128zM0 224h128v96H0v-96zm80-96c17.36-.1 34.2-5.8 48-16.4V192H47.65A79.362 79.362 0 0 0 64 144v-16h16z" />
  </svg>
);

export default SvgCandyBar;