import * as React from "react";
import { SVGProps } from "react";

const SvgGramophone = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" {...props}>
    <path d="M56.1 319.1c4.875 0 9.533-1.465 13.41-4.215 40.25-27.38 124.1-77.16 201.2-77.16 12.62-.125 25.25 1.497 37.38 4.622 11.75 3.125 19.88 13.75 19.88 25.88 0 19.25-15.62 34.75-34.75 34.75H184c-13.25 0-24 10.75-24 24s10.75 24 24 24l109.2-.002c45.63 0 82.75-37 82.75-82.75 0-33.88-22.75-63.38-55.38-72.25C236.9 174.5 175.4 64.97 150.9 13.6 146.5 4.474 137-.881 127 .119c-10 .875-18.37 7.976-20.1 17.6L32.82 289.8c-1.87 7.2-.44 14.9 4.18 20.8 4.5 5.9 11.6 8.5 19.1 8.5zm80.7-230.35c21.75 36.5 50.5 76 86 106.8-46.3 8.95-91.3 29.15-127.92 48.55L136.8 88.75zM359.1 463.1H352v-48c0-17.6-14.4-32-32-32H64c-17.6 0-32 14.4-32 32v48h-7.1c-14.15 0-24.9 11.6-24.9 24S10.75 512 24 512h335.1c14.2 0 24.9-10.7 24.9-24.9 0-12.4-10.7-24-24.9-24zm-55.1 0H80v-32h224v32z" />
  </svg>
);

export default SvgGramophone;