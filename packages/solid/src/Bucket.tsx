import * as React from "react";
import { SVGProps } from "react";

const SvgBucket = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
    <path d="M96 160H48v-8C48 68.05 116.1 0 200 0h48c83.9 0 152 68.05 152 152v8h-48v-8c0-57.44-46.6-104-104-104h-48C142.6 48 96 94.56 96 152v8zM0 224c0-17.7 14.33-32 32-32h384c17.7 0 32 14.3 32 32s-14.3 32-32 32h-5.1l-22.4 213c-3.4 24.5-23.1 43-47.7 43H107.2c-24.55 0-45.15-18.5-47.72-43L37.05 256H32c-17.67 0-32-14.3-32-32z" />
  </svg>
);

export default SvgBucket;
