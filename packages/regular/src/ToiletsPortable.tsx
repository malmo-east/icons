import * as React from "react";
import { SVGProps } from "react";

const SvgToiletsPortable = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" {...props}>
    <path d="M24 512c-13.25 0-24-10.7-24-24V72C0 32.24 32.24 0 72 0h112c39.8 0 72 32.24 72 72v416c0 13.3-10.7 24-24 24s-24-10.7-24-24v-8H48v8c0 13.3-10.75 24-24 24zM72 48c-13.25 0-24 10.75-24 24v24h160V72c0-13.25-10.7-24-24-24H72zm136 384V320h-24c-13.3 0-24-10.7-24-24v-48c0-13.3 10.7-24 24-24h24v-80H48v288h160zm136 80c-13.3 0-24-10.7-24-24V72c0-39.76 32.2-72 72-72h112c39.8 0 72 32.24 72 72v416c0 13.3-10.7 24-24 24s-24-10.7-24-24v-8H368v8c0 13.3-10.7 24-24 24zm48-464c-13.3 0-24 10.75-24 24v24h160V72c0-13.25-10.7-24-24-24H392zm136 384V320h-24c-13.3 0-24-10.7-24-24v-48c0-13.3 10.7-24 24-24h24v-80H368v288h160z" />
  </svg>
);

export default SvgToiletsPortable;