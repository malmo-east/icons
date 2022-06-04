import * as React from "react";
import { SVGProps } from "react";

const SvgStamp = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M366.2 256H400c61.9 0 112 50.1 112 112 0 20.9-13.4 38.7-32 45.3V464c0 26.5-21.5 48-48 48H80c-26.51 0-48-21.5-48-48v-50.7C13.36 406.7 0 388.9 0 368c0-61.9 50.14-112 112-112h33.8c29.9 0 54.2-24.3 54.2-54.2 0-17.5-9.2-33.3-19.9-47C167.5 138.5 160 118.1 160 96c0-53.02 42.1-96 96-96 53 0 96 42.98 96 96 0 22.1-7.5 42.5-20.1 58.8-10.7 13.7-19.9 29.5-19.9 47 0 29.9 24.3 54.2 54.2 54.2zM416 416H96v32h320v-32z" />
  </svg>
);

export default SvgStamp;
