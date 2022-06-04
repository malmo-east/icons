import * as React from "react";
import { SVGProps } from "react";

const SvgBoxTissue = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M464 224h-16c-4.418 0-8 3.582-8 8s3.6 8 8 8h16c17.67 0 32 14.33 32 32v112H16V272c0-17.67 14.33-32 32-32h16a8 8 0 0 0 0-16H48c-26.51 0-48 21.5-48 48v208c0 17.67 14.33 32 32 32h448c17.67 0 32-14.33 32-32V272c0-26.5-21.5-48-48-48zm32 256c0 8.822-7.178 16-16 16H32c-8.822 0-16-7.178-16-16v-80h480v80zM128 304h256c3.438 0 6.5-2.203 7.594-5.469l64-192c.806-2.431.406-5.131-1.094-7.201-1.5-2.1-3.9-3.33-6.5-3.33H338.6a62.104 62.104 0 0 1-59-42.53C268.9 21.48 239.1 0 205.4 0H64a7.981 7.981 0 0 0-6.25 3 8.017 8.017 0 0 0-1.562 6.734l64 288C121 301.4 124.3 304 128 304zm77.4-288c26.81 0 50.53 17.09 59 42.53C275.1 90.52 304.9 112 338.6 112h98.31L378.2 288H134.4L73.97 16H205.4z" />
  </svg>
);

export default SvgBoxTissue;
