import * as React from "react";
import { SVGProps } from "react";

const SvgGuitars = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path
      className="guitars_svg__fa-primary"
      d="M145.3 0h-34.5C96.22 0 84.3 11.83 84.3 26.41V80.5c0 4.439 1.114 8.976 3.098 12.95l16.66 33.3.042 97.25c0 8.836 7.164 16 16 16h16c8.836 0 16-7.164 16-16l-.1-97.3 16.59-33.19c2.059-4.117 3.033-8.461 3.033-13.06V26.37C171.6 11.81 159.8 0 145.3 0zm212.8 151v91.63l48 .625V73.38c1.75-1.125 3.5-2.375 5.125-3.75 14.75-14.88 16-38.5 2.625-54.75-13.25-16.12-36.63-19.62-54.13-8-16.38 11.13-14 13.25-31.88 96.25-1.875 9 .875 18.38 7.375 25L358.1 151zm65 217H344c-4.375 0-7.1 3.625-7.1 8v16c0 4.375 3.625 8 7.1 8h79.1c4.375 0 7.1-3.625 7.1-8v-16c.9-4.4-1.8-8-7.1-8zm0-64.1H344c-4.375 0-7.1 3.625-7.1 8v16c0 4.375 3.625 8 7.1 8h79.1c4.375 0 7.1-3.625 7.1-8v-16c.9-4.4-1.8-8-7.1-8z"
    />
    <path
      d="m505.5 400.9-26.1-73.5c-6.625-18.25-5.75-38.25 2.625-55.75 4.625-9.75 6.1-20.25 6.1-30.1V212.4c0-8.625-5.875-15.1-14.12-17.1s-16.87 1.875-20.75 9.5l-10.62 20.5c-5.373 10.38-15.37 17-26.62 19l-64.915-1.8c-11.25-3-20.87-11-24.1-22.38l-12.1-35.75c-2.875-7.875-11.12-12.63-19.5-11.13-8.375 1.375-14.37 8.625-14.37 17.13v50.43c0 10.75 2.375 21.25 6.1 30.87 8.25 17.5 9.125 37.63 2.5 55.88l-26.1 73.5C239.1 453.5 278.5 512 335.7 512h96.37c57.33-.9 95.03-58.6 73.43-111.1zm-74.4-8.9c0 4.375-3.625 8-7.1 8h-79.1c-4.375 0-7.1-3.625-7.1-8v-16c0-4.375 3.625-8 7.1-8H424c4.375 0 7.1 3.625 7.1 8v16zm0-64.1c0 4.375-3.625 8-7.1 8h-79.1c-4.375 0-7.1-3.625-7.1-8v-16c0-4.375 3.625-8 7.1-8H424c4.375 0 7.1 3.625 7.1 8v16zm-201.8-27.7c5.5-10.62 8.333-22.37 8.458-34.25 0-29.13-16.1-54.92-43.25-71.17C181.8 186.8 166.1 182.9 152 181l.1 43c0 8.837-7.163 16-16 16h-16c-8.837 0-16-7.163-16-16l-.1-43.9c-15 1.875-29.77 5.875-42.65 13.88-6.72 4.12-12.85 9.92-18.47 15.52-15.37 15.38-24.62 34.1-24.62 56.62 0 11.88 2.875 23.62 8.375 34.12 7.998 15.62 5.998 35.62-4.875 48.75C8.14 365.49-.11 385.36.01 406.09c-.125 58 57.37 105 127.1 105 41.76 0 78.86-16.46 102.3-41.9l.119-.603c-9.251-26.12-8.375-54.75 2.375-80.37l10.25-27.75c-2.625-4.25-5.625-8.5-8.75-12.38C223.2 335.9 221.3 315.9 229.3 300.2zm-73.1 32.1c-15.62 15.62-40.87 15.62-56.5 0s-15.62-40.88 0-56.5 40.87-15.62 56.5 0c15.7 15.6 15.7 40.8 0 56.5z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgGuitars;
