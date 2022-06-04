import * as React from "react";
import { SVGProps } from "react";

const SvgPie = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" {...props}>
    <path
      className="pie_svg__fa-primary"
      d="M544 240c-6.5 0-10.38-1.25-14.5-3.5C494.9 136.1 400.1 64 288 64S81 136.3 46.5 236.5c-4.12 2.4-8 3.5-14.5 3.5-17.62 0-32 14.38-32 32s14.38 32 32 32c32 0 49.1-13.5 61.88-22.38C103 274.8 106.8 272 117.5 272c10.62 0 14.38 2.75 23.5 9.625C152.9 290.5 170.9 304 202.9 304s50-13.5 61.88-22.38c9.02-6.82 12.82-9.62 23.52-9.62s14.38 2.75 23.38 9.625C323.6 290.5 341.5 304 373.5 304s50-13.5 61.88-22.38c9.02-6.82 12.72-9.62 23.52-9.62 10.62 0 14.25 2.75 23.38 9.625C493.1 290.5 512 304 544 304c17.62 0 32-14.38 32-32s-14.4-32-32-32zm-337.7-88.9-16 32c-9.4 18.9-38.2 4-28.6-14.2l16-32c9.5-19.8 38.1-4.6 28.6 14.2zM304 176c0 21.12-32 21.12-32 0v-32c0-21.12 32-21.12 32 0v32zm81.7 7.1-16-32c-9.5-18.88 19.19-33.14 28.56-14.27l16 32C423.9 187.9 395.1 202 385.7 183.1z"
    />
    <path
      d="m528.5 302.4-41.28 123.7C483 439.1 470.8 448 457 448H119.1c-13.88 0-25.1-8.875-30.37-21.88L47.47 302.4c22.32-3.504 36.66-13.48 46.4-20.76C103 274.8 106.8 272 117.5 272c10.62 0 14.38 2.75 23.5 9.625C152.9 290.5 170.9 304 202.9 304s50-13.5 61.88-22.38c9.02-6.82 12.82-9.62 23.52-9.62s14.38 2.75 23.38 9.625C323.6 290.5 341.5 304 373.5 304s50-13.5 61.88-22.38c9.02-6.82 12.72-9.62 23.52-9.62 10.62 0 14.25 2.75 23.38 9.625C491.9 288.9 506.2 298.9 528.5 302.4z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgPie;
