import * as React from "react";
import { SVGProps } from "react";

const SvgMonument = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" {...props}>
    <path d="M197.7 24.97a8.112 8.112 0 0 0-11.4 0l-61 61.01c-3.7 3.73-6.1 8.6-6.8 13.84L79.93 393c-.57 4.4-4.59 7.5-8.97 6.9-4.38-.5-7.47-4.6-6.89-9.8L102.7 97.73c1.1-9.63 5.1-16.84 11.3-23.07l61-61c9.4-9.374 24.6-9.374 33.1 0l61 61c7.1 6.23 11.1 13.44 12.2 23.07l38.6 292.37c.6 5.2-2.5 9.3-6.9 9.8-4.3.6-8.4-2.5-8.9-6.9L265.5 99.82a24.23 24.23 0 0 0-6.8-13.84l-61-61.01zM232 256c13.3 0 24 10.7 24 24v16c0 13.3-10.7 24-24 24h-80c-13.3 0-24-10.7-24-24v-16c0-13.3 10.7-24 24-24h80zm0 16h-80c-4.4 0-8 3.6-8 8v16c0 4.4 3.6 8 8 8h80c4.4 0 8-3.6 8-8v-16c0-4.4-3.6-8-8-8zm120 160c17.7 0 32 14.3 32 32v16c0 17.7-14.3 32-32 32H32c-17.67 0-32-14.3-32-32v-16c0-17.7 14.33-32 32-32h320zM16 480c0 8.8 7.16 16 16 16h320c8.8 0 16-7.2 16-16v-16c0-8.8-7.2-16-16-16H32c-8.84 0-16 7.2-16 16v16z" />
  </svg>
);

export default SvgMonument;
