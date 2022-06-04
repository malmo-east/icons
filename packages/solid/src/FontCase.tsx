import * as React from "react";
import { SVGProps } from "react";

const SvgFontCase = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" {...props}>
    <path d="M205.1 52.76c-3.8-12.46-15.8-20.75-29.1-20.75s-25.3 8.29-30 20.75l-144 384c-6.203 16.56 2.188 35 18.73 41.22 16.55 6.125 34.98-2.156 41.2-18.72l28.21-75.25h171.6l28.21 75.25C294.9 472.1 307 480 320 480c3.734 0 7.531-.656 11.23-2.031 16.55-6.219 24.94-24.66 18.73-41.22L205.1 52.76zM114.2 320 176 155.1 237.82 320H114.2zM608 160c-13.14 0-24.37 7.943-29.3 19.27C559.2 167.3 536.5 160 512 160c-70.58 0-128 57.41-128 128v63.93c0 70.59 57.42 128.1 127.1 128.1 24.51 0 47.21-7.266 66.7-19.26C583.6 472.1 594.9 480 608 480c17.67 0 32-14.31 32-32V192c0-17.7-14.3-32-32-32zm-32 192c0 35.28-28.7 64-64 64s-64-28.72-64-64v-64c0-35.28 28.7-63.1 64-63.1s64 28.72 64 63.1v64z" />
  </svg>
);

export default SvgFontCase;
