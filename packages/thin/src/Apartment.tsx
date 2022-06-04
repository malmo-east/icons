import * as React from "react";
import { SVGProps } from "react";

const SvgApartment = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" {...props}>
    <path d="M320 344c-13.3 0-24-10.7-24-24v-32c0-13.3 10.7-24 24-24h32c13.3 0 24 10.7 24 24v32c0 13.3-10.7 24-24 24h-32zm40-56c0-4.4-3.6-8-8-8h-32c-4.4 0-8 3.6-8 8v32c0 4.4 3.6 8 8 8h32c4.4 0 8-3.6 8-8v-32zm144 128c0 13.3-10.7 24-24 24h-32c-13.3 0-24-10.7-24-24v-32c0-13.3 10.7-24 24-24h32c13.3 0 24 10.7 24 24v32zm-24 8c4.4 0 8-3.6 8-8v-32c0-4.4-3.6-8-8-8h-32c-4.4 0-8 3.6-8 8v32c0 4.4 3.6 8 8 8h32zM96 344c-13.25 0-24-10.7-24-24v-32c0-13.3 10.75-24 24-24h32c13.3 0 24 10.7 24 24v32c0 13.3-10.7 24-24 24H96zm40-56c0-4.4-3.6-8-8-8H96c-4.42 0-8 3.6-8 8v32c0 4.4 3.58 8 8 8h32c4.4 0 8-3.6 8-8v-32zm16 128c0 13.3-10.7 24-24 24H96c-13.25 0-24-10.7-24-24v-32c0-13.3 10.75-24 24-24h32c13.3 0 24 10.7 24 24v32zm-24 8c4.4 0 8-3.6 8-8v-32c0-4.4-3.6-8-8-8H96c-4.42 0-8 3.6-8 8v32c0 4.4 3.58 8 8 8h32zm96-80c-13.3 0-24-10.7-24-24v-32c0-13.3 10.7-24 24-24h32c13.3 0 24 10.7 24 24v32c0 13.3-10.7 24-24 24h-32zm40-56c0-4.4-3.6-8-8-8h-32c-4.4 0-8 3.6-8 8v32c0 4.4 3.6 8 8 8h32c4.4 0 8-3.6 8-8v-32zm112-160c0 13.3-10.7 24-24 24h-32c-13.3 0-24-10.7-24-24V96c0-13.25 10.7-24 24-24h32c13.3 0 24 10.75 24 24v32zm-56-40c-4.4 0-8 3.58-8 8v32c0 4.4 3.6 8 8 8h32c4.4 0 8-3.6 8-8V96c0-4.42-3.6-8-8-8h-32zm-64-16c13.3 0 24 10.75 24 24v32c0 13.3-10.7 24-24 24h-32c-13.3 0-24-10.7-24-24V96c0-13.25 10.7-24 24-24h32zm8 24c0-4.42-3.6-8-8-8h-32c-4.4 0-8 3.58-8 8v32c0 4.4 3.6 8 8 8h32c4.4 0 8-3.6 8-8V96zm112 128c0 13.3-10.7 24-24 24h-32c-13.3 0-24-10.7-24-24v-32c0-13.3 10.7-24 24-24h32c13.3 0 24 10.7 24 24v32zm-24 8c4.4 0 8-3.6 8-8v-32c0-4.4-3.6-8-8-8h-32c-4.4 0-8 3.6-8 8v32c0 4.4 3.6 8 8 8h32zm96 112c-13.3 0-24-10.7-24-24v-32c0-13.3 10.7-24 24-24h32c13.3 0 24 10.7 24 24v32c0 13.3-10.7 24-24 24h-32zm40-56c0-4.4-3.6-8-8-8h-32c-4.4 0-8 3.6-8 8v32c0 4.4 3.6 8 8 8h32c4.4 0 8-3.6 8-8v-32zm-336-64c0 13.3-10.7 24-24 24H96c-13.25 0-24-10.7-24-24v-32c0-13.3 10.75-24 24-24h32c13.3 0 24 10.7 24 24v32zm-24 8c4.4 0 8-3.6 8-8v-32c0-4.4-3.6-8-8-8H96c-4.42 0-8 3.6-8 8v32c0 4.4 3.58 8 8 8h32zm96 16c-13.3 0-24-10.7-24-24v-32c0-13.3 10.7-24 24-24h32c13.3 0 24 10.7 24 24v32c0 13.3-10.7 24-24 24h-32zm40-56c0-4.4-3.6-8-8-8h-32c-4.4 0-8 3.6-8 8v32c0 4.4 3.6 8 8 8h32c4.4 0 8-3.6 8-8v-32zM80 512c-35.35 0-64-28.7-64-64V160c0-35.3 28.65-64 64-64h64V64c0-35.35 28.7-64 64-64h160c35.3 0 64 28.65 64 64v128h64c35.3 0 64 28.7 64 64v192c0 35.3-28.7 64-64 64H80zm80-400H80c-26.51 0-48 21.5-48 48v288c0 26.5 21.49 48 48 48h160v-64c0-26.5 21.5-48 48-48s48 21.5 48 48v64h160c26.5 0 48-21.5 48-48V256c0-26.5-21.5-48-48-48h-80V64c0-26.51-21.5-48-48-48H208c-26.5 0-48 21.49-48 48v48zm128 288c-17.7 0-32 14.3-32 32v64h64v-64c0-17.7-14.3-32-32-32z" />
  </svg>
);

export default SvgApartment;