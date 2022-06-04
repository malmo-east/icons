import * as React from "react";
import { SVGProps } from "react";

const SvgCommentSmile = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path
      className="comment-smile_svg__fa-primary"
      d="M319.1 208c17.75 0 31.99-14.25 31.99-32s-14.25-32-31.1-32-31.1 14.25-31.1 32 13.31 32 30.21 32zm40.4 61.5c-9.998-8.625-25.12-7.375-33.74 2.75C308.5 292.4 283.1 304 255.1 304c-27.12 0-52.49-11.62-69.74-31.75-7.76-10.15-22.96-11.25-32.96-2.75-10.2 8.6-11.2 23.8-2.7 33.8 26.5 31 65.2 48.7 105.4 48.7 41.12 0 79.73-17.75 106.2-48.75 9.4-9.95 8.3-25.15-1.8-33.75zM191.1 208c17.75 0 31.99-14.25 31.99-32s-14.25-32-31.1-32-31.1 14.25-31.1 32 13.31 32 30.21 32z"
    />
    <path
      d="M256 32C114.6 32 .027 125.1.027 240c0 49.63 21.35 94.98 56.97 130.7C44.5 421.1 2.73 466 2.23 466.5c-2.25 2.25-2.875 5.734-1.5 8.734C1.979 478.2 4.75 480 8 480c66.25 0 115.1-31.76 140.6-51.39C181.2 440.9 217.6 448 256 448c141.4 0 256-93.1 256-208S397.4 32 256 32zm63.1 112c17.75 0 31.1 14.25 31.1 32s-14.24 32-31.99 32-32-14.25-32-32 15.99-32 32.89-32zm-128 0c17.75 0 31.1 14.25 31.1 32s-14.24 32-31.99 32-32-14.25-32-32 15.99-32 32.89-32zm171.1 159.3c-26.5 31-65.1 48.7-107.1 48.7-41.12 0-79.75-17.75-106.2-48.75-8.5-10-7.5-25.12 2.625-33.75 10.875-8.5 26.075-7.4 34.675 2.8 17.3 20.1 42.7 31.7 68.9 31.7 27.12 0 52.49-11.62 69.74-31.75 8.623-10.12 23.75-11.38 33.74-2.75 11.02 8.6 12.12 23.8 3.62 33.8z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgCommentSmile;
