import * as React from "react";
import { SVGProps } from "react";

const SvgNotebook = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M416 0H128C92.65 0 64 28.65 64 64v32H24c-13.25 0-24 10.8-24 24s10.75 24 24 24h40v88H24c-13.25 0-24 10.8-24 24s10.75 24 24 24h40v88H24c-13.25 0-24 10.8-24 24s10.75 24 24 24h40v32c0 35.35 28.65 64 64 64h288c35.35 0 64-28.65 64-64V64c0-35.35-28.7-64-64-64zM112 448v-32h24c13.3 0 24-10.7 24-24s-10.7-24-24-24h-24v-88h24c13.3 0 24-10.7 24-24s-10.7-24-24-24h-24v-88h24c13.3 0 24-10.7 24-24s-10.7-24-24-24h-24V64c0-8.838 7.164-16 16-16h64v416h-64c-8.8 0-16-7.2-16-16zm320 0c0 8.836-7.164 16-16 16H240V48h176c8.836 0 16 7.162 16 16v384z" />
  </svg>
);

export default SvgNotebook;