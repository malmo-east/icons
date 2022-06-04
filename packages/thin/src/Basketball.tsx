import * as React from "react";
import { SVGProps } from "react";

const SvgBasketball = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256 256-114.6 256-256S397.4 0 256 0zm239.1 274.3c-8.5-1.1-17-2.3-25.6-2.3-51.59 0-98.47 20.04-133.7 52.53L267.3 256 431 92.3c40.2 42.9 65 100.4 65 163.7 0 6.2-.5 12.2-.9 18.3zM288 469.5c0-47.17 18.24-90.06 47.84-122.4l83.86 83.86c-35.04 32.8-79.82 55.13-129.5 62.27-1.1-7.83-2.2-15.73-2.2-23.73zm59.2-133.7c32.3-29.6 75.2-47.8 122.3-47.8 7.965 0 15.86 1.123 23.75 2.156-7.135 49.73-29.47 94.5-62.27 129.5L347.2 335.8zm72.5-254.81L256 244.7l-68.5-68.5C219.1 140.9 240 94.05 240 42.47c0-8.559-1.217-17.05-2.312-25.54C243.8 16.47 249.8 16 256 16c63.3 0 120.8 24.81 163.7 64.99zM164.8 176.2C132.5 205.8 89.64 224 42.47 224c-7.97 0-15.86-1.1-23.75-2.2 7.135-49.73 29.47-94.5 62.27-129.5l83.81 83.9zM92.3 80.99c35.04-32.8 79.82-55.13 129.5-62.27 1.1 7.89 2.2 15.78 2.2 23.75 0 47.17-18.24 90.06-47.84 122.4L92.3 80.99zM16.93 237.7c8.48 1.1 16.98 2.3 25.54 2.3 51.59 0 98.47-20.04 133.7-52.53L244.7 256 81 419.7C40.81 376.8 16 319.3 16 256c0-6.2.47-12.2.93-18.3zM92.3 431 256 267.3l68.53 68.53C292 371.1 272 417.9 272 469.5c0 8.559 1.217 17.05 2.312 25.54-6.112.46-12.112.96-18.312.96-63.3 0-120.8-24.8-163.7-65z" />
  </svg>
);

export default SvgBasketball;