import * as React from "react";
import { SVGProps } from "react";

const SvgFileMedical = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" {...props}>
    <path d="M256 0v128h128L256 0zm-32 128V0H48C21.49 0 0 21.49 0 48v416c0 26.5 21.49 48 48 48h288c26.51 0 48-21.49 48-48V160H256.9c-18.6 0-32.9-14.3-32.9-32zm64 173.7v36.57c0 7.63-6.1 13.73-13.7 13.73l-50.3-.9v50.29c0 8.51-6.1 14.61-13.7 14.61h-36.6c-7.6 0-13.7-6.1-13.7-13.7v-51.2l-50.3.9c-7.6 0-13.7-6.1-13.7-13.7v-36.6c0-7.6 6.1-13.7 13.7-13.7H160v-50.3c0-7.6 6.1-13.7 13.7-13.7h36.57c7.63 0 13.73 6.1 13.73 13.7V288h50.29c7.61 0 13.71 6.1 13.71 13.7z" />
  </svg>
);

export default SvgFileMedical;
