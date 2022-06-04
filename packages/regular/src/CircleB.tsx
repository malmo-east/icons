import * as React from "react";
import { SVGProps } from "react";

const SvgCircleB = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256 256-114.6 256-256S397.4 0 256 0zm0 464c-114.7 0-208-93.31-208-208S141.3 48 256 48s208 93.31 208 208-93.3 208-208 208zm81.9-216.2c8.8-12.4 14.1-27.5 14.1-43.8 0-41.9-34.1-76-76-76h-92c-13.2 0-24 10.8-24 24v208c0 13.3 10.8 24 24 24h108c41.91 0 76-34.09 76-76 0-24.6-11.9-46.3-30.1-60.2zM208 176h68c15.44 0 28 12.56 28 28s-12.6 28-28 28h-68v-56zm84 160h-84v-56h84c15.4 0 28 12.6 28 28s-12.6 28-28 28z" />
  </svg>
);

export default SvgCircleB;