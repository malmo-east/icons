import * as React from "react";
import { SVGProps } from "react";

const SvgScarf = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path
      className="scarf_svg__fa-primary"
      d="M214.3 100.9c36.88-8.624 68-3.625 84.38.25l-19.5 19.37 109.8 109.6c46.63-51.75 20.38-105.4 13.25-117.4l-43.67-73.43c-4.25-7.124-9.917-13.25-16.79-17.1-40.63-27.5-127.4-29.58-171.4.167-6.875 4.75-12.5 10.75-16.75 17.1l-43.63 73.12C108.4 115.1 72.75 174.8 121.4 228.4l157.8 163.2 113-112.1-177.9-178.6z"
    />
    <path
      d="M166 323.8 47.6 441.9c-3.125 3.125-3.125 8.249 0 11.37l11.25 11.25c3.125 3.125 8.25 3.125 11.38 0l118.4-118.2L166 323.8zm-45.2-45.2L2.3 396.7c-2.1 3-2.1 8.125 0 11.25l11.38 11.25a7.922 7.922 0 0 0 11.25 0l118.4-118.1-22.53-22.5zM92.88 487.1a7.922 7.922 0 0 0 0 11.25l11.38 11.37c3 3 8.125 3 11.25 0l118.4-118.2-22.63-22.62-118.4 118.2zM301.8 368.9l-22.54 22.71 117.4 117.2c3.125 3 8.124 3 11.25 0l11.38-11.37c3-3.125 3-8.125 0-11.25L301.8 368.9zm208 26.9L392.3 278.7l-22.5 22.62 117.3 116.1c3.125 3.123 8.25 3.123 11.25 0l11.38-11.25c3.07-2.27 3.07-7.27.07-10.37zm-162.8-72-22.63 22.5 117.4 117.2c3.125 3.125 8.25 3.125 11.38 0l11.25-11.25c3.125-3.125 3.125-8.249 0-11.37L347 323.8z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgScarf;