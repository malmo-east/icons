import * as React from "react";
import { SVGProps } from "react";

const SvgSatelliteDish = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="m201.5 344.5 47.48-47.48c9.375-9.375 9.375-24.56 0-33.94s-24.56-9.375-33.94 0L167.5 310.5 72.06 215c-4.95-4.9-11.73-7.3-18.79-6.9-6.97.5-13.38 4.1-17.52 9.7C12.36 249.7 0 287.4 0 327.1 0 429.1 82.95 512 184.9 512c39.66 0 77.45-12.38 109.3-35.75 5.641-4.156 9.203-10.53 9.734-17.53a23.97 23.97 0 0 0-6.969-18.78L201.5 344.5zM184.9 464C109.4 464 48 402.6 48 327.1c0-19.66 4.109-38.72 12.02-56.22L241.1 452c-17.5 7.9-36.5 12-56.2 12zM216 0c-13.2 0-24 10.75-24 24s10.8 24 24 24c136.8 0 248 111.3 248 248 0 13.25 10.75 24 24 24s24-10.7 24-24C512 132.8 379.2 0 216 0zm0 104c-13.2 0-24 10.8-24 24s10.75 24 24 24c79.41 0 144 64.59 144 144 0 13.3 10.8 24 24 24s24-10.75 24-24c0-105.9-86.1-192-192-192z" />
  </svg>
);

export default SvgSatelliteDish;