import * as React from "react";
import { SVGProps } from "react";

const SvgBookSkull = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
    <path d="M448 352V48c0-26.47-21.5-48-48-48H80C35.89 0 0 35.88 0 80v352c0 44.1 35.89 80 80 80h344c13.25 0 24-10.75 24-24s-10.75-24-24-24h-8v-66.95c18.6-6.65 32-24.25 32-45.05zm-80 112H80c-17.64 0-32-14.34-32-32s14.36-32 32-32h288v64zm32-112H80c-11.38 0-22.2 2.375-32 6.688V80c0-17.66 14.36-32 32-32h320v304zM191.1 194.9V208c0 8.875 7.11 16 15.98 16h64c8.875 0 16-7.125 16-16v-13.1c19.38-11.62 32.02-30 32.02-50.88 0-35.38-35.88-64-80-64s-80 28.62-80 64c0 20.88 13.5 39.28 32 50.88zm80-66.9c8.875 0 16.02 7.125 16.02 16s-6.32 16-16.02 16-16-7.125-16-16 8-16 16-16zm-64 0c8.875 0 16 7.125 16 16s-7.125 16-16 16-16-7.125-16-16 8-16 16-16zm-78.3 181.1c2.3 6.7 8.5 10.9 15.2 10.9 1.672 0 3.375-.25 5.062-.813L240 288.9l90.94 30.31c1.66.59 3.36.79 5.06.79 6.703 0 12.94-4.25 15.17-10.94 2.797-8.375-1.734-17.44-10.11-20.25L290.6 272l50.44-16.81c8.375-2.812 12.91-11.88 10.11-20.25-2.75-8.34-11.75-12.94-20.25-10.14L240 255.1l-90.9-30.3c-8.5-2.8-17.5 1.8-20.3 10.1-2.797 8.375 1.734 17.44 10.11 20.25L189.4 272l-50.5 16.8c-8.3 2.8-12.9 11.9-10.1 20.3z" />
  </svg>
);

export default SvgBookSkull;