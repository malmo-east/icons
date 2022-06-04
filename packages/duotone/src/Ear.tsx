import * as React from "react";
import { SVGProps } from "react";

const SvgEar = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" {...props}>
    <path
      className="ear_svg__fa-primary"
      d="M200 80h-16c-57.3 0-104 46.7-104 104v47.97c0 9.9 5.934 18.65 15.12 22.28l28.98 11.58c3.857 1.547 4.746 4.91 4.949 6.283.203 1.367.324 4.826-2.916 7.418L89 309.2c-10.32 8.285-12 23.42-3.756 33.74C89.81 348.6 96.88 352 104.2 352c5.35 0 10.47-1.818 14.81-5.262l37.15-29.71c15.73-12.59 23.36-32 20.4-51.92C173.6 245.2 160.6 228.8 141.9 221.3l-13.9-5.6V184c0-30.9 25.1-56 56-56h16c30.9 0 56 25.1 56 56 0 13.23 10.77 24 24 24s24-10.77 24-24c0-57.3-46.7-104-104-104zm-95.8 264c-.41 0-.754-.242-1.158-.273 1.154.09 2.32.062 3.502-.12-.844.093-1.644.393-2.344.393z"
    />
    <path
      d="M192 0C86 0 0 86 0 192v176c0 79.5 64.5 144 144 144s144-64.5 144-144v-9.875C345.4 324.9 384 263 384 192 384 86 298 0 192 0zm88 208c-13.2 0-24-10.8-24-24 0-30.9-25.1-56-56-56h-16c-30.9 0-56 25.1-56 56v31.72l13.92 5.576c18.73 7.477 31.67 23.86 34.6 43.82 2.955 19.92-4.672 39.33-20.4 51.92l-37.15 29.71C114.6 350.2 109.5 352 104.2 352c-7.287 0-14.35-3.367-18.92-9.035C77 332.6 78.68 317.5 89 309.2l37.12-29.69c3.24-2.592 3.119-6.051 2.916-7.418-.236-1.392-1.936-4.692-4.936-6.292l-28.98-11.5C85.93 250.6 80 241.9 80 231.1V184c0-57.35 46.65-104 104-104h16c57.35 0 104 46.65 104 104 0 13.2-10.8 24-24 24z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgEar;
