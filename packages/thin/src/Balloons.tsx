import * as React from "react";
import { SVGProps } from "react";

const SvgBalloons = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" {...props}>
    <path d="M152 64c-48.5 0-88 39.5-88 88 0 4.4 3.59 8 8 8s8-3.6 8-8c0-39.69 32.31-72 72-72 4.4 0 8-3.59 8-8s-3.6-8-8-8zm168 102.3C320 74.59 248.2 0 160 0S0 74.59 0 166.3c0 73.25 77.47 170.8 124.1 205.5l-26.13 53.7c-2.656 4.719-2.625 10.56.125 15.22C100.8 445.3 105.4 448 110.6 448h98.75c5.188 0 9.875-2.719 12.53-7.281 2.75-4.656 2.781-10.5.344-14.78l-26.34-54.16C242.5 337.1 320 239.5 320 166.3zM209.4 432l-97.25.938 26.65-54.76c.123.005.193.132.318.132h41.81c.168 0 .268-.17.434-.18L209.4 432zm-28.1-69.5c-.135-.008-.215-.146-.352-.146H139.1c-.137 0-.217.138-.352.146C94.76 333.3 16 234.8 16 166.3 16 83.41 80.59 16 160 16s144 67.41 144 150.3c0 68.5-78.8 167-122.7 196.2zM400 216c0-39.69 32.31-72 72-72 4.4 0 8-3.6 8-8s-3.6-8-8-8c-48.5 0-88 39.5-88 88 0 4.4 3.6 8 8 8s8-3.6 8-8zm115.9 219.8C562.5 401.1 640 303.5 640 230.3 640 138.6 568.2 64 480 64c-36.78 0-72.69 13.31-101.2 37.47-3.344 2.844-3.781 7.906-.906 11.28 2.844 3.375 7.969 3.781 11.28.906C414.8 91.97 447 80 480 80c79.41 0 144 67.41 144 150.3 0 68.55-78.76 167-122.7 196.2-.135-.008-.215-.146-.352-.146h-41.81c-.12 0-.19.123-.308.128-29.71-19.71-84.91-80.08-110.2-141.5-1.72-4.062-6.47-6.03-10.47-4.344-4.062 1.688-6.031 6.375-4.344 10.47 25.28 61.28 77.41 120.2 110.3 144.7l-26.12 53.72c-2.656 4.72-2.625 10.56.125 15.22C420.8 509.3 425.4 512 430.6 512h98.75c5.188 0 9.875-2.719 12.53-7.281 2.75-4.656 2.781-10.5.344-14.78L515.9 435.8zm-83.8 61.1 26.65-54.76c.123.006.193.133.318.133h41.81c.168 0 .268-.17.434-.18L529.4 496l-97.3.9z" />
  </svg>
);

export default SvgBalloons;