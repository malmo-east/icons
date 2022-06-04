import * as React from "react";
import { SVGProps } from "react";

const SvgRepeat1 = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M176 128h143.1l-.006 56c0 9.703 5.846 18.45 14.82 22.17s19.28 1.656 26.16-5.203l80.01-80c9.373-9.371 9.373-24.57 0-33.94l-80.01-80c-6.877-6.859-17.19-8.922-26.16-5.203S319.1 14.3 319.1 24v56H176C78.95 80 0 158.1 0 256c0 13.25 10.75 24 24 24s24-10.7 24-24c0-70.6 57.4-128 128-128zm88 200c13.25 0 24-10.75 24-24v-88c0-8.312-4.312-16.03-11.38-20.41-7.125-4.438-15.97-4.812-23.34-1.062l-32 16C209.4 216.5 204.6 230.9 210.5 242.7c5.5 11 18.2 16 29.5 11.9V304c0 13.3 10.8 24 24 24zm224-96c-13.25 0-24 10.75-24 24 0 70.59-57.42 128-128 128H192l.011-56c0-9.703-5.846-18.45-14.82-22.17S157.9 304.2 151 311l-80.01 80c-9.373 9.371-9.373 24.57 0 33.94l80.01 80c6.877 6.859 17.19 8.922 26.16 5.203S192 497.7 192 488v-56h144c97.05 0 176-78.97 176-176 0-13.2-10.7-24-24-24z" />
  </svg>
);

export default SvgRepeat1;
