import * as React from "react";
import { SVGProps } from "react";

const SvgAnkh = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" {...props}>
    <path d="M296 256h-44.63C272.5 222 288 181.6 288 144 288 55.62 230.8 0 160 0S32 55.62 32 144c0 37.6 15.5 78 36.63 112H24c-13.25 0-24 10.8-24 24v32c0 13.25 10.75 24 24 24h96v152c0 13.2 10.8 24 24 24h32c13.25 0 24-10.75 24-24V336h96c13.25 0 24-10.75 24-24v-32c0-13.2-10.8-24-24-24zM160 80c29.62 0 48 24.5 48 64 0 34.62-27.12 78.12-48 100.9-20.9-22.8-48-66.3-48-100.9 0-39.5 18.4-64 48-64z" />
  </svg>
);

export default SvgAnkh;
