import * as React from "react";
import { SVGProps } from "react";

const SvgCheese = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M316.8 32.67a63.916 63.916 0 0 0-48.52 12.84l-255.9 200.8C4.567 252.4 0 261.7 0 271.5V432c0 26.5 21.49 48 48 48h416c26.51 0 48-21.49 48-48V255.1C512 82.26 377.3 41.43 316.8 32.67zm-38.7 25.47C286.6 51.51 296.8 48 307.6 48c2.314 0 4.643.166 6.967.502C369.1 56.4 496 92.44 496 256H25.93L278.1 58.14zM464 464H48c-17.64 0-32-14.36-32-32V272h480v160c0 17.6-14.4 32-32 32z" />
  </svg>
);

export default SvgCheese;
