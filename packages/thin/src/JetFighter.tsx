import * as React from "react";
import { SVGProps } from "react";

const SvgJetFighter = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" {...props}>
    <path d="M8 264c-4.418 0-8-3.6-8-8s3.582-8 8-8h24v-64c0-22.1 17.91-40 40-40h20.41c9.39 0 18.39 3.3 25.59 9.3l36.9 30.7H192V16c-4.4 0-8-3.58-8-8 0-4.418 3.6-8 8-8h112c4.4 0 8 3.582 8 8 0 4.42-3.6 8-8 8h-40.1L388 184h97c8.2 0 16.3 1.4 24 4.1l110.6 39C631.8 231.5 640 243 640 256c0 12.1-8.2 24.5-20.4 28.9l-110.6 39c-7.7 2.7-15.8 4.1-24 4.1h-97L263.9 496H304c4.4 0 8 3.6 8 8s-3.6 8-8 8H192c-4.4 0-8-3.6-8-8s3.6-8 8-8V328h-37.1L118 358.7c-7.2 6-16.2 9.3-25.59 9.3H72c-22.09 0-40-17.9-40-40v-64H8zm200-80h160.1l-125-168h-36l.9 168zm-58.9 16-41.3-34.4c-4.3-4.5-9.77-5.6-15.39-5.6H72c-13.25 0-24 10.7-24 24v64h104c4.4 0 8 3.6 8 8s-3.6 8-8 8H48v64c0 13.3 10.75 24 24 24h20.41c5.62 0 11.09-2 15.39-5.6l41.3-34.4H485c6.4 0 12.7-1.1 18.7-3.2l110.5-39c5.9-2.1 9.8-7.6 9.8-13.8 0-6.2-3.9-11.7-9.8-13.8l-110.5-39c-6-2.1-12.3-3.2-18.7-3.2H149.1zM208 496h35.1l125-168h-161l.9 168z" />
  </svg>
);

export default SvgJetFighter;