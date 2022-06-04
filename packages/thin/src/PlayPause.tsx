import * as React from "react";
import { SVGProps } from "react";

const SvgPlayPause = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M504 64c-4.422 0-8 3.578-8 8v368c0 4.422 3.578 8 8 8s8-3.6 8-8V72c0-4.42-3.6-8-8-8zm-144 0c-4.4 0-8 3.58-8 8v368c0 4.422 3.578 8 8 8s8-3.578 8-8V72c0-4.42-3.6-8-8-8zM52.51 71.41C46.36 66.31 39.22 64 32.22 64 15.71 64 0 76.81 0 96.03v319.9C0 435.2 15.71 448 32.22 448c7.002 0 14.15-2.305 20.29-7.406l192-159.1c15.25-12.87 15.25-36.37 0-49.24L52.51 71.41zM234.3 268.3l-192 159.1c-2.98 3.4-6.37 4.6-10.08 4.6-7.97 0-16.22-6-16.22-16.9V95.2C16 85.99 24.25 80 32.22 80c3.711 0 7.098 1.25 10.05 3.699l191.9 159.9c3.73 3.101 4.93 7.501 4.93 12.401 0 4.9-1.2 9.3-4.8 12.3z" />
  </svg>
);

export default SvgPlayPause;
