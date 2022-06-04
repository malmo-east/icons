import * as React from "react";
import { SVGProps } from "react";

const SvgTowerCell = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" {...props}>
    <path d="M51.82 1.612C64.19 6.377 70.35 20.27 65.58 32.64 54.26 62.03 48 94.21 48 128c0 33.8 6.26 65.1 17.58 95.4 4.77 12.3-1.39 26.2-13.76 31-12.37 4.8-26.26-1.4-31.02-13.8C7.37 205.8 0 167.8 0 128 0 88.25 7.37 50.22 20.8 15.38 25.56 3.009 39.45-3.154 51.82 1.612zm472.38 0c12.4-4.766 26.2 1.397 31 13.768C568.6 50.22 576 88.25 576 128c0 39.8-7.4 77.8-20.8 112.6-4.8 12.4-18.6 18.6-31 13.8-12.4-4.8-18.6-18.7-13.8-31 11.3-30.3 17.6-61.6 17.6-95.4 0-33.79-6.3-65.97-17.6-95.36-4.8-12.37 1.4-26.263 13.8-31.028zM172.6 432l-30.9 66.2c-5.6 12-19.8 17.2-31.8 11.6-12.06-5.7-17.25-19.9-11.65-31.9L241.2 171.6C230.5 160.2 224 144.9 224 128c0-35.35 28.7-64 64-64s64 28.65 64 64c0 16.9-6.5 32.2-17.2 43.6l142.9 306.3c5.7 12 .5 26.2-11.5 31.9-12.1 5.6-26.3.4-31.9-11.6L403.4 432H172.6zm118.7-240.1c-1.1-.8-2.2.1-3.3.1-1.1 0-2.2-.9-3.3-.1L239.8 288h96.4l-44.9-96.1zM380.1 384l-21.5-48H217.4L195 384h185.1zM152 128c0 19.4 4 37.8 11.3 54.4 5.3 12.1-.2 26.3-12.4 30.7-12.1 6.2-26.3.7-31.6-11.5C109.5 179 104 154.1 104 128c0-26.1 5.5-51.04 15.3-73.61 5.3-12.14 19.5-17.69 31.6-12.38 12.2 5.3 17.7 19.45 12.4 31.6C156 90.23 152 108.6 152 128zm320 0c0 26.1-5.5 51-15.3 73.6-5.3 12.2-19.5 17.7-31.6 11.5-12.2-4.4-17.7-18.6-12.4-30.7 6.4-16.6 11.3-35 11.3-54.4s-4.9-37.76-11.3-54.39c-5.3-12.15.2-26.29 12.4-31.6 12.1-5.31 26.3.24 31.6 12.38A184.59 184.59 0 0 1 472 128z" />
  </svg>
);

export default SvgTowerCell;