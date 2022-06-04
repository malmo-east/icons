import * as React from "react";
import { SVGProps } from "react";

const SvgWatchFitness = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" {...props}>
    <path d="m288.7 261.9-80 77.1c-9.3 9-24.1 9-33.4 0l-80-77.1c-23.4-22.6-23.4-60.1 0-82.6 22.2-21.4 57.4-21.4 79.6 0l17.1 16.4 17.1-16.4c22.2-21.4 57.4-21.4 79.6 0 23.4 22.5 23.4 60 0 82.6zM192 217.1l-28.2-26.3c-16-15.5-41.4-15.5-57.4 0-16.87 16.3-16.87 43.3 0 59.5l80 77.2c3.1 3 8.1 3 11.2 0l80-77.2c16.9-16.2 16.9-43.2 0-59.5-16-15.5-41.4-15.5-57.4 0L192 217.1zM64 65.6V40c0-22.09 17.91-40 40-40h176c22.1 0 40 17.91 40 40v25.6c36.5 7.41 64 39.7 64 78.4v224c0 38.7-27.5 70.1-64 78.4V472c0 22.1-17.9 40-40 40H104c-22.09 0-40-17.9-40-40v-25.6C27.48 438.1 0 406.7 0 368V144c0-38.7 27.48-70.99 64-78.4zM80 64h224V40c0-13.25-10.7-24-24-24H104c-13.25 0-24 10.75-24 24v24zm24 432h176c13.3 0 24-10.7 24-24v-24H80v24c0 13.3 10.75 24 24 24zm264-128V144c0-35.3-28.7-64-64-64H80c-35.35 0-64 28.7-64 64v224c0 35.3 28.62 63.1 63.94 64H304c35.3 0 64-28.7 64-64z" />
  </svg>
);

export default SvgWatchFitness;