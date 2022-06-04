import * as React from "react";
import { SVGProps } from "react";

const SvgK = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" {...props}>
    <path d="M315.6 442.2c7.656 10.83 5.062 25.8-5.75 33.45C305.6 478.6 300.8 480 296 480c-7.531 0-14.97-3.531-19.62-10.16L127.5 258.1 48 338.7V456c0 13.3-10.75 24-24 24S0 469.3 0 456V56c0-13.25 10.75-24 24-24s24 10.75 24 24v214.7L279 39.1c9.344-9.344 24.53-9.422 33.94-.047 9.406 9.36 9.406 24.56.063 33.95l-151.3 151.7c.257.328.636.488.88.834L315.6 442.2z" />
  </svg>
);

export default SvgK;
