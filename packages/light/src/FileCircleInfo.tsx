import * as React from "react";
import { SVGProps } from "react";

const SvgFileCircleInfo = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" {...props}>
    <path d="M64 480h232.2c8.9 11.8 21.1 22.3 33.5 31.3-3.1.4-6.4.7-9.7.7H64c-35.35 0-64-28.7-64-64V64C0 28.65 28.65 0 64 0h156.1c12.7 0 25 5.057 34 14.06L369.9 129.9c9 9 14.1 21.3 14.1 34v34.7c-11.2 3.2-21.9 7.4-32 12.6V192H240c-26.5 0-48-21.5-48-48V32H64c-17.67 0-32 14.33-32 32v384c0 17.7 14.33 32 32 32zm283.3-327.4L231.4 36.69c-2-2.07-4.6-3.51-7.4-4.21V144c0 8.8 7.2 16 16 16h111.5c-.7-2.8-2.1-5.4-4.2-7.4zM432 288c13.3 0 24 10.7 24 24s-10.7 24-24 24-24-10.7-24-24 10.7-24 24-24zm-16.9 128v-32c-7.9-.9-15.1-7.2-15.1-16s7.2-16 16-16h15.1c9.7 0 16 7.2 16 16l.9 48c8.8 0 16 7.2 16 16s-7.2 16-16 16h-32c-8.8 0-16-7.2-16-16s7.2-16 15.1-16zm16.9 96c-79.5 0-144-64.5-144-144s64.5-144 144-144 144 64.5 144 144-64.5 144-144 144zm112-144c0-61.9-50.1-112-112-112s-112 50.1-112 112 50.1 112 112 112 112-50.1 112-112z" />
  </svg>
);

export default SvgFileCircleInfo;
