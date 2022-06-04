import * as React from "react";
import { SVGProps } from "react";

const SvgRampLoading = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" {...props}>
    <path d="M16 64v323.8L.009 417.1 0 416V64C0 28.65 28.65 0 64 0h256c35.3 0 64 28.65 64 64v352l-.9 1.1-15.1-29.3V64c0-26.51-21.5-48-48-48H64c-26.51 0-48 21.49-48 48zm236.9 224c14.7 0 28.2 8.1 35.2 21l90.2 167.6c7.8 16-2.9 35.4-21.1 35.4H26.79c-18.162 0-29.743-19.4-21.133-35.4L95.9 309c7-12.9 20.5-21.9 35.2-21.9l121.8.9zM19.74 484.2c-2.87 5.3.99 11.8 7.05 11.8H357.2c6.1 0 9.9-6.5 7.1-11.8L274 316.6a23.93 23.93 0 0 0-21.1-12.6H131.1c-8.8 0-16.9 4.8-22 12.6L19.74 484.2z" />
  </svg>
);

export default SvgRampLoading;
