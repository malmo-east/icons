import * as React from "react";
import { SVGProps } from "react";

const SvgNfcSymbol = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" {...props}>
    <path d="M202.6 311.8c-13.1-11.8-14.2-32-2.4-45.2 10.9-13.1 32-14.2 45.2-2.4l159.8 143.5c45.3-34.5 73.9-90.3 73.9-151.7 0-69.6-37-132-92.8-164.3-16.2-8.84-20.6-28.42-11.7-43.72 8.8-15.3 28.4-20.52 43.7-11.67C493.6 79.89 543.1 163.2 543.1 256s-49.5 176.1-124.8 219.7c-12 6.9-27.1 5.4-37.4-3.9l-178.3-160zm170.8-111.6c13.1 10.9 14.2 32 2.4 45.2-11.8 13.1-32 14.2-45.2 2.4L170.8 104.4C125.5 138.8 96 194.6 96 256c0 69.7 37.9 132 93.7 164.3 15.3 8.9 20.6 28.4 11.7 43.7-8.8 15.3-29.3 20.6-43.7 11.7C82.35 432.1 32 348.8 32 256c0-92.8 50.35-176.1 125.7-219.69 12-6.93 27.1-5.36 37.4 3.89l178.3 160z" />
  </svg>
);

export default SvgNfcSymbol;
