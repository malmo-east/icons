import * as React from "react";
import { SVGProps } from "react";

const SvgBong = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path
      className="bong_svg__fa-primary"
      d="M368 384c0 25.1-6.593 49.78-19.07 71.36-3.03 5.24-8.53 8.64-14.43 8.64h-221c-5.809 0-11.37-3.352-14.44-8.639C86.6 433.8 80.01 409.1 80.01 384c0-22.57 5.652-44.35 15.5-64h257c9.89 19.7 15.49 41.4 15.49 64z"
    />
    <path
      d="m475.3 217.4-52.63-52.75c-6.251-6.25-16.38-6.25-22.63 0L388.6 176c-6.251 6.25-6.251 16.38 0 22.62L398 208l-39.38 39.38c-11.5-11.38-24.51-21.25-38.63-29.5l.007-154.1h16c8.75 0 16-7.25 16-16L352 16.01C352 7.14 344.9 0 336 0L111.1.167c-8.751 0-15.99 7.11-15.99 15.99L96 48c0 8.875 7.125 16 16 16h16v153.9C70.62 251.1 32 313 32 384c0 34.75 9.25 67.25 25.5 95.38C69.13 499.4 90.38 512 113.5 512h221c23.13 0 44.38-12.62 56-32.63C406.8 451.3 416 418.8 416 384c0-36.13-10.11-69.75-27.49-98.63l43.5-43.37 9.376 9.375c6.251 6.25 16.38 6.25 22.63 0L475.3 240c6.2-6.2 6.2-16.4 0-22.6zm-127.2 238c-2.2 5.2-7.7 8.6-13.6 8.6h-221c-5.809 0-11.37-3.352-14.44-8.639C86.6 433.8 80.01 409.1 80.01 384c0-51.09 27.58-98.85 72.04-124.6l23.97-13.87V64.03l96.02.151-.017 181.3 23.97 13.87C340.4 285.2 368 332.9 368 384c0 25.1-6.5 49.8-19.9 71.4z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgBong;
