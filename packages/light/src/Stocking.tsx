import * as React from "react";
import { SVGProps } from "react";

const SvgStocking = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" {...props}>
    <path d="M336 160c-8.805 0-16.07 7.135-16.07 15.94v126.9c0 42.88-21.13 82.75-56.89 106.5l-81.77 54.5C165.4 474.5 147.1 480 128.2 480c-32.26 0-62.27-16-80.03-42.75-14.25-21.38-19.38-47-14.38-72.13s19.51-46.88 41.01-61l53.14-35.5V175.9c-.04-8.8-7.14-15.9-16.84-15.9s-15.06 7.1-15.06 15.9l-.02 75.6-39.01 26C-1.76 316.75-17.76 396.3 21.51 455c24.76 37 65.25 57 106.69 57 24.38 0 49.13-7 70.89-21.5L280.8 436c44.51-29.75 71.14-79.5 71.14-133.1l.055-126.9c-.895-8.9-7.095-16-15.995-16zm-.9-160H111.2C85.53 0 64.03 21.49 64.03 48l-.005 32c0 26.51 21.5 48 48.02 48h223.9C362.5 128 384 106.5 384 80V48c0-26.51-21.5-48-48.9-48zm17 80c0 8.836-7.166 16-16 16H112c-8.8 0-15.96-7.16-15.96-16V48c0-8.838 7.164-16 16-16h224.1c8.838 0 16 7.162 16 16v32z" />
  </svg>
);

export default SvgStocking;
