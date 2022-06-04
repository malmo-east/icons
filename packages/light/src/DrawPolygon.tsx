import * as React from "react";
import { SVGProps } from "react";

const SvgDrawPolygon = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
    <path d="M365.8 354.6c5.8-1.7 11.9-2.6 18.2-2.6 35.3 0 64 28.7 64 64s-28.7 64-64 64c-29.8 0-54.9-20.4-62-48H125.1c-6.2 27.6-31.28 48-61.1 48-35.35 0-64-28.7-64-64 0-29.8 20.4-54.9 48-62V157.1C20.4 150.9 0 125.8 0 96c0-35.35 28.65-64 64-64 29.82 0 54.9 20.4 61.1 48H322c7.1-27.6 32.2-48 62-48 35.3 0 64 28.65 64 64 0 35.3-28.7 64-64 64-6.3 0-12.4-.9-18.2-2.6l-32.2 53.7c10.5 11.5 18.4 27.4 18.4 44.9s-7.9 33.4-18.4 44.9l32.2 53.7zM64 64c-17.67 0-32 14.33-32 32 0 17.7 14.33 32 32 32s32-14.3 32-32c0-17.67-14.33-32-32-32zm16 290c22.5 5.8 40.2 23.5 45.1 46H322c2.9-11.1 8.6-21.9 16.4-28.9l-32.2-53.7c-5.8 1.7-11.9 2.6-18.2 2.6-35.3 0-64-28.7-64-64s28.7-64 64-64c6.3 0 12.4.9 18.2 2.6l32.2-53.7c-7.8-7.9-13.5-17.8-16.4-28.9H125.1c-4.9 22.5-22.6 40.2-45.1 45.1V354zm-16 30c-17.67 0-32 14.3-32 32s14.33 32 32 32 32-14.3 32-32-14.33-32-32-32zM352 96c0 17.7 14.3 32 32 32s32-14.3 32-32c0-17.67-14.3-32-32-32s-32 14.33-32 32zm64 320c0-17.7-14.3-32-32-32s-32 14.3-32 32 14.3 32 32 32 32-14.3 32-32zM288 288c17.7 0 32-14.3 32-32s-14.3-32-32-32-32 14.3-32 32 14.3 32 32 32z" />
  </svg>
);

export default SvgDrawPolygon;