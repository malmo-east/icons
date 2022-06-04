import * as React from "react";
import { SVGProps } from "react";

const SvgMemory = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" {...props}>
    <path d="M576 162.9V112c0-26.51-21.5-48-48-48H48C21.49 64 0 85.49 0 112v50.94C18.6 169.5 32 187.1 32 208s-13.4 38.5-32 45.1V416c0 17.67 14.33 32 32 32h512c17.67 0 32-14.33 32-32V253.1c-18.6-6.6-32-24.2-32-45.1s13.4-38.5 32-45.1zM528 400h-56c0-13.25-10.75-24-24-24s-24 10.75-24 24h-32c0-13.25-10.75-24-24-24s-24 10.75-24 24h-32c0-13.25-10.75-24-24-24s-24 10.75-24 24h-32c0-13.25-10.75-24-24-24s-24 10.75-24 24h-32c0-13.25-10.75-24-24-24s-24 10.75-24 24H48v-48h480v48zm0-263.3c-19.92 17.84-32 43.61-32 71.33 0 27.71 12.08 53.48 32 71.33V304H48v-24.7c19.92-17.8 32-43.6 32-71.3 0-27.71-12.08-53.48-32-71.33V112h480v24.7zM160 272c13.25 0 24-10.75 24-24v-80c0-13.2-10.7-24-24-24s-24 10.8-24 24v80c0 13.3 10.8 24 24 24zm128 0c13.25 0 24-10.75 24-24v-80c0-13.25-10.75-24-24-24s-24 10.8-24 24v80c0 13.3 10.8 24 24 24zm128 0c13.25 0 24-10.75 24-24v-80c0-13.25-10.75-24-24-24s-24 10.75-24 24v80c0 13.3 10.8 24 24 24z" />
  </svg>
);

export default SvgMemory;
