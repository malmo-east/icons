import * as React from "react";
import { SVGProps } from "react";

const SvgSignature = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" {...props}>
    <path d="M160 176c0 8.8-7.2 16-16 16s-16-7.2-16-16v-48c0-53.02 42.1-96 96-96 53 0 96 42.98 96 96v3.4c0 23-1.7 46-5.2 68.7l145-39.5c6.1-1.7 12.6-.5 16.6 5.3 4 4.8 4.7 11.6 1.9 17.3L425.9 288H560c8.8 0 16 7.2 16 16s-7.2 16-16 16H400c-5.5 0-10.7-2.9-13.6-7.6-2.9-4.7-3.2-10.6-.7-15.6l48-95.9-125.5 34.2c-1.5 6.5-4.1 13.1-5 19.6l-7.2 25.7c-11.3 41-27.6 80.5-48.5 116.7l-27.1 49C208.6 467 186.5 480 162.5 480c-36.7 0-67.4-29.8-67.4-66.5v-92.6c0-36.1 25-67.7 59.8-77.2l125.9-34.3c4.8-25.7 6.3-51.8 6.3-78V128c0-35.35-27.8-64-64-64-34.4 0-64 28.65-64 64l.9 48zm-32 144.9v92.6c0 19.1 15.4 34.5 34.5 34.5 12.4 0 23.9-6.7 30-17.6l27.1-48.1c19.6-34.8 34.9-71.9 45.6-110.4l7.2-25.8.3-1.4-109.3 29.9c-20.9 5.7-35.4 24.6-35.4 46.3zM48 384c8.84 0 16 7.2 16 16s-7.16 16-16 16H16c-8.836 0-16-7.2-16-16s7.164-16 16-16h32zm576 0c8.8 0 16 7.2 16 16s-7.2 16-16 16H336c-8.8 0-16-7.2-16-16s7.2-16 16-16h288z" />
  </svg>
);

export default SvgSignature;
