import * as React from "react";
import { SVGProps } from "react";

const SvgEgg = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" {...props}>
    <path d="M192 0C85.1 0 0 214 0 320s85.1 192 192 192c105.1 0 192-86 192-192S297.1 0 192 0zm0 464c-79.38 0-144-64.63-144-144 0-117.4 90.63-272 144-272s144 154.6 144 272c0 79.4-64.6 144-144 144zm-24-360.9c-7.299 0-14.11 3.262-18.7 8.949C113.1 156.8 76.34 238.6 76.34 304c0 13.23 10.77 24 24 24 13.24 0 24-10.77 24-24 0-52.42 31.7-122.1 62.35-160.9 8.303-10.29 6.688-25.43-3.596-33.75-4.294-3.45-9.594-6.25-15.094-6.25z" />
  </svg>
);

export default SvgEgg;
