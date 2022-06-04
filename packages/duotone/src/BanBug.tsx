import * as React from "react";
import { SVGProps } from "react";

const SvgBanBug = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path
      className="ban-bug_svg__fa-primary"
      d="M512 256c0 141.4-114.6 256-256 256S0 397.4 0 256 114.6 0 256 0s256 114.6 256 256zM99.5 144.8C77.15 176.1 64 214.5 64 256c0 106 85.1 192 192 192 41.5 0 79.9-13.1 111.2-35.5L99.5 144.8zM448 256c0-106.9-86-192-192-192-41.5 0-79.9 13.15-111.2 35.5l267.7 267.7C434.9 335.9 448 297.5 448 256z"
    />
    <path
      d="M206.4 161.2c13.7-10.8 30.9-17.2 48.7-17.2 20.7 0 38.8 7.2 52.7 19l28-16.7c7.5-4.6 17.4-2.1 21.9 5.5 4.6 7.5 2.1 17.4-5.5 21.9l-24.5 14.7c3.9 8 6.6 16.7 7.7 25.8l29.5-5.9c8.6-1.7 16.2 3.9 18.8 12.6 1.7 8.6-3.9 16.2-12.6 18.8l-35.1 7v18.6l35.1 7c8.7 1.7 14.3 10.2 12.6 18.8-2.6 8.7-10.2 14.3-18.8 12.6l-20.8-4-137.7-138.5zm99.2 189.6c-13.7 10.8-30.9 17.2-50.5 17.2-18.9 0-37-7.2-50.9-19.9l-28 17.6c-7.5 4.6-17.4 2.1-21.9-5.5-4.6-7.5-2.1-17.4 5.5-21.9l24.5-14.7c-3.9-8-6.6-17.5-7.7-25.8l-29.5 5.9c-8.6 1.7-17.1-3.9-18.8-12.6-1.7-8.6 3.9-17.1 12.6-18.8l34.2-7V224c0-.9.9-1.8.9-2.7l129.6 129.5z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgBanBug;