import * as React from "react";
import { SVGProps } from "react";

const SvgChessKnightPiece = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" {...props}>
    <path d="M311.1 459.6 288 448v-16c0-8.875-7.125-16-16-16H48c-8.88 0-16 7.1-16 16v16L8.88 459.62C3.375 462.2 0 467.9 0 473.9V496c0 8.9 7.125 16 16 16h288c8.875 0 16-7.125 16-16v-22.12c0-5.98-3.4-11.68-8.9-14.28zM45.5 235.5l28.88 12.88a22.87 22.87 0 0 0 9.286 1.974c2.842 0 5.674-.533 8.339-1.599l9.125-3.625c6.5-2.625 11.38-8 13.38-14.62L121 208.6c1.25-4.875 4.5-9 8.875-11.25L144.1 192v37.25c0 11.25-6.625 21.5-16.88 26L80.62 279c-23.33 11.9-35.9 35.1-35.9 58.7 0 16.5 6.22 33.2 19.28 46.3h192c7-7.875 15.96-18.25 15.96-32l.04-148.9C272 126.6 209.4 64 132.9 64H40.5c-4.75 0-8.5 3.88-8.5 8.5 0 2 .375 3.75 1.25 5.5l10.13 20.25L37 104.6c-3.25 3.3-5 7.6-5 12.2v97.87c0 8.93 5.25 17.23 13.5 20.83zM80.12 128c8.801 0 15.99 7.243 15.99 15.99 0 11.29-9.794 15.99-15.97 15.99-8.672 0-16.02-6.871-16.02-15.98 0-8.9 7.13-16 16-16z" />
  </svg>
);

export default SvgChessKnightPiece;
